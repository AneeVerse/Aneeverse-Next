"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPalette, FaVideo, FaRocket, FaClock, FaShapes, FaBullhorn } from "react-icons/fa";

const FeelsFamiliar = () => {
  // Card content
  const cards = [
    {
      icon: <FaShapes className="text-white text-2xl" />,
      title: "Constrained Designers",
      description:
        "Your design team is spread thin across multiple departments, leading to delays and compromised quality.",
    },
    {
      icon: <FaVideo className="text-white text-2xl" />,
      title: "Video void",
      description:
        "You're missing out on engaging video content due to lack of in-house capabilities.",
    },
    {
      icon: <FaBullhorn className="text-white text-2xl" />,
      title: "Inconsistent brand voice",
      description:
        "Your marketing materials lack cohesion across different channels, diluting your brand's impact.",
     
    },
    {
      icon: <FaRocket className="text-white text-2xl" />,
      title: "Launches fall flat",
      description:
        "You ship a feature and then move onto the next one without making a splash to drive new signups or adoption from users.",
    },
    {
      icon: <FaClock className="text-white text-2xl" />,
      title: "Last-minute requests",
      description:
        "Last-minute requests from sales and leadership leave you constantly playing catch-up.",
    },
    {
      icon: <FaPalette className="text-white text-2xl" />,
      title: "Creativity crunch",
      description:
        "Most of your creatives play it safe, lacking the wow factor needed to truly stand out in the market.",
    },
  ];

  return (
    <section className="bg-black pt-16 pb-28">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-white text-center mb-12">Feels Familiar?</h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg bg-gray-900 hover:bg-pink-600 duration-300 shadow-md flex flex-col items-start`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              {/* Icon */}
              <div className="mb-4 bg-pink-500 p-3 rounded-full">{card.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeelsFamiliar;
