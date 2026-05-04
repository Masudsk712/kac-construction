"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center overflow-hidden"
    >
      {/* BACKGROUND */}
      <Image
        src="/about/Trans1pic.webp"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <p className="text-sm text-white/80 mb-4 tracking-widest">
          ABOUT KAC
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
          Empowering India’s <br />
          <span className="text-cyan-400">
            Infrastructure Landscape
          </span>
        </h1>

        <div className="w-16 h-[2px] bg-cyan-400 mt-6 mb-6" />

        <p className="text-gray-300 max-w-lg">
          Building the future with innovation, precision and reliability.
        </p>

      </div>
    </section>
  )
}