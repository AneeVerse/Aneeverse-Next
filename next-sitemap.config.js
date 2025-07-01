/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.aneeverse.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 1000000,
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
    
    // Add static pages
    const staticRoutes = [
      { loc: '/', changefreq: 'daily', priority: 1.0 },
      { loc: '/blog', changefreq: 'weekly', priority: 0.8 },
      { loc: '/services', changefreq: 'monthly', priority: 0.8 },
      { loc: '/works', changefreq: 'monthly', priority: 0.8 },
      { loc: '/pricing', changefreq: 'monthly', priority: 0.8 },
      { loc: '/contact', changefreq: 'monthly', priority: 0.8 },
      { loc: '/register', changefreq: 'monthly', priority: 0.8 },
      { loc: '/login', changefreq: 'monthly', priority: 0.8 },
      { loc: '/customer-stories', changefreq: 'monthly', priority: 0.6 },
      { loc: '/video-library', changefreq: 'monthly', priority: 0.6 },
      { loc: '/about-us', changefreq: 'monthly', priority: 0.8 },
      { loc: '/our-team', changefreq: 'monthly', priority: 0.8 },
      // services sub-pages
      '/services/website-design',
      '/services/landing-pages',
      '/services/seo-optimization',
      '/services/gmb-optimization',
      '/services/local-seo',
      '/services/email-design',
      '/services/marketing-strategy',
      '/services/email-campaign',
      '/services/google-ads',
      '/services/meta-ads',
      '/services/influencer-marketing',
      '/services/blog-writing',
      '/services/ghost-writing',
      '/services/social-media-creatives',
      '/services/presentation-design',
      '/services/brochure-design'
    ];
    staticRoutes.forEach(route => {
      if (typeof route === 'string') {
        result.push({ loc: route, changefreq: config.changefreq, priority: config.priority });
      } else {
        result.push(route);
      }
    });
    
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