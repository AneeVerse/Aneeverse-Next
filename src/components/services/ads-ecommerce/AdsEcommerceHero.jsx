"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Layout from "@/components/common/Layout";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "@/components/common/AnimatedButton";
import { FaUserTie, FaRocket, FaChartLine, FaStore, FaHeadset } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import useGeoLocation from "@/hooks/useGeoLocation";

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
  const router = useRouter();
  const userGeo = useGeoLocation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    platform: "",
    storeName: "",
    storeLink: "",
    monthlyRevenue: "",
    biggestChallenge: "",
    otherChallenge: "",
    agreeTerms: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const inputClasses =
    "w-full bg-white/[0.06] border border-white/50 rounded-lg px-3.5 py-2.5 text-white placeholder-white/80 text-sm focus:outline-none focus:border-white/80 transition-all duration-200";
  const selectClasses =
    "w-full bg-[#05262e] border border-white/50 rounded-lg px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-white/80 transition-all duration-200 appearance-none cursor-pointer";

  return (
    <div className="bg-[#073742] relative text-white overflow-hidden">
      {/* Top fade from nav */}
      <div className="absolute -top-[20px] left-0 w-full h-[200px] bg-gradient-to-b z-20 from-[#021115] via-[#073742]/80 to-transparent pointer-events-none" />

      <Layout className="relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch min-h-[calc(100vh-100px)] pt-24 pb-10 lg:py-32">

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col justify-center text-left">
            <p className="text-[10px] md:text-[11px] uppercase font-bold tracking-[3px] md:tracking-[4px] text-primary-500/80 mb-4 md:mb-5">
              Marketplace Management
            </p>

            <h1 className="font-bw-gradual font-extrabold leading-[1.1] tracking-tighter uppercase mb-6 text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3rem]">
              <span className="text-white">Every Day Your<br />Listing Sits on Page 3,</span>
              <span className="inline-block bg-[#FF6B00] text-[#03151a] px-3 sm:px-4 py-1.5 sm:py-1 rounded-lg sm:rounded-xl text-[0.65em] sm:text-[0.65em] mt-4 sm:mt-5 font-black tracking-tight">
                Someone Else Gets Your Sale.
              </span>
            </h1>

            <p className="text-[15px] sm:text-lg text-white/90 leading-relaxed max-w-xl mb-6 md:mb-8">
              One leaking listing. One broken PPC campaign. One ignored warning. That&apos;s all it takes to lose months of rank. We make sure none of that happens.
            </p>

            <p className="text-[13px] sm:text-sm text-white font-medium mb-6 md:mb-8 max-w-md opacity-80">
              No long-term contract to start. No upfront risk. Just a free audit.
            </p>

            {/* Trust labels */}
            <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
              {trustLabels.map((label, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 bg-white/[0.05] border border-white/[0.07] rounded-full px-3 py-1.5 text-[10px] md:text-[11px] text-white/60"
                >
                  <span className="text-primary-500">{label.icon}</span>
                  {label.text}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <AnimatedButton
                href="#store-audit-form"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-sm flex items-center justify-center text-center"
                style={{ backgroundColor: "#88D7F0", color: "#073742" }}
                mainTextSlide="-130%"
                duplicateTextStart="100%"
                duplicateTextEnd="-100%"
              >
                Find Out What My Store Is Losing →
              </AnimatedButton>
              <AnimatedButton
                href="#store-audit-form"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-sm border border-white/20 bg-white/[0.05] flex items-center justify-center text-center"
                mainTextSlide="-130%"
                duplicateTextStart="100%"
                duplicateTextEnd="-100%"
              >
                Book a Free Audit
              </AnimatedButton>
            </div>

            {/* Trust bar below CTAs - aligned with buttons above */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-5 pt-5 border-t border-white/10">
              {/* Stars + rating - matches width of first CTA */}
              <div className="flex flex-col gap-1.5 w-full sm:w-auto sm:min-w-[300px]">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#FFB800] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[13px] text-white font-bold leading-none">
                  4.9/5 <span className="text-white/50 font-normal ml-2">Based on 200+ reviews</span>
                </p>
              </div>

              {/* Avatars + label - matches width of second CTA */}
              <div className="flex items-center gap-3 w-full sm:w-auto sm:min-w-[220px]">
                <div className="flex -space-x-2.5">
                  {[
                    "/images/testimonals/Vmc.png",
                    "/images/testimonals/jm-visa.png",
                    "/images/testimonals/navino.png",
                  ].map((src, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#073742] relative overflow-hidden bg-white/10">
                      <Image src={src} alt="Seller" fill className="object-cover" sizes="40px" />
                    </div>
                  ))}
                </div>
                <p className="text-[13px] leading-tight text-white/70">
                  Trusted by <span className="font-bold text-white">500+</span><br />Sellers Worldwide
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div id="store-audit-form" className="flex items-center justify-end w-full scroll-mt-24 h-full">
            <div
              className="w-full bg-[#05262e] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex flex-col h-full"
              style={{
                border: "1.5px solid rgba(255,255,255,0.55)",
                boxShadow: "0 0 20px 4px rgba(255,255,255,0.12), 0 0 60px 8px rgba(136,215,240,0.1), inset 0 0 20px 0 rgba(255,255,255,0.03)"
              }}
            >
              {/* Premium Light Blue Header Section */}
                  <div className="bg-[#bde3f9] p-5 sm:p-6 relative overflow-hidden border-b border-[#05262e]/5">
                    {/* Decorative subtle elements - Dots Pattern */}
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

                  <div className="p-5 sm:p-6 md:p-7 pt-5 md:pt-6 flex-1 flex flex-col">
                    <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between gap-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className={inputClasses} />
                        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className={inputClasses} />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <input type="tel" name="phone" placeholder="WhatsApp / Phone" value={formData.phone} onChange={handleChange} required className={inputClasses} />
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
                      
                      <div className="space-y-4 pt-1">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting || !formData.agreeTerms}
                          className="w-full py-3.5 rounded-xl font-bold text-sm bg-[#88D7F0] text-[#073742] disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-[#88D7F0]/10"
                          initial="initial"
                          whileHover={!isSubmitting && formData.agreeTerms ? "hover" : "initial"}
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
            </div>
          </div>

        </div>
      </Layout>

      {/* ── Infinite scroll strip (image cards) ── */}
      <div className="bg-[#073742] py-6 md:py-8 border-t border-white/[0.05] overflow-hidden relative">
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
