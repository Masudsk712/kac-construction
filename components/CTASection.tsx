"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="bg-[#020617] text-white relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 blur-3xl opacity-40" />

      <div className="container-custom text-center max-w-4xl relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Let’s Build the Future Together
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-gray-400 max-w-2xl mx-auto"
        >
          Reliable transmission infrastructure with precision, quality, and trust.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >

          <a
            href="https://wa.me/919330758804"
            target="_blank"
            className="flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 transition"
          >
            <FaWhatsapp />
            Start a Project
          </a>

          <a
            href="mailto:kacconstruction@gmail.com"
            className="px-7 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            Contact Us
          </a>

        </motion.div>

      </div>
    </section>
  );
}