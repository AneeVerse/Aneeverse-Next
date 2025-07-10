import React, { useEffect, useRef, useState } from 'react';

function useInViewOnce(threshold = 0.2) {
  const ref = useRef();
  const [triggered, setTriggered] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, triggered]);
  return [ref, triggered];
}

export default function PortfolioMetrics({ results = [] }) {
  // Helper for animated count up
  function useCountUp(target, duration = 2200, start = false) {
    const [count, setCount] = useState(0);
    const raf = useRef();
    useEffect(() => {
      if (!start) return;
      let startTs;
      function animate(ts) {
        if (!startTs) startTs = ts;
        const progress = Math.min((ts - startTs) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          raf.current = requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      }
      raf.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf.current);
    }, [target, duration, start]);
    return count;
  }

  if (!results || results.length === 0) {
    return null;
  }

  const [sectionRef, inViewOnce] = useInViewOnce(0.3);

  return (
    <div ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => {
            // Animate single numbers and the first number in a range
            let displayValue = result.value;
            if (typeof result.value === 'string') {
              const rangeMatch = result.value.match(/^(\d+)(%-\d+%.*)$/);
              if (rangeMatch) {
                // e.g., 20%-40%
                const num = parseInt(rangeMatch[1], 10);
                const count = useCountUp(num, 2200, inViewOnce);
                displayValue = `${count}${rangeMatch[2]}`;
              } else if (result.value.match(/^\d+/)) {
                const num = parseInt(result.value.match(/^\d+/)[0], 10);
                const count = useCountUp(num, 2200, inViewOnce);
                displayValue = result.value.replace(/^\d+/, count);
              }
            }
            return (
              <div key={index} className="text-center p-8 rounded-xl">
                <div className="mb-4">
                  <span className="text-7xl md:text-8xl tracking-tight text-secondary-500 font-poppins">
                    {displayValue}
                  </span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {result.metric}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 