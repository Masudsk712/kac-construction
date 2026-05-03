"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Awards() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {

      gsap.from(".award-card", {
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
        Awards & Accolades
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="
              award-card 
              overflow-hidden 
              rounded-2xl 
              group
              border border-white/10
              bg-white/5 backdrop-blur-md
            "
          >
            <img
              src="/award.jpg"
              className="
                w-full h-full object-cover
                transition duration-500
                group-hover:scale-110
              "
            />
          </div>
        ))}

      </div>

    </section>
  )
}