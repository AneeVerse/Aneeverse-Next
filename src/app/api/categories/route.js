import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// GET - Fetch all categories
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    
    const categories = await db.collection('categories').find({}).toArray();
    
    return NextResponse.json({ 
      success: true, 
      categories 
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch categories' 
    }, { status: 500 });
  }
}

// POST - Create a new category
export async function POST(request) {
  try {
    const { name, description } = await request.json();
    
    if (!name) {
      return NextResponse.json({ 
        success: false, 
        error: 'Category name is required' 
      }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    
    // Check if category already exists
    const existingCategory = await db.collection('categories').findOne({ 
      name: { $regex: new RegExp(`^${name}$`, 'i') } 
    });
    
    if (existingCategory) {
      return NextResponse.json({ 
        success: false, 
        error: 'Category already exists' 
      }, { status: 409 });
    }
    
    // Create new category
    const category = {
      name,
      description: description || '',
      slug: name.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-'),
      createdAt: new Date().toISOString()
    };
    
    await db.collection('categories').insertOne(category);
    
    return NextResponse.json({ 
      success: true, 
      category,
      message: 'Category created successfully' 
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to create category' 
    }, { status: 500 });
  }
}

// DELETE - Delete a category
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');
    
    if (!name) {
      return NextResponse.json({ 
        success: false, 
        error: 'Category name is required' 
      }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    
    const result = await db.collection('categories').deleteOne({ 
      name: { $regex: new RegExp(`^${name}$`, 'i') } 
    });
    
    if (result.deletedCount === 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'Category not found' 
      }, { status: 404 });
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Category deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to delete category' 
    }, { status: 500 });
  }
} 