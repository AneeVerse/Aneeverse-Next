"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
  { question: "What types of presentations can you design?", answer: "We design a wide range of presentations including pitch decks, sales presentations, internal communications, conference slides, training decks, and executive briefings - all tailored to your business goals and audience." },
  { question: "How does your presentation design process work?", answer: "Our process starts with a strategic briefing to understand your goals and audience, moves into structure and visual concepting, then to design execution and refinement to ensure your deck is polished, clear, and impactful." },
  { question: "Do you work with our existing content or create content from scratch?", answer: "We can work with existing content you provide, and we also offer data visualization, storytelling, and infographic support to strengthen your message visually and narratively." },
  { question: "Can you design presentations in multiple tools (PowerPoint, Google Slides, Keynote)?", answer: "Yes! We create presentation designs compatible with PowerPoint, Google Slides, Keynote, and industry platforms like Figma depending on your preference." },
  { question: "How long does it take to complete a presentation design project?", answer: "Turnaround times vary based on deck complexity, slide count, and revisions needed. We work closely with you to set clear timelines and deliver high-quality designs on schedule." },
  { question: "Can you help visualize complex data or metrics?", answer: "Absolutely - we specialize in data visualization that turns complex charts, tables, and numbers into intuitive, visually engaging graphics your audience can understand at a glance." },
  { question: "Will the presentation reflect my brand identity?", answer: "Yes. We follow your brand guidelines - including colors, fonts, and tone - so your final deck is visually consistent with your overall identity." },
  { question: "What formats will I receive at the end of the project?", answer: "You’ll receive presentation files in your desired formats (e.g., PPTX, PDF, Google Slides) ready for sharing, presenting, or distribution." },
  { question: "Do you offer revisions or iterative feedback rounds?", answer: "Yes. We provide revision cycles as part of our design process to ensure the presentation matches your expectations and messaging needs." },
  { question: "Can you design templates for ongoing use?", answer: "We can create fully branded presentation templates that your team can reuse - saving you time and ensuring consistency across future decks." },
];

export default function PresentationiDesignFAQSection() {
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
          {/* Left Column */}
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

          {/* Right Column */}
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
                    className="mt-2 "
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
