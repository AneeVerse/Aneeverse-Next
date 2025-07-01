"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/common/Layout";
import BlogCard from "@/components/blog/BlogCard";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

// Fetch category information from Sanity
const fetchCategoryInfo = async (categorySlug) => {
  try {
    // First try to get category info by slug
    const response = await fetch(`/api/sanity-blogs?getCategoryInfo=true&categorySlug=${encodeURIComponent(categorySlug)}`, {
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (response.ok) {
      const data = await response.json();
      if (data.success && data.categoryInfo) {
        return {
          display: data.categoryInfo.title,
          description: data.categoryInfo.description || `Discover our latest articles about ${data.categoryInfo.title}.`
        };
      }
    }
    
    // Fallback: try by converted title
    const categoryName = categorySlug.toLowerCase().replace(/-/g, " ");
    const response2 = await fetch(`/api/sanity-blogs?getCategoryInfo=true&category=${encodeURIComponent(categoryName)}`, {
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (response2.ok) {
      const data2 = await response2.json();
      if (data2.success && data2.categoryInfo) {
        return {
          display: data2.categoryInfo.title,
          description: data2.categoryInfo.description || `Discover our latest articles about ${data2.categoryInfo.title}.`
        };
      }
    }
    
    // Final fallback to formatted slug
    const fallbackTitle = categorySlug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
    return {
      display: fallbackTitle,
      description: `Discover our latest articles about ${fallbackTitle}.`
    };
  } catch (error) {
    console.error('Error fetching category info:', error);
    const fallbackTitle = categorySlug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
    return {
      display: fallbackTitle,
      description: `Discover our latest articles about ${fallbackTitle}.`
    };
  }
};

// Fetch blogs by category from Sanity API
const fetchBlogsByCategory = async (category) => {
  try {
    const normalizedCategory = category.toLowerCase().replace(/-/g, " ");
    console.log('Normalized Category:', normalizedCategory);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    try {
      const apiUrl = `/api/sanity-blogs?category=${encodeURIComponent(normalizedCategory)}`;
      console.log('Fetching from API:', apiUrl);
      
      const response = await fetch(apiUrl, { 
        signal: controller.signal,
        cache: 'no-store',
        headers: { 'Content-Type': 'application/json' }
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API error response:', response.status, errorText);
        throw new Error(`API returned ${response.status}: ${errorText}`);
      }
      
      const data = await response.json();
      console.log('API Response data:', {
        success: data.success,
        blogCount: data.blogs?.length,
        debug: data.debug
      });
      
      if (data.success && data.blogs) {
        console.log('API Blogs:', data.blogs.length);
        return { blogs: data.blogs, error: null };
      } else {
        return { blogs: [], error: data.error || "No blogs found" };
      }
      
    } catch (err) {
      console.error("API fetch error:", err);
      clearTimeout(timeoutId);
      return { blogs: [], error: "API request failed: " + err.message };
    }
    
  } catch (err) {
    console.error("Error in fetchBlogsByCategory:", err);
    return { blogs: [], error: "Failed to fetch blogs: " + err.message };
  }
};

export default function BlogCategoryClient({ category }) {
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryInfo, setCategoryInfo] = useState({
    display: category.replace(/-/g, " "),
    description: `Discover our latest articles about ${category.replace(/-/g, " ")}.`
  });

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Fetch category info and blogs in parallel
        const [categoryInfoResult, blogsResult] = await Promise.all([
          fetchCategoryInfo(category),
          fetchBlogsByCategory(category)
        ]);
        
        setCategoryInfo(categoryInfoResult);
        
        if (typeof document !== 'undefined') {
          document.title = `${categoryInfoResult.display} Blogs`;
        }
        
        if (blogsResult.error) {
          console.warn(blogsResult.error);
          setError(blogsResult.error);
        }
        
        setFilteredBlogs(blogsResult.blogs);
        console.log('Final filtered blogs:', blogsResult.blogs.length);
      } catch (err) {
        console.error("Error loading data:", err);
        setError("Failed to load data: " + err.message);
        setFilteredBlogs([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [category]);
  
  if (isLoading) {
    return (
      <div className="bg-[#EBFAFE] py-16">
        <Layout>
          <div className="text-center py-10">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
            <p className="mt-2">Loading blog posts...</p>
          </div>
        </Layout>
      </div>
    );
  }

  return (
    <div className="bg-[#EBFAFE] py-16">
      <Layout>
        <div className="flex items-center text-md text-secondary-500/80 font-semibold gap-2 mb-1">
          <Link href="/blog" className="uppercase hover:underline">
            Blog
          </Link>
          <IoIosArrowForward className="" />
          <div className="uppercase">
            {categoryInfo.display}
          </div>
        </div>
        
        {/* Category Header */}
        <header className="mb-12 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold uppercase">
              {categoryInfo.display}
            </h1>
            <p className="text-gray-500 max-w-full md:max-w-[40%] mt-2 text-lg">
              {categoryInfo.description}
            </p>
          </div>
        </header>

        {/* Show error if any */}
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-8">
            <p className="font-semibold">Error loading blogs:</p>
            <p className="text-sm">{error}</p>
            <p className="text-xs mt-2">Category: {category}</p>
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
              No blogs found in this category. {error ? "Please check the Sanity CMS." : <Link href="/admin/blogs/new" className="text-blue-600 hover:underline">Create one</Link>}
            </p>
          )}
        </div>
      </Layout>
    </div>
  );
} 