"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

export default function ScrollZoom({
  children,
}: {
  children: React.ReactNode
}) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // 🔥 CINEMATIC SCALE (ZOOM IN + ZOOM OUT)
  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.85, 1, 0.85]
  )

  // 🔥 OPACITY
  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  )

  // 🔥 SMOOTH SPRING
  const scale = useSpring(rawScale, {
    stiffness: 90,
    damping: 20,
  })

  const opacity = useSpring(rawOpacity, {
    stiffness: 90,
    damping: 20,
  })

  return (
    <motion.section
      ref={ref}
      style={{ scale, opacity }}
      className="min-h-screen flex items-center justify-center"
    >
      {children}
    </motion.section>
  )
}