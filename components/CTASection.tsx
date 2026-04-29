"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="relative py-32 bg-[#020617] text-white overflow-hidden">

      {/* 🔥 Subtle Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 blur-3xl opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">

        {/* 🔥 Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Let’s Build the Future Together
        </motion.h2>

        {/* 🔥 Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
        >
          From transmission lines to large-scale infrastructure —  
          we deliver reliable, high-quality construction solutions across India.
        </motion.p>

        {/* 🔥 Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
        >

          {/* Primary CTA */}
          <a
            href="https://wa.me/919330758804"
            target="_blank"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-full text-lg font-medium transition shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            <FaWhatsapp />
            Start a Project
          </a>

          {/* Secondary CTA */}
          <a
            href="mailto:kacconstruction@gmail.com"
            className="px-8 py-4 border border-white/20 rounded-full text-lg hover:bg-white/10 transition"
          >
            Contact Us
          </a>

        </motion.div>

      </div>
    </section>
  );
}