"use client"
import React from 'react';
import Layout from '../common/Layout';
import Image from 'next/image';

// New logos from the logo directory
const logos = [
  "/images/home/logo/ishaniya foundashion logo 1.png",
  "/images/home/logo/gilmoreoak logo 2.png",
  "/images/home/logo/deepak fertilizers logo 3.png",
  "/images/home/logo/Tiger Terrain logo 4.png",
  "/images/home/logo/mesmerize india logo 5.png",
  "/images/home/logo/novino logo 6.png",
  "/images/home/logo/opus clip 7.png",
  "/images/home/logo/Nisha Roadways logo 8.png",
  "/images/home/logo/you com logo 9.png",
  "/images/home/logo/aomni logo 10.png",
  "/images/home/logo/bharathaksha foundashion logo 11.png",
];

const SlidingLogos = () => {
  return (
    <div className="relative bg-[#03151a] py-12 sm:py-16 overflow-hidden">
      <Layout>
        <div className="mb-8">
          <h2 className="text-left text-sm sm:text-base md:text-lg font-bold text-white/90">
            Trusted by the world's fastest growing startups and established brands.
          </h2>
        </div>

        <div className="relative">
          {/* Left fade overlay */}
          <div className="absolute top-0 left-0 w-[60px] sm:w-[100px] lg:w-[150px] h-full z-10 bg-gradient-to-r from-[#03151a] via-[#03151a]/80 to-transparent pointer-events-none"></div>

          {/* Right fade overlay */}
          <div className="absolute z-10 top-0 right-0 w-[60px] sm:w-[100px] lg:w-[150px] h-full bg-gradient-to-l from-[#03151a] via-[#03151a]/80 to-transparent pointer-events-none"></div>

          {/* Single slider row - Using CSS animation instead of Framer Motion */}
          <div className="relative overflow-hidden w-full">
            <div className="flex gap-6 sm:gap-10 md:gap-12 lg:gap-16 min-w-max animate-slide">
              {/* First set of logos */}
              {logos.map((logo, ind) => (
                <div
                  key={ind}
                  className="flex items-center justify-center flex-shrink-0"
                >
                  <Image
                    src={logo}
                    alt={`Brand logo ${ind + 1}`}
                    width={120}
                    height={40}
                    className="h-[30px] sm:h-[35px] md:h-[40px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    loading="lazy"
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 120px"
                  />
                </div>
              ))}

              {/* Duplicate logos for seamless looping */}
              {logos.map((logo, ind) => (
                <div
                  key={`dup-${ind}`}
                  className="flex items-center justify-center flex-shrink-0"
                >
                  <Image
                    src={logo}
                    alt={`Brand logo ${ind + 1}`}
                    width={120}
                    height={40}
                    className="h-[30px] sm:h-[35px] md:h-[40px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    loading="lazy"
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 120px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-slide {
          animation: slide 80s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default SlidingLogos;