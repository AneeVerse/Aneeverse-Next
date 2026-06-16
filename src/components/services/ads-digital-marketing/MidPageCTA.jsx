"use client";

import { motion } from "framer-motion";
import Layout from "@/components/common/Layout";
import AnimatedButton from "@/components/common/AnimatedButton";

export default function MidPageCTA() {
  return (
    <section className="bg-[#03151a] py-12 md:py-16 border-y border-white/[0.05]">
      <Layout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto px-4"
        >
          <p className="text-white/70 text-base md:text-lg mb-6 leading-relaxed">
            Not sure which service you need first?
          </p>
          <AnimatedButton
            href="#consultation-form"
            className="px-8 py-4 rounded-full font-bold text-sm md:text-base flex items-center justify-center text-center mx-auto"
            style={{ backgroundColor: "#88D7F0", color: "#073742" }}
            mainTextSlide="-130%"
            duplicateTextStart="100%"
            duplicateTextEnd="-100%"
          >
            Let&apos;s Talk — We&apos;ll Figure It Out Together
          </AnimatedButton>
        </motion.div>
      </Layout>
    </section>
  );
}
