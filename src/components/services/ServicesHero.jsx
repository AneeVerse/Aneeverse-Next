"use client";
import Link from "next/link";
import Layout from "../common/Layout";
import { motion } from "framer-motion";
import Button from "../common/Button";

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
          Teams at fast-growing companies use our services to get quality
          graphic design done at scale. Book a call today and get access to your
          dedicated design team.
        </p>

        {/* Call to Action Button */}

        <Button
          href="/contact"
          textColor="text-black"
          bgColor="bg-[#D8FF85]"
          borderColor="border-[#D8FF85]"
          hoverBgColor="bg-black/90"
          hoverTextColor="text-[#D8FF85]"
          className="mt-4 min-w-fit whitespace-nowrap"
        >
          BOOK A CALL
        </Button>
      </Layout>
    </section>
  );
}
