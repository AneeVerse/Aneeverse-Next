import { client } from '@/lib/sanity';
import { blockContentToHtml } from '@/lib/sanity-utils';
import { notFound } from 'next/navigation';
import BlogDetailClient from './BlogDetailClient';
import BlogCategoryClient from './BlogCategoryClient';

export const revalidate = 1; // Revalidate this page every 60 seconds (Incremental Static Regeneration)

// Check if slug is a category by querying Sanity for available categories
async function isCategory(slug) {
  try {
    console.log('Checking if slug is category:', slug);
    
    // First check if category exists by slug (most accurate)
    const categoryBySlugQuery = `*[_type == "category" && slug.current == $slug][0] {
      title,
      slug
    }`;
    
    const categoryBySlug = await client.fetch(categoryBySlugQuery, { slug });
    console.log('Category found by slug:', categoryBySlug);
    
    if (categoryBySlug) {
      return true;
    }
    
    // Check by converting slug to title format (fallback)
    const titleFromSlug = slug.toLowerCase().replace(/-/g, " ");
    const categoryByTitleQuery = `*[_type == "category" && lower(title) == $titleFromSlug][0] {
      title
    }`;
    
    const categoryByTitle = await client.fetch(categoryByTitleQuery, { titleFromSlug });
    console.log('Category found by title:', categoryByTitle);
    
    if (categoryByTitle) {
      return true;
    }
    
    // Check if any posts have a category matching this slug
    const postsQuery = `*[_type == "post" && defined(categories)] {
      "categories": categories[]->{title, slug}
    }`;
    
    const posts = await client.fetch(postsQuery);
    console.log('Posts with categories:', posts.length);
    
    // Check if any post has a category that matches our search
    const hasMatchingCategory = posts.some(post => {
      if (!post.categories || !Array.isArray(post.categories)) return false;
      
      return post.categories.some(cat => {
        if (!cat) return false;
        
        // Check slug match
        if (cat.slug?.current === slug) return true;
        
        // Check title match (convert to slug format)
        if (cat.title) {
          const catSlug = cat.title.toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[&]/g, '-')
            .replace(/[^a-z0-9-]/g, '')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
          
          if (catSlug === slug) return true;
          
          // Also check direct title match with space conversion
          const titleMatch = cat.title.toLowerCase().replace(/\s+/g, ' ').trim();
          const slugAsTitle = slug.toLowerCase().replace(/-/g, ' ').trim();
          if (titleMatch === slugAsTitle) return true;
        }
        
        return false;
      });
    });
    
    console.log('Has matching category in posts:', hasMatchingCategory);
    return hasMatchingCategory;
  } catch (error) {
    console.error('Error checking if slug is category:', error);
    return false;
  }
}

