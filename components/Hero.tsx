"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import MagneticButton from "./MagneticButton"

gsap.registerPlugin(ScrollTrigger)

export default function Hero({ startAnimation }: { startAnimation: boolean }) {
  const heroRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLVideoElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current || !bgRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {

      // 🎥 Background Parallax (slow)
      gsap.to(bgRef.current, {
        y: 120,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      // ✨ Content Parallax (fast)
      gsap.to(contentRef.current, {
        y: 200,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative h-[120vh] overflow-hidden flex items-center justify-center text-center text-white"
    >
      {/* 🎥 Background Video */}
      <video
        ref={bgRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover scale-110"
      >
        <source src="/videos/Background.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 px-6">

        <h1 className="text-5xl md:text-7xl font-bold">
          Powering India's Grid
        </h1>

        <p className="mt-6 text-gray-300">
          765kV transmission, tower erection & infrastructure experts.
        </p>

        <div className="mt-8 flex gap-6 justify-center">
          <MagneticButton>View Projects</MagneticButton>
          <MagneticButton>Contact Us</MagneticButton>
        </div>

      </div>
    </section>
  )
}