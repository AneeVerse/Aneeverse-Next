"use client";
import React, { use, useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Layout from "../common/Layout";
import Link from "next/link";

import { AccentText } from "../common/typography/AccentText";
import { Heading } from "../common/typography/Heading";
import { UiSubheading } from "../common/typography/UiSubheading";
import { client } from "@/sanity/lib/client";
import { getPortfolioWorksQuery, getCustomerStoriesQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import AnimatedButton from "../common/AnimatedButton";

const DynamicOurWorks = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setIsLoading(true);
        // Fetch both works and customer stories
        const [works, stories] = await Promise.all([
          client.fetch(getPortfolioWorksQuery),
          client.fetch(getCustomerStoriesQuery)
        ]);
        // Map works
        const mappedWorks = works.map((item, index) => ({
          image: item.thumbnailImage || item.mainImage ? urlForImage(item.thumbnailImage || item.mainImage).url() : "/images/home/works-ban-1.avif",
          title: item.title,
          url: `/works/${item.slug.current}`,
          description: item.servicesProvided?.join(", ") || item.shortDescription || "",
          colSpan: (index % 6 === 0 || index % 6 === 4) ? 2 : 1,
          type: "work"
        }));
        // Map customer stories
        const mappedStories = stories.map((story, index) => ({
          image: story.mainImage ? urlForImage(story.mainImage).url() : "/images/home/works-ban-1.avif",
          title: story.projectTitle || story.title,
          url: `/customer-stories/${story.slug.current}`,
          description: story.servicesProvided?.join(", ") || story.shortDescription || "",
          colSpan: ((index + mappedWorks.length) % 6 === 0 || (index + mappedWorks.length) % 6 === 4) ? 2 : 1,
          type: "story"
        }));
        // Combine and sort (works first, then stories, or mix as needed)
        const combined = [...mappedWorks, ...mappedStories];
        setProjects(combined);
      } catch (error) {
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProjects();
  }, []);

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
    <div className="bg-[#03151a] py-16">
      <Layout>
        {/* Section Header */}
        <div className="flex justify-between items-center mb-2">
          <div className="max-w-3xl  ">
            <UiSubheading className="text-white/70 mb-2">
              Our Works
            </UiSubheading>
            <Heading
              level="h2"
              color="light"
              spacing="lg"
              className="text-left font-semibold text-white"
            >
              See Our{" "}
              <AccentText
                size="lg"
                className={"text-orange-500 whitespace-nowrap "}
              >
                Top Works
              </AccentText>
            </Heading>
          </div>
          <AnimatedButton
            href="/works"
            className="mt-4 min-w-fit whitespace-nowrap px-6 py-3 rounded-full font-medium text-secondary-500 bg-primary-500 border border-secondary-500 hover:bg-secondary-500 hover:text-[#EBFAFE] transition-colors"
            mainTextSlide="-150%"
            duplicateTextStart="40%"
            duplicateTextEnd="-100%"
          >
            Explore all{" "}
            <span className="hidden sm:inline-block"> our works</span>
          </AnimatedButton>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="py-16 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
          </div>
        ) : (
          <div className=" grid grid-cols-1  md:grid-cols-4 gap-4">
            {projects.slice(0, 6).map((project, index) => (
              <Link
                href={project.url}
                key={index}
                style={{ gridColumn: `span ${smallScreen ? 1 : project.colSpan || 1}` }}
                className={`group rounded-lg cursor-pointer  overflow-hidden${project.colSpan ? ` md:col-span-${project.colSpan}` : ""}`}
              >
                {/* Image */}
                <div className=" rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[200px] sm:h-[280px] xl:h-[340px] 2xl:h-[380px] w-full group-hover:scale-105 transition-transform duration-300 rounded-lg object-cover"
                  />
                </div>
                {/* Text Content */}
                <div className="py-6 px-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl sm:text-2xl font-normal text-white line-clamp-1 leading-tight font-serif italic">
                        {project.title}
                      </h3>
                      <MdOutlineArrowOutward className="flex-shrink-0 w-5 h-5 text-white/80 opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                    <p className="text-base text-white/70 line-clamp-1 leading-relaxed font-normal font-sans">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Layout>
    </div>
  );
};

export default DynamicOurWorks;
