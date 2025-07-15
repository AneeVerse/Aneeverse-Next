import { useState, useEffect } from 'react';

export function useScrollSpy(selectors) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const headingElements = Array.from(document.querySelectorAll(selectors));
    if (!headingElements.length) return;

    // IntersectionObserver callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id && id !== activeId) {
            setActiveId(id);
          }
        }
      });
    };

    // Aim to trigger when heading is roughly in top third of viewport
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    headingElements.forEach((el) => observer.observe(el));

    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [selectors, activeId]);

  return activeId;
} 