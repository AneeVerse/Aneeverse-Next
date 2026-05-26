"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingCart, SquareCode, Search, Megaphone, PenTool, FileText, 
  Bot, Headphones, ChevronRight, ChevronDown
} from "lucide-react";
import Link from "next/link";
import Layout from "@/components/common/Layout";

const ServicesMegaMenu = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const column1Services = [
    {
      name: "E-Commerce Marketplace Management",
      description: "Manage Amazon, eBay & multi-channel marketplaces for scalable growth.",
      url: "/services#ecommerce-marketplace",
      icon: <ShoppingCart className="w-[22px] h-[22px] text-[#E07A5F]" strokeWidth={2} />,
      iconBg: "bg-[#FFF4EB]"
    },
    {
      name: "Platform & Website Development",
      description: "Scalable, secure and high-performance web platforms built to grow.",
      url: "/services/platform-development",
      icon: <SquareCode className="w-[22px] h-[22px] text-[#2D9B75]" strokeWidth={2} />,
      iconBg: "bg-[#EEF8F4]"
    },
    {
      name: "AI SEO (GEO) (AEO) (AIO)",
      description: "AI-first SEO strategies to improve visibility in AI and traditional search.",
      url: "/services/ai-seo-geo-aeo-aio",
      icon: <Search className="w-[22px] h-[22px] text-[#00A896]" strokeWidth={2} />,
      iconBg: "bg-[#EAF7FA]"
    },
    {
      name: "Marketing & Google / Meta Ads Management",
      description: "ROI-focused ad campaigns that deliver measurable results.",
      url: "/services/marketing-strategy",
      icon: <Megaphone className="w-[22px] h-[22px] text-[#E76F51]" strokeWidth={2} />,
      iconBg: "bg-[#FFF6F0]"
    }
  ];

  const column2Services = [
    {
      name: "Social, Printable & Ads Creative Designs",
      description: "Eye-catching designs that boost engagement and drive conversions.",
      url: "/services/ad-creative",
      icon: <PenTool className="w-[22px] h-[22px] text-[#7C3AED]" strokeWidth={2} />,
      iconBg: "bg-[#F5F3FF]"
    },
    {
      name: "Blogs & SEO Services",
      description: "High-ranking content and SEO strategies that drive organic traffic.",
      url: "/services/blog-writing",
      icon: <FileText className="w-[22px] h-[22px] text-[#2563EB]" strokeWidth={2} />,
      iconBg: "bg-[#EFF6FF]"
    },
    {
      name: "n8n & AI Automation Workflows",
      description: "Automate tasks, integrate tools and scale your operations.",
      url: "/services/n8n-workflows",
      icon: <Bot className="w-[22px] h-[22px] text-[#9333EA]" strokeWidth={2} />,
      iconBg: "bg-[#FAF5FF]"
    }
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href="/services"
        style={{ color: color.text }}
        className="p-2 cursor-pointer flex items-center group text-base font-medium transition-all"
      >
        <span
          style={{ backgroundColor: color.text }}
          className={`${isOpen ? "mr-[6px] scale-100" : ""} h-[5px] w-[5px] inline-block transition-all group-hover:mr-[6px] duration-300 scale-0 group-hover:scale-100 rounded-full`}
        ></span>
        <span className="flex items-center gap-1.5">
          Services
          <ChevronDown className={`${isOpen ? "-rotate-180" : ""} group-hover:-rotate-180 duration-300 transition-all self-center w-3.5 h-3.5`} strokeWidth={2.2} />
        </span>
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-x-0 top-[80px] z-[90] w-full"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop Blur Overlay */}
            <div 
              className="fixed inset-0 top-[80px] bg-black/5 backdrop-blur-[1px] z-[-1] h-screen"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown Container */}
            <motion.div
              onMouseLeave={() => setIsOpen(false)}
              className="bg-white shadow-2xl border-b border-gray-150/70 py-10 overflow-y-auto max-h-[calc(100vh-100px)] w-full"
            >
              <Layout className="w-full flex flex-col gap-10">
                {/* Main Content Area */}
                <div className="flex flex-col lg:flex-row gap-10 items-stretch">
                  
                  {/* Left Promotional Panel */}
                  <div className="w-full lg:w-[28%] pr-0 lg:pr-10 border-b lg:border-b-0 lg:border-r border-gray-100 pb-8 lg:pb-0 flex flex-col justify-between min-h-[380px]">
                    <div>
                      {/* Pill Badge */}
                      <span className="bg-[#E6F8F6] text-[#0D9488] px-3.5 py-1 text-[11px] font-bold tracking-wider rounded-full border border-[#0D9488]/10 w-fit flex items-center gap-1.5">
                        <span className="text-[10px]">✦</span> SERVICES
                      </span>

                      {/* Heading */}
                      <h3 className="text-[#073742] text-2xl font-bold leading-tight mt-5">
                        Solutions that <br />
                        build, automate <span className="text-[#0D9488]">&</span> <br />
                        <span className="text-[#0D9488]">grow</span> your business.
                      </h3>

                      {/* Description */}
                      <p className="text-gray-500 text-[14px] mt-4 leading-relaxed">
                        End-to-end services crafted to help your brand scale smarter and faster.
                      </p>
                    </div>

                    {/* 
                      ADJUST LEFT SIDE IMAGE POSITION & SIZE HERE:
                      - To move it LEFT: Increase the negative margin-left on the <img> (e.g., change "-ml-16" to "-ml-20" or "-ml-24").
                      - To move it RIGHT: Decrease it (e.g., change to "-ml-10" or "-ml-8").
                      - To change SIZE: Adjust "scale-[1.35]" (e.g., "scale-[1.4]" is bigger, "scale-[1.25]" is smaller).
                    */}
                    <div className="relative w-full flex items-end justify-center mt-auto pt-6 select-none overflow-visible">
                      <img 
                        src="/images/service-mega-menu-left.png" 
                        alt="Services Illustration" 
                        className="w-full max-w-[360px] h-auto object-contain object-bottom scale-[1.35] -ml-16"
                      />
                    </div>
                  </div>

                  {/* Right Services Columns */}
                  <div className="w-full lg:w-[72%] flex flex-col justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                      
                      {/* Column 1 Services */}
                      <div className="flex flex-col">
                        {column1Services.map((service, index) => (
                          <Link
                            key={index}
                            href={service.url}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between py-[18px] border-b border-gray-100 last:border-0 group cursor-pointer"
                          >
                            <div className="flex items-center gap-4 pr-4">
                              {/* Icon Container */}
                              <div className={`${service.iconBg} w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm`}>
                                {service.icon}
                              </div>
                              {/* Text Info */}
                              <div className="flex-1">
                                <h4 className="text-[15px] font-bold text-gray-900 group-hover:text-[#0D9488] transition-colors leading-tight">
                                  {service.name}
                                </h4>
                                <p className="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-2">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                            {/* Chevron Arrow */}
                            <div className="self-center pr-2">
                              <ChevronRight className="text-gray-400 group-hover:text-[#0D9488] group-hover:translate-x-1.5 transition-all duration-300 w-[15px] h-[15px]" strokeWidth={3} />
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Column 2 Services */}
                      <div className="flex flex-col">
                        {column2Services.map((service, index) => (
                          <Link
                            key={index}
                            href={service.url}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between py-[18px] border-b border-gray-100 last:border-0 group cursor-pointer"
                          >
                            <div className="flex items-center gap-4 pr-4">
                              {/* Icon Container */}
                              <div className={`${service.iconBg} w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm`}>
                                {service.icon}
                              </div>
                              {/* Text Info */}
                              <div className="flex-1">
                                <h4 className="text-[15px] font-bold text-gray-900 group-hover:text-[#0D9488] transition-colors leading-tight">
                                  {service.name}
                                </h4>
                                <p className="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-2">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                            {/* Chevron Arrow */}
                            <div className="self-center pr-2">
                              <ChevronRight className="text-gray-400 group-hover:text-[#0D9488] group-hover:translate-x-1.5 transition-all duration-300 w-[15px] h-[15px]" strokeWidth={3} />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom CTA Banner */}
                <div className="bg-[#F0FAFD] border border-[#D5EBF2] rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-center justify-between mt-2">
                  <div className="flex items-center gap-4 text-center sm:text-left">
                    <div className="w-12 h-12 rounded-2xl bg-[#E6F8F6] text-[#0D9488] flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#073742] text-[15px] sm:text-base leading-snug">
                        Not sure which service fits you?
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                        Let's discuss your goals and find the best solution.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="bg-[#E6F8F6] hover:bg-[#D4F4F0] text-[#0D9488] border border-[#0D9488]/10 hover:border-[#0D9488]/30 px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 shadow-sm flex-shrink-0"
                  >
                    Contact Us <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
                  </Link>
                </div>

              </Layout>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesMegaMenu;
