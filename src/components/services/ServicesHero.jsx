"use client";
import Link from "next/link";
import Layout from "../common/Layout";
import { motion } from "framer-motion";
import AnimatedButton from "../common/AnimatedButton";
import { UiSubheading } from "../common/typography/UiSubheading";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";

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
        <UiSubheading className="text-primary-500 mb-2">
          CREATIVE SERVICES
        </UiSubheading>
        <Heading
          level="h1"
          color="light"
          spacing="lg"
          className="text-left font-semibold"
        >
           Design services for{" "}
           <br /> ambitious brands
        </Heading>
        

        {/* Subtitle */}
        <p className="text-md md:text-lg  text-primary-500 -mt-2 max-w-2xl">
          Teams at fast-growing companies use our services to get quality
          graphic design done at scale. Book a call today and get access to your
          dedicated design team.
        </p>

        {/* Call to Action Button */}

        <AnimatedButton
          href="/contact"
          className="mt-4 min-w-fit whitespace-nowrap px-6 py-3 rounded-full font-medium text-black bg-[#D8FF85] border border-[#D8FF85] hover:bg-black/90 hover:text-[#D8FF85] transition-colors"
          mainTextSlide="-130%"
          duplicateTextStart="100%"
          duplicateTextEnd="-100%"
        >
          BOOK A CALL
        </AnimatedButton>
      </Layout>
    </section>
  );
}
