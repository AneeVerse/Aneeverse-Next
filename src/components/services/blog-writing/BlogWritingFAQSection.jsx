"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
  { question: "What exactly are SEO blog writing services?", answer: "SEO blog writing services create well-written, search-optimized blog posts that help your site rank higher on search engines, attract organic traffic, and educate or engage your target audience." },
  { question: "How can blog writing improve my website’s SEO?", answer: "Regular, relevant blog content helps search engines understand your topics better, increases keyword visibility, and gives you more opportunities to rank for questions your audience is searching for." },
  { question: "Do you handle keyword research and SEO optimization?", answer: "Yes - professional blog writing includes keyword research, SEO-friendly structure, natural keyword placement, and on-page optimization so each post is primed to perform in search engines." },
  { question: "What types of blog content can you create?", answer: "We can write how-to articles, list posts, thought leadership content, industry analysis, case studies, and long-form resources - all tailored to your audience and SEO goals." },
  { question: "How do you ensure content resonates with my audience?", answer: "Our process begins with understanding your brand, target audience needs, and search intent so the content answers real questions and keeps readers engaged." },
  { question: "Can blog writing services help with traffic and lead generation?", answer: "Yes - strategic, SEO-focused blogging attracts relevant visitors over time and can convert them into leads by building trust and addressing their needs." },
  { question: "How long does it take to get blog posts written?", answer: "Turnaround depends on scope and volume. Some services can deliver high-quality blog posts in a few days, with larger content calendars delivered on a monthly schedule." },
  { question: "Will you revise content if I need changes?", answer: "Yes - most professional blog writing plans include revision rounds so the final content reflects your voice, goals, and feedback." },
  { question: "Do you provide content calendars or topic planning?", answer: "Yes - many services offer editorial planning so you have a strategic schedule of blog topics aligned with your SEO and business objectives." },
  { question: "Is this service suitable for any industry?", answer: "Yes - professional SEO blog writing can be customized to any niche or industry, from tech and B2B to health, ecommerce, and beyond, with expert writers adapting tone and research accordingly." },
];

export default function BlogWritingFAQSection() {
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
