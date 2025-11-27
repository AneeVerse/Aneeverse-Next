"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Layout from "../common/Layout";
import Link from "next/link";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";
import { UiSubheading } from "../common/typography/UiSubheading";

const data = [
  {
    firstTitle: "Website", secondTitle: "Design",
    tags: ["E-commerce", "UI/UX", "Custom Design"],
    url: "/services/website-design",
    image: "/images/home/creative/creative1.png"
  },
  {
    firstTitle: "Landing", secondTitle: "Pages",
    tags: ["High Conversion", "Lead Generation", "A/B Testing"],
    url: "/services/landing-pages",
    image: "/images/home/creative/creative3.png"
  },
  {
    firstTitle: "SEO", secondTitle: "Optimization",
    tags: ["Keyword Research", "On-Page SEO", "Technical SEO"],
    url: "/services/seo-optimization",
    image: "/images/home/creative/creative2.png"
  },
  {
    firstTitle: "Email", secondTitle: "Design",
    tags: ["Responsive Emails", "Newsletter Templates", "HTML Emails"],
    url: "/services/email-design",
    image: "/images/home/creative/creative2.png"
  },
  {
    firstTitle: "Marketing", secondTitle: "Strategy",
    tags: ["Brand Awareness", "Customer Retention", "Market Research"],
    url: "/services/marketing-strategy",
    image: "/images/home/creative/creative4.png"
  },
  {
    firstTitle: "Email", secondTitle: "Campaign",
    tags: ["Personalized Emails", "Automated Sequences", "Lead Nurturing"],
    url: "/services/email-campaign",
    image: "/images/home/creative/creative3.png"
  },
  {
    firstTitle: "Influencer", secondTitle: "Marketing",
    tags: ["Brand Collaborations", "Social Proof", "Sponsored Posts"],
    url: "/services/influencer-marketing",
    image: "/images/home/creative/creative3.png"
  },
  {
    firstTitle: "Blog", secondTitle: "Writing",
    tags: ["SEO Blogs", "Long-Form Content", "Industry Research"],
    url: "/services/blog-writing",
    image: "/images/home/creative/creative4.png"
  },
  {
    firstTitle: "Ghost", secondTitle: "Writing",
    tags: ["Personal Branding", "Book Writing", "Thought Leadership"],
    url: "/services/ghost-writing",
    image: "/images/home/creative/creative2.png"
  },
  {
    firstTitle: "Social Media", secondTitle: "Creatives",
    tags: ["Social Posts", "Ad Creatives", "Engaging Graphics"],
    url: "/services/social-media-creatives",
    image: "/images/home/creative/creative3.png"
  },
  {
    firstTitle: "Presentation", secondTitle: "Design",
    tags: ["Business Pitches", "Infographics", "Slide Decks"],
    url: "/services/presentation-design",
    image: "/images/home/creative/creative3.png"
  },
  {
    firstTitle: "Brochure", secondTitle: "Design",
    tags: ["Company Profiles", "Marketing Brochures", "Product Catalogs"],
    url: "/services/brochure-design",
    image: "/images/home/creative/creative3.png"
  }
];

const duplicatedData = [...data, ...data];

export default function CreativeSection() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const translateX = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const totalWidth = useRef(0);
  const scrollSpeed = 0.5;

  const calculateWidth = useCallback(() => {
    if (containerRef.current) {
      const children = containerRef.current.children;
      let width = 0;
      for (let i = 0; i < children.length; i++) {
        width += children[i].offsetWidth + 32;
      }
      totalWidth.current = width / 2;
    }
  }, []);

  const animate = useCallback(() => {
    if (!isPaused && !isDragging.current && containerRef.current) {
      translateX.current -= scrollSpeed;

      if (Math.abs(translateX.current) >= totalWidth.current) {
        translateX.current = 0;
      }

      containerRef.current.style.transform = `translateX(${translateX.current}px)`;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    setIsPaused(true);
    startX.current = e.clientX || e.touches[0].clientX;
    scrollLeft.current = translateX.current;
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const x = e.clientX || e.touches[0].clientX;
    const walk = (x - startX.current) * 1.5;
    translateX.current = scrollLeft.current + walk;
    containerRef.current.style.transform = `translateX(${translateX.current}px)`;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    setIsPaused(false);
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      setIsPaused(true);
      translateX.current -= e.deltaX;
      containerRef.current.style.transform = `translateX(${translateX.current}px)`;

      clearTimeout(window.wheelTimeout);
      window.wheelTimeout = setTimeout(() => {
        setIsPaused(false);
      }, 100);
    }
  };

  useEffect(() => {
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", calculateWidth);
      cancelAnimationFrame(animationRef.current);
    };
  }, [animate, calculateWidth]);

  return (
    <div className="bg-[#073742] py-20 overflow-hidden">
      <Layout>
        <div className="mb-12 relative z-10">
          <h3 className="text-white/70 text-sm tracking-[0.2em] uppercase mb-4 font-medium pl-1">
            What We Create
          </h3>
          <Heading
            level="h2"
            className="text-left font-bold text-white leading-[1.1] text-4xl sm:text-5xl md:text-6xl"
          >
            Every Type of Creative <br className="hidden sm:block" />
            Work You'll Ever Need, <br />
            <span className="text-[#2DC8E6] font-Rock_Salt relative inline-block transform rotate-[-2deg] mt-2 sm:mt-0">
              And More
            </span>
          </Heading>
        </div>
      </Layout>

      {/* ✅ Scrolling Content */}
      <div
        className="mt-8 relative select-none"
        onMouseEnter={() => setIsPaused(true)}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onWheel={handleWheel}
      >
        <div
          ref={containerRef}
          className="flex items-start w-max will-change-transform cursor-grab active:cursor-grabbing pl-4 select-none"
        >
          {duplicatedData.map((item, index) => {
            const isBig = index % 2 === 0;
            const cardHeight = isBig ? 'h-[380px] sm:h-[420px]' : 'h-[260px] sm:h-[300px]';

            return (
              <Link
                key={index}
                href={item.url}
                draggable={false}
                className="relative flex-shrink-0 mx-3 sm:mx-4 group flex flex-col w-[300px] sm:w-[350px] select-none"
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 w-full ${cardHeight}`}>
                  <img
                    src={item.image}
                    alt={`${item.firstTitle} ${item.secondTitle}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                    draggable={false}
                  />
                </div>

                {/* Content */}
                <div className="mt-5 px-1">
                  <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight mb-3">
                    {item.firstTitle} {item.secondTitle}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-[10px] sm:text-xs text-white/80 bg-white/10 rounded-full font-medium uppercase tracking-wide border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}