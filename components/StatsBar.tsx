"use client"
import { motion } from "framer-motion"

const stats = [
  { number: "120+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "765kV", label: "Transmission Capacity" },
  { number: "50+", label: "Engineers" },
]

export default function StatsBar() {
  return (
    <section className="py-32 flex justify-center">
      <div className="grid md:grid-cols-4 gap-8 w-[90%] max-w-6xl">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="glass glow card-hover p-10 rounded-2xl text-center"
          >
            <h2 className="text-4xl font-bold text-cyan-400">
              {item.number}
            </h2>
            <p className="text-gray-400 mt-2">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}