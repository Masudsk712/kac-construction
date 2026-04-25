"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ScrollZoom({
  children,
}: {
  children: React.ReactNode
}) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // 🔥 important fix
  })

  // 🔥 Zoom OUT effect
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <motion.section
      ref={ref}
      style={{ scale, opacity }}
      className="h-screen sticky top-0 flex items-center justify-center"
    >
      {children}
    </motion.section>
  )
}