"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  // 🔥 SCROLL FUNCTION
  const handleScroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // 🔥 GSAP ANIMATION
  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(badgeRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
    })
      .from(titleRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
      })
      .from(subRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
      })
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* 🔥 BACKGROUND IMAGE */}
      <Image
        src="/about/Trans1pic.webp" // 👉 apna image public folder mein daal
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* 🔥 GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">

        {/* Badge */}
        <div
          ref={badgeRef}
          className="mb-6 inline-block w-fit px-4 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm text-white/80"
        >
          • ABOUT KAC
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-7xl font-bold leading-tight max-w-4xl"
        >
          Empowering India’s <br />
          <span className="text-cyan-400">
            Infrastructure Landscape
          </span>
        </h1>

        {/* Line */}
        <div className="w-20 h-[3px] bg-cyan-400 mt-6 mb-6" />

        {/* Subtitle */}
        <p
          ref={subRef}
          className="text-gray-300 max-w-xl text-lg"
        >
          Building the future with innovation, precision and reliability
        </p>
      </div>

      {/* 🔥 SCROLL INDICATOR (CLICKABLE) */}
      <div
        onClick={handleScroll}
        className="absolute bottom-10 right-10 flex flex-col items-center text-white/70 cursor-pointer hover:text-cyan-400 transition"
      >
        <span className="text-xs mb-2">Scroll</span>

        <div className="w-[2px] h-12 bg-gradient-to-b from-cyan-400 to-transparent animate-bounce" />
      </div>

      {/* 🔥 SCROLL TARGET */}
      <div ref={scrollRef} />
    </section>
  )
}