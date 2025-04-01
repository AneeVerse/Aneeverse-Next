import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

// GET all authors
export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const authors = await db.collection('authors').find({}).toArray();
    
    return NextResponse.json({
      success: true,
      authors
    });
  } catch (error) {
    console.error('Error fetching authors:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch authors'
    }, { status: 500 });
  }
}

// POST new author
export async function POST(request) {
  try {
    const { db } = await connectToDatabase();
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.role) {
      return NextResponse.json({
        success: false,
        error: 'Name and role are required'
      }, { status: 400 });
    }

    // Check if author already exists
    const existingAuthor = await db.collection('authors').findOne({ name: data.name });
    if (existingAuthor) {
      return NextResponse.json({
        success: false,
        error: 'Author already exists'
      }, { status: 400 });
    }

    const author = {
      name: data.name,
      role: data.role,
      image: data.image || '',
      bio: data.bio || '',
      createdAt: new Date()
    };

    const result = await db.collection('authors').insertOne(author);
    
    return NextResponse.json({
      success: true,
      author: { ...author, _id: result.insertedId }
    });
  } catch (error) {
    console.error('Error creating author:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to create author'
    }, { status: 500 });
  }
} 