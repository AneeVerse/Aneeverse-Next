'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/fonts.css"; // Import fonts CSS
import Navbar from "@/components/layout/Navbar";
import NewFooter from "@/components/layout/NewFooter";
import NextTopLoader from "nextjs-toploader";
import { usePathname } from 'next/navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/register' || pathname === '/login';

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary-500`}
      >
          <NextTopLoader
         color="#0e2f50"
         initialPosition={0.08}
         height={3}
         showSpinner={false}
         easing="ease"
         speed={500}
         shadow="0 0 10px #2299DD,0 0 5px #2299DD"
         />
        {!isAuthPage && <Navbar />}
        {children}
        {!isAuthPage && <NewFooter />}
      </body>
    </html>
  );
}
