"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/common/Layout";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function ContactBlock() {
  return (
    <section className="bg-white py-12 md:py-16">
      <Layout>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row md:items-center bg-[#072d36] md:bg-transparent md:min-h-[360px]"
        >
          <div className="relative h-[220px] sm:h-[300px] md:absolute md:inset-0 md:h-full w-full overflow-hidden">
            <Image
              src="/images/custom-desktop-bg.avif"
              alt="Digital marketing consultation"
              fill
              className="object-cover object-right md:object-center"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/20 md:via-black/40 to-transparent" />
          </div>

          <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 py-8 md:py-14">
            <div className="max-w-2xl text-left">
              <h2 className="font-bw-gradual text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-5 sm:mb-6 leading-tight uppercase drop-shadow-md">
                Not sure which service{" "}
                <span className="text-[#88D7F0]">you need first?</span>
              </h2>
              <p className="text-white/80 text-[15px] sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed max-w-lg drop-shadow-md">
                Our team will review your setup and tell you exactly what to prioritise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="https://wa.me/919152755529"
                  target="_blank"
                  className="bg-[#88D7F0] text-[#072d36] font-extrabold px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl hover:bg-[#6dc8e6] transition-all duration-300 text-sm sm:text-[15px] shadow-lg shadow-[#88D7F0]/20 flex items-center justify-center gap-3"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Chat With Us on WhatsApp
                </Link>

                <Link
                  href="tel:+919152755529"
                  className="bg-white text-[#072d36] font-extrabold px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 text-sm sm:text-[15px] shadow-lg flex items-center justify-center gap-3"
                >
                  <FaPhoneAlt className="w-4 h-4" />
                  Call an Expert
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </Layout>
    </section>
  );
}
