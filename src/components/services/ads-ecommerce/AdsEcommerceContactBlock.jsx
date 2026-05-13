"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/common/Layout";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function AdsEcommerceContactBlock() {
  return (
    <section className="bg-white py-12 md:py-16">
      <Layout>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2rem] overflow-hidden shadow-2xl min-h-[300px] md:min-h-[360px] flex items-center"
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/custom-desktop-bg.avif"
              alt="Custom video production astronaut"
              fill
              className="object-cover object-right md:object-center"
              priority
              unoptimized
            />
            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-8 md:px-16 py-10 md:py-14">
            <div className="max-w-2xl text-left">
              <h2 className="font-bw-gradual text-3xl md:text-5xl font-bold text-white mb-6 leading-tight uppercase drop-shadow-md">
                Not sure which plan <br className="hidden md:block" />
                <span className="text-[#C0FF7C]">fits your store?</span>
              </h2>
              <p className="text-white/80 text-base md:text-lg mb-10 leading-relaxed max-w-lg drop-shadow-md">
                Our team will review your account and give you a clear picture of what needs to happen first.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="https://wa.me/919152755529"
                  target="_blank"
                  className="bg-[#25D366] text-white font-extrabold px-10 py-4 rounded-xl hover:bg-[#1eb956] transition-all duration-300 text-[15px] shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-3"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Chat on WhatsApp
                </Link>
                
                <Link
                  href="tel:+919152755529"
                  className="bg-white text-[#072d36] font-extrabold px-10 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 text-[15px] shadow-lg flex items-center justify-center gap-3"
                >
                  <FaPhoneAlt className="w-4 h-4" />
                  Call Expert
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </Layout>
    </section>
  );
}
