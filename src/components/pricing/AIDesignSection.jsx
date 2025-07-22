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
    <div className="py-12 px-4 sm:px-6 lg:px-0">
      <section
        className="relative py-16 rounded-xl lg:rounded-xl overflow-hidden w-full max-w-none mx-auto bg-secondary-500 lg:bg-[url('/images/pricing/ai-banner.avif')] bg-cover bg-center bg-no-repeat"
      >
        {/* Dark overlay for better text readability - only on large screens when bg image is visible */}
        <div className="absolute inset-0 bg-black/50 rounded-xl hidden lg:block"></div>
        
        <div className="relative z-10 px-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="max-w-2xl xl:max-w-3xl">
            <UiSubheading className="text-primary-500 mb-2 ml-2">
              AI DESIGN SERVICES
            </UiSubheading>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 sm:text-xl">
            
              <span className="italic text-orange-400">Save up to 70%</span>
              <span className="text-white"> on production costs</span>
            </h2>

            <p className="text-lg text-white leading-relaxed mb-8">
              Through AI, customers like Amazon, Reddit, and Salesforce 
              managed to spend less than half of what they normally would on 
              similar projects.
            </p>

            <AnimatedButton
              href="/contact"
              className="px-8 py-3 rounded-full font-medium text-black bg-lime-300 hover:bg-lime-400 transition-colors"
              mainTextSlide="-130%"
              duplicateTextStart="40%"
              duplicateTextEnd="-100%"
            >
              Book a demo
            </AnimatedButton>
          </div>
        </div>
      </section>
    </div>
  );
}
