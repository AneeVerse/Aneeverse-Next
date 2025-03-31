import { NextResponse } from 'next/server';

// List of allowed admin emails
const ALLOWED_EMAILS = ['admin@aneeverse.com'];

export function middleware(request) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host');

  // Handle blog subdomain
  if (hostname === 'blog.aneeverse.com') {
    // List of paths that don't require authentication
    const publicPaths = ['/login', '/api/auth/login'];
    
    // Allow public paths without authentication
    if (publicPaths.some(path => url.pathname.startsWith(path))) {
      return NextResponse.next();
    }

    // Handle session checks for protected paths
    try {
      // Get session from cookies
      const session = request.cookies.get('session')?.value;

      if (!session) {
        // Redirect to login if no session
        return NextResponse.redirect(new URL('/login', request.url));
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
      // Clear invalid session and redirect to login
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('session');
      return response;
    }
  }

  // If accessing /admin from main domain, redirect to blog subdomain root
  if (hostname === 'www.aneeverse.com' && url.pathname.startsWith('/admin')) {
    const newPath = url.pathname.replace('/admin', '');
    return NextResponse.redirect(`https://blog.aneeverse.com${newPath}`);
  }

  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|logo.png).*)',
  ],
}; 