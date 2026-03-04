'use client';

import { useState, useEffect, useRef } from 'react';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const startTimeRef = useRef(Date.now());

    useEffect(() => {
        const startExit = () => {
            setIsExiting(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 400); // exit fade duration
        };

        // Calculate how much time has already passed since component mounted
        const elapsed = Date.now() - startTimeRef.current;
        // Minimum display time of 800ms, max of 1100ms before exit starts
        // Exit animation is 400ms, so total max = 1100 + 400 = 1500ms
        const minDisplay = 800;
        const maxDisplay = 1100;

        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            // Page already loaded — just show for minimum time
            const remaining = Math.max(0, minDisplay - elapsed);
            const timer = setTimeout(startExit, remaining);
            return () => clearTimeout(timer);
        }

        // Page still loading — use a race between load event and max timeout
        let resolved = false;

        const resolve = () => {
            if (resolved) return;
            resolved = true;
            const elapsed = Date.now() - startTimeRef.current;
            const remaining = Math.max(0, minDisplay - elapsed);
            setTimeout(startExit, remaining);
        };

        // Fire as soon as DOM is interactive (don't wait for all resources)
        const onReady = () => resolve();
        document.addEventListener('DOMContentLoaded', onReady);
        window.addEventListener('load', onReady);

        // Hard cap — never wait more than maxDisplay ms total
        const maxTimer = setTimeout(resolve, Math.max(0, maxDisplay - elapsed));

        return () => {
            document.removeEventListener('DOMContentLoaded', onReady);
            window.removeEventListener('load', onReady);
            clearTimeout(maxTimer);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#073742]`}
            style={{
                pointerEvents: isExiting ? 'none' : 'auto',
                opacity: isExiting ? 0 : 1,
                transition: 'opacity 0.4s ease-out',
            }}
        >
            {/* Logo with fade/pulse animation */}
            <div className="animate-fade-pulse">
                <svg
                    viewBox="0 0 314.1 314.1"
                    className="w-20 h-20 md:w-28 md:h-28"
                >
                    <defs>
                        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#88D7F0" />
                            <stop offset="100%" stopColor="#00BCD4" />
                        </linearGradient>
                    </defs>
                    <g fill="url(#logoGradient)">
                        <path d="M157.1,42c42.5,42.2,55,86.1,55,86.1l-55-46.6c-27.9,23.5-49.7,66-49.7,66l43.2,36.9l8.6-11.6l-28.7-27.2
              c8.2-23.1,26.6-36.4,26.6-36.4c14.2,4.7,61.8,50.2,61.8,50.2c9-10.8,19.8-49.8,19.8-49.8c-15.7-27.8-81.6-80-81.6-80
              C98.2,68.5,39.2,156.9,39.2,156.9l0,0c4.9,12.2,12.9,22.9,23.3,31.1l2.1,1.6C82,127.4,157.1,42,157.1,42z"/>
                        <path d="M157,272.1C114.5,230,101.9,186,101.9,186l55.1,46.5c27.9-23.5,49.7-66,49.7-66l-43.2-36.9l-8.6,11.6
              l28.7,27.2c-8.2,23.1-26.5,36-26.5,36c-14.2-4.7-61.8-49.8-61.8-49.8c-8.9,10.8-19.8,49.8-19.8,49.8c15.7,27.8,81.6,80,81.6,80
              c58.8-38.8,117.9-127.2,117.9-127.2l0,0c-4.9-12.2-12.9-22.9-23.3-31.1l-2.1-1.6C232.1,186.7,157,272.1,157,272.1z"/>
                    </g>
                </svg>
            </div>

            <style jsx>{`
        @keyframes fadePulse {
          0%, 100% { opacity: 0.4; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-pulse {
          animation: fadePulse 0.8s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}
