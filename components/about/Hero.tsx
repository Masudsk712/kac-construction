"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  // 🔥 FIX: scroll directly to StickyTabs
  const handleScroll = () => {
    const el = document.getElementById("StickyTabs")
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // navbar offset
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    gsap.set([badgeRef.current, titleRef.current, subRef.current], {
      opacity: 1,
    })

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.2,
      })

      tl.from(badgeRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(titleRef.current, {
          opacity: 0,
          y: 80,
          duration: 1,
          ease: "power4.out",
        })
        .from(subRef.current, {
          opacity: 0,
          y: 40,
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
      pt-24 md:pt-28
      flex items-center
      "
    >

      {/* BACKGROUND IMAGE */}
      <Image
        src="/about/Trans1pic.webp"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        {/* BADGE */}
        <div
          ref={badgeRef}
          className="opacity-100 mb-6 inline-block w-fit px-4 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm text-white/80"
        >
          • ABOUT KAC
        </div>

        {/* TITLE */}
        <h1
          ref={titleRef}
          className="opacity-100 text-4xl md:text-7xl font-bold leading-tight max-w-4xl"
        >
          Empowering India’s <br />
          <span className="text-cyan-400">
            Infrastructure Landscape
          </span>
        </h1>

        {/* LINE */}
        <div className="w-20 h-[3px] bg-cyan-400 mt-6 mb-6" />

        {/* SUBTEXT */}
        <p
          ref={subRef}
          className="opacity-100 text-gray-300 max-w-xl text-lg"
        >
          Building the future with innovation, precision and reliability
        </p>
      </div>

      {/* 🔥 IMPROVED SCROLL BUTTON */}
      <div
        onClick={handleScroll}
        className="
        absolute bottom-10 right-10 
        flex flex-col items-center 
        text-white/70 cursor-pointer 
        hover:text-cyan-400 transition
        z-20
        "
      >
        <span className="text-xs mb-2 tracking-widest">SCROLL</span>

        <div className="relative h-14 w-[2px] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white/20" />
          <div className="absolute top-0 left-0 w-full h-6 bg-cyan-400 animate-bounce" />
        </div>
      </div>

    </section>
  )
}