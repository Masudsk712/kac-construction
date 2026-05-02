"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Vision() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.from(".vision-card", {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    })
  }, [])

  return (
    <section id="vision" ref={ref} className="container-custom">

      {/* TITLE */}
      <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
        Our Vision & Values
      </h2>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* MISSION */}
        <div className="vision-card glass p-8 rounded-2xl card-hover glow">
          <h3 className="text-2xl font-semibold mb-4 gradient-text">
            Our Mission
          </h3>
          <p className="text-gray-400 leading-relaxed">
            To deliver world-class infrastructure solutions with innovation,
            quality, and reliability while exceeding client expectations.
          </p>
        </div>

        {/* VISION */}
        <div className="vision-card glass p-8 rounded-2xl card-hover glow">
          <h3 className="text-2xl font-semibold mb-4 gradient-text">
            Our Vision
          </h3>
          <p className="text-gray-400 leading-relaxed">
            To be a leading infrastructure company shaping India’s future
            through sustainable and advanced engineering solutions.
          </p>
        </div>

        {/* VALUES */}
        <div className="vision-card glass p-8 rounded-2xl card-hover glow">
          <h3 className="text-2xl font-semibold mb-4 gradient-text">
            Our Values
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Integrity, innovation, safety, and excellence drive everything
            we do at KAC Construction.
          </p>
        </div>

      </div>
    </section>
  )
}