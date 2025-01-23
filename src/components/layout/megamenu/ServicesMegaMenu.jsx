"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaDesktop, FaPager, FaSearch, FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";
import { FaPenFancy, FaGhost, FaFileAlt, FaTags } from "react-icons/fa";
import { FaChartPie, FaEnvelope, FaGoogle, FaFacebook, FaUserFriends } from "react-icons/fa";
import { FaEnvelopeOpenText, FaSlideshare, FaPaintBrush, FaFilePdf } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";


const ServicesMegaMenu = ({color}) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuCategories = [
    {
      title: "Website Services",
      color: "bg-blue-200 text-blue-900",
      items: [
        { name: "Website Design", description: "Stunning websites built to engage.", icon: <FaDesktop /> },
        { name: "Landing Pages", description: "High-converting pages for your campaigns.", icon: <FaPager /> },
        { name: "SEO Optimization", description: "Boost your search rankings with expert SEO.", icon: <FaSearch /> },
        { name: "GMB Optimization", description: "Dominate local searches with GMB excellence.", icon: <FaMapMarkerAlt /> },
        { name: "Local SEO", description: "Reach your audience with targeted local SEO strategies.", icon: <FaLocationArrow /> },
      ],
    },
    {
      title: "Content Writing",
      color: "bg-green-200 text-green-900",
      items: [
        { name: "Blog Writing", description: "SEO-friendly blogs tailored to your niche.", icon: <FaPenFancy /> },
        { name: "Ghost Writing", description: "Captivating content under your brand's name.", icon: <FaGhost /> },
        { name: "Website Copywriting", description: "Persuasive copy that drives engagement.", icon: <FaFileAlt /> },
        { name: "Product Descriptions", description: "Sell more with attention-grabbing descriptions.", icon: <FaTags /> },
      ],
    },
 
    {
      title: "Marketing Services",
      color: "bg-yellow-200 text-blue-900",
      items: [
        { name: "Marketing Strategy", description: "Grow your brand with expert consultants.", icon: <FaChartPie /> },
        { name: "Email Campaign", description: "Personalized email campaigns that convert.", icon: <FaEnvelope /> },
        { name: "Google Ads", description: "Targeted ads to maximize ROI.", icon: <FaGoogle /> },
        { name: "Meta Ads", description: "Creative campaigns that get noticed.", icon: <FaFacebook /> },
        { name: "Influencer Marketing", description: "Boost brand visibility with trusted influencers.", icon: <FaUserFriends /> },
      ],
    },
    {
      title: "Creative Design Services",
      color: "bg-lime-200 text-lime-900",
      items: [
        { name: "Social Media Creatives", description: "Engaging assets for all platforms.", icon: <FaFacebook /> },
        { name: "Email Creation", description: "Compelling email designs that drive action.", icon: <FaEnvelopeOpenText /> },
        { name: "Presentation Design", description: "Pitch-perfect presentations for your business needs.", icon: <FaSlideshare /> },
        { name: "Logo Design", description: "Memorable logos that define your brand.", icon: <FaPaintBrush /> },
        { name: "Brochure Design", description: "Informative and visually stunning brochures.", icon: <FaFilePdf /> },
      ],
    },
  ];
  
  return (
    <div
      className=""
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={`text-[${color.text}] p-2 cursor-pointer hover:text-purple-500`}>Services</button>
      {isOpen && (
        <motion.div
          className="absolute left-0 top-[60px] pt-[20px] w-full z-40"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="bg-[#EBFAFE] shadow-lg border overflow-y-auto h-[calc(100vh-80px)] border-gray-200 rounded-lg">

<div className="max-w-6xl mx-auto py-3 px-4 grid grid-cols-3 gap-6">
          {menuCategories.map((category, index) => (
            <div key={index}>
              <h3
                className={`text-lg font-bold py-2 px-4 rounded-md inline-flex items-center gap-2 ${category.color}`}
              >
                {category.title} <FiArrowUpRight />
              </h3>
              <ul className="mt-4 space-y-2">
                {category.items.map((item, idx) => (
                  <a href={"/contact"} key={idx} className="flex group px-3 py-2 border-b items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                    <div className="text-gray-700 text-lg self-center">{item.icon}</div>
                    <div>
                      <h4 className="text-md font-medium text-gray-700">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    </div>
                    <FaArrowRight  className=" opacity-0 translate-x-[50%] group-hover:opacity-100 group-hover:translate-x-0 duration-300 "/>
                  </a>
                ))}
              </ul>
            </div>
          ))}
</div>
</div>
        </motion.div>
      )}
    </div>
  );
};

export default ServicesMegaMenu;
