"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Layout from "../common/Layout";
import Link from "next/link";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";
import { UiSubheading } from "../common/typography/UiSubheading";

const data = [
  {
    firstTitle: "Ad", secondTitle: "Creative",
    tags: ["Social Ads", "Display Ads", "Creative Campaigns"],
    url: "/services/ad-creative",
    image: "https://ik.imagekit.io/aghmftdmm/creative/AD%20CREATIVE%202.webp?updatedAt=1765350361052"
  },
  {
    firstTitle: "Platform", secondTitle: "Development",
    tags: ["Web Platforms", "Custom Development", "Full-Stack Solutions"],
    url: "/services/platform-development",
    image: "https://ik.imagekit.io/aghmftdmm/creative/PLATFORM%20DEVLOPMENT%202.webp?updatedAt=1765350362851"
  },
  {
    firstTitle: "AI Powered", secondTitle: "Creatives",
    tags: ["AI Design", "Automated Creatives", "Smart Graphics"],
    url: "/services/ai-powered-creatives",
    image: "https://ik.imagekit.io/aghmftdmm/creative/AI%20POWERED%20CREATIVES%201.webp?updatedAt=1765350360954"
  },
  {
    firstTitle: "Marketing", secondTitle: "Strategy",
    tags: ["Brand Awareness", "Customer Retention", "Market Research"],
    url: "/services/marketing-strategy",
    image: "https://ik.imagekit.io/aghmftdmm/creative/MARKETING%20STRATEGY%201.webp?updatedAt=1765350363109"
  },
  {
    firstTitle: "Social Media", secondTitle: "Creatives",
    tags: ["Social Posts", "Ad Creatives", "Engaging Graphics"],
    url: "/services/social-media-creatives",
    image: "https://ik.imagekit.io/aghmftdmm/creative/SOCIAL%20MEDIA%20CREATIVES%201.webp?updatedAt=1765350362918"
  },
  {
    firstTitle: "UI, UX & Web", secondTitle: "Development",
    tags: ["User Interface", "User Experience", "Web Development"],
    url: "/services/ui-ux-web-development",
    image: "https://ik.imagekit.io/aghmftdmm/creative/UI,%20UX%20&%20WEB%20DEVLOPMENT%202.webp?updatedAt=1765350363457"
  },
  {
    firstTitle: "AI Blog", secondTitle: "Writing",
    tags: ["AI Content", "Automated Writing", "SEO Optimized"],
    url: "/services/ai-blog-writing",
    image: "https://ik.imagekit.io/aghmftdmm/creative/AI%20BLOG%20WRITING%202.webp?updatedAt=1765350361070"
  },
  {
    firstTitle: "Email", secondTitle: "Campaign",
    tags: ["Personalized Emails", "Automated Sequences", "Lead Nurturing"],
    url: "/services/email-campaign",
    image: "https://ik.imagekit.io/aghmftdmm/creative/EMAIL%20CAMPAIGN%201.webp?updatedAt=1765350362742"
  },
  {
    firstTitle: "Presentation", secondTitle: "Design",
    tags: ["Business Pitches", "Infographics", "Slide Decks"],
    url: "/services/presentation-design",
    image: "https://ik.imagekit.io/aghmftdmm/creative/PRESENTATION%20DESIGN%201.webp?updatedAt=1765350362921"
  },
  {
    firstTitle: "Design", secondTitle: "System",
    tags: ["Component Library", "Style Guide", "Design Standards"],
    url: "/services/design-system",
    image: "https://ik.imagekit.io/aghmftdmm/creative/DESIGN%20SYSTEM%201.webp?updatedAt=1765350363997"
  },
  {
    firstTitle: "AI SEO", secondTitle: "(GEO) (AEO) (AIO)",
    tags: ["AI Optimization", "Geo SEO", "Advanced SEO"],
    url: "/services/ai-seo-geo-aeo-aio",
    image: "https://ik.imagekit.io/aghmftdmm/creative/AI%20SEO%20(GEO)%20(AEO)%20(AIO)%201.webp?updatedAt=1765350361413"
  },
  {
    firstTitle: "Email", secondTitle: "Design",
    tags: ["Responsive Emails", "Newsletter Templates", "HTML Emails"],
    url: "/services/email-design",
    image: "https://ik.imagekit.io/aghmftdmm/creative/EMAIL%20DESIGN%201.webp?updatedAt=1765350362829"
  },
  {
    firstTitle: "Illustration", secondTitle: "Design",
    tags: ["Custom Illustrations", "Digital Art", "Visual Storytelling"],
    url: "/services/illustration-design",
    image: "https://ik.imagekit.io/aghmftdmm/creative/ILLUSTRATION%20DESIGN%201.webp?updatedAt=1765350362443"
  },
  {
    firstTitle: "Product", secondTitle: "Design",
    tags: ["Product Development", "Industrial Design", "Prototyping"],
    url: "/services/product-design",
    image: "https://ik.imagekit.io/aghmftdmm/creative/PRODUCT%20DESIGN%201.webp?updatedAt=1765350363546"
  },
  {
    firstTitle: "Sales & Marketing", secondTitle: "Automation",
    tags: ["Marketing Automation", "CRM Integration", "Workflow Design"],
    url: "/services/sales-marketing-automation",
    image: "https://ik.imagekit.io/aghmftdmm/creative/SALES%20&%20MARKETING%20AUTOMATION%201.webp?updatedAt=1765350362822"
  },
  {
    firstTitle: "Branding", secondTitle: "Services",
    tags: ["Logo Design", "Brand Identity", "Visual Identity"],
    url: "/services/branding-services",
    image: "https://ik.imagekit.io/aghmftdmm/creative/BRANDING%20SERVICES%201.webp?updatedAt=1765350361962"
  },
  {
    firstTitle: "Copywriting", secondTitle: "",
    tags: ["Sales Copy", "Marketing Copy", "Content Writing"],
    url: "/services/copywriting",
    image: "https://ik.imagekit.io/aghmftdmm/creative/COPYWRITING%201.webp?updatedAt=1765350362521"
  },
  {
    firstTitle: "Blog", secondTitle: "Writing",
    tags: ["SEO Blogs", "Long-Form Content", "Industry Research"],
    url: "/services/blog-writing",
    image: "https://ik.imagekit.io/aghmftdmm/creative/BLOG%20WRITING%20%201.webp?updatedAt=1765350361275"
  },
  {
    firstTitle: "SEO", secondTitle: "Optimize",
    tags: ["Keyword Research", "On-Page SEO", "Technical SEO"],
    url: "/services/seo-optimization",
    image: "https://ik.imagekit.io/aghmftdmm/creative/SEO%20OPTIMIZE%201.webp?updatedAt=1765350362673"
  },
  {
    firstTitle: "Corporate &", secondTitle: "Internals",
    tags: ["Brand Guidelines", "Internal Communications", "Corporate Identity"],
    url: "/services/corporate-internals",
    image: "https://ik.imagekit.io/aghmftdmm/creative/COPERATE%20&%20INTERNELS%201.webp?updatedAt=1765350362598"
  },
  {
    firstTitle: "Ebook & Digital", secondTitle: "Report",
    tags: ["Digital Publications", "Interactive Reports", "PDF Design"],
    url: "/services/ebook-digital-report",
    image: "https://ik.imagekit.io/aghmftdmm/creative/EBOOK%20AND%20DIGITAL%20REPORT%201.webp?updatedAt=1765350362500"
  },
  {
    firstTitle: "Print", secondTitle: "Design",
    tags: ["Brochures", "Flyers", "Business Cards"],
    url: "/services/print-design",
    image: "https://ik.imagekit.io/aghmftdmm/creative/PRINT%20DESIGN%201.webp?updatedAt=1765350362624"
  },
  {
    firstTitle: "Packing &", secondTitle: "Merchandise Design",
    tags: ["Product Packaging", "Retail Design", "Brand Identity"],
    url: "/services/packing-merchandise-design",
    image: "https://ik.imagekit.io/aghmftdmm/creative/PACKING%20&%20MERCHANDISE%20DESIGN%201.webp?updatedAt=1765350363321"
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
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const momentumRef = useRef(null);
  const scrollSpeed = 0.5;

  const calculateWidth = useCallback(() => {
    if (containerRef.current) {
      const children = containerRef.current.children;
      let width = 0;
      for (let i = 0; i < children.length / 2; i++) {
        width += children[i].offsetWidth + 32;
      }
      totalWidth.current = width;
    }
  }, []);

  const normalizePosition = useCallback(() => {
    // Keep position within bounds for infinite scroll
    if (translateX.current <= -totalWidth.current) {
      translateX.current += totalWidth.current;
    } else if (translateX.current > 0) {
      translateX.current -= totalWidth.current;
    }
  }, []);

  const animate = useCallback(() => {
    if (!isPaused && !isDragging.current && containerRef.current) {
      translateX.current -= scrollSpeed;
      normalizePosition();
      // Use translate3d for GPU acceleration
      containerRef.current.style.transform = `translate3d(${translateX.current}px, 0, 0)`;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused, normalizePosition]);

  const applyMomentum = useCallback(() => {
    if (Math.abs(velocity.current) > 0.1) {
      translateX.current += velocity.current;
      velocity.current *= 0.95; // Smooth deceleration

      normalizePosition(); // Keep within bounds

      if (containerRef.current) {
        // Use translate3d for GPU acceleration
        containerRef.current.style.transform = `translate3d(${translateX.current}px, 0, 0)`;
      }

      momentumRef.current = requestAnimationFrame(applyMomentum);
    } else {
      velocity.current = 0;
      setIsPaused(false);
      if (momentumRef.current) {
        cancelAnimationFrame(momentumRef.current);
        momentumRef.current = null;
      }
    }
  }, [normalizePosition]);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    setIsPaused(true);

    // Cancel any ongoing momentum
    if (momentumRef.current) {
      cancelAnimationFrame(momentumRef.current);
      momentumRef.current = null;
    }
    velocity.current = 0;

    startX.current = e.clientX || e.touches?.[0]?.clientX || 0;
    scrollLeft.current = translateX.current;
    lastX.current = startX.current;
    lastTime.current = Date.now();
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;

    const currentX = e.clientX || e.touches?.[0]?.clientX || 0;
    const currentTime = Date.now();

    // Increased multiplier for smoother mobile drag (2.5x)
    const walk = (currentX - startX.current) * 2.5;
    const newPosition = scrollLeft.current + walk;

    // Store before normalization
    const beforeNormalize = newPosition;
    translateX.current = newPosition;

    normalizePosition(); // Prevent empty spaces

    // If position was normalized, update scrollLeft to prevent jump
    if (Math.abs(translateX.current - beforeNormalize) > 100) {
      const diff = translateX.current - beforeNormalize;
      scrollLeft.current += diff;
    }

    // Calculate velocity for momentum
    const timeDelta = currentTime - lastTime.current;
    if (timeDelta > 0) {
      velocity.current = (currentX - lastX.current) * 2.5 / timeDelta * 16; // Normalize to 60fps
    }

    lastX.current = currentX;
    lastTime.current = currentTime;

    if (containerRef.current) {
      // Use translate3d for GPU acceleration
      containerRef.current.style.transform = `translate3d(${translateX.current}px, 0, 0)`;
    }
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;

    isDragging.current = false;

    // Apply momentum if velocity is significant
    if (Math.abs(velocity.current) > 1) {
      momentumRef.current = requestAnimationFrame(applyMomentum);
    } else {
      setIsPaused(false);
    }
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      setIsPaused(true);
      translateX.current -= e.deltaX;
      // Use translate3d for GPU acceleration
      containerRef.current.style.transform = `translate3d(${translateX.current}px, 0, 0)`;

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
      if (momentumRef.current) {
        cancelAnimationFrame(momentumRef.current);
      }
    };
  }, [animate, calculateWidth]);

  return (
    <div className="bg-[#073742] py-20 overflow-hidden">
      <Layout>
        <div className="mb-8 sm:mb-12 relative z-10 max-w-4xl">
          <h3 className="text-white/70 text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 font-medium">
            What We Create
          </h3>
          <h2 className="text-left font-semibold text-white leading-tight tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Every Type of Creative{" "}
            <br className="hidden sm:block" />
            Work You'll Ever Need,{" "}
            <span className="text-[#2DC8E6] font-Rock_Salt font-normal relative inline-block transform rotate-[-2deg] ml-1 sm:ml-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl -top-1 sm:-top-2">
              And More
            </span>
          </h2>
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
          style={{
            backfaceVisibility: 'hidden',
            perspective: 1000,
            transform: 'translate3d(0, 0, 0)',
            WebkitTransform: 'translate3d(0, 0, 0)'
          }}
        >
          {duplicatedData.map((item, index) => {
            const isBig = index % 2 === 0;
            // Smaller cards for mobile: 240px mobile, 350px desktop
            const cardHeight = isBig ? 'h-[320px] sm:h-[420px]' : 'h-[220px] sm:h-[300px]';

            return (
              <Link
                key={index}
                href={item.url}
                draggable={false}
                className="relative flex-shrink-0 mx-3 sm:mx-4 group flex flex-col w-[240px] sm:w-[350px] select-none"
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 w-full ${cardHeight}`}>
                  <Image
                    src={item.image}
                    alt={`${item.firstTitle} ${item.secondTitle}`}
                    fill
                    sizes="(max-width: 640px) 240px, 350px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                    draggable={false}
                    loading={index < 4 ? "eager" : "lazy"}
                    priority={index < 4}
                    quality={85}
                    style={{ backfaceVisibility: 'hidden' }}
                  />
                </div>

                {/* Content */}
                <div className="mt-5 px-1">
                  <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight mb-3">
                    {item.firstTitle}{item.secondTitle ? ` ${item.secondTitle}` : ''}
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