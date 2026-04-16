"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 px-6">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Powering India's Grid
        </motion.h1>

        <p className="mt-6 text-gray-300 max-w-xl mx-auto">
          765kV transmission, tower erection & infrastructure experts.
        </p>

        <div className="mt-8 flex gap-6 justify-center flex-wrap">
          <button className="btn-primary">View Projects</button>
          <button className="btn-outline">Contact Us</button>
        </div>

      </div>

    </section>
  )
}