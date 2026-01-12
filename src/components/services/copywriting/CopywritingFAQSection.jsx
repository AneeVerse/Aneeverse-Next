"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
  { question: "What types of copywriting services do you offer?", answer: "We provide a range of copywriting services including website copy, landing pages, product & feature copy, SEO-optimized content, email copy, brand storytelling, and campaign messaging tailored to your goals and audience." },
  { question: "What’s the difference between copywriting and content writing?", answer: "Copywriting focuses on persuasive messaging that drives action (like conversions and sales), whereas content writing is more about engaging and informing audiences. Both can overlap, but copywriting is specially crafted to influence behavior." },
  { question: "How do you ensure the copy aligns with our brand voice?", answer: "We begin with research and discovery to understand your brand values, tone, audience, and goals. This foundation helps us write in a voice that feels authentic and consistent with your brand identity." },
  { question: "Do you write SEO-optimized copy?", answer: "Yes - we can incorporate SEO strategies into your copy to help improve search visibility while still keeping the message clear and persuasive for your audience." },
  { question: "How does the copywriting process work?", answer: "Our process typically starts with a briefing to gather business and audience insights, followed by research, drafting, review and revisions, and final delivery - ensuring your needs are met at every step." },
  { question: "What information do you need from us to start a project?", answer: "We’ll ask for details about your business, target audience, objectives, brand voice, existing content, and key messages you want highlighted. This helps us craft copy that’s effective and aligned with your goals." },
  { question: "Can you write copy for different platforms (web, email, ads)?", answer: "Yes - we specialize in creating platform-specific copy that’s optimized for its channel, whether it’s a website, email sequence, campaign ad, or landing page." },
  { question: "How do revisions work?", answer: "After delivering a draft, you’ll have the opportunity to review and request revisions to refine tone, messaging, or structure until it fully meets your expectations." },
  { question: "Do you help with messaging strategy as well as writing?", answer: "Yes - strategic messaging is part of our approach. We focus on identifying your unique value and crafting copy that communicates it effectively to your target audience." },
  { question: "How long does it take to complete a copywriting project?", answer: "Timelines vary based on the scope and complexity of the project. During the briefing phase, we’ll agree on a schedule that includes drafting and review periods to ensure quality delivery." },
];

export default function CopywritingFAQSection() {
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

