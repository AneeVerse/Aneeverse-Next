/**
 * Blog Route Testing Utility
 * 
 * This file helps test the blog category routing fixes
 * It simulates the category URL generation and routing behavior
 */

// Test script for blog URL redirects

// Simulate test URLs and middleware redirects
const testCategoryNames = ['web', 'design', 'marketing-strategies', 'e-commerce', 'technology', 'aneeverse-news'];
const testPostSlugs = ['getting-started-with-nextjs', 'design-principles-2023', 'marketing-tips-for-small-business'];

// Test path patterns including old and new formats, and paths with typos
const testPaths = [
  // Old category format tests
  '/blog/category/web',
  '/blog/cateory/design',
  '/blog/catehoy/marketing-strategies',
  
  // New category format test
  '/blog/e-commerce',
  
  // Old blog post format tests 
  '/blog/web/getting-started-with-nextjs',
  '/blog/design/design-principles-2023',
  '/blog/marketing-strategies/marketing-tips-for-small-business',
  
  // New blog post format test
  '/blog/getting-started-with-nextjs',
  '/blog/design-principles-2023',
  '/blog/marketing-tips-for-small-business',
];

// Function to simulate middleware redirect logic
function simulateMiddleware(path) {
  // Fix for "cateory" typo
  if (path.match(/^\/blog\/cateory\/(.+)$/)) {
    const categorySlug = path.replace(/^\/blog\/cateory\//, '');
    return `/blog/${categorySlug}`;
  }

  // Fix for "catehoy" typo
  if (path.match(/^\/blog\/catehoy\/(.+)$/)) {
    const categorySlug = path.replace(/^\/blog\/catehoy\//, '');
    return `/blog/${categorySlug}`;
  }
  
  // Redirect old category format to new format
  if (path.match(/^\/blog\/category\/(.+)$/)) {
    const categorySlug = path.replace(/^\/blog\/category\//, '');
    return `/blog/${categorySlug}`;
  }

  // Redirect old blog post format (with category) to new format
  if (path.match(/^\/blog\/[^/]+\/[^/]+$/)) {
    const parts = path.split('/');
    if (parts.length === 4) {
      const slug = parts[3];
      return `/blog/${slug}`;
    }
  }

  // No redirect needed
  return path;
}

// Test route resolution
function testRoute(path) {
  const redirectedPath = simulateMiddleware(path);
  
  // Check if this is a blog post or category
  const parts = redirectedPath.split('/');
  
  if (parts.length === 3) {  // /blog/[slug]
    const slug = parts[2];
    
    // Determine if this is a category or blog post
    if (testCategoryNames.includes(slug)) {
      console.log(`✓ ${path} → ${redirectedPath} (Category: ${slug})`);
      return;
    }
    
    if (testPostSlugs.includes(slug)) {
      console.log(`✓ ${path} → ${redirectedPath} (Blog Post: ${slug})`);
      return;
    }
    
    console.log(`? ${path} → ${redirectedPath} (Unknown slug)`);
    return;
  }
  
  console.log(`× ${path} → ${redirectedPath} (Invalid path structure)`);
}

// Run tests
console.log("Testing blog URL redirects...\n");
testPaths.forEach(testRoute);
console.log("\nTest complete.");

/**
 * To run this test script:
 * node src/test-blog-routes.js
 */ 