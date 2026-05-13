"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/common/Layout";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "@/components/common/AnimatedButton";
import { FaUserTie, FaRocket, FaChartLine, FaStore } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";

const trustLabels = [
  { icon: <FaUserTie className="w-3 h-3" />, text: "Dedicated PM" },
  { icon: <FaRocket className="w-3 h-3" />, text: "Fast Execution" },
  { icon: <FaChartLine className="w-3 h-3" />, text: "Weekly Reporting" },
  { icon: <FaStore className="w-3 h-3" />, text: "Amazon · eBay · Etsy" },
];

const scrollServices = [
  { title: "Amazon Listing Optimization", image: "/images/services/website/website-design.avif" },
  { title: "Dedicated PM", image: "/images/services/website/website-strategy.avif" },
  { title: "Brand Store & A+ Content", image: "/images/services/website/website-strategy.avif" },
  { title: "Amazon Ads Setup", image: "/images/services/website/webflow-development.avif" },
  { title: "FBA Support", image: "/images/services/website/design-systems.avif" },
  { title: "Weekly Reporting", image: "/images/services/website/website-illustrations.avif" },
  { title: "Account Health Management", image: "/images/services/website/website-illustrations.avif" },
  { title: "Amazon, eBay & Etsy", image: "/images/services/website/ux-ui-audit.avif" },
  { title: "Orders & Returns Management", image: "/images/services/website/ux-ui-audit.avif" },
  { title: "WhatsApp Support", image: "/images/services/website/website-design.avif" },
  { title: "Performance Reporting", image: "/images/services/website/website-strategy.avif" },
  { title: "eBay Promoted Listings", image: "/images/services/website/website-design.avif" },
  { title: "Etsy SEO & Ads", image: "/images/services/website/webflow-development.avif" },
];

const scrollVariants = {
  animate: {
    x: [0, "-50%"],
    transition: {
      x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" },
    },
  },
};

