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

const OurWorkSection = ({ portfolioItems = [], isLoading = false }) => {
  // Fallback to existing static projects if no Sanity data is available
  const staticProjects = [
    {
      image: "/images/home/works-ban-1.avif",
      title: "Webflow",
      url: "/works/webflow",
      description: "Illustration Design, Ad Creative",
      colSpan: 2,
    },
    {
      image: "/images/home/works2.avif",
      title: "Pernod Ricard",
      url: "/works/pernod-ricard",
      description: "eBook & Digital Reports, Video Production",
      colSpan: 1,
    },
    {
      image: "/images/home/works3.avif",
      title: "PPC Advertising",
      url: "/works/ppc-advertising",
      description: "Google Ads Management, Facebook Ads, Remarketing Campaigns",
      colSpan: 1,
    },
    {
      image: "/images/home/works3.avif",
      title: "Salesforce",
      url: "/works/salesforce",
      description: "Motion Design, Ad Creative",
      colSpan: 1,
    },
    {
      image: "/images/home/works5.avif",
      title: "Content Marketing",
      url: "/works/content-marketing",
      description: "Blog Writing, Video Production, Infographic Design",
      colSpan: 2,
    },
    {
      image: "/images/home/works4.avif",
      title: "Shopify",
      url: "/works/shopify",
      description: "Ad Creative",
      colSpan: 1,
    },
  ];

  // Use Sanity data if available, otherwise use static data
  const projects = portfolioItems.length > 0 
    ? portfolioItems.map(item => ({
        id: item._id,
        image: item.thumbnailImage || item.mainImage 
          ? urlForImage(item.thumbnailImage || item.mainImage).url() 
          : "/images/home/works-ban-1.avif",
        title: item.title,
        url: `/works/${item.slug.current}`,
        description: item.services?.join(', ') || item.shortDescription || '',
        colSpan: item.featured ? 2 : 1, // Give featured items a larger span
      }))
    : staticProjects;

  // Duplicate items for infinite scroll effect if needed
  const displayProjects = projects.length > 6 
    ? projects 
    : [...projects, ...projects]; // Duplicate if not enough items

  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-primary-500 py-16">
      <Layout>
        {/* Section Header */}
        <div className="flex justify-between items-center ">
          <div className="max-w-3xl  ">
            <UiSubheading className="text-secondary-500 mb-2">
              Our Works
            </UiSubheading>
            <Heading
              level="h2"
              color="dark"
              spacing="lg"
              className="text-left font-semibold"
            >
              See Our{" "}
              <AccentText
                size="lg"
                className={"text-orange-500 whitespace-nowrap  "}
              >
                works
              </AccentText>
            </Heading>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="py-16 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
          </div>
        )}

        {/* Project Grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {displayProjects.map((project, index) => (
              <Link
                href={project.url}
                key={project.id || index}
                style={{
                  gridColumn: `span ${smallScreen ? 1 : project.colSpan || 1}`,
                }}
                className={`group rounded-lg cursor-pointer overflow-hidden ${
                  project.colSpan ? ` md:col-span-${project.colSpan}` : ""
                }`}
              >
                {/* Image */}
                <div className="rounded-lg overflow-hidden">
                  {project.image.startsWith('http') ? (
                    // For Sanity images
                    <div className="relative h-[200px] sm:h-[280px] xl:h-[340px] 2xl:h-[380px] w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="group-hover:scale-105 transition-transform duration-300 rounded-lg object-cover"
                      />
                    </div>
                  ) : (
                    // For static images
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[200px] sm:h-[280px] xl:h-[340px] 2xl:h-[380px] w-full group-hover:scale-105 transition-transform duration-300 rounded-lg object-cover"
                    />
                  )}
                </div>
                {/* Text Content */}
                <div className="py-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <MdOutlineArrowOutward className="opacity-0 self-center translate-x-[-50%] translate-y-[50%] group-hover:translate-y-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Layout>
    </div>
  );
};

export default OurWorkSection;
