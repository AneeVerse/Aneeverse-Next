"use client";
import React, { useRef, useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "../common/Layout";
import Link from "next/link";
import Button from "../common/Button";
import AnimatedButton from "../common/AnimatedButton";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";

const images1 = [
  {
    src: "/hero-logos/shopify.png",
    logo: "/hero-logos/shopify.png",
  },
  {
    src: "/hero-logos/reddit.png",
    logo: "/hero-logos/reddit.png",
  },
  {
    src: "/hero-logos/salesforce.png",
    logo: "/hero-logos/salesforce.png",
  },
  {
    src: "/hero-logos/pharmacy.png",
    logo: "/hero-logos/pharmacy.png",
  },
  {
    src: "/hero-logos/shopify.png",
    logo: "/hero-logos/shopify.png",
  },
  {
    src: "/hero-logos/reddit.png",
    logo: "/hero-logos/reddit.png",
  },
  {
    src: "/hero-logos/salesforce.png",
    logo: "/hero-logos/salesforce.png",
  },
  {
    src: "/hero-logos/pharmacy.png",
    logo: "/hero-logos/pharmacy.png",
  },
];

const images2 = [
  {
    src: "/hero-logos/opa.png",
    logo: "/hero-logos/opa.png",
  },
  {
    src: "/hero-logos/oyster.png",
    logo: "/hero-logos/oyster.png",
  },
  {
    src: "/hero-logos/pernod ricard.png",
    logo: "/hero-logos/pernod ricard.png",
  },
  {
    src: "/hero-logos/_zaphier.png",
    logo: "/hero-logos/_zaphier.png",
  },
  {
    src: "/hero-logos/opa.png",
    logo: "/hero-logos/opa.png",
  },
  {
    src: "/hero-logos/oyster.png",
    logo: "/hero-logos/oyster.png",
  },
  {
    src: "/hero-logos/pernod ricard.png",
    logo: "/hero-logos/pernod ricard.png",
  },
  {
    src: "/hero-logos/_zaphier.png",
    logo: "/hero-logos/_zaphier.png",
  },
];

const images3 = [
  {
    src: "/hero-logos/vimeo.png",
    logo: "/hero-logos/vimeo.png",
  },
  {
    src: "/hero-logos/gohenry.png",
    logo: "/hero-logos/gohenry.png",
  },
  {
    src: "/hero-logos/roland.png",
    logo: "/hero-logos/roland.png",
  },
  {
    src: "/hero-logos/kins.png",
    logo: "/hero-logos/kins.png",
  },
  {
    src: "/hero-logos/vimeo.png",
    logo: "/hero-logos/vimeo.png",
  },
  {
    src: "/hero-logos/gohenry.png",
    logo: "/hero-logos/gohenry.png",
  },
  {
    src: "/hero-logos/roland.png",
    logo: "/hero-logos/roland.png",
  },
  {
    src: "/hero-logos/kins.png",
    logo: "/hero-logos/kins.png",
  },
];

const HeroSection = () => {
  const scrollRef = useRef(null);
  const scrollRefRight = useRef(null);
  const heroSectionRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  // ✅ Start Dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.pageX || e.touches[0].pageX;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };
  // ✅ Scroll with Drag
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX.current) * 1.5; // Adjust speed
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const startXRight = useRef(0);
  const scrollLeftRight = useRef(0);

  // ✅ Start Dragging
  const handleMouseDownRight = (e) => {
    setIsDragging(true);
    startXRight.current = e.pageX || e.touches[0].pageX;
    scrollLeftRight.current = scrollRefRight.current.scrollLeftRight;
  };

  // ✅ Scroll Right with Drag
  const handleMouseMoveRight = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX.current) * 1.5; // Adjust speed
    scrollRefRight.current.scrollLeftRight = scrollLeftRight.current - walk;
  };

  // ✅ Stop Dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // ✅ Scroll-based parallax using GSAP
  const leftColumnRef = useRef(null);
  const middleColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const leftInnerRef = useRef(null);
  const middleInnerRef = useRef(null);
  const rightInnerRef = useRef(null);
  const scrollDirectionRef = useRef(1);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    let rafId;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY.current) {
        scrollDirectionRef.current = 1; // Scrolling down
      } else if (currentScrollY < lastScrollY.current) {
        scrollDirectionRef.current = -1; // Scrolling up
      }
      lastScrollY.current = currentScrollY;

      // Use requestAnimationFrame for smooth updates
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        const speed = 0.3;
        
        if (leftColumnRef.current && middleColumnRef.current && rightColumnRef.current) {
          // Apply scroll-based transform to outer containers
          if (scrollDirectionRef.current === 1) {
            // Scrolling down: left/right go DOWN (positive), middle goes UP (negative)
            gsap.set(leftColumnRef.current, {
              y: currentScrollY * speed,
              force3D: true,
              immediateRender: true
            });
            gsap.set(middleColumnRef.current, {
              y: -currentScrollY * speed, // Negative = goes UP when scrolling down
              force3D: true,
              immediateRender: true
            });
            gsap.set(rightColumnRef.current, {
              y: currentScrollY * speed,
              force3D: true,
              immediateRender: true
            });
          } else {
            // Scrolling up: left/right go UP (negative), middle goes DOWN (positive)
            gsap.set(leftColumnRef.current, {
              y: -currentScrollY * speed,
              force3D: true,
              immediateRender: true
            });
            gsap.set(middleColumnRef.current, {
              y: currentScrollY * speed, // Positive = goes DOWN when scrolling up
              force3D: true,
              immediateRender: true
            });
            gsap.set(rightColumnRef.current, {
              y: -currentScrollY * speed,
              force3D: true,
              immediateRender: true
            });
          }

          // Change animation direction based on scroll direction
          if (leftInnerRef.current && middleInnerRef.current && rightInnerRef.current) {
            if (scrollDirectionRef.current === 1) {
              // Scrolling down: normal direction
              leftInnerRef.current.className = 'marquee-vertical marquee-vertical-content space-y-4';
              middleInnerRef.current.className = 'marquee-vertical-reverse marquee-vertical-content space-y-4';
              rightInnerRef.current.className = 'marquee-vertical marquee-vertical-content space-y-4';
            } else {
              // Scrolling up: reverse all directions
              leftInnerRef.current.className = 'marquee-vertical-reverse marquee-vertical-content space-y-4';
              middleInnerRef.current.className = 'marquee-vertical marquee-vertical-content space-y-4';
              rightInnerRef.current.className = 'marquee-vertical-reverse marquee-vertical-content space-y-4';
            }
          }
        }
      });
    };

    // Initial call
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  return (
    <div ref={heroSectionRef} className="bg-[#073742] relative text-[#EBFAFE] overflow-x-hidden" style={{ minHeight: 'clamp(600px, 100vh, 1200px)' }}>
      {/* Overlap */}
      <div className="absolute -top-[4px] left-0 w-full h-[140px] bg-gradient-to-b z-20 blur-sm from-secondary-500 via-secondary-300 to-secondary-300 opacity-92"></div>
      <div className="absolute hidden lg:block bottom-[0px] left-0 w-full h-[110px] bg-gradient-to-t z-20 from-secondary-500 to-transparent"></div>

      <div className="relative h-full" style={{ minHeight: 'clamp(600px, 100vh, 1200px)' }}>
        <Layout>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center h-full" style={{ minHeight: 'clamp(600px, 100vh, 1200px)' }}>
            {/* Left Content - Vertically Centered */}
            <div className="flex flex-col justify-center h-full hero-left-content">
              <div className="flex flex-col sm:flex-col">
                <Heading
                  level="h2"
                  color="gredient"
                  spacing="lg"
                  className="text-center sm:text-left font-semibold"
                >
                  DESIGN, OPTIMIZE, ADVERTISE{" "}
                  <AccentText size="xl" className={" block text-orange-500  "}>
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
            </div>
            
            {/* Mobile View - Cards in same viewport */}
            <div 
              className="lg:hidden absolute bottom-0 left-0 w-full flex flex-col justify-end z-10"
              style={{ 
                paddingBottom: 'clamp(12px, 3vw, 24px)',
                paddingLeft: 'clamp(12px, 4vw, 20px)',
                paddingRight: 'clamp(12px, 4vw, 20px)'
              }}
            >
              <div 
                className="overflow-hidden"
                style={{ gap: 'clamp(8px, 2vw, 16px)' }}
              >
                {/* First Row - Left Scroll */}
                <div
                  ref={scrollRef}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleMouseDown}
                  onTouchMove={handleMouseMove}
                  onTouchEnd={handleMouseUp}
                  className="overflow-x-auto scrollbar-hide mb-2"
                >
                  <div className="flex marquee-horizontal">
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
                            alt=""
                            className="object-cover group-hover:scale-105 transition-all duration-300 rounded-xl shadow-lg"
                            style={{
                              width: 'clamp(120px, 28vw, 180px)',
                              height: 'clamp(140px, 35vw, 200px)'
                            }}
                          />
                          <div className="absolute inset-0 flex items-start justify-center bg-black/10">
                            <img
                              src={img.src.replace('.png', '.svg')}
                              alt=""
                              className={`${img.src.includes('salesforce')
                                ? 'w-[25%] h-[25%] mt-1'
                                : img.src.includes('kins')
                                  ? 'w-[30%] h-[30%] -mt-3'
                                  : 'w-[40%] h-[40%] -mt-3'
                                } object-contain`}
                            />
                          </div>
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
                  onTouchStart={handleMouseDownRight}
                  onTouchMove={handleMouseMoveRight}
                  onTouchEnd={handleMouseUp}
                  className="overflow-x-auto scrollbar-hide"
                >
                  <div className="flex marquee-horizontal-reverse">
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
                              alt=""
                              draggable={false}
                              className="object-cover group-hover:scale-105 transition-all duration-300 rounded-xl shadow-lg"
                              style={{
                                width: 'clamp(120px, 28vw, 180px)',
                                height: 'clamp(140px, 35vw, 200px)'
                              }}
                            />
                            <div className="absolute inset-0 flex items-start justify-center bg-black/10">
                              <img
                                src={img.src.replace('.png', '.svg')}
                                alt=""
                                className={`${img.src.includes('salesforce')
                                  ? 'w-[25%] h-[25%] mt-1'
                                  : img.src.includes('kins')
                                    ? 'w-[30%] h-[30%] -mt-3'
                                    : 'w-[40%] h-[40%] -mt-3'
                                  } object-contain`}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>

        {/* Right Image Section - Positioned absolutely to reach screen edge */}
        <div className="hidden lg:block absolute right-[1%] top-0 w-[42%] lg:w-[45%] xl:w-[42%] 2xl:w-[40%] h-full pb-8 overflow-hidden" style={{ height: 'clamp(600px, 100vh, 1200px)' }}>
          {/* Desktop View - Vertical Scroll */}
          <div className="flex gap-3 h-full overflow-hidden" style={{ height: 'clamp(600px, 100vh, 1200px)' }}>
            <div 
              ref={leftColumnRef}
              className="w-1/3"
              style={{ willChange: 'transform' }}
            >
              <div ref={leftInnerRef} className="marquee-vertical marquee-vertical-content space-y-4">
                {[...images1, ...images1].map((img, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden cursor-pointer rounded-xl group"
                  >
                    <img
                      src={img.src}
                      alt=""
                      className="w-full h-[280px] object-cover rounded-xl group-hover:scale-105 transition-all duration-300 shadow-xl"
                    />
                    <div className="absolute inset-0 flex items-start justify-center bg-black/10">
                      <img
                        src={img.src.replace('.png', '.svg')}
                        alt=""
                        className={`${img.src.includes('salesforce')
                          ? 'w-[25%] h-[25%] mt-1'
                          : img.src.includes('kins')
                            ? 'w-[30%] h-[30%] -mt-3'
                            : 'w-[40%] h-[40%] -mt-3'
                          } object-contain`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div 
              ref={middleColumnRef}
              className="w-1/3"
              style={{ willChange: 'transform' }}
            >
              <div ref={middleInnerRef} className="marquee-vertical-reverse marquee-vertical-content space-y-4">
                {[...images2, ...images2].map((img, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden cursor-pointer rounded-xl group"
                  >
                    <img
                      src={img.src}
                      alt=""
                      className={`w-full ${index % 2 === 0 ? 'h-[300px]' : 'h-[240px]'} object-cover rounded-xl group-hover:scale-105 transition-all duration-300 shadow-2xl`}
                    />
                    <div className="absolute inset-0 flex items-start justify-center bg-black/10">
                      <img
                        src={img.src.replace('.png', '.svg')}
                        alt=""
                        className={`${img.src.includes('salesforce')
                          ? 'w-[25%] h-[25%] mt-1'
                          : img.src.includes('kins')
                            ? 'w-[30%] h-[30%] -mt-3'
                            : 'w-[40%] h-[40%] -mt-3'
                          } object-contain`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div 
              ref={rightColumnRef}
              className="w-1/3"
              style={{ willChange: 'transform' }}
            >
              <div ref={rightInnerRef} className="marquee-vertical marquee-vertical-content space-y-4">
                {[...images3, ...images3].map((img, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden cursor-pointer rounded-xl group"
                  >
                    <img
                      src={img.src}
                      alt=""
                      className="w-full h-[260px] object-cover rounded-xl group-hover:scale-105 transition-all duration-300 shadow-2xl"
                    />
                    <div className="absolute inset-0 flex items-start justify-center bg-black/10">
                      <img
                        src={img.src.replace('.png', '.svg')}
                        alt=""
                        className={`${img.src.includes('salesforce')
                          ? 'w-[25%] h-[25%] mt-1'
                          : img.src.includes('kins')
                            ? 'w-[30%] h-[30%] -mt-3'
                            : 'w-[40%] h-[40%] -mt-3'
                          } object-contain`}
                      />
                    </div>
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
          padding-top: clamp(24px, 6vw, 48px);
          padding-bottom: clamp(200px, 50vw, 280px);
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
          font-size: clamp(12px, 3vw, 16px);
          line-height: clamp(18px, 4.5vw, 24px);
        }

        @media (min-width: 1024px) {
          .hero-paragraph {
            font-size: 16px;
            line-height: 24px;
          }
        }

        /* Hero CTA Container - Responsive Gap */
        .hero-cta-container {
          gap: clamp(12px, 3vw, 16px);
        }

        @media (min-width: 1024px) {
          .hero-cta-container {
            gap: 1rem;
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
          animation: marqueeVertical 50s linear infinite;
          transform-style: preserve-3d;
        }

        .marquee-vertical-reverse {
          animation: marqueeVerticalReverse 50s linear infinite;
          transform-style: preserve-3d;
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

        /* Pause animation on hover */
        .marquee-vertical:hover,
        .marquee-vertical-reverse:hover {
          animation-play-state: paused;
        }

        /* Hide Scrollbar */
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
      `}</style>
    </div>
  );
};

export default HeroSection;
