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
    <footer className="bg-[#020617] text-gray-400 pt-16 pb-10">

      <div className="w-[90%] mx-auto grid md:grid-cols-4 gap-10">

        {/* LOGO / ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-cyan-400 text-2xl font-bold mb-4">
            KAC Construction
          </h2>
          <p className="text-sm">
            Experts in transmission line, tower erection and power grid
            infrastructure across India.
          </p>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-white mb-4 font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-cyan-400 cursor-pointer">Home</li>
            <li className="hover:text-cyan-400 cursor-pointer">Services</li>
            <li className="hover:text-cyan-400 cursor-pointer">Projects</li>
            <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
          </ul>
        </motion.div>

        {/* SERVICES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-white mb-4 font-semibold">Services</h3>
          <ul className="space-y-2">
            <li>Tower Foundation</li>
            <li>Tower Erection</li>
            <li>Stringing Work</li>
            <li>Power Grid Projects</li>
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

            <a
              href="https://wa.me/919330758804"
              target="_blank"
              className="flex items-center gap-3 mt-3 text-green-400 hover:text-green-500"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

          </div>
        </motion.div>
      </div>

      {/* BOTTOM LINE */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} KAC Construction. All rights reserved.
      </div>
    </footer>
  );
}