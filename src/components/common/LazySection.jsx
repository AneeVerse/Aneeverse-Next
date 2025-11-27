"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";

/**
 * LazySection - A wrapper component that loads child components only when they're about to enter the viewport
 * Uses Intersection Observer to detect when the component is within 100px of the viewport
 * 
 * @param {React.Component} children - The component to lazy load
 * @param {number} rootMargin - Distance from viewport to start loading (default: "100px")
 * @param {React.ReactNode} fallback - Loading placeholder (optional)
 */
const LazySection = ({ children, rootMargin = "100px", fallback = null }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            // Once loaded, we can disconnect the observer
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: rootMargin,
        threshold: 0.01, // Trigger when at least 1% is visible
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [rootMargin]);

  // Minimal loading placeholder
  const defaultFallback = (
    <div className="min-h-[200px] w-full" aria-label="Loading content..." />
  );

  return (
    <div ref={containerRef} className="w-full">
      {shouldLoad ? (
        <Suspense fallback={fallback || defaultFallback}>
          {children}
        </Suspense>
      ) : (
        <div className="min-h-[200px] w-full" aria-label="Content will load soon..." />
      )}
    </div>
  );
};

export default LazySection;

