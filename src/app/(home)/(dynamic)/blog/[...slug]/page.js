'use client';

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
const getBlogPost = async (category, slug) => {
  try {
    // First try to fetch from API
    const response = await fetch(`/api/blogs/${slug}`, {
      cache: 'no-store',
      next: { revalidate: 60 }
    });
    
    const data = await response.json();
    
    if (response.ok && data.success && data.blog) {
      // Verify the category matches
      const blogCategory = data.blog.category.toLowerCase().replace(/\s+/g, '-');
      if (blogCategory === category.toLowerCase()) {
        return data.blog;
      }
    }
    
    // Fall back to static data if API fails or category doesn't match
    const staticBlog = blogs.find(blog => {
      const blogCategory = blog.category.toLowerCase().replace(/\s+/g, '-');
      return blog.slug === slug && blogCategory === category.toLowerCase();
    });
    
    return staticBlog;
  } catch (err) {
    console.error("Error fetching blog:", err);
    // Fall back to static data
    const staticBlog = blogs.find(blog => {
      const blogCategory = blog.category.toLowerCase().replace(/\s+/g, '-');
      return blog.slug === slug && blogCategory === category.toLowerCase();
    });
    return staticBlog;
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
        
        // params.slug will be an array like ['category', 'blog-slug']
        if (!resolvedParams.slug || resolvedParams.slug.length !== 2) {
          setError('Invalid blog URL');
          return;
        }

        const [category, blogSlug] = resolvedParams.slug;
        const blogPost = await getBlogPost(category, blogSlug);
        
        if (!blogPost) {
          setError('Blog not found');
          console.error('Blog not found with slug:', blogSlug);
        } else {
          setPost(blogPost);
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

  // Rest of your existing component code...
  // (Keep all the existing functions and JSX, just update the breadcrumb navigation)

  return (
    <div className='bg-white py-16'>
      <Layout>
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! {error}</h2>
            <p className="text-gray-600 mb-8">We couldn't find the blog post you're looking for.</p>
            <Link href="/blog" className="text-primary-500 hover:underline">
              Return to Blog List
            </Link>
          </div>
        ) : post ? (
          <>
            {/* Blog Header */}
            <header className="mb-16">
              <div className="flex items-center text-md text-secondary-500/80 font-semibold gap-2 mb-3">
                <Link href="/blog" className="uppercase hover:underline">
                  Blog
                </Link>
                <IoIosArrowForward className="" />
                <Link 
                  href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}`} 
                  className="text-gray-900 text-sm uppercase"
                >
                  {post.category}
                </Link>
                <IoIosArrowForward className="" />
                <span className="uppercase text-gray-500">{post.title}</span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={authorImageError ? defaultAuthorImage : post.author.image}
                      alt={post.author.name}
                      width={48}
                      height={48}
                      className="object-cover"
                      onError={() => setAuthorImageError(true)}
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-2">By</span>
                    <p className="font-semibold text-gray-900 mr-2">{post.author.name}</p>
                    <p className="text-sm text-gray-500">{post.author.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-500">
                  <FaRegClock />
                  <span>{post.timeToRead}</span>
                </div>
              </div>
            </header>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
                <Image
                  src={thumbnailError ? defaultThumbnail : post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover"
                  onError={() => setThumbnailError(true)}
                />
              </div>
              
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Newsletter Section */}
            <Newsletter />

            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-4 uppercase">Related Articles</h4>
              <div className="space-y-4">
                {blogs
                  .filter(b => b.id !== post.id && b.category === post.category)
                  .slice(0, 3)
                  .map(blog => {
                    const categorySlug = blog.category.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <div key={blog.id} className="border-b pb-4">
                        <Link href={`/blog/${categorySlug}/${blog.slug}`} className="block group">
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
                    );
                  })}
              </div>
              <Link 
                href="/blog" 
                className="inline-block mt-4 text-sm font-medium text-secondary-500 hover:underline"
              >
                View all articles
              </Link>
            </div>
          </>
        ) : null}
      </Layout>
    </div>
  );
} 