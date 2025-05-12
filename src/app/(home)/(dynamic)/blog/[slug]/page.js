'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Layout from '@/components/common/Layout';
import { blogs } from '@/data/blogData';
import BlogCard from '@/components/blog/BlogCard';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { getNormalizedCategoryName } from '@/utils/categoryUtils';
import Image from 'next/image';
import Newsletter from '@/components/blog/NewsLetter';
import { FaRegClock } from "react-icons/fa6";
import TableOfContents from '@/components/blog/TableOfContents';
import ReadTimeProgress from '@/components/blog/ReadTimeProgress';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import '../blogStyles.css';

// Function to fetch blog by slug
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

export default function SlugPage() {
  const router = useRouter();
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // States for category view
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState(null);
  
  // States for blog post view
  const [post, setPost] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(false);
  const [authorImageError, setAuthorImageError] = useState(false);
  const [isBlogPost, setIsBlogPost] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [h2Headings, setH2Headings] = useState([]);
  const contentRef = useRef(null);
  const [pageUrl, setPageUrl] = useState('');
  
  // Default images
  const defaultThumbnail = "/images/blog1.avif";
  const defaultAuthorImage = "/images/blog/author/abhi.png";
  
  // Get current URL for share links (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPageUrl(window.location.href);
    }
  }, [slug]);
  
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
  
  // Process content to find headings for TOC
  useEffect(() => {
    if (isBlogPost && post && contentRef.current) {
      const contentEl = contentRef.current;
      // Find all h2 elements to build our table of contents
      const headings = Array.from(contentEl.querySelectorAll('h2'));
      const headingData = headings.map((heading, index) => {
        // Create an ID if one doesn't exist
        if (!heading.id) {
          heading.id = `heading-${index}`;
        }
        return {
          id: heading.id,
          title: heading.textContent
        };
      });
      setH2Headings(headingData);
    }
  }, [post, isBlogPost]);
  
  // Setup scroll spy for TOC
  const ids = h2Headings.map(heading => heading.id);
  const activeHeadingId = useScrollSpy(ids, { threshold: 0.2 });
  
  // Update active section when scrolling
  useEffect(() => {
    if (activeHeadingId) {
      setActiveId(activeHeadingId);
    }
  }, [activeHeadingId]);
  
  useEffect(() => {
    if (!slug) return;
    
    const loadContent = async () => {
      setIsLoading(true);
      
      // Try to fetch the blog post first
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
        console.error("Error loading content:", err);
        setError("Content not found");
      } finally {
        setIsLoading(false);
      }
    };
    
    loadContent();
  }, [slug]);
  
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
  
  // If it's a blog post, render the blog post view
  if (isBlogPost && post) {
    return (
      <div className='bg-white py-16'>
        <Layout>
          {/* Blog Header */}
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
            
            {/* Author section */}
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
            
            {/* Social sharing icons - using the function */}
            {renderSocialIcons()}
          </div>

          {/* Main Grid Container with TOC Sidebar */}
          <div className="grid grid-cols-1 md:grid-cols-[270px_1fr] gap-8 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" style={{ width: 'calc(100% - 3rem)' }}>
            {/* Left Sidebar - Only shown on desktop */}
            <aside className="lg:sticky top-24 self-start hidden lg:block space-y-8 shrink-0">
              {/* Read Time Animation */}
              <ReadTimeProgress timeToRead={post.timeToRead || "5 min read"} />
              
              {/* Table of Contents */}
              {h2Headings.length > 0 && (
                <div className="bg-[#0A2E3D] p-4 rounded-lg mt-6">
                  <h4 className="uppercase text-white text-xs font-semibold tracking-wide mb-3">TABLE OF CONTENTS</h4>
                  <div className="max-h-[120px] overflow-y-auto pr-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <ul className="space-y-1.5">
                      {h2Headings.map((section, index) => (
                        <li key={index} className="relative">
                          <a
                            href={`#${section.id}`}
                            className={`block text-sm leading-tight pl-4 truncate ${
                              activeId === section.id
                              ? 'text-white font-medium' 
                              : 'text-gray-300 hover:text-white'
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              const element = document.getElementById(section.id);
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                            title={section.title}
                          >
                            {activeId === section.id && (
                              <div className="absolute left-0 top-[6px] w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                            )}
                            {section.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
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
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mt-8" style={{ width: 'calc(100% - 3rem)' }}>
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

          {/* Mobile TOC - Only visible on mobile */}
          {h2Headings.length > 0 && (
            <div className="lg:hidden mb-6 bg-[#073742] p-4 rounded-lg mt-4 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" style={{ width: 'calc(100% - 3rem)' }}>
              <h4 className="uppercase text-white text-xs font-semibold tracking-wide mb-2">TABLE OF CONTENTS</h4>
              <div className="overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <ul className="space-y-1.5">
                  {h2Headings.map((section, index) => (
                    <li key={index} className="relative">
                      <a
                        href={`#${section.id}`}
                        className={`block text-sm leading-tight pl-4 truncate ${
                          activeId === section.id
                          ? 'text-white font-medium' 
                          : 'text-gray-300 hover:text-white'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById(section.id);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        title={section.title}
                      >
                        {activeId === section.id && (
                          <div className="absolute left-0 top-[6px] w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                        )}
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </Layout>
      </div>
    );
  }
  
  // If it's a category, render the category view
  return (
    <div className="bg-[#EBFAFE] py-16">
      <Layout>
        <div className="flex items-center text-md text-secondary-500/80 font-semibold gap-2 mb-1">
          <Link href="/blog" className="uppercase hover:underline">
            Blog
          </Link>
          <IoIosArrowForward className="" />
          <div className="uppercase">
            {categoryInfo?.title || slug.replace(/-/g, " ")}
          </div>
        </div>
        
        {/* Category Header */}
        <header className="mb-12 flex flex-col md:flex-row items-center gap-6">
          {/* Left - Category Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold uppercase">
              {categoryInfo?.title || slug.replace(/-/g, " ")}
            </h1>
            <p className="text-gray-500 max-w-full md:max-w-[40%] mt-2 text-lg">
              {categoryInfo?.description}
            </p>
          </div>
        </header>

        {/* Show error if any */}
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-8">
            {error}
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div key={blog.id} className="h-full flex flex-col">
                <BlogCard blog={blog} />
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 py-10">
              No blogs found in this category. <Link href="/admin/blogs/new" className="text-blue-600 hover:underline">Create one</Link>
            </p>
          )}
        </div>
      </Layout>
    </div>
  );
}
