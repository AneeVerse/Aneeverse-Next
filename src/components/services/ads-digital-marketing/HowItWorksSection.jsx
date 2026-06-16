"use client";

import Layout from "@/components/common/Layout";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    timeline: "Day 1–3",
    description: "We review your setup and tell you what needs to happen first.",
  },
  {
    number: "02",
    title: "Written Strategy or Scope",
    timeline: "Week 1",
    description: "You get a written plan with timeline and cost. You approve before anything starts.",
  },
  {
    number: "03",
    title: "Execution Begins",
    timeline: "Week 2",
    description: "Ads go live. SEO starts. Development sprints begin. Every deliverable has a date.",
  },
  {
    number: "04",
    title: "Optimize and Report",
    timeline: "Ongoing",
    description: "Weekly for ads. Monthly for SEO. Per milestone for development. Direct PM access throughout.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-[#03151a] py-16 md:py-24 overflow-hidden text-white">
      <Layout>
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-medium tracking-tight uppercase text-[#88d7f0] mb-3"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bw-gradual text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight mb-4"
          >
            From First Call to Full Execution in Four Steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-base md:text-lg"
          >
            One call. One plan. Work starts the same week.
          </motion.p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[19px] md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#88d7f0]/40 via-[#88d7f0]/20 to-transparent hidden sm:block" />

          <div className="space-y-6 md:space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-5 md:gap-8 pl-0 sm:pl-2"
              >
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#072d36] border-2 border-[#88d7f0]/50 flex items-center justify-center">
                    <span className="text-[10px] md:text-xs font-black text-[#88d7f0]">{step.number}</span>
                  </div>
                </div>

                <div className="flex-1 bg-[#072d36] rounded-xl p-5 md:p-6 border border-white/[0.05] hover:border-[#88d7f0]/20 transition-colors group">
                  <div className="flex flex-wrap items-baseline gap-2 mb-2">
                    <h3 className="font-bw-gradual text-lg md:text-xl font-bold uppercase tracking-tight text-white">
                      Step {index + 1} – {step.title}
                    </h3>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF6B00] bg-[#FF6B00]/10 px-2 py-0.5 rounded-md">
                      {step.timeline}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Layout>
    </section>
  );
}
