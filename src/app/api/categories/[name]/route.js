import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function DELETE(request, { params }) {
  try {
    const { name } = params;
    if (!name) {
      console.error('Category name is missing in params');
      return NextResponse.json({
        success: false,
        error: 'Category name is required'
      }, { status: 400 });
    }

    console.log('Attempting to delete category:', name);
    const { db } = await connectToDatabase();

    // First check if the category exists
    const existingCategory = await db.collection('categories').findOne({ name });
    if (!existingCategory) {
      console.error('Category not found:', name);
      return NextResponse.json({
        success: false,
        error: 'Category not found'
      }, { status: 404 });
    }

    // Delete the category from the categories collection
    const result = await db.collection('categories').deleteOne({ 
      name: name 
    });

    console.log('Delete operation result:', result);

    if (result.deletedCount === 0) {
      console.error('Category not deleted:', name);
      return NextResponse.json({
        success: false,
        error: 'Failed to delete category'
      }, { status: 500 });
    }

    // Also update any blogs that use this category to remove it
    const blogUpdateResult = await db.collection('blogs').updateMany(
      { category: name },
      { $set: { category: '' } }
    );

    console.log('Blog update result:', blogUpdateResult);

    return NextResponse.json({
      success: true,
      message: 'Category deleted successfully',
      deletedCount: result.deletedCount,
      updatedBlogs: blogUpdateResult.modifiedCount
    });
  } catch (error) {
    console.error('Error in category deletion:', error);
    return NextResponse.json({
      success: false,
      error: error.message || 'Failed to delete category'
    }, { status: 500 });
  }
} 