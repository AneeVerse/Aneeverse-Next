"use client";

import { useState } from "react";
import Link from "next/link";
import CustomerStoryCard from "./common/CustomerStoryCard";

const CustomerStoriesButtonWithCategoryCard = ({ stories = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get all unique categories from stories
  const allCategories = stories.reduce((acc, story) => {
    if (story.categories && story.categories.length > 0) {
      story.categories.forEach(cat => {
        if (!acc.includes(cat.title)) {
          acc.push(cat.title);
        }
      });
    }
    return acc;
  }, []);

  const categories = ["All", ...allCategories];

  // Filter stories by selected category
  const filteredStories =
    selectedCategory === "All"
      ? stories
      : stories.filter((story) => 
          story.categories && 
          story.categories.some(cat => cat.title === selectedCategory)
        );

  return (
    <section className="py-12 md:py-16 bg-[#EBFAFE]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0A2E3D] mb-4" style={{ fontFamily: '"Inter", sans-serif' }}>
            On-demand Content
          </h2>
        </div>
        
        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-[#0A2E3D] text-white"
                  : "bg-white text-[#0A2E3D] border border-[#0A2E3D]"
              }`}
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Display Filtered Customer Stories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {filteredStories.map((story) => (
            <CustomerStoryCard story={story} key={story._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerStoriesButtonWithCategoryCard;
