"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Leadership() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {

      gsap.from(".leader-card", {
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      })

    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 bg-[#020617] text-white">

      <h2 className="text-4xl md:text-5xl text-center mb-16 font-semibold">
        Leadership
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 lg:grid-cols-4 gap-8">

        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="
              leader-card 
              bg-white/5 backdrop-blur-xl 
              border border-white/10
              p-5 rounded-2xl 
              transition duration-300
              hover:scale-105 
              hover:shadow-xl 
              hover:shadow-cyan-500/20
            "
          >
            <img
              src="/leader.jpg"
              className="rounded-lg mb-4"
            />

            <h3 className="text-lg font-semibold">Director</h3>
            <p className="text-sm text-gray-400">KAC Construction</p>
          </div>
        ))}

      </div>

    </section>
  )
}