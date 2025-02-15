"use client";

import Layout from "@/components/common/Layout";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ✅ Infinite Scroll Animation
const scrollVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 225,
      ease: "linear",
    },
  },
};

export default function CommonServicesHeroSection({ 
  title, 
  subtitle, 
  description, 
  ctaText, 
  ctaLink, 
  backgroundImage, 
  services 
}) {
  return (
    <div className="relative -mt-[80px] text-white overflow-hidden">
    {/* ✅ Hero Section */}
    <div className="relative w-full h-[90vh] min-h-[600px] sm:min-h-[600px] sm:h-[75vh] flex items-center">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-100"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      

      <Layout >
      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="relative  z-10">
        <p className="uppercase tracking-widest text-lg font-medium">
            {subtitle}
        </p>
        <h1 className="text-5xl md:text-6xl w-full block font-bold mt-2">{title}</h1>
        <p className="mt-4 text-lg text-gray-200">
            {description}
        </p>
        <Link href={ctaLink}>
          <button className="mt-6 px-6 py-3 bg-lime-400 text-black text-lg font-semibold rounded-full hover:bg-lime-500 transition">
            {ctaText}
          </button>
        </Link>

        
      </div>
      <div className=""></div>
      </div>
      </Layout>
    {/* ✅ Scrolling Services */}
    <div className="absolute bottom-8 overflow-hidden">
      <motion.div
        className="flex gap-4 w-max"
        variants={scrollVariants}
        animate="animate"
      >
        {[...services, ...services,...services, ...services].map((service, index) => (
          <div
            key={index}
            className="flex items-center w-fit px-3 py-2 bg-primary-500  rounded-lg shadow-lg overflow-hidden"
          >
            <div className=" h-[54px] w-[75px] relative  rounded-md overflow-hidden flex-shrink-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="ml-3 text-md text-secondary-500 font-medium">{service.title}</p>
          </div>
        ))}
      </motion.div>
    </div>
    </div>

  </div>
  );
}
