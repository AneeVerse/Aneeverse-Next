import "./globals.css";
import Script from 'next/script';
import { Poppins, Rock_Salt } from 'next/font/google';
import ClientLayoutWrapper from '@/components/layout/ClientLayoutWrapper';

// Configure fonts with next/font/google
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-poppins',
});

const rockSalt = Rock_Salt({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-rock-salt',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aneeverse.com'),
  title: 'Aneeverse - Your Dedicated Creative & Digital Marketing Team',
  description: 'Your dedicated, on-call creative & digital marketing team. Design, optimise and advertise your brand—ship campaigns faster, more reliably and at scale.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${rockSalt.variable}`}>
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
        
        {/* GTM script */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TKVM4FRW');
          `}
        </Script>

        {/* LeadFeeder Script */}
        <Script id="leadfeeder-init" strategy="afterInteractive">
          {`
            (function(ss,ex){ 
              window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; 
              (function(d,s){ 
                fs=d.getElementsByTagName(s)[0]; 
                function ce(src){ 
                  var cs=d.createElement(s); 
                  cs.src=src; 
                  cs.async=1; 
                  fs.parentNode.insertBefore(cs,fs); 
                }; 
                ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); 
              })(document,'script'); 
            })('p1e024BX9mK8GB6d');
          `}
        </Script>

        {/* Google Analytics gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0D1BWK4QQF"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0D1BWK4QQF');
          `}
        </Script>
      </head>
      <body className={poppins.className}>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TKVM4FRW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
