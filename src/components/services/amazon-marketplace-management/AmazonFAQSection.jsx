"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
    { question: "What is Amazon Marketplace Management?", answer: "It's a comprehensive service where we handle everything from listing optimization and PPC ads to inventory planning and account health monitoring so you can focus on growth." },
    { question: "How do you improve listing conversion rates?", answer: "We use SEO-optimized titles, high-converting bullet points, A+ content design, and backend keyword strategies to make your products more discoverable and persuasive." },
    { question: "Can you help with FBA shipment planning?", answer: "Yes, we assist with box content plans, FNSKU labels, and navigating the seller central shipping workflow to ensure your inventory reaches Amazon safely." },
    { question: "How do you manage Amazon PPC costs?", answer: "We optimize bids weekly, harvest high-converting search terms into new campaigns, and implement negative keywords to reduce wasted spend and improve ACoS/TACoS." },
    { question: "Is account health monitoring included?", answer: "Absolutely. We proactively track performance metrics, policy alerts, and case logs to ensure your account remains in good standing and avoid suppressions." },
];

export default function AmazonFAQSection() {
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
