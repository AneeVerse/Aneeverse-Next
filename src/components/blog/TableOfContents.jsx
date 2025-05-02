import React, { useEffect, useState } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);
  const activeId = useScrollSpy('h2, h3'); // Adjust selectors based on your needs

  useEffect(() => {
    // Get all headings from the article
    const elements = Array.from(document.querySelectorAll('h2, h3')).map((element) => ({
      id: element.id,
      text: element.textContent,
      level: Number(element.tagName.charAt(1))
    }));
    setHeadings(elements);
  }, []);

  return (
    <nav className="table-of-contents sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4 text-[#EBFAFE]">Table of Contents</h2>
        <ul className="space-y-3">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={`${
                heading.level === 3 ? 'ml-4' : ''
              }`}
            >
              <a
                href={`#${heading.id}`}
                className={`block text-sm transition-colors duration-200 ${
                  activeId === heading.id
                    ? 'text-[#88D7F0] font-medium'
                    : 'text-[#EBFAFE]/80 hover:text-[#88D7F0]'
                } ${heading.level === 3 ? 'text-[13px]' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${heading.id}`).scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents; 