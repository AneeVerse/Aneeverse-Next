import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { validateBlog, sanitizeBlog } from '@/models/Blog';

// GET a single blog by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    // Connect to database
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    
    // Find blog by ID
    const blog = await db.collection('blogs').findOne({ id });
    
    if (!blog) {
      return NextResponse.json({ 
        success: false, 
        error: 'Blog not found' 
      }, { status: 404 });
    }
    
    // Increment view count
    await db.collection('blogs').updateOne(
      { id },
      { $inc: { views: 1 } }
    );
    
    return NextResponse.json({ 
      success: true, 
      blog 
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}

// PUT/PATCH - Update a blog
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const updateData = await request.json();
    
    // Remove _id field if it exists to prevent immutable field modification error
    if (updateData._id) {
      delete updateData._id;
    }
    
    // Connect to database
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    
    // Find existing blog
    const existingBlog = await db.collection('blogs').findOne({ id });
    
    if (!existingBlog) {
      return NextResponse.json({ 
        success: false, 
        error: 'Blog not found' 
      }, { status: 404 });
    }
    
    // Merge existing blog with updates
    const updatedBlog = { ...existingBlog, ...updateData };
    
    // Make sure we don't try to modify the _id field
    delete updatedBlog._id;
    
    // Validate updated blog
    const validationResult = validateBlog(updatedBlog);
    if (!validationResult.valid) {
      return NextResponse.json({ 
        success: false, 
        error: validationResult.error 
      }, { status: 400 });
    }
    
    // Sanitize and update blog
    const sanitizedBlog = sanitizeBlog(updatedBlog);
    
    await db.collection('blogs').updateOne(
      { id },
      { $set: sanitizedBlog }
    );
    
    return NextResponse.json({ 
      success: true, 
      blog: sanitizedBlog,
      message: 'Blog updated successfully'
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}

// DELETE a blog
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    
    // Connect to database
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    
    // Find blog to get its category for response
    const blogToDelete = await db.collection('blogs').findOne({ id });
    
    if (!blogToDelete) {
      return NextResponse.json({ 
        success: false, 
        error: 'Blog not found' 
      }, { status: 404 });
    }
    
    // Delete the blog
    await db.collection('blogs').deleteOne({ id });
    
    return NextResponse.json({ 
      success: true,
      message: `Blog deleted successfully from ${blogToDelete.category} category`
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
} 