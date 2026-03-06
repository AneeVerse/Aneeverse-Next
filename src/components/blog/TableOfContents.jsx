import React, { useEffect, useState } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { FaRegClock } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";

const generateSlug = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const TableOfContents = ({ timeToRead = "5 min read", headings: externalHeadings }) => {
  const [headings, setHeadings] = useState([]);
  const activeId = useScrollSpy('h2, h3');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    if (externalHeadings && externalHeadings.length > 0) {
      setHeadings(externalHeadings.map(h => ({
        id: h.id,
        text: h.title || h.text,
        level: h.level || 2
      })));
      return;
    }

    const elements = Array.from(document.querySelectorAll('h2, h3')).map((element) => {
      if (!element.id) {
        element.id = generateSlug(element.textContent);
      }
      return {
        id: element.id,
        text: element.textContent,
        level: Number(element.tagName.charAt(1))
      };
    });
    setHeadings(elements);
  }, [externalHeadings]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="table-of-contents transition-all duration-300">
      {/* Read Time Progress on Top (Outside Box) */}
      <div className="mb-6 px-1">
        <div className="text-[#073742] flex items-center gap-2 font-medium mb-2.5 text-[15px]">
          <FaRegClock className="text-[#073742] text-base mb-0.5" />
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold">{timeToRead.toString().split(' ')[0]}</span>
            <span className="text-sm font-medium opacity-80">min read</span>
          </div>
        </div>
        <div className="h-[3.5px] bg-[#E5F1F4] rounded-full overflow-hidden w-full">
          <div
            className="h-full bg-[#073742] transition-all duration-500 rounded-full"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </div>

      <div className={`bg-[#0A2E3D] rounded-xl shadow-xl border border-white/5 transition-all duration-300 ${isExpanded ? 'p-6 md:p-8' : 'p-4 md:p-5'}`}>
        <div className={`flex justify-between items-center ${isExpanded ? 'mb-5' : 'mb-0'}`}>
          <h2 className="text-[10px] font-bold text-white tracking-[0.2em] uppercase opacity-60">TABLE OF CONTENTS</h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-white opacity-80 hover:opacity-100 transition-opacity outline-none"
          >
            {isExpanded ? (
              <HiOutlineMinusSm className="text-xl" />
            ) : (
              <HiOutlinePlusSm className="text-xl" />
            )}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="space-y-4 overflow-y-auto no-scrollbar"
              style={{ maxHeight: 'calc(100vh - 420px)' }} // Dynamic height based on available screen space
            >
              {headings.map((heading) => {
                const isActive = activeId === heading.id;
                return (
                  <li
                    key={heading.id}
                    className={`relative ${heading.level === 3 ? 'ml-6' : ''}`}
                  >
                    <a
                      href={`#${heading.id}`}
                      className={`flex items-center gap-2.5 text-[12px] transition-all duration-300 leading-snug group ${isActive
                        ? 'text-white font-semibold'
                        : 'text-gray-400 hover:text-white'
                        }`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(heading.id);
                        if (element) {
                          const offsetTop = element.offsetTop - 100;
                          window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                          });
                        }
                      }}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {isActive && (
                          <span className="text-white text-sm flex-shrink-0 animate-pulse">•</span>
                        )}
                        <span className="truncate">{heading.text}</span>
                      </div>
                    </a>
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
};

export default TableOfContents;
