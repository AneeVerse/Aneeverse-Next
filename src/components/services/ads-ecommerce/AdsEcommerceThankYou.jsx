"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Layout from "@/components/common/Layout";
import AnimatedButton from "@/components/common/AnimatedButton";
import { FaEnvelopeOpenText, FaSearch, FaChartLine } from "react-icons/fa";

const steps = [
  {
    icon: <FaEnvelopeOpenText className="w-4 h-4" />,
    title: "Check your inbox",
    text: "We've sent a confirmation email with the next steps.",
  },
  {
    icon: <FaSearch className="w-4 h-4" />,
    title: "We audit your store",
    text: "Our specialists review your listings, ads, and account health.",
  },
  {
    icon: <FaChartLine className="w-4 h-4" />,
    title: "Personalised report",
    text: "You'll get a tailored growth plan within 24 hours.",
  },
];

export default function AdsEcommerceThankYou() {
  return (
    <div className="bg-[#073742] relative text-white overflow-hidden h-screen">
      <div className="absolute -top-[20px] left-0 w-full h-[200px] bg-gradient-to-b z-20 from-[#021115] via-[#073742]/80 to-transparent pointer-events-none" />

      <Layout className="relative z-30 h-full">
        <div className="flex items-center justify-center h-full py-6">
          <div className="w-full max-w-2xl text-center">
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#88D7F0] flex items-center justify-center mb-5 sm:mb-6 shadow-2xl shadow-[#88D7F0]/20"
            >
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-[#073742]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>

            <p className="text-[10px] md:text-[11px] uppercase font-bold tracking-[3px] md:tracking-[4px] text-primary-500/80 mb-3">
              Audit Requested
            </p>

            <h1 className="font-bw-gradual font-extrabold leading-[1.1] tracking-tighter uppercase mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="text-white">Thank You.</span>
              <br />
              <span className="inline-block bg-[#FF6B00] text-[#03151a] px-3 sm:px-4 py-1.5 sm:py-1 rounded-lg sm:rounded-xl text-[0.75em] mt-3 font-black tracking-tight">
                We&apos;ve Got Your Store.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8">
              Our marketplace specialists are already reviewing your store.
              You&apos;ll hear from us within <span className="text-white font-semibold">24 hours</span>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6 sm:mb-8 text-left">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="bg-[#05262e] border border-white/10 rounded-2xl p-3.5 sm:p-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#88D7F0]/15 text-[#88D7F0] flex items-center justify-center mb-2">
                    {step.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-white/60 leading-relaxed">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AnimatedButton
                href="/"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-sm flex items-center justify-center text-center"
                style={{ backgroundColor: "#88D7F0", color: "#073742" }}
                mainTextSlide="-130%"
                duplicateTextStart="100%"
                duplicateTextEnd="-100%"
              >
                Back to Home
              </AnimatedButton>
              <Link
                href="/works"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-sm border border-white/20 bg-white/[0.05] text-white text-center hover:bg-white/10 transition-colors"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
