"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
    { question: "What is Etsy Management?", answer: "We provide end-to-end management of your Etsy shop, including listing tag & SEO optimization, custom storefront design, Etsy Ads management, and listing creation." },
    { question: "How do you improve Etsy search visibility?", answer: "We focus on Etsy's search algorithm by optimizing titles, attributes, and most importantly, utilizing all 13 tags with high-intent keywords. We also optimize listing descriptions and shop sections." },
    { question: "What is Etsy Ads management?", answer: "Etsy Ads help put your products in front of buyers. We optimize your daily budgets, bids, and targeting, and identify search queries that convert to maximize return on ad spend (ROAS)." },
    { question: "Do you handle custom shop branding?", answer: "Yes, we design professional shop banners, icons, about sections, and custom listing images (lifestyle/infographic) that align with Etsy's aesthetic and convert visitors into buyers." },
    { question: "How do you handle order fulfillment and shipping profiles?", answer: "We help configure shipping profiles, set up variations, track production times, and coordinate case responses so your shop stays in compliance with Etsy's Seller Standards." },
];

export default function EtsyFAQSection() {
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
                                        className="mt-2 text-gray-600"
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
                                        className="mt-2 text-gray-600"
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
