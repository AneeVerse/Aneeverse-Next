"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { HiArrowNarrowUp, HiArrowNarrowDown } from "react-icons/hi";
import Image from "next/image";
import Layout from "../common/Layout";

const testimonials = [
  {
    id: 1,
    company: "VMC",
    logo: "/images/testimonals/vmc-logo.webp",
    quote: <><span className="font-bold">AneeVerse brought fresh, fun ideas that made our creative work simple and engaging</span>. They felt like a team of friends who truly cared about our vision, making them key to our expansion.</>,
    author: "Vikram Manghnani",
    role: "Founder, VMC",
    avatar: "/images/testimonals/Vmc.png",
    linkCard: {
      title: "Building creative engagement with VMC",
      image: "/images/home/works2.avif"
    }
  },
  {
    id: 2,
    company: "Novino Inks Pvt Ltd",
    logo: null,
    quote: <>The biggest win? The time we saved. AneeVerse built a stunning eCommerce site that truly reflects our brand. <span className="font-bold">Abhijeet understood my paintings on a personal level</span> he knew exactly what I wanted to express and brought it to life with unmatched customization and efficiency.</>,
    author: "Navin Agarwal",
    role: "Founder",
    avatar: "/images/testimonals/navino.png",
    linkCard: {
      title: "Transforming Digital Presence for Novino Inks",
      image: "/images/home/works3.avif"
    }
  },
  {
    id: 3,
    company: "JM Visa Services",
    logo: "/images/testimonals/jm-visa-logo.png",
    quote: <>AneeVerse redesigned our website, and the leads started flowing. Their smart <span className="font-bold">blog and GMB strategies got us to #1 in Mumbai while cutting marketing costs</span>. Best move we made.</>,
    author: "Amrita Thakar",
    role: "Founder, JM Visa Services",
    avatar: "/images/testimonals/jm-visa.png",
    linkCard: {
      title: "Scaling Lead Gen for JM Visa",
      image: "/images/home/works4.avif"
    }
  }
];

const DESKTOP_ITEM_SIZE = 160;
const MOBILE_ITEM_SIZE = 120;

