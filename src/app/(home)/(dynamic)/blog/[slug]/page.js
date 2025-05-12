"use client";
import { use, useEffect, useRef, useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Layout from '@/components/common/Layout';
import { blogs } from '@/data/blogData';
import Image from 'next/image';
import { FaRegClock } from "react-icons/fa6";
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import Newsletter from '@/components/blog/NewsLetter';
import BlogCard from '@/components/blog/BlogCard';
import React from 'react';
import RelatedBlogs from '@/components/blog/RelatedBlogs';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { motion } from 'framer-motion';
import BlogFAQ from '@/components/blog/BlogFAQ';
import '../blogStyles.css';
import TableOfContents from '@/components/blog/TableOfContents';
import ReadTimeProgress from '@/components/blog/ReadTimeProgress';
import { getNormalizedCategoryName } from '@/utils/categoryUtils';

// More efficient approach to fetch blog post
const getBlogPost = async (slug) => {
  try {
    console.log('Attempting to fetch blog post with slug:', slug);
    
    // First try to fetch from Sanity API
    try {
      const sanityResponse = await fetch(`/api/sanity-blogs/${slug}`, {
        cache: 'no-store',
        next: { revalidate: 60 }
      });
      
      if (sanityResponse.ok) {
        const sanityData = await sanityResponse.json();
        console.log('Sanity API Response:', sanityData);
        
        if (sanityData.success && sanityData.blog) {
          console.log('Successfully fetched from Sanity');
          // Make sure we have FAQ data if available
          const blogData = sanityData.blog;
          console.log('Checking for FAQ data:', blogData.includeFaq, blogData.faqSection);
          return blogData;
        }
      }
      console.log('Sanity fetch failed or returned no data, trying regular API');
    } catch (sanityErr) {
      console.error("Error fetching from Sanity:", sanityErr);
    }
    
    // If Sanity fails, try the regular API
    try {
      const response = await fetch(`/api/blogs/${slug}`, {
        cache: 'no-store',
        next: { revalidate: 60 }
      });
      
      const data = await response.json();
      console.log('Regular API Response:', data);
      
      if (response.ok && data.success && data.blog) {
        console.log('Successfully fetched from regular API');
        return data.blog;
      }
    } catch (apiErr) {
      console.error("Error fetching from regular API:", apiErr);
    }
    
    // Fall back to static data if both APIs fail
    const staticBlog = blogs.find((blog) => blog.slug === slug);
    console.log('Using static blog data:', staticBlog);
    return staticBlog;
  } catch (err) {
    console.error("Error in blog fetching process:", err);
    // Final fallback to static data
    return blogs.find((blog) => blog.slug === slug);
  }
};

// Function to fetch blogs by category
const fetchBlogsByCategory = async (category) => {
  try {
    // Get normalized category using the utility function
    const normalizedCategory = getNormalizedCategoryName(category);
    console.log('Normalized Category:', normalizedCategory);
    
    // Get static data first
    const staticBlogs = blogs.filter(blog => {
      if (!blog || !blog.category) return false;
      return blog.category.toLowerCase() === normalizedCategory;
    });
    console.log('Static Blogs:', staticBlogs.length);
    
    // Then fetch from API with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    try {
      const apiUrl = `/api/sanity-blogs?category=${encodeURIComponent(normalizedCategory)}`;
      console.log('Fetching from API:', apiUrl);
      
      const response = await fetch(apiUrl, { 
        signal: controller.signal,
        cache: 'no-store',
        headers: { 'Content-Type': 'application/json' }
      });
      
      clearTimeout(timeoutId);
      
      // Check if response is ok first
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API error response:', response.status, errorText);
        throw new Error(`API returned ${response.status}: ${errorText}`);
      }
      
      const data = await response.json();
      console.log('API Response data:', {
        success: data.success,
        blogCount: data.blogs?.length,
        pagination: data.pagination
      });
      
      let apiBlogs = [];
      if (data.success && data.blogs) {
        apiBlogs = data.blogs;
        console.log('API Blogs:', apiBlogs.length);
      }
      
      // Combine both sources and remove duplicates by ID
      const allBlogs = [...staticBlogs, ...apiBlogs];
      const uniqueBlogs = allBlogs.reduce((acc, current) => {
        const x = acc.find(item => item.id === current.id);
        if (!x) {
          return acc.concat([current]);
        } else {
          // If duplicate found, prefer API version
          const apiVersion = apiBlogs.find(blog => blog.id === current.id);
          if (apiVersion) {
            // Replace with API version
            return acc.map(item => item.id === current.id ? apiVersion : item);
          }
          return acc;
        }
      }, []);
      
      console.log('Total unique blogs:', uniqueBlogs.length);
      return { blogs: uniqueBlogs, categoryInfo: null, error: null };
      
    } catch (err) {
      console.error("API fetch error:", err);
      clearTimeout(timeoutId);
      return { blogs: staticBlogs, categoryInfo: null, error: "API request failed" };
    }
    
  } catch (err) {
    console.error("Error in fetchBlogsByCategory:", err);
    return { blogs: [], categoryInfo: null, error: "Failed to fetch blogs" };
  }
};

