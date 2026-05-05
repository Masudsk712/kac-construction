"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const timelineData = [
  {
    year: "2008",
    title: "Founded",
    desc: "KAC Construction was founded with a vision to build strong infrastructure across India.",
    image: "/placeholder.jpg",
  },
  {
    year: "2014",
    title: "Expansion",
    desc: "Major expansion in transmission and EPC projects across multiple states.",
    image: "/placeholder.jpg",
  },
  {
    year: "2018",
    title: "Government Recognition",
    desc: "Awarded for excellence in infrastructure development.",
    image: "/placeholder.jpg",
  },
  {
    year: "2020",
    title: "Achievements",
    desc: "Handled high capacity substation projects successfully.",
    image: "/placeholder.jpg",
  },
  {
    year: "2022",
    title: "Water Segment",
    desc: "Entered water infrastructure segment with major government projects.",
    image: "/placeholder.jpg",
  },
  {
    year: "2024",
    title: "Growth & Expansion",
    desc: "Secured major funding to expand operations nationwide.",
    image: "/placeholder.jpg",
  },
]

export default function Timeline() {
  const [active, setActive] = useState<any>(null)

  return (
    <section className="section-premium py-32 relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] top-0 left-0" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[100px] bottom-0 right-0" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* 🔥 HEADING */}
        <div className="text-center mb-24">
          <p className="text-sm tracking-widest text-white/60 mb-3">
            OUR JOURNEY
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            <span className="gradient-text">
              Our Journey & Milestones
            </span>
          </h2>
        </div>

        {/* 🔥 TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white/10" />

          {/* ITEMS */}
          <div className="space-y-20">

            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  className="relative flex items-center justify-between"
                >

                  {/* LEFT */}
                  {isLeft ? (
                    <motion.div
                      initial={{ opacity: 0, x: -80 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="w-[45%]"
                    >
                      <div
                        onClick={() => setActive(item)}
                        className="
                          glass-strong border-glow
                          p-6 rounded-xl cursor-pointer
                          hover:scale-105 transition
                        "
                      >
                        <h3 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h3>

                        <p className="text-white/60 text-sm mb-2">
                          {item.year}
                        </p>

                        <p className="text-white/70 text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="w-[45%]" />
                  )}

                  {/* CENTER DOT */}
                  <div className="
                    absolute left-1/2 -translate-x-1/2
                    w-5 h-5 rounded-full
                    bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]
                  " />

                  {/* RIGHT */}
                  {!isLeft ? (
                    <motion.div
                      initial={{ opacity: 0, x: 80 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="w-[45%]"
                    >
                      <div
                        onClick={() => setActive(item)}
                        className="
                          glass-strong border-glow
                          p-6 rounded-xl cursor-pointer
                          hover:scale-105 transition
                        "
                      >
                        <h3 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h3>

                        <p className="text-white/60 text-sm mb-2">
                          {item.year}
                        </p>

                        <p className="text-white/70 text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="w-[45%]" />
                  )}

                </div>
              )
            })}

          </div>
        </div>

      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="
                glass-strong border-glow
                rounded-xl max-w-3xl w-full p-6 relative
              "
            >

              {/* CLOSE */}
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 text-white text-xl"
              >
                ✕
              </button>

              <div className="grid md:grid-cols-2 gap-6">

                {/* IMAGE */}
                <img
                  src={active.image}
                  className="rounded-lg object-cover w-full h-[250px]"
                />

                {/* TEXT */}
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    {active.title}
                  </h2>

                  <p className="text-cyan-400 font-semibold mb-4">
                    Year {active.year}
                  </p>

                  <p className="text-white/70">
                    {active.desc}
                  </p>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}