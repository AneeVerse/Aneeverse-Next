"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
  { question: "What kinds of ad creative services do you offer?", answer: "We provide a full range of ad creative services including static and animated ads, display advertising, video production, campaign concepting, multi-format adaptation, and performance-driven creative variants tailored to your goals and platforms." },
  { question: "How does your ad creative process work?", answer: "Our workflow starts with a discovery brief, moves into concept and design, then adapts assets for all formats you need. Finally, we deliver multi-version variants ready for testing and optimization." },
  { question: "Can you make ads that work across multiple platforms (social, display, video, etc.)?", answer: "Yes - all our ad creative is designed with platform specifications in mind so your campaign looks native and performs well on each channel, from social feeds to programmatic display and streaming platforms." },
  { question: "What do you need from us to get started?", answer: "You’ll start by sharing your goals, target audience, brand guidelines, and any existing assets. The more context you provide, the better we can tailor creative to your needs." },
  { question: "How long does it take to create ad creative?", answer: "Timelines vary based on the scope and formats required, but our streamlined creative process is built for fast, consistent delivery - even across large campaigns that need many versions." },
  { question: "Do you provide multiple versions so we can A/B test creative?", answer: "Yes. Part of our service includes performance-driven A/B testing variants to help you evaluate what works best and avoid creative fatigue over time." },
  { question: "Will my ads stay consistent with our branding?", answer: "Absolutely - we use your brand toolkit and guidelines to ensure visual and messaging consistency across all ad formats and campaign variants." },
  { question: "Can you help improve underperforming ads?", answer: "Yes - we review existing creative, identify performance issues, and redesign assets or concepts to better align with your audience and goals." },
  { question: "Do you include strategy in your ad creative service?", answer: "Our creative includes strategic concepting and messaging so that ads are not only visually strong but also aligned with your campaign objectives and audience insights." },
  { question: "How are your services priced?", answer: "Pricing depends on scope, volume, formats, and whether you need one-off work or ongoing creative support. Contact us for a custom quote and scope based on your needs." },
];

export default function AdCreativeFAQSection() {
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
                    className="mt-2"
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

