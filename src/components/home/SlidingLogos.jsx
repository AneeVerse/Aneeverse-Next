"use client"
import React, { useEffect } from 'react';
import Layout from '../common/Layout';

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
          const isIshanya = logo.includes('ishanyafoundation');
          const isBharathaksha = logo.includes('bharathaksha');
          const isDeepak = logo.includes('deepakfertilizer');
          
          return (
            <div className="logo-slide" key={`first-${index}`}>
              <img 
                src={logo} 
                alt={`Brand Logo ${index}`} 
                className={`w-auto ${isIshanya || isBharathaksha ? 'h-[120px]' : isDeepak ? 'h-[100px]' : 'h-[40px]'} object-contain`}
              />
            </div>
          );
        })}
        
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
    </div>
  );
};

const SlidingLogos = () => {
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
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SlidingLogos;