// Get all available categories from Sanity for static generation
async function getAllCategories() {
  try {
    // Get categories from the category collection
    const categoriesQuery = `*[_type == "category"] {
      title,
      "slug": slug.current
    }`;
    
    const categories = await client.fetch(categoriesQuery);
    console.log('Categories from Sanity:', categories);
    
    const categorySlugs = categories.map(cat => cat.slug).filter(Boolean);
    
    // Also get unique categories from posts (fallback)
    const postsQuery = `*[_type == "post" && defined(categories)] {
      "categories": categories[]->{title, "slug": slug.current}
    }`;
    
    const posts = await client.fetch(postsQuery);
    const postCategorySlugs = new Set();
    
    posts.forEach(post => {
      if (post.categories) {
        post.categories.forEach(cat => {
          if (cat?.slug) {
            postCategorySlugs.add(cat.slug);
          } else if (cat?.title) {
            // Generate slug from title if slug is missing
            const generatedSlug = cat.title.toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[&]/g, '-')
              .replace(/[^a-z0-9-]/g, '')
              .replace(/-+/g, '-')
              .replace(/^-|-$/g, '');
            if (generatedSlug) postCategorySlugs.add(generatedSlug);
          }
        });
      }
    });
    
    // Combine both sources
    const allSlugs = [...new Set([...categorySlugs, ...Array.from(postCategorySlugs)])];
    console.log('All category slugs:', allSlugs);
    
    return allSlugs;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Generate static params for all blog posts and categories
export async function generateStaticParams() {
  try {
    const posts = await client.fetch(`*[_type == "post" && defined(slug.current)] {
      "slug": slug.current
    }`);
    
    console.log(`Generated static params for ${posts.length} blog posts`);
    
    // Include both blog posts and categories
    const blogParams = posts.map((post) => ({
      slug: post.slug,
    }));
    
    // Get categories dynamically from Sanity
    const dynamicCategories = await getAllCategories();
    const categoryParams = dynamicCategories.map((category) => ({
      slug: category,
    }));
    
    console.log(`Generated static params for ${dynamicCategories.length} categories`);
    
    return [...blogParams, ...categoryParams];
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
        ogLocaleAlternate,
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
  
  // Check if this is a category
  if (await isCategory(resolvedParams.slug)) {
    // Get category info from Sanity
    try {
      // First try to find by slug
      let categoryInfo = await client.fetch(`*[_type == "category" && slug.current == $slug][0] {
        title,
        description
      }`, { slug: resolvedParams.slug });
      
      // If not found by slug, try by title
      if (!categoryInfo) {
        const titleFromSlug = resolvedParams.slug.toLowerCase().replace(/-/g, " ");
        categoryInfo = await client.fetch(`*[_type == "category" && lower(title) == $titleFromSlug][0] {
          title,
          description
        }`, { titleFromSlug });
      }
      
      const title = categoryInfo?.title || resolvedParams.slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
      const description = categoryInfo?.description || `Discover our latest articles about ${title}.`;
      
      return {
        title: `${title} Blogs | Aneeverse`,
        description: description,
        openGraph: {
          title: `${title} Blogs`,
          description: description,
          type: 'website'
        }
      };
    } catch (error) {
      console.error('Error fetching category metadata:', error);
      const fallbackTitle = resolvedParams.slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
      return {
        title: `${fallbackTitle} Blogs | Aneeverse`,
        description: `Discover our latest articles about ${fallbackTitle}.`,
        openGraph: {
          title: `${fallbackTitle} Blogs`,
          description: `Discover our latest articles about ${fallbackTitle}.`,
          type: 'website'
        }
      };
    }
  }
  
  // Handle blog post metadata
  const post = await getServerBlogPost(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog post could not be found.'
    };
  }
  
  const seo = post.seo || {};
  
  // ✅ Fix og:locale:alternate - ensure it's always an array and excludes current locale
  const ogLocale = seo.ogLocale || 'en_US';
  const defaultAlternateLocales = [
    "en_US", "en_GB", "fr_FR", "de_DE", "es_ES", "it_IT", "pt_PT", "ru_RU", "zh_CN", "ja_JP", "ko_KR", "hi_IN"
  ];
  
  let alternateLocales = [];
  if (seo.ogLocaleAlternate && Array.isArray(seo.ogLocaleAlternate) && seo.ogLocaleAlternate.length > 0) {
    alternateLocales = seo.ogLocaleAlternate;
  } else {
    alternateLocales = defaultAlternateLocales;
  }
  
  // Remove the current locale from alternates to avoid duplication
  const ogLocaleAlternate = alternateLocales.filter(locale => locale !== ogLocale);
  
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
      locale: ogLocale,
      alternateLocale: ogLocaleAlternate, // ✅ Now includes og:locale:alternate tags
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
  
  // Check if this is a category page
  if (await isCategory(resolvedParams.slug)) {
    return <BlogCategoryClient category={resolvedParams.slug} />;
  }
  
  // Handle blog post
  // Fetch data server-side for SEO
  const initialPost = await getServerBlogPost(resolvedParams.slug);
  
  // If no post found, return 404
  if (!initialPost) {
    notFound();
  }
  
  // Pass initial data to client component
  return <BlogDetailClient params={resolvedParams} initialPost={initialPost} />;
}
  