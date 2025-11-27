"use client";
import React from "react";
import Layout from "../common/Layout";
import { PenTool, Clock, DollarSign, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const HumanCreativity = () => {
    return (
        <div className="bg-[#03151A] py-16 sm:py-24 text-white">
            <Layout>
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-4"
                    >
                        Human Creativity Supported by AI
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-bw-gradual text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight max-w-4xl mx-auto"
                    >
                        Real Minds, Smart <br className="hidden sm:block" /> Tools, Exceptional <br className="hidden sm:block" /> Design
                    </motion.h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column - Large Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-5 bg-[#072d36] rounded-2xl overflow-hidden relative group min-h-[500px] flex flex-col"
                    >
                        {/* Image Section */}
                        <div className="flex-grow relative">
                            <img
                                src="/images/home/human creativity/7dee15b1aae6aab33f6f2c6e02ee72aab8f21a2d.png"
                                alt="Creative Professional"
                                className="w-full h-full object-cover object-top"
                            />



                        </div>

                        {/* Text Content */}
                        <div className="p-8 pt-6 bg-[#072d36]">
                            <h3 className="text-xl sm:text-2xl font-bold mb-3">Quality guaranteed by talent and process</h3>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                Vetted creatives supported by processes and AI tools to deliver every time.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column - 2x2 Grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <FeatureCard
                            icon={<PenTool className="w-6 h-6" />}
                            title="Spin up a creative team fast"
                            description="Low complexity to build from scratch or plug into your current team."
                            delay={0.3}
                        />

                        {/* Card 2 */}
                        <FeatureCard
                            icon={<Clock className="w-6 h-6" />}
                            title="Reliable turnarounds"
                            description="Average 24-hour first drafts, handled with consistency and care."
                            delay={0.4}
                        />

                        {/* Card 3 */}
                        <FeatureCard
                            icon={<DollarSign className="w-6 h-6" />}
                            title="Transparent pricing"
                            description="Build a subscription that matches your current demands."
                            delay={0.5}
                        />

                        {/* Card 4 */}
                        <FeatureCard
                            icon={<Headphones className="w-6 h-6" />}
                            title="Human support, always on"
                            description="Never get stuck on a request. Our support team is here 24/5 to support you and your success."
                            delay={0.6}
                        />
                    </div>
                </div>
            </Layout>
        </div>
    );
};

const FeatureCard = ({ icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="bg-[#072d36] p-8 rounded-2xl flex flex-col items-start hover:bg-[#093540] transition-colors duration-300"
    >
        <div className="mb-6 text-white">
            {icon}
        </div>
        <h4 className="text-xl font-bold mb-3">{title}</h4>
        <p className="text-gray-300 text-sm leading-relaxed">
            {description}
        </p>
    </motion.div>
);

export default HumanCreativity;
