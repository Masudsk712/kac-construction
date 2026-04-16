"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
    >
      {/* Logo Animation */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-cyan-400"
      >
        KAC CONSTRUCTION
      </motion.h1>

      {/* Line Animation */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ delay: 0.5, duration: 1 }}
        className="h-[2px] bg-cyan-400 mt-6"
      />

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-6 text-gray-400"
      >
        Powering India's Infrastructure
      </motion.p>
    </motion.div>
  )
}