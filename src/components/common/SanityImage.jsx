'use client';

import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { useState } from 'react';

export default function SanityImage({
  image,
  alt,
  fill = false,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  quality = 75,
  placeholder = 'blur',
  blurDataURL = '/images/placeholder.jpg',
  onError,
  ...props
}) {
  console.log('SanityImage input:', image); // Debug log
  const [error, setError] = useState(false);

  // Handle both Sanity and ImageKit images
  const getImageUrl = () => {
    if (!image) return null;

    // If it's an external URL (ImageKit)
    if (typeof image === 'string') {
      return image;
    }

    // If it's a Sanity image object with external URL
    if (image.externalImage) {
      return image.externalImage;
    }

    // If it's a new Sanity image object
    if (image.sanityImage?.asset?._ref) {
      return urlForImage(image.sanityImage).url();
    }

    // If it's a legacy Sanity image object (old posts)
    if (image.asset?._ref) {
      return urlForImage(image).url();
    }

    return null;
  };

  const imageUrl = getImageUrl();
  const imageAlt = alt || image?.alt || '';

  if (!imageUrl || error) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={fill ? { position: 'absolute', inset: 0 } : { width, height }}
      >
        <span className="text-gray-400">No image</span>
      </div>
    );
  }

  const handleError = (e) => {
    setError(true);
    if (onError) onError(e);
  };

  return (
    <Image
      src={imageUrl}
      alt={imageAlt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      priority={priority}
      sizes={sizes}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      onError={handleError}
      {...props}
    />
  );
} 