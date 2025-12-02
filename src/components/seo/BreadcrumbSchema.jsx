"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const BreadcrumbSchema = ({ customBreadcrumbs = null }) => {
  const pathname = usePathname();

  useEffect(() => {
    // Remove any existing breadcrumb schema to avoid duplicates
    const existingScript = document.querySelector('script[data-schema="breadcrumb"]');
    if (existingScript) {
      existingScript.remove();
    }

    let breadcrumbItems = [];

    if (customBreadcrumbs) {
      // Use custom breadcrumbs if provided
      breadcrumbItems = customBreadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }));
    } else {
      // Generate breadcrumbs from pathname
      const pathSegments = pathname.split('/').filter(segment => segment !== '');
      
      // Always start with home
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://aneeverse.com"
      });

      // Build breadcrumbs from path segments
      let currentPath = '';
      pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        
        // Custom names for specific routes
        const customNames = {
          'blog': 'Blog',
          'services': 'Services',
          'about': 'About Us',
          'contact': 'Contact Us',
          'pricing': 'Pricing',
          'works': 'Our Works',
          'customer-stories': 'Customer Stories',
          'faq': 'FAQ',
          'website-design': 'Website Design',
          'landing-pages': 'Landing Pages',
          'seo-optimization': 'SEO Optimization',
          'email-design': 'Email Design',
          'marketing-strategy': 'Marketing Strategy',
          'email-campaign': 'Email Campaigns',
          'blog-writing': 'Blog Writing',
          'ghost-writing': 'Ghost Writing',
          'social-media-creatives': 'Social Media Creatives',
          'presentation-design': 'Presentation Design',
          'brochure-design': 'Brochure Design'
        };

        const displayName = customNames[segment] || 
          segment.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ');

        breadcrumbItems.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": displayName,
          "item": `https://aneeverse.com${currentPath}`
        });
      });
    }

    // Only create schema if we have more than just the home item
    if (breadcrumbItems.length > 1) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems
      };

      // Create and append the script tag
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema', 'breadcrumb');
      script.textContent = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(script);
    }

    // Cleanup function to remove script when component unmounts
    return () => {
      const scriptToRemove = document.querySelector('script[data-schema="breadcrumb"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [pathname, customBreadcrumbs]);

  return null; // This component doesn't render anything visible
};

export default BreadcrumbSchema;