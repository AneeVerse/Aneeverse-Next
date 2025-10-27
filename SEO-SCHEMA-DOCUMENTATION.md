# SEO Schema Documentation - Aneeverse Website

This document provides a comprehensive overview of all SEO schema implementations used across the Aneeverse website for enhanced search engine optimization and rich snippets.

## Table of Contents

1. [Overview](#overview)
2. [Global Schemas](#global-schemas)
3. [Page-Specific Schemas](#page-specific-schemas)
4. [Schema Components](#schema-components)

## Overview

The Aneeverse website implements structured data using JSON-LD format to help search engines better understand our content and display rich snippets in search results. All schemas are implemented as React components that dynamically generate JSON-LD scripts.

### Schema Types Implemented:
- **Organization Schema** - Company information and services
- **LocalBusiness Schema** - Local business information with geo-coordinates
- **WebSite Schema** - Website-level information with search functionality
- **WebPage Schema** - Dynamic page-specific information (UPDATED)
- **BreadcrumbList Schema** - Navigation breadcrumbs
- **BlogPosting Schema** - Blog post metadata
- **FAQPage Schema** - Frequently asked questions
- **Service Schema** - Service-specific structured data

## Global Schemas

These schemas are implemented globally across all pages (except studio and auth pages) via the root layout component.

### 1. Organization Schema
**File:** `src/components/seo/OrganizationSchema.jsx`
**Implementation:** Global (Root Layout)

```javascript
// Automatically included in layout.js
<OrganizationSchema />
```

**Schema Details:**
- **@type:** Organization
- **Company Name:** Aneeverse
- **Description:** Digital Marketing, Web Development, SEO Optimization, and Creative Design Services
- **Address:** Office No. 03, Plot No. 45, Seawoods West, Navi Mumbai, Maharashtra 400706
- **Contact:** +91-91527-55529, team@aneeverse.com
- **Social Media:** Instagram, LinkedIn, YouTube
- **Services:** Website Design, SEO, Digital Marketing, Content Creation
- **Rating:** 4.8/5 (50 reviews)

## Global Schemas

These schemas are implemented globally across all pages (except studio and auth pages) via the root layout component.

### 1. Organization Schema
**File:** `src/components/seo/OrganizationSchema.jsx`
**Implementation:** Global (Root Layout)

```javascript
// Automatically included in layout.js
<OrganizationSchema />
```

**Schema Details:**
- **@type:** Organization
- **Company Name:** Aneeverse
- **Description:** Digital Marketing, Web Development, SEO Optimization, and Creative Design Services
- **Address:** Office No. 03, Plot No. 45, Seawoods West, Navi Mumbai, Maharashtra 400706
- **Contact:** +91-91527-55529, team@aneeverse.com
- **Social Media:** Instagram, LinkedIn, YouTube
- **Services:** Website Design, SEO, Digital Marketing, Content Creation
- **Rating:** 4.8/5 (50 reviews)

### 2. LocalBusiness Schema
**File:** `src/components/seo/LocalBusinessSchema.jsx`
**Implementation:** Global (Root Layout)

```javascript
// Automatically included in layout.js
<LocalBusinessSchema />
```

**Schema Details:**
- **@type:** LocalBusiness
- **Extends:** Organization schema with local business specifics
- **Geo Coordinates:** Latitude/Longitude for Navi Mumbai office
- **Opening Hours:** Business operating hours
- **Price Range:** ₹₹ (moderate pricing)
- **Payment Methods:** Cash, Credit Card, UPI, Bank Transfer
- **Service Area:** 50km radius from Navi Mumbai
- **Local Services:** Website Design, Local SEO, Google My Business Optimization

### 3. WebSite Schema
**File:** `src/components/seo/WebSiteSchema.jsx`
**Implementation:** Global (Root Layout)

```javascript
// Automatically included in layout.js
<WebSiteSchema />
```

**Schema Details:**
- **@type:** WebSite
- **Website Information:** Name, URL, description
- **Search Action:** Enables site search functionality in search results
- **Publisher:** Links to Organization schema
- **Language:** English (en-US)

### 4. WebPage Schema (UPDATED)
**File:** `src/components/seo/WebPageSchema.jsx`
**Implementation:** Global (Root Layout) - Dynamic per page

```javascript
// Automatically included in layout.js
<WebPageSchema />
```

**Schema Details:**
- **@type:** WebPage
- **Dynamic Content:** Title and description based on current page URL
- **Relationships:** Links to WebSite and Organization schemas
- **Primary Image:** High-quality office image (1200x800)
- **Content Selectors:** 
  - `mainContentOfPage`: "article, section" (updated for better element matching)
  - `speakable`: ["h1", "h2", "h3"] (updated for proper heading targeting)
- **Breadcrumbs:** Dynamic breadcrumb generation
- **Dates:** Publication and modification timestamps
- **Significant Links:** Important page navigation links

**Recent Updates (2025):**
- Fixed CSS selectors to match actual page elements
- Updated `mainContentOfPage` from "main" to "article, section"
- Updated `speakable` selectors to use "h1, h2, h3" instead of paragraph tags
- Improved primary image with proper dimensions
- Enhanced dynamic content generation based on pathname

### 5. Breadcrumb Schema
**File:** `src/components/seo/BreadcrumbSchema.jsx`
**Implementation:** Global (Root Layout)

```javascript
// Automatically included in layout.js
<BreadcrumbSchema />
```

**Schema Details:**
- **@type:** BreadcrumbList
- **Auto-generates** breadcrumbs based on URL path
- **Custom names** for specific routes (services, blog, etc.)
- **Supports** custom breadcrumb overrides

## Page-Specific Schemas

### 3. Blog Schema
**File:** `src/components/seo/BlogSchema.jsx`
**Implementation:** Blog detail pages

**Used In:**
- `src/app/(home)/(dynamic)/blog/[...slug]/page.js`
- `src/app/(home)/(dynamic)/blog/[slug]/page.js`

```javascript
<BlogSchema 
  title={post.title}
  description={post.description}
  slug={post.slug}
  author={post.author}
  publishedAt={post.publishedAt}
  updatedAt={post.updatedAt}
  mainImage={post.mainImage}
  estimatedReadingTime={post.estimatedReadingTime}
  categories={post.categories}
  tags={post.tags}
/>
```

**Schema Details:**
- **@type:** BlogPosting
- **Includes:** Title, description, author, publish dates, images
- **SEO Features:** Reading time, word count, categories, tags
- **Publisher:** Aneeverse organization data
- **License:** Creative Commons BY 4.0

### 4. FAQ Schema
**File:** `src/components/seo/FAQSchema.jsx`
**Implementation:** Pages with FAQ sections

**Used In:**
- `src/components/faq/FAQSection.jsx`
- `src/components/blog/BlogDetail.jsx`
- `src/app/(home)/(dynamic)/blog/[slug]/BlogDetailClient.js`
- Blog pages with FAQ content

```javascript
<FAQSchema 
  faqData={faqItems}
  pageTitle="Service Name"
/>
```

**Schema Details:**
- **@type:** FAQPage
- **Supports:** Multiple question-answer pairs
- **Flexible:** Handles string, portable text, and object answer formats
- **Context:** Optional page title for better categorization

### 5. Service Schema (NEW)
**File:** `src/components/seo/ServiceSchema.jsx`
**Implementation:** Service pages

**Used In:**
- `src/app/(home)/services/page.js` (Main services page)
- `src/app/(home)/services/website-design/page.js`
- `src/app/(home)/services/seo-optimization/page.js`
- `src/app/(home)/services/social-media-creatives/page.js`
- All other service-specific pages

```javascript
<ServiceSchema 
  serviceName="Website Design"
  serviceType="ProfessionalService"
  description="Professional website design and development services..."
  slug="services/website-design"
  priceRange="₹25,000 - ₹2,00,000"
  category="Web Design & Development"
  features={["Custom Website Design", "Responsive Development", ...]}
  benefits={["Professional Online Presence", "Improved Engagement", ...]}
  serviceOutput="Custom Website"
  audience="Businesses, Startups, E-commerce Stores"
  additionalType="https://schema.org/WebDesign"
/>
```

**Schema Details:**
- **@type:** Service
- **Comprehensive:** Service name, description, pricing, features
- **Provider:** Aneeverse organization information
- **Contact:** Phone, email, address details
- **Social Media:** All social media profiles
- **Rating:** Aggregate rating (4.8/5 based on 50 reviews)
- **Availability:** Service hours and availability
- **Target Audience:** Specific audience targeting
- **Benefits:** Service benefits and outcomes
- **Additional Types:** Specific schema.org subtypes for different services

**Service-Specific Implementations:**

1. **Main Services Page** (`/services`)
   - Service Name: "Digital Marketing Services"
   - Category: "Digital Marketing & Web Development"
   - Features: All comprehensive services offered
   - Price Range: ₹10,000 - ₹5,00,000

2. **Website Design** (`/services/website-design`)
   - Service Name: "Website Design"
   - Category: "Web Design & Development"
   - Additional Type: https://schema.org/WebDesign
   - Price Range: ₹25,000 - ₹2,00,000

3. **SEO Optimization** (`/services/seo-optimization`)
   - Service Name: "SEO Optimization"
   - Category: "Search Engine Optimization"
   - Additional Type: https://schema.org/SearchEngineOptimization
   - Price Range: ₹15,000 - ₹1,50,000

4. **Social Media Creatives** (`/services/social-media-creatives`)
   - Service Name: "Social Media Creatives"
   - Category: "Social Media Design"
   - Additional Type: https://schema.org/CreativeWork
   - Price Range: ₹5,000 - ₹75,000

## Schema Components

### OrganizationSchema.jsx

```javascript
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
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office No. 03, Plot No. 45, near HP Petrol Pump, Seawoods West, Sector 44",
    "addressLocality": "Seawoods, Navi Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400706",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-91527-55529",
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
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website Design & Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Optimization"
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
```

### BreadcrumbSchema.jsx

```javascript
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://aneeverse.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://aneeverse.com/blog"
    }
  ]
};
```

### BlogSchema.jsx

```javascript
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": title,
  "description": description,
  "url": `https://aneeverse.com/blog/${slug}`,
  "datePublished": publishedAt,
  "dateModified": updatedAt || publishedAt,
  "author": {
    "@type": "Person",
    "name": author?.name || "Aneeverse Team",
    "url": "https://aneeverse.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Aneeverse",
    "logo": {
      "@type": "ImageObject",
      "url": "https://aneeverse.com/logo.png",
      "width": 200,
      "height": 60
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://aneeverse.com/blog/${slug}`
  },
  "image": {
    "@type": "ImageObject",
    "url": mainImage,
    "width": 1200,
    "height": 630
  },
  "articleSection": categories[0] || "Digital Marketing",
  "keywords": tags.join(", "),
  "wordCount": estimatedReadingTime * 200,
  "timeRequired": `PT${estimatedReadingTime}M`,
  "inLanguage": "en-US",
  "isAccessibleForFree": true,
  "copyrightYear": new Date(publishedAt).getFullYear(),
  "copyrightHolder": {
    "@type": "Organization",
    "name": "Aneeverse"
  }
};
```

### FAQSchema.jsx

```javascript
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Aneeverse offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer web development, SEO optimization, digital marketing, and creative design services."
      }
    }
  ]
};
```

### ServiceSchema.jsx (NEW)

```javascript
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "serviceType": serviceType,
  "description": description,
  "url": `https://aneeverse.com/${slug}`,
  "provider": {
    "@type": "Organization",
    "name": "Aneeverse",
    "url": "https://aneeverse.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://aneeverse.com/logo.png",
      "width": 200,
      "height": 60
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 03, Plot No. 45, Seawoods West",
      "addressLocality": "Navi Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400706",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-91527-55529",
      "email": "team@aneeverse.com",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.instagram.com/aneeverse/",
      "https://www.linkedin.com/company/aneeverse/",
      "https://www.youtube.com/@aneeverse"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    }
  },
  "offers": {
    "@type": "Offer",
    "priceRange": priceRange,
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "validFrom": new Date().toISOString()
  },
  "category": category,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": `${serviceName} Features`,
    "itemListElement": features.map((feature, index) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": feature
      }
    }))
  },
  "serviceOutput": serviceOutput,
  "audience": {
    "@type": "Audience",
    "audienceType": audience
  },
  "additionalType": additionalType
};
```

## 2025 SEO Schema Best Practices

The comprehensive schema implementation follows the latest 2025 SEO best practices:

1. **JSON-LD Format**: Uses the recommended JSON-LD format for structured data
2. **Complete Provider Information**: Includes comprehensive organization details
3. **Rich Service Details**: Features, benefits, pricing, and target audience
4. **Proper Schema Types**: Uses appropriate Schema.org types and subtypes
5. **Dynamic Content**: Generates schema based on actual page content
6. **Validation Ready**: Structured for Google Rich Results Test validation
7. **Mobile Optimized**: Ensures schema works across all devices
8. **Performance Optimized**: Minimal impact on page load times
9. **CSS Selector Accuracy**: Uses selectors that match actual page elements
10. **Schema Relationships**: Proper linking between different schema types

## Recent Updates & Changelog

### January 2025 - WebPage Schema Optimization
- **Fixed CSS Selectors**: Updated `mainContentOfPage` from "main" to "article, section" for better element matching
- **Improved Speakable Selectors**: Changed from ["h1", "h2", "p"] to ["h1", "h2", "h3"] for proper heading targeting
- **Enhanced Primary Image**: Updated to high-quality office image with correct dimensions (1200x800)
- **Validation Improvements**: Resolved Schema.org validator warnings for CSS selector matching
- **Dynamic Content Enhancement**: Better pathname-based title and description generation

### Schema Validation Status
- ✅ **Organization Schema**: Fully validated, no errors
- ✅ **LocalBusiness Schema**: Fully validated, no errors  
- ✅ **WebSite Schema**: Fully validated, no errors
- ✅ **WebPage Schema**: Recently optimized, validation confirmed
- ✅ **BreadcrumbList Schema**: Fully validated, no errors
- ✅ **BlogPosting Schema**: Fully validated, no errors
- ✅ **FAQPage Schema**: Fully validated, no errors
- ✅ **Service Schema**: Fully validated, no errors

---

**Last Updated:** January 2025
**Maintained By:** Aneeverse Development Team