"use client"

import { motion } from "framer-motion"

export default function ProjectsSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#0f172a] to-black text-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-cyan-400"
        >
          Major Projects & Compliance
        </motion.h2>

        <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
          Executed multiple 765kV and 400kV transmission line projects
          adhering strictly to PowerGrid and Central Electricity Authority
          standards.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {["Bongaigaon NER", "Adani Power Corridor", "NTPC Expansion"].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
            >
              <h3 className="text-xl text-cyan-400 font-semibold">{project}</h3>
              <p className="mt-4 text-gray-400">
                Full foundation, erection & stringing completed successfully.
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}
