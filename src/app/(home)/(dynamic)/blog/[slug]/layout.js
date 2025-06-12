import { blogs } from "@/data/blogData";

// ✅ Fetch blog post by slug
const getBlogPost = (slug) => blogs.find((blog) => blog.slug === slug);

// ✅ Generate Dynamic Metadata
export async function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) return { title: "Blog | Aneeverse", description: "This blog post does not exist." };

  // Use SEO fields if available, otherwise fall back to default values
  const metaTitle = post.seo?.metaTitle || post.title;
  const metaDescription = post.seo?.metaDescription || post.shortDescription;
  
  // Open Graph
  const ogTitle = post.seo?.ogTitle || metaTitle;
  const ogDescription = post.seo?.ogDescription || metaDescription;
  const ogImage = post.seo?.ogImage?.asset?.url || post.thumbnail;
  const ogUrl = post.seo?.ogUrl || `https://aneeverse.com/blog/${post.slug}`;
  const ogType = post.seo?.ogType || 'article';
  const ogLocale = post.seo?.ogLocale || 'en_US';
  const ogSiteName = post.seo?.ogSiteName || 'Aneeverse';
  
  // Twitter
  const twitterCard = post.seo?.twitterCard || 'summary_large_image';
  const twitterTitle = post.seo?.twitterTitle || ogTitle;
  const twitterDescription = post.seo?.twitterDescription || ogDescription;
  const twitterImage = post.seo?.twitterImage?.asset?.url || ogImage;
  
  // Other SEO
  const keywords = post.seo?.keywords || [];
  const canonicalUrl = post.seo?.canonicalUrl || ogUrl;
  const publishedTime = post.seo?.articlePublishedTime || post.date;
  
  const metadata = {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords.join(', '),
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: ogUrl,
      siteName: ogSiteName,
      locale: ogLocale,
      type: ogType,
      images: [
        {
          url: ogImage,
          width: post.seo?.ogImageWidth || 1200,
          height: post.seo?.ogImageHeight || 630,
          alt: post.title,
          type: post.seo?.ogImageType || 'image/jpeg',
        },
      ],
      article: {
        publishedTime: publishedTime,
        modifiedTime: post.seo?.articleModifiedTime,
        authors: [post.author.name],
      },
    },
    twitter: {
      card: twitterCard,
      title: twitterTitle,
      description: twitterDescription,
      images: [twitterImage],
      creator: post.seo?.twitterAuthor || post.author.name,
    },
    authors: [{ name: post.author.name }],
    other: {
      'twitter:label1': post.seo?.twitterLabel1 || 'Written by',
      'twitter:data1': post.seo?.twitterData1 || post.author.name,
      'twitter:label2': post.seo?.twitterLabel2 || 'Est. reading time',
      'twitter:data2': post.seo?.twitterData2 || `${post.timeToRead} minutes`,
      'msapplication-TileImage': post.seo?.msapplicationTileImage || '',
    }
  };
  
  // Add canonical URL if specified
  if (post.seo?.canonicalUrl) {
    metadata.alternates = {
      canonical: post.seo.canonicalUrl,
    };
  }
  
  // Add robots tag if noIndex is true
  if (post.seo?.noIndex) {
    metadata.robots = {
      index: false,
      follow: true,
    };
  }
  
  return metadata;
}

// ✅ Layout Wrapper for Blog Post
export default function BlogLayout({ children }) {
  return <>{children}</>;
}
