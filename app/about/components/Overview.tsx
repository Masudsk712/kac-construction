"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Overview() {
  return (
    <section className="bg-[#f5f7fa] py-24">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT TEXT */}
        <div>

          <p className="text-sm tracking-widest text-gray-500 mb-3">
            KAC CONSTRUCTION
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900 mb-6">
            Charting the Future of Energy:
            <br />
            Inside KAC’s Journey
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            KAC stands as one of the fast-growing Indian Engineering,
            Procurement and Construction (EPC) companies, focusing on
            delivering reliable and scalable infrastructure solutions.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our extensive portfolio spans across power transmission,
            tower foundation, stringing work, and EPC services,
            ensuring high-quality project execution across India.
          </p>

          <p className="text-gray-600 leading-relaxed">
            With a commitment to innovation, safety, and timely delivery,
            we continue to build infrastructure that powers the nation’s growth.
          </p>

        </div>

        {/* RIGHT IMAGE (🔥 INTERACTIVE LIKE VIKRAN) */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="relative h-[420px] rounded-xl overflow-hidden shadow-xl cursor-pointer"
        >
          <Image
            src="/placeholder.jpg"
            alt="Team"
            fill
            className="object-cover transition-transform duration-700 hover:scale-110"
          />

          {/* 🔥 GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        </motion.div>

      </div>

      {/* 🔥 SECOND BLOCK (LIKE VIKRAN BELOW) */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center mt-20">

        {/* IMAGE LEFT */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="relative h-[420px] rounded-xl overflow-hidden shadow-xl cursor-pointer"
        >
          <Image
            src="/placeholder.jpg"
            alt="Leadership"
            fill
            className="object-cover transition-transform duration-700 hover:scale-110"
          />
        </motion.div>

        {/* TEXT RIGHT */}
        <div>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            At KAC, our commitment goes beyond mere operations
          </h3>

          <p className="text-gray-600 leading-relaxed mb-4">
            We understand the critical role of infrastructure in driving
            economic progress, and our mission is to deliver solutions that
            not only meet but exceed expectations.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            With a strong focus on quality and efficiency, KAC continues
            to contribute to transforming India's infrastructure landscape
            and empowering communities nationwide.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our values are built on innovation, teamwork, timely execution,
            and long-term sustainability, ensuring consistent growth and impact.
          </p>

        </div>

      </div>

    </section>
  )
}