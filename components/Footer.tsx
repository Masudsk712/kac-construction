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
    <footer className="relative text-gray-400 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/tower-pic1.webp')" }}
      />

      <div className="absolute inset-0 bg-[#020617]/90" />

      <div className="container-custom relative z-10 grid md:grid-cols-5 gap-10 pt-20 pb-10">

        {/* ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="md:col-span-2"
        >
          <h2 className="text-cyan-400 text-xl font-bold mb-4">
            KAC Construction
          </h2>

          <p className="text-sm max-w-sm">
            Transmission line, tower erection and power infrastructure experts across India.
          </p>

          {/* MAP */}
          <div className="mt-6 w-[180px] h-[180px] rounded-xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d432.17565475395367!2d88.10431903451729!3d25.081620092933274!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA0JzUzLjYiTiA4OMKwMDYnMTUuOCJF!5e1!3m2!1sen!2sus!4v1777467118026!5m2!1sen!2sus"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* LINKS */}
        <div>
          <h3 className="text-white mb-3 font-semibold">Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-cyan-400 cursor-pointer">Home</li>
            <li className="hover:text-cyan-400 cursor-pointer">Services</li>
            <li className="hover:text-cyan-400 cursor-pointer">Projects</li>
            <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white mb-3 font-semibold">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Tower Foundation</li>
            <li>Tower Erection</li>
            <li>Stringing Work</li>
            <li>Power Grid</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white mb-3 font-semibold">Contact</h3>

          <div className="space-y-2 text-sm">

            <div className="flex gap-2 items-center">
              <FaPhoneAlt className="text-cyan-400" />
              +91 9330758804
            </div>

            <div className="flex gap-2 items-center">
              <FaEnvelope className="text-cyan-400" />
              kacconstruction@gmail.com
            </div>

            <div className="flex gap-2 items-center">
              <FaMapMarkerAlt className="text-cyan-400" />
              Malda, WB
            </div>

            <a
              href="https://wa.me/919330758804"
              target="_blank"
              className="inline-flex items-center gap-2 mt-2 text-green-400"
            >
              <FaWhatsapp /> WhatsApp
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="relative z-10 text-center text-sm border-t border-white/10 py-4">
        © {new Date().getFullYear()} KAC Construction
      </div>
    </footer>
  );
}