"use client"
import React from 'react';
import Layout from '../common/Layout';
import { motion } from 'framer-motion';

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

const slideVariants = {
  animate: {
    x: ['-50%', 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 30,
        ease: 'linear',
      },
    },
  },
};

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

          {/* Single slider row */}
          <div className="relative overflow-hidden w-full">
            <motion.div
              className="flex gap-6 sm:gap-10 md:gap-12 lg:gap-16 min-w-max"
              variants={slideVariants}
              animate="animate"
            >
              {/* First set of logos */}
              {logos.map((logo, ind) => (
                <div
                  key={ind}
                  className="flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Brand logo ${ind + 1}`}
                    className="h-[30px] sm:h-[35px] md:h-[40px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                  />
                </div>
              ))}

              {/* Duplicate logos for seamless looping */}
              {logos.map((logo, ind) => (
                <div
                  key={`dup-${ind}`}
                  className="flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Brand logo ${ind + 1}`}
                    className="h-[30px] sm:h-[35px] md:h-[40px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SlidingLogos;