"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
  { question: "What is n8n and why should I use it?", answer: "n8n is an open-source workflow automation platform that lets you visually connect apps, APIs, and data sources to automate repetitive tasks without heavy coding - helping your business save time and reduce errors." },
  { question: "How does n8n workflow automation work?", answer: "Workflows are built using a visual editor where you link “nodes” (actions and triggers) that define the flow of data and tasks between systems, such as syncing data, sending notifications, or updating records." },
  { question: "What can n8n automation help my business do?", answer: "n8n can automate tasks like lead syncing, report generation, email/SMS triggers, data movements, approval chains, system alerts, and AI-enhanced decision steps - eliminating manual repetition." },
  { question: "How long does it take to build automated workflows?", answer: "Generally, workflow setup depends on complexity; simple automations can often be completed in about 1–2 weeks, while more complex, multi-system workflows may take longer." },
  { question: "Can n8n integrate with my existing systems and tools?", answer: "Yes - n8n supports connections with hundreds of apps and systems. It can integrate tools like CRMs, communication platforms, databases, and custom APIs to automate cross-system processes." },
  { question: "Is n8n suitable for enterprise-level automation?", answer: "Yes - enterprise workflow automation with n8n includes strategic planning, scalable workflow design, performance testing, and integrations built to support business growth and complex operational needs." },
  { question: "Do you offer custom nodes and advanced automation logic?", answer: "Yes - custom node development extends n8n’s capabilities to integrate unique internal tools or external APIs, making your workflows more powerful and tailored to your use case." },
  { question: "What about data security and control?", answer: "n8n supports self-hosting or secure managed deployments, letting you choose where your workflows run and how data is protected, which is ideal for sensitive business processes." },
  { question: "Can you integrate AI into n8n workflows?", answer: "Yes - workflows can include AI logic and integrations, enabling smarter automations such as predictive triggers or data transformations using AI tools." },
  { question: "Will my team be able to manage workflows after setup?", answer: "Yes - services often include training and documentation so your team can monitor, refine, and operate automated workflows independently as your needs evolve." },
];

export default function N8nWorkflowsFAQSection() {
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
  )
}

