"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Overview() {
  return (
    <section className="section-premium py-24 relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] top-0 left-0" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[100px] bottom-0 right-0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT TEXT */}
        <div className="glass-strong border-glow rounded-2xl p-8">

          <p className="text-sm tracking-widest text-white/60 mb-3">
            KAC CONSTRUCTION
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Charting the Future of Energy:
            <br />
            <span className="gradient-text">
              Inside KAC’s Journey
            </span>
          </h2>

          <p className="text-white/70 leading-relaxed mb-4">
            KAC stands as one of the fast-growing Indian Engineering,
            Procurement and Construction (EPC) companies, focusing on
            delivering reliable and scalable infrastructure solutions.
          </p>

          <p className="text-white/70 leading-relaxed mb-4">
            Our extensive portfolio spans across power transmission,
            tower foundation, stringing work, and EPC services,
            ensuring high-quality project execution across India.
          </p>

          <p className="text-white/70 leading-relaxed">
            With a commitment to innovation, safety, and timely delivery,
            we continue to build infrastructure that powers the nation’s growth.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl cursor-pointer border-glow"
        >
          <Image
            src="/placeholder.jpg"
            alt="Team"
            fill
            className="object-cover transition-transform duration-700 hover:scale-110"
          />

          {/* 🔥 OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>

      </div>

      {/* 🔥 SECOND BLOCK */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center mt-20">

        {/* IMAGE LEFT */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl cursor-pointer border-glow"
        >
          <Image
            src="/placeholder.jpg"
            alt="Leadership"
            fill
            className="object-cover transition-transform duration-700 hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>

        {/* TEXT RIGHT */}
        <div className="glass-strong border-glow rounded-2xl p-8">

          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            At KAC, our commitment goes beyond mere operations
          </h3>

          <p className="text-white/70 leading-relaxed mb-4">
            We understand the critical role of infrastructure in driving
            economic progress, and our mission is to deliver solutions that
            not only meet but exceed expectations.
          </p>

          <p className="text-white/70 leading-relaxed mb-4">
            With a strong focus on quality and efficiency, KAC continues
            to contribute to transforming India's infrastructure landscape
            and empowering communities nationwide.
          </p>

          <p className="text-white/70 leading-relaxed">
            Our values are built on innovation, teamwork, timely execution,
            and long-term sustainability, ensuring consistent growth and impact.
          </p>

        </div>

      </div>

    </section>
  )
}