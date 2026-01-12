"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
  { question: "What is ebook design?", answer: "Ebook design is the process of formatting and designing digital publications so they’re visually appealing, easy to read, and optimized for viewing on computers, tablets, and other devices. It includes typography, layout, graphics, and consistent branding throughout." },
  { question: "What is digital report design?", answer: "Digital report design focuses on creating engaging reports that present information clearly and attractively on screens, using charts, visuals, imagery, and layout choices that help readers absorb content effectively." },
  { question: "What types of print design do you offer?", answer: "We provide comprehensive print design services including brochures, booklets, manuals, posters, annual reports, and other physical collateral designed to communicate your message with crisp visuals and strong branding." },
  { question: "Why does good ebook or report design matter?", answer: "Well-designed ebooks and reports enhance readability, make complex information easier to understand, and help maintain your audience’s attention. They also reinforce professionalism and strengthen your brand’s credibility." },
  { question: "Can you design both digital and print versions of the same document?", answer: "Yes - we can design documents that work beautifully as digital ebooks/reports and as high-quality printed materials, ensuring visual consistency and optimal formatting for each medium." },
  { question: "What formats will my final ebook or report be delivered in?", answer: "Final deliverables can include PDF for print, interactive digital versions optimized for web viewing, and other formats based on your needs (e.g., flipbook, fixed layout)." },
  { question: "Do you help with data visualization and charts?", answer: "Yes - we transform complex data into clear, compelling charts, infographics, and visual elements that make insights easy to understand and visually engaging." },
  { question: "What makes your ebook and report design different?", answer: "Our approach prioritizes both storytelling and visual experience - combining strategic layout, branded graphics, and logical flow so readers engage with your content rather than skim past it." },
  { question: "How do I get started with a print or ebook design project?", answer: "Start by sharing your content, goals, audience info, and branding guidelines. From there, we’ll work with you to define structure, design direction, and timelines." },
  { question: "Can you create custom templates for ongoing ebook or report needs?", answer: "Yes - we can build reusable templates that maintain brand consistency and make future documents faster and easier to produce." },
];

export default function EbookDigitalReportFAQSection() {
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

