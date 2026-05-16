"use client";
import React from "react";
import Image from "next/image";
import Layout from "../../common/Layout";
import Link from "next/link";

const hardcodedProjects = [
  {
    image: "/images/works/amazone.jpeg",
    title: "Amazon Sales Growth",
    description: "₹6.46L+ Revenue, 440 Units Ordered",
    url: "/ads-ecommerce",
  },
  {
    image: "/images/works/etsy pow.jpg.jpeg",
    title: "Etsy Store Scaling",
    description: "10.1K Visits, 300 Orders, $18.5K Revenue",
    url: "/ads-ecommerce",
  },
  {
    image: "/images/works/etzy.jpeg",
    title: "Etsy SEO & Traffic Growth",
    description: "5,450% Search Increase, 6,028% Marketing Growth",
    url: "/ads-ecommerce",
  },
  {
    image: "/images/works/amazone.jpeg",
    title: "Amazon PPC Optimization",
    description: "₹6.46L+ Revenue, Ranking Growth in 90 Days",
    url: "/ads-ecommerce",
  },
];

const AdsOurWorks = React.memo(() => {

  return (
    <div className="bg-[#03151a] py-16 overflow-hidden">
      <Layout>
        {/* Section Header — no "Explore all" button */}
        <div className="mb-12">
          <div className="max-w-3xl">
            <h3 className="text-gray-400 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 font-bold">
              Our Works
            </h3>
            <h2 className="text-left font-bw-gradual font-extrabold text-white leading-[1.1] tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase">
              See Our <span className="font-Rock_Salt text-[#FF6B00] normal-case relative -top-2 inline-block transform -rotate-2 ml-2 text-[0.7em]">Top Works</span>
            </h2>
          </div>
        </div>

        {/* Projects */}
        {hardcodedProjects.length > 0 ? (
          <>
            {/* Desktop: 2x2 Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
              {hardcodedProjects.map((project, index) => (
                <Link
                  href={project.url}
                  key={index}
                  className="group cursor-pointer relative flex flex-col gap-4"
                >
                  <div className="relative rounded-2xl overflow-hidden w-full h-[350px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="group-hover:scale-105 transition-transform duration-500 rounded-2xl object-cover"
                      loading="lazy"
                      sizes="50vw"
                      unoptimized={project.image?.includes('cdn.sanity.io')}
                      onError={(e) => {
                        e.target.src = '/images/home/works-ban-1.avif';
                      }}
                    />
                  </div>
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

            {/* Mobile: Horizontal Slider */}
            <div className="flex md:hidden overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-hide pl-4 sm:pl-6 pr-4">
              {hardcodedProjects.map((project, index) => (
                <Link
                  href={project.url}
                  key={index}
                  className="group cursor-pointer relative flex flex-col gap-4 flex-shrink-0 w-[85vw] snap-start"
                >
                  <div className="relative rounded-2xl overflow-hidden w-full h-[300px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="group-hover:scale-105 transition-transform duration-500 rounded-2xl object-cover"
                      loading="lazy"
                      sizes="85vw"
                      unoptimized={project.image?.includes('cdn.sanity.io')}
                      onError={(e) => {
                        e.target.src = '/images/home/works-ban-1.avif';
                      }}
                    />
                  </div>
                  <div className="px-1">
                    <h3 className="text-xl font-normal text-white mb-1 font-serif italic text-left">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-normal font-sans text-left">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="py-16 flex justify-center">
            <p className="text-white/70">No projects available</p>
          </div>
        )}
      </Layout>
    </div>
  );
});

AdsOurWorks.displayName = 'AdsOurWorks';

export default AdsOurWorks;
