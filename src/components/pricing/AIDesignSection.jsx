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
        className="relative py-16 bg-cover bg-center bg-no-repeat lg:rounded-xl rounded-xl overflow-hidden w-full max-w-none mx-auto"
        style={{
          backgroundImage: "url('/images/pricing/ai-banner.avif')"
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
        
        <div className="relative z-10 px-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="max-w-2xl xl:max-w-3xl">
            <UiSubheading className="text-primary-500 mb-2">
              AI DESIGN SERVICES
            </UiSubheading>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Save <span className="italic">up to 70%</span> on production costs
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
