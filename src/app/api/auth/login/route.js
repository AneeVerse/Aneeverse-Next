import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    console.log('Login attempt:', { email, password }); // Debug log

    // Simple check for testing
    if (email === 'admin@aneeverse.com' && password === 'admin123') {
      console.log('Login successful'); // Debug log
      
      const response = NextResponse.json({ 
        success: true,
        message: 'Login successful'
      });

      // Set a simple session cookie
      response.cookies.set('session', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        domain: process.env.NODE_ENV === 'production' ? '.aneeverse.com' : undefined,
        maxAge: 60 * 60 * 24 // 24 hours
      });

      return response;
    }

    console.log('Login failed: Invalid credentials'); // Debug log
    return NextResponse.json({ 
      success: false, 
      error: 'Invalid email or password' 
    }, { status: 401 });

  } catch (error) {
    console.error('Login error:', error); // Debug log
    return NextResponse.json({ 
      success: false, 
      error: 'An error occurred during login' 
    }, { status: 500 });
  }
} 