// Check if a slug might be a blog post
const isBlogPostSlug = (slug) => {
  return blogs.some(blog => blog.slug === slug);
};

export default function UniversalSlugPage() {
  const router = useRouter();
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageUrl, setPageUrl] = useState('');
  
  // States for category view
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState(null);
  
  // States for blog post view
  const [post, setPost] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(false);
  const [authorImageError, setAuthorImageError] = useState(false);
  const [isBlogPost, setIsBlogPost] = useState(false);
  
  // Use only one mechanism for scroll spy
  const activeId = useScrollSpy('h2'); 
  const contentRef = useRef(null);

  // Default images
  const defaultThumbnail = "/images/blog1.avif";
  const defaultAuthorImage = "/images/blog/author/abhi.png";
  
  // Get current URL for share links (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPageUrl(window.location.href);
    }
  }, [slug]);
  
  // Update URL when active section changes
  useEffect(() => {
    if (activeId && typeof window !== 'undefined') {
      // Update URL hash without scrolling
      const newHash = `#${activeId}`;
      if (window.location.hash !== newHash) {
        window.history.replaceState(null, '', newHash);
      }
    }
  }, [activeId]);

  // Social sharing icons section
  const renderSocialIcons = () => (
    <div className="flex items-center justify-center gap-3 mb-20">
      <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`} 
        className="w-12 h-12 rounded-full border border-[#1A5170] bg-transparent flex items-center justify-center hover:bg-[#0A2E3D]/10 transition-colors"
        target="_blank" rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#0A2E3D]">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </Link>
      <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`} 
        className="w-12 h-12 rounded-full border border-[#1A5170] bg-transparent flex items-center justify-center hover:bg-[#0A2E3D]/10 transition-colors"
        target="_blank" rel="noopener noreferrer"
        aria-label="Share on Facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#0A2E3D]">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      </Link>
      <button 
        onClick={() => {
          if (typeof window !== 'undefined' && navigator.clipboard) {
            navigator.clipboard.writeText(pageUrl);
            alert('Link copied to clipboard!');
          }
        }} 
        className="w-12 h-12 rounded-full border border-[#1A5170] bg-transparent flex items-center justify-center hover:bg-[#0A2E3D]/10 transition-colors"
        aria-label="Copy link to clipboard"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A2E3D]">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      </button>
      <Link 
        href={`mailto:?subject=${post?.title ? encodeURIComponent(post.title) : ''}&body=${encodeURIComponent(`Check out this article: ${pageUrl}`)}`} 
        className="w-12 h-12 rounded-full border border-[#1A5170] bg-transparent flex items-center justify-center hover:bg-[#0A2E3D]/10 transition-colors"
        aria-label="Share via email"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A2E3D]">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </Link>
    </div>
  );

  // Category images map
  const categoryImages = {
    "creative-design": {
      description: "Explore the latest trends in creative design and branding. Learn how to create stunning visuals.",
    },
    "marketing-strategies": {
      description: "Learn about the latest marketing strategies and growth hacks. Stay updated with the latest trends in marketing.",
    },
    "digital-advertising": {
      description: "Stay updated with the latest trends in digital advertising. Learn how to create effective ad campaigns.",
    },
    "ebay": {
      description: "Learn about eBay marketing strategies, seller tips, and how to maximize your success on the platform.",
    },
    "design": {
      description: "Explore the latest trends in design and learn how to create stunning visuals for your brand.",
    },
    "e-commerce": {
      description: "Learn strategies to grow your online store and increase conversions.",
    },
    "technology": {
      description: "Stay updated with the latest technology trends and learn how to leverage them for your business.",
    },
    "aneeverse-news": {
      description: "Discover our latest articles about aneeverse news.",
    },
    "web": {
      description: "Learn about web development, design, and optimization strategies.",
    },
  };

  useEffect(() => {
    if (!slug) return;
    
    const loadContent = async () => {
      setIsLoading(true);
      
      // Try to fetch the blog post first
      try {
        const blogPost = await getBlogPost(slug);
        
        if (blogPost) {
          // It's a blog post
          setPost(blogPost);
          setIsBlogPost(true);
          setIsLoading(false);
          return;
        }
        
        // If not a blog post, treat as a category
        try {
          // Get category info using the utility function
          const normalizedCategory = getNormalizedCategoryName(slug);
          setCategoryInfo({
            title: normalizedCategory,
            description: categoryImages[slug.toLowerCase()]?.description || 
              `Discover our latest articles about ${normalizedCategory}.`,
          });
          
          // Fetch blogs with the more efficient function
          const result = await fetchBlogsByCategory(slug);
          
          if (result.error) {
            console.warn(result.error);
          }
          
          setFilteredBlogs(result.blogs);
          setIsBlogPost(false);
        } catch (err) {
          console.error("Error loading category content:", err);
          setError("Content not found");
        }
      } catch (err) {
        console.error("Error in content loading process:", err);
        setError("Failed to load content");
      } finally {
        setIsLoading(false);
      }
    };
    
    loadContent();
  }, [slug]);

  // Function to add IDs to HTML headings for linking and fix table styling
  const processHtmlContent = (htmlContent) => {
    if (!htmlContent || typeof htmlContent !== 'string') return htmlContent;
    if (typeof window === 'undefined') return htmlContent; // Skip on server
    
    try {
      // Create a temporary div to parse and modify HTML content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent;
      
      // Find Key Takeaways sections and convert text bullets to proper lists
      const paragraphs = tempDiv.querySelectorAll('p');
      paragraphs.forEach(p => {
        // Check if paragraph text starts with a bullet-like character
        if (p.textContent.trim().startsWith('•') || p.textContent.trim().startsWith('·') || p.textContent.trim().startsWith('-')) {
          // Option 1: Convert to list items
          // Find all bullet paragraphs that should be in a list
          const bulletItems = [];
          let currentP = p;
          
          // Collect consecutive bullet paragraphs
          while (currentP && 
                (currentP.textContent.trim().startsWith('•') || 
                 currentP.textContent.trim().startsWith('·') || 
                 currentP.textContent.trim().startsWith('-'))) {
            bulletItems.push(currentP);
            currentP = currentP.nextElementSibling;
          }
          
          if (bulletItems.length > 0) {
            // Create a new list
            const ul = document.createElement('ul');
            ul.className = 'list-disc pl-6 my-4';
            ul.style.listStyleType = 'disc';
            ul.style.paddingLeft = '1.5rem';
            
            // Add each bullet paragraph as a list item
            bulletItems.forEach(item => {
              const li = document.createElement('li');
              // Remove the bullet character from the beginning
              li.innerHTML = item.textContent.replace(/^[•·-]\s*/, '');
              li.style.display = 'list-item';
              li.style.listStyleType = 'disc';
              ul.appendChild(li);
              
              // Remove the original paragraph
              if (item.parentNode) {
                item.parentNode.removeChild(item);
              }
            });
            
            // Insert the list before the next element after the bullet list
            if (p.parentNode) {
              if (currentP) {
                p.parentNode.insertBefore(ul, currentP);
              } else {
                p.parentNode.appendChild(ul);
              }
            }
          }
        }
        
        // Option 2: For any remaining bullet paragraphs, apply special styling
        if (p.textContent.trim().startsWith('•') || p.textContent.trim().startsWith('·') || p.textContent.trim().startsWith('-')) {
          p.classList.add('bullet-point');
          // Apply inline styling for maximum compatibility
          p.style.position = 'relative';
          p.style.paddingLeft = '1.5rem';
          p.style.display = 'block';
          
          // Add a ::before pseudo-element for the bullet
          const style = document.createElement('style');
          style.textContent = `
            .bullet-point::before {
              content: "•" !important;
              position: absolute !important;
              left: 0 !important;
              top: 0.25em !important;
              font-size: 1.2em !important;
            }
          `;
          document.head.appendChild(style);
        }
      });
      
      // Add IDs to h2 elements
      const headings = tempDiv.querySelectorAll('h2');
      const usedIds = new Set(); // Track used IDs to prevent duplicates
      
      headings.forEach((heading, index) => {
        // Create URL-friendly ID from heading text
        let id = heading.textContent
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        
        // If this ID is already used, append an index to make it unique
        if (usedIds.has(id)) {
          id = `${id}-${index}`;
        }
        
        usedIds.add(id);
        heading.id = id;
      });
      
      // Ensure all list items have proper styling
      const listItems = tempDiv.querySelectorAll('ul li');
      listItems.forEach(li => {
        // Add a class for styling if needed
        li.classList.add('list-disc');
        li.style.display = 'list-item';
        li.style.listStyleType = 'disc';
        li.style.marginLeft = '1.5rem';
        
        // For Key Takeaways section, add extra emphasis
        const parentHeading = li.parentElement.previousElementSibling;
        if (parentHeading && parentHeading.textContent.includes('Key Takeaways')) {
          li.style.fontWeight = '500';
        }
      });
      
      // Apply direct styling to tables
      const tables = tempDiv.querySelectorAll('table');
      tables.forEach(table => {
        // Style the table element
        table.style.width = '100%';
        table.style.borderCollapse = 'collapse';
        table.style.margin = '2rem 0';
        table.style.fontFamily = 'inherit';
        table.style.borderRadius = '8px';
        table.style.overflow = 'hidden';
        table.style.border = '1px solid #E2E8F0';
        
        // Check if table has header cells
        const hasTh = table.querySelector('th') !== null;
        
        // If there are no <th> elements, treat the first row as a header
        if (!hasTh && table.rows.length > 0) {
          const firstRow = table.rows[0];
          Array.from(firstRow.cells).forEach(cell => {
            cell.style.backgroundColor = '#0A2E3D';
            cell.style.color = 'white';
            cell.style.fontWeight = '600';
            cell.style.padding = '12px 16px';
          });
        }
        
        // Style all th elements
        const thElements = table.querySelectorAll('th');
        thElements.forEach(th => {
          th.style.backgroundColor = '#0A2E3D';
          th.style.color = 'white';
          th.style.fontWeight = '600';
          th.style.padding = '12px 16px';
          th.style.textAlign = 'left';
          th.style.border = '1px solid #E2E8F0';
        });
        
        // Style all td elements
        const tdElements = table.querySelectorAll('td');
        tdElements.forEach((td, index) => {
          td.style.padding = '12px 16px';
          td.style.color = '#475467';
          td.style.border = '1px solid #E2E8F0';
          
          // Apply zebra striping for better readability
          const row = td.parentElement;
          if (row && row.rowIndex > 0 && row.rowIndex % 2 === 0) {
            td.style.backgroundColor = '#F8FAFC';
          } else {
            td.style.backgroundColor = 'white';
          }
          
          // Fix any links inside table cells
          const links = td.querySelectorAll('a');
          links.forEach(link => {
            link.style.color = '#475467';
            link.style.textDecoration = 'none';
          });
        });
      });
      
      return tempDiv.innerHTML;
    } catch (err) {
      console.error('Error processing HTML content:', err);
      return htmlContent;
    }
  };

  // Update the h2Headings extraction logic to prevent duplicates
  const h2Headings = React.useMemo(() => {
    if (!post) return [];
    
    try {
      // For HTML string content
      if (typeof post.content === 'string') {
        if (typeof window === 'undefined') return []; // Skip on server
        
        // Create a temporary div to parse HTML content
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = post.content;
        const headingElements = tempDiv.querySelectorAll('h2');
        
        // Use a Set to track unique IDs
        const uniqueIds = new Set();
        const uniqueHeadings = [];
        
        // Convert to array and extract info
        Array.from(headingElements).forEach((h2) => {
          const title = h2.textContent;
          // Create URL-friendly ID from heading text
          const id = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
            
          // Only add if this ID hasn't been seen before
          if (!uniqueIds.has(id)) {
            uniqueIds.add(id);
            uniqueHeadings.push({ id, title });
          }
        });
        
        return uniqueHeadings;
      }
      
      // For React element content
      if (post.content.props?.children) {
        // Use a Set to track unique IDs
        const uniqueIds = new Set();
        const uniqueHeadings = [];
        
        post.content.props.children
          .filter(child => child && child.type === 'h2')
          .forEach((h2) => {
            const title = h2.props.children;
            const id = title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '');
            
            // Only add if this ID hasn't been seen before
            if (!uniqueIds.has(id)) {
              uniqueIds.add(id);
              uniqueHeadings.push({ id, title });
            }
          });
        
        return uniqueHeadings;
      }
      
      return [];
    } catch (err) {
      console.error('Error extracting h2 headings:', err);
      return [];
    }
  }, [post]);

  // Prepare FAQ data for the component
  const faqItems = React.useMemo(() => {
    if (!post || !post.includeFaq || !post.faqSection?.questions) return [];
    
    return post.faqSection.questions.map(item => ({
      question: item.question,
      answer: item.answer
    }));
  }, [post]);

  // Function to render content with proper image handling
  const renderContent = (content) => {
    try {
      // Handle string content (HTML)
      if (typeof content === 'string') {
        // Add image debugging - log image URLs in the content
        const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/g;
        let match;
        console.log('Checking images in content:');
        while ((match = imgRegex.exec(content)) !== null) {
          console.log('Found image URL:', match[1]);
        }
        
        // Process HTML to add IDs to headings
        const processedContent = processHtmlContent(content);
        
        return (
          <div 
            className="prose max-w-none prose-img:rounded-lg prose-img:shadow-lg prose-headings:scroll-mt-24 prose-headings:pt-6 prose-headings:mt-6 prose-headings:border-t prose-headings:border-gray-100 prose-table:border-collapse prose-td:p-3 prose-th:p-3 prose-th:text-left prose-td:text-gray-700 prose-th:text-gray-800 prose-td:border prose-th:border prose-table:my-8 prose-table:w-full prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-600 prose-li:my-1 prose-li:marker:text-gray-500" 
            dangerouslySetInnerHTML={{ __html: processedContent }} 
          />
        );
      }

      // Handle null or undefined content
      if (!content) {
        console.error('Content is null or undefined');
        return <div className="prose max-w-none">No content available</div>;
      }

      // Handle React elements or components
      if (React.isValidElement(content)) {
        return content;
      }

      // Handle content with props and children
      if (content.props?.children) {
        return content.props.children.map((element, index) => {
          if (!element) return null;

          if (typeof element === 'string') {
            return <p key={index} className="mb-6 text-gray-600 leading-relaxed">{element}</p>;
          }

          if (element.type === 'h2') {
            const title = element.props.children;
            const id = title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '');
            return (
              <h2
                key={index}
                id={id}
                className="scroll-mt-24 text-3xl font-semibold text-gray-900 mb-6 pt-8 border-t border-gray-200"
              >
                {element.props.children}
              </h2>
            );
          }

          if (element.type === 'img') {
            return (
              <div key={index} className="my-6">
                <img
                  src={element.props.src}
                  alt={element.props.alt || "Blog Image"}
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            );
          }

          if (element.type === 'iframe') {
            return (
              <div key={index} className="my-6 aspect-video w-full">
                {element}
              </div>
            );
          }

          return (
            <div key={index} className="mb-6 text-gray-600 leading-relaxed">
              {element}
            </div>
          );
        });
      }

      // Fallback for other content types
      return <div className="prose max-w-none">Content could not be displayed properly.</div>;
    } catch (err) {
      console.error('Error rendering content:', err);
      return <div className="prose max-w-none">Error displaying content. Please try again later.</div>;
    }
  };

  const memoizedContent = useMemo(() => renderContent(post?.content), [post?.content]);

  if (!slug) return <div className="text-center py-20">Content not found</div>;
  
  if (isLoading) {
    return (
      <div className="bg-[#EBFAFE] py-16">
        <Layout>
          <div className="text-center py-10">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
            <p className="mt-2">Loading content...</p>
          </div>
        </Layout>
      </div>
    );
  }
  
  // If it's a blog post, render the blog detail view (existing code)
  if (isBlogPost && post) {
    // Keep the existing blog post render code from here on...
    return (
      <div className='bg-white py-16'>
        <Layout>
          {/* Blog Header - Keep the existing header code */}
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" style={{ width: 'calc(100% - 3rem)' }}>
            {/* Breadcrumb navigation */}
            <div className="flex items-center text-sm gap-2 mb-8 justify-center">
              <Link href="/blog" className="uppercase hover:underline text-gray-500">
                Blog
              </Link>
              <IoIosArrowForward className="text-gray-400" />
              <Link 
                href={`/blog/${post.category.toLowerCase().replace(/\s+/g, "-")}`} 
                className="text-gray-500 uppercase hover:underline"
              >
                {post.category}
              </Link>
            </div>
          
            {/* Combined date and title for tight spacing */}
            <div className="text-center mt-24 space-y-0">
              <div className="uppercase text-[#475467] tracking-wide text-base font-medium mb-0">
                {/* Format date to match Superside (MONTH DD, YYYY) */}
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                }).toUpperCase()}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-normal text-[#101828] leading-[1.1] mb-4 sm:mb-8 text-center mx-auto max-w-[900px] tracking-tight mt-1">
                {post.title}
              </h1>
            </div>
            
            {/* Author section - exactly like Superside */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 mr-3">
                  <Image
                    src={authorImageError ? defaultAuthorImage : post.author.image}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="object-cover"
                    onError={() => setAuthorImageError(true)}
                  />
                </div>
                <div className="flex items-center">
                  <div className="text-[#475467] mr-2">By</div>
                  <Link 
                    href="#" 
                    className="font-semibold text-[#101828] hover:underline mr-2"
                  >
                    {post.author.name}
                  </Link>
                  <div className="text-[#475467]">{post.author.role}</div>
                </div>
              </div>
            </div>
            
            {/* Social sharing icons */}
            {renderSocialIcons()}
          </div>

          {/* Main Grid Container with TOC Sidebar */}
          <div className="grid grid-cols-1 md:grid-cols-[270px_1fr] gap-8 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" style={{ width: 'calc(100% - 3rem)' }}>
            {/* Left Sidebar - Only shown on desktop */}
            <aside className="lg:sticky top-24 self-start hidden lg:block space-y-8 shrink-0">
              {/* Read Time Animation */}
              <ReadTimeProgress timeToRead={post.timeToRead || "5 min read"} />
              
              {/* Table of Contents - use existing TOC component */}
              <TableOfContents />
              
              {/* Promotional Poster */}
              <div className="relative overflow-hidden rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] mt-8">
                <div className="h-[170px] overflow-hidden bg-[#0A2E3D]">
                  <Image 
                    src="/blog-poster.avif" 
                    alt="Get hassle-free service" 
                    width={500} 
                    height={300} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="bg-[#0A2E3D] p-4 text-white" style={{marginTop: "-1px"}}>
                  <h3 className="text-white text-lg font-bold leading-tight">Get hassle-free video at scale</h3>
                  <p className="text-gray-300 text-xs my-1.5">See how we can help.</p>
                  <Link 
                    href="/contact" 
                    className="block bg-white hover:bg-gray-100 text-[#0A2E3D] text-center py-2.5 w-full rounded-md font-medium transition-colors mt-2.5"
                  >
                    Book a call
                  </Link>
                </div>
              </div>
            </aside>
            
            {/* Main Content */}
            <div>
              <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
                <Image
                  src={thumbnailError ? defaultThumbnail : post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover"
                  onError={() => setThumbnailError(true)}
                />
              </div>
              
              <div ref={contentRef} className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* If there is FAQ content, display it */}
              {post.includeFaq && post.faqSection && post.faqSection.length > 0 && (
                <BlogFAQ faqData={post.faqSection} title="Frequently Asked Questions" />
              )}
            </div>
          </div>
          
          {/* Newsletter Section */}
          <div className="mt-8 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" style={{ width: 'calc(100% - 3rem)' }}>
            <Newsletter />
          </div>

          {/* Related Articles */}
          <div className="mt-8 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" style={{ width: 'calc(100% - 3rem)' }}>
            <h4 className="text-sm font-semibold mb-4 uppercase">Related Articles</h4>
            <div className="space-y-4">
              {blogs
                .filter(b => b.id !== post.id && b.category === post.category)
                .slice(0, 3)
                .map(blog => (
                  <div key={blog.id || blog._id}>
                    <Link href={`/blog/${blog.slug}`} className="block group">
                      <div className="relative h-36 mb-2 overflow-hidden rounded-md">
                        <Image
                          src={blog.thumbnail}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = defaultThumbnail;
                          }}
                        />
                      </div>
                      <h5 className="font-medium text-gray-900 group-hover:text-secondary-500 transition-colors line-clamp-2">
                        {blog.title}
                      </h5>
                    </Link>
                  </div>
                ))}
            </div>
            <Link 
              href="/blog" 
              className="inline-block mt-4 text-sm font-medium text-secondary-500 hover:underline"
            >
              View all articles
            </Link>
          </div>
        </Layout>
      </div>
    );
  }
  
  // If it's a category, render the category view
  return (
    <div className="bg-[#EBFAFE] py-16">
      <Layout>
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
          {/* Category Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-5 capitalize">
              {categoryInfo?.title || getNormalizedCategoryName(slug)}
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              {categoryInfo?.description || `Discover our latest articles about ${getNormalizedCategoryName(slug)}.`}
            </p>
          </div>
          
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <div key={blog.id || blog._id}>
                  <BlogCard blog={blog} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-lg text-gray-600">No articles found in this category.</p>
                <Link href="/blog" className="mt-4 inline-block text-primary-600 hover:underline">
                  View all blog posts
                </Link>
              </div>
            )}
          </div>
          
          {/* Newsletter Section */}
          <div className="mt-16">
            <Newsletter />
          </div>
        </div>
      </Layout>
    </div>
  );
}
  