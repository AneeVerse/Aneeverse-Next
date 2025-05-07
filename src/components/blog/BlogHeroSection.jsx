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
      <section className="pb-16 pt-[160px] mt-[-80px]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-[80px] mt-16 font-normal tracking-[-2px] text-[#0A2E3D] leading-[1.1] relative inline-block group">
              <span className="relative inline-block">
                Creative Performance
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0A2E3D] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </h2>
            <p className="text-lg text-secondary-500 mt-8 max-w-3xl mx-auto">
              Creative ideas, practical tips and insider info—the Aneeverse blog
              helps your team get great design done at scale.
            </p>
          </div>
          
          {/* Loading state or empty blogs */}
          <div className="grid md:grid-cols-3 gap-8 w-full">
            <div className="md:col-span-2 bg-gray-100 rounded-xl p-12 flex items-center justify-center min-h-[400px]">
              {isLoading ? (
                <div className="animate-pulse text-secondary-500">Loading featured content...</div>
              ) : (
                <p className="text-secondary-500">No featured blog posts available yet.</p>
              )}
            </div>
            
            {/* Subscription Box */}
            <div className="bg-[#E6ECD6] rounded-xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <p className="text-sm uppercase tracking-wide text-secondary-500/70">
                  CREATIVE GOLD
                </p>
                <h3 className="text-3xl font-semibold text-secondary-500 mt-2">
                  For Your Inbox
                </h3>
                <p className="text-lg text-secondary-500/80 mt-3">
                  The best events, articles and insights to spark your next big idea.
                </p>
              </div>
              <div className="mt-6">
                <div className="flex items-center bg-transparent px-4 py-3 rounded-full border border-secondary-500/40">
                  <FaEnvelope className="text-secondary-500/60" />
                  <input
                    type="email"
                    placeholder="buzz@nasa.gov"
                    className="flex-1 bg-transparent outline-none pl-3 text-secondary-500"
                  />
                </div>
                <button className="mt-4 w-full bg-secondary-500 text-white py-3 rounded-full font-semibold hover:bg-secondary-500/90 transition-colors">
                  Subscribe now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Get the first blog as featured
  const featuredBlog = blogs[0];
  
  return (
    <section className="pb-16 pt-[160px] mt-[-80px]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-[80px] mt-16 font-normal tracking-[-2px] text-[#0A2E3D] leading-[1.1] relative inline-block group">
            <span className="relative inline-block">
              Creative Performance
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0A2E3D] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </h2>
          <p className="text-lg text-secondary-500 mt-8 max-w-3xl mx-auto">
            Creative ideas, practical tips and insider info—the Aneeverse blog
            helps your team get great design done at scale.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 w-full">
          {/* Featured Blog */}
          <Link href={`blog/${featuredBlog.id}`} className="md:col-span-2 bg-[#031B34] text-white rounded-xl overflow-hidden group">
            <div className="relative z-10 h-[400px] w-full p-8">
              <div className="absolute inset-0">
                <Image
                  src={featuredBlog.thumbnail}
                  alt="Featured Blog"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              <div className="relative flex flex-col justify-between z-10 w-full h-full">
                <p className="text-sm sm:text-md font-semibold uppercase tracking-wide text-gray-300">
                  {featuredBlog.category?.toUpperCase()} • {featuredBlog.timeToRead || '5 min read'}
                </p>
                <div>
                  <h3 className="text-3xl sm:text-4xl max-w-full sm:max-w-2xl font-semibold mt-3 leading-tight relative">
                    <span className="inline-block relative">
                      {featuredBlog.title}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </h3>
                  <div className="flex items-center gap-3 mt-6">
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
            </div>
          </Link>

          {/* Subscription Box */}
          <div className="bg-[#E6ECD6] rounded-xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <p className="text-sm uppercase tracking-wide text-secondary-500/70">
                CREATIVE GOLD
              </p>
              <h3 className="text-3xl font-semibold text-secondary-500 mt-2">
                For Your Inbox
              </h3>
              <p className="text-lg text-secondary-500/80 mt-3">
                The best events, articles and insights to spark your next big idea.
              </p>
            </div>
            <div className="mt-6">
              <div className="flex items-center bg-transparent px-4 py-3 rounded-full border border-secondary-500/40">
                <FaEnvelope className="text-secondary-500/60" />
                <input
                  type="email"
                  placeholder="buzz@nasa.gov"
                  className="flex-1 bg-transparent outline-none pl-3 text-secondary-500"
                />
              </div>
              <button className="mt-4 w-full bg-secondary-500 text-white py-3 rounded-full font-semibold hover:bg-secondary-500/90 transition-colors">
                Subscribe now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;
