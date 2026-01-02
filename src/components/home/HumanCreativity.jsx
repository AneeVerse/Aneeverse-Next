"use client";
import React from "react";
import Layout from "../common/Layout";
import { PenTool, Clock, DollarSign, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const HumanCreativity = () => {
    return (
        <div className="bg-[#03151a] py-12 sm:py-16 text-white">
            <Layout>
                {/* Header */}
                <div className="text-center mb-10 sm:mb-12">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-3"
                    >
                        Human Creativity Supported by AI
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-bw-gradual text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight max-w-3xl mx-auto"
                    >
                        Real Minds, Smart <br className="hidden sm:block" /> Tools, Exceptional <br className="hidden sm:block" /> Design
                    </motion.h2>
                </div>

                {/* Horizontal Scroll on Mobile, Grid on Desktop */}
                <div className="flex lg:grid lg:grid-cols-12 gap-5 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none scrollbar-hide pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
                    {/* Left Column - Large Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02, zIndex: 20, transition: { duration: 0.3 } }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-4 bg-[#072d36] rounded-xl overflow-hidden relative group min-h-[380px] lg:min-h-[420px] flex flex-col flex-shrink-0 w-[80vw] sm:w-[340px] lg:w-auto snap-center"
                    >
                        <div className="absolute left-0 top-[85%] w-[2px] h-[80px] bg-gradient-to-b from-transparent via-[#88d7f0] to-transparent opacity-0 group-hover:opacity-100 group-hover:top-[10%] transition-all duration-1000 ease-in-out z-10" />
                        {/* Image Section */}
                        <div className="flex-grow relative h-[200px] lg:h-auto">
                            <img
                                src="/images/home/human creativity/7dee15b1aae6aab33f6f2c6e02ee72aab8f21a2d.png"
                                alt="Creative Professional"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="p-6 sm:p-8 bg-[#072d36]">
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-tight">Quality guaranteed by talent and process</h3>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                Vetted creatives supported by processes and AI tools to deliver every time.
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature Cards - All 4 cards in 2x2 grid on desktop, first 2 cards in mobile scroll */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 flex-shrink-0 w-[80vw] sm:w-[380px] lg:w-auto snap-center">
                        <FeatureCard
                            icon={<PenTool className="w-8 h-8" />}
                            title="Spin up a creative team fast"
                            description="Low complexity to build from scratch or plug into your current team."
                            delay={0.3}
                            isInGrid={true}
                        />

                        <FeatureCard
                            icon={<Clock className="w-8 h-8" />}
                            title="Reliable turnarounds"
                            description="Average 24-hour first drafts, handled with consistency and care."
                            delay={0.4}
                            isInGrid={true}
                        />

                        {/* These two cards show in grid on desktop, hidden in this container on mobile */}
                        <FeatureCard
                            icon={<DollarSign className="w-8 h-8" />}
                            title="Transparent pricing"
                            description="Build a subscription that matches your current demands."
                            delay={0.5}
                            isInGrid={true}
                            extraClassName="hidden lg:flex"
                        />

                        <FeatureCard
                            icon={<Headphones className="w-8 h-8" />}
                            title="Human support, always on"
                            description="Never get stuck on a request. Our support team is here 24/5 to support you and your success."
                            delay={0.6}
                            isInGrid={true}
                            extraClassName="hidden lg:flex"
                        />
                    </div>

                    {/* Feature Cards - Second Pair (only visible on mobile as separate scroll item) */}
                    <div className="lg:hidden grid grid-cols-1 gap-3 flex-shrink-0 w-[80vw] snap-center">
                        <FeatureCard
                            icon={<DollarSign className="w-8 h-8" />}
                            title="Transparent pricing"
                            description="Build a subscription that matches your current demands."
                            delay={0.5}
                            isInGrid={true}
                        />

                        <FeatureCard
                            icon={<Headphones className="w-8 h-8" />}
                            title="Human support, always on"
                            description="Never get stuck on a request. Our support team is here 24/5 to support you and your success."
                            delay={0.6}
                            isInGrid={true}
                        />
                    </div>
                </div>
            </Layout>
        </div>
    );
};

const FeatureCard = ({ icon, title, description, delay, isInGrid = false, extraClassName = '' }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, zIndex: 20, transition: { duration: 0.3 } }}
        transition={{ duration: 0.5, delay }}
        className={`bg-[#072d36] rounded-xl flex flex-col items-start hover:bg-[#093540] transition-colors duration-300 group relative overflow-hidden ${isInGrid ? 'w-full min-h-[160px] sm:min-h-[200px] lg:min-h-[220px] p-6 sm:p-8' : 'flex-shrink-0 w-[80vw] sm:w-[320px] lg:w-auto snap-center min-h-[220px] p-8'
            } ${extraClassName}`}
    >
        <div className="absolute left-0 top-[85%] w-[2px] h-[80px] bg-gradient-to-b from-transparent via-[#88d7f0] to-transparent opacity-0 group-hover:opacity-100 group-hover:top-[10%] transition-all duration-1000 ease-in-out z-10" />
        <div className={`text-white ${isInGrid ? 'mb-4 sm:mb-6' : 'mb-6'}`}>
            {icon}
        </div>
        <h4 className={`font-bold mb-3 leading-tight ${isInGrid ? 'text-lg sm:text-xl lg:text-2xl' : 'text-xl sm:text-2xl sm:mb-4'}`}>{title}</h4>
        <p className={`text-gray-300 leading-relaxed ${isInGrid ? 'text-xs sm:text-sm lg:text-base' : 'text-sm sm:text-base'}`}>
            {description}
        </p>
    </motion.div>
);

export default HumanCreativity;
