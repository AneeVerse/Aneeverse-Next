"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
  { question: "What is n8n and how does it work?", answer: "n8n is an open-source workflow automation tool that allows you to connect different apps and services to automate tasks. It uses a visual workflow editor where you can drag and drop nodes to create automated processes that trigger actions based on events, schedules, or data changes." },
  { question: "What types of workflows can n8n automate?", answer: "n8n can automate a wide variety of workflows including data synchronization between apps, automated email responses, social media posting, database operations, API integrations, file processing, lead nurturing sequences, and much more. The possibilities are nearly endless with n8n's extensive app integrations." },
  { question: "How long does it take to set up an n8n workflow?", answer: "Simple workflows can be set up in a few hours, while complex multi-step workflows with multiple integrations may take a few days. The timeline depends on the complexity of your requirements, number of apps involved, and any custom logic needed. We'll provide a timeline estimate after analyzing your specific needs." },
  { question: "Do I need technical knowledge to use n8n workflows?", answer: "While n8n has a user-friendly visual interface, setting up complex workflows and integrations typically requires technical knowledge. Our team handles the complete setup, configuration, and maintenance, so you don't need technical expertise. We'll also provide training if you want to manage simple workflows yourself." },
  { question: "Can n8n integrate with my existing tools?", answer: "Yes! n8n supports 500+ app integrations including popular tools like Slack, Google Workspace, Salesforce, HubSpot, databases, APIs, cloud storage, and many more. If your tool has an API, we can likely integrate it with n8n. We'll assess your current tools and create workflows that connect them seamlessly." },
  { question: "How secure are n8n workflows?", answer: "Security is a top priority. We implement secure authentication methods, encrypt sensitive data, set up proper access controls, and follow best practices for API key management. n8n can be self-hosted for maximum security, or we can configure cloud instances with proper security measures." },
  { question: "What happens if a workflow fails?", answer: "We build error handling and retry mechanisms into all workflows. Failed workflows can automatically retry, send notifications, log errors, and fall back to alternative processes. We also set up monitoring and alerting so you're immediately notified of any issues that need attention." },
  { question: "Can workflows be modified after they're set up?", answer: "Absolutely! Workflows are designed to be flexible and can be updated, modified, or extended as your business needs change. We provide ongoing support to adjust workflows, add new steps, integrate additional apps, or optimize existing processes." },
  { question: "How much does n8n workflow automation cost?", answer: "Costs vary based on workflow complexity, number of integrations, and ongoing support needs. Simple workflows start around $1,500, while complex enterprise automation can range up to $10,000+. We provide detailed quotes after understanding your specific requirements. n8n itself is open-source and free to use." },
  { question: "Do you provide training and documentation?", answer: "Yes, we provide comprehensive documentation for all workflows we create, including visual diagrams, step-by-step guides, and troubleshooting tips. We also offer training sessions to help your team understand how workflows operate and how to make simple modifications if needed." }
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

