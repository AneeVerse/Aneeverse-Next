import { client } from '@/lib/sanity';
import { blockContentToHtml } from '@/lib/sanity-utils';
import { notFound } from 'next/navigation';
import BlogDetailClient from './BlogDetailClient';

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const posts = await client.fetch(`*[_type == "post" && defined(slug.current)] {
      "slug": slug.current
    }`);
    
    console.log(`Generated static params for ${posts.length} blog posts`);
    
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for blog posts:', error);
    return [];
  }
}

// Server-side function to fetch blog data for SEO and initial render
async function getServerBlogPost(slug) {
  try {
    console.log('Server: Fetching blog post with slug:', slug);
    
    const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      slug,
      mainImage{
        sanityImage{
          asset->{_id, url},
          alt
        },
        externalImage,
        alt,
        asset->{url}
      },
      body,
      "content": body,
      "date": publishedAt,
      "category": categories[0]->title,
      "timeToRead": timeToRead,
      "shortDescription": shortDescription,
      "description": shortDescription || excerpt,
      "author": {
        "name": author->name,
        "role": author->role,
        "image": author->image.asset->url
      },
      "includeFaq": defined(faqSection),
      "faqSection": faqSection {
        "title": title,
        "questions": questions[] {
          "question": question,
          "answer": answer
        }
      },
      "seo": seo {
        metaTitle,
        metaDescription,
        ogTitle,
        ogDescription,
        ogLocale,
        ogType,
        ogSiteName,
        ogUrl,
        "ogImage": ogImage {
          asset->{
            _id,
            url
          },
          alt
        },
        ogImageWidth,
        ogImageHeight,
        ogImageType,
        articlePublishedTime,
        articleModifiedTime,
        twitterCard,
        twitterTitle,
        twitterDescription,
        "twitterImage": twitterImage {
          asset->{
            _id,
            url
          },
          alt
        },
        twitterAuthor,
        twitterLabel1,
        twitterData1,
        twitterLabel2,
        twitterData2,
        "keywords": keywords,
        canonicalUrl,
        noIndex,
        msapplicationTileImage
      }
    }`;
    
    const blog = await client.fetch(query, { slug });
    
    if (!blog) {
      return null;
    }

    // Process content to ensure proper HTML format
    if (blog.content) {
      // Convert main image (uploaded or external) to HTML if present
      let contentWithMainImage = '';
      
      if (blog.mainImage) {
        // Determine URL and alt text
        const url = blog.mainImage.externalImage
          || blog.mainImage.sanityImage?.asset?.url
          || blog.mainImage.asset?.url;
        const alt = blog.mainImage.alt
          || blog.mainImage.sanityImage?.alt
          || '';
        if (url) {
          const mainImageHtml = `
            <figure class="main-image">
              <img src="${url}" alt="${alt}" class="rounded-lg w-full" />
            </figure>
          `;
          contentWithMainImage += mainImageHtml;
        }
      }
      
      // Handle Portable Text conversion using the imported function
      if (typeof blog.content !== 'string' && Array.isArray(blog.content)) {
        console.log('Server: Converting Portable Text to HTML');
        blog.content = blockContentToHtml(blog.content);
      }
      
      // Fix any text-based bullet points in the HTML
      if (typeof blog.content === 'string') {
        blog.content = fixBulletPoints(blog.content);
      }
      
      // Inject main image HTML at the top if available
      if (contentWithMainImage && typeof blog.content === 'string') {
        console.log('Server: Injecting main image at top of content');
        console.log('Main image HTML:', contentWithMainImage);
        blog.content = contentWithMainImage + blog.content;
      } else {
        console.log('Server: No main image to inject or content is not string');
        console.log('contentWithMainImage:', !!contentWithMainImage);
        console.log('content type:', typeof blog.content);
      }
    }
    
    return blog;
  } catch (error) {
    console.error('Server: Error fetching blog:', error);
    return null;
  }
}

// Fix bullet points function (same as API route)
function fixBulletPoints(html) {
  // Fix text bullets that should be proper list items
  if (typeof html === 'string') {
    // Find Key Takeaways section and convert bullet points to proper lists
    const keyTakeawaysRegex = /<h[23][^>]*>Key Takeaways<\/h[23]>([\s\S]*?)(<h[23]|$)/i;
    const match = html.match(keyTakeawaysRegex);
    
    if (match && match[1]) {
      const takeawaysContent = match[1];
      const bulletRegex = /<p>\s*[•·-]\s*(.*?)<\/p>/g;
      
      if (bulletRegex.test(takeawaysContent)) {
        // Convert bullet paragraphs to a proper list
        const listItems = takeawaysContent.replace(bulletRegex, '<li>$1</li>');
        const properList = `<ul class="list-disc pl-6">${listItems}</ul>`;
        
        // Replace the original content with the proper list
        html = html.replace(match[1], properList);
      }
    }
    
    // Look for any other bullet-like paragraphs and convert them
    html = html.replace(/<p>\s*[•·-]\s*(.*?)<\/p>/g, '<li>$1</li>');
    
    // Wrap consecutive li elements in ul tags if they're not already
    html = html.replace(/(<li>.*?<\/li>)(?:\s*<li>)/g, '$1</ul><ul class="list-disc pl-6"><li>');
    html = html.replace(/(<\/h[23]>)(\s*<li>)/g, '$1<ul class="list-disc pl-6">$2');
    html = html.replace(/(<\/li>)(\s*<h[23])/g, '$1</ul>$2');
    
    // Ensure all li elements are wrapped in ul tags
    if (html.includes('<li>') && !html.includes('<ul')) {
      html = html.replace(/(<li>.*?<\/li>)/g, '<ul class="list-disc pl-6">$1</ul>');
    }
  }
  
  return html;
}

// Generate metadata for SEO (this puts content in HTML head)
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = await getServerBlogPost(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog post could not be found.'
    };
  }
  
  const seo = post.seo || {};
  
  return {
    title: seo.metaTitle || post.title,
    description: seo.metaDescription || post.description || post.shortDescription,
    keywords: seo.keywords || [],
    openGraph: {
      title: seo.ogTitle || post.title,
      description: seo.ogDescription || post.description,
      type: seo.ogType || 'article',
      url: seo.ogUrl,
      siteName: seo.ogSiteName,
      locale: seo.ogLocale || 'en_US',
      images: seo.ogImage ? [{
        url: seo.ogImage.asset?.url,
        width: seo.ogImageWidth,
        height: seo.ogImageHeight,
        type: seo.ogImageType,
        alt: seo.ogImage.alt || post.title
      }] : undefined,
      publishedTime: seo.articlePublishedTime,
      modifiedTime: seo.articleModifiedTime
    },
    twitter: {
      card: seo.twitterCard || 'summary_large_image',
      title: seo.twitterTitle || post.title,
      description: seo.twitterDescription || post.description,
      images: seo.twitterImage ? [seo.twitterImage.asset?.url] : undefined,
      creator: seo.twitterAuthor
    },
    canonical: seo.canonicalUrl,
    robots: {
      index: !seo.noIndex,
      follow: !seo.noIndex
    }
  };
}

// Server component wrapper that provides initial data
export default async function BlogDetail({ params }) {
  const resolvedParams = await params;
  
  // Fetch data server-side for SEO
  const initialPost = await getServerBlogPost(resolvedParams.slug);
  
  // If no post found, return 404
  if (!initialPost) {
    notFound();
  }
  
  // Pass initial data to client component
  return <BlogDetailClient params={resolvedParams} initialPost={initialPost} />;
}
  