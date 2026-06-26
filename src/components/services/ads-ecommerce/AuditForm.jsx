"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHeadset } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import useGeoLocation from "@/hooks/useGeoLocation";
import Turnstile from "@/components/common/Turnstile";
import dynamic from "next/dynamic";
import "react-phone-input-2/lib/style.css";

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

const inputClasses =
  "w-full bg-white/[0.06] border border-white/50 rounded-lg px-3.5 py-2.5 text-white placeholder-white/80 text-sm focus:outline-none focus:border-white/80 transition-all duration-200";
const selectClasses =
  "w-full bg-[#05262e] border border-white/50 rounded-lg px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-white/80 transition-all duration-200 appearance-none cursor-pointer";



export default function AuditForm({ defaultPlatform = "", showHeader = true, className = "" }) {
  const router = useRouter();
  const userGeo = useGeoLocation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    platform: defaultPlatform,
    storeName: "",
    storeLink: "",
    monthlyRevenue: "",
    biggestChallenge: "",
    otherChallenge: "",
    agreeTerms: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/ads-ecommerce-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          platform: formData.platform,
          storeName: formData.storeName,
          storeLink: formData.storeLink,
          monthlyRevenue: formData.monthlyRevenue,
          biggestChallenge: formData.biggestChallenge,
          otherChallenge:
            formData.biggestChallenge === "other" ? formData.otherChallenge : "",
          turnstileToken,
          userLocation: userGeo
            ? `${userGeo.city}, ${userGeo.region}, ${userGeo.country}`
            : "Unknown",
          userPincode: userGeo ? userGeo.pincode : "Unknown",
          userIp: userGeo ? userGeo.ip : "Unknown",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      router.push("/ads-ecommerce-thankyou");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`w-full bg-[#05262e] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex flex-col h-full ${className}`}
      style={{
        border: "1.5px solid rgba(255,255,255,0.55)",
        boxShadow:
          "0 0 20px 4px rgba(255,255,255,0.12), 0 0 60px 8px rgba(136,215,240,0.1), inset 0 0 20px 0 rgba(255,255,255,0.03)",
      }}
    >
      {showHeader && (
        <div className="bg-[#bde3f9] p-5 sm:p-6 relative overflow-hidden border-b border-[#05262e]/5">
          <div className="absolute right-4 top-4 grid grid-cols-4 gap-1.5 opacity-20">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#073742]" />
            ))}
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#073742] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#073742]/20">
              <FaHeadset className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-[#073742] mb-0.5 leading-tight font-bw-gradual">
                Get a Free Audit
              </h2>
              <p className="text-[11px] md:text-[12px] text-[#073742]/70 font-medium leading-relaxed max-w-[420px]">
                We&apos;ll review your listings, ads, and account health. No commitment. We find the gaps and tell you what they&apos;re costing you.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="p-5 sm:p-6 md:p-7 pt-5 md:pt-6 flex-1 flex flex-col">
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className={inputClasses} />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className={inputClasses} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <PhoneInput
              country={userGeo?.countryCode?.toLowerCase() || "in"}
              value={formData.phone}
              onChange={(phone) => setFormData({ ...formData, phone: phone.startsWith('+') ? phone : `+${phone}` })}
              disabled={isSubmitting}
              enableSearch={true}
              inputProps={{
                required: true,
                name: 'phone',
                id: 'phone',
              }}
              containerClass="phone-input-container"
            />
            <div className="relative">
              <select name="platform" value={formData.platform} onChange={handleChange} required className={selectClasses}>
                <option value="" disabled className="bg-[#05262e]">Platform</option>
                <option value="amazon" className="bg-[#05262e]">Amazon</option>
                <option value="ebay" className="bg-[#05262e]">eBay</option>
                <option value="etsy" className="bg-[#05262e]">Etsy</option>
                <option value="all" className="bg-[#05262e]">All Three</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/25 text-[10px]">▼</div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <input type="text" name="storeName" placeholder="Business and Brand Name" value={formData.storeName} onChange={handleChange} required className={inputClasses} />
            <input type="url" name="storeLink" placeholder="Store Link (https://...)" value={formData.storeLink} onChange={handleChange} required className={inputClasses} />
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            <div className="relative">
              <select name="monthlyRevenue" value={formData.monthlyRevenue} onChange={handleChange} required className={selectClasses}>
                <option value="" disabled className="bg-[#05262e]">Monthly Revenue</option>
                <option value="under-1l" className="bg-[#05262e]">Under ₹1L</option>
                <option value="1l-5l" className="bg-[#05262e]">₹1L – ₹5L</option>
                <option value="5l-20l" className="bg-[#05262e]">₹5L – ₹20L</option>
                <option value="20l-plus" className="bg-[#05262e]">₹20L+</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/25 text-[10px]">▼</div>
            </div>
            <div className="relative">
              <select name="biggestChallenge" value={formData.biggestChallenge} onChange={handleChange} required className={selectClasses}>
                <option value="" disabled className="bg-[#05262e]">Biggest Challenge</option>
                <option value="listings-seo" className="bg-[#05262e]">Listings & SEO</option>
                <option value="ad-management" className="bg-[#05262e]">Ad Management</option>
                <option value="account-health" className="bg-[#05262e]">Account Health</option>
                <option value="all" className="bg-[#05262e]">All of the above</option>
                <option value="other" className="bg-[#05262e]">Other</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/25 text-[10px]">▼</div>
            </div>
          </div>
          {formData.biggestChallenge === "other" && (
            <input
              type="text"
              name="otherChallenge"
              placeholder="Tell us your biggest challenge"
              value={formData.otherChallenge}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          )}
          <label className="flex items-center gap-2 cursor-pointer group pt-1">
            <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required className="w-3.5 h-3.5 rounded border-white/20 bg-white/10 accent-primary-500" />
            <span className="text-[11px] text-white/40 group-hover:text-white/60 transition-colors">
              I agree to the <Link href="/terms" className="text-primary-500 underline text-[10px]">Terms and Conditions</Link>
            </span>
          </label>
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2.5 text-red-400 text-xs">
              {error}
            </div>
          )}

          {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
            <Turnstile onVerify={setTurnstileToken} />
          )}

          <div className="space-y-4 pt-1">
            <motion.button
              type="submit"
              disabled={isSubmitting || !formData.agreeTerms || (!!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken)}
              className="w-full py-3.5 rounded-xl font-bold text-sm bg-[#88D7F0] text-[#073742] disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-[#88D7F0]/10"
              initial="initial"
              whileHover={!isSubmitting && formData.agreeTerms && (!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || !!turnstileToken) ? "hover" : "initial"}
            >
              <span className="block overflow-hidden relative h-[1.25em]">
                <motion.span
                  className="block"
                  variants={{ initial: { y: 0 }, hover: { y: "-110%" } }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {isSubmitting ? "Analyzing Your Store..." : "Send Me My Free Audit →"}
                </motion.span>
                <motion.span
                  className="absolute top-0 left-0 w-full"
                  variants={{ initial: { y: "110%" }, hover: { y: "0%" } }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {isSubmitting ? "Analyzing Your Store..." : "Send Me My Free Audit →"}
                </motion.span>
              </span>
            </motion.button>

            <p className="text-[10px] text-white/50 text-center flex items-center justify-center gap-1.5">
              <HiLockClosed className="w-3 h-3 text-white/30" />
              Free. No commitment. We find the gaps and tell you what they&apos;re costing you.
            </p>
          </div>
        </form>
      </div>
      <style jsx global>{`
          /* Overwrite react-phone-input-2 default classes to match our style */
          .phone-input-container .form-control {
              width: 100% !important;
              height: 40px !important;
              background: rgba(255, 255, 255, 0.06) !important;
              border: 1px solid rgba(255, 255, 255, 0.5) !important;
              border-radius: 8px !important;
              color: #ffffff !important;
              font-size: 14px !important;
              padding-left: 48px !important;
              transition: all 0.2s ease-in-out;
          }
          .phone-input-container .form-control:focus {
              border-color: rgba(255, 255, 255, 0.8) !important;
              box-shadow: none !important;
          }
          .phone-input-container .flag-dropdown {
              background: rgba(255, 255, 255, 0.06) !important;
              border: 1px solid rgba(255, 255, 255, 0.5) !important;
              border-right: none !important;
              border-radius: 8px 0 0 8px !important;
          }
          .phone-input-container .flag-dropdown:hover,
          .phone-input-container .flag-dropdown:focus,
          .phone-input-container .flag-dropdown.open {
              background: rgba(255, 255, 255, 0.15) !important;
          }
          .phone-input-container .selected-flag:hover,
          .phone-input-container .selected-flag:focus,
          .phone-input-container .flag-dropdown.open .selected-flag,
          .phone-input-container .flag-dropdown.open .selected-flag:hover {
              background: rgba(255, 255, 255, 0.15) !important;
          }
          .phone-input-container .selected-flag .arrow {
              border-top-color: rgba(255, 255, 255, 0.6) !important;
          }
          .phone-input-container .selected-flag .arrow.up {
              border-bottom-color: rgba(255, 255, 255, 0.6) !important;
          }
          .phone-input-container .country-list {
              background-color: #05262e !important;
              border: 1px solid rgba(255, 255, 255, 0.3) !important;
              border-radius: 8px !important;
              color: #ffffff !important;
              scrollbar-width: thin;
              scrollbar-color: rgba(255, 255, 255, 0.25) transparent;
          }
          .phone-input-container .country-list::-webkit-scrollbar {
              width: 6px;
          }
          .phone-input-container .country-list::-webkit-scrollbar-track {
              background: transparent;
          }
          .phone-input-container .country-list::-webkit-scrollbar-thumb {
              background-color: rgba(255, 255, 255, 0.25) !important;
              border-radius: 3px;
          }
          .phone-input-container .country-list::-webkit-scrollbar-thumb:hover {
              background-color: rgba(255, 255, 255, 0.45) !important;
          }
          .phone-input-container .country-list .country:hover {
              background-color: #0c4755 !important;
          }
          .phone-input-container .country-list .country.highlight {
              background-color: #0a4f5e !important;
              color: #ffffff !important;
          }
          .phone-input-container .country-list .search {
              background-color: #05262e !important;
              padding: 8px !important;
              border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
          }
          .phone-input-container .country-list .search-box {
              background: #031d23 !important;
              border: 1px solid #0c4755 !important;
              color: #ffffff !important;
              border-radius: 6px !important;
          }
          .phone-input-container .country-list .search-emoji {
              font-size: 0 !important;
              display: inline-block !important;
              width: 16px !important;
              height: 16px !important;
              vertical-align: middle !important;
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.35-4.35'/%3E%3C/svg%3E") !important;
              background-repeat: no-repeat !important;
              background-position: center !important;
              background-size: contain !important;
              opacity: 0.7 !important;
          }
      `}</style>
    </div>
  );
}
