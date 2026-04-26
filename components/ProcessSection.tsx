"use client"
import { motion } from "framer-motion"

const steps = [
  "Planning",
  "Foundation",
  "Installation",
  "Testing",
]

export default function ProcessSection() {
  return (
    <section className="py-32 text-center">
      <h2 className="text-4xl text-cyan-400 mb-16">Our Process</h2>

      <div className="flex justify-center gap-8 flex-wrap">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className="glass p-6 rounded-xl w-40 card-hover"
          >
            <p className="text-cyan-300">Step {i + 1}</p>
            <p className="text-gray-400 text-sm">{step}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}