"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Layout from "../common/Layout";
import Link from "next/link";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";
import { UiSubheading } from "../common/typography/UiSubheading";
import AnimatedButton from "../common/AnimatedButton";

// Track if section has been seen at least once (persists across re-renders)

const data = [
  {
    firstTitle: "E-Commerce", secondTitle: "Marketplace Management",
    tags: ["Amazon", "eBay", "Zepto", "Etsy"],
    url: "/services/amazon-marketplace-management",
    image: "/images/services/website/website-design.png"
  },
  {
    firstTitle: "Platform & Website", secondTitle: "Development",
    tags: ["Web Platforms", "Custom SaaS", "Web Apps"],
    url: "/services/platform-development",
    image: "/images/services/website/landing-page.png"
  },
  {
    firstTitle: "AI SEO", secondTitle: "(GEO) (AEO) (AIO)",
    tags: ["AI SEO", "Geo-Targeting", "Search Visibility"],
    url: "/services/ai-seo-geo-aeo-aio",
    image: "/images/services/website/seo-optimization.png"
  },
  {
    firstTitle: "Marketing &", secondTitle: "Ads Management",
    tags: ["Google Ads", "Meta Ads", "ROI Campaigns"],
    url: "/services/marketing-strategy",
    image: "/images/services/website/local-seo.png"
  },
  {
    firstTitle: "Social, Printable &", secondTitle: "Creative Designs",
    tags: ["Ad Creative", "Branding", "Social Graphics"],
    url: "/services/ad-creative",
    image: "/images/services/creative/social-media-creative.png"
  },
  {
    firstTitle: "Blogs & SEO", secondTitle: "Services",
    tags: ["SEO Articles", "Authority Writing", "Content Strategy"],
    url: "/services/blog-writing",
    image: "/images/services/creative/presentation-design.png"
  },
  {
    firstTitle: "n8n & AI", secondTitle: "Automation Workflows",
    tags: ["Automations", "AI Agents", "n8n Workflows"],
    url: "/services/n8n-workflows",
    image: "/images/services/creative/borchore.png"
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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 sm:mb-20 relative z-10">
          <div className="max-w-4xl">
            <h3 className="text-white text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 sm:mb-6 font-bold">
              What We Create
            </h3>
            <h2 className="text-left font-bw-gradual font-bold text-white leading-[1.05] tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase">
              Everything You Need,<br />
              In One <span className="font-Rock_Salt text-[#2DC8E6] text-[0.6em] sm:text-[0.65em] normal-case relative -top-3 sm:-top-5 inline-block transform -rotate-3 ml-1 sm:ml-2">Creative</span><br />
              Platform
            </h2>
          </div>
          <div className="flex-shrink-0">
            <AnimatedButton
              href="/pricing"
              className="px-10 py-4 rounded-full font-bold text-base shadow-[0_0_20px_rgba(136,215,240,0.1)]"
              style={{
                backgroundColor: "#88D7F0",
                color: "#073742"
              }}
              mainTextSlide="-140%"
              duplicateTextStart="100%"
              duplicateTextEnd="-100%"
            >
              GET STARTED
            </AnimatedButton>
          </div>
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
