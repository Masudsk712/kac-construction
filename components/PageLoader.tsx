"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 4000) // ⏱️ yahan delay control karo (2.5 sec)

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-[9999] overflow-hidden"
    >

      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/Hero.mp4" type="video/mp4" />
      </video>

      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ✨ Content */}
      <div className="relative z-10 flex flex-col items-center">

        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-cyan-400"
        >
          KAC
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-[2px] bg-cyan-400 mt-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 text-gray-300"
        >
          Powering India's Infrastructure
        </motion.p>

      </div>
    </motion.div>
  )
}