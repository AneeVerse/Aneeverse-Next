"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
  { question: "What's the difference between UI and UX design?", answer: "UI (User Interface) focuses on visual design and aesthetics, while UX (User Experience) focuses on user journey, usability, and overall experience." },
  { question: "What technologies do you use for web development?", answer: "We use modern frameworks like React, Next.js, Vue.js for frontend, and Node.js, Python, PHP for backend development." },
  { question: "How long does a web development project take?", answer: "Timelines vary based on complexity, typically 4-12 weeks for custom web applications." },
  { question: "Do you provide mobile-responsive designs?", answer: "Yes, all our designs are mobile-first and fully responsive across all devices." },
  { question: "Can you redesign existing websites?", answer: "Absolutely! We can redesign and improve existing websites while maintaining functionality." },
  { question: "Do you offer ongoing maintenance?", answer: "Yes, we provide maintenance packages to keep your site updated, secure, and performing optimally." },
  { question: "What is included in UX research?", answer: "UX research includes user interviews, usability testing, persona development, and journey mapping." },
];

export default function UIUXWebDevelopmentFAQSection() {
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

