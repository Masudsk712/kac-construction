"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Awards() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.from(".award-card", {
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
      <h2 className="text-5xl text-center mb-10">Awards & Accolades</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map((i) => (
          <div key={i} className="award-card overflow-hidden rounded-xl">
            <img
              src="/award.jpg"
              className="hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  )
}