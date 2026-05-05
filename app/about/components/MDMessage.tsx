"use client"

import { motion } from "framer-motion"

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0 }
}

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0 }
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
}

export default function MDMessage() {
  return (
    <section className="section-premium py-32 relative overflow-hidden text-white">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]" />

      {/* 🔥 GLOW EFFECT */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] top-0 left-0" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[100px] bottom-0 right-0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* 🔥 LEFT IMAGE */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="
            relative w-80 h-[420px]
            rounded-2xl overflow-hidden
            border border-white/10
            shadow-[0_0_60px_rgba(34,211,238,0.15)]
            group
          ">

            <img
              src="/placeholder.jpg"
              alt="MD"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />

            {/* 🔥 DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* 🔥 NAME ON IMAGE */}
            <div className="absolute bottom-5 left-5">
              <p className="text-lg font-semibold">Mr. Kuddus Ali</p>
              <p className="text-xs text-white/70">
                Founder | Chairman | MD
              </p>
            </div>

          </div>
        </motion.div>

        {/* 🔥 RIGHT TEXT */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.8 }}
        >

          {/* SMALL LABEL */}
          <motion.p
            variants={fadeUp}
            className="text-cyan-400 uppercase tracking-widest text-sm mb-4"
          >
            Managing Director’s Message
          </motion.p>

          {/* TITLE */}
          <motion.h2
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold mb-6 leading-snug"
          >
            Leadership with Vision & Integrity
          </motion.h2>

          {/* PARAGRAPH 1 */}
          <motion.p
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-white/70 leading-relaxed mb-6"
          >
            At KAC Construction, we are committed to delivering excellence in every project we undertake.
            Our focus remains on quality, safety, and timely execution, ensuring that we exceed client
            expectations consistently.
          </motion.p>

          {/* PARAGRAPH 2 */}
          <motion.p
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="text-white/70 leading-relaxed mb-6"
          >
            With strong leadership and a dedicated team, we continue to expand our capabilities across
            infrastructure, power, and construction sectors. Our vision is to build a future driven by
            innovation, trust, and long-term value creation.
          </motion.p>

          {/* SIGNATURE */}
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <h4 className="text-lg font-semibold">
              Mr. Kuddus Ali
            </h4>

            <p className="text-cyan-400 text-sm">
              Founder | Promoter | Chairman | Managing Director
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}