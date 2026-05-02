"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Overview() {
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
    <section ref={ref} className="grid md:grid-cols-2 gap-10 p-16 items-center">
      <Image src="/overview.jpg" width={700} height={500} alt="" className="rounded-xl"/>

      <div>
        <h2 className="text-5xl font-bold mb-4">Unleashing Potential</h2>
        <p className="text-gray-400 leading-relaxed">
          KAC Construction delivers large-scale infrastructure with excellence...
        </p>
      </div>
    </section>
  )
}