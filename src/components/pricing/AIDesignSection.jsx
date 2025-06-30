"use client";
import React from "react";
import Layout from "../common/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../common/Button";
import { UiSubheading } from "../common/typography/UiSubheading";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";
import AnimatedButton from "../common/AnimatedButton";

export default function AIDesignSection() {
  return (
    <section className="bg-secondary-500 py-16">
      <Layout className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image Section */}
        <div className="lg:w-1/2">
          <img
            src="/images/pricing/ai-banner.avif"
            alt="AI-powered design tools"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <UiSubheading className="text-primary-500 mb-2">
            Design with AI & ML tools
          </UiSubheading>
          <Heading
            level="h2"
            color="light"
            spacing="lg"
            className="font-semibold"
          >
            Enhanced design{" "}
            <AccentText size="lg" className={""}>
              powered by
            </AccentText>{" "}
            AI
          </Heading>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Our AI-powered tools help create stunning designs faster than ever.
            From automated layouts to intelligent color suggestions, experience
            the future of design with aneeverse.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            Combine human creativity with AI precision. Our advanced algorithms
            learn from your preferences and suggest improvements, making every
            project more efficient and impactful.
          </p>

          <AnimatedButton
            href="/contact"
            className="mt-8 w-full md:w-fit max-w-[400px] flex justify-center mx-auto sm:mx-0 text-center px-6 py-3 rounded-full font-medium text-white bg-transparent border border-white hover:bg-white hover:text-[#000000] transition-colors"
            mainTextSlide="-130%"
            duplicateTextStart="40%"
            duplicateTextEnd="-100%"
          >
            BOOK A CALL
          </AnimatedButton>
        </div>
      </Layout>
    </section>
  );
}
