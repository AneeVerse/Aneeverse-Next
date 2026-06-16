"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Layout from "@/components/common/Layout";

const faqs = [
  {
    question: "Do we need all five services?",
    answer:
      "No. Start with one. The consultation tells you which will have the most impact right now.",
  },
  {
    question: "We've tried agencies before. Why is this different?",
    answer:
      "Most agencies work on monthly cycles. We run weekly sprints – problems get fixed in days, not found in next month's report.",
  },
  {
    question: "What if we need more than one service at once?",
    answer:
      "One PM coordinates across services so timelines and deliverables are aligned.",
  },
  {
    question: "What budget do we need?",
    answer:
      "Minimum 20,000 INR/month ad spend for Google or Meta. SEO, website, and platform pricing is confirmed in the free consultation.",
  },
  {
    question: "How fast will we see results?",
    answer:
      "Ads: leads within 2–4 weeks. SEO: rankings in 4–8 weeks, traffic in 3–6 months. Website: live in 4–6 weeks.",
  },
  {
    question: "Do you work outside India?",
    answer: "Yes – India, US, UK, and UAE. All communication via WhatsApp and email.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-[#03151a] py-20 md:py-32 overflow-hidden">
      <Layout>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#88d7f0] mb-4"
            >
              FAQ
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-bw-gradual text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 uppercase"
            >
              Questions Clients Ask{" "}
              <span className="inline-block bg-[#FF6B00] text-[#03151a] px-4 py-1 rounded-xl text-[0.7em] mt-3 font-bold tracking-tight">
                Before Getting Started
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block"
            >
              <a
                href="https://wa.me/919152755529"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white/50 hover:text-[#88d7f0] transition-colors font-medium text-sm"
              >
                Still have questions?{" "}
                <span className="text-[#88d7f0] border-b border-[#88d7f0]/30 pb-0.5">Chat on WhatsApp →</span>
              </a>
            </motion.div>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#072d36] border-[#88d7f0]/30"
                    : "bg-white/[0.02] border-white/[0.05] hover:border-white/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <span className="text-base md:text-lg font-bold text-white pr-8">{faq.question}</span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeIndex === index ? "bg-[#88d7f0] text-[#03151a]" : "bg-white/5 text-white/40"
                    }`}
                  >
                    {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                        <div className="h-px w-full bg-white/5 mb-6" />
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            <div className="lg:hidden pt-8 text-center">
              <a
                href="https://wa.me/919152755529"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white/50 hover:text-[#88d7f0] transition-colors font-medium text-sm"
              >
                Still have questions?{" "}
                <span className="text-[#88d7f0] border-b border-[#88d7f0]/30 pb-0.5">Chat on WhatsApp →</span>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}
