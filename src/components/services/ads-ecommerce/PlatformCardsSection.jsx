"use client";

import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/common/Layout";
import { motion } from "framer-motion";
import { FaAmazon, FaEbay, FaEtsy } from "react-icons/fa";
import { TrendingUp } from "lucide-react";

const platforms = [
  {
    id: "amazon",
    name: "Amazon",
    badge: "Amazon Management",
    icon: <FaAmazon className="w-4 h-4" />,
    image: "/ads/amazon.png",
    brandColor: "#FF9900",
    badgeBg: "#FF9900",
    stat: "35%+",
    statLabel: "ranking growth within 90 days",
    headline: [
      { text: "Ranking on Page 3 is\nthe same as ", accent: false },
      { text: "not existing.", accent: true },
    ],
    body: "We fix your listings, restructure your PPC, and protect your account health - so you stop losing sales to competitors with worse products but better execution.",
    cta: "Get Free Amazon Audit →",
  },
  {
    id: "ebay",
    name: "eBay",
    badge: "eBay Management",
    icon: <FaEbay className="w-5 h-4" />,
    image: "/ads/ebay.png",
    brandColor: "#6557D2",
    badgeBg: "#6557D2",
    stat: "50%+",
    statLabel: "impression increase in first 60 days",
    headline: [
      { text: "eBay buyers don't search.\n", accent: false },
      { text: "They scroll.", accent: true },
      { text: " If your listing\ndoesn't stop them -\nsomeone else's does.", accent: false },
    ],
    body: "We build your storefront, write listings that rank in Cassini, and run Promoted Listings that don't bleed margin. You source. We sell.",
    cta: "Get Free eBay Audit →",
  },
  {
    id: "etsy",
    name: "Etsy",
    badge: "Etsy Management",
    icon: <FaEtsy className="w-4 h-4" />,
    image: "/ads/etsy.png",
    brandColor: "#1A7849",
    badgeBg: "#1A7849",
    stat: "3x",
    statLabel: "search visibility in first 60 days",
    headline: [
      { text: "On Etsy, your ", accent: false },
      { text: "title and tags\ndecide everything.", accent: true },
      { text: " Most sellers\nget both wrong.", accent: false },
    ],
    body: "We optimise every listing for how Etsy's algorithm actually works - right keywords, right tags, right positions. Plus Etsy Ads that convert, and a Star Seller profile that sells before a buyer reads a word.",
    cta: "Get Free Etsy Audit →",
  },
];

function PlatformCard({ platform, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.1)] border border-gray-200 hover:shadow-[0_0_60px_rgba(0,0,0,0.18)] transition-all duration-300"
    >
      {/* ── Image Top with Overlay ── */}
      <div className="relative w-full h-[280px] overflow-hidden">
        <Image
          src={platform.image}
          alt={`${platform.name} Management`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-5">
          <div className="flex items-center gap-2 text-white mb-0.5">
            <span className="p-1.5 bg-white rounded-md shadow-sm">
              <span style={{ color: platform.brandColor }}>
                {platform.icon}
              </span>
            </span>
            <span className="text-xl font-bold tracking-tight uppercase">{platform.name}</span>
          </div>
          <p className="text-white/70 text-[9px] uppercase tracking-[2px] font-bold">Marketplace Management</p>
        </div>
      </div>

      {/* ── Content Bottom ── */}
      <div className="flex flex-col flex-1 p-5 bg-white">
        {/* Service Badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {["PPC Strategy", "Listing Audit"].map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-md bg-gray-50 text-gray-400 text-[9px] font-bold uppercase tracking-wider border border-gray-100">
              {tag}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h3 className="text-[1rem] font-bold text-gray-900 leading-tight mb-2">
          {platform.headline.map((part) => part.text).join(" ")}
        </h3>

        {/* Body */}
        <p className="text-[12px] text-gray-400 leading-normal mb-4 line-clamp-3">
          {platform.body}
        </p>

        {/* Key Result Line (Compact) */}
        <div className="flex items-center gap-2 mb-4 py-2 border-y border-gray-50">
          <TrendingUp className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[10px] font-bold text-gray-900 uppercase tracking-tight">
            Avg. Result: <span style={{ color: platform.brandColor }}>{platform.stat} {platform.statLabel}</span>
          </span>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Link
            href="#store-audit-form"
            className="flex items-center justify-center w-full py-3 rounded-xl text-white text-[13px] font-bold transition-all duration-300 active:scale-95 shadow-lg shadow-black/5"
            style={{
              backgroundColor: platform.brandColor,
            }}
          >
            {platform.cta}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function PlatformCardsSection() {
  return (
    <section className="bg-gray-100 py-20 md:py-28 relative overflow-hidden">
      <Layout>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <p className="text-[11px] uppercase font-bold tracking-[4px] text-gray-900 mb-3">
            Platform Specific Solutions
          </p>
          <h2 className="font-bw-gradual text-2xl sm:text-4xl md:text-5xl font-bold uppercase leading-[1.1] text-gray-900 mb-4 flex flex-col items-center">
            <span className="md:whitespace-nowrap text-center">Your Store Is Losing Sales on Every</span>
            <span className="inline-block bg-[#FF6B00] text-white px-5 py-2 rounded-2xl text-[0.65em] mt-4 text-center font-bold tracking-tight">
              Platform You&apos;re Not Optimising
            </span>
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Pick your platform. See exactly what we fix - and what it&apos;s been costing you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {platforms.map((platform, index) => (
            <PlatformCard key={platform.id} platform={platform} index={index} />
          ))}
        </div>
      </Layout>
    </section>
  );
}
