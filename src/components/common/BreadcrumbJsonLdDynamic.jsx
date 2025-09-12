"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BreadcrumbJsonLd } from "next-seo";

function toTitleCase(segment) {
  return decodeURIComponent(segment)
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Custom breadcrumb names for specific routes
const customBreadcrumbNames = {
  'our-work': 'Our Work',
  'customer-stories': 'Customer Stories',
  'seo-optimization': 'SEO Optimization',
  'web-design': 'Web Design',
  'content-marketing': 'Content Marketing',
  'e-commerce': 'E-commerce',
  'ui-ux-design': 'UI/UX Design',
  'local-seo': 'Local SEO',
  'web-development': 'Web Development',
  'blog': 'Blog',
  'about': 'About Us',
  'services': 'Services',
  'pricing': 'Pricing',
  'contact': 'Contact',
  'works': 'Portfolio',
  'team': 'Our Team'
};

export default function BreadcrumbJsonLdDynamic({
  baseUrl = "https://aneeverse.com",
  rootName = "Home",
}) {
  const pathname = usePathname() || "/";
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const segments = pathname
    .split("/")
    .filter(Boolean);

  const itemListElements = [
    {
      position: 1,
      name: rootName,
      item: baseUrl,
    },
  ];

  let cumulativePath = "";
  segments.forEach((segment, index) => {
    cumulativePath += `/${segment}`;
    
    // Use custom name if available, otherwise convert to title case
    const breadcrumbName = customBreadcrumbNames[segment] || toTitleCase(segment);
    
    itemListElements.push({
      position: index + 2,
      name: breadcrumbName,
      item: `${baseUrl}${cumulativePath}`,
    });
  });

  // Avoid rendering during prerender/build
  if (!isMounted) return null;
  
  // Debug: Log breadcrumb data
  console.log('Breadcrumb data:', {
    pathname,
    segments,
    itemListElements,
    isMounted
  });

  return (
    <>
      {/* Debug info - remove in production */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: itemListElements
          })
        }}
      />
      <BreadcrumbJsonLd
        useAppDir
        itemListElements={itemListElements}
      />
    </>
  );
}