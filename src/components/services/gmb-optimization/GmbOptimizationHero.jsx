"use client";

import Layout from "@/components/common/Layout";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ✅ Services Data (for scrolling cards)
const services = [
  { title: "Webflow Development", image: "/images/services/website/card/webflow-development.avif" },
  { title: "Website Illustrations", image: "/images/services/website/card/website-illustration.avif" },
  { title: "UX UI Audit", image: "/images/services/website/card/ui-ux-audit.avif" },
  { title: "Design Systems", image: "/images/services/website/card/design-system.avif" },
  { title: "Content Development", image: "/images/services/website/card/content-development.avif" },
  { title: "Website Strategy", image: "/images/services/website/card/website-strategy.avif" },
  { title: "Website Design", image: "/images/services/website/card/website-design.avif" },
  { title: "Landing Page Design", image: "/images/services/website/card/landing-page-design.avif" },
];

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

export default function GmbOptimizationHero() {
  return (
    <div className="relative -mt-[80px] text-white overflow-hidden">
      {/* ✅ Hero Section */}
      <div className="relative w-full h-[90vh]  min-h-[600px] sm:min-h-[600px] sm:h-[75vh] flex items-center">
        {/* Background Image */}
        <Image
          src="/images/services/email-design/hero-banner.avif"
          alt="Web Design Hero"
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
          {" Google My Business Optimization".toUpperCase()}
          </p>
          <h1 className="text-5xl md:text-6xl w-full block font-bold mt-2">GMB Optimization Services
          </h1>
          <p className="mt-4 text-lg text-gray-200">
          Boost your local visibility with expert GMB optimization services. From profile setup to review management, we help you attract more customers.
          </p>
          <Link href="/contact">
            <button className="mt-6 px-6 py-3 bg-lime-400 text-black text-lg font-semibold rounded-full hover:bg-lime-500 transition">
              Book a demo
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
