"use client"
import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    "/images/logos/amazon.png",
    "/images/logos/bookings.png",
    "/images/logos/coinbase.png",
    "/images/logos/epic.png",
    "/images/logos/figma.png",
    "/images/logos/google.png",
    "/images/logos/kelloggs.png",
    "/images/logos/meta.png",
    "/images/logos/novartis.png",
    "/images/logos/reddit.png",
    "/images/logos/salesforce.png",
    "/images/logos/shopify.png",
    "/images/logos/webflow.png",
    "/images/logos/zapier.png",

    "/images/logos/amazon.png",
    "/images/logos/bookings.png",
    "/images/logos/coinbase.png",
    "/images/logos/epic.png",
    "/images/logos/figma.png",
    "/images/logos/google.png",
    "/images/logos/kelloggs.png",
    "/images/logos/meta.png",
    "/images/logos/novartis.png",
    "/images/logos/reddit.png",
    "/images/logos/salesforce.png",
    "/images/logos/shopify.png",
    "/images/logos/webflow.png",
    "/images/logos/zapier.png",
    
  ];
  
  const slideVariants = {
    animate: (direction) => ({
      x: direction === 'left' ? [0, -500, 0] : [0, 500, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear',
        },
      },
    }),
  };
  
  const SliderLogo = ({ direction }) => {
    return (
      <motion.div
        className={`flex gap-8 ${direction === 'left' ? 'justify-start' : 'justify-end'}`}
        variants={slideVariants}
        animate="animate"
        custom={direction}
      >
        {logos.map((logo,ind) => (
          <div
            key={ind}
            className="flex min-w-fit items-center justify-center"
          >
            <img src={logo} alt={`${ind} logo`} className="w-auto h-5  " />
         
          </div>
        ))}
      </motion.div>
    );
  };

  
  
  const SlidingLogos = () => {
    return (
        <div className="relative bg-primary-500 py-16 overflow-hidden">
      <h2 className="text-center text-lg font-medium text-gray-700 mb-12">
        Trusted by 500+ of the world's biggest brands
      </h2>
      <div className='max-w-6xl mx-auto relative'>
        {/* overlap fade right and left side */}
        <div className="absolute top-0 left-0 w-[100px] h-full z-10 bg-gradient-to-r from-primary-500 to-transparent"></div>
        <div className="absolute z-10 top-0 right-0 w-[100px] h-full bg-gradient-to-l from-primary-500 to-transparent"></div>
         <div className="overflow-hidden">
        <SliderLogo direction="right" />
      </div>
      <div className="overflow-hidden mt-12">
        <SliderLogo direction="left" />
      </div>
      </div>
      </div>
    )
  }
  
  export default SlidingLogos