"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Layout from "../common/Layout";
import Link from "next/link";

const data = [
  {
    firstTitle: "Website",
    secondTitle: "design",
    url: "#",
    image: "/images/home/creative/creative1.png",
  },
  {
    firstTitle: "Social Media",
    secondTitle: "creative",
    url: "#",
    image: "/images/home/creative/creative4.png",
  },
  {
    firstTitle: "Email",
    secondTitle: "design",
    url: "#",
    image: "/images/home/creative/creative2.png",
  },
  {
    firstTitle: "Graphic",
    secondTitle: "design",
    url: "#",
    image: "/images/home/creative/creative3.png",
  },
  {
    firstTitle: "Video",
    secondTitle: "editing",
    url: "#",
    image: "/images/home/creative/creative4.png",
  },
];

const duplicatedData = [...data, ...data];

export default function CreativeSection() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const translateX = useRef(0);
  const totalWidth = useRef(0);
  const isTouching = useRef(false);

  // Scroll speed (adjust this value to control speed)
  const scrollSpeed = useRef(0.5); // Reduced speed for smoother scroll

  const calculateWidth = useCallback(() => {
    if (containerRef.current) {
      const firstChild = containerRef.current.children[0];
      if (firstChild) {
        totalWidth.current = firstChild.offsetWidth * data.length;
      }
    }
  }, []);

  const animate = useCallback(() => {
    if (!isHovered && !isTouching.current && containerRef.current) {
      translateX.current -= scrollSpeed.current;

      // Reset position when reaching halfway
      if (Math.abs(translateX.current) >= totalWidth.current) {
        translateX.current = 0;
      }

      containerRef.current.style.transform = `translateX(${translateX.current}px)`;
    }
    animationRef.current = requestAnimationFrame(animate);
  }, [isHovered]);

  useEffect(() => {
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("resize", calculateWidth);
      cancelAnimationFrame(animationRef.current);
    };
  }, [animate, calculateWidth]);

  const handleTouchStart = () => {
    isTouching.current = true;
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    isTouching.current = false;
    setIsHovered(false);
  };

  return (
    <div className="bg-primary-500 py-16">
      <Layout>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
            Easy & Hassle-Free
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            {"EVERY TYPE OF CREATIVE WORK YOU'LL EVER NEED, "}
            <span className="text-blue-600 font-Rock_Salt">and more</span>
          </h2>
        </div>
      </Layout>

      <div 
        className="mt-12 overflow-hidden relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={containerRef}
          className="flex w-max will-change-transform"
          style={{ transition: "transform 0.5s linear" }} // Increased transition duration
        >
          {duplicatedData.map((item, index) => (
            <Link
              key={index}
              href={item.url}
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