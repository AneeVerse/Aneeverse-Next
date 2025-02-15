"use client"
import Link from "next/link";
import Layout from "../common/Layout";
import { motion } from "framer-motion";

export default function ServicesHero() {
    return (
      <section className="relative h-[500px] md:h-[600px] bg-black text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/services/hero-bg.png"
            alt="Background"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
  
        {/* Content Section */}
        <Layout className="relative z-10 flex flex-col pt-[20px] items-start justify-center h-full">
          
          <div className="text-[#F7F9F2] text-sm">CREATIVE SERVICES</div>
          {/* Title */}

          <h1 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
            Design services for <br /> ambitious brands
          </h1>
  
          {/* Subtitle */}
          <p className="text-md md:text-lg mt-6 text-[#F7F9F2] max-w-2xl">
            Teams at fast-growing companies use our services to get quality graphic design done at scale. Book a call today and get access to your dedicated design team.
          </p>
  
          {/* Call to Action Button */}
          {/* <Link href={"/contact"} className="mt-8 inline-block px-6 py-3 bg-[#D8FF85] text-black font-semibold rounded-full text-md hover:bg-[#b1d75f] transition">
            BOOK A CALL
          </Link> */}
          <Link href="/contact" className="block w-full mt-6" passHref>
      <motion.div
        className={`relative px-6 inline-block text-center py-[10px]  bg-[#D8FF85]  text-black hover:text-[#D8FF85] font-semibold text-md rounded-full border border-[#D8FF85] active:text-black overflow-hidden`}
        whileHover="hover"
        initial="initial"
      >
        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 text-[#D8FF85] bg-black/90 z-0"
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
        </Layout>
      </section>
    );
  }
  