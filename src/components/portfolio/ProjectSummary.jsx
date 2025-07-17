import React from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import Layout from '../common/Layout';

export default function ProjectSummary({ project }) {
  if (!project) return null;
  
  return (
    <div className="py-16 bg-white">
      <Layout>
        {/* PROJECT SUMMARY Header */}
        <div className="mb-8 lg:-ml-7">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">PROJECT SUMMARY</h2>
        </div>
        
        <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr,0.8fr] gap-8 lg:gap-20 lg:items-start">
          {/* Left Content */}
          <div className="space-y-8 lg:-ml-7 order-1">
            {/* Project Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal text-secondary-500 leading-tight">
              {project.title}
            </h1>
            
            {/* Project Description */}
            {project.projectSummary && (
              <div className="prose max-w-none">
                <p className="text-gray-600 text-lg leading-relaxed">{project.projectSummary}</p>
              </div>
            )}
            
            {/* Meta Information */}
            <div className="flex flex-row pt-8">
              {/* Year */}
              {project.year && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">YEAR</h3>
                  <p className="text-4xl font-normal text-secondary-500">{project.year}</p>
                </div>
              )}
              {/* Industry */}
              {project.industry && (
                <div className="ml-40">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">INDUSTRY</h3>
                  <p className="text-4xl font-normal text-secondary-500">{project.industry}</p>
                </div>
              )}
            </div>
            

          </div>
          
          {/* Right Image */}
          <div className="relative flex items-center h-[300px] md:h-[400px] lg:h-[600px] xl:h-[700px] mt-8 lg:-mt-48 order-2">
            {(() => {
              // Helper to decide which image to render
              const summaryImg = project.projectSummaryImage;
              // 1. If summary image object NOT provided, fallback to main image
              if (!summaryImg) {
                return (
                  project.mainImage && (
                    <Image
                      src={urlForImage(project.mainImage).url()}
                      alt={`${project.title} project summary`}
                      fill
                      className="object-contain object-center"
                    />
                  )
                );
              }

              // 2. If external image is selected and URL exists
              if (summaryImg.useExternalImage && summaryImg.externalImage) {
                return (
                  <Image
                    src={summaryImg.externalImage}
                    alt={summaryImg.alt || `${project.title} project summary`}
                    fill
                    className="object-contain object-center"
                  />
                );
              }

              // 3. If an uploaded Sanity image exists
              if (summaryImg.sanityImage) {
                return (
                  <Image
                    src={urlForImage(summaryImg.sanityImage).url()}
                    alt={summaryImg.sanityImage.alt || summaryImg.alt || `${project.title} project summary`}
                    fill
                    className="object-contain object-center"
                  />
                );
              }

              // 4. No valid summary image – render nothing
              return null;
            })()}
          </div>
        </div>
      </Layout>
    </div>
  );
} 