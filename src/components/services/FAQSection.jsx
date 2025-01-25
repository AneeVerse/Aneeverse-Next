"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "What makes Superside's design services different?", answer: "We deliver speedy, high-quality graphic design services through a transparent subscription model." },
  { question: "How does a design subscription work?", answer: "A subscription provides you access to dedicated design resources on a recurring basis." },
  { question: "What is graphic design?", answer: "Graphic design is the art of creating visual content to communicate messages." },
  { question: "What do graphic designers do?", answer: "Graphic designers create visuals that inspire, inform, and captivate audiences." },
  { question: "Who needs graphic design services?", answer: "Anyone looking to enhance their brand's visual identity needs graphic design services." },
  { question: "Do you do custom plans?", answer: "Yes, we offer tailored solutions to meet unique design needs." },
  { question: "What billing options do you offer?", answer: "We offer flexible billing options, including monthly and annual subscriptions." },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-secondary-500 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-md font-light tracking-[2px] mb-1">FAQs</div>
        <h2 className="text-3xl font-bold mb-8">Frequently asked <span className="font-Rock_Salt">questions</span></h2>
        <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
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
                  className="mt-2 text-gray-400"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
