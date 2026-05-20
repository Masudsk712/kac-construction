"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

import { useReducedMotion } from "@/lib/useReducedMotion"

export default function ScrollZoom({
  children,
}: {
  children: React.ReactNode
}) {
  const ref = useRef(null)
  const reducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0.94, 1, 1, 0.94]
  )

  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.55, 1, 1, 0.55]
  )

  // Smoother spring config for a premium, fluid feel
  const scale = useSpring(rawScale, {
    stiffness: 60,
    damping: 20,
    mass: 1.2,
  })

  const opacity = useSpring(rawOpacity, {
    stiffness: 60,
    damping: 20,
    mass: 1.2,
  })

  if (reducedMotion) {
    return <div className="relative w-full">{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="relative w-full"
    >
      {children}
    </motion.div>
  )
}
