"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
    { question: "What is Zepto Marketplace Management?", answer: "We help brands navigate the quick commerce landscape by handling everything from vendor onboarding and listing creation to PO management and promotional campaigns on Zepto." },
    { question: "How fast can you get a brand live on Zepto?", answer: "Onboarding timelines depend on category manager approvals, but we streamline the process by having all vendor data, images, and SKU mapping ready for submission from day one." },
    { question: "What is app-optimized content?", answer: "Since quick commerce is mobile-first, we design thumbnail-friendly packshots and concise product titles optimized for small screens and 10-minute delivery decisions." },
    { question: "Do you handle PO fulfillment?", answer: "We provide guidance on PO acceptance workflows, fulfillment timelines, and dispatch coordination to ensure you meet Zepto's strict operational SLAs." },
    { question: "How do you manage inventory levels?", answer: "We implement real-time stock monitoring and replenishment alerts to prevent out-of-stock situations and minimize lost sales in hyperlocal zones." },
];

export default function ZeptoFAQSection() {
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
                                        className="mt-2"
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
