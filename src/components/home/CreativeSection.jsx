"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Layout from "../common/Layout";
import Link from "next/link";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";
import { UiSubheading } from "../common/typography/UiSubheading";

// Track if section has been seen at least once (persists across re-renders)

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
  // {
  //   firstTitle: "AI Powered", secondTitle: "Creatives",
  //   tags: ["AI Design", "Automated Creatives", "Smart Graphics"],
  //   url: "/services/ai-powered-creatives",
  //   image: "https://ik.imagekit.io/aghmftdmm/creative/AI%20POWERED%20CREATIVES%201.webp?updatedAt=1765350360954"
  // },
  {
    firstTitle: "n8n", secondTitle: "Workflows",
    tags: ["Workflow Automation", "Process Optimization", "Integrations"],
    url: "/services/n8n-workflows",
    image: "https://ik.imagekit.io/aghmftdmm/creative/AI%20POWERED%20CREATIVES%201.webp?updatedAt=1765350360954" // Using placeholder image for now
  },

  {
    firstTitle: "Marketing", secondTitle: "Strategy",
    tags: ["Brand Awareness", "Customer Retention", "Market Research"],
    url: "/services/marketing-strategy",
    image: "https://ik.imagekit.io/aghmftdmm/creative/MARKETING%20STRATEGY%201.webp?updatedAt=1765350363109"
  },
  // {
  //   firstTitle: "Social Media", secondTitle: "Creatives",
  //   tags: ["Social Posts", "Ad Creatives", "Engaging Graphics"],
  //   url: "/services/social-media-creatives",
  //   image: "https://ik.imagekit.io/aghmftdmm/creative/SOCIAL%20MEDIA%20CREATIVES%201.webp?updatedAt=1765350362918"
  // },

  {
    firstTitle: "UI, UX & Web", secondTitle: "Development",
    tags: ["User Interface", "User Experience", "Web Development"],
    url: "/services/ui-ux-web-development",
    image: "https://ik.imagekit.io/aghmftdmm/creative/UI,%20UX%20&%20WEB%20DEVLOPMENT%202.webp?updatedAt=1765350363457"
  },
  // {
  //   firstTitle: "AI Blog", secondTitle: "Writing",
  //   tags: ["AI Content", "Automated Writing", "SEO Optimized"],
  //   url: "/services/ai-blog-writing",
  //   image: "https://ik.imagekit.io/aghmftdmm/creative/AI%20BLOG%20WRITING%202.webp?updatedAt=1765350361070"
  // },

  {
    firstTitle: "Email Design &", secondTitle: "Campaign",
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
  // {
  //   firstTitle: "Design", secondTitle: "System",
  //   tags: ["Component Library", "Style Guide", "Design Standards"],
  //   url: "/services/design-system",
  //   image: "https://ik.imagekit.io/aghmftdmm/creative/DESIGN%20SYSTEM%201.webp?updatedAt=1765350363997"
  // },

  {
    firstTitle: "AI SEO", secondTitle: "(GEO) (AEO) (AIO)",
    tags: ["AI Optimization", "Geo SEO", "Advanced SEO"],
    url: "/services/ai-seo-geo-aeo-aio",
    image: "https://ik.imagekit.io/aghmftdmm/creative/AI%20SEO%20(GEO)%20(AEO)%20(AIO)%201.webp?updatedAt=1765350361413"
  },
  // {
  //   firstTitle: "Email", secondTitle: "Design",
  //   tags: ["Responsive Emails", "Newsletter Templates", "HTML Emails"],
  //   // url: "/services/email-design", // Merged into Email Campaign
  //   url: "/services/email-campaign",
  //   image: "https://ik.imagekit.io/aghmftdmm/creative/EMAIL%20DESIGN%201.webp?updatedAt=1765350362829"
  // },

  // {
  //   firstTitle: "Illustration", secondTitle: "Design",
  //   tags: ["Custom Illustrations", "Digital Art", "Visual Storytelling"],
  //   url: "/services/illustration-design",
  //   image: "https://ik.imagekit.io/aghmftdmm/creative/ILLUSTRATION%20DESIGN%201.webp?updatedAt=1765350362443"
  // },

  // {
  //   firstTitle: "Product", secondTitle: "Design",
  //   tags: ["Product Development", "Industrial Design", "Prototyping"],
  //   url: "/services/product-design",
  //   image: "https://ik.imagekit.io/aghmftdmm/creative/PRODUCT%20DESIGN%201.webp?updatedAt=1765350363546"
  // },

  {
    firstTitle: "Sales & Marketing", secondTitle: "Automation",
    tags: ["Marketing Automation", "CRM Integration", "Workflow Design"],
    url: "/services/sales-marketing-automation",
    image: "https://ik.imagekit.io/aghmftdmm/creative/SALES%20&%20MARKETING%20AUTOMATION%201.webp?updatedAt=1765350362822"
  },
  {
    firstTitle: "Branding System &", secondTitle: "Merchandise",
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
  // {
  //   firstTitle: "Blog", secondTitle: "Writing",
  //   tags: ["SEO Blogs", "Long-Form Content", "Industry Research"],
  //   url: "/services/blog-writing",
  //   image: "https://ik.imagekit.io/aghmftdmm/creative/BLOG%20WRITING%20%201.webp?updatedAt=1765350361275"
  // },

  {
    firstTitle: "SEO & Blog", secondTitle: "Writing",
    tags: ["Keyword Research", "On-Page SEO", "Technical SEO"],
    url: "/services/seo-optimization",
    image: "https://ik.imagekit.io/aghmftdmm/creative/SEO%20OPTIMIZE%201.webp?updatedAt=1765350362673"
  },

  // {
  //   firstTitle: "Corporate &", secondTitle: "Internals",
  //   tags: ["Brand Guidelines", "Internal Communications", "Corporate Identity"],
  //   url: "/services/corporate-internals",
  //   image: "https://ik.imagekit.io/aghmftdmm/creative/COPERATE%20&%20INTERNELS%201.webp?updatedAt=1765350362598"
  // },

  {
    firstTitle: "Ebook, Report &", secondTitle: "Print Design",
    tags: ["Digital Publications", "Interactive Reports", "PDF Design"],
    url: "/services/ebook-digital-report",
    image: "https://ik.imagekit.io/aghmftdmm/creative/EBOOK%20AND%20DIGITAL%20REPORT%201.webp?updatedAt=1765350362500"
  },

  // {
  //   firstTitle: "Print", secondTitle: "Design",
  //   tags: ["Brochures", "Flyers", "Business Cards"],
  //   url: "/services/print-design",
  //   image: "https://ik.imagekit.io/aghmftdmm/creative/PRINT%20DESIGN%201.webp?updatedAt=1765350362624"
  // },

  // {
  //   firstTitle: "Packing &", secondTitle: "Merchandise Design",
  //   tags: ["Product Packaging", "Retail Design", "Brand Identity"],
  //   url: "/services/packing-merchandise-design",
  //   image: "https://ik.imagekit.io/aghmftdmm/creative/PACKING%20&%20MERCHANDISE%20DESIGN%201.webp?updatedAt=1765350363321"
  // }

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
  const rafId = useRef(null);
  const scrollSpeed = 0.3;
  const isTouchDevice = useRef(false);
  const hasInitialized = useRef(false); // Track if carousel has been seen once
  const isVisible = useRef(true); // Track visibility for animation loop

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

  const updateTransform = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translate3d(${translateX.current}px, 0, 0)`;
    }
  }, []);

  // Intersection Observer to pause animations when off-screen (using ref to avoid re-renders)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.current = entry.isIntersecting;

          if (entry.isIntersecting) {
            // Mark as initialized on first view
            if (!hasInitialized.current) {
              hasInitialized.current = true;
            }
            // Resume animation loop if not dragging
            if (!isDragging.current && !animationRef.current) {
              animationRef.current = requestAnimationFrame(animateContinuous);
            }
          } else {
            // Cancel animation when off-screen (for performance)
            if (animationRef.current) {
              cancelAnimationFrame(animationRef.current);
              animationRef.current = null;
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Continuous animation function using refs (no state dependency = no re-renders)
  const animateContinuous = useCallback(() => {
    if (isVisible.current && !isDragging.current && containerRef.current) {
      translateX.current -= scrollSpeed;
      normalizePosition();
      updateTransform();
    }

    // Only continue if visible
    if (isVisible.current && !isPaused) {
      animationRef.current = requestAnimationFrame(animateContinuous);
    } else {
      animationRef.current = null;
    }
  }, [isPaused, normalizePosition, updateTransform]);

  const animate = useCallback(() => {
    if (!isPaused && !isDragging.current && containerRef.current) {
      translateX.current -= scrollSpeed;
      normalizePosition();
      updateTransform();
    }

    if (!isPaused && isVisible.current) {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [isPaused, normalizePosition, updateTransform]);

  // Cubic easing out for more natural deceleration
  const easeOutCubic = (t) => {
    return 1 - Math.pow(1 - t, 3);
  };

  const applyMomentum = useCallback(() => {
    const minVelocity = 0.03;

    if (Math.abs(velocity.current) > minVelocity) {
      translateX.current += velocity.current;

      // Smoother friction for natural deceleration
      const friction = 0.95;
      velocity.current *= friction;

      normalizePosition();
      updateTransform();

      momentumRef.current = requestAnimationFrame(applyMomentum);
    } else {
      velocity.current = 0;
      setIsPaused(false);
      if (momentumRef.current) {
        cancelAnimationFrame(momentumRef.current);
        momentumRef.current = null;
      }
    }
  }, [normalizePosition, updateTransform]);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    setIsPaused(true);

    // Detect touch device
    isTouchDevice.current = e.type.includes('touch');

    // Cancel any ongoing momentum
    if (momentumRef.current) {
      cancelAnimationFrame(momentumRef.current);
      momentumRef.current = null;
    }
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    velocity.current = 0;

    startX.current = e.clientX || e.touches?.[0]?.clientX || 0;
    scrollLeft.current = translateX.current;
    lastX.current = startX.current;
    lastTime.current = performance.now();
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;

    const currentX = e.clientX || e.touches?.[0]?.clientX || 0;
    const currentTime = performance.now();

    // Always use RAF for smooth, consistent performance
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      // Very light multiplier for ultra-smooth dragging
      const dragMultiplier = 1.2;
      const walk = (currentX - startX.current) * dragMultiplier;
      const newPosition = scrollLeft.current + walk;

      // Store before normalization
      const beforeNormalize = newPosition;
      translateX.current = newPosition;

      normalizePosition();

      // If position was normalized, update scrollLeft to prevent jump
      if (Math.abs(translateX.current - beforeNormalize) > 100) {
        const diff = translateX.current - beforeNormalize;
        scrollLeft.current += diff;
      }

      // Optimized velocity calculation for smoother momentum
      const timeDelta = currentTime - lastTime.current;
      if (timeDelta > 0) {
        const instantVelocity = (currentX - lastX.current) * dragMultiplier / timeDelta * 16;
        // Smooth velocity with averaging for less jitter
        velocity.current = velocity.current * 0.3 + instantVelocity * 0.7;
      }

      lastX.current = currentX;
      lastTime.current = currentTime;

      updateTransform();
    });
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;

    isDragging.current = false;

    normalizePosition();

    // Cancel pending RAF
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }

    // Apply momentum if velocity is significant
    if (Math.abs(velocity.current) > 0.3) {
      momentumRef.current = requestAnimationFrame(applyMomentum);
    } else {
      setIsPaused(false);
    }
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      setIsPaused(true);
      translateX.current -= e.deltaX * 0.6; // Ultra-smooth wheel scrolling
      normalizePosition();
      updateTransform();

      clearTimeout(window.wheelTimeout);
      window.wheelTimeout = setTimeout(() => {
        setIsPaused(false);
      }, 150);
    }
  };

  useEffect(() => {
    calculateWidth();

    // Use ResizeObserver for better performance
    const resizeObserver = new ResizeObserver(() => {
      calculateWidth();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationRef.current);
      if (momentumRef.current) {
        cancelAnimationFrame(momentumRef.current);
      }
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [animate, calculateWidth]);

  // Add passive event listeners for better performance
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Handle touch events with passive listeners
    const options = { passive: true };

    container.addEventListener('touchstart', handlePointerDown, options);
    container.addEventListener('touchmove', handlePointerMove, options);
    container.addEventListener('touchend', handlePointerUp, options);

    return () => {
      container.removeEventListener('touchstart', handlePointerDown);
      container.removeEventListener('touchmove', handlePointerMove);
      container.removeEventListener('touchend', handlePointerUp);
    };
  }, []);

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
            transform: 'translate3d(0, 0, 0) translateZ(0)',
            WebkitTransform: 'translate3d(0, 0, 0) translateZ(0)',
            contain: 'layout style paint',
            touchAction: 'pan-y'
          }}
        >
          {duplicatedData.map((item, index) => {
            // Pattern: Square (1:1), Rectangle (1:1.22), repeat
            // Use modulo of original data length to maintain pattern across duplication
            const originalIndex = index % data.length;
            const isSquare = originalIndex % 2 === 0;

            return (
              <Link
                key={index}
                href={item.url}
                draggable={false}
                className="relative flex-shrink-0 mx-3 sm:mx-4 group flex flex-col w-[240px] sm:w-[350px] select-none"
              >
                {/* Image Container - Locked dimensions */}
                <div
                  className={`relative overflow-hidden rounded-2xl shadow-2xl w-full ${isSquare
                    ? '!h-[240px] !min-h-[240px] !max-h-[240px] sm:!h-[350px] sm:!min-h-[350px] sm:!max-h-[350px]'
                    : '!h-[293px] !min-h-[293px] !max-h-[293px] sm:!h-[427px] sm:!min-h-[427px] sm:!max-h-[427px]'
                    }`}
                  style={{
                    flexShrink: 0,
                    flexGrow: 0,
                  }}
                >
                  <Image
                    src={item.image}
                    alt={`${item.firstTitle} ${item.secondTitle}`}
                    fill
                    sizes="(max-width: 640px) 240px, 350px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                    draggable={false}
                    loading={index < 8 ? "eager" : "lazy"}
                    priority={index < 6}
                    quality={85}
                    style={{ backfaceVisibility: 'hidden' }}
                    unoptimized={item.image?.includes('ik.imagekit.io')}
                    onError={(e) => {
                      console.error('ImageKit image failed to load:', item.image);
                    }}
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