"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineBookOpen, HiOutlinePlay, HiOutlineClipboardList } from "react-icons/hi";


import { FaDesktop, FaPager, FaSearch, FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";
import { FaPenFancy, FaGhost, FaFileAlt, FaTags } from "react-icons/fa";
import { FaChartPie, FaEnvelope, FaGoogle, FaFacebook, FaUserFriends } from "react-icons/fa";
import { FaEnvelopeOpenText, FaSlideshare, FaPaintBrush, FaFilePdf } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

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
        { name: "Email Design", description: "Engaging email templates that convert.", icon: <FaEnvelopeOpenText /> },
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
      title: "Content Writing",
      color: "bg-green-200 text-green-900",
      items: [
        { name: "Blog Writing", description: "SEO-friendly blogs tailored to your niche.", icon: <FaPenFancy /> },
        { name: "Ghost Writing", description: "Captivating content under your brand's name.", icon: <FaGhost /> },
        // { name: "Website Copywriting", description: "Persuasive copy that drives engagement.", icon: <FaFileAlt /> },
        // { name: "Product Descriptions", description: "Sell more with attention-grabbing descriptions.", icon: <FaTags /> },
      ],
    },
 
    {
      title: "Creative Design Services",
      color: "bg-lime-200 text-lime-900",
      items: [
        { name: "Social Media Creatives", description: "Engaging assets for all platforms.", icon: <FaFacebook /> },
        // { name: "Email Creation", description: "Compelling email designs that drive action.", icon: <FaEnvelopeOpenText /> },
        { name: "Presentation Design", description: "Pitch-perfect presentations for your business needs.", icon: <FaSlideshare /> },
        // { name: "Logo Design", description: "Memorable logos that define your brand.", icon: <FaPaintBrush /> },
        { name: "Brochure Design", description: "Informative and visually stunning brochures.", icon: <FaFilePdf /> },
      ],
    },
  ];
  
  
  const resources = [
    {
      title: "Learning Center",
      link: "#",
      items: [
        {
          name: "Events & Summits",
          description: "Our upcoming events and recordings",
          icon: <HiOutlineClipboardList />,
        },
        {
          name: "Guides & Quizzes",
          description: "Insights from marketing leaders",
          icon: <HiOutlineBookOpen />,
        },
        {
          name: "Video Library",
          description: "aneeverse's latest videos",
          icon: <HiOutlinePlay />,
        },
        {
          name: "Playbooks",
          description: "Quick ways to step up your game",
          icon: <HiOutlineBookOpen />,
        },
      ],
    },
    {
      title: "Blog",
      link: "#",
      cards: [
        {
          title: "Beyond the Brief: All the Buzz About AI-Powered Ads",
          image: "/images/blog1.avif",
        },
        {
          title: "Creative Leadership Decoded: Lessons from Two Industry Experts",
          image: "/images/blog2.avif",
        },
      ],
    },
    {
      title: "Customer Stories",
      link: "#",
      cards: [
        {
          title: "How Shopify Built a Growth Workshop to Unlock Rapid Experimentation",
          image: "/images/customer1.avif",
        },
        {
          title: "How Amazon Delivers Creative Assets Faster Without Increasing Headcount",
          image: "/images/customer2.avif",
        },
      ],
    },
  ];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <motion.div
      initial={{ maxHeighth: "0px" }}
      animate={{ maxHeight: "100vh" }}
      transition={{ duration: 0.3 }}
      exit={{ maxHeight: "0px" }}

      className={`fixed h-[100vh] overflow-y-auto inset-0 pb-24 bg-primary-500 w-full  z-50 shadow-lg`}
    >
      {/* Close Button */}
      <motion.div
      initial={{padding: "0px 0px"}}
      animate={{padding: "0px 20px"}}
      transition={{ duration: 0.3 }}
      exit={{padding: "0px 0px"}}
      className="flex justify-between items-center h-[70px] sm:h-[80px] px-sm md:px-md">
        <Link href={"/"} onClick={toggleSidebar} className=" text-secondary-500 text-3xl tracking-wide font-bold"> <span className="font-Rock_Salt">a</span>neeverse</Link>
        <button onClick={toggleSidebar} className="text-xl text-secondary-500">
          <FaTimes />
        </button>
      </motion.div>

      {/* Menu Items */}
      <div className="px-5">
        <div
          className="py-3 flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("services")}
        >
          <Link href={"/services"}  onClick={toggleSidebar} >Services</Link>
          {openSection === "services" ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <AnimatePresence>
          {openSection === "services" && (
            <motion.div
              className=" space-y-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-6xl mx-auto py-2 grid grid-cols-1 gap-6">
                        {menuCategories.map((category, index) => (
                          <div key={index}>
                            <h3
                              className={`text-lg font-bold py-2 px-4 rounded-md inline-flex items-center gap-2 ${category.color}`}
                            >
                              {category.title} <FiArrowUpRight />
                            </h3>
                            <ul className="mt-4 space-y-2">
                              {category.items.map((item, idx) => (
                                <a href={"/contact"} key={idx} className="flex group px-2 py-2 border-b items-center justify-between gap-3">
                                  <div className="flex items-center gap-3">
                                  <div>
                                    <h4 className="text-md font-medium text-gray-700">{item.name}</h4>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                  </div>
                                  </div>
                                  
                                  <div className="text-gray-700 text-lg self-center">{item.icon}</div>
                                    </a>
                              ))}
                            </ul>
                          </div>
                        ))}
              </div>
              </motion.div>
          )}
        </AnimatePresence>

    
        <Link href={"/works"}  onClick={toggleSidebar} className="py-3 block cursor-pointer">Our Work</Link>

        <div
          className="py-3 flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("whyUs")}
        >
          <span>Why us</span>
          {openSection === "whyUs" ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {/* Dropdown Content with Animation */}
        <AnimatePresence>
          {openSection === "whyUs" && (
            <motion.div
              className="space-y-3 px-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={"/about-us"}  onClick={toggleSidebar} className="flex items-center gap-3">
                <img
                  src="/images/blog1.avif"
                  alt="About"
                  className="w-[60px] h-[60px] object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold">About us</p>
                  <p className="text-sm ">Our mission, goals & values</p>
                </div>
              </Link>
              <Link href={"our-team"}  onClick={toggleSidebar} className="flex items-center gap-3">
                <img
                  src="/images/blog2.avif"
                  alt="Our People"
                  className="w-[60px] h-[60px] object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold">Our people</p>
                  <p className="text-sm ">Meet your dedicated team</p>
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Resources Dropdown */}
        <div
          className="py-3 flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("resources")}
        >
          <span>Resources</span>
          {openSection === "resources" ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        <AnimatePresence>
          {openSection === "resources" && (
            <motion.div
              className=" space-y-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 gap-6 px-2 max-w-6xl mx-auto py-2">
              
                        {/* Learning Center */}
                        <div>
                          
                          <ul className="mt-4 space-y-4">
                            {resources[0].items.map((item, idx) => (
                              <li key={idx} className="flex items-start justify-between gap-3">
                                <div>
                                  <h4 className="text-md font-medium text-gray-700">
                                    {item.name}
                                  </h4>
                                  <p className="text-sm text-gray-500">{item.description}</p>
                                </div>
                                <div className="text-gray-700 text-xl">{item.icon}</div>
                              </li>
                            ))}
                          </ul>
                        </div>
              
                        {/* Blog */}
                        <div>
                          <Link href={"/blog"} className="text-lg hover:underline font-bold flex items-center gap-2">
                            Blog <FiArrowUpRight />
                          </Link>
                          <div className="grid grid-cols-1 gap-4 mt-4">
                            {resources[1].cards.map((card, idx) => (
                              <div key={idx} className="flex flex-row gap-3">
                                <img
                                  src={card.image}
                                  alt={card.title}
                                  className="w-[60px] h-[60px] object-cover rounded-md"
                                />
                                <p className="text-sm font-medium text-gray-700">
                                  {card.title}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
              
                        {/* Customer Stories */}
                        <div>
                        <Link href={"/customer"} className="text-lg hover:underline font-bold flex items-center gap-2">
                            Customer Stories <FiArrowUpRight />
                          </Link>
                          <div className="grid grid-cols-1 gap-4 mt-4">
                            {resources[2].cards.map((card, idx) => (
                              <div key={idx} className="flex flex-row gap-3">
                                <img
                                  src={card.image}
                                  alt={card.title}
                                  className="w-[60px] h-[60px] object-cover rounded-md"
                                />
                                <p className="text-sm font-medium text-gray-700">
                                  {card.title}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
              
                        </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Link href={"/pricing"}  onClick={toggleSidebar} className="py-3 block cursor-pointer">Pricing</Link>
        <Link href={"/about-us"}  onClick={toggleSidebar} className="py-3 block cursor-pointer">About Us</Link>

        {/* Buttons */}
        <div className="mt-6">
          <Link href={"/contact"}  onClick={toggleSidebar} className="w-full block text-center py-3 rounded-full bg-secondary-500 text-primary-500 font-semibold">
            Book a demo
          </Link>
          <Link href={"#"}  onClick={toggleSidebar} className="w-full block text-center mt-3 py-3 rounded-full border border-secondary-500 text-secondary-500 font-semibold">
            Sign in
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
