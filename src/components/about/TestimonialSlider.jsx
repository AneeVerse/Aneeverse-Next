"use client"
import React, { useEffect, useState, useRef } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../common/Layout";

// Custom VMC Logo component with mobile-specific sizing
const VMCLogo = ({ isMobile }) => {
  const style = {
    width: 'auto',
    height: 'auto',
    maxWidth: isMobile ? '100px' : '120px',
    maxHeight: isMobile ? '35px' : '60px',
    objectFit: 'contain',
    objectPosition: isMobile ? 'center' : 'left',
    display: 'block',
    margin: isMobile ? '0 auto' : '0'
  };

  // Container style for positioning
  const containerStyle = {
    display: 'flex',
    alignItems: isMobile ? 'center' : 'flex-start',
    justifyContent: isMobile ? 'center' : 'flex-start',
    width: '100%',
    marginTop: isMobile ? '40px' : '40px',
    marginBottom: isMobile ? '16px' : '4px'
  };

  return (
    <div style={containerStyle}>
      <img 
        src={`/images/testimonals/vmc-logo.webp?v=${Date.now()}`}
        alt="VMC Logo"
        style={style}
      />
    </div>
  );
};

// Custom JM Visa Logo component with mobile-specific sizing
const JMVisaLogo = ({ isMobile }) => {
  const style = {
    width: 'auto',
    height: 'auto',
    filter: 'brightness(0) invert(1)',
    objectPosition: isMobile ? 'center' : 'left',
    maxHeight: isMobile ? '120px' : '260px', 
    display: 'block',
    margin: isMobile ? '0 auto' : '0'
  };

  // Container style for positioning
  const containerStyle = {
    display: 'flex',
    alignItems: isMobile ? 'center' : 'flex-start',
    justifyContent: isMobile ? 'center' : 'flex-start',
    width: '100%',
    marginLeft: isMobile ? '0' : '-80px',
    marginTop: isMobile ? '20px' : '0',
    marginBottom: isMobile ? '-10px' : '0'
  };

  return (
    <div style={containerStyle}>
      <img 
        src={`/images/testimonals/jm-visa-logo.png?v=${Date.now()}`}
        alt="JM Visa Services Logo"
        style={style}
      />
    </div>
  );
};

