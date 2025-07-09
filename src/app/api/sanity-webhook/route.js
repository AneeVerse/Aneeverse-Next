import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

// Allow this route to run dynamically every time
export const dynamic = 'force-dynamic';

/**
 * Sanity → Next.js webhook endpoint
 *
 * 1. Add this URL as a webhook in Sanity (POST request).
 * 2. Set the "Payload" to "Document" so we receive the full document body.
 * 3. Add a secret in Sanity and the same value in Vercel env var SANITY_WEBHOOK_SECRET.
 *
 * The handler determines which paths need revalidation based on the doc type & slug.
 */
export async function POST(request) {
  try {
    const body = await request.json();

    // Optional secret verification for security
    const secret = process.env.SANITY_WEBHOOK_SECRET;
    if (secret && body?.secret !== secret) {
      return NextResponse.json({ success: false, message: 'Invalid secret' }, { status: 401 });
    }

    // Sanity webhook sometimes wraps doc inside "_type", "slug", etc.
    const docType = body?._type || body?.trigger?.documentType || null;
    const slug = body?.slug?.current || body?.slug || null;

    console.log('Sanity webhook received:', { docType, slug });

    // Revalidate generic listing pages first
    revalidatePath('/blog');
    revalidatePath('/'); // homepage might show latest posts

    // Collect paths we want to warm immediately after invalidation
    const warmPaths = new Set(['/blog', '/']);

    // Revalidate dynamic paths based on document type
    if (docType === 'post' && slug) {
      // Blog post detail page
      revalidatePath(`/blog/${slug}`);
      warmPaths.add(`/blog/${slug}`);
    }

    if (docType === 'category' && slug) {
      // Category listing page (if you have /blog/category/<slug>)
      revalidatePath(`/blog/category/${slug}`);
      warmPaths.add(`/blog/category/${slug}`);
    }

    // Add other doc types (customerStory, project, etc.) as needed

    // ---------------------------------------------
    //  🔥  Pre-warm: Trigger background build NOW
    // ---------------------------------------------
    try {
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aneeverse.com';
      await Promise.all([
        ...Array.from(warmPaths).map(async (p) => {
          const url = `${baseUrl}${p}`;
          try {
            await fetch(url, { method: 'GET', cache: 'no-store' });
            console.log('Warmed path:', url);
          } catch (err) {
            console.warn('Warm failed:', url, err.message);
          }
        }),
      ]);
    } catch (err) {
      console.warn('Error during warm-up', err);
    }

    return NextResponse.json({ success: true, revalidated: true });
  } catch (error) {
    console.error('Error handling Sanity webhook:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// Sanity's "Send test" button issues a HEAD request. Handle it so the platform returns 200 instead
export async function HEAD() {
  return new NextResponse('OK', { status: 200 });
}

// (Optional) allow preflight checks
export async function OPTIONS() {
  return new NextResponse('OK', { status: 204 });
} 