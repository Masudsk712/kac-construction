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
    [0, 0.5, 1],
    [0.92, 1, 0.92]
  )

  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0.6, 1, 1, 0.6]
  )

  const scale = useSpring(rawScale, {
    stiffness: 90,
    damping: 22,
  })

  const opacity = useSpring(rawOpacity, {
    stiffness: 90,
    damping: 22,
  })

  if (reducedMotion) {
    return <div className="relative w-full">{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="relative w-full py-6 md:py-10"
    >
      {children}
    </motion.div>
  )
}
