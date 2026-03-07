export default function HomeSchema() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": "https://aneeverse.com/#organization",
        "name": "Aneeverse",
        "alternateName": "Aneeverse Creative Solutions",
        "url": "https://aneeverse.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aneeverse.com/logo.png",
          "width": 200,
          "height": 60
        },
        "image": "https://aneeverse.com/images/about/aneeverse-office.jpg",
        "description": "Aneeverse is your dedicated, on-call creative & digital marketing team. We provide comprehensive digital marketing services including web design, SEO, social media marketing, content creation, and advertising solutions to help businesses grow online.",
        "telephone": "+91-91527-55529",
        "email": "team@aneeverse.com",
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
        "areaServed": [
          {
            "@type": "Country",
            "name": "India"
          },
          {
            "@type": "City",
            "name": "Mumbai"
          },
          {
            "@type": "City",
            "name": "Delhi"
          },
          {
            "@type": "City",
            "name": "Bangalore"
          }
        ],
        "sameAs": [
          "https://www.instagram.com/aneeverse/",
          "https://www.linkedin.com/company/aneeverse",
          "https://www.youtube.com/@AneeVerse"
        ],
        "founder": {
          "@type": "Person",
          "name": "Aneeverse Team"
        },
        "foundingDate": "2020",
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": "25"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "50",
          "bestRating": "5",
          "worstRating": "1"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Marketing Services",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "Web Design & Development",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Website Design",
                    "description": "Professional website design and development services with responsive design and modern UI/UX"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Landing Pages",
                    "description": "High-converting landing page design and development for marketing campaigns"
                  }
                }
              ]
            },
            {
              "@type": "OfferCatalog",
              "name": "SEO & Digital Marketing",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SEO Optimization",
                    "description": "Comprehensive SEO services to improve search engine rankings and organic traffic"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local SEO",
                    "description": "Local search optimization to help businesses rank higher in local search results"
                  }
                }
              ]
            },
            {
              "@type": "OfferCatalog",
              "name": "Content & Creative Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Content Writing",
                    "description": "Professional content writing services including blog posts, web copy, and marketing materials"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Social Media Creatives",
                    "description": "Creative design services for social media posts, stories, and advertising campaigns"
                  }
                }
              ]
            },
            {
              "@type": "OfferCatalog",
              "name": "Advertising Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Google Ads",
                    "description": "Professional Google Ads management and optimization for maximum ROI"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Meta Ads",
                    "description": "Facebook and Instagram advertising campaigns with targeted audience reach"
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://aneeverse.com/#localbusiness",
        "name": "Aneeverse",
        "image": "https://aneeverse.com/images/about/aneeverse-office.jpg",
        "priceRange": "₹₹",
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
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "19.0330",
          "longitude": "73.0297"
        },
        "url": "https://aneeverse.com",
        "telephone": "+91-91527-55529",
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
        "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Net Banking",
        "currenciesAccepted": "INR"
      },
      {
        "@type": "WebPage",
        "@id": "https://aneeverse.com/#webpage",
        "url": "https://aneeverse.com",
        "name": "Aneeverse - Your Dedicated Creative & Digital Marketing Team",
        "description": "Your dedicated, on-call creative & digital marketing team. Design, optimise and advertise your brand—ship campaigns faster, more reliably and at scale.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://aneeverse.com/#website"
        },
        "about": {
          "@id": "https://aneeverse.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://aneeverse.com/images/about/aneeverse-office.jpg"
        },
        "datePublished": "2020-01-01",
        "dateModified": "2024-12-27"
      },
      {
        "@type": "WebSite",
        "@id": "https://aneeverse.com/#website",
        "url": "https://aneeverse.com",
        "name": "Aneeverse",
        "description": "Your dedicated, on-call creative & digital marketing team. Design, optimise and advertise your brand—ship campaigns faster, more reliably and at scale.",
        "publisher": {
          "@id": "https://aneeverse.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://aneeverse.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aneeverse.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://aneeverse.com"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
    />
  );
}
