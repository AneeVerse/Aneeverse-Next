import { NextResponse } from 'next/server';

// List of allowed admin emails
const ALLOWED_EMAILS = ['admin@aneeverse.com'];

export async function middleware(request) {
  // Check if the request is for the admin route but not the login page
  if (request.nextUrl.pathname.startsWith('/admin') && 
      !request.nextUrl.pathname.startsWith('/admin/login')) {
    // Get the user's session/token from cookies
    const session = request.cookies.get('admin_session');

    // If no session exists, redirect to login
    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      // In a real app, you would verify the session token here
      // For now, we'll just check if it exists
      return NextResponse.next();
    } catch (error) {
      // If session is invalid, redirect to login
      return NextResponse.redirect(new URL('/admin/login', request.url));
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