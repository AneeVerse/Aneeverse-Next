"use client";
import React, { useState } from "react";
import Image from "next/image";
import Layout from "../../common/Layout";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const hardcodedProjects = [
  {
    image: "/images/ads-digital-marketing/see-our-top-work/google-ads-proof.jpg",
    title: "Google Ads",
    stats: ["CPL ↓ 42%", "Before/After 60 Days"],
    url: "/ads-digital-marketing",
  },
  {
    image: "/images/ads-digital-marketing/see-our-top-work/meta-proof.jpg",
    title: "Meta Ads",
    stats: ["ROAS ↑ 2.8x", "Creative Testing Results"],
    url: "/ads-digital-marketing",
  },
  {
    image: "/images/ads-digital-marketing/see-our-top-work/seo.png",
    title: "SEO",
    stats: ["Page 3 → Page 1", "90-Day Ranking Movement"],
    url: "/ads-digital-marketing",
  },
  {
    image: "/images/ads-digital-marketing/see-our-top-work/website-dev.png",
    title: "Website",
    stats: ["Homepage Redesign", "Conversion Rate ↑ 35%"],
    url: "/ads-digital-marketing",
  },
  {
    image: "/images/ads-digital-marketing/see-our-top-work/platform-dev.png",
    title: "Platform",
    stats: ["Custom Web App", "Delivered On Milestone"],
    url: "/ads-digital-marketing",
  },
];

const AdsOurWorks = React.memo(() => {
  const [selectedImage, setSelectedImage] = useState(null);

  React.useEffect(() => {
    if (!selectedImage) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedImage]);

  return (
    <div className="bg-[#03151a] py-16 overflow-hidden">
      <Layout>
        <div className="mb-12">
          <div className="max-w-3xl">
            <h3 className="text-gray-400 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 font-bold">
              Our Works
            </h3>
            <h2 className="text-left font-bw-gradual font-extrabold text-white leading-[1.1] tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase">
              See Our{" "}
              <span className="font-Rock_Salt text-[#FF6B00] normal-case relative -top-2 inline-block transform -rotate-2 ml-2 text-[0.7em]">
                Top Works
              </span>
            </h2>
          </div>
        </div>

        {hardcodedProjects.length > 0 ? (
          <>
            <div className="hidden lg:grid lg:grid-cols-6 gap-6">
              {hardcodedProjects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(project.image)}
                  className={`group cursor-pointer relative flex flex-col gap-4 lg:col-span-2 ${
                    index === 3 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden w-full h-[300px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="group-hover:scale-105 transition-transform duration-500 rounded-2xl object-contain bg-white"
                      loading="lazy"
                      sizes="33vw"
                      unoptimized={project.image?.includes("cdn.sanity.io")}
                      onError={(e) => {
                        e.target.src = "/images/home/works-ban-1.avif";
                      }}
                    />
                  </div>
                  <div className="px-1 mt-1">
                    <h3 className="font-bw-gradual text-xl sm:text-2xl md:text-[1.6rem] font-bold text-white mb-2 leading-tight tracking-tight uppercase text-left">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-left">
                      {project.stats.map((stat, i, arr) => (
                        <React.Fragment key={i}>
                          <span className="text-[12px] sm:text-[13px] font-bold text-[#88D7F0] tracking-tight">
                            {stat}
                          </span>
                          {i < arr.length - 1 && <span className="w-1 h-1 rounded-full bg-white/25" />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">
              {hardcodedProjects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(project.image)}
                  className="group cursor-pointer relative flex flex-col gap-4"
                >
                  <div className="relative rounded-2xl overflow-hidden w-full h-[300px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="group-hover:scale-105 transition-transform duration-500 rounded-2xl object-contain bg-white"
                      loading="lazy"
                      sizes="50vw"
                      unoptimized={project.image?.includes("cdn.sanity.io")}
                      onError={(e) => {
                        e.target.src = "/images/home/works-ban-1.avif";
                      }}
                    />
                  </div>
                  <div className="px-1 mt-1">
                    <h3 className="font-bw-gradual text-xl font-bold text-white mb-2 leading-tight tracking-tight uppercase text-left">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-left">
                      {project.stats.map((stat, i, arr) => (
                        <React.Fragment key={i}>
                          <span className="text-[12px] font-bold text-[#88D7F0] tracking-tight">{stat}</span>
                          {i < arr.length - 1 && <span className="w-1 h-1 rounded-full bg-white/25" />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex md:hidden overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-hide pl-4 sm:pl-6 pr-4">
              {hardcodedProjects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(project.image)}
                  className="group cursor-pointer relative flex flex-col gap-4 flex-shrink-0 w-[85vw] snap-start"
                >
                  <div className="relative rounded-2xl overflow-hidden w-full h-[300px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="group-hover:scale-105 transition-transform duration-500 rounded-2xl object-contain bg-white"
                      loading="lazy"
                      sizes="85vw"
                      unoptimized={project.image?.includes("cdn.sanity.io")}
                      onError={(e) => {
                        e.target.src = "/images/home/works-ban-1.avif";
                      }}
                    />
                  </div>
                  <div className="px-1 mt-1">
                    <h3 className="font-bw-gradual text-lg sm:text-xl font-bold text-white mb-2 leading-tight tracking-tight uppercase text-left">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-left">
                      {project.stats.map((stat, i, arr) => (
                        <React.Fragment key={i}>
                          <span className="text-[12px] font-bold text-[#88D7F0] tracking-tight">{stat}</span>
                          {i < arr.length - 1 && <span className="w-1 h-1 rounded-full bg-white/25" />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="py-16 flex justify-center">
            <p className="text-white/70">No projects available</p>
          </div>
        )}
      </Layout>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-w-7xl w-full my-auto flex items-center justify-center p-2 sm:p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
                className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[210] text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
              >
                <FaTimes className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Project Detail Work"
                className="w-full h-auto max-h-[88vh] rounded-[1rem] md:rounded-[1.5rem] object-contain bg-white shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

AdsOurWorks.displayName = "AdsOurWorks";

export default AdsOurWorks;
