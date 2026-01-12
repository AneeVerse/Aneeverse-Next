"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
  { question: "What is UI, UX & Web Development?", answer: "UI (User Interface) design focuses on how your website looks, while UX (User Experience) ensures it feels intuitive and easy to use. Web development turns design into a functional, responsive site that works across screens and devices." },
  { question: "Why is UX design important for my website?", answer: "Good UX improves how easily visitors find information, complete tasks, and navigate your site - which increases engagement, conversions, and customer satisfaction." },
  { question: "How do you approach the UI/UX and web design process?", answer: "We start with discovery and research, create wireframes and interactive prototypes, refine visual UI design, and then build the final responsive site with testing to ensure usability." },
  { question: "Will my site work on mobile devices?", answer: "Yes - responsive design is a standard part of our process, ensuring your website adapts and performs well on phones, tablets, and desktops." },
  { question: "Do you handle both design and development?", answer: "Yes - we offer end-to-end service from visual UI/UX design to frontend web development so your project is seamless and cohesive from concept to launch." },
  { question: "What tools do you use for design and prototyping?", answer: "Design tools often include industry standards like Figma, Adobe XD, and interactive prototyping tools to visualize layouts and flows before development." },
  { question: "How long does a typical web design project take?", answer: "Timelines depend on scope, complexity, and features, but most projects take several weeks to a few months from planning through development and launch." },
  { question: "Can you redesign an existing website?", answer: "Yes - we can assess your current site’s usability and visual design, then rebuild it to improve performance, engagement, and conversions." },
  { question: "How do you ensure the design is aligned with our brand?", answer: "We incorporate your brand guidelines - including colors, fonts, imagery, and messaging - so the UI design reflects your identity consistently across the site." },
  { question: "Do you support websites after launch?", answer: "Yes - we offer post-launch support including maintenance, updates, performance monitoring, and further UX optimization as your business evolves." },
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

