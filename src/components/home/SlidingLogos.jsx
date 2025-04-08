"use client"
import React, { useEffect } from 'react';
import Layout from '../common/Layout';

<<<<<<< HEAD
// Single list of logo paths
const logoList = [
  "/images/logos/amazon.png",
  "/images/logos/bookings.png",
  "/images/logos/coinbase.png",
  "/images/logos/ishanyafoundation.png",
  "/images/logos/figma.png",
  "/images/logos/bharathaksha2.png",
  "/images/logos/google.png",
  "/images/logos/meta.png",
  "/images/logos/deepakfertilizer.png",
  "/images/logos/reddit.png",
  "/images/logos/salesforce.png",
  "/images/logos/shopify.png",
  "/images/logos/webflow.png",
];

const InfiniteLogoScroll = ({ direction }) => {
  return (
    <div className={`logo-slider ${direction === 'left' ? 'logo-slider-left' : 'logo-slider-right'}`}>
      <div className="logo-slide-track">
        {/* First set of logos */}
        {logoList.map((logo, index) => {
=======
const logos = [
    "/images/logos/bharathaksha2.png",
    "/images/logos/ishanyafoundation.png",
    "/images/logos/deepakfertilizer.png",
    "/images/logos/amazon.png",
    "/images/logos/bookings.png",
    "/images/logos/coinbase.png",
    "/images/logos/meta.png",
    "/images/logos/reddit.png",
    "/images/logos/salesforce.png",
    "/images/logos/shopify.png",
    "/images/logos/webflow.png",
    "/images/logos/figma.png",
    "/images/logos/google.png",
    "/images/logos/ishanyafoundation.png",
];

const slideVariants = {
  animate: (direction) => ({
    x: direction === 'left' ? [0, '-50%'] : ['-50%', 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 100,
        ease: 'linear',
      },
    },
  }),
};

const SliderLogo = ({ direction }) => {
  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        className="flex h-[80px] sm:h-[120px] gap-2 sm:gap-6 min-w-max"
        variants={slideVariants}
        animate="animate"
        custom={direction}
      >
        {/* First set of logos */}
        {logos.map((logo, ind) => {
          // Check specific logos to resize
>>>>>>> 4e26ad005d4a279a97c040536e4b6091dbb7006e
          const isIshanya = logo.includes('ishanyafoundation');
          const isBharathaksha = logo.includes('bharathaksha');
          const isDeepak = logo.includes('deepakfertilizer');
          
          return (
<<<<<<< HEAD
            <div className="logo-slide" key={`first-${index}`}>
              <img 
                src={logo} 
                alt={`Brand Logo ${index}`} 
                className={`w-auto ${isIshanya || isBharathaksha ? 'h-[120px]' : isDeepak ? 'h-[100px]' : 'h-[40px]'} object-contain`}
=======
            <div
              key={ind}
              className="flex h-full py-2 px-1 sm:py-6 sm:px-5 min-w-fit items-center justify-center"
            >
              <img 
                src={logo} 
                alt={`Logo ${ind}: ${logo}`} 
                className={`w-auto ${isIshanya || isBharathaksha ? 'h-[120px] sm:h-[200px]' : isDeepak ? 'h-[100px] sm:h-[160px]' : 'h-[30px] sm:h-[40px]'} object-contain`} 
                onError={(e) => {
                  console.error(`Failed to load logo: ${logo}`);
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.alt = `Error loading: ${logo}`;
                  e.target.src = "/images/logos/placeholder-logo.png"; // Try to show a placeholder
                }}
              />
            </div>
          );
        })}
        
        {/* Duplicate the entire logo set for seamless looping */}
        {logos.map((logo, ind) => {
          // Check specific logos to resize
          const isIshanya = logo.includes('ishanyafoundation');
          const isBharathaksha = logo.includes('bharathaksha');
          const isDeepak = logo.includes('deepakfertilizer');
          
          return (
            <div
              key={`dup-${ind}`}
              className="flex h-full py-2 px-1 sm:py-6 sm:px-5 min-w-fit items-center justify-center"
            >
              <img 
                src={logo} 
                alt={`Logo ${ind}: ${logo}`} 
                className={`w-auto ${isIshanya || isBharathaksha ? 'h-[120px] sm:h-[200px]' : isDeepak ? 'h-[100px] sm:h-[160px]' : 'h-[30px] sm:h-[40px]'} object-contain`} 
                onError={(e) => {
                  console.error(`Failed to load logo: ${logo}`);
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.alt = `Error loading: ${logo}`;
                  e.target.src = "/images/logos/placeholder-logo.png"; // Try to show a placeholder
                }}
>>>>>>> 4e26ad005d4a279a97c040536e4b6091dbb7006e
              />
            </div>
          );
        })}
<<<<<<< HEAD
        
        {/* Duplicate logos to create the seamless effect */}
        {logoList.map((logo, index) => {
          const isIshanya = logo.includes('ishanyafoundation');
          const isBharathaksha = logo.includes('bharathaksha');
          const isDeepak = logo.includes('deepakfertilizer');
          
          return (
            <div className="logo-slide" key={`second-${index}`}>
              <img 
                src={logo} 
                alt={`Brand Logo ${index}`} 
                className={`w-auto ${isIshanya || isBharathaksha ? 'h-[120px]' : isDeepak ? 'h-[100px]' : 'h-[40px]'} object-contain`}
              />
            </div>
          );
        })}
      </div>
=======
      </motion.div>
>>>>>>> 4e26ad005d4a279a97c040536e4b6091dbb7006e
    </div>
  );
};

const SlidingLogos = () => {
<<<<<<< HEAD
  useEffect(() => {
    // Add CSS for true infinite scroll
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-100% / 2)); }
      }
      
      @keyframes scroll-right {
        0% { transform: translateX(calc(-100% / 2)); }
        100% { transform: translateX(0); }
      }
      
      .logo-slider {
        height: 120px;
        margin: auto;
        overflow: hidden;
        position: relative;
        width: 100%;
      }
      
      .logo-slider::before,
      .logo-slider::after {
        content: "";
        height: 100%;
        position: absolute;
        width: 200px;
        z-index: 2;
      }
      
      .logo-slide-track {
        animation: scroll-left 100s linear infinite;
        display: flex;
        align-items: center;
        width: calc(200px * ${logoList.length * 2});
        gap: 20px;
      }
      
      .logo-slider-left .logo-slide-track {
        animation: scroll-left 100s linear infinite;
      }
      
      .logo-slider-right .logo-slide-track {
        animation: scroll-right 100s linear infinite;
      }
      
      .logo-slide {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        perspective: 100px;
        width: 180px;
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="relative bg-primary-500 pt-12 pb-16 sm:py-20">
      <Layout>
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 mb-12">
          Trusted by 500+ of the world's biggest brands
        </h2>
        <div className="relative">
          {/* Left fade overlay */}
          <div className="absolute top-0 left-0 w-[60px] sm:w-[200px] lg:w-[400px] h-full z-10 bg-gradient-to-r via-primary-500/80 from-primary-500 to-transparent"></div>
          
          {/* Right fade overlay */}
          <div className="absolute z-10 top-0 right-0 w-[60px] sm:w-[200px] lg:w-[400px] h-full bg-gradient-to-l from-primary-500 via-primary-500/80 to-transparent"></div>
          
          {/* First slider - moving right */}
          <InfiniteLogoScroll direction="right" />
          
          {/* Second slider - moving left */}
          <div className="mt-8">
            <InfiniteLogoScroll direction="left" />
=======
  // Debug which logos are actually loading
  React.useEffect(() => {
    logos.forEach((logo, index) => {
      const img = new window.Image();
      img.onload = () => console.log(`Logo ${index} loaded successfully: ${logo}`);
      img.onerror = () => console.error(`Logo ${index} failed to load: ${logo}`);
      img.src = logo;
    });
  }, []);

  return (
    <div className="relative bg-primary-500 pt-12 pb-16 sm:py-20 overflow-hidden">
      <Layout>
        <h2 className="text-center text-lg font-medium text-gray-700 mb-12">
          Trusted by 500+ of the world's biggest brands
        </h2>
        <div className='relative'>
          {/* overlap fade right and left side */}
          <div className="absolute top-0 left-0 w-[60px] sm:w-[200px] lg:w-[400px] h-full z-10 bg-gradient-to-r via-primary-500/80 from-primary-500 to-transparent"></div>
          <div className="absolute z-10 top-0 right-0 w-[60px] sm:w-[200px] lg:w-[400px] h-full bg-gradient-to-l from-primary-500 via-primary-500/80 to-transparent"></div>
          
          <SliderLogo direction="right" />
          <div className="mt-8">
            <SliderLogo direction="left" />
>>>>>>> 4e26ad005d4a279a97c040536e4b6091dbb7006e
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SlidingLogos;