export default function TestimonialSlider() {
  const testimonials = [
    {
      name: "Vikram Manghnani",
      role: "Founder, VMC",
      company: "VMC",
      feedback: <><span className="font-bold">AneeVerse brought fresh, fun ideas that made our creative work simple and engaging</span>. They felt like a team of friends who truly cared about our vision, making them key to our expansion.</>,
      imageUrl: "/images/testimonals/Vmc.png",
      companyLogo: "/images/testimonals/vmc-logo.webp"
    },
    {
      name: "Navin Agarwal",
      role: "Founder",
      company: "Novino Inks Pvt Ltd",
      feedback: <>The biggest win? The time we saved. AneeVerse built a stunning eCommerce site that truly reflects our brand. <span className="font-bold">Abhijeet understood my paintings on a personal level</span> he knew exactly what I wanted to express and brought it to life with unmatched customization and efficiency.</>,
      imageUrl: "/images/testimonals/navino.png"
    },
    {
      name: "Amrita Thakar",
      role: "Founder, JM Visa Services",
      company: "JM Visa Services",
      feedback: <>AneeVerse redesigned our website, and the leads started flowing. Their smart <span className="font-bold">blog and GMB strategies got us to #1 in Mumbai while cutting marketing costs</span>. Best move we made.</>,
      imageUrl: "/images/testimonals/jm-visa.png",
      companyLogo: "/images/testimonals/jm-visa-logo.png"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
    const clientY = e.clientY || e.touches?.[0]?.clientY || 0;
    setDragStart({ x: clientX, y: clientY });
    setDragOffset({ x: 0, y: 0 });
  };

  const handleDrag = (e) => {
    if (!isDragging) return;
    
    const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
    const clientY = e.clientY || e.touches?.[0]?.clientY || 0;
    
    if (isMobile) {
      const offsetX = (clientX - dragStart.x);
      // Constrain the drag offset to a maximum value
      const constrainedOffsetX = Math.max(Math.min(offsetX, 100), -100);
      setDragOffset({ x: constrainedOffsetX, y: 0 });
    } else {
      const offsetY = (clientY - dragStart.y);
      // Constrain the drag offset to a maximum value
      const constrainedOffsetY = Math.max(Math.min(offsetY, 100), -100);
      setDragOffset({ x: 0, y: constrainedOffsetY });
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const offset = isMobile ? dragOffset.x : dragOffset.y;
    
    // Change slide based on drag distance with reduced threshold
    if (Math.abs(offset) > 20) {
      if (offset > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    
    // Reset the offset immediately
    setDragOffset({ x: 0, y: 0 });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        handleNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isDragging]);

  return (
    <div className="relative py-12 sm:py-16 lg:py-20 bg-secondary-500 text-primary-500">
      <Layout>
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 xl:gap-16 px-4 sm:px-0">
          {/* Image Section */}
          <div 
            ref={containerRef}
            className="flex min-w-fit flex-row lg:flex-col justify-center items-center gap-3 sm:gap-6 select-none cursor-grab active:cursor-grabbing overflow-hidden lg:min-w-[300px]"
            onMouseDown={handleDragStart}
            onMouseMove={handleDrag}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDrag}
            onTouchEnd={handleDragEnd}
            style={{
              transition: isDragging ? 'none' : 'transform 0.3s ease-out',
              transform: isMobile ? `translateX(${dragOffset.x}px)` : `translateY(${dragOffset.y}px)`
            }}
          >
            <AnimatePresence mode="wait">
              {/* Previous Testimonial Image */}
              <motion.div
                key={`prev-${currentIndex}`}
                className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px] relative"
                initial={isMobile ? { x: -50, opacity: 0 } : { y: -50, opacity: 0 }}
                animate={{ 
                  x: isMobile ? (isDragging ? dragOffset.x * 0.5 : 0) : 0,
                  y: !isMobile ? (isDragging ? dragOffset.y * 0.5 : 0) : 0,
                  opacity: 0.4,
                  scale: 0.75
                }}
                exit={isMobile ? { x: 50, opacity: 0 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].imageUrl}
                  alt="Previous Testimonial"
                  className="w-full h-full rounded-full object-cover opacity-60"
                  draggable={false}
                />
              </motion.div>

              {/* Current Testimonial Image */}
              <motion.div
                key={`current-${currentIndex}`}
                className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px] relative z-10"
                initial={{ scale: 0.8 }}
                animate={{ 
                  x: isMobile ? (isDragging ? dragOffset.x * 0.8 : 0) : 0,
                  y: !isMobile ? (isDragging ? dragOffset.y * 0.8 : 0) : 0,
                  scale: 1
                }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={testimonials[currentIndex].imageUrl}
                  alt="Current Testimonial"
                  className="w-full h-full rounded-full object-cover border-4 border-white/20 shadow-2xl"
                  draggable={false}
                />
              </motion.div>

              {/* Next Testimonial Image */}
              <motion.div
                key={`next-${currentIndex}`}
                className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px] relative"
                initial={isMobile ? { x: 50, opacity: 0 } : { y: 50, opacity: 0 }}
                animate={{ 
                  x: isMobile ? (isDragging ? dragOffset.x * 0.5 : 0) : 0,
                  y: !isMobile ? (isDragging ? dragOffset.y * 0.5 : 0) : 0,
                  opacity: 0.4,
                  scale: 0.75
                }}
                exit={isMobile ? { x: -50, opacity: 0 } : { y: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={testimonials[(currentIndex + 1) % testimonials.length].imageUrl}
                  alt="Next Testimonial"
                  className="w-full h-full rounded-full object-cover opacity-60"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content Section - Expanded Horizontal Width */}
          <motion.div
            key={currentIndex}
            className={`flex flex-col flex-1 w-full px-3 sm:px-0 ${
              testimonials[currentIndex].company === "JM Visa Services" && !isMobile ? "-mt-8" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Company Logo/Name Section */}
            <div className={`flex flex-col items-start lg:items-start gap-2 w-full ${
              testimonials[currentIndex].company === "JM Visa Services" && !isMobile ? "mb-0 -mb-8" : "mb-4 lg:mb-6"
            }`}>
              {testimonials[currentIndex].companyLogo ? (
                <div className={`flex flex-col ${isMobile ? 'items-center' : 'items-start'} w-full`}>
                  {testimonials[currentIndex].company === "VMC" ? (
                    <VMCLogo isMobile={isMobile} />
                  ) : testimonials[currentIndex].company === "JM Visa Services" ? (
                    <JMVisaLogo isMobile={isMobile} />
                  ) : (
                    <img
                      src={testimonials[currentIndex].companyLogo}
                      alt={`${testimonials[currentIndex].company} Logo`}
                      className="w-full h-auto object-contain"
                      style={{
                        objectPosition: "center",
                        maxHeight: "60px"
                      }}
                    />
                  )}
                </div>
              ) : (
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold w-full ${
                  isMobile ? 'text-center mb-4' : 'text-center lg:text-left mb-2'
                }`}>
                  {testimonials[currentIndex].company}
                </h2>
              )}
            </div>
            
            {/* Main Testimonial Text - Full Width Usage */}
            <div className="w-full flex-1">
              <blockquote className={`relative w-full ${
                isMobile 
                  ? 'text-xl sm:text-xl text-center leading-8 px-2' 
                  : 'text-2xl sm:text-xl md:text-2xl lg:text-3xl text-center lg:text-left leading-relaxed'
              } font-light text-white/95 mb-6 lg:mb-8`}>
                <span className="relative z-10 block w-full">
                  "{testimonials[currentIndex].feedback}"
                </span>
              </blockquote>
            </div>
            
            {/* Attribution - Enhanced */}
            <div className={`w-full ${isMobile ? 'text-center' : 'text-center lg:text-left'} border-t border-white/20 pt-4 lg:pt-6 mt-auto`}>
              <div className="flex flex-col gap-1">
                <p className={`font-semibold text-white ${
                  isMobile ? 'text-base' : 'text-lg'
                }`}>
                  {testimonials[currentIndex].name}
                </p>
                <p className={`text-white/70 ${
                  isMobile ? 'text-sm' : 'text-base'
                }`}>
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fixed Navigation Buttons - Always Centered */}
        <div className={`absolute ${
          isMobile 
            ? 'bottom-20 left-1/2 transform -translate-x-1/2 flex flex-row gap-3' 
            : 'right-4 lg:right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 lg:gap-6'
        } items-center z-20`}>
          <button
            onClick={handlePrev}
            className="p-3 lg:p-4 border border-white/30 rounded-full shadow-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-white backdrop-blur-sm"
          >
            {isMobile ? (
              <FaArrowUp className="w-4 h-4 -rotate-90" />
            ) : (
              <FaArrowUp className="w-4 h-4 lg:w-5 lg:h-5" />
            )}
          </button>
          <button
            onClick={handleNext}
            className="p-3 lg:p-4 border border-white/30 rounded-full shadow-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-white backdrop-blur-sm"
          >
            {isMobile ? (
              <FaArrowUp className="w-4 h-4 rotate-90" />
            ) : (
              <FaArrowDown className="w-4 h-4 lg:w-5 lg:h-5" />
            )}
          </button>
        </div>

        {/* Progress Dots - Enhanced */}
        <div className="flex justify-center gap-3 mt-20">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white scale-125 shadow-lg" : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </Layout>
    </div>
  );
}
