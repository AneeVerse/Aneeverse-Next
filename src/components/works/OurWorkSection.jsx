"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Layout from "../common/Layout";
import { UiSubheading } from "../common/typography/UiSubheading";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

const OurWorkSection = ({ portfolioItems = [], customerStories = [], isLoading = false }) => {
  // Fallback to existing static projects if no Sanity data is available
  const staticProjects = [
    {
      image: "/images/home/works-ban-1.avif",
      title: "Webflow",
      url: "/works/webflow",
      description: "Illustration Design, Ad Creative",
      size: "large", // large items span 2 columns
      type: "work"
    },
    {
      image: "/images/home/works2.avif",
      title: "Pernod Ricard",
      url: "/works/pernod-ricard",
      description: "eBook & Digital Reports, Video Production",
      size: "small",
      type: "work"
    },
    {
      image: "/images/home/works3.avif",
      title: "PPC Advertising",
      url: "/works/ppc-advertising",
      description: "Google Ads Management, Facebook Ads, Remarketing Campaigns",
      size: "small",
      type: "work"
    },
    {
      image: "/images/home/works6.avif",
      title: "Salesforce",
      url: "/works/salesforce",
      description: "Motion Design, Ad Creative",
      size: "small",
      type: "work"
    },
    {
      image: "/images/home/works5.avif",
      title: "Content Marketing",
      url: "/works/content-marketing",
      description: "Blog Writing, Video Production, Infographic Design",
      size: "large",
      type: "work"
    },
    {
      image: "/images/home/works4.avif",
      title: "Shopify",
      url: "/works/shopify",
      description: "Ad Creative",
      size: "small",
      type: "work"
    },
    {
      image: "/images/home/works-ban-1.avif",
      title: "Reddit",
      url: "/works/reddit",
      description: "Digital Design, Social Media Creative",
      size: "small",
      type: "work"
    },
  ];

  // Transform portfolio items for the grid
  const portfolioProjects = portfolioItems.map((item, index) => ({
    id: item._id,
    image: item.thumbnailImage || item.mainImage 
      ? urlForImage(item.thumbnailImage || item.mainImage).url() 
      : "/images/home/works-ban-1.avif",
    title: item.title,
    url: `/works/${item.slug.current}`,
    description: item.servicesProvided?.join(', ') || item.services?.join(', ') || item.shortDescription || '',
    size: index % 3 === 0 ? "large" : "small",
    type: "work"
  }));

  // Transform customer stories for the grid (they look like work cards but link to customer stories)
  const storyProjects = customerStories.map((story, index) => ({
    id: story._id,
    image: story.mainImage 
      ? urlForImage(story.mainImage).url() 
      : "/images/home/works-ban-1.avif",
    title: story.projectTitle || story.title, // Use projectTitle field if available, fallback to title
    url: `/customer-stories/${story.slug.current}`,
    description: story.servicesProvided?.join(', ') || story.services?.join(', ') || story.shortDescription || story.categories?.map(cat => cat.title).join(', ') || '',
    size: index % 4 === 0 ? "large" : "small",
    type: "story"
  }));

  // Combine and shuffle portfolio items and customer stories
  const allProjects = [...portfolioProjects, ...storyProjects];
  
  // Use combined data if available, otherwise use static data
  const projects = allProjects.length > 0 ? allProjects : staticProjects;

  // Sort projects to mix them naturally (alternate between types)
  const mixedProjects = projects.sort((a, b) => {
    // Simple mixing algorithm - alternate types when possible
    if (a.type !== b.type) {
      return a.type === 'work' ? -1 : 1;
    }
    return 0;
  });

  return (
    <div className="bg-primary-500 py-16">
      <Layout>
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-center lg:text-left">
          <UiSubheading className="text-secondary-500 mb-2">
            Our Works
          </UiSubheading>
          <Heading
            level="h2"
            color="dark"
            spacing="lg"
            className="font-semibold px-4 sm:px-0"
          >
            See Our{" "}
            <AccentText
              size="lg"
              className={"text-orange-500"}
            >
              works
            </AccentText>
          </Heading>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="py-16 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
          </div>
        )}

        {/* Project Grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {mixedProjects.map((project, index) => {
              // Mobile: 1 column, Tablet: 2 columns, Desktop: 4 columns with spans
              const colSpan = project.colSpan || ((index % 6 === 0 || index % 6 === 4) ? 2 : 1);
              // Mobile-optimized height classes for better image visibility
              const heightClass = colSpan === 2 
                ? "h-[160px] sm:h-[200px] lg:h-[240px] xl:h-[300px]" 
                : "h-[160px] sm:h-[180px] lg:h-[200px] xl:h-[300px]";
              
              return (
                <Link
                  href={project.url}
                  key={project.id || index}
                  className={`group rounded-xl cursor-pointer overflow-hidden transition-all duration-300 ${
                    colSpan === 2 ? 'lg:col-span-2' : 'lg:col-span-1'
                  }`}
                >
                  {/* Image Container */}
                  <div className={`relative rounded-xl overflow-hidden ${heightClass} bg-gray-100`}>
                    {project.image.startsWith('http') ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="group-hover:scale-105 transition-transform duration-500 object-cover object-center"
                        priority={index < 4}
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full group-hover:scale-105 transition-transform duration-500 object-cover object-center"
                        loading={index < 4 ? "eager" : "lazy"}
                      />
                    )}
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  </div>
                  
                  {/* Text Content */}
                  <div className="py-6 px-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-xl sm:text-2xl font-normal text-gray-900 line-clamp-1 leading-tight font-serif italic">
                          {project.title}
                        </h3>
                        <MdOutlineArrowOutward className="flex-shrink-0 w-5 h-5 text-gray-600 opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                      <p className="text-base text-gray-600 line-clamp-1 leading-relaxed font-normal font-sans">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </Layout>
    </div>
  );
};

export default OurWorkSection;
