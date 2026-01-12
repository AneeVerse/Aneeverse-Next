"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
  { question: "What is AI SEO, and how is it different from traditional SEO?", answer: "AI SEO refers to optimizing content not just for traditional search engine rankings, but also for visibility in AI-driven search experiences, where responses are generated or synthesized by AI models rather than just ranked as links. Traditional SEO focuses on ranking in search engine results pages (SERPs) whereas AI SEO prioritizes how content is interpreted and surfaced by AI tools." },
  { question: "What does GEO (Generative Engine Optimization) mean?", answer: "GEO is the practice of adapting and optimizing your digital content so that it is more likely to be included by generative AI systems like ChatGPT, Google Gemini, or Perplexity when they generate answers to user queries. It’s about being cited or used as a source within AI-produced responses." },
  { question: "What is AEO (Answer Engine Optimization)?", answer: "AEO focuses on structuring your content so that it can be directly presented as an answer by AI-powered “answer engines” - including featured snippets, voice assistants, and chat-like responses - rather than just a traditional link search result." },
  { question: "What is AIO (AI Optimization)?", answer: "AIO refers to optimizing digital content and signals to perform well in AI-centric search environments, including both generative AI engines and traditional search interfaces that use AI technologies for summaries or direct answer boxes. This broad category can include GEO and AEO tactics under the same umbrella." },
  { question: "Do I still need traditional SEO if I optimize for AI search?", answer: "Yes. Traditional SEO remains foundational because it ensures your core visibility and authority in search engines like Google and Bing. However, optimizing for AI search builds on that foundation by improving your chances of being referenced, cited, and surfaced in AI-generated results." },
  { question: "How does AI SEO help my business?", answer: "AI SEO helps your brand appear not only in search rankings but also in AI-driven answers and zero-click search experiences, which increasingly influence how people find information online. This can improve visibility, brand awareness, and traffic from new discovery channels." },
  { question: "How do you optimize content for AI search engines?", answer: "Optimization typically includes clear, comprehensive content, use of structured data (schema), entity-rich topics, answers to common questions, and trust signals that AI models look for when deciding what to include in generative responses." },
  { question: "Can AI SEO help with voice search or assistant answers?", answer: "Yes - optimizing for conversational queries and structured answers helps content show up in voice responses, chatbots, and other virtual assistant results, which are part of the larger AI search ecosystem." },
  { question: "How long does it take to see results from AI SEO efforts?", answer: "Results vary by industry, competition, and the current strength of your content, but because this involves strategic content alignment and visibility training across multiple platforms, you typically see meaningful performance improvements over weeks to months, similar to advanced SEO strategies." },
  { question: "Is AI SEO only for large companies or tech brands?", answer: "No - any brand that wants to appear where users are asking questions (including AI chatbots, voice search, and generative platforms) can benefit from AI SEO practices. Businesses of all sizes can harness these strategies to improve visibility in the evolving search landscape." },
];

export default function AISEOGeoAEOAIOFAQSection() {
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

