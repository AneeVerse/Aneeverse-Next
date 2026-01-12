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

  // Hardcoded grid pattern to match the "Second Image" layout (2-1-1, 1-1-2)
  const getGridSpan = (index) => {
    // Row 1: Index 0 (Wide), 1 (Small), 2 (Small)
    if (index === 0) return 2;
    if (index === 1 || index === 2) return 1;

    // Row 2: Index 3 (Small), 4 (Small), 5 (Wide)
    if (index === 3 || index === 4) return 1;
    if (index === 5) return 2;

    return 1;
  };

  return (
    <div className="bg-[#03151a] py-16 overflow-hidden">
      <Layout>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-3xl">
            <h3 className="text-gray-400 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 font-bold">
              Our Works
            </h3>
            <h2 className="text-left font-bw-gradual font-extrabold text-white leading-[1.1] tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase">
              See Our <span className="font-Rock_Salt text-[#FF6B00] normal-case relative -top-2 inline-block transform -rotate-2 ml-2 text-[0.7em]">Top Works</span>
            </h2>
          </div>
          <AnimatedButton
            href="/works"
            className="px-10 py-4 rounded-full font-bold text-base shadow-[0_0_20px_rgba(136,215,240,0.1)] mb-2"
            style={{
              backgroundColor: "#88D7F0",
              color: "#073742"
            }}
            mainTextSlide="-200%"
            duplicateTextStart="200%"
            duplicateTextEnd="-115%"
          >
            Explore all our works
          </AnimatedButton>
        </div>

        {/* Projects Grid */}
        {displayedProjects.length > 0 ? (
          <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-hide px-6 md:grid md:grid-cols-4 md:gap-6 md:px-0 md:overflow-visible md:pb-0">
            {displayedProjects.map((project, index) => (
              <Link
                href={project.url}
                key={index}
                className={`group cursor-pointer relative flex flex-col gap-4 flex-shrink-0 w-[85vw] snap-start md:w-auto ${getGridSpan(index) === 2 ? "md:col-span-2" : "md:col-span-1"}`}
              >
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden w-full h-[300px] md:h-[350px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="group-hover:scale-105 transition-transform duration-500 rounded-2xl object-cover"
                    loading="lazy"
                    sizes={getGridSpan(index) === 2 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                    unoptimized={project.image?.includes('cdn.sanity.io')}
                    onError={(e) => {
                      e.target.src = '/images/home/works-ban-1.avif';
                    }}
                  />
                  {/* Overlay for depth if needed, or keep clean */}
                </div>

                {/* Text Content */}
                <div className="px-1">
                  <h3 className="text-xl sm:text-2xl font-normal text-white mb-1 font-serif italic text-left">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-normal font-sans text-left">
                    {project.description}
                  </p>
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
