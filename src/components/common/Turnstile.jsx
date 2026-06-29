"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";

export default function Turnstile({ onVerify, sitekey }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    const key = sitekey || process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!key) {
      console.warn("Cloudflare Turnstile: sitekey is missing. Widget will not render.");
      return;
    }

    const renderTurnstile = () => {
      if (window.turnstile && containerRef.current && !widgetIdRef.current) {
        try {
          widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: key,
            callback: (token) => {
              onVerify(token);
            },
            "expired-callback": () => {
              onVerify(null);
            },
            "error-callback": () => {
              onVerify(null);
            },
            theme: "dark",
          });
        } catch (e) {
          console.error("Turnstile render error:", e);
        }
      }
    };

    if (window.turnstile) {
      renderTurnstile();
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval);
          renderTurnstile();
        }
      }, 100);
      return () => clearInterval(interval);
    }

    return () => {
      if (window.turnstile && widgetIdRef.current) {
        try {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        } catch (e) {
          // ignore
        }
      }
    };
  }, [onVerify, sitekey]);

  const key = sitekey || process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  if (!key) return null;

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
      />
      <div ref={containerRef} className="flex justify-center my-2" />
    </>
  );
}
