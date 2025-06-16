import { client } from '@/lib/sanity';

// ✅ Generate Dynamic Metadata
export async function generateMetadata({ params }) {
  const slugParam = params.slug;
  // Fetch post data from Sanity
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    "thumbnail": coalesce(mainImage.externalImage, mainImage.sanityImage.asset->url, mainImage.asset->url),
    "shortDescription": coalesce(shortDescription, excerpt, ""),
    "date": publishedAt,
    "timeToRead": timeToRead,
    "author": author->{name},
    "seo": {
      metaTitle,
      metaDescription,
      ogTitle,
      ogDescription,
      ogUrl,
      ogType,
      ogLocale,
      ogLocaleAlternate,
      ogSiteName,
      "ogImage": ogImage.asset->url,
      ogImageWidth,
      ogImageHeight,
      ogImageType,
      articlePublishedTime,
      articleModifiedTime,
      twitterCard,
      twitterTitle,
      twitterDescription,
      "twitterImage": twitterImage.asset->url,
      twitterAuthor,
      twitterLabel1,
      twitterData1,
      twitterLabel2,
      twitterData2,
      keywords,
      canonicalUrl,
      noIndex,
      msapplicationTileImage
    }
  }`;
  const post = await client.fetch(query, { slug: slugParam });
  if (!post) {
    return { title: "Blog | Aneeverse", description: "This blog post does not exist." };
  }

  // Helper to truncate description for SEO
  function truncate(str, n) {
    return (str && str.length > n) ? str.slice(0, n - 1) + "…" : str;
  }

  // Basic metadata
  const metaTitle = post.seo?.metaTitle || post.title;
  const metaDescription = truncate(post.shortDescription || post.seo?.metaDescription || "Read this article on Aneeverse.", 155);
  
  // Open Graph
  const ogTitle = metaTitle;
  const ogDescription = truncate(post.shortDescription || post.seo?.ogDescription || metaDescription, 155);
  const ogUrl = post.seo?.ogUrl || `https://aneeverse.com/blog/${post.slug}`;
  const ogType = post.seo?.ogType || 'article';
  const ogLocale = post.seo?.ogLocale || 'en_US';
  const ogLocaleAlternate = (post.seo?.ogLocaleAlternate && post.seo.ogLocaleAlternate.length > 0)
    ? post.seo.ogLocaleAlternate
    : [
        "en_US", "en_GB", "fr_FR", "de_DE", "es_ES", "it_IT", "pt_PT", "ru_RU", "zh_CN", "ja_JP", "ko_KR", "hi_IN"
      ];
  const ogSiteName = post.seo?.ogSiteName || 'Aneeverse';
  const ogImage = post.seo?.ogImage || post.thumbnail;

  // Twitter
  const twitterCard = post.seo?.twitterCard || 'summary_large_image';
  const twitterTitle = post.seo?.twitterTitle || ogTitle;
  const twitterDescription = post.seo?.twitterDescription || ogDescription;
  const twitterImage = post.seo?.twitterImage || ogImage;
  
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
      type: ogType,
      locale: ogLocale,
      alternateLocale: ogLocaleAlternate,
      siteName: ogSiteName,
      images: [
        { url: ogImage, width: post.seo?.ogImageWidth || 1200, height: post.seo?.ogImageHeight || 630, alt: post.title, type: post.seo?.ogImageType || 'image/webp' }
      ],
      article: { publishedTime, modifiedTime: post.seo?.articleModifiedTime, authors: [post.author.name] }
    },
    twitter: {
      card: twitterCard,
      title: twitterTitle,
      description: twitterDescription,
      images: [twitterImage],
      creator: post.seo?.twitterAuthor || post.author.name
    },
    authors: [{ name: post.author.name }],
    other: {
      'twitter:label1': post.seo?.twitterLabel1 || 'Written by',
      'twitter:data1': post.seo?.twitterData1 || post.author.name,
      'twitter:label2': post.seo?.twitterLabel2 || 'Est. reading time',
      'twitter:data2': post.seo?.twitterData2 || `${post.timeToRead} minutes`,
      'msapplication-TileImage': post.seo?.msapplicationTileImage || ''
    },
    alternates: { canonical: canonicalUrl },
    robots: post.seo?.noIndex ? { index: false, follow: true } : undefined
  };
  
  return metadata;
}

// ✅ Layout Wrapper for Blog Post
export default function BlogLayout({ children }) {
  return <>{children}</>;
}
