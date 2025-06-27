/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.aneeverse.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: [
    '/dashboard/*',
    '/studio/*',
    '/admin/*',
    '/api/*',
    '/login',
    '/register'
  ],
  additionalPaths: async (config) => {
    const result = [];
    
    try {
      // Import Sanity client to fetch dynamic content
      const { client } = require('./src/lib/sanity');
      
      // Fetch all blog posts from Sanity
      const blogs = await client.fetch(`*[_type == "post"] {
        "slug": slug.current,
        publishedAt,
        _updatedAt
      }`);
      
      // Add blog posts to sitemap
      blogs.forEach((blog) => {
        if (blog.slug) {
          result.push({
            loc: `/blog/${blog.slug}`,
            changefreq: 'weekly',
            priority: 0.8,
            lastmod: blog._updatedAt || blog.publishedAt || new Date().toISOString(),
          });
        }
      });
      
      // Fetch all customer stories from Sanity
      const stories = await client.fetch(`*[_type == "customerStory"] {
        "slug": slug.current,
        _updatedAt
      }`);
      
      // Add customer stories to sitemap
      stories.forEach((story) => {
        if (story.slug) {
          result.push({
            loc: `/customer-stories/${story.slug}`,
            changefreq: 'monthly',
            priority: 0.6,
            lastmod: story._updatedAt || new Date().toISOString(),
          });
        }
      });
      
    } catch (error) {
      console.error('Error generating additional sitemap paths:', error);
    }
    
    return result;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/studio', '/admin', '/api']
      }
    ],
    additionalSitemaps: []
  },
  transform: async (config, path) => {
    // Custom transform to set different priorities
    if (path === '/') {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: 1.0,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }
    
    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }
    
    if (path.startsWith('/services/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }
    
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  }
}; 