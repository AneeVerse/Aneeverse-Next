"use client";

import { useRef } from "react";
import Layout from "@/components/common/Layout";
import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaChartLine,
  FaWhatsapp,
  FaShieldAlt,
  FaCalendarCheck,
  FaLayerGroup,
} from "react-icons/fa";

const outcomeCards = [
  {
    icon: <FaClipboardCheck className="w-6 h-6" />,
    title: "Free Consultation. Real Findings.",
    description:
      "We review your ads, rankings, or project brief and tell you exactly what it's costing you. No generic advice. No sales pitch.",
  },
  {
    icon: <FaChartLine className="w-6 h-6" />,
    title: "Results Within 60 Days",
    description:
      "Work starts in week one. By day 60, you have a scorecard – leads, rankings, cost per result, and traffic – showing exactly what moved.",
  },
  {
    icon: <FaWhatsapp className="w-6 h-6" />,
    title: "Direct WhatsApp Access. No Ticket System.",
    description:
      "Your PM's number is in your phone from day one. Ask a question, get an answer.",
  },
  {
    icon: <FaShieldAlt className="w-6 h-6" />,
    title: "Problems Fixed Before They Cost You More",
    description:
      "Weekly monitoring catches wasted spend, ranking drops, and technical issues before they compound.",
  },
  {
    icon: <FaCalendarCheck className="w-6 h-6" />,
    title: "Your Marketing Runs Every Week Without You",
    description:
      "Ads Optimised. Rankings reviewed. Reports sent. Every week – whether you log in or not.",
  },
  {
    icon: <FaLayerGroup className="w-6 h-6" />,
    title: "One Team. Every Channel.",
    description:
      "No briefing from five different vendors. One PM coordinates Google Ads, Meta, SEO, website, and platform – all under one roof.",
  },
];

export default function AdvantageSection() {
  const cardRefs = useRef([]);

  return (
    <section id="aneeverse-advantage" className="bg-[#03151a] py-12 md:py-16 overflow-hidden text-white">
      <Layout>
        <div className="text-center mb-10 sm:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm font-medium tracking-tight uppercase text-[#88d7f0] mb-3"
          >
            The Aneeverse Advantage
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bw-gradual text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight max-w-4xl mx-auto"
          >
            What You Get Before You{" "}
            <span className="inline-block bg-[#FF6B00] text-[#03151a] px-4 py-1 rounded-xl text-[0.7em] ml-2 font-bold tracking-tight">
              Spend a Single Rupee
            </span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="flex md:grid md:grid-cols-4 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none gap-3 md:gap-4 pb-6 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {outcomeCards.map((card, index) => {
              const isWide = index === 0 || index === 5;
              return (
                <motion.div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  data-index={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, zIndex: 20, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className={`flex-shrink-0 snap-center group relative bg-[#072d36] rounded-xl p-5 md:p-6 hover:bg-[#093540] transition-colors duration-300 cursor-default overflow-hidden w-[280px] sm:w-[320px] md:w-auto ${
                    isWide ? "md:col-span-2" : "md:col-span-1"
                  }`}
                >
                  <div className="absolute left-0 top-[85%] w-[2px] h-[60px] bg-gradient-to-b from-transparent via-[#88d7f0] to-transparent opacity-0 group-hover:opacity-100 group-hover:top-[10%] transition-all duration-1000 ease-in-out z-10" />

                  <div className="flex items-center justify-between mb-5">
                    <div className="text-white w-8 h-8 flex items-center justify-center">{card.icon}</div>
                    <span className="text-[10px] font-black text-white/10 uppercase tracking-widest">
                      0{index + 1}
                    </span>
                  </div>

                  <h3
                    className={`font-bold text-white leading-snug mb-2 ${isWide ? "text-base md:text-xl" : "text-sm md:text-base"}`}
                  >
                    {card.title}
                  </h3>

                  <p className="text-gray-300 text-[12px] md:text-[13px] leading-relaxed">{card.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Layout>
    </section>
  );
}
