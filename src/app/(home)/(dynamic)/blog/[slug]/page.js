"use client";
import { use, useEffect, useRef, useState } from 'react';
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
import '../blogStyles.css';

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
          return sanityData.blog;
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

export default function BlogDetail({ params }) {
  const resolvedParams = use(params);
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(false);
  const [authorImageError, setAuthorImageError] = useState(false);
  
  // Use only one mechanism for scroll spy
  const activeId = useScrollSpy('h2'); 

  // Default images
  const defaultThumbnail = "/images/blog1.avif";
  const defaultAuthorImage = "/images/blog/author/abhi.png";
  
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

  useEffect(() => {
    const loadBlog = async () => {
      try {
        setIsLoading(true);
        console.log('Loading blog with slug:', resolvedParams.slug);
        const blogPost = await getBlogPost(resolvedParams.slug);
        
        if (!blogPost) {
          setError('Blog not found');
          console.error('Blog not found with slug:', resolvedParams.slug);
        } else {
          setPost(blogPost);
          console.log('Blog loaded successfully:', blogPost.title);
        }
      } catch (err) {
        console.error('Error loading blog:', err);
        setError('Failed to load blog');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadBlog();
  }, [resolvedParams.slug]);

  // Function to add IDs to HTML headings for linking
  const processHtmlContent = (htmlContent) => {
    if (!htmlContent || typeof htmlContent !== 'string') return htmlContent;
    if (typeof window === 'undefined') return htmlContent; // Skip on server
    
    try {
      // Create a temporary div to parse and modify HTML content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent;
      
      // Add IDs to h2 elements
      const headings = tempDiv.querySelectorAll('h2');
      headings.forEach((heading) => {
        // Create URL-friendly ID from heading text
        const id = heading.textContent
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        heading.id = id;
      });
      
      return tempDiv.innerHTML;
    } catch (err) {
      console.error('Error processing HTML content:', err);
      return htmlContent;
    }
  };

  // Extract h2 headings from content
  const h2Headings = React.useMemo(() => {
    if (!post) return [];
    
    try {
      // For HTML string content
      if (typeof post.content === 'string') {
        if (typeof window === 'undefined') return []; // Skip on server
        
        // Create a temporary div to parse HTML content
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = post.content;
        const headings = tempDiv.querySelectorAll('h2');
        
        // Convert to array and extract info
        return Array.from(headings).map((h2) => {
          const title = h2.textContent;
          const id = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
          return { id, title };
        });
      }
      
      // For React element content
      if (post.content.props?.children) {
        return post.content.props.children
          .filter(child => child && child.type === 'h2')
          .map((h2) => {
            const title = h2.props.children;
            const id = title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '');
            return { id, title };
          });
      }
      
      return [];
    } catch (err) {
      console.error('Error extracting h2 headings:', err);
      return [];
    }
  }, [post]);

  if (isLoading) {
    return (
      <div className="bg-white py-16">
        <Layout>
          <div className="text-center py-10">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
            <p className="mt-2">Loading blog content...</p>
          </div>
        </Layout>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="bg-white py-16">
        <Layout>
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{error || 'Blog not found'}</h2>
            <p className="text-gray-600 mb-8">The blog post you're looking for could not be found.</p>
            <Link href="/blog" className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
              Return to Blog
            </Link>
          </div>
        </Layout>
      </div>
    );
  }

  // Function to render content with proper image handling
  const renderContent = (content) => {
    try {
      // Handle string content (HTML)
      if (typeof content === 'string') {
        // Process HTML to add IDs to headings
        const processedContent = processHtmlContent(content);
        
        return (
          <div 
            className="prose max-w-none prose-img:rounded-lg prose-img:shadow-lg prose-headings:scroll-mt-24 prose-headings:pt-6 prose-headings:mt-6 prose-headings:border-t prose-headings:border-gray-100" 
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

  return (
    <div className='bg-white py-16'>
      <Layout>
        {/* Blog Header - Superside Style */}
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" style={{ width: 'calc(100% - 3rem)' }}>
          {/* Date display - exact Superside format */}
          <div className="text-center mt-16 mb-10">
            <div className="uppercase text-[#475467] tracking-wide text-base font-medium">
              {/* Format date to match Superside (MONTH DD, YYYY) */}
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              }).toUpperCase()}
            </div>
          </div>
          
          {/* Title - exact Superside specs */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-normal text-[#101828] leading-[1.1] mb-16 text-center mx-auto max-w-[900px] tracking-tight">
            {post.title}
          </h1>
          
          {/* Author section - exactly like Superside */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 mr-3">
                <Image
                  src={authorImageError ? defaultAuthorImage : post.author?.image}
                  alt={post.author?.name}
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
                  {post.author?.name}
                </Link>
                <div className="text-[#475467]">{post.author?.role}</div>
              </div>
            </div>
          </div>
          
          {/* Social sharing icons - Superside style */}
          <div className="flex items-center justify-center gap-3 mb-20">
            <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} 
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              target="_blank" rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
            <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} 
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              target="_blank" rel="noopener noreferrer"
              aria-label="Share on Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </Link>
            <button 
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(typeof window !== 'undefined' ? window.location.href : '');
                  alert('Link copied to clipboard!');
                }
              }} 
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Copy link to clipboard"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </button>
            <Link 
              href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: ${typeof window !== 'undefined' ? window.location.href : ''}`)}`} 
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Share via email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </Link>
          </div>
        </div>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[270px_1fr] gap-16 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto" style={{ width: 'calc(100% - 3rem)' }}>
          {/* Left Sidebar */}
          <aside className="lg:sticky top-24 self-start hidden lg:block space-y-8 shrink-0">
            {/* Table of Contents - Updated with black dot and exact beige color */}
            <div className="bg-[#E6ECD6] p-6 rounded-lg">
              <h4 className="uppercase text-[#101828] text-sm font-semibold tracking-wide mb-4">TABLE OF CONTENTS</h4>
              {h2Headings.length > 0 && (
                <div className="max-h-[200px] overflow-y-auto pr-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <ul className="space-y-2">
                    {h2Headings.map((section, index) => (
                      <li key={index} className="relative">
                        <a
                          href={`#${section.id}`}
                          className={`block text-base leading-tight pl-4 ${
                            activeId === section.id
                            ? 'text-[#101828] font-medium' 
                            : 'text-[#667085] hover:text-[#101828]'
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(section.id);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                        >
                          {activeId === section.id && (
                            <div className="absolute left-0 top-[8px] w-2 h-2 rounded-full bg-[#101828] animate-pulse"></div>
                          )}
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Promotional Poster */}
            <div className="relative overflow-hidden rounded-lg shadow-lg mt-8">
              <div className="h-[170px] overflow-hidden bg-[#034352]">
                <Image 
                  src="/blog-poster.avif" 
                  alt="Get hassle-free service" 
                  width={500} 
                  height={300} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="bg-[#073742] p-4" style={{marginTop: "-1px"}}>
                <h3 className="text-white text-lg font-bold leading-tight">Get hassle-free video at scale</h3>
                <p className="text-white/90 text-xs my-1.5">See how we can help.</p>
                <Link 
                  href="/contact" 
                  className="block bg-[#C0FF7C] hover:bg-[#9DF550] text-[#073742] text-center py-2.5 w-full rounded-md font-medium transition-colors mt-2.5"
                >
                  Book a call
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content Section */}
          <div className="lg:pl-8 w-full min-w-0">
            <article className="w-full">
              <div className="blog-content">
                {renderContent(post.content)}
              </div>
            </article>
          </div>
        </div>
      </Layout>

      {/* Related Blogs - "You may also like these" section */}
      <section className="mt-20 pb-12 w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" style={{ width: 'calc(100% - 3rem)' }}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center text-gray-900">
            <div className="text-sm text-gray-500 mb-2 uppercase tracking-wider">RELATED ARTICLES</div>
            You may also like these
          </h2>
          
          <RelatedBlogs currentPost={post} defaultThumbnail={defaultThumbnail} defaultAuthorImage={defaultAuthorImage} />
        </div>
      </section>
    </div>
  );
}
  