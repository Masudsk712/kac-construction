"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="relative py-32 bg-[#0b1220] text-white overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Building India's Energy Backbone
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            KAC Construction specializes in 765kV transmission line erection,
            foundation, and stringing works across India. We partner with
            industry leaders to deliver high-voltage infrastructure with
            precision engineering and zero-compromise safety standards.
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Our projects power cities, industries, and national growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="/tower-pic1.jpg"
            alt="Transmission Tower"
            className="rounded-3xl shadow-2xl border border-white/10"
          />
        </motion.div>

      </div>
    </section>
  )
}
