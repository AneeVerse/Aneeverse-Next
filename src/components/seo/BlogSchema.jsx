"use client";

import { useEffect } from 'react';

const BlogSchema = ({ 
  title, 
  description, 
  slug, 
  author, 
  publishedAt, 
  updatedAt, 
  mainImage, 
  estimatedReadingTime,
  categories = [],
  tags = []
}) => {
  useEffect(() => {
    if (!title || !slug) return;

    // Remove any existing blog schema to avoid duplicates
    const existingScript = document.querySelector('script[data-schema="blog-posting"]');
    if (existingScript) {
      existingScript.remove();
    }

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
      "image": mainImage ? {
        "@type": "ImageObject",
        "url": mainImage,
        "width": 1200,
        "height": 630
      } : {
        "@type": "ImageObject",
        "url": "https://aneeverse.com/default-blog-image.jpg",
        "width": 1200,
        "height": 630
      },
      "articleSection": categories.length > 0 ? categories[0] : "Digital Marketing",
      "keywords": tags.length > 0 ? tags.join(", ") : "digital marketing, web development, SEO",
      "wordCount": estimatedReadingTime ? estimatedReadingTime * 200 : 1000, // Approximate word count
      "timeRequired": estimatedReadingTime ? `PT${estimatedReadingTime}M` : "PT5M",
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "copyrightYear": new Date(publishedAt).getFullYear(),
      "copyrightHolder": {
        "@type": "Organization",
        "name": "Aneeverse"
      },
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "about": [
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
        }
      ]
    };

    // Add categories as additional about entities
    if (categories.length > 0) {
      categories.forEach(category => {
        blogSchema.about.push({
          "@type": "Thing",
          "name": category
        });
      });
    }

    // Create and append the script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'blog-posting');
    script.textContent = JSON.stringify(blogSchema);
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const scriptToRemove = document.querySelector('script[data-schema="blog-posting"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, slug, author, publishedAt, updatedAt, mainImage, estimatedReadingTime, categories, tags]);

  return null; // This component doesn't render anything visible
};

export default BlogSchema;