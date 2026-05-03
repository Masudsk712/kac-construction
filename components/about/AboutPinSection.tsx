"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function AboutPinSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!ref.current) return

    const ctx = gsap.context(() => {

      ScrollTrigger.create({
        trigger: ref.current,
        start: "top top",
        end: "+=400",
        scrub: true,
        pin: true,
      })

      gsap.to(".pin-text", {
        y: -100,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "+=400",
          scrub: true,
        },
      })

    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="h-screen flex items-center justify-center bg-[#020617]">
      <h1 className="pin-text text-5xl md:text-6xl font-bold text-center">
        ABOUT KAC CONSTRUCTION
      </h1>
    </section>
  )
}   