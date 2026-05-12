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
  { icon: <FaStore className="w-3 h-3" />, text: "Multi-Platform Support" },
];

// Scrolling service cards
const scrollServices = [
  { title: "Amazon Listing Optimization", image: "/images/services/website/website-design.avif" },
  { title: "Dedicated PM", image: "/images/services/website/website-strategy.avif" },
  { title: "Brand Store & A+ Content", image: "/images/services/website/website-strategy.avif" },
  { title: "Fast Execution", image: "/images/services/website/webflow-development.avif" },
  { title: "Amazon Ads Setup", image: "/images/services/website/webflow-development.avif" },
  { title: "Proven Results", image: "/images/services/website/design-systems.avif" },
  { title: "FBA Support", image: "/images/services/website/design-systems.avif" },
  { title: "Weekly Reporting", image: "/images/services/website/website-illustrations.avif" },
  { title: "Account Health Management", image: "/images/services/website/website-illustrations.avif" },
  { title: "Amazon, eBay & Etsy", image: "/images/services/website/ux-ui-audit.avif" },
  { title: "Orders & Returns Management", image: "/images/services/website/ux-ui-audit.avif" },
  { title: "WhatsApp Support", image: "/images/services/website/website-design.avif" },
  { title: "Performance Reporting", image: "/images/services/website/website-strategy.avif" },
  { title: "Account Health Monitored", image: "/images/services/website/webflow-development.avif" },
  { title: "eBay Promoted Listings", image: "/images/services/website/website-design.avif" },
  { title: "Etsy SEO & Ads", image: "/images/services/website/webflow-development.avif" },
];

const scrollVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 225,
      ease: "linear",
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
    "w-full bg-[#0a2a33] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-white placeholder-white/35 text-sm focus:outline-none focus:border-primary-500/40 transition-all duration-200";
  const selectClasses =
    "w-full bg-[#0a2a33] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-primary-500/40 transition-all duration-200 appearance-none cursor-pointer";

  return (
    <div className="relative mt-0 text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full min-h-[80vh] lg:min-h-[90vh] py-20 lg:py-32 flex items-center">
        {/* Background Image */}
        <Image
          src="/images/services/website/hero-banner.avif"
          alt="Marketplace Management"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="absolute inset-0 opacity-100"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <Layout className="relative z-10 pb-12 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-16 items-center">

            {/* LEFT — Hero Content */}
            <div className="flex flex-col">
              <p className="text-[13px] uppercase font-light tracking-[2px] text-primary-500 mb-2">
                Marketplace Management
              </p>

              <h1 className="text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.5rem] font-semibold leading-[1.15] mb-4 text-primary-500">
                Marketplace Managers
                <br />
                <span className="text-white">for Amazon, eBay and Etsy</span>
              </h1>

              <p className="text-[15px] text-gray-300 leading-relaxed mb-4 max-w-[520px]">
                Your listings, ads, account health, and daily operations – handled by
                a dedicated team every week. You stay focused on sourcing and scaling.
                We take care of the rest.
              </p>

              {/* Trust Labels */}
              <div className="flex flex-wrap gap-2 mb-6">
                {trustLabels.map((label, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 bg-white/[0.06] border border-white/[0.06] rounded-full px-3 py-1.5 text-[10px] text-white/70"
                  >
                    <span className="text-primary-500">{label.icon}</span>
                    {label.text}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <AnimatedButton
                  href="#store-audit-form"
                  className="min-w-fit whitespace-nowrap px-6 py-2.5 rounded-full font-medium text-primary-500 bg-transparent border border-primary-500 hover:bg-primary-500 hover:text-[#073742] transition-colors text-sm"
                  mainTextSlide="-130%"
                  duplicateTextStart="100%"
                  duplicateTextEnd="-100%"
                >
                  Get a Free Store Audit
                </AnimatedButton>
                <Link
                  href="#what-we-manage"
                  className="text-sm text-primary-500 hover:text-white transition-colors underline underline-offset-4"
                >
                  View Our Services →
                </Link>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div id="store-audit-form">
              <div className="bg-secondary-500 rounded-2xl p-4 lg:p-5 shadow-2xl shadow-black/40 border border-white/[0.05]">
                {!submitted ? (
                  <>
                    <h2 className="text-base font-semibold text-white mb-0.5">
                      Get a Free Marketplace Audit
                    </h2>
                    <p className="text-[11px] text-white/45 mb-3 leading-relaxed">
                      Tell us about your store. We will handle everything from there.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className={inputClasses} />
                        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className={inputClasses} />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <input type="tel" name="phone" placeholder="WhatsApp / Phone (+91)" value={formData.phone} onChange={handleChange} required className={inputClasses} />
                        <div className="relative">
                          <select name="platform" value={formData.platform} onChange={handleChange} required className={selectClasses}>
                            <option value="" disabled>Platform</option>
                            <option value="amazon">Amazon</option>
                            <option value="ebay">eBay</option>
                            <option value="etsy">Etsy</option>
                            <option value="all">All Three</option>
                          </select>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/25">▾</div>
                        </div>
                      </div>
                      <input type="text" name="storeName" placeholder="Store or Brand Name" value={formData.storeName} onChange={handleChange} required className={inputClasses} />
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative">
                          <select name="monthlyRevenue" value={formData.monthlyRevenue} onChange={handleChange} required className={selectClasses}>
                            <option value="" disabled>Monthly Revenue</option>
                            <option value="under-1l">Under ₹1L</option>
                            <option value="1l-5l">₹1L – ₹5L</option>
                            <option value="5l-20l">₹5L – ₹20L</option>
                            <option value="20l-plus">₹20L+</option>
                          </select>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/25">▾</div>
                        </div>
                        <div className="relative">
                          <select name="biggestChallenge" value={formData.biggestChallenge} onChange={handleChange} required className={selectClasses}>
                            <option value="" disabled>Biggest Challenge</option>
                            <option value="listings-seo">Listings & SEO</option>
                            <option value="ad-management">Ad Management</option>
                            <option value="account-health">Account Health</option>
                            <option value="all">All of the above</option>
                          </select>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/25">▾</div>
                        </div>
                      </div>
                      <label className="flex items-center gap-2 cursor-pointer group pt-0">
                        <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required className="w-3 h-3 rounded border-white/20 bg-white/10 accent-[#EBFAFE]" />
                        <span className="text-[10px] text-white/35 group-hover:text-white/55 transition-colors">
                          I agree to the{" "}
                          <Link href="/terms" className="text-primary-500 underline">Terms and Conditions</Link>
                        </span>
                      </label>
                      <button type="submit" disabled={isSubmitting || !formData.agreeTerms} className="w-full py-2.5 rounded-xl font-medium text-xs bg-primary-500 text-secondary-500 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300">
                        {isSubmitting ? "Analyzing Your Store..." : "Get My Free Audit"}
                      </button>
                      <p className="text-center text-[9px] text-white/25 flex items-center justify-center gap-1">
                        <HiLockClosed className="w-2.5 h-2.5" />
                        Free. No commitment required.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-14 h-14 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1.5">We have got your details!</h3>
                    <p className="text-sm text-white/50">Our team will review your store and get back within 24 hours.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Layout>

        {/* Scrolling Services */}
        <div className="absolute bottom-4 lg:bottom-8 w-full overflow-hidden">
          <motion.div className="flex gap-4 w-max" variants={scrollVariants} animate="animate">
            {[...scrollServices, ...scrollServices, ...scrollServices, ...scrollServices].map(
              (service, index) => (
                <div key={index} className="flex items-center w-fit px-3 py-2 bg-primary-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="h-[54px] w-[75px] relative rounded-md overflow-hidden flex-shrink-0">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </div>
                  <p className="ml-3 text-md text-secondary-500 font-medium">{service.title}</p>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
