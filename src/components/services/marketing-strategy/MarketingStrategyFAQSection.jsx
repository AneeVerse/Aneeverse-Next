"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
  { question: "What exactly is a marketing strategy service?", answer: "A marketing strategy service helps define what your business wants to achieve, who you’re targeting, and how your marketing efforts will work together to drive growth - aligning campaign plans to business goals." },
  { question: "Why do I need a marketing strategy before creating campaigns?", answer: "A strategy acts as a blueprint that guides marketing decisions. Without it, teams may execute tactics without direction, which leads to inconsistent messaging and wasted budget." },
  { question: "How does a marketing strategy improve results?", answer: "By clarifying goals, target audiences, value propositions, and key performance indicators, a strategy ensures your marketing delivers measurable and relevant business outcomes, not just activity." },
  { question: "What’s the difference between a marketing plan and a marketing strategy?", answer: "A strategy defines why and what you’re trying to achieve. A plan outlines how you’ll do it - the specific channels, timelines, tactics, and workflows. The strategy informs the plan." },
  { question: "How do you develop a marketing strategy for a business?", answer: "We start with discovery to understand your goals and audience, then conduct research on competitors and opportunities. From there, we map strategic positioning, target segments, messaging priorities, and success measures." },
  { question: "Will you help with target audience definition?", answer: "Yes - part of strategy work involves identifying and segmenting your ideal customers so messaging and campaigns resonate with the right people." },
  { question: "How long does it take to build a marketing strategy?", answer: "The timeline varies with depth and scope, but most comprehensive strategic plans take a few weeks from initial briefing to final documentation." },
  { question: "Do you provide ongoing strategic support after the initial plan?", answer: "Yes - beyond initial strategy creation, we can support execution, monitoring, and iterative optimization based on performance insights." },
  { question: "Can marketing strategy help with branding and messaging?", answer: "Absolutely - a good strategy clarifies your brand’s differentiation, value proposition, and the stories you tell across channels, helping ensure consistent and compelling communication." },
  { question: "How do you measure the success of a marketing strategy?", answer: "Success is measured against predetermined goals and KPIs - such as brand awareness, lead quality, conversion rates, or revenue growth - with regular tracking and optimization." },
];

export default function MarketingStrategyFAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-secondary-500 text-primary-500 py-16">
      <Layout>
        <div className="text-md font-light tracking-[2px] mb-3">FAQs</div>
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          Frequently <span className="font-Rock_Salt">asked questions</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left Column */}
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
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
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
                    className="mt-2"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
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
                  onClick={() => toggleFAQ(index + Math.ceil(faqs.length / 2))}
                  className="w-full flex justify-between items-center text-left text-lg font-medium"
                >
                  {faq.question}
                  <motion.div
                    animate={{
                      rotate: activeIndex === index + Math.ceil(faqs.length / 2) ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                {activeIndex === index + Math.ceil(faqs.length / 2) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 "
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
