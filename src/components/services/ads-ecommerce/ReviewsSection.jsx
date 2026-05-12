"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/common/Layout";
import Image from "next/image";
import { FaStar, FaChevronLeft, FaChevronRight, FaGoogle } from "react-icons/fa";

const reviews = [
  {
    name: "Vikram Manghnani",
    role: "Founder, VMC",
    avatar: "/images/testimonals/Vmc.png",
    rating: 5,
    featured: true,
    weeksAgo: "4 weeks ago",
    text: "Aneeverse brought fresh ideas that made our creative work simple. They felt like a team that genuinely cared about our vision, and they became a key part of our expansion.",
  },
  {
    name: "Navin Agarwal",
    role: "Founder, Novino Inks",
    avatar: "/images/testimonals/navino.png",
    rating: 5,
    featured: false,
    weeksAgo: "6 weeks ago",
    text: "AneeVerse built a stunning eCommerce presence that truly reflects our brand. Abhijeet understood my vision on a personal level – he knew exactly what I wanted and brought it to life with unmatched efficiency.",
  },
  {
    name: "Amrita Thakar",
    role: "Founder, JM Visa Services",
    avatar: "/images/testimonals/jm-visa.png",
    rating: 5,
    featured: false,
    weeksAgo: "8 weeks ago",
    text: "AneeVerse redesigned our entire digital presence, and the leads started flowing. Their smart strategies got us to number one in Mumbai while cutting our marketing costs. Best move we made for the business.",
  },
];

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="bg-secondary-500 text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/[0.04] rounded-full blur-[120px] pointer-events-none"></div>

      <Layout>
        <div className="text-center mb-14">
          <p className="text-sm uppercase font-light tracking-[2px] text-primary-500 mb-3">Reviews</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4">
            What Do Clients Say About{" "}
            <span className="font-Rock_Salt text-primary-500 text-[0.7em] relative -top-1">Working With Us?</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <FaGoogle className="w-5 h-5 text-white/80" />
            <span className="text-white/70 text-sm font-medium">Excellent</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4 text-yellow-400" />
              ))}
            </div>
            <span className="text-white/50 text-sm ml-1">
              5.0 out of 5 based on Google reviews
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-6 md:p-8 flex flex-col hover:bg-white/[0.06] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-5">
                {review.featured ? (
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 text-[10px] font-bold tracking-wider uppercase">
                    Featured
                  </span>
                ) : (
                  <div className="h-6"></div>
                )}
                <span className="text-[11px] text-white/30 font-medium">{review.weeksAgo}</span>
              </div>

              <div className="flex gap-0.5 mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="w-3.5 h-3.5 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-[15px] md:text-base text-white/80 leading-relaxed mb-8 font-light italic">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 mt-auto">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-white/10 relative flex-shrink-0">
                  <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-white font-semibold text-[15px] leading-tight mb-0.5">{review.name}</p>
                  <p className="text-white/40 text-[12px]">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Layout>
    </section>
  );
}
