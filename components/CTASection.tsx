"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="py-28 bg-[#020617] text-white">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-bold text-cyan-400 mb-16"
      >
        Ready to Work With Us?
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 w-[90%] mx-auto items-center">

        {/* LEFT CONTACT INFO */}
        <div className="space-y-6">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 p-5 bg-[#111827] rounded-xl border border-white/10"
          >
            <FaPhoneAlt className="text-cyan-400 text-xl" />
            <p>+91 9330758804</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 p-5 bg-[#111827] rounded-xl border border-white/10"
          >
            <FaEnvelope className="text-cyan-400 text-xl" />
            <p>kacconstruction@gmail.com</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 p-5 bg-[#111827] rounded-xl border border-white/10"
          >
            <FaMapMarkerAlt className="text-cyan-400 text-xl" />
            <p>Malda, West Bengal, India</p>
          </motion.div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919330758804"
            target="_blank"
            className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 rounded-lg hover:bg-green-600 transition mt-6"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>

        </div>

        {/* RIGHT GOOGLE MAP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-[350px] rounded-xl overflow-hidden border border-white/10"
        >
          <iframe
            src="https://www.google.com/maps?q=Malda,West Bengal&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  );
}