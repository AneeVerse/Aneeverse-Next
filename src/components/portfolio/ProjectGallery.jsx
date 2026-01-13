import React from 'react';
import { motion } from 'framer-motion';
import SanityImage from '../common/SanityImage';

export default function ProjectGallery({ images = [] }) {
  if (!images || images.length === 0) return null;
  
  return (
    <div className="py-12 md:py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Project Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl shadow-md bg-white"
            >
              <div className="relative h-72 w-full">
                <SanityImage
                  image={image}
                  alt={image.alt || 'Project image'}
                  fill
                  className="object-cover"
                />
              </div>
              {image.caption && (
                <div className="p-4">
                  <p className="text-gray-700">{image.caption}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
    </div>
  );
} 
