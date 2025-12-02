"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
  { question: "What are corporate & internal services?", answer: "We design brand guidelines, internal communications, corporate templates, and documentation that maintain consistency within your organization." },
  { question: "How do you ensure brand consistency?", answer: "We create comprehensive brand guidelines and templates that ensure all internal materials follow the same visual standards." },
  { question: "Can you update existing corporate materials?", answer: "Yes, we can refresh existing corporate materials and ensure they align with your current brand guidelines." },
  { question: "What types of internal materials do you design?", answer: "We design internal communications, onboarding materials, training documents, policy manuals, and corporate templates." },
  { question: "How long does corporate design take?", answer: "Timelines vary by scope, typically 4-8 weeks for comprehensive corporate design packages." },
  { question: "Do you provide templates?", answer: "Yes, we create reusable templates for presentations, reports, and internal communications." },
  { question: "Can you help with employee onboarding materials?", answer: "Absolutely! We design engaging onboarding materials that welcome new employees and communicate company culture effectively." },
];

export default function CorporateInternalsFAQSection() {
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

