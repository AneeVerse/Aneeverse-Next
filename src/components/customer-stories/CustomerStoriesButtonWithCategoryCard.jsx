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
    <section className="bg-primary-500 py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl text-secondary-500 font-semibold">On-demand Content</h2>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 text-lg font-medium rounded-full transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-secondary-500 text-primary-500 "
                  : "bg-primary-500 text-secondary-500 border border-secondary-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Display Filtered Customer Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredStories.map((story) => (
           <CustomerStoryCard story={story} key={story._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerStoriesButtonWithCategoryCard;
