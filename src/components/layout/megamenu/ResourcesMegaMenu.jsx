"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import {
  HiOutlineBookOpen,
  HiOutlinePlay,
  HiOutlineClipboardList,
  HiOutlinePencilAlt,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa6";
import Layout from "@/components/common/Layout";
import Link from "next/link";

const ResourcesMegaMenu = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const resources = [
    {
      title: "",
      link: "#",
      items: [
        {
          name: "Blog",
          link: "/blog",
          description: "Latest articles and insights",
          icon: <HiOutlinePencilAlt />,
        },
        {
          name: "Customer Stories",
          link: "/customer-stories",
          description: "Success stories from our clients",
          icon: <HiOutlineUserGroup />,
        },
        {
          name: "Guides & Quizzes",
          link: "/guides-quizzes",
          description: "Insights from marketing leaders",
          icon: <HiOutlineBookOpen />,
        },
        {
          name: "Video Library",
          link: "/video-library",
          description: "Aneeverse's latest videos",
          icon: <HiOutlinePlay />,
        }
      ],
    },
    {
      title: "Blog",
      link: "/blog",
      cards: [
        {
          title: "Beyond the Brief: All the Buzz About AI-Powered Ads",
          image: "/images/blog1.avif",
        },
        {
          title:
            "Creative Leadership Decoded: Lessons from Two Industry Experts",
          image: "/images/blog2.avif",
        },
      ],
    },
    {
      title: "Customer Stories",
      link: "/customer-stories",
      cards: [
        {
          title:
            "How Shopify Built a Growth Workshop to Unlock Rapid Experimentation",
          image: "/images/customer1.avif",
        },
        {
          title:
            "How Amazon Delivers Creative Assets Faster Without Increasing Headcount",
          image: "/images/customer2.avif",
        },
      ],
    },
  ];

  return (
    <div
      className=" "
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`text-[${color.text}] p-2 cursor-pointer flex items-center group`}
      >
        <span
          className={`${
            isOpen ? "mr-[6px] scale-100 " : " "
          } h-[5px] w-[5px] inline-block transition-all group-hover:mr-[6px] duration-300 scale-0 group-hover:scale-100 rounded-full bg-[${
            color.text
          }]`}
        ></span>{" "}
        <span className="flex items-center gap-2">
          Resources{" "}
          <FaChevronDown
            className={`${
              isOpen ? " -rotate-180 " : " "
            } group-hover:-rotate-180 duration-300 transition-all self-center text-[10px]`}
          />{" "}
        </span>
      </button>
      {isOpen && (
        <motion.div
          className="fixed h-screen inset-0 w-full top-[60px]  pt-5 z-40"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="backdrop-blur-[2px] h-full w-full">
          <motion.div
              onMouseLeave={() => {
                setIsOpen(false);
              }}
          
          className="bg-[#EBFAFE] shadow-lg  border border-gray-200 ">
            <Layout>
              <div className="grid grid-cols-3 gap-6 py-8">
                {/* Learning Center */}
                <div className="border-r border-gray-200 pr-6">
                 
                  <ul className="mt-12  space-y-4">
                    {resources[0].items.map((item, idx) => (
                      <li key={idx}>
                        <Link href={item.link} onClick={()=>{setIsOpen(false)}} 
                       className="flex cursor-pointer border-b pb-3 items-start group justify-between gap-3">
                        <div>
                          <h4 className="text-md flex items-center font-medium text-gray-700">
                           <span className="h-[5px] bg-secondary-500 w-[5px] inline-block transition-all  duration-300 scale-0 group-hover:scale-100 rounded-full"></span> <span className=" ml-[-5px] group-hover:ml-[6px]  transition-all duration-300">{item.name}</span>
                          </h4>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                        <div className="text-gray-700 text-xl">{item.icon}</div>
                      </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Blog */}
                <div className="border-r border-gray-200 pr-6">
                  <Link onClick={()=>{setIsOpen(false)}} href={resources[1].link} className="text-lg font-semibold cursor-pointer hover:underline flex items-center text-secondary-500 gap-2">
                    Blog <FiArrowUpRight />
                  </Link>
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    {resources[1].cards.map((card, idx) => (
                      <div key={idx} className="flex flex-col cursor-pointer gap-3">
                      <div className="overflow-hidden rounded-md">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-[160px] hover:scale-110 transition-all duration-300 object-cover rounded-md"
                      /></div>
                      <p className="text-sm line-clamp-1 font-medium text-gray-700">
                        {card.title}
                      </p>
                    </div>
                    ))}
                  </div>
                </div>

                {/* Customer Stories */}
                <div>
                  <Link  onClick={()=>{setIsOpen(false)}} href={resources[2].link} className="text-lg font-semibold flex items-center hover:underline cursor-pointer text-secondary-500 gap-2">
                    Customer Stories <FiArrowUpRight />
                  </Link>
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    {resources[2].cards.map((card, idx) => (
                      <div key={idx} className="flex flex-col cursor-pointer gap-3">
                        <div className="overflow-hidden rounded-md">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-[160px] hover:scale-110 transition-all duration-300 object-cover rounded-md"
                        /></div>
                        <p className="text-sm line-clamp-1 font-medium text-gray-700">
                          {card.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Layout>
          </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ResourcesMegaMenu;
