"use client";

import { useEffect } from "react";

// Google Ads "Sign-up conversion" event snippet for /ads-digital-marketing.
// gtag.js and the AW-17978481460 config are loaded globally in app/layout.js.
export default function SignupConversionTracker() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-17978481460/zeq6CLnmmcEcELS25_xC",
        value: 1.0,
        currency: "INR",
      });
    }
  }, []);

  return null;
}
