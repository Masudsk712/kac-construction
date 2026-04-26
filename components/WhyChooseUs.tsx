"use client"
import { motion } from "framer-motion"

const features = [
  "High Voltage Expertise",
  "On-time Delivery",
  "Safety First",
  "Pan India Network",
]

export default function WhyChooseUs() {
  return (
    <section className="py-32 text-center">
      <h2 className="text-4xl font-bold text-cyan-400 mb-16">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-4 gap-8 w-[90%] mx-auto">
        {features.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08 }}
            className="glass card-hover p-8 rounded-xl cursor-pointer"
          >
            <p className="text-cyan-300 font-medium">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}