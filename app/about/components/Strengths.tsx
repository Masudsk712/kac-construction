"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const strengths = [
  "Strong Brand Value in Infrastructure",
  "Trusted by Government & Private Sectors",
  "Integrated Supply Chain Network",
  "Execution in Challenging Terrains",
  "Ahead-of-Schedule Project Delivery",
  "High Safety & Quality Standards",
]

export default function Strengths() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-[#e9eef5] to-[#f8fafc] overflow-hidden">

      {/* 🔥 BACKGROUND LIGHT EFFECT */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-blue-200 blur-[120px] top-0 left-0" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-200 blur-[100px] bottom-0 right-0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* 🔥 HEADING */}
        <div className="text-center mb-16">

          <p className="text-sm tracking-widest text-gray-500 mb-3">
            OUR STRENGTHS
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Delving Into Our Specialized Capabilities
          </h2>

        </div>

        {/* 🔥 CARDS GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {strengths.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="
                group
                bg-white/70 backdrop-blur-lg
                border border-white/40
                rounded-xl
                p-5
                flex items-center gap-4
                shadow-md hover:shadow-xl
                transition-all duration-300
                cursor-pointer
              "
            >

              {/* ICON */}
              <div className="
                w-12 h-12 flex items-center justify-center
                rounded-full
                bg-blue-100 group-hover:bg-blue-600
                transition
              ">
                <Check className="text-blue-600 group-hover:text-white" />
              </div>

              {/* TEXT */}
              <p className="text-gray-700 group-hover:text-gray-900 transition">
                {item}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}