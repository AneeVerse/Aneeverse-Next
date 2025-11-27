"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const WeRecommend = () => {
    const cards = [
        {
            id: 1,
            category: "CREATIVITY",
            title: "Illustration vs. photography: Which is better for your advertising campaigns?",
            image: "/images/home/we recommend/01_2_43dc6e305a.png",
            bgColor: "#072d36",
            textColor: "white"
        },
        {
            id: 2,
            category: "BUSINESS TIPS",
            title: "Top Design Subscription Services Compared to Design Pickle",
            image: "/images/home/we recommend/Comparison_Blog_Header_Image_a5cc660fd9.png",
            bgColor: "#072d36",
            textColor: "white"
        },
        {
            id: 3,
            category: "B2B",
            title: "How ShiftUp scaled their visual identity with Design Pickle",
            image: "/images/home/we recommend/shift_up_ai_cs_image_1_6a853c0fe2.png",
            bgColor: "#072d36",
            textColor: "white"
        }
    ];

    return (
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-[#03151a] relative overflow-hidden">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-10 md:mb-12">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-gray-400 text-xs md:text-sm mb-2 tracking-widest uppercase">
                            GOT TIME?
                        </p>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                            WE RECOMMEND
                        </h2>
                    </div>
                    <button className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#072d36] hover:bg-teal-700 text-white text-sm rounded-full transition-all duration-300 hover:gap-3 group mt-8">
                        <span className="font-medium">View all</span>
                    </button>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {cards.map((card) => (
                        <a
                            key={card.id}
                            href="#"
                            className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                            style={{ backgroundColor: card.bgColor }}
                        >
                            {/* Card Container */}
                            <div className="relative flex flex-col h-[480px]">
                                {/* Image Section - Takes most of the card */}
                                <div className="relative flex-1 overflow-hidden">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content Section - Compact bottom section */}
                                <div className="p-6 pb-7">
                                    <div className="mb-3">
                                        <span
                                            className="inline-block text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm"
                                            style={{ color: card.textColor }}
                                        >
                                            {card.category}
                                        </span>
                                    </div>
                                    <h3
                                        className="text-base md:text-lg font-semibold leading-snug"
                                        style={{ color: card.textColor }}
                                    >
                                        {card.title}
                                    </h3>
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile View All Button */}
            <div className="md:hidden mt-8 flex justify-center">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-sm rounded-full transition-all duration-300">
                    <span className="font-medium">View all</span>
                </button>
            </div>
        </section>
    );
};

export default WeRecommend;
