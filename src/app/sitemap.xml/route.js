import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

// Sanity client configuration
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'be9i5ty1',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-13',
  useCdn: false,
});

// Configuration
const CONFIG = {
  baseUrl: 'https://www.aneeverse.com',
};

// Function to fetch blog posts from Sanity
async function fetchBlogPosts() {
  try {
    const posts = await sanityClient.fetch(`
      *[_type == "post"] {
        "slug": slug.current,
        _updatedAt,
        publishedAt
      }
    `);
    
    return posts.map(post => ({
      url: `${CONFIG.baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post._updatedAt || post.publishedAt),
      changeFrequency: 'weekly',
      priority: 0.7
    }));
  } catch (error) {
    console.error(`Error fetching blog posts: ${error.message}`);
    return [];
  }
}

// Function to fetch categories from Sanity
async function fetchCategories() {
  try {
    const categories = await sanityClient.fetch(`
      *[_type == "category"] {
        "slug": slug.current,
        _updatedAt
      }
    `);
    
    return categories.map(category => ({
      url: `${CONFIG.baseUrl}/blog/category/${category.slug}`,
      lastModified: new Date(category._updatedAt),
      changeFrequency: 'weekly',
      priority: 0.6
    }));
  } catch (error) {
    console.error(`Error fetching categories: ${error.message}`);
    return [];
  }
}

// Function to fetch customer stories from Sanity
async function fetchCustomerStories() {
  try {
    const stories = await sanityClient.fetch(`
      *[_type == "customerStory" && defined(slug.current)] {
        "slug": slug.current,
        _updatedAt
      }
    `);
    
    return stories.map(story => ({
      url: `${CONFIG.baseUrl}/customer-stories/${story.slug}`,
      lastModified: new Date(story._updatedAt),
      changeFrequency: 'monthly',
      priority: 0.6
    }));
  } catch (error) {
    console.error(`Error fetching customer stories: ${error.message}`);
    return [];
  }
}

// Static URLs configuration
function getStaticUrls() {
  return [
    {
      url: CONFIG.baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${CONFIG.baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/services/website-design`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/services/landing-pages`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/services/seo-optimization`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/services/email-design`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/services/brochure-design`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/services/ghost-writing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/services/blog-writing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/services/presentation-design`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/services/social-media-creatives`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/services/email-campaign`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/services/influencer-marketing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/services/marketing-strategy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/blog/all`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/customer-stories`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${CONFIG.baseUrl}/video-library`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${CONFIG.baseUrl}/our-work`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/works`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CONFIG.baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${CONFIG.baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${CONFIG.baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${CONFIG.baseUrl}/our-team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}

// Function to generate sitemap XML content
function generateSitemapXML(urls) {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';
  
  const urlEntries = urls.map(url => {
    const lastmod = url.lastModified ? url.lastModified.toISOString() : new Date().toISOString();
    const changefreq = url.changeFrequency || 'monthly';
    const priority = url.priority || 0.5;
    
    return `  <url>
    <loc>${url.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');
  
  return `${xmlHeader}
${urlsetOpen}
${urlEntries}
${urlsetClose}`;
}

// API Route Handler for sitemap.xml
export async function GET() {
  try {
    // Get static URLs
    const staticUrls = getStaticUrls();
    
    // Fetch dynamic content from Sanity
    const [blogPosts, categories, customerStories] = await Promise.all([
      fetchBlogPosts(),
      fetchCategories(),
      fetchCustomerStories()
    ]);
    
    // Combine all URLs
    const allUrls = [...staticUrls, ...blogPosts, ...categories, ...customerStories];
    
    // Generate XML content
    const sitemapXML = generateSitemapXML(allUrls);
    
    // Return XML response with proper headers
    return new NextResponse(sitemapXML, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
      },
    });
    
  } catch (error) {
    console.error(`Error generating sitemap: ${error.message}`);
    
    // Return a basic sitemap with just the homepage if there's an error
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${CONFIG.baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
    
    return new NextResponse(fallbackSitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=300, s-maxage=300', // Cache for 5 minutes on error
      },
    });
  }
}