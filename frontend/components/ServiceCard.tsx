"use client"

import { motion } from "framer-motion"

interface Props {
  title: string
  description: string
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative bg-white/5 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-white/10 hover:border-cyan-400 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition duration-500"></div>

      <h3 className="text-2xl font-semibold mb-4 text-cyan-400 relative z-10">
        {title}
      </h3>

      <p className="text-gray-300 relative z-10">
        {description}
      </p>
    </motion.div>
  )
}
