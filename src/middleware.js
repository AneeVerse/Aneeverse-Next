import { NextResponse } from 'next/server';

// List of allowed admin emails
const ALLOWED_EMAILS = ['admin@aneeverse.com'];

export function middleware(request) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host');

  // Handle blog subdomain
  if (hostname === 'blog.aneeverse.com') {
    // If accessing root path on blog subdomain, redirect to /dashboard
    if (url.pathname === '/') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // Skip auth check for login page and API routes
    if (url.pathname === '/dashboard/login' || url.pathname.startsWith('/api/')) {
      return NextResponse.next();
    }

    // Redirect old admin routes to new dashboard route
    if (url.pathname.startsWith('/admin')) {
      const newPath = url.pathname.replace('/admin', '/dashboard');
      return NextResponse.redirect(new URL(newPath, request.url));
    }

    // Check session for all other routes
    try {
      const session = request.cookies.get('session')?.value;

      if (!session) {
        return NextResponse.redirect(new URL('/dashboard/login', request.url));
      }

      // Create response to extend session
      const response = NextResponse.next();
      
      // Extend session cookie
      response.cookies.set('session', session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 // 24 hours
      });

      return response;
    } catch (error) {
      console.error('Session verification error:', error);
      const response = NextResponse.redirect(new URL('/dashboard/login', request.url));
      response.cookies.delete('session');
      return response;
    }
  }

  // If accessing /admin or /dashboard from main domain, redirect to blog subdomain
  if ((hostname === 'www.aneeverse.com' || hostname === 'aneeverse.com') && 
      (url.pathname.startsWith('/admin') || url.pathname.startsWith('/dashboard'))) {
    return NextResponse.redirect(`https://blog.aneeverse.com${url.pathname}`);
  }

  // For main domain, allow normal access to all non-admin routes
  if (hostname === 'www.aneeverse.com' || hostname === 'aneeverse.com') {
    // Block access to admin routes on main domain
    if (url.pathname.startsWith('/admin')) {
      return NextResponse.redirect(`https://blog.aneeverse.com${url.pathname}`);
    }
    // Allow all other routes
    return NextResponse.next();
  }

  // Fix for blog category URLs - handle typos and inconsistent formats
  if (url.pathname.match(/^\/blog\/cateory\/(.+)$/)) {
    // Fix the typo 'cateory' -> 'category'
    const categorySlug = url.pathname.replace(/^\/blog\/cateory\//, '');
    return NextResponse.redirect(new URL(`/blog/${categorySlug}`, request.url));
  }

  // Fix for "catehoy" typo specifically for aneeverse-news
  if (url.pathname.match(/^\/blog\/catehoy\/aneeverse-news$/) || 
      url.pathname.match(/^\/blog\/catehoy\/(.+)$/)) {
    const categorySlug = url.pathname.includes('aneeverse-news') 
      ? 'aneeverse-news' 
      : url.pathname.replace(/^\/blog\/catehoy\//, '');
    return NextResponse.redirect(new URL(`/blog/${categorySlug}`, request.url));
  }
  
  // Redirect old format (/blog/category/xxx) to new format (/blog/xxx)
  if (url.pathname.match(/^\/blog\/category\/(.+)$/)) {
    const categorySlug = url.pathname.replace(/^\/blog\/category\//, '');
    return NextResponse.redirect(new URL(`/blog/${categorySlug}`, request.url));
  }

  // Redirect old format blog posts with category in URL to direct format
  if (url.pathname.match(/^\/blog\/[^/]+\/[^/]+$/)) {
    // Extract the slug from /blog/category/slug pattern
    const parts = url.pathname.split('/');
    if (parts.length === 4) {
      const slug = parts[3];
      return NextResponse.redirect(new URL(`/blog/${slug}`, request.url));
    }
  }

  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|logo.png).*)',
    // Match blog category paths with potential typos
    '/blog/cateory/:path*',
    '/blog/catehoy/:path*',
    '/blog/category/:path*',
    // Match blog post paths with category
    '/blog/:category/:slug',
    // Match direct blog post paths
    '/blog/:slug',
  ],
}; 