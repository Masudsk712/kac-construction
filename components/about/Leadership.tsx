"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Leadership() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.from(".leader-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    })
  }, [])

  return (
    <section ref={ref} className="p-16">
      <h2 className="text-5xl text-center mb-10">Leadership</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {[1,2,3,4].map((i) => (
          <div key={i} className="leader-card bg-white/10 p-4 rounded-xl hover:scale-105 transition">
            <img src="/leader.jpg" className="rounded-lg mb-3"/>
            <h3>Director</h3>
          </div>
        ))}
      </div>
    </section>
  )
}