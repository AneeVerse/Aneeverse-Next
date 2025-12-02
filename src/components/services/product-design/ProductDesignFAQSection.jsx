"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
  { question: "What is included in product design services?", answer: "We handle concept development, industrial design, prototyping, 3D modeling, user research, and design for manufacturing." },
  { question: "Do you work with physical and digital products?", answer: "Yes, we design both physical products and digital products including apps and software interfaces." },
  { question: "How long does product design take?", answer: "Timelines vary by complexity, typically 6-12 weeks from concept to production-ready design." },
  { question: "Do you provide prototyping services?", answer: "Yes, we create prototypes to test and validate designs before moving to production." },
  { question: "Can you help with manufacturing?", answer: "We design products optimized for manufacturing and can connect you with manufacturing partners." },
  { question: "What file formats do you provide?", answer: "We provide CAD files, 3D models, technical drawings, and all necessary documentation for manufacturing." },
  { question: "Do you conduct user testing?", answer: "Yes, we conduct user research and testing to ensure products meet user needs and expectations." },
];

export default function ProductDesignFAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => { setActiveIndex(activeIndex === index ? null : index); };

  return (
    <div className="bg-secondary-500 text-primary-500 py-16">
      <Layout>
        <div className="text-md font-light tracking-[2px] mb-3">FAQs</div>
        <h2 className="text-3xl md:text-5xl font-bold mb-16">Frequently <span className="font-Rock_Salt">asked questions</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }} className="border-b border-gray-700 pb-4">
                <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center text-left text-lg font-medium">
                  {faq.question}
                  <motion.div animate={{ rotate: activeIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }}><ChevronDown className="w-5 h-5" /></motion.div>
                </button>
                {activeIndex === index && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="mt-2">{faq.answer}</motion.div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }} className="border-b border-gray-700 pb-4">
                <button onClick={() => toggleFAQ(index + Math.ceil(faqs.length / 2))} className="w-full flex justify-between items-center text-left text-lg font-medium">
                  {faq.question}
                  <motion.div animate={{ rotate: activeIndex === index + Math.ceil(faqs.length / 2) ? 180 : 0 }} transition={{ duration: 0.2 }}><ChevronDown className="w-5 h-5" /></motion.div>
                </button>
                {activeIndex === index + Math.ceil(faqs.length / 2) && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="mt-2">{faq.answer}</motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

