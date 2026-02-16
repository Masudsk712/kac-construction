"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover scale-110"
      >
        <source src="/tower-video5.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-sm"></div>

      <div className="relative z-10 max-w-6xl px-6">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tight"
        >
          Powering India's Future
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent"
        >
          765kV Transmission Excellence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-gray-300 text-lg max-w-3xl mx-auto"
        >
          Delivering world-class Erection, Foundation & Stringing
          services for India's largest power corporations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex justify-center gap-6"
        >
          <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl hover:scale-110 transition shadow-[0_0_50px_rgba(0,255,255,0.5)]">
            View Projects
          </button>

          <button className="px-10 py-4 border border-white/40 rounded-2xl hover:bg-white/10 transition">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
