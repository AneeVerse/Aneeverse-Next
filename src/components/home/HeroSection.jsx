"use client";
import React, { useRef, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import Layout from "../common/Layout";


const images = [
  { src: "/images/home/creative/creative1.png", name: "Creative Design" },
  { src: "/images/home/creative/creative2.png", name: "Social Media" },
  { src: "/images/home/creative/creative3.png", name: "Advertising" },
  { src: "/images/home/creative/creative4.png", name: "Optimization" },
  { src: "/images/home/creative/creative1.png", name: "Branding" },
  { src: "/images/home/creative/creative2.png", name: "Campaigns" },
];
const HeroSection = () => {
  return (
    <div className="bg-[#073742] relative text-[#EBFAFE]">
            {/* overlap */}
          <div className="absolute top-[-40px] left-0 w-full h-[110px] bg-gradient-to-b z-20 blur-md from-secondary-500 via-secondary-500 to-secondary-500"></div>
      <Layout>
        <div className="grid lg:grid-cols-2 gap-8  items-center">
          {/* Left Content - Same as before */}
              {/* Left Content */}
              <div className="pt-[120px] lg:pb-12">
          <h1 className="text-4xl font-bold leading-tight mb-4">
          DESIGN, OPTIMIZE, ADVERTISE <div className=" font-medium font-Rock_Salt  text-orange-500">we got you covered.</div>
          </h1>
          <p className="text-lg mb-6">
            Get access to high-velocity creative team that works with your brand. Ship campaigns —
            faster, more reliably, and at scale.
          </p>

          {/* Features */}
          <ul className="flex flex-col gap-4 mb-8">
            {["Dependable Services", "Proven Results", "100% Better results"].map(
              (feature, index) => (
                <li key={index} className="flex items-center gap-2 ">
                  <FaCheckCircle className="text-[#EBFAFE]" />
                  {feature}
                </li>
              )
            )}
          </ul>

          {/* Call to Action */}
          <div className="flex w-full flex-col lg:flex-row items-center gap-4">
            {/* Updated Button */}
            <button className="px-6 py-3 w-full  md:w-auto max-w-[400px] mx-auto md:mx-0 bg-[#88D7F0]  text-secondary-500 font-semibold text-md rounded-full">
              GET STARTED
            </button>
           
          </div>
        </div>

          {/* Right Image Section with New Animation */}
          <div className="flex-1 pb-8 lg:pb-0  w-full  relative overflow-hidden">
          
            {/* Desktop View - Vertical Scroll */}
            <div className="hidden lg:flex gap-4 h-[548px] overflow-hidden">
            {[0, 1, 2].map((colIndex) => (
                <div 
                  key={colIndex}
                  className={`w-1/3 marquee-vertical ${
                    colIndex % 2 === 0 ? 'marquee-vertical' : 'marquee-vertical-reverse'
                  }`}
                >
                  <div className="marquee-vertical-content space-y-5">
                    {[...images, ...images].map((img, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={img.src}
                          alt=""
                          className="w-full h-52 object-cover rounded-xl shadow-2xl "
                        />
                        <div className="absolute  inset-0 bg-black/20 px-3 py-2 rounded-xl ">
                        </div>
                          <span className="text-white top-3 left-0 absolute tracking-wide w-full text-center font-normal text-sm">
                            {img.name}
                          </span>
                      </div>
                    ))}
                    
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile View - Dual Line Scroll */}
            <div className="lg:hidden space-y-4 overflow-hidden">
              {/* First Row - Left Scroll */}
              <div className="flex marquee-horizontal">
                {[...images, ...images].map((img, index) => (
                  <div className="relative flex-shrink-0  group" key={index}>
                  <img
                    
                    src={img.src}
                    alt=""
                    className="w-[150px] h-48 object-cover rounded-lg shadow-lg mx-2"
                  />
                  <div className="absolute flex justify-center inset-0 bg-black/10 px-3 py-2 rounded-md ">
                  <span className="text-white w-full text-center font-medium text-sm">
                    {img.name}
                  </span>
                </div>
                </div>
                ))}
              </div>

              {/* Second Row - Right Scroll */}
              <div className="flex marquee-horizontal-reverse">
                {[...images, ...images].reverse().map((img, index) => (
                  <div className="relative flex-shrink-0 group" key={index}>
                  <img
                    src={img.src}
                    alt=""
                    className="w-[150px] h-48 object-cover rounded-lg shadow-lg mx-2"
                  />
                  <div className="absolute flex justify-center inset-0 bg-black/10 px-3 py-2 rounded-md ">
                  <span className="text-white w-full text-center font-medium text-sm">
                    {img.name}
                  </span>
                </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>

      <style jsx global>{`
        /* Vertical Marquee Animation */
        @keyframes marqueeVertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        @keyframes marqueeVerticalReverse {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }


        .marquee-vertical {
          animation: marqueeVertical 30s linear infinite;
        }

        .marquee-vertical-reverse {
          animation: marqueeVerticalReverse 30s linear infinite;
        }


        /* Horizontal Marquee Animation */
        @keyframes marqueeHorizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-vertical-content {
          display: flex;
          flex-direction: column;
        }

        /* Pause animation on hover */
        // .marquee-vertical:hover, 
        // .marquee-horizontal:hover {
        //   animation-play-state: paused;
        // }

       /* Horizontal Animations */
        @keyframes marqueeHorizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marqueeHorizontalReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .marquee-horizontal {
          animation: marqueeHorizontal 30s linear infinite;
        }

        .marquee-horizontal-reverse {
          animation: marqueeHorizontalReverse 30s linear infinite;
        }

        /* Hide Scrollbar */
        .md\:hidden {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .md\:hidden::-webkit-scrollbar {
          display: none;
        }

        /* Spacing Adjustments */
        .mx-2 {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }

        /* Custom Scrollbar for Mobile */
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #88D7F0;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;