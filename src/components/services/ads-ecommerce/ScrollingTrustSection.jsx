"use client";

import { motion } from "framer-motion";

const trustLabels = [
  "Dedicated PM",
  "Fast Execution",
  "Proven Results",
  "Amazon, eBay and Etsy",
  "WhatsApp Support",
  "Weekly Reporting",
  "Account Health Monitored",
];

export default function ScrollingTrustSection() {
  // Duplicate labels to ensure seamless loop
  const duplicatedLabels = [...trustLabels, ...trustLabels, ...trustLabels];

  return (
    <div className="bg-secondary-500 py-6 md:py-8 border-y border-white/[0.05] overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary-500 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary-500 to-transparent z-10 pointer-events-none"></div>

      <motion.div
        className="flex whitespace-nowrap gap-12 md:gap-20 items-center"
        animate={{
          x: [0, -1000], // Adjust based on total width
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedLabels.map((label, i) => (
          <div
            key={i}
            className="flex items-center gap-4 text-white/40 text-sm md:text-base font-medium uppercase tracking-[0.2em]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
            {label}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
