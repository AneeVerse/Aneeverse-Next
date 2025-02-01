import React from 'react';
import BlogCard from './BlogCard';
import Layout from '../common/Layout';
import { FaChevronRight } from "react-icons/fa6";
import Link from 'next/link';

const DigitalAdvertisingBlogData = [
  {
    id: 1,
    title: 'ARTIFICIAL INTELLIGENCE',
    description: 'Digital advertising is a rapidly evolving field, with new technologies and strategies emerging all the time. In this blog post, we take a look at some of the key trends that are shaping the future of digital advertising, and how businesses can stay ahead of the curve.',
    image: '/images/blog/thumbnail.avif',
    date: 'August 16, 2021',
    time: '5 min read',
    author: 'Jennifer Rapp',
    authorRole: 'Chief Marketing Officer',
    authorImage: '/images/blog/author.avif'
  },
  {
    id: 2,
    title: 'PROGRAMMATIC ADVERTISING',
    description: 'Programmatic advertising is revolutionizing the way that businesses reach their target audiences. In this blog post, we explore what programmatic advertising is, how it works, and why it is becoming an essential tool for marketers.',
    image: '/images/blog/thumbnail.avif',
    date: 'August 16, 2021',
    time: '5 min read',
    author: 'Jennifer Rapp',
    authorRole: 'Chief Marketing Officer',
    authorImage: '/images/blog/author.avif'
  },
  {
    id: 3,
    title: 'SOCIAL MEDIA ADVERTISING',
    description: 'Social media advertising has become a key component of many businesses marketing strategies. In this blog post, we take a look at the power of social media advertising, and how businesses can leverage it to reach their target audiences.',
    image: '/images/blog/thumbnail.avif',
    date: 'August 16, 2021',
    time: '5 min read',
    author: 'Jennifer Rapp',
    authorRole: 'Chief Marketing Officer',
    authorImage: '/images/blog/author.avif'
  },
  {
    id: 4,
    title: 'THE ROLE OF AI ',
    description: 'Artificial intelligence is transforming the digital advertising landscape, enabling businesses to create more targeted and effective campaigns. In this blog post, we explore the role of AI in digital advertising, and how it is revolutionizing the industry.',
    image: '/images/blog/thumbnail.avif',
    date: 'August 16, 2021',
    time: '5 min read',
    author: 'Jennifer Rapp',
    authorRole: 'Chief Marketing Officer',
    authorImage: '/images/blog/author.avif'
  }
];

const DigitalAdvertising = () => {
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