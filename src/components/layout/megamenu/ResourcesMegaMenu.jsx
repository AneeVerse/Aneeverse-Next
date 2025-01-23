"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineBookOpen, HiOutlinePlay, HiOutlineClipboardList } from "react-icons/hi";

const ResourcesMegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          description: "Superside's latest videos",
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

  return (
    <div
      className=""
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <li className="text-gray-700 list-none hover:list-disc  hover:text-purple-500">Resources</li>
      {isOpen && (
        <motion.div
          className="absolute left-0 w-full top-10 pt-10 z-40"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
            <div className="bg-[#EBFAFE] shadow-lg  border border-gray-200 rounded-lg">

<div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto px-6 py-8">

          {/* Learning Center */}
          <div>
            <h3 className="text-lg font-bold flex items-center justify-between">
              Learning Center <FiArrowUpRight />
            </h3>
            <ul className="mt-4 space-y-4">
              {resources[0].items.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <div className="text-gray-700 text-xl">{item.icon}</div>
                  <div>
                    <h4 className="text-md font-medium text-gray-700">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="text-lg font-bold flex items-center justify-between">
              Blog <FiArrowUpRight />
            </h3>
            <div className="grid grid-cols-1 gap-4 mt-4">
              {resources[1].cards.map((card, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[160px] object-cover rounded-md"
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
            <h3 className="text-lg font-bold flex items-center justify-between">
              Customer Stories <FiArrowUpRight />
            </h3>
            <div className="grid grid-cols-1 gap-4 mt-4">
              {resources[2].cards.map((card, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[160px] object-cover rounded-md"
                  />
                  <p className="text-sm font-medium text-gray-700">
                    {card.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ResourcesMegaMenu;
