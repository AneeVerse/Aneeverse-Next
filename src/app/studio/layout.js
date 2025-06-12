import { Metadata } from 'next';

// Define metadata for Studio section
export const metadata = {
  title: 'Content Studio | Aneeverse',
  description: 'Content management studio for Aneeverse website - create and manage blogs, case studies, and more.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aneeverse.com/studio',
    title: 'Content Studio | Aneeverse',
    description: 'Content management studio for Aneeverse website - create and manage blogs, case studies, and more.',
    siteName: 'Aneeverse',
    images: [
      {
        url: 'https://aneeverse.com/images/meta/studio-preview.jpg',
        width: 1124,
        height: 591,
        alt: 'Aneeverse Content Studio',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Studio | Aneeverse',
    description: 'Content management studio for Aneeverse website - create and manage blogs, case studies, and more.',
    images: ['https://aneeverse.com/images/meta/studio-preview.jpg'],
    creator: '@aneeverse',
    site: '@aneeverse',
  },
  applicationName: 'Aneeverse Studio',
  referrer: 'origin-when-cross-origin',
  keywords: ['content studio', 'sanity', 'cms', 'content management', 'aneeverse'],
  authors: [{ name: 'Aneeverse Team' }],
  generator: 'Next.js',
  themeColor: '#0e2f50',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: 'https://aneeverse.com/studio',
  },
};

export default function StudioLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="msapplication-TileImage" content="https://aneeverse.com/images/meta/favicon.svg" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 