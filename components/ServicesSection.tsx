"use client"

import Reveal from "./Reveal"
import ThreeDCard from "./ThreeDCard"

const services = [
  {
    title: "Tower Erection",
    desc: "Precision-engineered erection of 765kV towers.",
  },
  {
    title: "Foundation Work",
    desc: "Strong structural foundations.",
  },
  {
    title: "Stringing Work",
    desc: "Efficient power transmission solutions.",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 md:px-6 text-center">

      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">
          Our Services
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        {services.map((item, i) => (
          <ThreeDCard key={i}>
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl text-cyan-400">{item.title}</h3>
              <p className="mt-3 text-gray-400">{item.desc}</p>
            </div>
          </ThreeDCard>
        ))}

      </div>
    </section>
  )
}