"use client";

import { useEffect } from 'react';

const ServiceSchema = ({ 
  serviceName,
  serviceType = "Service", // Can be "Service", "ProfessionalService", "FinancialService", etc.
  description,
  slug,
  price,
  priceRange,
  currency = "INR",
  serviceArea = "India",
  availableLanguage = ["English", "Hindi"],
  hoursAvailable,
  category,
  features = [],
  benefits = [],
  serviceOutput,
  additionalType,
  audience,
  serviceUrl
}) => {
  useEffect(() => {
    if (!serviceName || !description) return;

    // Remove any existing service schema to avoid duplicates
    const existingScript = document.querySelector(`script[data-schema="service-${slug}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    // Base service schema following 2025 best practices
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": serviceType,
      "name": serviceName,
      "description": description,
      "url": serviceUrl || `https://aneeverse.com/services/${slug}`,
      "provider": {
        "@type": "Organization",
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
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 03, Plot No. 45, near HP Petrol Pump, Seawoods West, Sector 44",
          "addressLocality": "Seawoods, Navi Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400706",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-91527-55529",
          "email": "team@aneeverse.com",
          "contactType": "customer service",
          "availableLanguage": availableLanguage,
          "areaServed": serviceArea
        },
        "sameAs": [
          "https://www.instagram.com/aneeverse/",
          "https://www.linkedin.com/company/aneeverse",
          "https://www.youtube.com/@AneeVerse"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "50",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      "serviceType": serviceName,
      "areaServed": {
        "@type": "Country",
        "name": serviceArea
      },
      "availableLanguage": availableLanguage,
      "category": category || "Digital Marketing Services",
      "isRelatedTo": [
        {
          "@type": "Thing",
          "name": "Digital Marketing"
        },
        {
          "@type": "Thing",
          "name": "Web Development"
        },
        {
          "@type": "Thing",
          "name": "SEO"
        },
        {
          "@type": "Thing",
          "name": "Creative Design"
        }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": serviceUrl || `https://aneeverse.com/services/${slug}`
      },
      "potentialAction": {
        "@type": "ConsumeAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://aneeverse.com/contact",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        },
        "expectsAcceptanceOf": {
          "@type": "Offer",
          "category": "Service Consultation"
        }
      },
      "brand": {
        "@type": "Brand",
        "name": "Aneeverse"
      },
      "inLanguage": "en-US",
      "dateModified": new Date().toISOString(),
      "isAccessibleForFree": false
    };

    // Add pricing information if provided
    if (price || priceRange) {
      serviceSchema.offers = {
        "@type": "Offer",
        "priceCurrency": currency,
        "availability": "https://schema.org/InStock",
        "validFrom": new Date().toISOString(),
        "seller": {
          "@type": "Organization",
          "@id": "https://aneeverse.com/#organization"
        }
      };

      if (price) {
        serviceSchema.offers.price = price;
      }
      
      if (priceRange) {
        serviceSchema.offers.priceRange = priceRange;
      }
    }

    // Add hours of availability if provided
    if (hoursAvailable) {
      serviceSchema.hoursAvailable = hoursAvailable;
    }

    // Add additional type for more specific categorization
    if (additionalType) {
      serviceSchema.additionalType = additionalType;
    }

    // Add service features as hasOfferCatalog
    if (features.length > 0) {
      serviceSchema.hasOfferCatalog = {
        "@type": "OfferCatalog",
        "name": `${serviceName} Features`,
        "itemListElement": features.map((feature, index) => ({
          "@type": "Offer",
          "position": index + 1,
          "itemOffered": {
            "@type": "Service",
            "name": feature
          }
        }))
      };
    }

    // Add service output/deliverables
    if (serviceOutput) {
      serviceSchema.serviceOutput = {
        "@type": "Thing",
        "name": serviceOutput
      };
    }

    // Add target audience
    if (audience) {
      serviceSchema.audience = {
        "@type": "Audience",
        "audienceType": audience
      };
    }

    // Add benefits as about entities
    if (benefits.length > 0) {
      serviceSchema.about = benefits.map(benefit => ({
        "@type": "Thing",
        "name": benefit
      }));
    }

    // Create and append the script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', `service-${slug}`);
    script.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const scriptToRemove = document.querySelector(`script[data-schema="service-${slug}"]`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [serviceName, serviceType, description, slug, price, priceRange, currency, serviceArea, availableLanguage, hoursAvailable, category, features, benefits, serviceOutput, additionalType, audience, serviceUrl]);

  return null; // This component doesn't render anything visible
};

export default ServiceSchema;