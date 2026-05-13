"use client";

import { useRef, useState, useEffect } from "react";
import Layout from "@/components/common/Layout";
import { motion } from "framer-motion";
import { FaUsers, FaLayerGroup, FaWhatsapp, FaChartLine, FaShieldAlt, FaTrophy } from "react-icons/fa";

const outcomeCards = [
  {
    icon: <FaLayerGroup className="w-6 h-6" />,
    title: "The Audit Is Free and Actionable",
    description:
      "We review your listings, PPC structure, and account health-and tell you exactly what it's costing you. Walk away with a clear picture, no strings attached.",
  },
  {
    icon: <FaChartLine className="w-6 h-6" />,
    title: "Results Before You Fully Commit",
    description:
      "Fixes start in week one. By day 60, you have a scorecard showing exactly what moved-rankings, conversions, ad performance.",
  },
  {
    icon: <FaWhatsapp className="w-6 h-6" />,
    title: "Direct WhatsApp Access. No Ticket System.",
    description:
      "Your PM's number is in your phone from day one. Ask a question, get an answer. No portals, no waiting rooms.",
  },
  {
    icon: <FaShieldAlt className="w-6 h-6" />,
    title: "Problems Fixed Before They're Your Problem",
    description:
      "Daily health monitoring catches policy flags and suppression alerts before they escalate. You get Monday updates, not Friday warnings.",
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: "Your Store Runs Every Week Without You",
    description:
      "Listings updated. Ads adjusted. Health checked. Every week-whether you log in or not. Get your evenings back.",
  },
  {
    icon: <FaTrophy className="w-6 h-6" />,
    title: "Results That Are Measurable",
    description:
      "Stores we manage have seen ranking growth of 35%+ within 90 days, a 2.5x lift in conversion rates with optimised content, and a 40% reduction in ad spend waste.",
  },
];

export default function WhyChooseSection() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="what-we-manage" className="bg-[#03151a] py-12 md:py-16 overflow-hidden text-white">
      <Layout>
        {/* Header - matches HumanCreativity style */}
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

        {/* Cards Container - Scrollable on Mobile, Grid on Desktop */}
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
                  {/* Hover accent line */}
                  <div className="absolute left-0 top-[85%] w-[2px] h-[60px] bg-gradient-to-b from-transparent via-[#88d7f0] to-transparent opacity-0 group-hover:opacity-100 group-hover:top-[10%] transition-all duration-1000 ease-in-out z-10" />

                  {/* Icon + Step */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-white w-8 h-8 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <span className="text-[10px] font-black text-white/10 uppercase tracking-widest">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className={`font-bold text-white leading-snug mb-2 ${isWide ? "text-base md:text-xl" : "text-sm md:text-base"}`}>
                    {card.title}
                  </h3>

                  <p className="text-gray-300 text-[12px] md:text-[13px] leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Layout>
    </section>
  );
}
