"use client";
import React, { useEffect, useRef, useState } from "react";

const data = [
  { title: "Website Design", image: "/images/home/creative/creative1.png" },
  { title: "Social Media Creative", image: "/images/home/creative/creative4.png" },
  { title: "Email Design", image: "/images/home/creative/creative2.png" },
  { title: "Graphic Design", image: "/images/home/creative/creative3.png" },
  { title: "Video Editing", image: "/images/home/creative/creative4.png" },
];

export default function CreativeSection() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    let scrollInterval;

    if (!isHovered) {
      scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += 1; // Scroll 1px every interval
        }
      }, 10); // Adjust the interval for smoother or faster scrolling
    }

    return () => clearInterval(scrollInterval); // Clean up on component unmount or hover state change
  }, [isHovered]);

  return (
    <div className="bg-primary-500 py-16 px-6">
        <div className="max-w-7xl mx-auto">
      <div className="max-w-3xl  ">
        <p className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
          Easy & Hassle-Free
        </p>
        <h2 className="text-4xl font-bold text-gray-800 mt-2">
          {"Every type of creative work you'll ever need,".toUpperCase()}{" "}
          <span className="text-blue-600 font-Rock_Salt">{"and more".toUpperCase()}</span>
        </h2>
      </div></div>

      <div
        className="mt-12 flex overflow-x-auto scrollbar-hide space-x-4"
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ scrollBehavior: "smooth" }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="relative min-w-[300px] cursor-pointer h-[500px] group flex-shrink-0 overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-start justify-center">
              <h3 className="text-white text-xl font-semibold mt-4 font-Rock_Salt">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
