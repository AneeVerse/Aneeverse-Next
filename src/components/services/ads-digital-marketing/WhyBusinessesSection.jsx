"use client";

import Layout from "@/components/common/Layout";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaBolt,
  FaFileContract,
  FaUserTie,
  FaFileAlt,
  FaBullseye,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: "One Team Across All Services",
    description:
      "No briefing five agencies. One PM coordinates ads, SEO, website, and platform – no gaps, no repeated briefs.",
  },
  {
    icon: <FaBolt className="w-6 h-6" />,
    title: "Execution, Not Just Reports",
    description:
      "We run weekly sprints. Issues are caught and fixed in days – not discovered in the next monthly report.",
  },
  {
    icon: <FaFileContract className="w-6 h-6" />,
    title: "Clear Scope Before Work Starts",
    description:
      "Written plan, timeline, and cost confirmed before anything begins.",
  },
  {
    icon: <FaUserTie className="w-6 h-6" />,
    title: "Dedicated Contact Per Project",
    description:
      "One PM per service. You never re-explain your business to a new person.",
  },
  {
    icon: <FaFileAlt className="w-6 h-6" />,
    title: "Updates You Can Read in 2 Minutes",
    description:
      "One-page weekly report for ads. Monthly ranking update for SEO. Sprint summaries for development.",
  },
  {
    icon: <FaBullseye className="w-6 h-6" />,
    title: "Results, Not Vanity Metrics",
    description:
      "We report on leads, cost per lead, revenue, and rankings. Not impressions and follower counts.",
  },
];

export default function WhyBusinessesSection() {
  return (
    <section className="bg-[#073742] py-12 md:py-20 overflow-hidden text-white">
      <Layout>
        <div className="text-center mb-10 sm:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm font-medium tracking-tight uppercase text-[#88d7f0] mb-3"
          >
            Why Businesses Choose Aneeverse
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bw-gradual text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight max-w-3xl mx-auto"
          >
            One team. Full execution.{" "}
            <span className="inline-block bg-[#FF6B00] text-[#03151a] px-4 py-1 rounded-xl text-[0.7em] ml-2 font-bold tracking-tight">
              Every week.
            </span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none gap-3 md:gap-4 pb-6 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, zIndex: 20, transition: { duration: 0.3 } }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="flex-shrink-0 snap-center group relative bg-[#072d36] rounded-xl p-5 md:p-6 hover:bg-[#093540] transition-colors duration-300 cursor-default overflow-hidden w-[280px] sm:w-[320px] md:w-auto border border-white/[0.05]"
              >
                <div className="absolute left-0 top-[85%] w-[2px] h-[60px] bg-gradient-to-b from-transparent via-[#88d7f0] to-transparent opacity-0 group-hover:opacity-100 group-hover:top-[10%] transition-all duration-1000 ease-in-out z-10" />

                <div className="text-white w-8 h-8 flex items-center justify-center mb-5">{benefit.icon}</div>

                <h3 className="font-bold text-white leading-snug mb-2 text-sm md:text-base">{benefit.title}</h3>

                <p className="text-gray-300 text-[12px] md:text-[13px] leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Layout>
    </section>
  );
}
