"use client";

import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-gray-400 pt-20 pb-10 overflow-hidden">

      {/* 🔥 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/tower-pic1.webp')" }} //
      />

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#020617]/90 backdrop-sm" />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 w-[90%] mx-auto grid md:grid-cols-5 gap-10">

        {/* LOGO / ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <h2 className="text-cyan-400 text-2xl font-bold mb-4 tracking-wide">
            KAC Construction
          </h2>

          <p className="text-sm leading-relaxed max-w-sm">
            Experts in transmission line, tower erection and power grid
            infrastructure across India — delivering reliable and scalable
            engineering solutions.
          </p>

          {/* 🔥 SQUARE MAP */}
          <div className="mt-6 w-[200px] h-[200px] rounded-xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d432.17565475395367!2d88.10431903451729!3d25.081620092933274!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA0JzUzLjYiTiA4OMKwMDYnMTUuOCJF!5e1!3m2!1sen!2sus!4v1777467118026!5m2!1sen!2sus"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-white mb-4 font-semibold">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-cyan-400 transition cursor-pointer">Home</li>
            <li className="hover:text-cyan-400 transition cursor-pointer">Services</li>
            <li className="hover:text-cyan-400 transition cursor-pointer">Projects</li>
            <li className="hover:text-cyan-400 transition cursor-pointer">Contact</li>
          </ul>
        </motion.div>

        {/* SERVICES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-white mb-4 font-semibold">Services</h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white transition">Tower Foundation</li>
            <li className="hover:text-white transition">Tower Erection</li>
            <li className="hover:text-white transition">Stringing Work</li>
            <li className="hover:text-white transition">Power Grid Projects</li>
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-white mb-4 font-semibold">Contact</h3>

          <div className="space-y-3 text-sm">

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-cyan-400" />
              <span>+91 9330758804</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-400" />
              <span>kacconstruction@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-cyan-400" />
              <span>Malda, West Bengal</span>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919330758804"
              target="_blank"
              className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full bg-green-500/10 text-green-400 hover:bg-green-500/20 transition"
            >
              <FaWhatsapp />
              Chat
            </a>

          </div>
        </motion.div>
      </div>

      {/* 🔥 BOTTOM */}
      <div className="relative z-10 mt-14 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} KAC Construction. All rights reserved.
      </div>
    </footer>
  );
}