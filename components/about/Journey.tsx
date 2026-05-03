"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Journey() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {

      // 🔥 line grow animation
      gsap.fromTo(
        lineRef.current,
        { height: 0 },
        {
          height: "100%",
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      )

      // 🔥 cards animation
      gsap.from(".journey-item", {
        opacity: 0,
        y: 80,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-[#020617] text-white relative">

      <h2 className="text-4xl md:text-5xl text-center mb-20 font-semibold">
        Our Journey
      </h2>

      <div className="relative flex justify-center">

        {/* 🔥 CENTER LINE */}
        <div
          ref={lineRef}
          className="absolute w-[3px] bg-cyan-400 h-full"
        />

        {/* 🔥 ITEMS */}
        <div className="space-y-16 text-center z-10">

          <div className="journey-item bg-white/10 px-8 py-5 rounded-xl backdrop-blur-md">
            2015 - Company Started
          </div>

          <div className="journey-item bg-white/10 px-8 py-5 rounded-xl backdrop-blur-md">
            2018 - Expansion
          </div>

          <div className="journey-item bg-white/10 px-8 py-5 rounded-xl backdrop-blur-md">
            2023 - Major Projects
          </div>

        </div>
      </div>

    </section>
  )
}