"use client";

import { useRef, useState, useEffect } from "react";
import Layout from "@/components/common/Layout";
import { FaUsers, FaLayerGroup, FaWhatsapp, FaChartLine } from "react-icons/fa";

const outcomeCards = [
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: "Dedicated Team Per Client",
    description:
      "Every client gets one dedicated PM and a specialist team. There is no shared inbox, no rotating account manager, and no handoff mid-project. Your store has one person responsible for it at all times.",
  },
  {
    icon: <FaLayerGroup className="w-6 h-6" />,
    title: "Multi-Platform Operations",
    description:
      "We run full operations across Amazon, eBay, and Etsy – from listings and ads to account health and daily ops. Every week, handled entirely without follow-up required from you.",
  },
  {
    icon: <FaWhatsapp className="w-6 h-6" />,
    title: "Direct WhatsApp Access",
    description:
      "No support tickets. No waiting on portals. You message your PM on WhatsApp and get a clear answer. This direct communication ensures your store stays moving without delays.",
  },
  {
    icon: <FaChartLine className="w-6 h-6" />,
    title: "Results That Are Measurable",
    description:
      "Our managed stores see 35%+ organic growth in 90 days, 2.5x conversion lifts through optimization, and 40% reduction in ad waste. We focus on store-level outcomes, not platform averages.",
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="what-we-manage" className="bg-primary-500 py-20 md:py-32 overflow-hidden">
      <Layout>
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-sm uppercase font-bold tracking-[3px] text-secondary-500/40 mb-4">
            The Aneeverse Advantage
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-secondary-500 leading-[1.1] mb-6">
            Why Marketplace Sellers{" "}
            <span className="italic text-secondary-500/60">Work With Us</span>
          </h2>
          <p className="text-lg text-secondary-500/70 max-w-2xl mx-auto">
            Measurable results. Direct communication. A dedicated team that handles the heavy lifting daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {outcomeCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`group relative rounded-[2rem] p-8 md:p-10 border border-secondary-500/[0.05] bg-white/70 hover:bg-white hover:shadow-[0_20px_50px_rgba(7,55,66,0.08)] transition-all duration-700 cursor-default ${
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-secondary-500/[0.04] flex items-center justify-center text-secondary-500 mb-8 group-hover:bg-secondary-500 group-hover:text-primary-500 transition-all duration-500">
                  {card.icon}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-semibold text-secondary-500 leading-tight mb-5">
                  {card.title}
                </h3>
                
                <p className="text-secondary-500/60 text-[17px] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </section>
  );
}
