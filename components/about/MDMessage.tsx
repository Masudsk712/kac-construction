"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function MDMessage() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.from(ref.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    })
  }, [])

  return (
    <section ref={ref} className="grid md:grid-cols-2 bg-white text-black p-16 items-center gap-10">
      <Image src="/md.jpg" width={500} height={500} alt="" />

      <div>
        <p className="text-xl italic leading-relaxed">
          "Faith and belief are two sides of the same coin..."
        </p>

        <h3 className="mt-6 text-lg font-bold">Managing Director</h3>
      </div>
    </section>
  )
}