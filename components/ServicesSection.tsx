"use client"
import { motion } from "framer-motion"

const services = [
  {
    title: "Tower Erection",
    desc: "High precision tower installation",
  },
  {
    title: "Foundation Work",
    desc: "Strong and durable foundations",
  },
  {
    title: "Stringing Work",
    desc: "Efficient power transmission",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-32 text-center">
      <h2 className="text-4xl text-cyan-400 mb-16">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-10 w-[90%] mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-10 rounded-2xl glass glow card-hover"
          >
            <h3 className="text-xl text-cyan-300">{s.title}</h3>
            <p className="text-gray-400 mt-3">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}