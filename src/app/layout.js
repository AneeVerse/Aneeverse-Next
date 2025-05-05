'use client';

import "./globals.css";
import Navbar from '@/components/layout/Navbar';
import NewFooter from '@/components/layout/NewFooter';
import NextTopLoader from 'nextjs-toploader';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith('/studio');
  const isAuth = pathname === '/register' || pathname === '/login';

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Top Loader */}
        <NextTopLoader
          color="#0e2f50"
          initialPosition={0.08}
          height={3}
          showSpinner={false}
          easing="ease"
          speed={500}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />

        {/* Navbar for all non-studio, non-auth pages */}
        {!isStudio && !isAuth && <Navbar />}

        {/* Page content */}
        {children}

        {/* Footer for all non-studio, non-auth pages */}
        {!isStudio && !isAuth && <NewFooter />}
      </body>
    </html>
  );
}
