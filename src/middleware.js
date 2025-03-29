import { NextResponse } from 'next/server';

// List of allowed admin emails
const ALLOWED_EMAILS = ['admin@aneeverse.com'];

export async function middleware(request) {
  // Check if the request is for the admin route but not the login page
  if (request.nextUrl.pathname.startsWith('/admin') && 
      !request.nextUrl.pathname.startsWith('/admin/login')) {
    
    // Get the user's session from cookies
    const session = request.cookies.get('admin_session');
    const loginUrl = new URL('/admin/login', request.url);

    // If no session exists, redirect to login
    if (!session || session.value !== 'true') {
      // Clear any invalid session cookies
      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete('admin_session');
      return response;
    }

    try {
      // Session exists and is valid
      const response = NextResponse.next();
      
      // Extend session duration with each request
      response.cookies.set('admin_session', 'true', {
        path: '/',
        maxAge: 86400, // 24 hours
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
      });
      
      return response;
    } catch (error) {
      console.error('Session verification error:', error);
      // If session verification fails, redirect to login
      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete('admin_session');
      return response;
    }
  }

  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    // Match all admin routes except login
    '/((?!admin/login)admin.*)'
  ]
}; 