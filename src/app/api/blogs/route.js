import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { v4 as uuidv4 } from 'uuid';
import { validateBlog, sanitizeBlog } from '@/models/Blog';

// GET all blogs with optional filtering
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    
    // Handle query parameters for filtering
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const limit = parseInt(searchParams.get('limit') || '50');
    const page = parseInt(searchParams.get('page') || '1');
    const skip = (page - 1) * limit;
    
    // Build query object
    const query = {};
    if (category) {
      query.category = { $regex: new RegExp(`^${category}$`, 'i') }; // Case-insensitive exact match
    }
    if (featured === 'true') query.isFeatured = true;
    
    console.log('MongoDB Query:', query); // Debug log
    
    // Connect to database with a timeout
    let client;
    try {
      client = await Promise.race([
        clientPromise,
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('MongoDB connection timeout - took too long to connect')), 20000)
        )
      ]);
    } catch (connError) {
      console.error('MongoDB connection error:', connError);
      return NextResponse.json({ 
        success: false, 
        error: `Database connection error: ${connError.message}`,
        details: process.env.NODE_ENV === 'development' ? connError.stack : undefined
      }, { status: 500 });
    }
    
    const db = client.db(process.env.MONGODB_DB);
    
    // Get blogs with pagination
    const blogs = await db
      .collection('blogs')
      .find(query)
      .sort({ date: -1 }) // Most recent first
      .skip(skip)
      .limit(limit)
      .toArray();
    
    // Get total count for pagination
    const totalCount = await db.collection('blogs').countDocuments(query);
    
    return NextResponse.json({ 
      success: true, 
      blogs,
      pagination: {
        total: totalCount,
        page,
        limit,
        pages: Math.ceil(totalCount / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ 
      success: false, 
      error: `Error fetching blogs: ${error.message}`,
      code: error.code || 'UNKNOWN_ERROR',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
}

// POST - Create a new blog
export async function POST(request) {
  try {
    const blogData = await request.json();
    
    // Generate unique ID if not provided
    if (!blogData.id) {
      blogData.id = uuidv4();
    }
    
    // Validate blog data
    const validationResult = validateBlog(blogData);
    if (!validationResult.valid) {
      return NextResponse.json({ 
        success: false, 
        error: validationResult.error 
      }, { status: 400 });
    }
    
    // Sanitize and prepare blog data
    const sanitizedBlog = sanitizeBlog(blogData);
    
    // Connect to database with a timeout
    let client;
    try {
      client = await Promise.race([
        clientPromise,
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('MongoDB connection timeout - took too long to connect')), 20000)
        )
      ]);
    } catch (connError) {
      console.error('MongoDB connection error:', connError);
      return NextResponse.json({ 
        success: false, 
        error: `Database connection error: ${connError.message}`
      }, { status: 500 });
    }
    
    const db = client.db(process.env.MONGODB_DB);
    
    // Check if blog with this ID already exists
    const existingBlog = await db.collection('blogs').findOne({ id: sanitizedBlog.id });
    if (existingBlog) {
      return NextResponse.json({ 
        success: false, 
        error: 'Blog with this ID already exists' 
      }, { status: 409 });
    }
    
    // Insert blog into database
    await db.collection('blogs').insertOne(sanitizedBlog);
    
    return NextResponse.json({ 
      success: true, 
      blog: sanitizedBlog,
      message: 'Blog created successfully'
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ 
      success: false, 
      error: `Error creating blog: ${error.message}`,
      code: error.code || 'UNKNOWN_ERROR',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
} 