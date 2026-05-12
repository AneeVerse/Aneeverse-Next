"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/common/Layout";
import Link from "next/link";
import {
  FaAmazon,
  FaEbay,
  FaEtsy,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const platforms = [
  {
    id: "amazon",
    name: "Amazon",
    icon: <FaAmazon className="w-8 h-8" />,
    brandColor: "#FF9900",
    stat: "35%+",
    statLabel: "organic ranking increase in 90 days",
    startDate: "7 days",
    services: [
      "Listing Optimization",
      "A+ Content",
      "Brand Store",
      "PPC Campaigns",
      "FBA Support",
      "Account Health",
      "Suppression Recovery",
    ],
    whatItMeans:
      "Listings are written for search, not just for looks. Ad campaigns are built from scratch and adjusted weekly. FBA shipments are planned without you touching a spreadsheet. Account health is watched before a warning appears.",
    bottomLine: "You focus on inventory. We manage everything inside Seller Central.",
    cta: "Get a Free Amazon Audit",
  },
  {
    id: "ebay",
    name: "eBay",
    icon: <FaEbay className="w-10 h-8" />,
    brandColor: "#0064D2",
    stat: "50%+",
    statLabel: "impression volume increase with Promoted Listings",
    startDate: "7 days",
    services: [
      "Listing Optimization",
      "Store Design",
      "HTML Templates",
      "Promoted Listings",
      "Markdown Promotions",
      "Orders & Returns",
      "Account Health",
    ],
    whatItMeans:
      "Listings are rewritten with search-first titles and accurate item specifics. Your storefront gets a clean, branded layout that works on mobile. Promoted Listings are set up and adjusted based on what is actually converting. Returns and order queries are handled without you logging into Seller Hub.",
    bottomLine: "You source. We run the store.",
    cta: "Get a Free eBay Audit",
  },
  {
    id: "etsy",
    name: "Etsy",
    icon: <FaEtsy className="w-7 h-7" />,
    brandColor: "#F1641E",
    stat: "3x",
    statLabel: "organic traffic increase in 90 days",
    startDate: "7 days",
    services: [
      "Listing SEO",
      "Tags & Titles",
      "Etsy Ads",
      "Shop Setup",
      "Star Seller Monitoring",
      "Seasonal Strategy",
      "Monthly Reporting",
    ],
    whatItMeans:
      "Every listing is built around how buyers actually search – not keyword guesses. Etsy Ads are set up around your highest-converting products, not your entire catalog. Star Seller metrics are watched weekly so your status does not slip. Your shop is ready before seasonal traffic peaks, not after.",
    bottomLine: "You create. We make sure buyers find you.",
    cta: "Get a Free Etsy Audit",
  },
];

function PlatformCard({ platform, index }) {
  const [showServices, setShowServices] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col rounded-[28px] overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
        background: `linear-gradient(175deg, ${platform.brandColor}08 0%, #0a2a33 30%, #0d3340 100%)`,
        border: `1px solid ${platform.brandColor}18`,
      }}
    >
      {/* Top accent line */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${platform.brandColor}, ${platform.brandColor}60, transparent)`,
        }}
      ></div>

      <div className="p-6 md:p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${platform.brandColor}20, ${platform.brandColor}08)`,
              border: `1px solid ${platform.brandColor}25`,
            }}
          >
            <span style={{ color: platform.brandColor }}>{platform.icon}</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white tracking-tight">{platform.name}</h3>
            <p className="text-[10px] text-white/35 uppercase tracking-wider font-medium">Full Management</p>
          </div>
        </div>

        {/* Stat */}
        <div className="flex items-end gap-5 mb-5">
          <div>
            <p className="text-4xl md:text-5xl font-bold tracking-tighter leading-none" style={{ color: platform.brandColor }}>
              {platform.stat}
            </p>
            <p className="text-xs text-white/50 mt-1 leading-snug max-w-[150px]">{platform.statLabel}</p>
          </div>
          <div className="pb-1">
            <p className="text-[9px] text-white/30 uppercase tracking-wider font-bold mb-0.5">Go live in</p>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-white">{platform.startDate.split(" ")[0]}</span>
              <span className="text-xs text-white/50">days</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-5" style={{ background: `linear-gradient(90deg, ${platform.brandColor}30, transparent)` }}></div>

        {/* Services */}
        <div className="mb-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 mb-2">What we manage</p>
          <div className="flex flex-wrap gap-1">
            {platform.services.map((service, i) => (
              <span key={i} className="text-[10px] text-white/60 bg-white/[0.05] border border-white/[0.06] rounded-full px-2 py-0.5">
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* What it means */}
        <div className="mb-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 mb-2">What this means for your store</p>
          <p className="text-[13px] text-white/70 leading-relaxed">{platform.whatItMeans}</p>
          <p className="text-xs font-medium italic mt-2" style={{ color: platform.brandColor }}>{platform.bottomLine}</p>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-2">
          <Link
            href="#store-audit-form"
            className="group/btn flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
            style={{ backgroundColor: platform.brandColor, boxShadow: `0 4px 15px ${platform.brandColor}20` }}
          >
            {platform.cta}
            <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PlatformCardsSection() {
  return (
    <section className="bg-secondary-500 text-primary-500 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#FF9900]/[0.03] rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0064D2]/[0.03] rounded-full blur-[150px] pointer-events-none"></div>

      <Layout>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-sm uppercase font-light tracking-[2px] text-primary-500 mb-4">Platform Management</p>
          <h2 className="font-normal text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-white leading-[1.1] break-words mb-4">
            Which Platform Do You{" "}
            <span className="italic">Sell On?</span>
          </h2>
          <p className="text-lg text-white/50 mt-4 max-w-2xl mx-auto">
            Pick your platform. See what we manage, week by week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {platforms.map((platform, index) => (
            <PlatformCard key={platform.id} platform={platform} index={index} />
          ))}
        </div>
      </Layout>
    </section>
  );
}
