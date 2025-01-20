"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a href="#services" className="text-gray-700 hover:text-purple-500">
        Services
      </a>
      {isOpen && (
        <motion.div
          className="absolute left-0 top-8 bg-white shadow-lg p-6 grid grid-cols-2 gap-4 w-64 z-50 border border-gray-200 rounded-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <a href="#video-portfolio" className="text-gray-700 hover:text-purple-500">
            Video Portfolio
          </a>
          <a href="#design-portfolio" className="text-gray-700 hover:text-purple-500">
            Design Portfolio
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default MegaMenu;
