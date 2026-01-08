"use client";

import { useEffect, useRef } from 'react';

/**
 * Hook to track and cache loaded sections using sessionStorage
 * Prevents sections from reloading when scrolling quickly
 */
export function useSectionCache(sectionId) {
  const hasLoadedRef = useRef(false);
  const cacheKey = `section_loaded_${sectionId}`;

  useEffect(() => {
    // Check if section was already loaded in this session
    if (typeof window !== 'undefined') {
      const cached = sessionStorage.getItem(cacheKey);
      if (cached === 'true') {
        hasLoadedRef.current = true;
      }
    }
  }, [cacheKey]);

  const markAsLoaded = () => {
    if (typeof window !== 'undefined' && !hasLoadedRef.current) {
      hasLoadedRef.current = true;
      sessionStorage.setItem(cacheKey, 'true');
    }
  };

  return {
    hasLoaded: hasLoadedRef.current,
    markAsLoaded,
  };
}

