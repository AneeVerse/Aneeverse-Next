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
        <header className="mb-16">
          <div className="flex items-center text-md text-secondary-500/80 font-semibold gap-2 mb-3">
            <Link href="/blog" className="uppercase hover:underline">
              Blog
            </Link>
            <IoIosArrowForward className="" />
            <Link 
              href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}`} 
              className="uppercase hover:underline"
            >
              {post.category}
            </Link>
          </div>
          <div className="relative h-96 md:h-[483px] rounded-xl overflow-hidden shadow-lg bg-gray-100">
            <Image
              src={thumbnailError ? defaultThumbnail : post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="/images/placeholder.jpg"
              onError={() => setThumbnailError(true)}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            <div className="absolute w-full md:w-[80%] lg:w-[60%] inset-0 px-6 md:px-12 flex flex-col text-white py-6 md:py-12 justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-3 md:mb-6 drop-shadow-lg">
                  {post.title}
                </h1>
                <div className="text-gray-200">Published {post.date}</div>
              </div>
              <div className="p-4 rounded-lg">
                <div className='text-sm mb-2 tracking-wider text-gray-200'>AUTHOR</div>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden border-2 border-white">
                    <Image
                      src={authorImageError ? defaultAuthorImage : post.author.image}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                      onError={() => setAuthorImageError(true)}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{post.author.name}</p>
                    <p className="text-sm text-gray-200">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16">
          {/* Sticky Sidebar */}
          <aside className="sticky top-24 self-start hidden lg:block">
            <div className="space-y-8 bg-white">
              {/* Time to Read */}
              <div className="bg-white font-medium border-b py-3 text-lg">
                <div className="text-gray-900 flex items-center gap-3">
                  <FaRegClock className='text-secondary-500' />
                  <div>{post.timeToRead || '5 min read'}</div>
                </div>
              </div>

              {/* Table of Contents - only show if we have headings */}
              {h2Headings.length > 0 && (
                <div className="py-3 border-b mb-4">
                  <h4 className="text-sm font-semibold mb-4 uppercase">In this article</h4>
                  <ul className="space-y-3">
                    {h2Headings.map((section, index) => (
                      <li key={index} className="pl-3 border-l-2 border-transparent hover:border-secondary-500">
                        <a
                          href={`#${section.id}`}
                          className={`block group text-sm py-1 ${
                            activeSection === index ? 'font-semibold text-secondary-500 border-secondary-500' : 'text-gray-700 hover:text-secondary-500'
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
                </div>
              )}

              {/* Author Info */}
              <div className="bg-secondary-500 p-5 rounded-lg shadow-sm border text-primary-500">
                <div className='flex gap-4 items-center'>
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src={authorImageError ? defaultAuthorImage : post.author.image}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                      onError={() => setAuthorImageError(true)}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{post.author.name}</h3>
                    <p className="text-sm">{post.author.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed">
                  {post.author.name} has over a decade of experience in digital marketing
                  and creative leadership.
                </p>
              </div>

              {/* Related Articles */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold mb-4 uppercase">Related Articles</h4>
                <div className="space-y-4">
                  {blogs
                    .filter(b => b.id !== post.id && b.category === post.category)
                    .slice(0, 3)
                    .map(blog => (
                      <div key={blog.id} className="border-b pb-4">
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
            </div>
          </aside>

          {/* Main Content Sections */}
          <div>
            <div className="description text-gray-600 leading-relaxed mb-12">
              <p className='highlight'>{post.shortDescription}</p> 
            </div>
            
            <article className="prose prose-lg max-w-none description prose-img:rounded-lg prose-img:mx-auto prose-img:my-8 prose-headings:text-gray-900 prose-a:text-secondary-500 prose-a:no-underline hover:prose-a:underline">
              {renderContent(post.content)}
            </article>

            <style jsx global>{`
              /* Custom styles for blog content */
              .prose iframe {
                border-radius: 0.5rem;
                width: 100%;
                aspect-ratio: 16/9;
                margin: 2rem auto;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
              }
              
              .prose div.my-8.flex.justify-center {
                margin: 2rem auto;
              }
              
              .prose div.my-8.flex.justify-center img {
                border-radius: 0.5rem;
                max-height: 500px;
                object-fit: contain;
                margin: 0 auto;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
              }
            `}</style>

            <div className='mt-16'>
              <Newsletter />
            </div>

            {/* Related Blogs */}
            <section className="mt-20">
              <h2 className="text-2xl font-semibold mb-8 text-gray-900">More Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {blogs
                  .filter(b => b.id !== post.id)
                  .slice(0, 3)
                  .map(blog => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </div>
  );
}