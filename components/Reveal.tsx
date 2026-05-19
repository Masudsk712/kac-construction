"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

import { useReducedMotion } from "@/lib/useReducedMotion"

export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const reducedMotion = useReducedMotion()
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  if (reducedMotion) {
    return <div ref={ref}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 48,
        scale: 0.98,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration: 0.65,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
