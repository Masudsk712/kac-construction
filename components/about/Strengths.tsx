"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

const data = [
  "Brand KAC",
  "Customer base in Govt sectors",
  "Integrated Supply Chain",
  "Capabilities in difficult terrains",
  "Planning for ahead schedule",
]

export default function Strengths() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.from(".strength-card", {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    })
  }, [])

  return (
    <section ref={ref} className="bg-white text-black py-20">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-sm text-gray-500 mb-2">OUR STRENGTHS</p>

        <h2 className="text-4xl md:text-5xl font-semibold mb-12">
          Delving Into Our Specialized Capabilities
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {data.map((item, i) => (
            <div
              key={i}
              className="strength-card flex items-center gap-3 p-5 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
            >
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                ✓
              </div>
              <p>{item}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}