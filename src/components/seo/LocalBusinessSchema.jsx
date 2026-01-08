export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://aneeverse.com/#localbusiness",
    "name": "Aneeverse",
    "alternateName": "Aneeverse Creative Solutions",
    "description": "Digital Marketing, Web Development, SEO Optimization, and Creative Design Services",
    "url": "https://aneeverse.com",
    "image": "https://aneeverse.com/logo.png",
    "logo": {
      "@type": "ImageObject",
      "url": "https://aneeverse.com/logo.png",
      "width": 200,
      "height": 60
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 03, Plot No. 45, near HP Petrol Pump, Seawoods West, Sector 44",
      "addressLocality": "Seawoods, Navi Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400706",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.0155818,
      "longitude": 73.005389
    },
    "telephone": "+91-91527-55529",
    "email": "team@aneeverse.com",
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "15:00"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 19.0155818,
        "longitude": 73.005389
      },
      "geoRadius": "50000"
    },
    "sameAs": [
      "https://www.instagram.com/aneeverse/",
      "https://www.linkedin.com/company/aneeverse",
      "https://www.youtube.com/@AneeVerse"
    ],
    "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Net Banking",
    "currenciesAccepted": "INR",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Local Business Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design & Development",
            "description": "Custom website design and development services for local businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO",
            "description": "Local search optimization to help businesses rank higher in local search results"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google My Business Optimization",
            "description": "GMB profile optimization for improved local visibility"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "Local digital marketing services including Google Ads and social media marketing"
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
