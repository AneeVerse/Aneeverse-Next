'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
  const slug = blog?.slug || '#';
  
  // Ensure thumbnail exists and is a non-empty string
  const thumbnailSrc = blog?.thumbnail && typeof blog.thumbnail === 'string' && blog.thumbnail.trim() !== '' 
    ? blog.thumbnail
    : defaultThumbnail;
  
  // Ensure author image exists and is a non-empty string
  const authorImageSrc = author?.image && typeof author.image === 'string' && author.image.trim() !== ''
    ? author.image
    : defaultAuthorImage;

  const handleThumbnailError = () => {
    console.error('Failed to load thumbnail:', thumbnailSrc);
    setThumbnailError(true);
  };

  const handleAuthorImageError = () => {
    console.error('Failed to load author image:', authorImageSrc);
    setAuthorImageError(true);
  };
  
  return (
    <Link href={`/blog/${slug}`} className="block group h-full">
      {/* Image Section */}
      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
        <Image
          src={thumbnailError ? defaultThumbnail : thumbnailSrc}
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
      <div className="mt-4">
        <div className="flex items-center gap-2 text-sm text-[#475467] uppercase tracking-wide">
          <span className="font-medium">{category.toUpperCase()}</span>
          <span>•</span>
          <span>{timeToRead}</span>
        </div>

        {/* Title */}
        <h3 className="mt-2 text-xl md:text-2xl leading-tight text-[#0A2E3D] font-normal transition-colors duration-200 relative line-clamp-2 h-auto min-h-[60px]">
          <span className="inline-block relative">
            {title}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0A2E3D] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h3>

        {/* Description */}
        <p className="mt-2 text-base leading-normal text-[#475467] line-clamp-2">
          {shortDescription}
        </p>
      </div>

      {/* Author Section */}
      <div className="flex items-center mt-4">
        <div className="w-10 h-10 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
          <Image
            src={authorImageError ? defaultAuthorImage : authorImageSrc}
            alt={author.name}
            width={40}
            height={40}
            className="object-cover"
            onError={handleAuthorImageError}
          />
        </div>
        <div className="ml-3 overflow-hidden">
          <p className="text-[15px] font-medium text-[#0A2E3D] truncate">{author.name}</p>
          <p className="text-[15px] text-[#475467] truncate">{author.role}</p>
        </div>
      </div>
    </Link>
  );
}