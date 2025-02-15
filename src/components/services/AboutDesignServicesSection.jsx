"use client"
import Image from "next/image";
import Layout from "../common/Layout";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutDesignServicesSection() {
  return (
    <div className="bg-secondary-500 text-white py-16 ">
      <Layout>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative max-w-lg w-full h-64 md:h-80">
          <Image
            src="/images/services/about-design.png"
            alt="Laptop showcasing design work"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">
            What makes our design services <span className="italic">different?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            We deliver speedy, high-quality graphic design services through a transparent subscription model.
          </p>
          <p className="text-gray-400 mb-6">
            We are a tech-enabled company, developing its own proprietary software to brief, manage, and coordinate a high-volume of design projects, making it possible to keep pace with teams at Amazon, Puma, Facebook, and more. Learn how we can revolutionize the way your organization gets design work done. Book a call today.
          </p>
      
          <Link href="/contact" className="flex justify-center sm:justify-start w-full mt-8" passHref>
      <motion.div
        className={`relative px-6 inline-block text-center py-3 w-full md:w-auto max-w-[400px] mx-auto md:mx-0 bg-[#D8FF85] text-secondary-500 hover:text-[#D8FF85] font-semibold text-md rounded-full border border-[#D8FF85] active:text-secondary-500 overflow-hidden`}
        whileHover="hover"
        initial="initial"
      >
        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 text-[#D8FF85] bg-secondary-500 z-0"
          variants={{
            initial: { x: "-100%" },
            hover: { x: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        
        {/* Button Text */}
        <span className="relative z-10">BOOK A CALL</span>
      </motion.div>
    </Link>
        </div>
      </div>
      </Layout>
    </div>
  );
}
