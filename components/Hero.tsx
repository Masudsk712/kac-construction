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
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">

      {/* 🎥 VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/myhero.mp4" type="video/mp4" />
      </video>

      {/* 🔥 Cinematic Overlay (NO EXTRA BLUR) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

      {/* CONTENT */}
      <div className="relative z-10 px-6">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          {displayText}
          {showCursor && <span className="animate-pulse">|</span>}
        </motion.h1>

        {/* Paragraph */}
        {showContent && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-gray-300 max-w-xl mx-auto"
          >
            765kV transmission, tower erection & infrastructure experts.
          </motion.p>
        )}

        {/* Buttons */}
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 flex gap-6 justify-center flex-wrap"
          >
            <button className="btn-primary">View Projects</button>
            <button className="btn-outline">Contact Us</button>
          </motion.div>
        )}

      </div>
    </section>
  )
}