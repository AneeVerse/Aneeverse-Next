"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
  { question: "What is sales and marketing automation?", answer: "Sales and marketing automation uses software to automatically handle repetitive tasks - like email campaigns, lead nurturing, data updates, and campaign workflows - so your teams focus on strategy and high-value work." },
  { question: "How does automation help my business grow?", answer: "Automation increases efficiency by reducing manual work, improving lead management, speeding follow-ups, and allowing personalized outreach at scale - which can boost productivity and ROI." },
  { question: "What tasks can be automated?", answer: "Common automations include email workflows, lead scoring, segmentation, follow-up reminders, social posting, CRM updates, and campaign performance tracking." },
  { question: "What’s the difference between sales automation and marketing automation?", answer: "Marketing automation focuses on attracting and nurturing leads (like email campaigns and content delivery), while sales automation focuses on converting and managing leads through the sales pipeline (like task reminders and lead follow-ups)." },
  { question: "Do I need a CRM to use marketing automation?", answer: "A CRM isn’t required but highly recommended - integrating automation with a CRM ensures data flows seamlessly between sales and marketing, improving lead handoffs and tracking." },
  { question: "How do automated workflows work?", answer: "Workflows trigger actions based on predefined rules - for example, when a lead fills a form, an automated welcome email may be sent and the lead scored for follow-up." },
  { question: "Can small businesses benefit from automation too?", answer: "Yes - even small teams can save time and improve customer experiences by automating routine tasks like welcome emails or lead follow-ups." },
  { question: "Will automation replace my sales or marketing team?", answer: "No - automation handles repetitive tasks, freeing your team to focus on creative, strategic, and relationship-driven activities. It enhances team effectiveness, not replaces it." },
  { question: "How long before we see results?", answer: "It depends on your workflows and data, but many businesses see improvements in engagement and efficiency within weeks as automated campaigns and handoffs begin working in the background." },
  { question: "Is automation difficult to set up?", answer: "Modern automation tools offer visual workflow builders and templates that make setup easy, even without coding - and integration with CRM platforms streamlines the process further." },
];

export default function SalesMarketingAutomationFAQSection() {
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

