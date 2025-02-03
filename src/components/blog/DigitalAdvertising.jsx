import React from 'react';
import BlogCard from './BlogCard';
import Layout from '../common/Layout';
import { FaChevronRight } from "react-icons/fa6";
import Link from 'next/link';
import {blogs} from '@/data/blogData';

const DigitalAdvertising = () => {
  const DigitalAdvertisingBlogData = blogs.filter(blog => blog.category === 'Digital Advertising');
  
  return (
    <div className='bg-white py-16'>
      <Layout>
        <div className='flex group mb-6 justify-between items-center'>
          <h1 className='text-3xl sm:text-4xl text-secondary-500 font-semibold'>Digital Advertising</h1>
          <Link href={"#"} className='text-secondary-500 hover:underline flex items-center gap-1 font-semibold text-lg'>
            <span>See all</span>
            <FaChevronRight className='text-lg group-hover:translate-x-1 duration-300 transition-all' />
          </Link>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {DigitalAdvertisingBlogData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default DigitalAdvertising;