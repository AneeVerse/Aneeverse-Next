"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
  { question: "What types of ad creatives do you design?", answer: "We design social media ads, display ads, video ads, banner ads, retargeting ads, and native ads for all major platforms." },
  { question: "How long does it take to create ad creatives?", answer: "Typically 2-5 business days depending on the complexity and number of variations needed." },
  { question: "Do you optimize ads for different platforms?", answer: "Yes, we create platform-specific optimizations for Facebook, Instagram, Google Ads, LinkedIn, and more." },
  { question: "Can you help with A/B testing?", answer: "Absolutely! We design multiple variations and help you test which creatives perform best." },
  { question: "What file formats do you provide?", answer: "We provide all standard formats including JPG, PNG, MP4, and platform-specific formats as needed." },
  { question: "Do you create video ad content?", answer: "Yes, we produce engaging video ad content including motion graphics and animated ads." },
  { question: "How do you ensure ad creatives convert?", answer: "We combine data-driven insights with creative best practices to design ads that drive action and conversions." },
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

