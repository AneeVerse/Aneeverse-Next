"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
  { question: "What technologies do you use for platform development?", answer: "We work with modern technologies including React, Node.js, Python, PHP, and cloud platforms like AWS, Azure, and Google Cloud." },
  { question: "How long does platform development take?", answer: "Development timelines vary based on complexity, typically ranging from 3-6 months for custom platforms." },
  { question: "Do you provide ongoing maintenance?", answer: "Yes, we offer comprehensive maintenance and support packages to keep your platform running smoothly." },
  { question: "Can you integrate with existing systems?", answer: "Absolutely! We specialize in integrating new platforms with your existing infrastructure and third-party services." },
  { question: "What is included in platform development?", answer: "We handle everything from planning and design to development, testing, deployment, and ongoing support." },
  { question: "Do you offer cloud hosting solutions?", answer: "Yes, we can deploy your platform on cloud infrastructure and manage hosting for optimal performance." },
  { question: "How do you ensure platform security?", answer: "We implement industry-standard security practices including encryption, authentication, and regular security audits." },
];

export default function PlatformDevelopmentFAQSection() {
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