export default function AdsEcommerceHero() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    platform: "",
    storeName: "",
    monthlyRevenue: "",
    biggestChallenge: "",
    agreeTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const inputClasses =
    "w-full bg-white/[0.08] border border-white/[0.15] rounded-lg px-3.5 py-2.5 text-white placeholder-white/35 text-sm focus:outline-none focus:border-primary-500/50 transition-all duration-200";
  const selectClasses =
    "w-full bg-[#05262e] border border-white/[0.15] rounded-lg px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-primary-500/50 transition-all duration-200 appearance-none cursor-pointer";

  return (
    <div className="bg-[#073742] relative text-white overflow-hidden">
      {/* Top fade from nav */}
      <div className="absolute -top-[20px] left-0 w-full h-[200px] bg-gradient-to-b z-20 from-[#021115] via-[#073742]/80 to-transparent pointer-events-none" />

      <Layout className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-screen py-28 lg:py-32">

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col justify-center">
            <p className="text-[11px] uppercase font-bold tracking-[4px] text-primary-500/70 mb-5">
              Marketplace Management
            </p>

            <h1 className="font-extrabold leading-[1.1] tracking-tight uppercase mb-6 text-[clamp(1.5rem,5vw,3rem)]">
              <span className="text-white">Every Day Your<br />Listing Sits on Page 3,</span>
              <span className="font-Rock_Salt text-[#FF6B00] normal-case block text-[0.6em] sm:text-[0.55em] -rotate-1 mt-4 sm:mt-3 ml-1">
                Someone Else Gets Your Sale.
              </span>
            </h1>

            <p className="text-sm md:text-base text-white/55 leading-relaxed mb-4 max-w-lg">
              Bad listings, broken PPC, and ignored account health cost you real money every single day.
              We give you a dedicated team that finds what's leaking, fixes it fast, and keeps your
              store performing - week after week.
            </p>

            <p className="text-sm text-primary-500/70 font-medium mb-8 max-w-md">
              No long-term contract to start. No upfront risk. Just a free audit.
            </p>

            {/* Trust labels */}
            <div className="flex flex-wrap gap-2 mb-8">
              {trustLabels.map((label, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 bg-white/[0.05] border border-white/[0.07] rounded-full px-3 py-1.5 text-[11px] text-white/60"
                >
                  <span className="text-primary-500">{label.icon}</span>
                  {label.text}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <AnimatedButton
                href="#store-audit-form"
                className="px-7 py-3 rounded-full font-bold text-sm"
                style={{ backgroundColor: "#88D7F0", color: "#073742" }}
                mainTextSlide="-130%"
                duplicateTextStart="100%"
                duplicateTextEnd="-100%"
              >
                Find Out What My Store Is Losing →
              </AnimatedButton>
              <AnimatedButton
                href="#store-audit-form"
                className="px-7 py-3 rounded-full font-bold text-sm border border-white/20 bg-white/[0.05]"
                mainTextSlide="-130%"
                duplicateTextStart="100%"
                duplicateTextEnd="-100%"
              >
                Book a Free Audit
              </AnimatedButton>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div id="store-audit-form" className="flex items-center justify-end">
            <div className="w-full bg-[#05262e] rounded-[2rem] p-6 md:p-10 border border-white/10 shadow-2xl">
              {!submitted ? (
                <>
                  <h2 className="text-xl font-bold text-white mb-1 leading-tight">
                    Get a Free Audit - See Your Store's Numbers
                  </h2>
                  <p className="text-[12px] text-white/50 mb-5 leading-relaxed">
                    We'll review your listings, ads, and account health and show you three numbers: what your store does now, what it could do, and what's standing between the two.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className={inputClasses} />
                      <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className={inputClasses} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input type="tel" name="phone" placeholder="WhatsApp / Phone" value={formData.phone} onChange={handleChange} required className={inputClasses} />
                      <div className="relative">
                        <select name="platform" value={formData.platform} onChange={handleChange} required className={selectClasses}>
                          <option value="" disabled className="bg-[#05262e]">Platform</option>
                          <option value="amazon" className="bg-[#05262e]">Amazon</option>
                          <option value="ebay" className="bg-[#05262e]">eBay</option>
                          <option value="etsy" className="bg-[#05262e]">Etsy</option>
                          <option value="all" className="bg-[#05262e]">All Three</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/25">▾</div>
                      </div>
                    </div>
                    <input type="text" name="storeName" placeholder="Store or Brand Name" value={formData.storeName} onChange={handleChange} required className={inputClasses} />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <select name="monthlyRevenue" value={formData.monthlyRevenue} onChange={handleChange} required className={selectClasses}>
                          <option value="" disabled className="bg-[#05262e]">Monthly Revenue</option>
                          <option value="under-1l" className="bg-[#05262e]">Under ₹1L</option>
                          <option value="1l-5l" className="bg-[#05262e]">₹1L – ₹5L</option>
                          <option value="5l-20l" className="bg-[#05262e]">₹5L – ₹20L</option>
                          <option value="20l-plus" className="bg-[#05262e]">₹20L+</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/25">▾</div>
                      </div>
                      <div className="relative">
                        <select name="biggestChallenge" value={formData.biggestChallenge} onChange={handleChange} required className={selectClasses}>
                          <option value="" disabled className="bg-[#05262e]">Biggest Challenge</option>
                          <option value="listings-seo" className="bg-[#05262e]">Listings & SEO</option>
                          <option value="ad-management" className="bg-[#05262e]">Ad Management</option>
                          <option value="account-health" className="bg-[#05262e]">Account Health</option>
                          <option value="all" className="bg-[#05262e]">All of the above</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/25">▾</div>
                      </div>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer group pt-1">
                      <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required className="w-3.5 h-3.5 rounded border-white/20 bg-white/10 accent-primary-500" />
                      <span className="text-[11px] text-white/40 group-hover:text-white/60 transition-colors">
                        I agree to the <Link href="/terms" className="text-primary-500 underline">Terms and Conditions</Link>
                      </span>
                    </label>
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.agreeTerms}
                      className="w-full py-3.5 rounded-xl font-bold text-sm bg-primary-500 text-secondary-500 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      {isSubmitting ? "Analyzing Your Store..." : "Send Me My Free Audit →"}
                    </button>
                    <p className="text-[10px] text-white/35 text-center flex items-center justify-center gap-1.5 pt-1">
                      <HiLockClosed className="w-3 h-3 text-primary-500/60" />
                      Free. No commitment. We find the gaps and tell you what they're costing you.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">We've got your details!</h3>
                  <p className="text-sm text-white/50">Our team will review your store and get back within 24 hours.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </Layout>

      {/* ── Infinite scroll strip (image cards) ── */}
      <div className="bg-[#073742] py-4 border-t border-white/[0.05] overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#073742] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#073742] to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex gap-4 items-center w-max"
          variants={scrollVariants}
          animate="animate"
        >
          {[...scrollServices, ...scrollServices].map((service, index) => (
            <div
              key={index}
              className="flex items-center w-fit px-3 py-2 bg-primary-500 rounded-lg shadow-lg overflow-hidden flex-shrink-0"
            >
              <div className="h-[54px] w-[75px] relative rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="75px"
                />
              </div>
              <p className="ml-3 text-sm text-secondary-500 font-medium whitespace-nowrap">{service.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
