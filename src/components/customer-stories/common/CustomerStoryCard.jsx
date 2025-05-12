"use client";

import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { urlForImage } from "@/sanity/lib/image";
import { useState, useEffect } from "react";

export default function CustomerStoryCard({ story }) {
  const [imageError, setImageError] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [logoError, setLogoError] = useState(false);
  const [logoUrl, setLogoUrl] = useState('');

  // Process image URL on component mount
  useEffect(() => {
    if (story?.mainImage?.asset?._ref) {
      try {
        const imgUrl = urlForImage(story.mainImage).url();
        setImageUrl(imgUrl);
      } catch (error) {
        console.error("Error processing image in CustomerStoryCard:", error);
        setImageError(true);
      }
    } else {
      setImageError(true);
    }

    // Process customer logo if available
    if (story?.customerLogo?.asset?._ref) {
      try {
        const logo = urlForImage(story.customerLogo).url();
        console.log("Card customer logo URL:", logo); // Debug log
        setLogoUrl(logo);
        setLogoError(false); // Reset error state when logo is found
      } catch (error) {
        console.error("Error processing logo in CustomerStoryCard:", error);
        setLogoError(true);
      }
    } else {
      console.log("No customer logo found for card:", story.title);
      setLogoError(true);
    }
  }, [story]);

  // Format date for display
  const formattedDate = story.publishedAt 
    ? new Date(story.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : '';

  // Get the category name (using first category if multiple exist)
  const categoryName = story.categories && story.categories.length > 0
    ? story.categories[0].title
    : 'Uncategorized';

  return (
    <Link
      href={`/customer-stories/${story.slug.current}`}
      className="block group rounded-2xl"
    >
      {/* Image Section */}
      <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-gray-200">
        {!imageError && imageUrl ? (
          <Image
            src={imageUrl}
            alt={story.mainImage?.alt || story.title}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image</span>
          </div>
        )}
        
        {/* Customer Logo Overlay - Improved Visibility */}
        {!logoError && logoUrl && (
          <div className="absolute bottom-3 left-3">
            <div className="relative w-12 h-10">
              <Image
                src={logoUrl}
                alt={story.customerLogo?.alt || `${story.title} logo`}
                fill
                className="object-contain"
                onError={(e) => {
                  console.error("Card logo failed to load:", logoUrl);
                  setLogoError(true);
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="mt-4">
        <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">
          {categoryName} • {story.readTime} min read
        </p>
        <h2 className="text-lg line-clamp-1 font-semibold mt-1 text-black group-hover:underline underline-offset-2 transition-all duration-300">
          {story.title}
        </h2>
        <div className="text-sm text-gray-600 mt-2 line-clamp-2">
          {story.shortDescription}
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex items-center mt-4">
        <div>
          <button className="flex group-hover:underline underline-offset-2 items-center text-gray-800 font-medium">
            See Customer Story
            <FaChevronRight className="ml-2 text-sm" />
          </button>
        </div>
      </div>
    </Link>
  );
}
