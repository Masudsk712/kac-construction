"use client"

import Reveal from "./Reveal"

export default function AboutSection() {
  return (
    <section className="py-24 relative overflow-hidden px-6 grid md:grid-cols-2 gap-12 items-center">

      {/* Glow */}
      <div className="absolute inset-0 -z-10 opacity-20 blur-3xl bg-gradient-to-r from-blue-500 to-cyan-500" />

      <Reveal>
        <div>
          <h2 className="text-4xl font-bold gradient-text">
            Building India's Energy Backbone
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            KAC Construction delivers high-voltage transmission
            infrastructure with precision, safety, and unmatched reliability.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <img
          src="/placeholder.jpg"
          className="rounded-xl shadow-xl hover:scale-105 transition duration-500"
        />
      </Reveal>

    </section>
  )
}