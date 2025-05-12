"use client";
import React, { useRef, useState, useEffect } from "react";
import Layout from "../common/Layout";
import LongStoryCard from "./common/LongStoryCard";
import { client } from '@/sanity/lib/client';
import { getCustomerStoriesQuery } from '@/sanity/lib/queries';

const CustomerStoryHero = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [featuredStories, setFeaturedStories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch customer stories
  useEffect(() => {
    async function fetchStories() {
      try {
        const stories = await client.fetch(getCustomerStoriesQuery);
        // Take the first 4 customer stories
        setFeaturedStories(stories.slice(0, 4));
      } catch (error) {
        console.error("Error fetching customer stories:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchStories();
  }, []);

  // Start Dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // Stop Dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Scroll while dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="pb-16 pt-[160px] mt-[-80px]">
      <Layout>
        {/* Heading */}
        <div className="text-center mb-12">
          <h4 className="text-sm uppercase tracking-wide text-secondary-500">Learning Center</h4>
          <h2 className="text-4xl md:text-6xl mt-3 font-semibold text-secondary-500">
            Customer Stories
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-secondary-500 mt-8">
            Hear from our customers about the challenges they've faced and how we helped them implement effective solutions.
          </p>
        </div>

        {/* Main Content */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto py-4 scrollbar-hide cursor-grab active:cursor-grabbing -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pr-8 sm:pr-10 lg:pr-12 "
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {loading ? (
            // Loading skeleton
            Array(4).fill().map((_, index) => (
              <div key={index} className="min-w-[280px] h-80 flex-shrink-0 bg-gray-200 animate-pulse rounded-lg"></div>
            ))
          ) : featuredStories.length > 0 ? (
            // Render actual stories
            featuredStories.map((story, index) => (
              <LongStoryCard 
                key={story._id}
                story={story}
              />
            ))
          ) : (
            // Fallback message if no stories
            <div className="w-full text-center py-10 text-gray-500">
              No customer stories available yet. Check back soon!
            </div>
          )}
        </div>
      </Layout>
    </section>
  );
};

export default CustomerStoryHero;