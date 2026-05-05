"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, X } from "lucide-react"

const directors = [
  {
    name: "Mr. Kuddus Ali",
    role: "Founder | Promoter | Chairman | Managing Director",
    image: "/placeholder.jpg",
    description:
      "Mr. Kuddus Ali leads KAC Construction with a strong vision for excellence and growth. With extensive experience in infrastructure and construction, he has successfully guided the company towards delivering high-quality projects with integrity and innovation.",
  },
  {
    name: "Director Name 2",
    role: "Whole-Time Director",
    image: "/placeholder.jpg",
    description:
      "He plays a crucial role in managing operational excellence and ensuring project efficiency across all departments.",
  },
  {
    name: "Director Name 3",
    role: "Independent Director",
    image: "/placeholder.jpg",
    description:
      "Provides strategic insights and governance support, strengthening the company's long-term vision.",
  }
]

export default function Leadership() {
  const [selected, setSelected] = useState<any>(null)

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
            Board of Directors
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            <span className="gradient-text">
              Delving Into Our Strategic Leadership
            </span>
          </h2>
        </div>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {directors.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="
                group
                glass-strong border-glow
                rounded-2xl overflow-hidden
                cursor-pointer
              "
              onClick={() => setSelected(item)}
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex justify-between items-center">

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.name}
                  </h3>

                  <p className="text-cyan-400 text-sm">
                    {item.role}
                  </p>
                </div>

                {/* ICON */}
                <div className="
                  w-10 h-10 flex items-center justify-center
                  rounded-full border border-white/20
                  group-hover:bg-cyan-400 group-hover:text-black
                  transition
                ">
                  <ArrowUpRight size={18} />
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {selected && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setSelected(null)}
            />

            {/* MODAL BOX */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
              <div className="
                glass-strong border-glow
                rounded-2xl max-w-5xl w-full p-8 relative
              ">

                {/* CLOSE */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                >
                  <X size={18} />
                </button>

                <div className="grid md:grid-cols-2 gap-8 items-center">

                  {/* IMAGE */}
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="w-full h-[350px] object-cover rounded-xl"
                  />

                  {/* TEXT */}
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-white">
                      {selected.name}
                    </h2>

                    <p className="text-cyan-400 font-semibold mb-4">
                      {selected.role}
                    </p>

                    <p className="text-white/70 leading-relaxed">
                      {selected.description}
                    </p>
                  </div>

                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  )
}