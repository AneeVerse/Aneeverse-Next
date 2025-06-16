import { client } from '@/lib/sanity';

// ✅ Generate Dynamic Metadata
export async function generateMetadata({ params }) {
  // Normalize slug (use last part for blog slug)
  const slugParts = Array.isArray(params.slug) ? params.slug : [params.slug];
  const slug = slugParts.pop();
  // Fetch post data from Sanity
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title, slug, "thumbnail": mainImage.asset->url, shortDescription, publishedAt as date,
    timeToRead, author->{name}, seo{metaTitle,metaDescription,ogTitle,ogDescription,ogUrl,ogType,ogLocale,ogSiteName,
      ogImage{asset->{url},alt},ogImageWidth,ogImageHeight,ogImageType,articlePublishedTime,articleModifiedTime,
      twitterCard,twitterTitle,twitterDescription,twitterImage{asset->{url},alt},twitterAuthor,
      twitterLabel1,twitterData1,twitterLabel2,twitterData2,keywords,canonicalUrl,noIndex,msapplicationTileImage}
  }`;
  const post = await client.fetch(query, { slug });
  if (!post) return { title: "Blog | Aneeverse", description: "This blog post does not exist." };

  // Use SEO fields if available, otherwise fall back to default values
  const metaTitle = post.seo?.metaTitle || post.title;
  const metaDescription = post.seo?.metaDescription || post.shortDescription;
  
  // Open Graph
  const ogTitle = post.seo?.ogTitle || metaTitle;
  const ogDescription = post.seo?.ogDescription || metaDescription;
  const ogUrl = post.seo?.ogUrl || `https://aneeverse.com/blog/${post.slug}`;
  const ogType = post.seo?.ogType || 'article';
  const ogLocale = post.seo?.ogLocale || 'en_US';
  const ogLocaleAlternate = post.seo?.ogLocaleAlternate || [];
  const ogSiteName = post.seo?.ogSiteName || 'Aneeverse';
  
  // Twitter
  const twitterCard = post.seo?.twitterCard || 'summary_large_image';
  const twitterTitle = post.seo?.twitterTitle || ogTitle;
  const twitterDescription = post.seo?.twitterDescription || ogDescription;
  const twitterImage = post.thumbnail; // Use thumbnail for Twitter image
  
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
      alternateLocale: ogLocaleAlternate,
      type: ogType,
      images: [
        {
          url: post.thumbnail, // Use post thumbnail directly
          width: 1200,
          height: 630,
          alt: post.title,
          type: post.seo?.ogImageType || 'image/webp',
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
    }
  };
  
  // Add canonical URL if specified
  if (canonicalUrl) {
    metadata.alternates = {
      canonical: canonicalUrl,
    };
  }
  
  return metadata;
}

// Add the missing default export function
export default function BlogSlugLayout({ children }) {
  return children;
} 