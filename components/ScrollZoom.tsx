"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

import { useReducedMotion } from "@/lib/useReducedMotion"
import { useMediaQuery } from "@/lib/useMediaQuery"

export default function ScrollZoom({
  children,
}: {
  children: React.ReactNode
}) {
  const ref = useRef(null)
  const reducedMotion = useReducedMotion()
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0.985, 1, 1, 0.985]
  )

  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.82, 1, 1, 0.82]
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

  if (reducedMotion || !isDesktop) {
    return <div ref={ref} className="relative w-full">{children}</div>
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
