'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronDown } from 'react-icons/io5';
import SanityPortableText from './SanityPortableText';

const BlogFAQItem = ({ question, answer, isOpen, toggleOpen, index }) => {
  return (
    <motion.div
      className={`mb-4 overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
          ? 'bg-white border-blue-200 shadow-[0_10px_30px_-10px_rgba(7,55,66,0.1)]'
          : 'bg-white hover:bg-gray-50 border-gray-100'
        }`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <button
        className="flex w-full justify-between items-center p-5 md:p-6 text-left focus:outline-none group"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span className={`text-xs font-bold tracking-widest ${isOpen ? 'text-blue-500' : 'text-gray-400'}`}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className={`text-lg md:text-xl font-semibold transition-colors ${isOpen ? 'text-[#073742]' : 'text-gray-700 group-hover:text-[#073742]'}`}>
            {question}
          </h3>
        </div>
        <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#073742] text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
          }`}>
          <IoChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8 ml-0 md:ml-10">
              <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed">
                {typeof answer === 'string' ? (
                  <div dangerouslySetInnerHTML={{ __html: answer }} />
                ) : (
                  <SanityPortableText value={answer} />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const BlogFAQ = ({ title = 'Frequently Asked Questions', questions = [] }) => {
  const [openIndex, setOpenIndex] = useState(0); // Open first by default for better "modern" look

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!questions || questions.length === 0) {
    return null;
  }

  return (
    <motion.section
      className="mt-16 pt-12 border-t border-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-10">
        <span className="text-secondary-500 font-bold tracking-widest text-xs uppercase mb-2 block">QUESTIONS & ANSWERS</span>
        <h2 className="text-2xl md:text-4xl font-bold text-[#073742] tracking-tight">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-1">
        {questions.map((item, index) => (
          <BlogFAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            toggleOpen={() => toggleItem(index)}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default BlogFAQ; 
