"use client";
import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';

/**
 * RelatedBlogs component that fetches and displays related blog posts
 * @param {Object} currentPost - The current blog post
 * @param {string} defaultThumbnail - Default thumbnail image path
 * @param {string} defaultAuthorImage - Default author avatar image path
 */
const RelatedBlogs = ({ currentPost, defaultThumbnail, defaultAuthorImage }) => {
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Fetch from API with timestamp to prevent caching
        const response = await fetch(`/api/blogs?limit=100&t=${Date.now()}`);
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        
        if (data && data.blogs) {
          console.log(`API fetched ${data.blogs.length} blogs`);
          
          // First attempt to get blogs from the same category
          let filteredBlogs = data.blogs.filter(blog => 
            blog.id !== currentPost.id && 
            blog.category && 
            currentPost.category && 
            blog.category.toLowerCase() === currentPost.category.toLowerCase()
          );
          
          console.log(`Found ${filteredBlogs.length} blogs in the same category: ${currentPost.category}`);
          
          // If no same-category blogs, show other blogs as alternatives
          if (filteredBlogs.length === 0) {
            filteredBlogs = data.blogs.filter(blog => blog.id !== currentPost.id);
            console.log(`No same-category blogs found, showing ${filteredBlogs.length} alternative blogs`);
          }
          
          // Sort by date (newest first) and limit to 3 results
          const sortedBlogs = filteredBlogs
            .sort((a, b) => {
              if (a.date && b.date) {
                return new Date(b.date) - new Date(a.date);
              }
              return 0;
            })
            .slice(0, 3);
          
          setRelatedBlogs(sortedBlogs);
          console.log(`Displaying ${sortedBlogs.length} related blogs`);
        } else {
          console.warn('No blogs data received from API');
          setRelatedBlogs([]);
        }
      } catch (error) {
        console.error('Error fetching related blogs:', error);
        setError('Failed to load related articles');
        setRelatedBlogs([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (currentPost && currentPost.id) {
      fetchRelatedBlogs();
    }
  }, [currentPost]);

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
        <p className="mt-2 text-gray-500">Loading related articles...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="text-center py-8 text-gray-500">
        {error}
      </div>
    );
  }
  
  if (relatedBlogs.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No related articles found. Check back soon for more content!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 w-full">
      {relatedBlogs.map((blog, index) => (
        <div key={index} className="h-full flex flex-col">
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default RelatedBlogs; 