"use client";

import React, { useState, useEffect, useRef, Suspense, useMemo } from "react";

/**
 * LazySection - A wrapper component that loads child components only when they're about to enter the viewport
 * Uses Intersection Observer to detect when the component is within 100px of the viewport
 * Once loaded, components stay mounted to prevent re-loading images
 * Uses sessionStorage to persist loaded state across fast scrolls
 * 
 * @param {React.Component} children - The component to lazy load
 * @param {number} rootMargin - Distance from viewport to start loading (default: "100px")
 * @param {React.ReactNode} fallback - Loading placeholder (optional)
 * @param {string} sectionId - Unique identifier for caching (optional)
 */
const LazySection = React.memo(({ children, rootMargin = "100px", fallback = null, sectionId = null }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef(null);
  const hasLoadedRef = useRef(false); // Track if component has ever been loaded
  const cacheKey = sectionId ? `section_loaded_${sectionId}` : null;

  // Check sessionStorage on mount to restore loaded state
  useEffect(() => {
    if (cacheKey && typeof window !== 'undefined') {
      const cached = sessionStorage.getItem(cacheKey);
      if (cached === 'true') {
        hasLoadedRef.current = true;
        setShouldLoad(true);
        // #region agent log
        fetch('http://127.0.0.1:7246/ingest/962ffdaa-0701-4e55-b752-8423bc70ef37',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LazySection.jsx:35',message:'Section restored from cache',data:{sectionId,cacheKey},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
      }
    }
  }, [cacheKey]);

  useEffect(() => {
    // If already loaded, don't set up observer again
    if (hasLoadedRef.current) {
      // #region agent log
      fetch('http://127.0.0.1:7246/ingest/962ffdaa-0701-4e55-b752-8423bc70ef37',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LazySection.jsx:45',message:'Observer skipped - already loaded',data:{sectionId,hasLoaded:hasLoadedRef.current},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoadedRef.current) {
            hasLoadedRef.current = true;
            setShouldLoad(true);
            
            // Cache in sessionStorage
            if (cacheKey && typeof window !== 'undefined') {
              sessionStorage.setItem(cacheKey, 'true');
              // #region agent log
              fetch('http://127.0.0.1:7246/ingest/962ffdaa-0701-4e55-b752-8423bc70ef37',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LazySection.jsx:60',message:'Section loaded and cached',data:{sectionId,cacheKey,isIntersecting:entry.isIntersecting},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
              // #endregion
            } else {
              // #region agent log
              fetch('http://127.0.0.1:7246/ingest/962ffdaa-0701-4e55-b752-8423bc70ef37',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LazySection.jsx:65',message:'Section loaded without cache',data:{sectionId,isIntersecting:entry.isIntersecting},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
              // #endregion
            }
            
            // Disconnect observer once loaded - component will stay mounted
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
      // #region agent log
      fetch('http://127.0.0.1:7246/ingest/962ffdaa-0701-4e55-b752-8423bc70ef37',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LazySection.jsx:85',message:'Observer set up',data:{sectionId,hasLoaded:hasLoadedRef.current},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
      // #endregion
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [rootMargin, cacheKey, sectionId]);

  // Minimal loading placeholder
  const defaultFallback = useMemo(
    () => <div className="min-h-[200px] w-full" aria-label="Loading content..." />,
    []
  );

  // Once loaded, always render children - don't unmount on scroll
  const shouldRender = shouldLoad || hasLoadedRef.current;
  
  // #region agent log
  useEffect(() => {
    if (shouldRender) {
      fetch('http://127.0.0.1:7246/ingest/962ffdaa-0701-4e55-b752-8423bc70ef37',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LazySection.jsx:105',message:'Rendering children',data:{sectionId,shouldLoad,hasLoaded:hasLoadedRef.current},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
    }
  }, [shouldRender, sectionId]);
  // #endregion

  return (
    <div ref={containerRef} className="w-full">
      {shouldRender ? (
        <Suspense fallback={fallback || defaultFallback}>
          {children}
        </Suspense>
      ) : (
        <div className="min-h-[200px] w-full" aria-label="Content will load soon..." />
      )}
    </div>
  );
});

LazySection.displayName = 'LazySection';

export default LazySection;

