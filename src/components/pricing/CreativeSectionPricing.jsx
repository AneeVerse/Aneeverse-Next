

"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Layout from "../common/Layout";
import Link from "next/link";
import { UiSubheading } from "../common/typography/UiSubheading";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";

const data = [
  { firstTitle: "Website", secondTitle: "design", url: "/services/website-design", image: "/images/home/creative/creative1.png" },
  { firstTitle: "Social Media", secondTitle: "creative", url: "#", image: "/images/home/creative/creative4.png" },
  { firstTitle: "Email", secondTitle: "design", url: "/services/email-design", image: "/images/home/creative/creative2.png" },
  { firstTitle: "Graphic", secondTitle: "design", url: "#", image: "/images/home/creative/creative3.png" },
  { firstTitle: "Video", secondTitle: "editing", url: "#", image: "/images/home/creative/creative4.png" },
];

const duplicatedData = [...data, ...data];

export default function CreativeSectionPricing() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const translateX = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const totalWidth = useRef(0);
  const scrollSpeed = 0.5; // Adjust speed as needed

  // ✅ Calculate Total Width of Scrollable Content
  const calculateWidth = useCallback(() => {
    if (containerRef.current) {
      const firstChild = containerRef.current.children[0];
      if (firstChild) {
        totalWidth.current = firstChild.offsetWidth * data.length;
      }
    }
  }, []);

  // ✅ Animation Loop
  const animate = useCallback(() => {
    if (!isPaused && !isDragging.current && containerRef.current) {
      translateX.current -= scrollSpeed;

      if (Math.abs(translateX.current) >= totalWidth.current) {
        translateX.current = 0; // Reset position to ensure smooth loop
      }

      containerRef.current.style.transform = `translateX(${translateX.current}px)`;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  // ✅ Handle Pointer Events (Mouse & Touch)
  const handlePointerDown = (e) => {
    isDragging.current = true;
    setIsPaused(true);
    startX.current = e.clientX || e.touches[0].clientX;
    scrollLeft.current = translateX.current;
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const x = e.clientX || e.touches[0].clientX;
    const walk = (x - startX.current) * 2; // Adjust sensitivity
    translateX.current = scrollLeft.current + walk;
    containerRef.current.style.transform = `translateX(${translateX.current}px)`;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    setIsPaused(false);
  };

  // ✅ Start Animation & Recalculate on Resize
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
    <div className="bg-secondary-500 text-primary-500 py-16">
      <Layout>
      <div className="flex pb-8 flex-col gap-4 md:flex-row  justify-between">
                    <div>
                       <UiSubheading className="text-primary-500 mb-2">
                                 Easy & Hassle-Free
                                </UiSubheading>
                                  <Heading
                                          level="h2"
                                          color="light"
                                          spacing="lg"
                                          className="text-left font-semibold"
                                        >
                                         One subscription for access to{' '}
                                          <AccentText 
                                            size="lg" 
                                            className={" text-primary-500  "}
                                          >
                                            all our creative services
                                          </AccentText>
                                        </Heading>
                       
                    </div>

                    <p className="text-md self-end max-w-md mt-6">
                    No matter your creative need, creating and submitting a project is
                    easy and effortless.
                    </p>
                </div>
      </Layout>

      {/* ✅ Scrolling Content */}
      <div
        className="mt-12 overflow-hidden relative"
        onMouseEnter={() => setIsPaused(true)}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
      >
        <div
          ref={containerRef}
          className="flex w-max will-change-transform cursor-grab active:cursor-grabbing"
        >
          {duplicatedData.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              draggable={false}
              className="relative min-w-[250px] h-[400px] sm:min-w-[300px] sm:h-[500px] lg:h-[600px] lg:min-w-[330px] flex-shrink-0 mx-2 overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={item.image}
                alt={`${item.firstTitle} ${item.secondTitle}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-start justify-center pt-4">
                <h3 className="text-white text-xl font-semibold text-center">
                  <span className="block">{item.firstTitle}</span>
                  <span className="font-Rock_Salt block">{item.secondTitle}</span>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}