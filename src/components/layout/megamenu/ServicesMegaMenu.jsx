"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaPaintBrush, FaFacebook, FaSlideshare, FaPalette,
  FaTag, FaFilePdf, FaBox, FaDesktop,
  FaCode, FaLayerGroup, FaCog, FaPenFancy, FaSearch, FaBuilding,
  FaRobot, FaBlog, FaChartLine, FaEnvelope, FaEnvelopeOpenText, FaChartPie
} from "react-icons/fa";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import Layout from "@/components/common/Layout";

const ServicesMegaMenu = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuCategories = [
    {
      title: "Creative Design",
      url: "/services",
      color: "bg-purple-100 hover:bg-purple-200 text-purple-900",
      items: [
        { name: "Ad Creative", url: "/services/ad-creative", description: "Eye-catching ad creatives that convert.", icon: <FaPaintBrush /> },
        // { name: "Social Media Creatives", url: "/services/social-media-creatives", description: "Engaging assets for all platforms.", icon: <FaFacebook /> },
        { name: "Presentation Design", url: "/services/presentation-design", description: "Pitch-perfect presentations.", icon: <FaSlideshare /> },
        // { name: "Illustration Design", url: "/services/illustration-design", description: "Custom illustrations that captivate.", icon: <FaPalette /> },
        { name: "Branding System & Merchandise", url: "/services/branding-services", description: "Complete brand identity solutions.", icon: <FaTag /> },
        { name: "Ebook, Report & Print Design", url: "/services/ebook-digital-report", description: "Professional digital publications.", icon: <FaFilePdf /> },
        // { name: "Print Design", url: "/services/print-design", description: "Stunning print materials.", icon: <FaFilePdf /> },
        // { name: "Packing & Merchandise Design", url: "/services/packing-merchandise-design", description: "Product packaging that sells.", icon: <FaBox /> },

      ],
    },
    {
      title: "Specialized Solutions",
      url: "/services",
      color: "bg-blue-100 hover:bg-blue-200 text-blue-900",
      items: [
        { name: "Platform Development", url: "/services/platform-development", description: "Scalable web platforms.", icon: <FaCode /> },
        { name: "UI, UX & Web Development", url: "/services/ui-ux-web-development", description: "Exceptional digital experiences.", icon: <FaDesktop /> },
        // { name: "Design System", url: "/services/design-system", description: "Comprehensive design systems.", icon: <FaLayerGroup /> },
        // { name: "Product Design", url: "/services/product-design", description: "Market-ready product designs.", icon: <FaCog /> },
        { name: "Copywriting", url: "/services/copywriting", description: "Copy that converts.", icon: <FaPenFancy /> },
        // { name: "Blog Writing", url: "/services/blog-writing", description: "SEO-friendly blog content.", icon: <FaPenFancy /> },
        { name: "SEO & Blog Writing", url: "/services/blog-writing", description: "Content that ranks & converts.", icon: <FaSearch /> },
        // { name: "Corporate & Internals", url: "/services/corporate-internals", description: "Internal branding solutions.", icon: <FaBuilding /> },

      ],
    },
    {
      title: "AI & Automation",
      url: "/services",
      color: "bg-emerald-100 hover:bg-emerald-200 text-emerald-900",
      items: [
        // { name: "AI Powered Creatives", url: "/services/ai-powered-creatives", description: "AI-enhanced creative solutions.", icon: <FaRobot /> },
        // { name: "AI Blog Writing", url: "/services/ai-blog-writing", description: "AI-powered content creation.", icon: <FaBlog /> },
        { name: "AI SEO (GEO) (AEO) (AIO)", url: "/services/ai-seo-geo-aeo-aio", description: "Next-generation SEO optimization.", icon: <FaChartLine /> },
        { name: "n8n Workflows", url: "/services/n8n-workflows", description: "Workflow Automation & Integrations.", icon: <FaRobot /> },
        { name: "Sales & Marketing Automation", url: "/services/sales-marketing-automation", description: "Streamline your workflows.", icon: <FaChartPie /> },
        { type: "category", name: "Marketing", color: "bg-orange-100 text-orange-900" },
        { name: "Marketing Strategy", url: "/services/marketing-strategy", description: "Data-driven marketing plans.", icon: <FaChartPie /> },
        { name: "Email Design & Campaign", url: "/services/email-campaign", description: "Automated email campaigns.", icon: <FaEnvelope /> },
        // { name: "Email Design", url: "/services/email-design", description: "Engaging email templates.", icon: <FaEnvelopeOpenText /> },

      ],
    },
  ];

  return (
    <div
      className=""
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={"/services"}
        style={{ color: color.text }}
        className="p-2 cursor-pointer flex items-center group"
      >
        <span
          style={{ backgroundColor: color.text }}
          className={`${isOpen ? "mr-[6px] scale-100" : ""} h-[5px] w-[5px] inline-block transition-all group-hover:mr-[6px] duration-300 scale-0 group-hover:scale-100 rounded-full`}
        ></span>
        <span className="flex items-center gap-2">
          Services
          <FaChevronDown className={`${isOpen ? "-rotate-180" : ""} group-hover:-rotate-180 duration-300 transition-all self-center text-[10px]`} />
        </span>
      </Link>
      {isOpen && (
        <motion.div
          className="absolute left-0 top-[60px] pt-[20px] w-full z-[90]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="bg-[#EBFAFE] shadow-lg border py-3 overflow-y-auto h-[calc(100vh-80px)] border-gray-200 ">
            <Layout>
              <div className="grid grid-cols-3 gap-6">
                {menuCategories.map((category, index) => (
                  <div key={index}>
                    <Link
                      onClick={() => { setIsOpen(false) }}
                      href={category.url}
                      className={`mt-6 text-lg font-bold group py-2 px-4 rounded-md inline-flex items-center gap-2 ${category.color}`}
                    >
                      {category.title}
                      <div className="relative">
                        <FiArrowUpRight className="z-10 group-hover:translate-x-[80%] group-hover:translate-y-[-80%] group-hover:opacity-0 transition-all duration-300" />
                        <FiArrowUpRight className="absolute inset-0 z-10 opacity-0 translate-x-[-80%] translate-y-[80%] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                    </Link>
                    <ul className="mt-4 space-y-2">
                      {category.items.map((item, idx) => (
                        item.type === "category" ? (
                          <div key={idx} className="px-3 pt-2 mt-5 pb-3 mb-2">
                            <div className={`text-base font-bold py-1.5 px-3 rounded-md inline-flex items-center gap-2 ${item.color}`}>
                              {item.name}
                              <FiArrowUpRight className="text-xs" />
                            </div>
                          </div>
                        ) : (
                          <Link
                            onClick={() => { setIsOpen(false) }}
                            href={item.url}
                            key={idx}
                            className="flex group px-3 py-2 border-b items-center justify-between gap-3"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <div>
                                <h4 className="text-sm font-normal text-gray-800 flex items-center">
                                  <span className="h-[5px] w-[5px] bg-secondary-500 inline-block transition-all duration-300 scale-0 group-hover:scale-100 rounded-full"></span>
                                  <span className="ml-[-5px] group-hover:ml-[6px] transition-all duration-300">{item.name}</span>
                                </h4>
                                <p className="text-sm text-gray-500">{item.description}</p>
                              </div>
                            </div>
                            <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300 text-lg self-center">{item.icon}</div>
                          </Link>
                        )
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Layout>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ServicesMegaMenu;
