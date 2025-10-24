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
- **BreadcrumbList Schema** - Navigation breadcrumbs
- **BlogPosting Schema** - Blog post metadata
- **FAQPage Schema** - Frequently asked questions
- **WebPage Schema** - General page information

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

### 2. Breadcrumb Schema
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

---

**Last Updated:** December 2024
**Maintained By:** Aneeverse Development Team