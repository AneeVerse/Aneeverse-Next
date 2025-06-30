"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Layout from "@/components/common/Layout";
import { blogs } from "@/data/blogData";
import Image from "next/image";
import BlogCard from "@/components/blog/BlogCard";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

// ✅ Category Images Map
const categoryImages = {
  "creative-design": {
    src: "/images/categories/creative-design.jpg",
    alt: "Creative Design",
    description: "Explore the latest trends in creative design and branding. Learn how to create stunning visuals. stay updated with the latest design trends. ",
  },
  "marketing-strategies": {
    src: "/images/categories/marketing-strategies.jpg",
    alt: "Marketing Strategies",
    description: "Learn about the latest marketing strategies and growth hacks. Stay updated with the latest trends in marketing. ",
  },
  "digital-advertising": {
    src: "/images/categories/digital-advertising.jpg",
    alt: "Digital Advertising",
    description: "Stay updated with the latest trends in digital advertising. Learn how to create effective ad campaigns. ",
  },
  "branding-web-design": {
    src: "/images/categories/digital-advertising.jpg",
    alt: "Branding & Web Design",
    description: "Discover the latest trends in branding and web design. Learn how to create compelling brand experiences.",
  },
  "ebay": {
    src: "/images/categories/digital-advertising.jpg",
    alt: "eBay",
    description: "Learn about eBay marketing strategies, seller tips, and how to maximize your success on the platform.",
  },
  "design": {
    src: "/images/categories/digital-advertising.jpg",
    alt: "Design",
    description: "Explore the latest trends in design and learn how to create stunning visuals for your brand.",
  },
  "e-commerce": {
    src: "/images/categories/digital-advertising.jpg",
    alt: "E-commerce",
    description: "Learn strategies to grow your online store and increase conversions.",
  },
  "technology": {
    src: "/images/categories/digital-advertising.jpg",
    alt: "Technology",
    description: "Stay updated with the latest technology trends and learn how to leverage them for your business.",
  },
};

// Fetch blogs by category from Sanity API only
const fetchBlogsByCategory = async (category) => {
  try {
    // Get normalized category
    const normalizedCategory = category.toLowerCase().replace(/-/g, " ");
    console.log('Normalized Category:', normalizedCategory);
    
    // Fetch from API with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
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
        debug: data.debug
      });
      
      if (data.success && data.blogs) {
        console.log('API Blogs:', data.blogs.length);
        return { blogs: data.blogs, categoryInfo: null, error: null };
      } else {
        return { blogs: [], categoryInfo: null, error: data.error || "No blogs found" };
      }
      
    } catch (err) {
      console.error("API fetch error:", err);
      clearTimeout(timeoutId);
      return { blogs: [], categoryInfo: null, error: "API request failed: " + err.message };
    }
    
  } catch (err) {
    console.error("Error in fetchBlogsByCategory:", err);
    return { blogs: [], categoryInfo: null, error: "Failed to fetch blogs: " + err.message };
  }
};

export default function BlogCategoryPage() {
  const { category } = useParams(); 
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryInfo, setCategoryInfo] = useState(null);
  const [debugInfo, setDebugInfo] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      if (!category) return;
      setIsLoading(true);
      setError(null);
      
      try {
        // Get category info
        const normalizedCategory = category.toLowerCase();
        const formattedTitle = normalizedCategory.replace(/-/g, " ");
        
        setCategoryInfo({
          title: formattedTitle,
          description: categoryImages[normalizedCategory]?.description || 
            `Discover our latest articles about ${formattedTitle}.`,
        });
        
        // Set page title to just the category name
        if (typeof document !== 'undefined') {
          document.title = `${formattedTitle.charAt(0).toUpperCase() + formattedTitle.slice(1)} Blogs`;
        }
        
        // Fetch blogs with the more efficient function
        const result = await fetchBlogsByCategory(category);
        
        if (result.error) {
          console.warn(result.error);
          setError(result.error);
        }
        
        setFilteredBlogs(result.blogs);
        console.log('Final filtered blogs:', result.blogs.length);
      } catch (err) {
        console.error("Error loading blogs:", err);
        setError("Failed to load blogs: " + err.message);
        setFilteredBlogs([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogs();
  }, [category]);

  if (!category) return <div className="text-center py-20">Category not found</div>;
  
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
            {categoryInfo?.title || category.replace(/-/g, " ")}
          </div>
        </div>
        
        {/* ✅ Category Header */}
        <header className="mb-12 flex flex-col md:flex-row items-center gap-6">
          {/* Left - Category Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold uppercase">
              {categoryInfo?.title || category.replace(/-/g, " ")}
            </h1>
            <p className="text-gray-500 max-w-full md:max-w-[40%] mt-2 text-lg">
              {categoryInfo?.description}
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

        {/* ✅ Blog Grid */}
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

        {/* Debug info in development */}
        {process.env.NODE_ENV === 'development' && debugInfo && (
          <div className="mt-8 p-4 bg-gray-100 rounded text-xs">
            <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
          </div>
        )}
      </Layout>
    </div>
  );
}
