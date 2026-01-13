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
    <div ref={sectionRef} className="mt-[-8px] pb-12 sm:py-16 ">
      {/* Mobile: stack metrics vertically, value above label, left-aligned, blue theme */}
      <div className="flex flex-col gap-4 sm:hidden bg-[#0A2E3D] rounded-2xl px-4 py-12 w-full max-w-full mx-auto shadow-md border border-[#183b4d]">
        {results.map((result, index) => {
          let displayValue = result.value;
          if (typeof result.value === 'string') {
            const rangeMatch = result.value.match(/\d+/);
            if (rangeMatch) {
              const num = parseInt(rangeMatch[0], 10);
              const count = useCountUp(num, 2200, inViewOnce);
              displayValue = result.value.replace(/\d+/, count);
            }
          }
          return (
            <div key={index} className="flex flex-col justify-center text-left">
              <span className="block text-2xl font-bold text-white mb-1">{displayValue}</span>
              <span className="block text-sm font-normal text-white/80 uppercase tracking-widest">{result.metric}</span>
            </div>
          );
        })}
      </div>
      {/* Desktop: grid layout, blue theme */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 bg-[#0A2E3D] rounded-2xl px-4 py-12 md:py-20 md:px-8 w-full max-w-full mx-auto shadow-md border border-[#183b4d]">
        {results.map((result, index) => {
          let displayValue = result.value;
          if (typeof result.value === 'string') {
            const rangeMatch = result.value.match(/\d+/);
            if (rangeMatch) {
              const num = parseInt(rangeMatch[0], 10);
              const count = useCountUp(num, 2200, inViewOnce);
              displayValue = result.value.replace(/\d+/, count);
            }
          }
          return (
            <div key={index} className="flex flex-col items-start sm:items-center justify-center text-left sm:text-center px-2 py-4 md:py-0 md:px-3">
              <span className="block text-sm font-normal text-white/80 uppercase tracking-widest mb-1">{result.metric}</span>
              <span className="block text-3xl lg:text-4xl xl:text-5xl font-bold text-white">{displayValue}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
} 
