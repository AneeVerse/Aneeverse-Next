import { client } from '@/lib/sanity';

export async function GET() {
  console.log('=== SITEMAP API CALLED ===');
  
  try {
    console.log('Fetching data from Sanity...');
    // Fetch blogs and customer stories from Sanity
    const [blogs, customerStories] = await Promise.all([
      client.fetch(`
        *[_type == "post"] {
          "slug": slug.current,
          _updatedAt
        }
      `),
      client.fetch(`
        *[_type == "customerStory" && defined(slug.current)] {
          "slug": slug.current,
          _updatedAt
        }
      `)
    ]);

    console.log('Fetched data:', { blogsCount: blogs.length, customerStoriesCount: customerStories.length });

    // Filter out blogs without slugs
    const validBlogs = blogs.filter(blog => blog.slug && blog.slug.trim() !== '');
    console.log('Valid blogs with slugs:', validBlogs.length);

    // Static pages
    const staticPages = [
      { url: '', priority: 1.0, changefreq: 'daily' },
      { url: '/about-us', priority: 0.7, changefreq: 'daily' },
      { url: '/contact', priority: 0.7, changefreq: 'daily' },
      { url: '/services', priority: 0.7, changefreq: 'daily' },
      { url: '/pricing', priority: 0.7, changefreq: 'daily' },
      { url: '/blog', priority: 0.7, changefreq: 'daily' },
      { url: '/blog/all', priority: 0.8, changefreq: 'weekly' },
      { url: '/our-work', priority: 0.7, changefreq: 'daily' },
      { url: '/customer-stories', priority: 0.7, changefreq: 'daily' },
      // Add more static pages as needed
    ];

    // Service pages
    const servicePages = [
      'blog-writing', 'brochure-design', 'email-campaign', 'email-design',
      'ghost-writing', 'gmb-optimization', 'google-ads', 'influencer-marketing',
      'landing-pages', 'local-seo', 'marketing-strategy', 'meta-ads',
      'presentation-design', 'seo-optimization', 'social-media-creatives', 'website-design'
    ].map(service => ({
      url: `/services/${service}`,
      priority: 0.9,
      changefreq: 'monthly'
    }));

    const currentDate = new Date().toISOString();

    // Generate XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticPages, ...servicePages].map(page => `  <url>
    <loc>https://www.aneeverse.com${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
${validBlogs.map(blog => `  <url>
    <loc>https://www.aneeverse.com/blog/${blog.slug}</loc>
    <lastmod>${new Date(blog._updatedAt).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
${customerStories.map(story => `  <url>
    <loc>https://www.aneeverse.com/customer-stories/${story.slug}</loc>
    <lastmod>${new Date(story._updatedAt).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('\n')}
</urlset>`;

    console.log('=== SITEMAP GENERATED SUCCESSFULLY ===');
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600' // Cache for 1 hour
      }
    });

  } catch (error) {
    console.error('=== SITEMAP ERROR ===', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
} 