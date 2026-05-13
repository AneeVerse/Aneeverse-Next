"use client";

import { motion } from "framer-motion";
import Layout from "@/components/common/Layout";
import Image from "next/image";
import { FaStar, FaGoogle } from "react-icons/fa";

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
    name: "Sanjay Shah",
    role: "CEO, RetailHub",
    avatar: "S",
    rating: 5,
    featured: true,
    weeksAgo: "2 weeks ago",
    text: "Our Amazon sales were stagnant for months. Aneeverse took over our PPC and listing optimization, and we saw a 45% jump in revenue in just 60 days.",
  },
  {
    name: "Navin Agarwal",
    role: "Founder, Novino Inks",
    avatar: "/images/testimonals/navino.png",
    rating: 5,
    featured: false,
    weeksAgo: "6 weeks ago",
    text: "AneeVerse built a stunning eCommerce presence that truly reflects our brand. Abhijeet understood my vision on a personal level – he knew exactly what I wanted.",
  },
  {
    name: "Rahul Mehta",
    role: "Director, LuxeDecor",
    avatar: "R",
    rating: 5,
    featured: false,
    weeksAgo: "3 weeks ago",
    text: "The best decision we made for our Etsy store. Search visibility tripled in months and our Star Seller status has never been more secure.",
  },
  {
    name: "Priya Das",
    role: "Owner, GlowOrganic",
    avatar: "P",
    rating: 5,
    featured: true,
    weeksAgo: "1 week ago",
    text: "Cassini optimization for eBay is real. Aneeverse knows the algorithm better than anyone. They source the data, we just handle the inventory.",
  },
  {
    name: "Amrita Thakar",
    role: "Founder, JM Visa Services",
    avatar: "/images/testimonals/jm-visa.png",
    rating: 5,
    featured: false,
    weeksAgo: "8 weeks ago",
    text: "Their smart strategies got us to number one while cutting our marketing costs. Best move we made for the business.",
  },
];

export default function ReviewsSection() {
  // Duplicate reviews for infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="bg-[#03151a] text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#88d7f0]/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      <Layout>
        {/* Header — matches HumanCreativity style */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm font-medium tracking-tight uppercase text-[#88d7f0] mb-3"
          >
            Real Stories From Real Brands
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bw-gradual text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight max-w-4xl mx-auto"
          >
            What Do Clients Say About{" "}
            <span className="inline-block bg-[#FF6B00] text-[#03151a] px-4 py-1 rounded-xl text-[0.7em] mt-4 font-bold tracking-tight">
              Working With Us?
            </span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-8"
          >
            <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.1] rounded-full px-4 py-2">
              <FaGoogle className="w-4 h-4 text-white/90" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-wider">Excellent</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-3 h-3 text-yellow-400" />
                ))}
              </div>
            </div>
            <span className="text-white/40 text-[11px] font-medium uppercase tracking-widest">
              5.0 BASED ON GOOGLE REVIEWS
            </span>
          </motion.div>
        </div>
      </Layout>

      {/* Infinite Horizontal Scroll & Touch Scroll for Mobile */}
      <div className="relative mt-4">
        {/* Fades */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#03151a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#03151a] to-transparent z-10 pointer-events-none"></div>

        <div className="overflow-x-auto md:overflow-x-visible scrollbar-hide snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
          <motion.div
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex gap-6 w-fit px-6 md:px-0 pointer-events-auto"
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={index}
                className="w-[280px] md:w-[400px] flex-shrink-0 snap-center bg-[#072d36] rounded-2xl p-6 md:p-8 flex flex-col hover:bg-[#093540] transition-colors duration-300 group relative overflow-hidden"
              >
              {/* Hover accent line */}
              <div className="absolute left-0 top-[85%] w-[2px] h-[60px] bg-gradient-to-b from-transparent via-[#88d7f0] to-transparent opacity-0 group-hover:opacity-100 group-hover:top-[10%] transition-all duration-1000 ease-in-out z-10" />

              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="w-3.5 h-3.5 text-yellow-400" />
                  ))}
                </div>
                <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">{review.weeksAgo}</span>
              </div>

              <blockquote className="text-[14px] md:text-[15px] text-gray-300 leading-relaxed mb-8 font-medium italic">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 relative flex-shrink-0 flex items-center justify-center bg-white/5">
                  {review.avatar.length === 1 ? (
                    <span className="text-white font-bold text-lg">{review.avatar}</span>
                  ) : (
                    <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                  )}
                </div>
                <div>
                  <p className="text-white font-bold text-[15px] leading-tight mb-1 uppercase tracking-tight">{review.name}</p>
                  <p className="text-[#88d7f0] text-[11px] font-bold uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
