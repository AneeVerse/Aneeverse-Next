import { NextResponse } from 'next/server';

export async function GET() {
  // Redirect to the contact page
  return NextResponse.redirect('https://www.aneeverse.com/contact', 301);
}