"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ParallaxSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-150px", "150px"])

  return (
    <section ref={ref} className="relative h-[80vh] overflow-hidden flex items-center justify-center text-white">

      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('/tower-pic1.webp')] bg-cover bg-center"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center max-w-4xl px-6">
        <h2 className="text-5xl font-bold text-cyan-400">
          Engineering India's Power Backbone
        </h2>
        <p className="mt-6 text-gray-300">
          Built with strength. Designed for the future.
        </p>
      </div>
    </section>
  )
}
