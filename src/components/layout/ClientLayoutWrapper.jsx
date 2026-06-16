'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import NewFooter from '@/components/layout/NewFooter';
import NextTopLoader from 'nextjs-toploader';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import WebPageSchema from '@/components/seo/WebPageSchema';
import HomeSchema from '@/components/seo/HomeSchema';
import Preloader from '@/components/ui/Preloader';
import { PostHogProvider } from '@/components/providers/PostHogProvider';
import ClarityInit from '@/components/analytics/ClarityInit';

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith('/studio');
  const isAuth = pathname === '/register' || pathname === '/login';
  const isStandalone =
    pathname === '/ads-ecommerce-thankyou' ||
    pathname === '/ads-digital-marketing-thankyou';

  return (
    <PostHogProvider>
      {/* Microsoft Clarity analytics (skip studio/auth) */}
      {!isStudio && !isAuth && <ClarityInit />}

      {/* Preloader - Shows before all content */}
      {!isStudio && !isAuth && !isStandalone && <Preloader />}

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
      {!isStudio && !isAuth && !isStandalone && <Navbar />}

      {/* Global Organization Schema */}
      {!isStudio && !isAuth && <OrganizationSchema />}

      {/* Global LocalBusiness Schema */}
      {!isStudio && !isAuth && <LocalBusinessSchema />}

      {/* Global WebPage Schema */}
      {!isStudio && !isAuth && <WebPageSchema />}

      {/* Home Schema for homepage */}
      {!isStudio && !isAuth && pathname === '/' && <HomeSchema />}

      {/* Breadcrumb Schema for all non-studio, non-auth pages */}
      {!isStudio && !isAuth && <BreadcrumbSchema />}

      {/* Page content */}
      {children}

      {/* Footer for all non-studio, non-auth pages */}
      {!isStudio && !isAuth && !isStandalone && <NewFooter />}
    </PostHogProvider>
  );
}

