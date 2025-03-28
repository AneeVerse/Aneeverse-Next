// This is a simple schema model for our blog data
// It's not a Mongoose schema since we're using the MongoDB driver directly
// but it helps define the structure of our data

export const BlogSchema = {
  id: String,                // Unique identifier
  title: String,             // Blog title
  category: String,          // Blog category (e.g., 'eBay', 'Design')
  shortDescription: String,  // Short description/summary
  content: String,           // Main blog content (HTML)
  thumbnail: String,         // Thumbnail image URL
  author: {
    name: String,            // Author name
    role: String,            // Author role
    image: String            // Author image URL
  },
  timeToRead: String,        // Estimated reading time
  date: String,              // Publication date
  tags: [String],            // Optional tags
  slug: String,              // URL-friendly version of title
  views: Number,             // View count (optional)
  isFeatured: Boolean        // Whether this is a featured post (optional)
};

// Helper function to validate a blog object against our schema
export function validateBlog(blog) {
  const requiredFields = ['id', 'title', 'category', 'shortDescription', 'content', 'thumbnail', 'author', 'date'];
  
  for (const field of requiredFields) {
    if (!blog[field]) {
      return { valid: false, error: `Missing required field: ${field}` };
    }
  }
  
  if (!blog.author.name || !blog.author.role || !blog.author.image) {
    return { valid: false, error: 'Author must include name, role, and image' };
  }
  
  return { valid: true };
}

// Helper function to sanitize blog data before saving to database
export function sanitizeBlog(blog) {
  // Create a slug if one doesn't exist
  if (!blog.slug) {
    blog.slug = blog.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
  }
  
  // Normalize category name
  const category = blog.category.trim().toLowerCase();
  
  // Set default values for optional fields and normalize data
  return {
    ...blog,
    category: category,
    views: blog.views || 0,
    isFeatured: blog.isFeatured || false,
    tags: blog.tags || []
  };
} 