const TestimonialsSection = () => {
  const scrollY = useMotionValue(0);
  const [centerIndex, setCenterIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const itemSize = isMobile ? MOBILE_ITEM_SIZE : DESKTOP_ITEM_SIZE;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const [wheelIndex, setWheelIndex] = useState(0); // Tracks the visual center of the wheel (updated during drag)

  // Synchronize both wheel and text content index during scroll
  useEffect(() => {
    const unsub = scrollY.on("change", (latest) => {
      const newIndex = Math.round(-latest / itemSize);
      setWheelIndex(newIndex);
      // 🔥 Update text content immediately to feel "attached" 
      setCenterIndex((prev) => (prev !== newIndex ? newIndex : prev));
    });
    return () => unsub();
  }, [scrollY, itemSize]);

  const onPanStart = () => {
    setIsDragging(true);
    scrollY.stop();
  };

  const onPan = (e, info) => {
    const delta = isMobile ? info.delta.x : info.delta.y;
    scrollY.set(scrollY.get() + delta * 2.5);
  };

  const onPanEnd = (e, info) => {
    setIsDragging(false);
    const currentVal = scrollY.get();
    const velocity = isMobile ? info.velocity.x : info.velocity.y;

    const predictedVal = currentVal + velocity * 0.4;
    const targetIndex = Math.round(-predictedVal / itemSize);
    const targetVal = -targetIndex * itemSize;

    animate(scrollY, targetVal, {
      type: "spring",
      stiffness: 100,  // Faster snap
      damping: 25,     // More controlled
      mass: 0.8,
      velocity: velocity,
      restDelta: 0.01,
      onComplete: () => {
        // Final sync
        const finalIndex = Math.round(-targetVal / itemSize);
        setCenterIndex(finalIndex);
        setWheelIndex(finalIndex);
      }
    });
  };

  const handleNext = () => {
    const target = (centerIndex + 1) * -itemSize;
    animate(scrollY, target, {
      type: "spring",
      stiffness: 100,
      damping: 25,
      restDelta: 0.1,
      onComplete: () => setCenterIndex(centerIndex + 1)
    });
  };

  const handlePrev = () => {
    const target = (centerIndex - 1) * -itemSize;
    animate(scrollY, target, {
      type: "spring",
      stiffness: 100,
      damping: 25,
      restDelta: 0.1,
      onComplete: () => setCenterIndex(centerIndex - 1)
    });
  };

  // ✅ Auto-scroll Logic
  useEffect(() => {
    if (isDragging) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isDragging, centerIndex]);

  // Safe wrap for data access
  const getData = (i) => {
    const len = testimonials.length;
    return testimonials[((i % len) + len) % len];
  };

  const activeData = getData(centerIndex);

  return (
    <section className="py-24 bg-[#073742] overflow-hidden min-h-[750px] flex items-center relative">
      <Layout className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 relative w-full">

          {/* ✅ Left Column: Infinite Wheel */}
          <div className="relative w-full h-40 md:h-[600px] md:w-64 flex-shrink-0 flex md:flex-col items-center justify-center select-none mt-0 md:mt-10 mb-8 md:mb-0">

            {/* Interaction Overlay */}
            <motion.div
              className={`absolute inset-0 z-20 cursor-grab active:cursor-grabbing ${isMobile ? 'touch-pan-y' : 'touch-none'}`}
              onPanStart={onPanStart}
              onPan={onPan}
              onPanEnd={onPanEnd}
            />

            {/* Render Visible Slots relative to wheelIndex for infinite visual scroll */}
            {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((offset) => {
              const i = wheelIndex + offset; // Use wheelIndex (dynamic) instead of centerIndex (stable)
              const item = getData(i);
              return (
                <SlotItem
                  key={`slot-${i}`} // Use absolute index key to ensure content is stable during shifts
                  item={item}
                  index={i}
                  scrollY={scrollY}
                  isMobile={isMobile}
                  itemSize={itemSize}
                />
              );
            })}

            {/* Gradients */}
            {isMobile ? (
              <>
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#073742] to-transparent z-15 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#073742] to-transparent z-15 pointer-events-none" />
              </>
            ) : (
              <>
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#073742] to-transparent z-15 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#073742] to-transparent z-15 pointer-events-none" />
              </>
            )}
          </div>

          {/* ✅ Center Column: Dynamic Content */}
          <div className="flex-1 flex flex-col items-start text-left order-1 md:order-2 relative min-h-[400px]">
            {/* We use a transition group here to fade content */}
            <motion.div
              key={centerIndex}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -10 }}
              transition={{
                duration: 0.2, // Faster transition for "attached" feel
                ease: "easeOut"
              }}
              className="w-full"
            >
              <ContentBlock testimonial={activeData} />
            </motion.div>
          </div>

          {/* ✅ Right Column: Buttons */}
          <div className="hidden lg:flex flex-col gap-6 order-3 items-center z-20">
            <button onClick={handlePrev} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all shadow-xl backdrop-blur-sm">
              <HiArrowNarrowUp size={28} />
            </button>
            <button onClick={handleNext} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all shadow-xl backdrop-blur-sm">
              <HiArrowNarrowDown size={28} />
            </button>
          </div>

        </div>
      </Layout>
      <div className="absolute right-[-10%] bottom-0 w-[500px] h-[500px] bg-[#2DC8E6]/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

const SlotItem = ({ item, index, scrollY, isMobile, itemSize }) => {
  const val = useTransform(scrollY, (currentScroll) => index * itemSize + currentScroll);

  const range = isMobile ? [-(itemSize * 2), -itemSize, 0, itemSize, itemSize * 2] : [-320, -160, 0, 160, 320];
  const scale = useTransform(val, range, [0.5, 0.75, 1.35, 0.75, 0.5]);
  const opacity = useTransform(val, range, [0, 0.4, 1, 0.4, 0]);
  const blur = useTransform(val, range, ["5px", "2px", "0px", "2px", "5px"]);
  const overlayOpacity = useTransform(val, range, [0.8, 0.6, 0, 0.6, 0.8]);

  return (
    <motion.div
      style={{
        x: isMobile ? val : 0,
        y: isMobile ? 0 : val,
        scale,
        opacity,
        filter: blur,
        position: 'absolute',
        zIndex: 10
      }}
      className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-white/10 overflow-hidden shadow-2xl bg-black"
    >
      <Image
        src={item.avatar}
        alt={item.author}
        fill
        className="object-cover"
        draggable={false}
      />
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-[#073742] mix-blend-multiply"
      />
    </motion.div>
  );
}

const ContentBlock = ({ testimonial }) => (
  <>
    <div className="mb-8 min-h-[40px] relative flex items-center">
      {testimonial.logo ? (
        <div className={`relative filter brightness-0 invert opacity-90 ${testimonial.company === "JM Visa Services" ? "w-72 h-32 -ml-6" : "w-40 h-10"}`}>
          <Image src={testimonial.logo} alt={testimonial.company} fill className="object-contain object-left" draggable={false} />
        </div>
      ) : (
        <span className="text-white text-2xl font-bold uppercase tracking-widest opacity-90">{testimonial.company}</span>
      )}
    </div>
    <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-normal leading-[1.3] mb-10 font-bw-gradual tracking-tight max-w-4xl">
      "{testimonial.quote}"
    </h2>
    <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-8">
      <div className="mb-4">
        <p className="text-white font-bold text-xl mb-1">{testimonial.author}</p>
        <p className="text-gray-400 font-normal text-lg">{testimonial.role}</p>
      </div>
      <div className="flex items-center gap-5 bg-white/5 border border-white/10 p-4 rounded-2xl w-fit cursor-pointer hover:bg-white/10 transition-colors self-end md:self-auto">
        <div className="w-20 h-14 relative rounded-xl overflow-hidden shadow-lg">
          <Image src={testimonial.linkCard.image} fill className="object-cover" alt="resource" draggable={false} />
        </div>
        <div>
          <p className="text-[11px] text-[#2DC8E6] font-bold uppercase tracking-wider mb-1">{testimonial.company}</p>
          <p className="text-white text-sm font-medium max-w-[200px] line-clamp-1">{testimonial.linkCard.title}</p>
        </div>
        <div className="text-white/40 ml-4 font-bold">
          <HiArrowNarrowUp className="rotate-45" size={20} />
        </div>
      </div>
    </div>
  </>
);

export default TestimonialsSection;
