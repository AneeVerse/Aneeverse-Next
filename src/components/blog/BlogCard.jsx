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
  const timeToRead = blog?.timeToRead || '5 min read';
  const shortDescription = blog?.shortDescription || '';
  const author = blog?.author || { name: 'Anonymous', role: 'Author', image: defaultAuthorImage };
  
  return (
    <Link href={`/blog/${blog.slug}`} className="block group rounded-2xl h-full flex flex-col">
      {/* Image Section - Fixed height */}
      <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
        <Image
          src={thumbnailError ? defaultThumbnail : blog.thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          className="object-cover"
          placeholder="blur"
          blurDataURL="/images/placeholder.jpg"
          onError={() => setThumbnailError(true)}
        />
      </div>

      {/* Content Section - Flex-grow to fill available space */}
      <div className="mt-4 flex-grow flex flex-col">
        <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">
          {category} • {timeToRead}
        </p>
        <h2 className="text-lg line-clamp-1 font-semibold mt-1 text-black group-hover:underline underline-offset-2 transition-all duration-300 min-h-[28px]">
          {title}
        </h2>
        <div className="text-sm text-gray-600 mt-2 line-clamp-2 min-h-[40px]">
          {shortDescription}
        </div>
      </div>

      {/* Author Section - Fixed position at bottom */}
      <div className="flex items-center mt-4 pt-2 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
          <Image
            src={authorImageError ? defaultAuthorImage : author.image}
            alt={author.name}
            width={40}
            height={40}
            className="object-cover"
            onError={() => setAuthorImageError(true)}
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-semibold line-clamp-1">{author.name}</p>
          <p className="text-xs text-gray-500 line-clamp-1">{author.role}</p>
        </div>
      </div>
    </Link>
  );
}