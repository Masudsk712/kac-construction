"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Journey() {
  const lineRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(lineRef.current,
      { height: 0 },
      {
        height: "100%",
        duration: 2,
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
        },
      }
    )
  }, [])

  return (
    <section className="p-16 relative">
      <h2 className="text-5xl text-center mb-10">Our Journey</h2>

      <div className="relative flex justify-center">
        <div ref={lineRef} className="absolute w-[3px] bg-cyan-400 h-full" />

        <div className="space-y-10">
          <div>2015 - Company Started</div>
          <div>2018 - Expansion</div>
          <div>2023 - Major Projects</div>
        </div>
      </div>
    </section>
  )
}