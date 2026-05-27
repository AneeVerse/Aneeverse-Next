"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

import Layout from "../common/Layout";
import Link from "next/link";
import Button from "../common/Button";
import AnimatedButton from "../common/AnimatedButton";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";

// Touch direction detection threshold
const TOUCH_DIRECTION_THRESHOLD = 5;

// Column 1 - 7 core service images (scrolls up)
const column1Images = [
  { src: "https://ik.imagekit.io/aghmftdmm/creative/AD%20CREATIVE%202.webp?updatedAt=1765350361052", url: "/services/ad-creative", label: "Social & Ads Creative" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/PLATFORM%20DEVLOPMENT%202.webp?updatedAt=1765350362851", url: "/services/platform-development", label: "Platform & Website Dev" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/AI%20POWERED%20CREATIVES%201.webp?updatedAt=1765350360954", url: "/services/n8n-workflows", label: "n8n & AI Automation" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/MARKETING%20STRATEGY%201.webp?updatedAt=1765350363109", url: "/services/marketing-strategy", label: "Marketing & Ads" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/SEO%20OPTIMIZE%201.webp?updatedAt=1765350362673", url: "/services/ai-seo-geo-aeo-aio", label: "AI SEO (GEO) (AEO)" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/EMAIL%20CAMPAIGN%201.webp?updatedAt=1765350362742", url: "/services/amazon-marketplace-management", label: "E-Commerce Marketplace" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/BLOG%20WRITING%20%201.webp?updatedAt=1765350361275", url: "/services/blog-writing", label: "Blogs & SEO" },
];

// Column 2 - 7 core service images with alternate visuals (scrolls down)
const column2Images = [
  { src: "https://ik.imagekit.io/aghmftdmm/creative/AI%20SEO%20(GEO)%20(AEO)%20(AIO)%201.webp?updatedAt=1765350361413", url: "/services/ai-seo-geo-aeo-aio", label: "AI SEO (GEO) (AEO)" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/UI,%20UX%20&%20WEB%20DEVLOPMENT%202.webp?updatedAt=1765350363457", url: "/services/platform-development", label: "Platform & Website Dev" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/SALES%20&%20MARKETING%20AUTOMATION%201.webp?updatedAt=1765350362822", url: "/services/n8n-workflows", label: "n8n & AI Automation" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/COPYWRITING%201.webp?updatedAt=1765350362521", url: "/services/blog-writing", label: "Blogs & SEO" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/EMAIL%20DESIGN%201.webp?updatedAt=1765350362829", url: "/services/amazon-marketplace-management", label: "E-Commerce Marketplace" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/SOCIAL%20MEDIA%20CREATIVES%201.webp?updatedAt=1765350362918", url: "/services/ad-creative", label: "Social & Ads Creative" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/BRANDING%20SERVICES%201.webp?updatedAt=1765350361962", url: "/services/marketing-strategy", label: "Marketing & Ads" },
];

