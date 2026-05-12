"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/common/Layout";

const faqs = [
  {
    question: "What platforms do you manage?",
    answer:
      "We manage Amazon, eBay, and Etsy – all under one PM, one process, one weekly update. Whether you sell on one platform or all three, you get consistent execution and reporting every week.",
  },
  {
    question: "How quickly can you start managing my store?",
    answer:
      "Your store goes live within 7 days of onboarding. In the first week, we audit your catalog, identify high-leverage fixes, and start executing. You do not wait a month for a strategy deck – we work from day one.",
  },
  {
    question: "Do I get a dedicated account manager?",
    answer:
      "Yes. Every client gets one dedicated PM who owns everything – your listings, ads, account health, and weekly communication. You message them directly on WhatsApp. No support queues, no ticket systems.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "Sellers who hand us full management have seen 35%+ organic ranking growth within 90 days, conversion rates lift by 2.5x with optimized listings, and ad spend waste drop by 40%. Results are tracked from day one with weekly scorecards.",
  },
  {
    question: "How does your reporting work?",
    answer:
      "Every Monday, you get a clear update with three numbers: where your rankings moved, what your ads returned, and what we are fixing this week. No slides, no lengthy reports – just actionable data.",
  },
  {
    question: "What if I only need help with one area like PPC or listings?",
    answer:
      "While we offer full store management, we can also focus on specific areas like PPC campaign management, listing optimization, or account health monitoring. During the free audit, we will identify exactly where the highest-leverage improvements are.",
  },
  {
    question: "Is the store audit really free?",
    answer:
      "Yes, completely free with no commitment. We review your store, identify the specific gaps holding your revenue back, and show you exactly what your store could look like in 90 days. No sales pitch required.",
  },
  {
    question: "How do you handle account health issues?",
    answer:
      "We monitor account health daily – policy flags, suppression alerts, defect rate spikes. By the time most sellers notice a problem, we have already fixed it. Your account stays clean without you checking it.",
  },
];

export default function AdsEcommerceFAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-secondary-500 text-primary-500 py-16">
      <Layout>
        <div className="text-md font-light tracking-[2px] mb-3">FAQs</div>
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          Frequently{" "}
          <span className="font-Rock_Salt">asked questions</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border-b border-gray-700 pb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left text-lg font-medium"
                >
                  {faq.question}
                  <motion.div
                    animate={{
                      rotate: activeIndex === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-primary-500/70"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border-b border-gray-700 pb-4"
              >
                <button
                  onClick={() =>
                    toggleFAQ(index + Math.ceil(faqs.length / 2))
                  }
                  className="w-full flex justify-between items-center text-left text-lg font-medium"
                >
                  {faq.question}
                  <motion.div
                    animate={{
                      rotate:
                        activeIndex ===
                        index + Math.ceil(faqs.length / 2)
                          ? 180
                          : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                {activeIndex ===
                  index + Math.ceil(faqs.length / 2) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-primary-500/70"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
