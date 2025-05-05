import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';
import { blockContentToHtml } from '@/lib/sanity-utils';

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    
    if (!slug) {
      return NextResponse.json({ 
        success: false, 
        error: 'Slug parameter is required' 
      }, { status: 400 });
    }
    
    // Query Sanity for the blog post with the given slug
    const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      excerpt,
      body,
      "mainImage": mainImage.asset->url,
      publishedAt,
      estimatedReadingTime,
      "categories": categories[]->title,
      featured,
      "tags": tags[]->title,
      "author": author->{
        name,
        role,
        "image": image.asset->url
      }
    }`;
    
    const post = await client.fetch(query, { slug });
    
    if (!post) {
      return NextResponse.json({ 
        success: false, 
        error: 'Blog post not found' 
      }, { status: 404 });
    }
    
    // Transform the post to match the existing blog structure
    const transformedPost = {
      id: post._id,
      title: post.title,
      slug: post.slug?.current || '',
      content: typeof post.body === 'string' 
        ? post.body 
        : Array.isArray(post.body) 
          ? blockContentToHtml(post.body)
          : '',
      shortDescription: post.excerpt,
      thumbnail: post.mainImage,
      category: post.categories?.[0] || 'Uncategorized',
      date: post.publishedAt,
      timeToRead: post.estimatedReadingTime || 5,
      author: {
        name: post.author?.name || 'Anonymous',
        role: post.author?.role || 'Author',
        image: post.author?.image || '/images/blog/author/abhi.png',
      },
      isFeatured: post.featured || false,
      tags: post.tags || [],
    };
    
    return NextResponse.json({ 
      success: true, 
      blog: transformedPost
    });
  } catch (error) {
    console.error('Error fetching blog post from Sanity:', error);
    return NextResponse.json({ 
      success: false, 
      error: `Failed to fetch blog post from Sanity: ${error.message}`,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
} 