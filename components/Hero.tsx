"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero({ startAnimation }: { startAnimation: boolean }) {

  const text = "Powering India's Grid"
  const [displayText, setDisplayText] = useState("")
  const [showContent, setShowContent] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (!startAnimation) return

    let i = 0

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1))
      i++

      if (i === text.length) {
        clearInterval(interval)
        setShowCursor(false)

        setTimeout(() => {
          setShowContent(true)
        }, 400)
      }
    }, 60)

    return () => clearInterval(interval)
  }, [startAnimation])

  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center text-center text-white overflow-hidden px-4">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/myhero.mp4" type="video/mp4" />
      </video>

      {/* 🔥 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ✨ Content */}
      <div className="relative z-10 max-w-4xl w-full">

        {/* 🔥 Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: startAnimation ? 1 : 0, y: startAnimation ? 0 : 80 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight"
        >
          {displayText}
          {showCursor && <span className="animate-pulse">|</span>}
        </motion.h1>

        {/* 📄 Paragraph */}
        {showContent && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto"
          >
            765kV transmission, tower erection & infrastructure experts.
          </motion.p>
        )}

        {/* 🔘 Buttons */}
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="btn-primary">
              View Projects
            </button>

            <button className="btn-outline">
              Contact Us
            </button>
          </motion.div>
        )}

      </div>

    </section>
  )
}