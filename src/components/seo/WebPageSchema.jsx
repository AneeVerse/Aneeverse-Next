"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const WebPageSchema = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Remove any existing webpage schema to avoid duplicates
    const existingScript = document.querySelector('script[data-schema="webpage"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Get page title from document title or generate from pathname
    const getPageTitle = () => {
      if (typeof document !== 'undefined' && document.title) {
        return document.title;
      }

      // Generate title from pathname
      const pathSegments = pathname.split('/').filter(Boolean);
      if (pathSegments.length === 0) return 'Home - Aneeverse';

      const lastSegment = pathSegments[pathSegments.length - 1];
      const title = lastSegment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return `${title} - Aneeverse`;
    };

    // Get page description based on pathname
    const getPageDescription = () => {
      const descriptions = {
        '/': 'Your dedicated, on-call creative & digital marketing team. Design, optimise and advertise your brand-ship campaigns faster, more reliably and at scale.',
        '/services': 'Comprehensive digital marketing services including web design, SEO optimization, social media marketing, and creative design solutions.',
        '/services/website-design': 'Professional website design and development services with responsive design and modern UI/UX.',
        '/services/seo-optimization': 'Comprehensive SEO services to improve search engine rankings and organic traffic.',
        '/services/social-media-creatives': 'Creative design services for social media posts, stories, and advertising campaigns.',
        '/services/brochure-design': 'Professional brochure design services for marketing materials and business collateral.',
        '/services/presentation-design': 'Custom presentation design services for business presentations and pitch decks.',
        '/about': 'Learn about Aneeverse - your trusted partner for digital marketing, web development, and creative design services.',
        '/contact': 'Get in touch with Aneeverse for your digital marketing and web development needs.',
        '/works': 'Explore our portfolio of successful digital marketing campaigns, website designs, and creative projects.',
        '/blog': 'Stay updated with the latest digital marketing trends, SEO tips, and creative design insights from Aneeverse.'
      };

      return descriptions[pathname] || 'Digital Marketing, Web Development, SEO Optimization, and Creative Design Services by Aneeverse.';
    };

    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `https://aneeverse.com${pathname}#webpage`,
      "url": `https://aneeverse.com${pathname}`,
      "name": getPageTitle(),
      "description": getPageDescription(),
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://aneeverse.com/#website",
        "url": "https://aneeverse.com",
        "name": "Aneeverse",
        "description": "Your dedicated, on-call creative & digital marketing team. Design, optimise and advertise your brand-ship campaigns faster, more reliably and at scale.",
        "publisher": {
          "@id": "https://aneeverse.com/#organization"
        }
      },
      "about": {
        "@id": "https://aneeverse.com/#organization"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://aneeverse.com/images/about/aneeverse-office.jpg",
        "width": 1200,
        "height": 630
      },
      "datePublished": "2020-01-01T00:00:00+00:00",
      "dateModified": new Date().toISOString(),
      "breadcrumb": {
        "@id": `https://aneeverse.com${pathname}#breadcrumb`
      },
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": [`https://aneeverse.com${pathname}`]
        }
      ],
      "mainContentOfPage": {
        "@type": "WebPageElement",
        "cssSelector": "article, section"
      },
      "significantLink": [
        "https://aneeverse.com/services",
        "https://aneeverse.com/about",
        "https://aneeverse.com/contact",
        "https://aneeverse.com/works",
        "https://aneeverse.com/blog"
      ],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h2", "h3"]
      }
    };

    // Create and append the script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'webpage');
    script.textContent = JSON.stringify(webPageSchema);
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const scriptToRemove = document.querySelector('script[data-schema="webpage"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [pathname]);

  return null; // This component doesn't render anything visible
};

export default WebPageSchema;
