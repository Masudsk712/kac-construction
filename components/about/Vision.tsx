"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Vision() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.from(ref.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    })
  }, [])

  return (
    <section ref={ref} className="grid md:grid-cols-2 p-16 gap-10 items-center">
      <div>
        <h2 className="text-5xl font-bold">Vision</h2>
        <p className="text-gray-400 mt-4">
          To be a global leader in infrastructure solutions.
        </p>
      </div>

      <Image src="/vision.jpg" width={700} height={500} alt="" />
    </section>
  )
}