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

// More efficient approach to fetch blog post
const getBlogPost = async (slug) => {
  try {
    // First try to fetch from API
    const response = await fetch(`/api/blogs/${slug}`, {
      cache: 'no-store', // Don't cache the request
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });
    
    const data = await response.json();
    console.log('API Response:', data);
    
    if (response.ok && data.success && data.blog) {
      return data.blog;
    }
    
    // Fall back to static data if API fails
    const staticBlog = blogs.find((blog) => blog.slug === slug);
    console.log('Static Blog:', staticBlog);
    return staticBlog;
  } catch (err) {
    console.error("Error fetching blog:", err);
    // Fall back to static data
    return blogs.find((blog) => blog.slug === slug);
  }
};

export default function BlogDetail({ params }) {
  const resolvedParams = use(params);
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(false);
  const [authorImageError, setAuthorImageError] = useState(false);
  const sectionRefs = useRef([]);
  const observer = useRef(null);

  // Default images
  const defaultThumbnail = "/images/blog1.avif";
  const defaultAuthorImage = "/images/blog/author/abhi.png";
  
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
      headings.forEach((heading, index) => {
        heading.id = `section-${index}`;
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
        return Array.from(headings).map((h2, index) => ({
          id: `section-${index}`,
          title: h2.textContent
        }));
      }
      
      // For React element content
      if (post.content.props?.children) {
        return post.content.props.children
          .filter(child => child && child.type === 'h2')
          .map((h2, index) => ({
            id: `section-${index}`,
            title: h2.props.children
          }));
      }
      
      return [];
    } catch (err) {
      console.error('Error extracting h2 headings:', err);
      return [];
    }
  }, [post]);

  useEffect(() => {
    if (!post || typeof window === 'undefined') return;

    // Initialize section refs
    try {
      let sectionElements = [];
      
      // Get h2 elements based on their IDs
      h2Headings.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) sectionElements.push(el);
      });
      
      sectionRefs.current = sectionElements;

      // Cleanup previous observer
      if (observer.current) {
        sectionRefs.current.forEach(section => {
          if (section) observer.current.unobserve(section);
        });
      }

      // Initialize new observer only if we have sections
      if (sectionRefs.current.length > 0) {
        observer.current = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const index = sectionRefs.current.findIndex(
                  ref => ref === entry.target
                );
                if (index !== -1) setActiveSection(index);
              }
            });
          },
          {
            rootMargin: '-20% 0px -50% 0px',
            threshold: 0.2
          }
        );

        // Observe all sections
        sectionRefs.current.forEach(section => {
          if (section) observer.current.observe(section);
        });
      }

      return () => {
        if (observer.current) {
          sectionRefs.current.forEach(section => {
            if (section) observer.current.unobserve(section);
          });
        }
      };
    } catch (err) {
      console.error('Error setting up section observers:', err);
      // Continue without scroll tracking
    }
  }, [post, h2Headings]);

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
            const sectionIndex = h2Headings.findIndex(
              h => h.title === element.props.children
            );
            return (
              <h2
                key={index}
                id={`section-${sectionIndex}`}
                ref={(el) => (sectionRefs.current[sectionIndex] = el)}
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
        {/* Blog Header */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 mb-12">
          {/* Date display with increased top margin */}
          <div className="uppercase text-gray-600 tracking-wider text-sm font-medium mb-8 text-center mt-16">
            {post.date}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2E3D] leading-[1.2] px-4 mb-10 text-center max-w-[1200px] mx-auto">
            {post.title}
          </h1>
          
          {/* Author section */}
          <div className="mb-10 text-center">
            <div className="text-gray-700 text-sm mb-2">  Author</div>
            <div className="flex items-center gap-5 justify-center">
              {post.coAuthors ? (
                <>
                  {post.coAuthors.map((author, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-100">
            <Image
                          src={author.image || defaultAuthorImage}
                          alt={author.name}
              fill
              className="object-cover"
                          onError={() => setAuthorImageError(true)}
                        />
                      </div>
                      <Link href="#" className="font-medium text-sm hover:underline">{author.name}</Link>
                      {index < post.coAuthors.length - 1 && <span className="ml-3">&</span>}
              </div>
                  ))}
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-100">
                    <Image
                      src={authorImageError ? defaultAuthorImage : post.author.image}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                      onError={() => setAuthorImageError(true)}
                    />
                  </div>
                  <Link href="#" className="font-medium text-sm hover:underline">{post.author.name}</Link>
                </div>
              )}
            </div>
          </div>
          
          {/* Social media sharing icons - centered */}
          <div className="flex gap-3 mb-8 justify-center">
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <button onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(typeof window !== 'undefined' ? window.location.href : '');
                alert('Link copied to clipboard!');
              }
            }} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </button>
            <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: ${typeof window !== 'undefined' ? window.location.href : ''}`)}`} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
                </div>
              </div>

        {/* Main Grid Container - layout matched to Superside */}
        <div className="grid grid-cols-1 lg:grid-cols-[270px_minmax(0,750px)_1fr] gap-8 px-4">
          {/* Left Sidebar - Table of Contents with light green background */}
          <aside className="sticky top-24 self-start hidden lg:block h-fit lg:col-start-1 mt-0">
            <div className="bg-[#EAF2E3] p-6 rounded-lg">
              <h4 className="uppercase text-[#333] text-sm font-bold mb-4">Table of Contents</h4>

              {/* Table of Contents - only show if we have headings */}
              {h2Headings.length > 0 && (
                  <ul className="space-y-3">
                    {h2Headings.map((section, index) => (
                    <li key={index}>
                        <a
                          href={`#${section.id}`}
                        className={`block group text-sm py-1 transition-colors ${
                          activeSection === index ? 'text-primary-600 font-medium' : 'text-gray-700 hover:text-primary-600'
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(section.id);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                              window.history.pushState(null, '', `#${section.id}`);
                            }
                          }}
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
              )}
              
              {/* Time to Read */}
              <div className="text-gray-600 flex items-center gap-2 text-sm mt-4">
                <FaRegClock />
                  <div>
                  {typeof post.timeToRead === 'number' || !isNaN(parseInt(post.timeToRead)) 
                    ? `${post.timeToRead} min Read` 
                    : (post.timeToRead || '5 min Read')}
                </div>
              </div>
            </div>
            
            {/* Social media sharing icons - repeated in sidebar for desktop */}
            <div className="mt-8 flex gap-3">
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href={`#`} onClick={(e) => {
                e.preventDefault();
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(typeof window !== 'undefined' ? window.location.href : '');
                  alert('Link copied to clipboard!');
                }
              }} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </a>
              <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: ${typeof window !== 'undefined' ? window.location.href : ''}`)}`} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </aside>

          {/* Main Content Section - centered column */}
          <div className="lg:col-start-2">
            {/* Remove breadcrumb from top of content, will add to bottom */}

            <style jsx global>{`
              /* Import fonts */
              @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap');

              /* Custom styles for blog content */
              .prose {
                font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
                color: #333;
                line-height: 1.6;
              }

              /* Title styles */
              h1 {
                font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
              }

              h1 span.font-serif {
                font-family: 'Playfair Display', serif;
              }
              
              .prose h2 {
                font-size: 2rem;
                margin-top: 2.5rem;
                margin-bottom: 1.5rem;
                font-weight: 700;
                color: #111827;
                position: relative;
                display: inline-block;
              }
              
              .prose h3 {
                font-size: 1.5rem;
                margin-top: 2rem;
                margin-bottom: 1rem;
                font-weight: 600;
                color: #111827;
              }
              
              .prose p {
                margin-bottom: 1.5rem;
                color: #374151;
              }
              
              .prose ul {
                margin-bottom: 1.5rem;
                list-style-type: disc;
                padding-left: 1.5rem;
              }
              
              .prose blockquote {
                font-style: italic;
                border-left: 4px solid #e5e7eb;
                padding-left: 1rem;
                margin-left: 0;
                color: #4b5563;
              }
              
              .prose img {
                border-radius: 0.5rem;
                max-width: 100%;
                height: auto;
                margin: 2rem auto;
              }
              
              .prose iframe {
                border-radius: 0.5rem;
                width: 100%;
                aspect-ratio: 16/9;
                margin: 2rem auto;
              }
              
              /* Heading underline animation */
              .prose h2::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 2px;
                background-color: #0A2E3D;
                transition: width 0.3s ease;
              }
              
              .prose h2:hover::after {
                width: 100%;
              }
              
              /* Related article title underline animation */
              .related-article-title {
                position: relative;
                display: inline-block;
              }
              
              .related-article-title::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 2px;
                background-color: #0A2E3D;
                transition: width 0.3s ease;
              }
              
              .group:hover .related-article-title::after {
                width: 100%;
              }
            `}</style>
            
            <article className="prose prose-lg max-w-none">
              {renderContent(post.content)}
            </article>

            {/* Author Info at bottom */}
            <div className="my-12 p-6 border rounded-lg">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100">
                  <Image
                    src={authorImageError ? defaultAuthorImage : post.author.image}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                    onError={() => setAuthorImageError(true)}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{post.author.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{post.author.role}</p>
                  <p className="text-gray-700 text-sm">
                    {post.author.name} has over a decade of experience in digital marketing
                    and creative leadership.
                  </p>
                </div>
              </div>
            </div>

            {/* Breadcrumb navigation moved to bottom like Superside */}
            <div className="flex items-center text-md font-medium gap-2 my-12">
              <Link href="/" className="text-gray-600 hover:underline text-sm">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/blog" className="text-gray-600 hover:underline text-sm">
                Blog
              </Link>
              <span className="text-gray-400">/</span>
              <Link 
                href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}`} 
                className="text-gray-900 text-sm"
              >
                {post.category}
              </Link>
            </div>

            <div className='mt-16'>
              <Newsletter />
            </div>
          </div>
          
          {/* Right column - promotion box */}
          <aside className="sticky top-24 self-start hidden lg:block h-fit lg:col-start-3 mt-0">
            <div className="bg-[#EAF2E3] p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">More asks, more stress, less creativity</h4>
              <p className="text-sm text-gray-600 mb-3">
                200+ leaders told us about it
              </p>
              <a 
                href="/blog" 
                className="inline-block text-sm font-medium px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
              >
                Read the report
              </a>
            </div>
          </aside>
        </div>
        
        {/* Related Blogs - "You may also like these" - Moved outside of the grid to take full width */}
        <section className="mt-20 pb-12 w-full">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center text-gray-900">
            <div className="text-sm text-gray-500 mb-2 uppercase tracking-wider">RELATED ARTICLES</div>
            You may also like these
          </h2>
          
          <div className="max-w-7xl mx-auto px-4">
            <RelatedBlogs currentPost={post} defaultThumbnail={defaultThumbnail} defaultAuthorImage={defaultAuthorImage} />
          </div>
        </section>
      </Layout>
    </div>
  );
}