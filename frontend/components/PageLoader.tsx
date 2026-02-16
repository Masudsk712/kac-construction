"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.2 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="text-4xl font-bold text-cyan-400"
      >
        KAC CONSTRUCTION
      </motion.h1>
    </motion.div>
  )
}
