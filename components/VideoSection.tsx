"use client"

import { motion } from "framer-motion"

export default function VideoSection() {
  return (
    <section className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden bg-[#020617]">

      {/* 🎥 VIDEO (FIXED - NO FLICKER) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover scale-105"
      >
        <source src="/videos/myhero.mp4" />
      </video>

      {/* 🔥 OVERLAYS */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/80" />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-bold 
          bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 
          text-transparent bg-clip-text 
          drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]"
        >
          Infrastructure At Scale
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-300 text-base md:text-lg max-w-2xl"
        >
          Delivering high-voltage transmission networks with precision,
          reliability, and engineering excellence.
        </motion.p>

        {/* 🔥 CINEMATIC BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 px-8 py-3 rounded-full 
          border border-cyan-400 text-cyan-400 
          backdrop-blur-md bg-white/5
          hover:bg-cyan-400 hover:text-black 
          transition-all duration-300 
          hover:shadow-[0_0_20px_rgba(34,211,238,0.8)]"
        >
          Explore Projects →
        </motion.button>

      </div>
    </section>
  )
}