"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center">
      <Image
        src={images[index]}
        alt="hero"
        fill
        className="object-cover transition-opacity duration-1000"
      />

      <div className="absolute inset-0 bg-black/60" />

      <h1 className="relative text-5xl md:text-7xl font-bold text-cyan-400 animate-pulse">
        KAC Construction
      </h1>
    </section>
  )
}