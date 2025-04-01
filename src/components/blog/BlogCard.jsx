'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function BlogCard({ blog }) {
  const [thumbnailError, setThumbnailError] = useState(false);
  const [authorImageError, setAuthorImageError] = useState(false);
  
  // Default placeholder images
  const defaultThumbnail = "/images/blog1.avif";
  const defaultAuthorImage = "/images/blog/author/abhi.png";
  
  // Safe access to blog data with fallbacks
  const title = blog?.title || 'Untitled Blog Post';
  const category = blog?.category || 'Uncategorized';
  const timeToRead = typeof blog?.timeToRead === 'number' || !isNaN(parseInt(blog?.timeToRead))
    ? `${blog?.timeToRead} min Read`
    : (blog?.timeToRead || '5 min Read');
  const shortDescription = blog?.shortDescription || '';
  const author = blog?.author || { name: 'Anonymous', role: 'Author', image: defaultAuthorImage };
  
  // Debug logging for image URLs
  useEffect(() => {
    if (blog?.thumbnail) {
      console.log('Blog thumbnail URL:', blog.thumbnail);
    }
    if (blog?.author?.image) {
      console.log('Author image URL:', blog.author.image);
    }
  }, [blog]);

  const handleThumbnailError = () => {
    console.error('Failed to load thumbnail:', blog?.thumbnail);
    setThumbnailError(true);
  };

  const handleAuthorImageError = () => {
    console.error('Failed to load author image:', blog?.author?.image);
    setAuthorImageError(true);
  };
  
  return (
    <Link href={`/blog/${blog.slug}`} className="block group">
      {/* Image Section */}
      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
        <Image
          src={thumbnailError ? defaultThumbnail : blog.thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="blur"
          blurDataURL="/images/placeholder.jpg"
          onError={handleThumbnailError}
        />
      </div>

      {/* Category and Read Time */}
      <div className="mt-6">
        <div className="flex items-center gap-2 text-sm text-[#475467] uppercase tracking-wide">
          <span className="font-medium">{category}</span>
          <span>•</span>
          <span>{timeToRead}</span>
        </div>

        {/* Title */}
        <h3 className="mt-3 text-[26px] leading-[1.2] text-[#0A2E3D] font-normal transition-colors duration-200 relative">
          <span className="inline-block relative">
            {title}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0A2E3D] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h3>

        {/* Description */}
        <p className="mt-3 text-[17px] leading-[1.5] text-[#475467] line-clamp-2">
          {shortDescription}
        </p>
      </div>

      {/* Author Section */}
      <div className="flex items-center mt-6">
        <div className="w-10 h-10 rounded-md overflow-hidden bg-gray-100">
          <Image
            src={authorImageError ? defaultAuthorImage : author.image}
            alt={author.name}
            width={40}
            height={40}
            className="object-cover"
            onError={handleAuthorImageError}
          />
        </div>
        <div className="ml-3">
          <p className="text-[15px] font-medium text-[#0A2E3D]">{author.name}</p>
          <p className="text-[15px] text-[#475467]">{author.role}</p>
        </div>
      </div>
    </Link>
  );
}