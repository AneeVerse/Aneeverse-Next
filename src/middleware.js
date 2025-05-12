import { NextResponse } from 'next/server';

// List of allowed admin emails
const ALLOWED_EMAILS = ['admin@aneeverse.com'];

export function middleware(request) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host');
  const path = url.pathname;

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

  // Redirect old blog URL patterns to new simplified format
  if (path.match(/^\/blog\/category\/([^\/]+)$/)) {
    // Handle old category URLs like /blog/category/web to /blog/web
    return NextResponse.redirect(new URL(`/blog/${path.replace('/blog/category/', '')}`, request.url));
  }

  // Handle typos in the category segment
  if (path.match(/^\/blog\/cateory\/([^\/]+)$/)) {
    return NextResponse.redirect(new URL(`/blog/${path.replace('/blog/cateory/', '')}`, request.url));
  }

  if (path.match(/^\/blog\/catehoy\/([^\/]+)$/)) {
    return NextResponse.redirect(new URL(`/blog/${path.replace('/blog/catehoy/', '')}`, request.url));
  }

  // Handle old blog post URLs with category in the path
  if (path.match(/^\/blog\/[^\/]+\/([^\/]+)$/)) {
    // Extract the slug from the old path (the part after the last slash)
    const slug = path.substring(path.lastIndexOf('/') + 1);
    return NextResponse.redirect(new URL(`/blog/${slug}`, request.url));
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

  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|logo.png).*)',
    '/blog/:path*',
    '/blog/category/:path*',
    '/blog/cateory/:path*', // For typos
    '/blog/catehoy/:path*', // For typos
  ],
}; 