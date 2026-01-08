"use client";
import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import Layout from "../common/Layout";
import Link from "next/link";

import { AccentText } from "../common/typography/AccentText";
import { Heading } from "../common/typography/Heading";
import { UiSubheading } from "../common/typography/UiSubheading";
import AnimatedButton from "../common/AnimatedButton";

const DynamicOurWorks = React.memo(({ projects = [] }) => {
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 768;
      setSmallScreen(isSmall);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Memoize displayed projects to prevent re-renders
  const displayedProjects = useMemo(() => projects.slice(0, 6), [projects]);

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

        {/* Projects Grid */}
        {displayedProjects.length > 0 ? (
          <div className=" grid grid-cols-1  md:grid-cols-4 gap-4">
            {displayedProjects.map((project, index) => (
              <Link
                href={project.url}
                key={index}
                style={{ gridColumn: `span ${smallScreen ? 1 : project.colSpan || 1}` }}
                className={`group rounded-lg cursor-pointer  overflow-hidden${project.colSpan ? ` md:col-span-${project.colSpan}` : ""}`}
              >
                {/* Image */}
                <div className="relative rounded-lg overflow-hidden h-[200px] sm:h-[280px] xl:h-[340px] 2xl:h-[380px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="group-hover:scale-105 transition-transform duration-300 rounded-lg object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized={project.image?.includes('cdn.sanity.io')}
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.target.src = '/images/home/works-ban-1.avif';
                    }}
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
        ) : (
          <div className="py-16 flex justify-center">
            <p className="text-white/70">No projects available</p>
          </div>
        )}
      </Layout>
    </div>
  );
});

DynamicOurWorks.displayName = 'DynamicOurWorks';

export default DynamicOurWorks;
