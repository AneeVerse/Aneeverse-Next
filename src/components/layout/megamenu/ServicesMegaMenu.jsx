"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaPaintBrush, FaFacebook, FaSlideshare, FaPalette,
  FaTag, FaFilePdf, FaBox, FaDesktop,
  FaCode, FaLayerGroup, FaCog, FaPenFancy, FaSearch, FaBuilding,
  FaRobot, FaBlog, FaChartLine, FaEnvelope, FaEnvelopeOpenText, FaChartPie,
  FaAmazon, FaEbay, FaShoppingCart, FaRocket, FaChevronRight
} from "react-icons/fa";
import { SiEtsy } from "react-icons/si";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import Layout from "@/components/common/Layout";

const ServicesMegaMenu = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuCategories = [
    {
      title: "Creative Design",
      url: "/services#creative-design",
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
      url: "/services#specialized-solutions",
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
      url: "/services#ai-automation",
      color: "bg-emerald-100 hover:bg-emerald-200 text-emerald-900",
      items: [
        // { name: "AI Powered Creatives", url: "/services/ai-powered-creatives", description: "AI-enhanced creative solutions.", icon: <FaRobot /> },
        // { name: "AI Blog Writing", url: "/services/ai-blog-writing", description: "AI-powered content creation.", icon: <FaBlog /> },
        { name: "AI SEO (GEO) (AEO) (AIO)", url: "/services/ai-seo-geo-aeo-aio", description: "Next-generation SEO optimization.", icon: <FaChartLine /> },
        { name: "n8n Workflows", url: "/services/n8n-workflows", description: "Workflow Automation & Integrations.", icon: <FaRobot /> },
        { name: "Sales & Marketing Automation", url: "/services/sales-marketing-automation", description: "Streamline your workflows.", icon: <FaChartPie /> },
        { type: "category", name: "Marketing", color: "bg-orange-100 hover:bg-orange-200 text-orange-900" },
        { name: "Marketing Strategy", url: "/services/marketing-strategy", description: "Data-driven marketing plans.", icon: <FaChartPie /> },
        { name: "Email Design & Campaign", url: "/services/email-campaign", description: "Automated email campaigns.", icon: <FaEnvelope /> },
        // { name: "Email Design", url: "/services/email-design", description: "Engaging email templates.", icon: <FaEnvelopeOpenText /> },

      ],
    },
    {
      title: "Ecommerce Marketplace",
      url: "/services#ecommerce-marketplace",
      color: "bg-[#FFF8E1] hover:bg-[#FFECB3] text-[#F57F17]",
      items: [
        { name: "Amazon Management", url: "/services/amazon-marketplace-management", description: "Scale more on Amazon without firefighting.", icon: <FaAmazon /> },
        { name: "eBay Management", url: "/services/ebay-marketplace-management", description: "Profitable eBay store management.", icon: <FaEbay /> },
        { name: "Zepto Management", url: "/services/zepto-marketplace-management", description: "Win in quick commerce.", icon: <FaRocket /> },
        { name: "Etsy Management", url: "/services/etsy-marketplace-management", description: "Craft a profitable Etsy storefront.", icon: <SiEtsy /> },
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
          className="fixed h-screen inset-0 w-full top-[60px] pt-[20px] z-[90]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="backdrop-blur-[2px] h-full w-full">
            <motion.div
              onMouseLeave={() => setIsOpen(false)}
              className="bg-[#EBFAFE] shadow-lg border py-3 overflow-y-auto h-[calc(100vh-80px)] border-gray-200 "
            >
              <Layout>
                <div className="grid grid-cols-4 gap-6">
                  {menuCategories.map((category, index) => (
                    <div key={index}>
                      <Link
                        onClick={() => { setIsOpen(false) }}
                        href={category.url}
                        className={`mt-6 text-base font-semibold group py-2 px-6 rounded-xl inline-flex items-center gap-2 border border-black/5 shadow-sm transition-all duration-300 ${category.color}`}
                      >
                        {category.title}
                        <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                      <ul className="mt-4 space-y-2">
                        {category.items.map((item, idx) => (
                          item.type === "category" ? (
                            <Link
                              key={idx}
                              href="/services#marketing-services"
                              onClick={() => { setIsOpen(false) }}
                              className="pl-0 pr-3 pt-2 mt-5 pb-3 mb-2 block"
                            >
                              <div className={`text-base font-semibold py-2 px-6 rounded-xl inline-flex items-center cursor-pointer gap-2 border border-black/5 shadow-sm transition-all duration-300 ${item.color}`}>
                                {item.name}
                                <FaChevronRight className="text-xs" />
                              </div>
                            </Link>
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
                              <div className={`text-gray-400 group-hover:text-gray-600 transition-colors duration-300 self-center ${item.name === "eBay Management" ? "text-[2.25rem]" : "text-lg"}`}>{item.icon}</div>
                            </Link>
                          )
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Layout>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ServicesMegaMenu;
