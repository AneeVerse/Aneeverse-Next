import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';
import { blockContentToHtml } from '@/lib/sanity-utils';

// Helper function to transform Sanity data to match our app's existing blog structure
function transformSanityBlog(sanityBlog) {
  return {
    id: sanityBlog._id,
    title: sanityBlog.title,
    slug: sanityBlog.slug?.current || '',
    content: Array.isArray(sanityBlog.content) ? sanityBlog.content : sanityBlog.content || '',
    shortDescription: sanityBlog.excerpt || sanityBlog.shortDescription || '',
    thumbnail: sanityBlog.mainImage,
    category: sanityBlog.categories?.[0] || 'Uncategorized',
    date: sanityBlog.publishedAt,
    timeToRead: sanityBlog.timeToRead || 5,
    author: {
      name: sanityBlog.author?.name || 'Anonymous',
      role: sanityBlog.author?.role || 'Author',
      image: sanityBlog.author?.image || '/images/blog/author/abhi.png',
    },
    isFeatured: sanityBlog.featured || false,
    tags: sanityBlog.tags || [],
  };
}

// GET all blogs with optional filtering
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    
    // Handle query parameters for filtering
    const category = searchParams.get('category');
    const categorySlug = searchParams.get('categorySlug');
    const featured = searchParams.get('featured');
    const getCategoryInfo = searchParams.get('getCategoryInfo');
    const limit = parseInt(searchParams.get('limit') || '50');
    const page = parseInt(searchParams.get('page') || '1');
    
    console.log('API Request - Category:', category);
    console.log('API Request - Category Slug:', categorySlug);
    console.log('API Request - Get Category Info:', getCategoryInfo);
    
    // Handle category info request
    if (getCategoryInfo === 'true' && (category || categorySlug)) {
      try {
        let categoryInfo = null;
        
        // First try by slug if provided
        if (categorySlug) {
          const categoryBySlugQuery = `*[_type == "category" && slug.current == $categorySlug][0] {
            title,
            description
          }`;
          
          categoryInfo = await client.fetch(categoryBySlugQuery, { categorySlug });
        }
        
        // If not found by slug, try by title
        if (!categoryInfo && category) {
          const categoryByTitleQuery = `*[_type == "category" && lower(title) == $categoryName][0] {
            title,
            description
          }`;
          
          categoryInfo = await client.fetch(categoryByTitleQuery, { 
            categoryName: category.toLowerCase() 
          });
        }
        
        return NextResponse.json({
          success: true,
          categoryInfo: categoryInfo || null
        });
      } catch (error) {
        console.error('Error fetching category info:', error);
        return NextResponse.json({
          success: false,
          error: 'Failed to fetch category info'
        }, { status: 500 });
      }
    }
    
    // Build GROQ query
    let query = `*[_type == "post"`;
    
    // Add filters
    if (featured === 'true') {
      query += ` && featured == true`;
    }
    
    // Close the query and add ordering
    query += `] | order(publishedAt desc)`;
    
    // Add pagination
    const skip = (page - 1) * limit;
    query += `[${skip}...${skip + limit}]`;
    
    // Add projections to get all needed fields
    query += `{
      _id,
      title,
      slug,
      excerpt,
      shortDescription,
      "content": body,
      "mainImage": coalesce(mainImage.externalImage, mainImage.sanityImage.asset->url, mainImage.asset->url),
      publishedAt,
      timeToRead,
      "categories": categories[]->title,
      featured,
      "tags": tags[]->title,
      "author": author->{
        name,
        role,
        "image": image.asset->url
      }
    }`;
    
    console.log('GROQ Query:', query);
    
    // Get the total count for pagination (separate query)
    let countQuery = `count(*[_type == "post"`;
    if (featured === 'true') {
      countQuery += ` && featured == true`;
    }
    countQuery += `])`;
    
    console.log('Count Query:', countQuery);
    
    // Execute queries
    const [blogs, totalCount] = await Promise.all([
      client.fetch(query),
      client.fetch(countQuery)
    ]);
    
    console.log('Blogs fetched from Sanity:', blogs.length);
    console.log('Sample blog categories:', blogs.slice(0, 3).map(b => ({
      title: b.title,
      categories: b.categories
    })));
    
    // Filter on the server side for category if specified
    let filteredBlogs = blogs;
    if (category) {
      const categoryLower = category.toLowerCase().replace(/-/g, ' ');
      console.log('Filtering for category:', categoryLower);
      
      filteredBlogs = blogs.filter(blog => {
        if (!blog.categories || !Array.isArray(blog.categories)) return false;
        
        return blog.categories.some(cat => {
          if (!cat || typeof cat !== 'string') return false;
          
          // Normalize both category strings for comparison
          const catNormalized = cat.toLowerCase()
            .replace(/&/g, ' ')           // Replace & with space
            .replace(/\s+/g, ' ')         // Replace multiple spaces with single space
            .replace(/-/g, ' ')           // Replace hyphens with spaces
            .trim();
            
          const searchNormalized = categoryLower
            .replace(/&/g, ' ')           // Replace & with space
            .replace(/\s+/g, ' ')         // Replace multiple spaces with single space
            .replace(/-/g, ' ')           // Replace hyphens with spaces
            .trim();
          
          console.log(`Comparing: "${catNormalized}" with "${searchNormalized}"`);
          
          // Check for exact match or partial match
          return catNormalized === searchNormalized || 
                 catNormalized.includes(searchNormalized) || 
                 searchNormalized.includes(catNormalized);
        });
      });
      
      console.log('After filtering for category:', filteredBlogs.length);
      console.log('Filtered blog titles:', filteredBlogs.map(b => b.title));
    }
    
    // Transform Sanity blogs to match our existing structure
    const transformedBlogs = filteredBlogs.map(transformSanityBlog);
    
    return NextResponse.json({ 
      success: true, 
      blogs: transformedBlogs,
      pagination: {
        total: category ? filteredBlogs.length : totalCount,
        page,
        limit,
        pages: Math.ceil((category ? filteredBlogs.length : totalCount) / limit)
      },
      debug: {
        originalCategory: category,
        normalizedCategory: category ? category.toLowerCase().replace(/-/g, ' ') : null,
        totalBlogsFromSanity: blogs.length,
        filteredCount: filteredBlogs.length
      }
    });
  } catch (error) {
    console.error('Error fetching blogs from Sanity:', error);
    return NextResponse.json({ 
      success: false, 
      error: `Failed to fetch blogs from Sanity: ${error.message}`,
      stack: error.stack,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
} 