import React from 'react';
import BlogCard from './BlogCard';
import { FaChevronRight } from "react-icons/fa6";
import Link from 'next/link';

const SeoBlogSection = ({ blogData }) => {
  // Extract blogs from the provided blog data
  const { blogs = [] } = blogData || {};
  
  // Filter blogs for the SEO category - handle both 'SEO' and 'seo' formats
  const seoBlogs = blogs.filter(blog => 
    blog?.category?.toLowerCase() === 'seo' || 
    blog?.category?.toLowerCase() === 'search engine optimization'
  );
  
  if (!seoBlogs?.length) return null;
  
  return (
    <div className='w-full bg-white py-20'>
      <div className='w-[94%] max-w-[1440px] mx-auto'>
        <div className='flex justify-between items-center mb-14'>
          <h2 className='text-[40px] text-[#0A2E3D] font-normal'>SEO</h2>
          <Link 
            href={`/blog/category/seo`} 
            className='text-[#0A2E3D] hover:text-blue-600 flex items-center gap-2 font-medium text-lg'
          >
            <span>See All</span>
            <FaChevronRight className='text-lg transition-transform duration-300 group-hover:translate-x-1' />
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
          {seoBlogs.slice(0, 3).map((blog) => (
            <div key={blog.id} className="min-w-0">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeoBlogSection;