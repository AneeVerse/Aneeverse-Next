"use client"
import React from "react";
import { FaCheck } from "react-icons/fa6";
import Layout from "../common/Layout";
import Link from "next/link";
import { motion } from "framer-motion";

const pricingData = {
  title: "A subscription built to",
  subtitle: "fuel your growth",
  leftBox: {
    badge: "FLEXIBLE MONTHLY PLANS AVAILABLE.",
    heading: "Flexible plans for every business",
    description:
      "From basic asset production and motion graphics to video ads and brand strategy, a aneeverse subscription lets you choose how you want to use your budget every month based on your business needs.",
    note: "Subscriptions are offered in a variety of plans to suit your needs.",
    buttonText: "Book a call",
  },
  rightBox: {
    title: "Included in",
    italicText: "all plans",
    description: "Access to all creative services.",
    subNote: "(Subscription options are available in various tiers, based on your needs.)",
    features: [
      "Dedicated creative project manager and customer success",
      "Turnaround times starting at 12 hours",
      "24/7 timezone coverage",
      "AI-enhanced services",
      "Unlimited API calls to integrations",
      "Unlimited users and asset storage",
      "Support for multiple brands",
      "Access to Superspace platform",
    ],
  },
};

export default function PricingComponent() {
  return (
    <div className="bg-primary-500 py-12">
      <Layout>
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-md uppercase text-secondary-500 tracking-widest">
          PRICING MODEL
        </h2>
        <h3 className="text-4xl md:text-5xl mt-8 font-serif text-secondary-500">
          {pricingData.title} <span className="font-Rock_Salt sm:block inline mt-3">{pricingData.subtitle}</span>
        </h3>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Box */}
        <div className="bg-[#2A4E45] text-white p-8 rounded-lg flex flex-col justify-between">
          <span className=" text-[11px] sm:text-sm bg-white text-[#2A4E45] px-3 py-1 rounded-full uppercase tracking-wide font-semibold max-w-fit ">
            {pricingData.leftBox.badge}
          </span>
          <h4 className="text-3xl font-semibold mt-4">
            {pricingData.leftBox.heading}
          </h4>
          <p className="mt-4 text-lg">{pricingData.leftBox.description}</p>
          <p className="text-sm opacity-80 mt-4">{pricingData.leftBox.note}</p>
      

          <Link href="/contact" className="flex justify-center sm:justify-start w-full mt-6" passHref>
      <motion.div
        className={`relative px-6 inline-block text-center py-3 w-full  bg-[#D8FF85] text-[#0A211F] hover:text-[#D8FF85] font-semibold text-md rounded-full border border-[#D8FF85] active:text-[#0A211F] overflow-hidden`}
        whileHover="hover"
        initial="initial"
      >
        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 text-[#D8FF85] bg-[#2A4E45] z-0"
          variants={{
            initial: { x: "-100%" },
            hover: { x: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        
        {/* Button Text */}
        <span className="relative z-10"> {pricingData.leftBox.buttonText}</span>
      </motion.div>
    </Link>
        </div>

        {/* Right Box */}
        <div className="bg-[#E6ECD6] p-8 rounded-lg">
          <h4 className="text-lg font-serif">
            {pricingData.rightBox.title} <span className="font-Rock_Salt">{pricingData.rightBox.italicText}</span>:
          </h4>
          <p className="mt-2 font-semibold">{pricingData.rightBox.description}</p>
          <p className="text-sm opacity-70">{pricingData.rightBox.subNote}</p>

          <ul className="mt-6 ">
            {pricingData.rightBox.features.map((feature, index) => (
              <li key={index} className="flex border-b py-3 border-b-[#0f213314] items-center gap-3 text-gray-700">
                <FaCheck className="text-[#0A211F]" /> {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </Layout>
    </div>
  );
}
