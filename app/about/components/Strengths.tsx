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
    <section className="section-premium py-28 relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] top-0 left-0" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[100px] bottom-0 right-0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* 🔥 HEADING */}
        <div className="text-center mb-16">

          <p className="text-sm tracking-widest text-white/60 mb-3">
            OUR STRENGTHS
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            <span className="gradient-text">
              Delving Into Our Specialized Capabilities
            </span>
          </h2>

        </div>

        {/* 🔥 CARDS GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {strengths.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.04 }}
              transition={{ duration: 0.35 }}
              className="
                group
                glass-strong border-glow
                rounded-xl
                p-5
                flex items-center gap-4
                cursor-pointer
              "
            >

              {/* 🔥 ICON */}
              <div className="
                w-12 h-12 flex items-center justify-center
                rounded-full
                bg-cyan-500/10
                border border-cyan-400/30
                group-hover:bg-cyan-400
                group-hover:shadow-[0_0_20px_rgba(34,211,238,0.7)]
                transition duration-300
              ">
                <Check className="text-cyan-400 group-hover:text-black" />
              </div>

              {/* 🔥 TEXT */}
              <p className="text-white/70 group-hover:text-white transition">
                {item}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}