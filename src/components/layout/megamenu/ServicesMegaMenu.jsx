"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingCart, SquareCode, Search, Megaphone, PenTool, FileText, 
  Bot, Headphones, ChevronRight, ChevronDown
} from "lucide-react";
import Link from "next/link";
import Layout from "@/components/common/Layout";
import AnimatedButton from "@/components/common/AnimatedButton";

const ServicesMegaMenu = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ecomServices = [
    {
      name: "E-Commerce Marketplace Management",
      description: "Manage Amazon, eBay, Etsy, Zepto & multi-channel marketplaces for scalable growth.",
      url: "/services/amazon-marketplace-management",
      icon: <ShoppingCart className="w-[22px] h-[22px] text-[#E07A5F]" strokeWidth={2} />,
      iconBg: "bg-[#FFF4EB]"
    }
  ];

  const column1Services = [
    {
      name: "Social, Printable & Ads Creative Designs",
      description: "Eye-catching designs that boost engagement and drive conversions.",
      url: "/services/ad-creative",
      icon: <PenTool className="w-[22px] h-[22px] text-[#7C3AED]" strokeWidth={2} />,
      iconBg: "bg-[#F5F3FF]"
    },
    {
      name: "Marketing & Google / Meta Ads Management",
      description: "ROI-focused ad campaigns that deliver measurable results.",
      url: "/services/marketing-strategy",
      icon: <Megaphone className="w-[22px] h-[22px] text-[#E76F51]" strokeWidth={2} />,
      iconBg: "bg-[#FFF6F0]"
    },
    {
      name: "Blogs & SEO Services",
      description: "High-ranking content and SEO strategies that drive organic traffic.",
      url: "/services/blog-writing",
      icon: <FileText className="w-[22px] h-[22px] text-[#2563EB]" strokeWidth={2} />,
      iconBg: "bg-[#EFF6FF]"
    }
  ];

  const column2Services = [
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
              className="bg-white shadow-2xl pt-10 pb-6 overflow-y-auto h-[calc(100vh-80px)] w-full flex flex-col"
            >
              <Layout className="w-full flex flex-col gap-6">
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
                        src="https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/Image%201_V2.png?updatedAt=1782714053898" 
                        alt="Services Illustration" 
                        className="w-full max-w-[360px] h-auto object-contain object-bottom scale-[1.35] -ml-16"
                      />
                    </div>
                  </div>

                  {/* Right Services Columns */}
                  <div className="w-full lg:w-[72%] flex flex-col justify-center gap-6">
                    
                    {/* Top Row - E-Commerce (Full Width Row) */}
                    <div className="border-b border-gray-100 pb-5">
                      <span className="text-[11px] font-bold text-gray-400 tracking-wider mb-2 uppercase block border-b border-gray-100 pb-2">E-Commerce</span>
                      {ecomServices.map((service, index) => (
                        <Link
                          key={index}
                          href={service.url}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between py-[18px] border-b border-gray-100 last:border-0 group cursor-pointer"
                        >
                          <div className="flex items-center gap-4 pr-4 w-full">
                            {/* Icon Container */}
                            <div className={`${service.iconBg} w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm`}>
                              {service.icon}
                            </div>
                            {/* Text Info */}
                            <div className="flex-1 md:flex md:items-center md:justify-between md:gap-6">
                              <div>
                                <h4 className="text-[15px] font-bold text-gray-900 group-hover:text-[#0D9488] transition-colors leading-tight">
                                  {service.name}
                                </h4>
                                <p className="text-xs text-gray-500 mt-1 leading-relaxed md:line-clamp-1 line-clamp-2">
                                  {service.description}
                                </p>
                              </div>
                              {/* Chevron Arrow */}
                              <div className="flex items-center gap-1 text-[#E07A5F] font-bold text-xs group-hover:translate-x-1.5 transition-all duration-300 pr-2">
                                <span>Explore Marketplace Management</span>
                                <ChevronRight className="w-4 h-4" strokeWidth={3} />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom Row - 2 Columns (Creative & Marketing | Tech & Automation) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-10 gap-y-6">
                      
                      {/* Column 2 - Creative & Marketing */}
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-gray-400 tracking-wider mb-2 uppercase block border-b border-gray-100 pb-2">Creative & Marketing</span>
                        {column1Services.map((service, index) => (
                          <Link
                            key={index}
                            href={service.url}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between py-[14px] border-b border-gray-100 last:border-0 group cursor-pointer"
                          >
                            <div className="flex items-center gap-4 pr-4">
                              {/* Icon Container */}
                              <div className={`${service.iconBg} w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm`}>
                                {service.icon}
                              </div>
                              {/* Text Info */}
                              <div className="flex-1">
                                <h4 className="text-[14px] font-bold text-gray-900 group-hover:text-[#0D9488] transition-colors leading-tight">
                                  {service.name}
                                </h4>
                                <p className="text-[11px] text-gray-500 mt-1 leading-relaxed line-clamp-1">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                            {/* Chevron Arrow */}
                            <div className="self-center pr-2">
                              <ChevronRight className="text-gray-400 group-hover:text-[#0D9488] group-hover:translate-x-1.5 transition-all duration-300 w-[14px] h-[14px]" strokeWidth={3} />
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Column 3 - Tech & Automation */}
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-gray-400 tracking-wider mb-2 uppercase block border-b border-gray-100 pb-2">Tech & Automation</span>
                        {column2Services.map((service, index) => (
                          <Link
                            key={index}
                            href={service.url}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between py-[14px] border-b border-gray-100 last:border-0 group cursor-pointer"
                          >
                            <div className="flex items-center gap-4 pr-4">
                              {/* Icon Container */}
                              <div className={`${service.iconBg} w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm`}>
                                {service.icon}
                              </div>
                              {/* Text Info */}
                              <div className="flex-1">
                                <h4 className="text-[14px] font-bold text-gray-900 group-hover:text-[#0D9488] transition-colors leading-tight">
                                  {service.name}
                                </h4>
                                <p className="text-[11px] text-gray-500 mt-1 leading-relaxed line-clamp-1">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                            {/* Chevron Arrow */}
                            <div className="self-center pr-2">
                              <ChevronRight className="text-gray-400 group-hover:text-[#0D9488] group-hover:translate-x-1.5 transition-all duration-300 w-[14px] h-[14px]" strokeWidth={3} />
                            </div>
                          </Link>
                        ))}
                      </div>

                    </div>

                  </div>
                </div>

                {/* Bottom CTA Banner */}
                <div className="bg-[#F0FAFD] border border-[#D5EBF2] rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-center justify-between mt-6">
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
                  <AnimatedButton
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="rounded-full font-bold text-sm shadow-[0_0_20px_rgba(13,148,136,0.05)] flex-shrink-0"
                    style={{
                      backgroundColor: "#E6F8F6",
                      color: "#0D9488",
                      padding: "0.625rem 1.5rem"
                    }}
                    mainTextSlide="-140%"
                    duplicateTextStart="100%"
                    duplicateTextEnd="-100%"
                  >
                    <span className="flex items-center gap-2">
                      Contact Us <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                  </AnimatedButton>
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
