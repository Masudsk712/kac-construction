"use client"
import Reveal from "./Reveal"

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-blue-950 text-center px-6">

      <Reveal>
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">
          Our Core Services
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-gray-400 mb-12">
          High precision execution for ultra high voltage systems.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {[
          {
            title: "Tower Erection",
            desc: "Precision-engineered erection of 765kV transmission towers."
          },
          {
            title: "Foundation Work",
            desc: "Robust structural foundations built for long-term durability."
          },
          {
            title: "Stringing Work",
            desc: "Advanced stringing operations ensuring optimal power flow."
          }
        ].map((service, i) => (
          <Reveal key={i} delay={i * 0.2}>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-cyan-500/20 hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          </Reveal>
        ))}

      </div>
    </section>
  )
}
