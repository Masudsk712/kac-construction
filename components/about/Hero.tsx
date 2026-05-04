"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  // ✅ FIX: scroll to FIRST CONTENT (not StickyTabs)
  const handleScroll = () => {
    const el = document.getElementById("overview")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })

      tl.from(badgeRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(titleRef.current, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power4.out",
        })
        .from(subRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
        })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      className="
      relative 
      min-h-screen 
      w-full 
      overflow-hidden 
      flex items-center
      pt-24 md:pt-28
      "
    >

      {/* 🔥 BACKGROUND IMAGE */}
      <Image
        src="/about/Trans1pic.webp"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* 🔥 SOFT OVERLAY (Vikran style — not too dark) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        {/* BADGE */}
        <div
          ref={badgeRef}
          className="mb-6 inline-block px-4 py-1 rounded-full 
          border border-white/20 bg-white/10 backdrop-blur-md 
          text-sm text-white/80"
        >
          ABOUT KAC
        </div>

        {/* TITLE */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold 
          leading-tight max-w-4xl"
        >
          Empowering India’s <br />
          <span className="text-cyan-400">
            Infrastructure Landscape
          </span>
        </h1>

        {/* LINE */}
        <div className="w-16 h-[2px] bg-cyan-400 mt-6 mb-6" />

        {/* SUBTEXT */}
        <p
          ref={subRef}
          className="text-gray-300 max-w-xl text-lg leading-relaxed"
        >
          Building the future with innovation, precision and reliability
        </p>
      </div>

      {/* 🔥 SCROLL INDICATOR (clean like Vikran) */}
      <div
        onClick={handleScroll}
        className="
        absolute bottom-10 right-10 
        flex flex-col items-center 
        text-white/60 cursor-pointer 
        hover:text-cyan-400 transition
        z-20
        "
      >
        <span className="text-xs mb-2 tracking-widest">SCROLL</span>

        <div className="relative h-12 w-[2px] overflow-hidden">
          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute top-0 left-0 w-full h-5 bg-cyan-400 animate-bounce" />
        </div>
      </div>

    </section>
  )
}