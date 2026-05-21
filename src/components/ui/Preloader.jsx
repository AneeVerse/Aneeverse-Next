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
            // Page already loaded - just show for minimum time
            const remaining = Math.max(0, minDisplay - elapsed);
            const timer = setTimeout(startExit, remaining);
            return () => clearTimeout(timer);
        }

        // Page still loading - use a race between load event and max timeout
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

        // Hard cap - never wait more than maxDisplay ms total
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
                <img
                    src="/images/Artboard 7@2x.png"
                    alt="Aneeverse Logo"
                    className="w-24 h-24 md:w-32 md:h-32 object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                />
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
