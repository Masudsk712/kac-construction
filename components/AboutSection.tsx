"use client"

import Reveal from "./Reveal"

export default function AboutSection() {
  return (
    <section className="py-24 grid md:grid-cols-2 gap-10 items-center px-6">

      <Reveal>
        <div>
          <h2 className="text-4xl font-bold gradient-text">
            Building India's Energy Backbone
          </h2>

          <p className="mt-6 text-gray-400">
            KAC Construction delivers high-voltage transmission
            infrastructure with precision and reliability.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <img
          src="/about.jpg"
          className="rounded-xl shadow-lg"
        />
      </Reveal>

    </section>
  )
}