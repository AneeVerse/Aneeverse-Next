import { NextResponse } from 'next/server';

// Redirect legacy /api/blogs/[slug] requests to /api/sanity-blogs/[slug]
export async function GET(request, { params }) {
  try {
    const { slug } = params;
    
    if (!slug) {
      return NextResponse.json({ 
        success: false, 
        error: 'Slug parameter is required' 
      }, { status: 400 });
    }
    
    const url = new URL(request.url);
    
    // Get all query parameters
    const searchParams = url.searchParams.toString();
    
    // Create the new URL with the same parameters
    const newUrl = new URL(`${url.origin}/api/sanity-blogs/${slug}${searchParams ? '?' + searchParams : ''}`);
    
    // Return a redirect to the new endpoint
    return NextResponse.redirect(newUrl, 308); // 308 is Permanent Redirect
  } catch (error) {
    console.error('Error redirecting blog slug API request:', error);
    return NextResponse.json({ 
      success: false, 
      error: `Failed to redirect request: ${error.message}`
    }, { status: 500 });
  }
}

