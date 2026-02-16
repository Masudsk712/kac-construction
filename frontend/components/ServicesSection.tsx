"use client"

import ServiceCard from "./ServiceCard"

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-black to-[#0f172a] text-white">

      <div className="max-w-6xl mx-auto text-center mb-20 px-6">
        <h2 className="text-5xl font-bold text-cyan-400">
          Our Core Services
        </h2>
        <p className="mt-6 text-gray-400">
          High precision execution for ultra high voltage transmission systems.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        <ServiceCard
          title="Tower Erection"
          description="Precision-engineered erection of 765kV transmission towers."
        />
        <ServiceCard
          title="Foundation Work"
          description="Robust structural foundations built for long-term durability."
        />
        <ServiceCard
          title="Stringing Work"
          description="Advanced stringing operations ensuring optimal power flow."
        />
      </div>

    </section>
  )
}
