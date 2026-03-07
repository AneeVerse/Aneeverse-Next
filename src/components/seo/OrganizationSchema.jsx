export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aneeverse",
    "alternateName": "Aneeverse Creative Solutions",
    "description": "Digital Marketing, Web Development, SEO Optimization, and Creative Design Services",
    "url": "https://aneeverse.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://aneeverse.com/logo.png",
      "width": 200,
      "height": 60
    },
    "image": "https://aneeverse.com/logo.png",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Office No. 03, Plot No. 45, near HP Petrol Pump, Seawoods West, Sector 44",
        "addressLocality": "Seawoods, Navi Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400706",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Wework, Raheja Platinum Road, off Andheri - Kurla Road, Sag Baug, Marol",
        "addressLocality": "Andheri East, Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400059",
        "addressCountry": "IN"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-91527-55529",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "IN"
      },
      {
        "@type": "ContactPoint",
        "email": "team@aneeverse.com",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "IN"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/aneeverse/",
      "https://www.linkedin.com/company/aneeverse",
      "https://www.youtube.com/@AneeVerse"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 50
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 19.0155818,
        "longitude": 73.005389
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design & Development",
            "description": "Custom website design and development services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Optimization",
            "description": "Search engine optimization and local SEO services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "Google Ads, Meta Ads, and social media marketing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Creation",
            "description": "Blog writing, social media content, and creative design"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
