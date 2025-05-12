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
      className="block group overflow-hidden rounded-lg shadow-lg bg-[#EBFAFE] hover:shadow-xl transition-shadow duration-300 w-full max-w-[420px] mx-auto"
    >
      {/* Image Section */}
      <div className="relative w-full h-64 overflow-hidden bg-gray-200">
        {!imageError && imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt={story.mainImage?.alt || story.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
            
            {/* Customer Logo Centered on Image - Like Superside */}
            {!logoError && logoUrl && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-20 w-48">
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
          </>
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Category - Now below the image */}
        <div className="mb-3">
          <span className="text-sm font-semibold uppercase tracking-wide text-gray-600">
            {categoryName}
          </span>
        </div>
        
        <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {story.title}
        </h2>
        
        <div className="text-base text-gray-600 mb-6 line-clamp-2 min-h-[48px]">
          {story.shortDescription}
        </div>
        
        {/* Footer with See Customer Story CTA */}
        <div className="flex justify-end mt-auto pt-4 border-t border-[#D0E8F2]">
          <span className="text-sm font-medium text-primary-600 flex items-center">
            See Customer Story
            <FaChevronRight className="ml-1 text-xs" />
          </span>
        </div>
      </div>
    </Link>
  );
}
