import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

// PUT (update) author
export async function PUT(request, { params }) {
  try {
    const { name } = params;
    const { db } = await connectToDatabase();
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.role) {
      return NextResponse.json({
        success: false,
        error: 'Name and role are required'
      }, { status: 400 });
    }

    // Check if new name already exists (if name is being changed)
    if (data.name !== name) {
      const existingAuthor = await db.collection('authors').findOne({ name: data.name });
      if (existingAuthor) {
        return NextResponse.json({
          success: false,
          error: 'Author with new name already exists'
        }, { status: 400 });
      }
    }

    const result = await db.collection('authors').updateOne(
      { name },
      { 
        $set: {
          name: data.name,
          role: data.role,
          image: data.image || '',
          bio: data.bio || '',
          updatedAt: new Date()
        }
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({
        success: false,
        error: 'Author not found'
      }, { status: 404 });
    }

    // Update author name in blogs collection if name has changed
    if (data.name !== name) {
      await db.collection('blogs').updateMany(
        { 'author.name': name },
        { 
          $set: { 
            'author.name': data.name,
            'author.role': data.role,
            'author.image': data.image || ''
          }
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Author updated successfully'
    });
  } catch (error) {
    console.error('Error updating author:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to update author'
    }, { status: 500 });
  }
}

// DELETE author
export async function DELETE(request, { params }) {
  try {
    const { name } = params;
    const { db } = await connectToDatabase();

    // First check if the author exists
    const existingAuthor = await db.collection('authors').findOne({ name });
    if (!existingAuthor) {
      return NextResponse.json({
        success: false,
        error: 'Author not found'
      }, { status: 404 });
    }

    // Check if author has any blogs
    const blogsCount = await db.collection('blogs').countDocuments({ 'author.name': name });
    if (blogsCount > 0) {
      return NextResponse.json({
        success: false,
        error: 'Cannot delete author with existing blogs'
      }, { status: 400 });
    }

    const result = await db.collection('authors').deleteOne({ name });

    if (result.deletedCount === 0) {
      return NextResponse.json({
        success: false,
        error: 'Failed to delete author'
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Author deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting author:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to delete author'
    }, { status: 500 });
  }
} 