"use client";
import React, { useRef, useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

import Layout from "../common/Layout";
import Link from "next/link";
import Button from "../common/Button";
import AnimatedButton from "../common/AnimatedButton";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";

// Touch direction detection threshold
const TOUCH_DIRECTION_THRESHOLD = 5;

// Column 1 - First 8 creative images
const images1 = [
  { src: "https://ik.imagekit.io/aghmftdmm/creative/AD%20CREATIVE%202.webp?updatedAt=1765350361052" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/PLATFORM%20DEVLOPMENT%202.webp?updatedAt=1765350362851" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/AI%20POWERED%20CREATIVES%201.webp?updatedAt=1765350360954" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/MARKETING%20STRATEGY%201.webp?updatedAt=1765350363109" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/SOCIAL%20MEDIA%20CREATIVES%201.webp?updatedAt=1765350362918" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/UI,%20UX%20&%20WEB%20DEVLOPMENT%202.webp?updatedAt=1765350363457" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/AI%20BLOG%20WRITING%202.webp?updatedAt=1765350361070" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/EMAIL%20CAMPAIGN%201.webp?updatedAt=1765350362742" },
];

// Column 2 - Next 8 creative images
const images2 = [
  { src: "https://ik.imagekit.io/aghmftdmm/creative/PRESENTATION%20DESIGN%201.webp?updatedAt=1765350362921" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/DESIGN%20SYSTEM%201.webp?updatedAt=1765350363997" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/AI%20SEO%20(GEO)%20(AEO)%20(AIO)%201.webp?updatedAt=1765350361413" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/EMAIL%20DESIGN%201.webp?updatedAt=1765350362829" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/ILLUSTRATION%20DESIGN%201.webp?updatedAt=1765350362443" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/PRODUCT%20DESIGN%201.webp?updatedAt=1765350363546" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/SALES%20&%20MARKETING%20AUTOMATION%201.webp?updatedAt=1765350362822" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/BRANDING%20SERVICES%201.webp?updatedAt=1765350361962" },
];

// Column 3 - Last 7 creative images
const images3 = [
  { src: "https://ik.imagekit.io/aghmftdmm/creative/COPYWRITING%201.webp?updatedAt=1765350362521" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/BLOG%20WRITING%20%201.webp?updatedAt=1765350361275" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/SEO%20OPTIMIZE%201.webp?updatedAt=1765350362673" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/COPERATE%20&%20INTERNELS%201.webp?updatedAt=1765350362598" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/EBOOK%20AND%20DIGITAL%20REPORT%201.webp?updatedAt=1765350362500" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/PRINT%20DESIGN%201.webp?updatedAt=1765350362624" },
  { src: "https://ik.imagekit.io/aghmftdmm/creative/PACKING%20&%20MERCHANDISE%20DESIGN%201.webp?updatedAt=1765350363321" },
];

const HeroSection = () => {
  const scrollRef = useRef(null);
  const scrollRefRight = useRef(null);
  const heroSectionRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const scrollLeft = useRef(0);
  const animationFrameId = useRef(null);
  const animationFrameIdRight = useRef(null);
  const userScrollTimeout = useRef(null);
  const touchDirection = useRef(null); // 'horizontal' or 'vertical' or null

  // Infinite scroll for first row with bidirectional loop
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let lastScrollLeft = scrollContainer.scrollLeft;

    const scroll = () => {
      if (!isDragging && scrollContainer) {
        scrollContainer.scrollLeft += 0.5;
        lastScrollLeft = scrollContainer.scrollLeft;

        // Check if we've scrolled past 2/3 point (near the end)
        const maxScroll = scrollContainer.scrollWidth / 3;
        if (scrollContainer.scrollLeft >= maxScroll * 2) {
          scrollContainer.scrollLeft = maxScroll;
        }
        // Check if scrolled to beginning
        if (scrollContainer.scrollLeft <= 1) {
          scrollContainer.scrollLeft = maxScroll;
        }
      }
      animationFrameId.current = requestAnimationFrame(scroll);
    };

    // Handle manual scroll in both directions
    const handleScroll = () => {
      if (isDragging) {
        const currentScroll = scrollContainer.scrollLeft;
        const maxScroll = scrollContainer.scrollWidth / 3;

        // Scrolling forward (right) - near end
        if (currentScroll >= maxScroll * 2.5) {
          scrollContainer.scrollLeft = maxScroll + (currentScroll - maxScroll * 2.5);
        }
        // Scrolling backward (left) - near start
        else if (currentScroll <= maxScroll * 0.5) {
          scrollContainer.scrollLeft = maxScroll * 1.5 + currentScroll;
        }

        lastScrollLeft = currentScroll;
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    animationFrameId.current = requestAnimationFrame(scroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isDragging]);

  // Infinite scroll for second row (reverse) with bidirectional loop
  useEffect(() => {
    const scrollContainer = scrollRefRight.current;
    if (!scrollContainer) return;

    // Set initial position to middle third
    const maxScroll = scrollContainer.scrollWidth / 3;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = maxScroll * 1.5;
    }

    let lastScrollLeft = scrollContainer.scrollLeft;

    const scroll = () => {
      if (!isDragging && scrollContainer) {
        scrollContainer.scrollLeft -= 0.5;
        lastScrollLeft = scrollContainer.scrollLeft;

        // Check if scrolled to beginning
        if (scrollContainer.scrollLeft <= maxScroll * 0.5) {
          scrollContainer.scrollLeft = maxScroll * 1.5;
        }
        // Check if scrolled near end
        if (scrollContainer.scrollLeft >= maxScroll * 2.5) {
          scrollContainer.scrollLeft = maxScroll * 1.5;
        }
      }
      animationFrameIdRight.current = requestAnimationFrame(scroll);
    };

    // Handle manual scroll in both directions
    const handleScroll = () => {
      if (isDragging) {
        const currentScroll = scrollContainer.scrollLeft;

        // Scrolling forward (right) - near end
        if (currentScroll >= maxScroll * 2.5) {
          scrollContainer.scrollLeft = maxScroll + (currentScroll - maxScroll * 2.5);
        }
        // Scrolling backward (left) - near start
        else if (currentScroll <= maxScroll * 0.5) {
          scrollContainer.scrollLeft = maxScroll * 1.5 + currentScroll;
        }

        lastScrollLeft = currentScroll;
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    animationFrameIdRight.current = requestAnimationFrame(scroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
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
    <div ref={heroSectionRef} className="bg-[#073742] relative text-[#EBFAFE] overflow-x-hidden" style={{ minHeight: 'clamp(600px, 100vh, 1200px)' }}>
      {/* Overlap */}
      <div className="absolute -top-[4px] left-0 w-full h-[140px] bg-gradient-to-b z-20 blur-sm from-secondary-500 via-secondary-300 to-secondary-300 opacity-92"></div>
      <div className="absolute hidden lg:block bottom-[0px] left-0 w-full h-[110px] bg-gradient-to-t z-20 from-secondary-500 to-transparent"></div>

      <div className="relative h-full" style={{ minHeight: 'clamp(600px, 100vh, 1200px)' }}>
        <Layout>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center h-full" style={{ minHeight: 'clamp(600px, 100vh, 1200px)' }}>
            {/* Left Content - Vertically Centered */}
            <div className="flex flex-col justify-start lg:justify-center h-full hero-left-content">
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
                <p className="text-center sm:text-left mb-2 sm:mb-2 mt-0 hero-paragraph">
                  Get access to high-velocity creative team that works with your
                  brand. Ship campaigns  faster, more reliably, and at scale.
                </p>
              </div>
              {/* Call to Action */}
              <div className="flex w-full flex-col lg:flex-row items-center hero-cta-container mt-4">
                <AnimatedButton
                  href="/contact"
                  className="block text-center md:w-auto mx-auto md:mx-0 rounded-full font-medium text-secondary-500 bg-[#88D7F0] border border-[#88D7F0] hover:bg-secondary-500 hover:text-[#88D7F0] transition-colors hero-button"
                  mainTextSlide="-140%"
                  duplicateTextStart="40%"
                  duplicateTextEnd="-100%"
                >
                  GET STARTED
                </AnimatedButton>
              </div>

              {/* Mobile View - Cards below CTA */}
              <div
                className="lg:hidden w-full mt-3"
                style={{
                  width: '120vw',
                  marginLeft: 'calc(50% - 60vw)',
                  marginRight: 'calc(50% - 60vw)',
                  position: 'relative',
                  left: '60%',
                  transform: 'translateX(-50%)'
                }}
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
                      scrollSnapType: 'none'
                    }}
                  >
                    <div className="flex" style={{ width: 'max-content' }}>
                      {[...images1, ...images1, ...images1].map((img, index) => (
                        <div
                          className="relative flex-shrink-0 select-none overflow-hidden cursor-pointer rounded-xl group"
                          key={index}
                        >
                          <div
                            className="overflow-hidden relative rounded-xl"
                            style={{
                              marginLeft: 'clamp(6px, 1.5vw, 12px)',
                              marginRight: 'clamp(6px, 1.5vw, 12px)'
                            }}
                          >
                            <img
                              src={img.src}
                              draggable={false}
                              alt="Creative work"
                              className="object-cover rounded-xl shadow-lg"
                              style={{
                                width: 'clamp(150px, 35vw, 180px)',
                                height: 'clamp(185px, 43vw, 215px)',
                                pointerEvents: 'none'
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
                      scrollSnapType: 'none'
                    }}
                  >
                    <div className="flex" style={{ width: 'max-content' }}>
                      {[...images2, ...images2, ...images2]
                        .reverse()
                        .map((img, index) => (
                          <div
                            className="relative flex-shrink-0 select-none overflow-hidden cursor-pointer rounded-xl group"
                            key={index}
                          >
                            <div
                              className="overflow-hidden relative rounded-xl"
                              style={{
                                marginLeft: 'clamp(6px, 1.5vw, 12px)',
                                marginRight: 'clamp(6px, 1.5vw, 12px)'
                              }}
                            >
                              <img
                                src={img.src}
                                alt="Creative work"
                                draggable={false}
                                className="object-cover rounded-xl shadow-lg"
                                style={{
                                  width: 'clamp(150px, 35vw, 180px)',
                                  height: 'clamp(185px, 43vw, 215px)',
                                  pointerEvents: 'none'
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
        <div className="hidden lg:block absolute right-[-2%] top-0 w-[42%] lg:w-[45%] xl:w-[42%] 2xl:w-[40%] h-full pb-8 overflow-hidden" style={{ height: 'clamp(600px, 100vh, 1200px)' }}>
          {/* Desktop View - Vertical Scroll */}
          <div className="flex gap-3 h-full overflow-hidden marquee-wrapper" style={{ height: 'clamp(600px, 100vh, 1200px)' }}>
            <div
              className="w-[30%] marquee-column"
            >
              <div className="marquee-vertical marquee-vertical-content space-y-4">
                {[...images1, ...images1].map((img, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden cursor-pointer rounded-xl group"
                  >
                    <img
                      src={img.src}
                      alt="Creative work"
                      className="w-full h-[240px] object-cover rounded-xl transition-all duration-300 shadow-xl"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="w-[30%] marquee-column"
            >
              <div className="marquee-vertical-reverse marquee-vertical-content space-y-4">
                {[...images2, ...images2].map((img, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden cursor-pointer rounded-xl group"
                  >
                    <img
                      src={img.src}
                      alt="Creative work"
                      className={`w-full ${index % 2 === 0 ? 'h-[260px]' : 'h-[210px]'} object-cover rounded-xl transition-all duration-300 shadow-2xl`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="w-[30%] marquee-column"
            >
              <div className="marquee-vertical marquee-vertical-content space-y-4">
                {[...images3, ...images3].map((img, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden cursor-pointer rounded-xl group"
                  >
                    <img
                      src={img.src}
                      alt="Creative work"
                      className="w-full h-[230px] object-cover rounded-xl transition-all duration-300 shadow-2xl"
                    />
                  </div>
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

        /* Vertical Marquee Animation */
        @keyframes marqueeVertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes marqueeVerticalReverse {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .marquee-vertical {
          animation: marqueeVertical 80s linear infinite;
          transform-style: preserve-3d;
          transition: none;
        }

        .marquee-vertical-reverse {
          animation: marqueeVerticalReverse 80s linear infinite;
          transform-style: preserve-3d;
          transition: none;
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
        .marquee-vertical-content img {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
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
