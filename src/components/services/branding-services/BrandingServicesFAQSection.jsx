"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
  { question: "What’s included in a branding system?", answer: "A branding system includes your visual identity elements (logo, colors, typography), brand guidelines, asset libraries, and documented rules for consistent use across every touchpoint. It’s the foundation that ensures your brand looks and feels cohesive everywhere." },
  { question: "What’s the difference between branding and a design system?", answer: "Branding defines your overall identity, personality, and promise. A design system is a structured toolkit of reusable visual and UI elements that help maintain consistency and scalability in digital and product designs. They work together to strengthen your brand presence." },
  { question: "Why does my business need a brand system?", answer: "A brand system ensures consistency and recognition across all customer touchpoints, reduces design confusion, and allows teams to produce on-brand materials quickly. It also strengthens trust and makes your brand more memorable." },
  { question: "What’s the role of brand guidelines?", answer: "Brand guidelines act as a playbook that explains how your logo, colors, typography, imagery, and messaging should be used. Guidelines help internal teams and external partners create consistent assets that align with your brand identity." },
  { question: "Do I need a brand system if we already have a logo?", answer: "Yes - a logo is just one part of your identity. A complete brand system builds around the logo and defines how all visual and verbal elements work together so your brand experience is seamless across platforms." },
  { question: "Can you design merchandise based on my brand system?", answer: "Absolutely - merchandise (like apparel, swag, and promotional items) is created using your brand system so it’s visually consistent and reinforces your identity wherever it’s seen." },
  { question: "What’s the difference between a brand refresh and a full rebrand?", answer: "A brand refresh updates existing visual elements and guidelines to feel more modern or aligned with current goals, while a full rebrand often redefines the brand’s core identity, positioning, and messaging." },
  { question: "What are design systems and how do they help my brand?", answer: "Design systems are structured sets of reusable components and patterns that maintain visual and functional consistency in digital products and interfaces. They help teams design and develop faster and more coherently." },
  { question: "How long does it take to create a full brand system?", answer: "The timeline depends on complexity and scope - from foundational identity elements to full guidelines and asset libraries. Typically, this ranges from a few weeks for core systems to several months for comprehensive ecosystem builds." },
  { question: "How do I maintain brand consistency after the system is built?", answer: "With solid brand guidelines and centralized asset libraries, teams can reference and apply your brand assets correctly. Periodic audits and updates to the system help ensure it stays relevant as your brand evolves." },
];

export default function BrandingServicesFAQSection() {
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

