"use client"

import Reveal from "./Reveal"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="bg-[#020617] text-white">

      <div className="container-custom grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT */}
        <Reveal>
          <div className="max-w-xl">

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="gradient-text">
                Building India's Energy Backbone
              </span>
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              At <span className="text-white font-semibold">KAC Construction</span>, 
              we don’t just build transmission lines — we power progress.
            </p>

            <p className="mt-3 text-gray-500 text-sm">
              From remote terrains to high-capacity grids, we ensure reliable electricity reaches every corner.
            </p>

            <Link href="/about">
              <button className="mt-8 btn-outline">
                Know More →
              </button>
            </Link>

          </div>
        </Reveal>

        {/* RIGHT */}
        <Reveal>
          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500/10 blur-2xl rounded-2xl" />

            <img
              src="/placeholder.jpg"
              className="relative w-full h-[260px] md:h-[300px] object-cover rounded-2xl border border-white/10"
            />

          </div>
        </Reveal>

      </div>
    </section>
  )
}