const HeroSection = () => {
  const scrollRef = useRef(null);
  const scrollRefRight = useRef(null);
  const heroSectionRef = useRef(null);
  const marqueeWrapperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const scrollLeft = useRef(0);
  const animationFrameId = useRef(null);
  const animationFrameIdRight = useRef(null);
  const userScrollTimeout = useRef(null);
  const touchDirection = useRef(null); // 'horizontal' or 'vertical' or null
  const isVisibleRef = useRef(true); // Track visibility without causing re-renders
  const hasInitializedRef = useRef(false); // Track if initially loaded

  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col1Y = useRef(0);
  const col2Y = useRef(0);
  const col1Hovered = useRef(false);
  const col2Hovered = useRef(false);
  const col1Scrolling = useRef(false);
  const col2Scrolling = useRef(false);
  const col1ScrollTimeout = useRef(null);
  const col2ScrollTimeout = useRef(null);

  const isInteracting1 = useRef(false);
  const isInteracting2 = useRef(false);
  const timeout1 = useRef(null);
  const timeout2 = useRef(null);
  const scrollPos1 = useRef(0);
  const scrollPos2 = useRef(0);

  // Desktop vertical marquee JS animation and non-passive wheel events
  useEffect(() => {
    let animId;

    const tick = () => {
      if (!isVisibleRef.current) {
        animId = requestAnimationFrame(tick);
        return;
      }

      // Column 1 animation (Upwards)
      if (col1Ref.current) {
        const H = col1Ref.current.scrollHeight / 2;
        if (H > 0) {
          if (!col1Scrolling.current) {
            const speed = col1Hovered.current ? 0.15 : 0.6;
            col1Y.current -= speed;
          }
          // Wrap
          if (col1Y.current < -H) col1Y.current += H;
          if (col1Y.current > 0) col1Y.current -= H;

          col1Ref.current.style.transform = `translate3d(0, ${col1Y.current}px, 0)`;
        }
      }

      // Column 2 animation (Downwards)
      if (col2Ref.current) {
        const H = col2Ref.current.scrollHeight / 2;
        if (H > 0) {
          // Initialize Column 2 to start at -H so it flows naturally downwards
          if (col2Y.current === 0) {
            col2Y.current = -H;
          }

          if (!col2Scrolling.current) {
            const speed = col2Hovered.current ? 0.15 : 0.6;
            col2Y.current += speed;
          }
          // Wrap
          if (col2Y.current < -H) col2Y.current += H;
          if (col2Y.current > 0) col2Y.current -= H;

          col2Ref.current.style.transform = `translate3d(0, ${col2Y.current}px, 0)`;
        }
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    // Non-passive wheel event listeners to prevent main page scroll
    const col1 = col1Ref.current;
    const col2 = col2Ref.current;

    const handleWheelCol1 = (e) => {
      e.preventDefault();
      const H = col1.scrollHeight / 2;
      if (H > 0) {
        col1Scrolling.current = true;
        clearTimeout(col1ScrollTimeout.current);
        col1ScrollTimeout.current = setTimeout(() => {
          col1Scrolling.current = false;
        }, 1000);

        col1Y.current -= e.deltaY * 0.8;
        // Wrap instantly
        if (col1Y.current < -H) col1Y.current += H;
        if (col1Y.current > 0) col1Y.current -= H;

        col1.style.transform = `translate3d(0, ${col1Y.current}px, 0)`;
      }
    };

    const handleWheelCol2 = (e) => {
      e.preventDefault();
      const H = col2.scrollHeight / 2;
      if (H > 0) {
        col2Scrolling.current = true;
        clearTimeout(col2ScrollTimeout.current);
        col2ScrollTimeout.current = setTimeout(() => {
          col2Scrolling.current = false;
        }, 1000);

        col2Y.current -= e.deltaY * 0.8;
        // Wrap instantly
        if (col2Y.current < -H) col2Y.current += H;
        if (col2Y.current > 0) col2Y.current -= H;

        col2.style.transform = `translate3d(0, ${col2Y.current}px, 0)`;
      }
    };

    if (col1) col1.addEventListener('wheel', handleWheelCol1, { passive: false });
    if (col2) col2.addEventListener('wheel', handleWheelCol2, { passive: false });

    return () => {
      cancelAnimationFrame(animId);
      if (col1) col1.removeEventListener('wheel', handleWheelCol1);
      if (col2) col2.removeEventListener('wheel', handleWheelCol2);
      clearTimeout(col1ScrollTimeout.current);
      clearTimeout(col2ScrollTimeout.current);
    };
  }, []);

  // Intersection Observer to pause/resume animations when off-screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;

          if (!entry.isIntersecting) {
            // Pause animations when off-screen (for performance)
            if (animationFrameId.current) {
              cancelAnimationFrame(animationFrameId.current);
              animationFrameId.current = null;
            }
            if (animationFrameIdRight.current) {
              cancelAnimationFrame(animationFrameIdRight.current);
              animationFrameIdRight.current = null;
            }
          } else {
            // Mark as initialized on first view
            hasInitializedRef.current = true;
          }
        });
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current);
      }
    };
  }, []);

  // Infinite scroll for first row with bidirectional loop
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      // Pause auto-scroll during user interaction
      if (!isDragging && !isInteracting1.current && scrollContainer && isVisibleRef.current) {
        // Synchronize starting point if it was reset or initialized
        if (scrollPos1.current === 0) {
          scrollPos1.current = scrollContainer.scrollLeft;
        }

        scrollPos1.current += 0.5;

        const maxScroll = scrollContainer.scrollWidth / 3;
        if (maxScroll > 0) {
          if (scrollPos1.current >= maxScroll * 2) {
            scrollPos1.current -= maxScroll;
          }
          if (scrollPos1.current <= 0) {
            scrollPos1.current += maxScroll;
          }
        }
        scrollContainer.scrollLeft = Math.round(scrollPos1.current);
      }

      if (isVisibleRef.current) {
        animationFrameId.current = requestAnimationFrame(scroll);
      } else {
        animationFrameId.current = null;
      }
    };

    const handleScroll = () => {
      const maxScroll = scrollContainer.scrollWidth / 3;
      if (maxScroll <= 0) return;

      const currentScroll = scrollContainer.scrollLeft;
      
      // Sync our float variable with the actual scrollLeft
      scrollPos1.current = currentScroll;

      if (currentScroll >= maxScroll * 2) {
        scrollContainer.scrollLeft = currentScroll - maxScroll;
        scrollPos1.current = scrollContainer.scrollLeft;
      } else if (currentScroll <= 0) {
        scrollContainer.scrollLeft = currentScroll + maxScroll;
        scrollPos1.current = scrollContainer.scrollLeft;
      }
    };

    const handleTouchStartLocal = () => {
      isInteracting1.current = true;
      clearTimeout(timeout1.current);
    };

    const handleTouchEndLocal = () => {
      clearTimeout(timeout1.current);
      timeout1.current = setTimeout(() => {
        isInteracting1.current = false;
      }, 1500);
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    scrollContainer.addEventListener('touchstart', handleTouchStartLocal, { passive: true });
    scrollContainer.addEventListener('touchend', handleTouchEndLocal, { passive: true });
    scrollContainer.addEventListener('touchcancel', handleTouchEndLocal, { passive: true });

    // Start the animation
    animationFrameId.current = requestAnimationFrame(scroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      scrollContainer.removeEventListener('touchstart', handleTouchStartLocal);
      scrollContainer.removeEventListener('touchend', handleTouchEndLocal);
      scrollContainer.removeEventListener('touchcancel', handleTouchEndLocal);
      clearTimeout(timeout1.current);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isDragging]);

  // Infinite scroll for second row (reverse) with bidirectional loop
  useEffect(() => {
    const scrollContainer = scrollRefRight.current;
    if (!scrollContainer) return;

    let initializedPosition = false;

    const scroll = () => {
      // Pause auto-scroll during user interaction
      if (!isDragging && !isInteracting2.current && scrollContainer && isVisibleRef.current) {
        const maxScrollLocal = scrollContainer.scrollWidth / 3;
        
        if (maxScrollLocal > 0) {
          // Initialize position on load
          if (!initializedPosition && scrollContainer.scrollLeft === 0) {
            scrollContainer.scrollLeft = maxScrollLocal * 1.5;
            scrollPos2.current = maxScrollLocal * 1.5;
            initializedPosition = true;
          }

          // Synchronize ref if needed
          if (scrollPos2.current === 0) {
            scrollPos2.current = scrollContainer.scrollLeft;
          }

          scrollPos2.current -= 0.5;

          if (scrollPos2.current <= maxScrollLocal * 0.5) {
            scrollPos2.current += maxScrollLocal;
          }
          if (scrollPos2.current >= maxScrollLocal * 2.5) {
            scrollPos2.current -= maxScrollLocal;
          }
          
          scrollContainer.scrollLeft = Math.round(scrollPos2.current);
        }
      }

      if (isVisibleRef.current) {
        animationFrameIdRight.current = requestAnimationFrame(scroll);
      } else {
        animationFrameIdRight.current = null;
      }
    };

    const handleScroll = () => {
      const maxScrollLocal = scrollContainer.scrollWidth / 3;
      if (maxScrollLocal <= 0) return;

      const currentScroll = scrollContainer.scrollLeft;
      
      // Sync float ref
      scrollPos2.current = currentScroll;

      if (currentScroll <= maxScrollLocal * 0.5) {
        scrollContainer.scrollLeft = currentScroll + maxScrollLocal;
        scrollPos2.current = scrollContainer.scrollLeft;
      } else if (currentScroll >= maxScrollLocal * 2.5) {
        scrollContainer.scrollLeft = currentScroll - maxScrollLocal;
        scrollPos2.current = scrollContainer.scrollLeft;
      }
    };

    const handleTouchStartLocal = () => {
      isInteracting2.current = true;
      clearTimeout(timeout2.current);
    };

    const handleTouchEndLocal = () => {
      clearTimeout(timeout2.current);
      timeout2.current = setTimeout(() => {
        isInteracting2.current = false;
      }, 1500);
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    scrollContainer.addEventListener('touchstart', handleTouchStartLocal, { passive: true });
    scrollContainer.addEventListener('touchend', handleTouchEndLocal, { passive: true });
    scrollContainer.addEventListener('touchcancel', handleTouchEndLocal, { passive: true });

    // Start the animation
    animationFrameIdRight.current = requestAnimationFrame(scroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      scrollContainer.removeEventListener('touchstart', handleTouchStartLocal);
      scrollContainer.removeEventListener('touchend', handleTouchEndLocal);
      scrollContainer.removeEventListener('touchcancel', handleTouchEndLocal);
      clearTimeout(timeout2.current);
      if (animationFrameIdRight.current) {
        cancelAnimationFrame(animationFrameIdRight.current);
      }
    };
  }, [isDragging]);

  // ✅ Start Dragging
  const handleMouseDown = (e) => {
    // Only handle mouse events, not touch
    if (e.type.includes('touch')) return;

    setIsDragging(true);
    startX.current = e.pageX;
    startY.current = e.pageY;
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
    touchDirection.current = null;

    if (userScrollTimeout.current) {
      clearTimeout(userScrollTimeout.current);
    }
  };

  // ✅ Handle Touch Start
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    startX.current = touch.pageX;
    startY.current = touch.pageY;
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
    touchDirection.current = null;
    setIsDragging(true);
  };

  // ✅ Scroll with Drag
  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;

    // Handle mouse events
    if (e.type === 'mousemove') {
      e.preventDefault();
      const walk = (e.pageX - startX.current) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
      return;
    }
  };

  // ✅ Handle Touch Move
  const handleTouchMove = (e) => {
    if (!isDragging || !scrollRef.current) return;

    const touch = e.touches[0];
    const x = touch.pageX;
    const y = touch.pageY;
    const deltaX = Math.abs(x - startX.current);
    const deltaY = Math.abs(y - startY.current);

    // Determine scroll direction on first significant movement
    if (!touchDirection.current) {
      if (deltaX > TOUCH_DIRECTION_THRESHOLD || deltaY > TOUCH_DIRECTION_THRESHOLD) {
        touchDirection.current = deltaX > deltaY ? 'horizontal' : 'vertical';
      } else {
        return; // Not enough movement yet
      }
    }

    // If vertical scrolling, stop dragging and allow default
    if (touchDirection.current === 'vertical') {
      setIsDragging(false);
      return;
    }

    // Only handle horizontal scrolling
    if (touchDirection.current === 'horizontal') {
      e.preventDefault();
      const walk = (x - startX.current) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const startXRight = useRef(0);
  const startYRight = useRef(0);
  const scrollLeftRight = useRef(0);
  const touchDirectionRight = useRef(null);

  // ✅ Start Dragging Right
  const handleMouseDownRight = (e) => {
    // Only handle mouse events, not touch
    if (e.type.includes('touch')) return;

    setIsDragging(true);
    startXRight.current = e.pageX;
    startYRight.current = e.pageY;
    scrollLeftRight.current = scrollRefRight.current?.scrollLeft || 0;
    touchDirectionRight.current = null;

    if (userScrollTimeout.current) {
      clearTimeout(userScrollTimeout.current);
    }
  };

  // ✅ Handle Touch Start Right
  const handleTouchStartRight = (e) => {
    const touch = e.touches[0];
    startXRight.current = touch.pageX;
    startYRight.current = touch.pageY;
    scrollLeftRight.current = scrollRefRight.current?.scrollLeft || 0;
    touchDirectionRight.current = null;
    setIsDragging(true);
  };

  // ✅ Scroll Right with Drag
  const handleMouseMoveRight = (e) => {
    if (!isDragging || !scrollRefRight.current) return;

    // Handle mouse events
    if (e.type === 'mousemove') {
      e.preventDefault();
      const walk = (e.pageX - startXRight.current) * 1.5;
      scrollRefRight.current.scrollLeft = scrollLeftRight.current - walk;
      return;
    }
  };

  // ✅ Handle Touch Move Right
  const handleTouchMoveRight = (e) => {
    if (!isDragging || !scrollRefRight.current) return;

    const touch = e.touches[0];
    const x = touch.pageX;
    const y = touch.pageY;
    const deltaX = Math.abs(x - startXRight.current);
    const deltaY = Math.abs(y - startYRight.current);

    // Determine scroll direction on first significant movement
    if (!touchDirectionRight.current) {
      if (deltaX > TOUCH_DIRECTION_THRESHOLD || deltaY > TOUCH_DIRECTION_THRESHOLD) {
        touchDirectionRight.current = deltaX > deltaY ? 'horizontal' : 'vertical';
      } else {
        return; // Not enough movement yet
      }
    }

    // If vertical scrolling, stop dragging and allow default
    if (touchDirectionRight.current === 'vertical') {
      setIsDragging(false);
      return;
    }

    // Only handle horizontal scrolling
    if (touchDirectionRight.current === 'horizontal') {
      e.preventDefault();
      const walk = (x - startXRight.current) * 1.5;
      scrollRefRight.current.scrollLeft = scrollLeftRight.current - walk;
    }
  };

  // ✅ Stop Dragging
  const handleMouseUp = () => {
    setIsDragging(false);
    touchDirection.current = null;
    touchDirectionRight.current = null;
  };




  return (
    <div ref={heroSectionRef} className="bg-[#073742] relative text-[#EBFAFE] overflow-hidden" style={{ minHeight: 'clamp(600px, 100vh, 1200px)' }}>
      {/* Overlap */}
      <div className="absolute -top-[20px] left-0 w-full h-[220px] bg-gradient-to-b z-20 from-[#021115] via-[#073742]/80 to-transparent"></div>
      <div className="absolute hidden lg:block bottom-[0px] left-0 w-full h-[110px] bg-gradient-to-t z-20 from-secondary-500 to-transparent"></div>

      <div className="relative h-full" style={{ minHeight: 'clamp(600px, 100vh, 1200px)' }}>
        <Layout>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center h-full" style={{ minHeight: 'clamp(600px, 100vh, 1200px)' }}>
            {/* Left Content - Vertically Centered */}
            <div className="flex flex-col justify-start lg:justify-center h-full hero-left-content relative z-30">
              <div className="flex flex-col sm:flex-col">
                <Heading
                  level="h1"
                  color="gredient"
                  spacing="lg"
                  className="text-center sm:text-left font-semibold hero-heading"
                >
                  <span className="hero-heading-main">DESIGN, OPTIMIZE, ADVERTISE{" "}</span>
                  <AccentText size="xl" className={" block text-orange-500 hero-accent-text"}>
                    we got you covered.
                  </AccentText>
                </Heading>
                <p className="text-center sm:text-left mb-2 sm:mb-2 -mt-2 sm:-mt-4 hero-paragraph">
                  Get access to high-velocity creative team that works with your
                  brand. Ship campaigns  faster, more reliably, and at scale.
                </p>
              </div>
              {/* Call to Action */}
              <div className="flex w-full flex-col lg:flex-row items-center hero-cta-container mt-4">
                <AnimatedButton
                  href="/contact"
                  className="block text-center md:w-auto mx-auto md:mx-0 rounded-full font-bold text-base shadow-[0_0_20px_rgba(136,215,240,0.1)] hero-button"
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

              {/* Mobile View - Cards below CTA */}
              <div
                className="lg:hidden w-screen mt-3 ml-[calc(-50vw+50%)] relative overflow-hidden"
              >
                <div
                  className="overflow-hidden mobile-scroll-wrapper"
                  style={{ gap: 'clamp(8px, 2vw, 16px)' }}
                >
                  {/* First Row - Left Scroll */}
                  <div
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    className="overflow-x-scroll scrollbar-hide mb-2 mobile-scroll-smooth"
                    style={{
                      WebkitOverflowScrolling: 'touch',
                      scrollSnapType: 'none',
                      scrollBehavior: 'auto'
                    }}
                  >
                    <div className="flex" style={{ width: 'max-content' }}>
                      {[...column1Images, ...column1Images, ...column1Images].map((img, index) => (
                        <div
                          className="relative flex-shrink-0 select-none overflow-hidden rounded-xl group"
                          key={index}
                        >
                          <div
                            className="overflow-hidden relative rounded-xl"
                            style={{
                              marginLeft: 'clamp(6px, 1.5vw, 12px)',
                              marginRight: 'clamp(6px, 1.5vw, 12px)'
                            }}
                          >
                            <Image
                              src={img.src}
                              alt="Creative work"
                              width={180}
                              height={215}
                              className="object-cover rounded-xl shadow-lg pointer-events-none"
                              style={{
                                width: 'clamp(150px, 35vw, 180px)',
                                height: 'clamp(185px, 43vw, 215px)',
                              }}
                              loading="lazy"
                              sizes="(max-width: 640px) 150px, 180px"
                              unoptimized={img.src?.includes('ik.imagekit.io')}
                              onError={(e) => {
                                console.error('Image failed to load:', img.src);
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Second Row - Right Scroll */}
                  <div
                    ref={scrollRefRight}
                    onMouseDown={handleMouseDownRight}
                    onMouseMove={handleMouseMoveRight}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    className="overflow-x-scroll scrollbar-hide mobile-scroll-smooth"
                    style={{
                      WebkitOverflowScrolling: 'touch',
                      scrollSnapType: 'none',
                      scrollBehavior: 'auto'
                    }}
                  >
                    <div className="flex" style={{ width: 'max-content' }}>
                      {[...column2Images, ...column2Images, ...column2Images]
                        .reverse()
                        .map((img, index) => (
                          <div
                            className="relative flex-shrink-0 select-none overflow-hidden rounded-xl group"
                            key={index}
                          >
                            <div
                              className="overflow-hidden relative rounded-xl"
                              style={{
                                marginLeft: 'clamp(6px, 1.5vw, 12px)',
                                marginRight: 'clamp(6px, 1.5vw, 12px)'
                              }}
                            >
                              <Image
                                src={img.src}
                                alt="Creative work"
                                width={180}
                                height={215}
                                className="object-cover rounded-xl shadow-lg pointer-events-none"
                                style={{
                                  width: 'clamp(150px, 35vw, 180px)',
                                  height: 'clamp(185px, 43vw, 215px)',
                                }}
                                loading="lazy"
                                sizes="(max-width: 640px) 150px, 180px"
                                unoptimized={img.src?.includes('ik.imagekit.io')}
                                onError={(e) => {
                                  console.error('Image failed to load:', img.src);
                                }}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </Layout>

        {/* Right Image Section - Positioned absolutely to reach screen edge */}
        <div
          className="hidden lg:block absolute right-2 top-0 w-[41%] lg:w-[43%] xl:w-[41%] 2xl:w-[38%] h-full pb-8 overflow-hidden"
          style={{ height: 'clamp(600px, 100vh, 1200px)', cursor: 'none' }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            if (!showCursor) setShowCursor(true);
          }}
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => setShowCursor(false)}
        >
          {/* Custom Cursor - "Expand +" circle */}
          {showCursor && (
            <div
              className="pointer-events-none absolute z-50 hero-expand-cursor"
              style={{
                left: cursorPos.x,
                top: cursorPos.y,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="w-[90px] h-[90px] rounded-full bg-[#2a2a2a]/80 backdrop-blur-md flex items-center justify-center shadow-2xl border border-white/10">
                <span className="text-white text-sm font-semibold tracking-wide flex items-center gap-1">
                  Explore
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </span>
              </div>
            </div>
          )}

          {/* Desktop View - Vertical Scroll with touchpad support */}
          <div
            ref={marqueeWrapperRef}
            className="flex gap-4 h-full overflow-hidden marquee-wrapper"
            style={{ height: 'clamp(600px, 100vh, 1200px)' }}
          >
            <div className="w-[48%] marquee-column">
              <div 
                ref={col1Ref}
                className="marquee-vertical-content flex flex-col gap-4"
                onMouseEnter={() => { col1Hovered.current = true; }}
                onMouseLeave={() => { col1Hovered.current = false; }}
              >
                {[...column1Images, ...column1Images].map((img, index) => (
                  <Link
                    key={index}
                    href={img.url || "/services"}
                    className="relative overflow-hidden rounded-xl flex-shrink-0 block"
                    style={{ cursor: 'none' }}
                  >
                    <img
                      src={img.src}
                      alt={img.label || "Creative work"}
                      className="w-full h-auto block rounded-xl transition-transform duration-500 shadow-xl"
                      loading="lazy"
                      onError={(e) => {
                        console.error('Image failed to load:', img.src);
                      }}
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-[48%] marquee-column">
              <div 
                ref={col2Ref}
                className="marquee-vertical-content flex flex-col gap-4"
                onMouseEnter={() => { col2Hovered.current = true; }}
                onMouseLeave={() => { col2Hovered.current = false; }}
              >
                {[...column2Images, ...column2Images].map((img, index) => (
                  <Link
                    key={index}
                    href={img.url || "/services"}
                    className="relative overflow-hidden rounded-xl flex-shrink-0 block"
                    style={{ cursor: 'none' }}
                  >
                    <img
                      src={img.src}
                      alt={img.label || "Creative work"}
                      className="w-full h-auto block rounded-xl transition-transform duration-500 shadow-2xl"
                      loading="lazy"
                      onError={(e) => {
                        console.error('Image failed to load:', img.src);
                      }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        /* Hero Left Content - Responsive Padding */
        .hero-left-content {
          padding-top: clamp(100px, 15vh, 120px);
          padding-bottom: clamp(20px, 4vw, 40px);
          padding-left: clamp(16px, 4vw, 24px);
          padding-right: clamp(16px, 4vw, 24px);
        }

        @media (min-width: 1024px) {
          .hero-left-content {
            padding-top: 4rem;
            padding-bottom: 4rem;
            padding-left: 0;
            padding-right: 0;
          }
        }

        @media (min-width: 1280px) {
          .hero-left-content {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
        }

        /* Hero Paragraph - Responsive Text */
        .hero-paragraph {
          font-size: clamp(14px, 3vw, 16px);
          line-height: clamp(18px, 4.5vw, 24px);
        }

        @media (min-width: 1024px) {
          .hero-paragraph {
            font-size: 16px;
            line-height: 24px;
            max-width: 540px;
          }
        }

        /* Hero CTA Container - Responsive Gap */
        .hero-cta-container {
          gap: clamp(12px, 3vw, 16px);
          margin-bottom: clamp(12px, 3vw, 16px);
        }

        @media (min-width: 1024px) {
          .hero-cta-container {
            gap: 1rem;
            margin-bottom: 0;
          }
        }

        /* Hero Button - Responsive Sizing */
        .hero-button {
          width: clamp(200px, 50vw, 400px);
          padding: clamp(10px, 2.5vw, 14px) clamp(20px, 5vw, 28px);
          font-size: clamp(12px, 3vw, 16px);
        }

        @media (min-width: 640px) {
          .hero-button {
            width: 400px;
          }
        }

        @media (min-width: 1024px) {
          .hero-button {
            width: auto;
            padding: 0.75rem 1.5rem;
            font-size: 16px;
          }
        }

        .marquee-vertical-content {
          transform-style: preserve-3d;
          transition: none;
        }

        /* Custom Expand cursor animation */
        .hero-expand-cursor {
          transition: opacity 0.2s ease;
          will-change: left, top;
        }

        /* Horizontal Marquee Animation */
        @keyframes marqueeHorizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeHorizontalReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee-horizontal {
          animation: marqueeHorizontal 30s linear infinite;
        }

        .marquee-horizontal-reverse {
          animation: marqueeHorizontalReverse 30s linear infinite;
        }

        /* Mobile smooth scrolling */
        .mobile-scroll-smooth {
          -webkit-overflow-scrolling: touch;
          scroll-padding: 0;
          touch-action: pan-x pan-y;
        }

        @media (min-width: 1024px) {
          .mobile-scroll-smooth {
            cursor: grab;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
          }

          .mobile-scroll-smooth:active {
            cursor: grabbing;
          }
        }

        .mobile-scroll-wrapper {
          touch-action: auto;
          -webkit-user-select: none;
          user-select: none;
        }


        
        /* Prevent image glitch on hover */
        .marquee-vertical-content img,
        .marquee-vertical-content [data-next-image] {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
          will-change: transform;
        }
        
        .marquee-column {
          will-change: transform;
        }

        /* Hide Scrollbar */
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .md\:hidden {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .md\:hidden::-webkit-scrollbar {
          display: none;
        }

        /* Custom Scrollbar for Mobile */
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #88d7f0;
          border-radius: 10px;
        }

        /* Hero Heading - Make single line on mobile */
        .hero-heading-main {
          display: block;
          font-size: clamp(28px, 4.5vw, 42px);
          white-space: normal;
          text-align: center;
          width: 100%;
        }

        @media (min-width: 640px) {
          .hero-heading-main {
            white-space: nowrap;
            display: inline;
            text-align: left;
            width: auto;
          }
        }

        /* Hero Accent Text - Center on mobile */
        .hero-accent-text {
          text-align: center;
          width: 100%;
        }

        @media (min-width: 640px) {
          .hero-accent-text {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
