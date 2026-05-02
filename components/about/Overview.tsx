"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Overview() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    })

    tl.from(".overview-text", {
      opacity: 0,
      y: 60,
      duration: 1,
    })
      .from(".overview-img", {
        opacity: 0,
        x: 100,
        duration: 1,
      }, "-=0.5")

  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white text-black"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div className="overview-text space-y-6">

          <p className="text-sm text-gray-500 tracking-widest">
            VIKRAN ENGINEERING
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Charting the Future of Energy:
            <br /> Inside VIKRAN’s Journey
          </h2>

          <p className="text-gray-600 leading-relaxed">
            VIKRAN stands as one of the fast-growing Indian Engineering,
            Procurement and Construction (EPC) company, boasting a rapid
            growth trajectory with a targeted turnover of 500 Cr.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our extensive portfolio covers a spectrum of essential services,
            ranging from infrastructure projects to Power Transmission and EHV
            substations reaching up to 765kV.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="overview-img">
          <Image
            src="/about/team.jpg" // 👉 apna image daal
            alt="Team"
            width={600}
            height={500}
            className="rounded-xl shadow-xl object-cover"
          />
        </div>

      </div>
    </section>
  )
}