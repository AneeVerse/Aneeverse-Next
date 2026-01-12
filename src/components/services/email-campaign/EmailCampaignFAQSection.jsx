"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
  { question: "What are email design services?", answer: "Email design services help you create visually appealing, on-brand, and strategically structured email templates and layouts that increase engagement and guide readers toward key actions." },
  { question: "Why does good email design matter?", answer: "Well-designed emails stand out in crowded inboxes, improve readability and engagement, and support your campaign goals - whether that’s driving clicks, sales, or retention." },
  { question: "What is included in an email campaign service?", answer: "Campaign services typically include template design, content layout, audience segmentation, delivery setup, testing, and performance tracking to ensure your messages reach the right people at the right time." },
  { question: "Can you design emails that work across all devices?", answer: "Yes - responsive email design ensures your messages display correctly on mobile phones, tablets, and desktops, enhancing user experience and campaign effectiveness." },
  { question: "What tools do you use for designing and sending email campaigns?", answer: "We work with modern email campaign platforms and tools that support design, automation, list management, and performance analytics - from drag-and-drop editors to more customizable systems like Listmonk." },
  { question: "Do you help with campaign strategy and audience targeting?", answer: "Yes - part of our service includes planning the campaign flow, selecting segments of your audience, and timing sends to align with your marketing goals." },
  { question: "Can you manage large subscriber lists?", answer: "Absolutely - whether you have a small audience or millions of subscribers, list management tools can handle segmentation, custom fields, and performance tracking to support scalable campaigns." },
  { question: "What kinds of email campaigns can you create?", answer: "We can design newsletters, promotional campaigns, onboarding sequences, lifecycle messaging, automated drip campaigns, and event-driven campaigns (like launches or seasonal promotions)." },
  { question: "How do you measure email campaign success?", answer: "We monitor key metrics such as open rates, click-through rates, conversions, bounce rates, and engagement trends to help you understand performance and optimize future sends." },
  { question: "Can you help with automating email workflows (like welcome series)?", answer: "Yes - we create automated sequences (such as welcome emails, drip campaigns, and triggered replies) that send based on user behavior or specific actions to nurture your audience without manual effort." },
];

export default function EmailCampaignFAQSection() {
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
