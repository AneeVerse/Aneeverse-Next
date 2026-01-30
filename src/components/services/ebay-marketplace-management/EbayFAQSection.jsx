"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
    { question: "What is eBay Management?", answer: "We provide end-to-end management of your eBay store, including listing optimization, custom store design, Promoted Listings management, and daily operations handling." },
    { question: "How do you improve eBay search visibility?", answer: "We focus on 'Best Match' SEO by optimizing titles, ensuring 100% item specific completion, mapping to the correct categories, and using high-quality images." },
    { question: "What are eBay Promoted Listings?", answer: "They are advertised listings that help your products stand out. We manage both Standard and Advanced campaigns to scale your traffic profitably while monitoring ad-rate-to-margin ratios." },
    { question: "Do you handle eBay store design?", answer: "Yes, we build branded storefronts and custom HTML listing templates that are mobile-responsive and designed to build buyer trust and drive cross-sells." },
    { question: "How do you manage eBay account health?", answer: "We proactively monitor defect rates, late shipment metrics, and policy compliance, ensuring you maintain 'Top Rated Seller' status whenever possible." },
];

export default function EbayFAQSection() {
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
