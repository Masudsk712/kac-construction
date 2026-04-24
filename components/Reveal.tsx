"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.95
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1
            }
          : {}
      }
      transition={{
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1] // 🔥 premium easing
      }}
    >
      {children}
    </motion.div>
  )
}