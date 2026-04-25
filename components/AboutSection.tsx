"use client"

import Reveal from "./Reveal"

export default function AboutSection() {
  return (
    <section className="py-20 px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      <Reveal>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Building India's Energy Backbone
          </h2>

          <p className="mt-4 text-gray-400">
            KAC Construction delivers high-voltage transmission infrastructure with precision and reliability.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <img
          src="/placeholder.jpg"
          className="w-full rounded-xl"
        />
      </Reveal>

    </section>
  )
}