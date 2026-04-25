"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 2500) // ⏱️ loader duration

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 w-screen h-screen overflow-hidden z-[9999]"
    >

      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/Hero.mp4" type="video/mp4" />
      </video>

      {/* 🔥 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />

      {/* ✨ Glow Light */}
      <div className="absolute w-[300px] h-[300px] bg-cyan-400/20 blur-3xl rounded-full top-10 left-10" />

      {/* ✨ Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        {/* 🔥 Logo */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-widest"
        >
          <span className="text-cyan-400">KAC</span>
        </motion.h1>

        {/* 🔥 Animated Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "180px", opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 mt-6"
        />

        {/* 🔥 Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-6 text-gray-300 text-sm md:text-base"
        >
          Powering India's Infrastructure
        </motion.p>

        {/* 🔥 Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex gap-2 mt-4"
        >
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
        </motion.div>

      </div>
    </motion.div>
  )
}