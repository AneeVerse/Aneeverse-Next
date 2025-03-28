"use client";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import Layout from "../common/Layout";
import Link from "next/link";
import Image from "next/image";

const BlogHeroSection = ({ blogData }) => {
  // Extract blogs from the provided blog data
  const { blogs = [], isLoading = false } = blogData || {};
  
  // If no blogs exist or still loading, render a simplified version
  if (isLoading || blogs.length === 0) {
    return (
      <section className="pb-16 pt-[120px] mt-[-80px]">
        <Layout>
          {/* Heading */}
          <div className="text-center mb-12">
            <h4 className="text-sm uppercase tracking-wide text-secondary-500">BLOG</h4>
            <h2 className="text-4xl md:text-6xl mt-3 font-semibold text-secondary-500">
              Creative Performance
            </h2>
            <p className="text-lg text-secondary-500 mt-8">
              Creative ideas, practical tips and insider info—the Aneeverse blog
              helps your team get great design done at scale.
            </p>
          </div>
          
          {/* Loading state or empty blogs */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-gray-100 rounded-xl p-12 flex items-center justify-center">
              {isLoading ? (
                <div className="animate-pulse text-secondary-500">Loading featured content...</div>
              ) : (
                <p className="text-secondary-500">No featured blog posts available yet.</p>
              )}
            </div>
            
            {/* Subscription Box */}
            <div className="bg-[#EAF2E3] rounded-xl p-6 flex flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  CREATIVE GOLD
                </p>
                <h3 className="text-3xl font-semibold text-gray-900 mt-2">
                  For Your Inbox
                </h3>
                <p className="text-lg text-gray-600 mt-3">
                  The best events, articles and insights to spark your next big idea.
                </p>
              </div>
              <div className="mt-6">
                <div className="flex items-center bg-white px-4 py-3 rounded-full border border-gray-300">
                  <FaEnvelope className="text-gray-500" />
                  <input
                    type="email"
                    placeholder="buzz@nasa.gov"
                    className="flex-1 bg-transparent outline-none pl-3 text-gray-900"
                  />
                </div>
                <button className="mt-4 w-full bg-gray-900 text-white py-3 rounded-full font-semibold">
                  Subscribe now
                </button>
              </div>
            </div>
          </div>
        </Layout>
      </section>
    );
  }
  
  // Get the first blog as featured
  const featuredBlog = blogs[0];
  
  return (
    <section className="pb-16 pt-[120px] mt-[-80px]">
      <Layout>
        {/* Heading */}
        <div className="text-center mb-12">
          <h4 className="text-sm uppercase tracking-wide text-secondary-500">BLOG</h4>
          <h2 className="text-4xl md:text-6xl mt-3 font-semibold text-secondary-500">
            Creative Performance
          </h2>
          <p className="text-lg text-secondary-500 mt-8">
            Creative ideas, practical tips and insider info—the Aneeverse blog
            helps your team get great design done at scale.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Featured Blog */}
          <Link href={`blog/${featuredBlog.id}`} className="md:col-span-2 bg-[#031B34] text-white rounded-xl overflow-hidden">
            <div className="relative z-10 h-full w-full p-6">
              <div className="absolute inset-0">
                <Image
                  src={featuredBlog.thumbnail}
                  alt="Featured Blog"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-secondary-500 opacity-50"></div>
              <div className="relative flex flex-col justify-around z-10 w-full h-full">
                <p className="text-sm sm:text-md font-semibold uppercase tracking-wide text-gray-400">
                  {featuredBlog.category?.toUpperCase()} • {featuredBlog.timeToRead || '5 min read'}
                </p>
                <h3 className="text-3xl sm:text-4xl max-w-full sm:max-w-sm font-semibold mt-3">
                  {featuredBlog.title}
                </h3>
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={featuredBlog.author.image}
                      alt={featuredBlog.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center text-sm gap-2">
                    <div className="pr-4 border-r border-gray-400">
                      <p className="font-medium">{featuredBlog.author.name}</p>
                      <p className="text-gray-400">
                        {featuredBlog.author.role}
                      </p>
                    </div>
                    <div className="pl-4">
                      Published <br /> {featuredBlog.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Subscription Box */}
          <div className="bg-[#EAF2E3] rounded-xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500">
                CREATIVE GOLD
              </p>
              <h3 className="text-3xl font-semibold text-gray-900 mt-2">
                For Your Inbox
              </h3>
              <p className="text-lg text-gray-600 mt-3">
                The best events, articles and insights to spark your next big idea.
              </p>
            </div>
            <div className="mt-6">
              <div className="flex items-center bg-white px-4 py-3 rounded-full border border-gray-300">
                <FaEnvelope className="text-gray-500" />
                <input
                  type="email"
                  placeholder="buzz@nasa.gov"
                  className="flex-1 bg-transparent outline-none pl-3 text-gray-900"
                />
              </div>
              <button className="mt-4 w-full bg-gray-900 text-white py-3 rounded-full font-semibold">
                Subscribe now
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default BlogHeroSection;
