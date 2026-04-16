"use client"

import Reveal from "./Reveal"
import ThreeDCard from "./ThreeDCard"

const services = [
  {
    title: "Tower Erection",
    desc: "Precision-engineered erection of 765kV transmission towers.",
  },
  {
    title: "Foundation Work",
    desc: "Robust structural foundations built for durability.",
  },
  {
    title: "Stringing Work",
    desc: "Advanced stringing ensuring optimal power flow.",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 text-center">

      <Reveal>
        <h2 className="text-4xl font-bold gradient-text">
          Our Core Services
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-10 mt-16 px-6">

        {services.map((item, i) => (
          <ThreeDCard key={i}>
            <div className="glass p-8 rounded-2xl border border-white/10 hover:scale-105 transition">

              <h3 className="text-xl font-semibold text-cyan-400">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {item.desc}
              </p>

            </div>
          </ThreeDCard>
        ))}

      </div>
    </section>
  )
}