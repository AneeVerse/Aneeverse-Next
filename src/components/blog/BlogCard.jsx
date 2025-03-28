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
  
  return (
    <Link href={`/blog/${blog.id}`} className="block group rounded-2xl">
      {/* Image Section */}
      <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gray-100">
        <Image
          src={thumbnailError ? defaultThumbnail : blog.thumbnail}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          className="object-cover"
          placeholder="blur"
          blurDataURL="/images/placeholder.jpg"
          onError={() => setThumbnailError(true)}
        />
      </div>

      {/* Content Section */}
      <div className="mt-4">
        <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">
          {blog.category} • {blog.timeToRead || '5 min read'}
        </p>
        <h2 className="text-lg line-clamp-1 font-semibold mt-1 text-black group-hover:underline underline-offset-2 transition-all duration-300">
          {blog.title}
        </h2>
        <div className="text-sm text-gray-600 mt-2 line-clamp-2">
          {blog.shortDescription}
        </div>
      </div>

      {/* Author Section */}
      <div className="flex items-center mt-4">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
          <Image
            src={authorImageError ? defaultAuthorImage : blog.author.image}
            alt={blog.author.name}
            width={40}
            height={40}
            onError={() => setAuthorImageError(true)}
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-semibold">{blog.author.name}</p>
          <p className="text-xs text-gray-500">{blog.author.role}</p>
        </div>
      </div>
    </Link>
  );
}