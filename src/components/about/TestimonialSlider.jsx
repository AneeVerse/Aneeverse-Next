"use client"
import React, { useEffect, useState, useRef } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../common/Layout";

export default function TestimonialSlider() {
  const testimonials = [
    {
      name: "Amrita Thakar",
      role: "Founder",
      company: "JM Visa Services",
      feedback: "Working with AneeVerse got us to the #1 spot in Mumbai through smart blog strategies and GMB optimization. Our leads have grown, and we've even saved on marketing costs. Really glad we made this move!",
      stats: {
        productionTimeSaved: "57%",
        costSavings: "$10,775",
        videosDelivered: "20",
      },
      imageUrl: "/images/about/team1.avif",
      cardImage: "/images/about/team1.avif",
      caseStudy: "How Oyster Automates Global Social Media Campaigns",
      caseStudyUrl: "/case-studies/oyster",
    },
    {
      name: "Navin Agarwal",
      role: "Founder",
      company: "Novino Inks Pvt Ltd",
      feedback: "The biggest benefit has been the time saved. AneeVerse built a high-converting eCommerce website that truly reflects our brand. The level of customization and efficiency they brought in is unmatched.",
      stats: {
        productionTimeSaved: "40%",
        costSavings: "$8,000",
        videosDelivered: "15",
      },
      imageUrl: "/images/about/team2.avif",
      cardImage: "/images/about/team2.avif",
      caseStudy: "Scaling Content Creation with Example Corp",
      caseStudyUrl: "/case-studies/example-corp",
    },
    {
      name: "Vikram Manghnani",
      role: "VMC",
      company: "VMC",
      feedback: "AneeVerse helped us with our creative work. They brought lots of fun ideas that made everything simple and bright. It felt like having a whole team of friends.",
      stats: {
        productionTimeSaved: "65%",
        costSavings: "$15,000",
        videosDelivered: "25",
      },
      imageUrl: "/images/about/team3.avif",
      cardImage: "/images/about/team3.avif",
      caseStudy: "Driving ROI with Acme Inc.",
      caseStudyUrl: "/case-studies/acme-inc",
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
      const offsetX = (clientX - dragStart.x) * 1.5;
      setDragOffset({ x: offsetX, y: 0 });
    } else {
      const offsetY = (clientY - dragStart.y) * 1.5;
      setDragOffset({ x: 0, y: offsetY });
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const offset = isMobile ? dragOffset.x : dragOffset.y;
    
    // Change slide based on drag distance with reduced threshold
    if (Math.abs(offset) > 30) {
      if (offset > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    
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
    <div className="relative py-10 bg-secondary-500 text-primary-500">
      <Layout>
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Image Section */}
          <div 
            ref={containerRef}
            className="flex min-w-fit flex-row lg:flex-col justify-center items-center gap-4 select-none cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onMouseMove={handleDrag}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDrag}
            onTouchEnd={handleDragEnd}
            style={{
              transition: isDragging ? 'none' : 'transform 0.3s ease-out'
            }}
          >
            <AnimatePresence mode="wait">
              {/* Previous Testimonial Image */}
              <motion.div
                key={`prev-${currentIndex}`}
                className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] relative"
                initial={isMobile ? { x: -50, opacity: 0 } : { y: -50, opacity: 0 }}
                animate={{ 
                  x: isMobile ? (isDragging ? dragOffset.x * 0.5 : 0) : 0,
                  y: !isMobile ? (isDragging ? dragOffset.y * 0.5 : 0) : 0,
                  opacity: 0.5,
                  scale: 0.8
                }}
                exit={isMobile ? { x: 50, opacity: 0 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].imageUrl}
                  alt="Previous Testimonial"
                  className="w-full h-full rounded-full object-cover opacity-50"
                  draggable={false}
                />
              </motion.div>

              {/* Current Testimonial Image */}
              <motion.div
                key={`current-${currentIndex}`}
                className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] relative z-10"
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
                  className="w-full h-full rounded-full object-cover border-4 border-gray-300 shadow-md"
                  draggable={false}
                />
              </motion.div>

              {/* Next Testimonial Image */}
              <motion.div
                key={`next-${currentIndex}`}
                className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] relative"
                initial={isMobile ? { x: 50, opacity: 0 } : { y: 50, opacity: 0 }}
                animate={{ 
                  x: isMobile ? (isDragging ? dragOffset.x * 0.5 : 0) : 0,
                  y: !isMobile ? (isDragging ? dragOffset.y * 0.5 : 0) : 0,
                  opacity: 0.5,
                  scale: 0.8
                }}
                exit={isMobile ? { x: -50, opacity: 0 } : { y: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={testimonials[(currentIndex + 1) % testimonials.length].imageUrl}
                  alt="Next Testimonial"
                  className="w-full h-full rounded-full object-cover opacity-50"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content Section */}
          <motion.div
            key={currentIndex}
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-semibold">
              {testimonials[currentIndex].company}
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl text-left my-8">
              "{testimonials[currentIndex].feedback}"
            </p>
            <p className="font-medium italic text-gray-300">
              {testimonials[currentIndex].name}, {testimonials[currentIndex].role}
            </p>

            {/* Stats Grid */}
            <div className="flex flex-wrap justify-between gap-4 mb-8 mt-10">
              {Object.entries(testimonials[currentIndex].stats).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-white/10 flex-1 p-4 rounded-lg backdrop-blur-sm border border-white/10"
                >
                  <p className="text-2xl font-bold mb-1">{value}</p>
                  <p className="text-xs uppercase tracking-wider text-white/80">
                    {key.replace(/([A-Z])/g, " $1")}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex flex-row lg:flex-col items-center gap-6">
            <button
              onClick={handlePrev}
              className="p-2 border -rotate-90 lg:rotate-0 rounded-full shadow hover:bg-gray-300"
            >
              <FaArrowUp />
            </button>
            <button
              onClick={handleNext}
              className="p-2 border -rotate-90 lg:rotate-0 rounded-full shadow hover:bg-gray-300"
            >
              <FaArrowDown />
            </button>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-white scale-125" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </Layout>
    </div>
  );
}
