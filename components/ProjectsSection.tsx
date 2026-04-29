"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const projects = [
  {
    title: "Bongaigaon",
    desc: "NER transmission line & tower erection",
    img: "/placeholder.jpg",
  },
  {
    title: "Adani Power",
    desc: "High-capacity grid infrastructure",
    img: "/placeholder.jpg",
  },
  {
    title: "NTPC",
    desc: "Foundation & stringing execution",
    img: "/placeholder.jpg",
  },
]

export default function ProjectsSection() {
  return (
    <section className="bg-[#020617] text-white relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 blur-3xl opacity-30" />

      <div className="container-custom relative">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >

              <img
                src={item.img}
                className="w-full h-[240px] object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              <div className="absolute bottom-0 p-5">

                <h3 className="text-lg font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  {item.desc}
                </p>

                <Link href="/projects">
                  <button className="mt-3 text-sm btn-outline">
                    Explore →
                  </button>
                </Link>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}