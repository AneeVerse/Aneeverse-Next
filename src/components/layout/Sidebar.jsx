"use client";
import React from "react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Sidebar = ({ setSidebarOpen }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
    >
      <div className="bg-white w-64 h-full p-6 shadow-lg">
        {/* Close Icon */}
        <button
          className="text-gray-700 text-2xl mb-6"
          onClick={() => setSidebarOpen(false)}
        >
          <FiX />
        </button>

        {/* Sidebar Links */}
        <nav className="flex flex-col space-y-4">
          <a href="#services" className="text-gray-700 hover:text-purple-500">
            Services
          </a>
          <a href="#our-work" className="text-gray-700 hover:text-purple-500">
            Our Work
          </a>
          <a href="#case-studies" className="text-gray-700 hover:text-purple-500">
            Case Studies
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-purple-500">
            Pricing
          </a>
          <a href="#resources" className="text-gray-700 hover:text-purple-500">
            Resources
          </a>
          <a href="#login" className="text-gray-700 hover:text-purple-500">
            Login
          </a>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-purple-600">
            Schedule a call
          </button>
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
