'use client';

import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import SanityImage from '../common/SanityImage';
import { urlForImage } from '@/sanity/lib/image';

// Custom components for portable text rendering
const components = {
  types: {
    image: ({ value }) => {
      if (!value) return null;

      return (
        <div className="my-8">
          <SanityImage
            image={value}
            alt={value.alt || ''}
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg shadow-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
          {value.caption && (
            <p className="text-sm text-gray-600 mt-2 text-center">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
    customImage: ({ value }) => {
      if (!value) return null;

      return (
        <div className="my-8">
          <SanityImage
            image={value}
            alt={value.alt || ''}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
          {value.caption && (
            <p className="text-sm text-gray-600 mt-2 text-center">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
    youtubeEmbed: ({ value }) => {
      if (!value?.url) return null;

      // Extract YouTube video ID from URL
      const getYouTubeId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
      };

      const videoId = getYouTubeId(value.url);
      if (!videoId) return null;

      return (
        <div className="my-8">
          <div className="relative w-full aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video"
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {value.caption && (
            <p className="text-sm text-gray-600 mt-2 text-center">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
    table: ({ value }) => {
      console.log('Table value:', value);
      
      // Handle different table structures
      let rows = [];
      let hasHeaderRow = false;
      
      if (value.rows && Array.isArray(value.rows)) {
        rows = value.rows;
        hasHeaderRow = value.hasHeaderRow || false;
      } else if (Array.isArray(value)) {
        // If value is directly an array of rows
        rows = value;
        hasHeaderRow = false;
      } else if (value && typeof value === 'object') {
        // Try to extract rows from different possible structures
        if (value.body && Array.isArray(value.body)) {
          rows = value.body;
        } else if (value.content && Array.isArray(value.content)) {
          rows = value.content;
        }
      }

      if (!rows || rows.length === 0) {
        console.warn('No table rows found:', value);
        return null;
      }

      // Force hasHeaderRow to true for better styling
      hasHeaderRow = true;

      return (
        <div className="my-8 overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            {rows.length > 0 && hasHeaderRow && (
              <thead>
                <tr>
                  {rows[0].cells.map((cell, cellIndex) => (
                    <th
                      key={cellIndex}
                      className="px-6 py-3 text-left text-xs font-medium border border-gray-200"
                      style={{ backgroundColor: 'yellow', color: 'red' }}
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {rows.slice(hasHeaderRow ? 1 : 0).map((row, rowIndex) => (
                <tr 
                  key={rowIndex} 
                  style={{ backgroundColor: 'green' }}
                >
                  {row.cells.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-6 py-4 whitespace-normal text-sm border border-gray-200"
                      style={{ backgroundColor: 'green', color: 'black' }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      console.log('Link serializer called with:', { children, value });
      const href = value?.href || '#';
      const isExternal = href.startsWith('http');
      console.log('Link details:', { href, isExternal });
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline"
          >
            {children}
          </a>
        );
      }
      // Internal link
      return (
        <Link href={href} className="text-primary-600 hover:underline">
          {children}
        </Link>
      );
    },
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm">{children}</code>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-[#101828]">{children}</h1>,
    h2: ({ children, value }) => {
      const title = Array.isArray(children) ? children.join('') : children;
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      
      return (
        <h2 
          id={id}
          className="text-2xl font-bold mt-8 mb-4 text-[#101828] scroll-mt-24"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-4 text-[#101828]">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-bold mt-6 mb-2 text-[#101828]">{children}</h4>,
    normal: ({ children }) => <p className="mb-4 text-gray-700">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="pl-4 border-l-4 border-primary-500 italic my-6 text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-6 text-gray-700">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-6 text-gray-700">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
};

export default function SanityPortableText({ value }) {
  console.log('SanityPortableText value:', value);
  if (!value) {
    return null;
  }

  return (
    <div className="portable-text">
      <PortableText value={value} components={components} />
    </div>
  );
} 