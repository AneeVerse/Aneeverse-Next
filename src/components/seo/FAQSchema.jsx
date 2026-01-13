"use client";

import { useEffect } from 'react';

const FAQSchema = ({ faqData = [], pageTitle = null }) => {
  useEffect(() => {
    if (!faqData || faqData.length === 0) return;

    // Remove any existing FAQ schema to avoid duplicates
    const existingScript = document.querySelector('script[data-schema="faq"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Transform FAQ data into schema format
    const faqItems = faqData.map(item => {
      let answerText = '';
      
      // Handle different answer formats (string, portable text, etc.)
      if (typeof item.answer === 'string') {
        answerText = item.answer;
      } else if (Array.isArray(item.answer)) {
        // Handle Sanity portable text format
        answerText = item.answer
          .map(block => {
            if (block._type === 'block' && block.children) {
              return block.children.map(child => child.text).join('');
            }
            return '';
          })
          .join(' ');
      } else if (item.answer && typeof item.answer === 'object' && item.answer.text) {
        answerText = item.answer.text;
      }

      return {
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answerText
        }
      };
    });

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems
    };

    // If this is for a specific page, add additional context
    if (pageTitle) {
      faqSchema.name = `${pageTitle} - Frequently Asked Questions`;
      faqSchema.description = `Frequently asked questions about ${pageTitle}`;
    }

    // Create and append the script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'faq');
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const scriptToRemove = document.querySelector('script[data-schema="faq"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [faqData, pageTitle]);

  return null; // This component doesn't render anything visible
};

export default FAQSchema;
