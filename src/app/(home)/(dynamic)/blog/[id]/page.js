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

const getBlogPost = (id) => {
  return blogs.find((blog) => blog.id === id);
};



export default function BlogDetail({ params }) {
  
  const resolvedParams = use(params); // ✅ Unwrapping params
  const post = getBlogPost(resolvedParams.id); 
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef([]);
  const observer = useRef(null);

  useEffect(() => {
    // Cleanup previous observer
    if (observer.current) {
      sectionRefs.current.forEach(section => {
        if (section) observer.current.unobserve(section);
      });
    }

    // Initialize new observer
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              ref => ref && ref.id === entry.target.id
            );
            if (index !== -1) setActiveSection(index);
          }
        });
      },
      {
        rootMargin: '-20% 0px -50% 0px', // Adjusted for better detection
        threshold: 0.2
      }
    );

    // Observe new sections
    const currentSections = sectionRefs.current.filter(Boolean);
    currentSections.forEach(section => {
      observer.current.observe(section);
    });

    return () => {
      currentSections.forEach(section => {
        observer.current.unobserve(section);
      });
    };
  }, [post]);

  // Reset sections when post changes
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, post?.content.length);
  }, [post]);

  if (!post) return <div className="text-center py-20">Blog not found</div>;

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
            <Link href={`/blog/category/${post.category.toLowerCase().replace(" ","-")}`} className="uppercase hover:underline">
              {post.category}
            </Link>
          </div>
          <div className="relative h-96 md:h-[483px] rounded-xl overflow-hidden">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="/images/placeholder.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="absolute w-full md:w-[80%] lg:w-[60%] inset-0 px-6 md:px-12 flex flex-col text-white py-6 md:py-12 justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-5xl text-left font-semibold mb-3 md:mb-6">
                  {post.title}
                </h1>
                <div className="text-left">Published {post.date}</div>
              </div>
              <div>
                <div className='text-md mb-2 tracking-wider'>AUTHOR</div>
                <div className="flex items-center gap-2 sm:gap-4">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                  <div className="text-left">
                    <p className="font-semibold">{post.author.name}</p>
                    <p className="text-sm">{post.author.role}</p>
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
                  <FaRegClock className='self-center' />
                  <div>{post.timeToRead}</div>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="py-3">
          <h4 className="font-semibold mb-4">In this article</h4>
          <ul className="space-y-3">
            {post.content.map((section, index) => (
              <li key={index}>
                <a
                        href={`#section-${index}`}
                        className={` flex items-center group text-sm ${
                          activeSection === index ? ' font-semibold' : ''
                        }`}
                      >
                        <span className={`w-[5px] h-[5px] rounded-full ${
                          activeSection === index ? 'bg-secondary-500 scale-100 opacity-100' : 'bg-secondary-500 group-hover:scale-100 group-hover:opacity-100 scale-0 opacity-0'
                        } inline-block transition-all duration-300`}></span>
                        <span className={`ml-[-5px] text-gray-600 inline-block transition-all duration-300 ${
                          activeSection === index ? 'ml-[5px] text-secondary-500' : 'group-hover:ml-[5px] group-hover:text-secondary-500'
                        }`}>{section.title}</span>
                      </a>
              </li>
            ))}
          </ul>
        </div>


              {/* Author Info */}
              <div className="bg-secondary-500 p-5 text-primary-500 flex-col flex rounded-lg shadow-md">
                <div className='flex gap-3 items-center'>
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={70}
                  height={70}
                  className="rounded-full mb-4"
                />
                <div>
                <h3 className="text-lg font-bold mb-2">{post.author.name}</h3>
                <p className=" text-sm mb-4">{post.author.role}</p>
                </div>
                </div>
                <p className=" text-left text-sm">
                  {post.author.name} has over a decade of experience in digital marketing
                  and creative leadership.
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content Sections */}
          <div>
            {/* description */}
            <div className="text-lg text-gray-600 leading-relaxed description mb-12">
              {post.description}
            </div>
            <article className="space-y-20">
            
        {/* Main Content */}
        {post.content.map((section, index) => (
          <section
            key={index}
            id={`section-${index}`}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="scroll-mt-24 mb-16" // Increased scroll margin
          >
                  <div className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
                { section.type != "text" &&    <div className="relative  aspect-video rounded-xl overflow-hidden">
                    { section.type == "image" ?  <Image
                        src={section.srcUrl}
                        alt={section.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        placeholder="blur"
                        blurDataURL="/images/placeholder.jpg"
                      /> : <iframe  src={section.srcUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" controls className="w-full h-full object-cover" />}
                    </div> } 
                  </div>
                  <div className="text-lg description text-gray-600 leading-relaxed">
                    {section.description}
                  </div>
                </section>
              ))}
            </article>
            <div className='mt-12'>
            <Newsletter />
</div>
            {/* Related Blogs */}
            <section className="mt-20">
              <h2 className="text-2xl font-semibold mb-8">More Articles</h2>
              <div className="grid md:grid-cols-3 gap-12">
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