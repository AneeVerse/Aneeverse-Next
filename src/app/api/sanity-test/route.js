import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';

export async function GET() {
  try {
    // Simple query to get all posts with their categories
    const query = `*[_type == "post"]{
      _id,
      title,
      "categories": categories[]->title,
      publishedAt
    }`;
    
    const posts = await client.fetch(query);
    
    // Get all unique categories
    const allCategories = new Set();
    posts.forEach(post => {
      if (post.categories && Array.isArray(post.categories)) {
        post.categories.forEach(cat => {
          if (cat) allCategories.add(cat);
        });
      }
    });
    
    return NextResponse.json({
      success: true,
      totalPosts: posts.length,
      posts: posts,
      uniqueCategories: Array.from(allCategories),
      message: "Sanity connection successful"
    });
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
      message: "Failed to connect to Sanity"
    }, { status: 500 });
  }
} 