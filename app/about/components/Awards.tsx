"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Plus } from "lucide-react"

const awards = [
  {
    title: "CEO Meet Held at Delhi May 10th 2024",
    subtitle: "Faster Completion Project Award by PGCIL – MD",
    description:
      "KAC Construction appreciated for multiple high-voltage transmission projects completed ahead of schedule.",
    image: "/placeholder.jpg"
  },
  {
    title: "Bihar State Power Holding Company Ltd.",
    subtitle: "Excellence Award – Saubhagya Yojna",
    description:
      "Recognized for electrifying villages ahead of schedule under Chief Minister’s mission.",
    image: "/placeholder.jpg"
  },
  {
    title: "Excellence Award – 2018",
    subtitle: "Outstanding Infrastructure Contribution",
    description:
      "Awarded for delivering consistent performance in large-scale infrastructure projects.",
    image: "/placeholder.jpg"
  }
]

export default function Awards() {
  const [index, setIndex] = useState(1)
  const [modal, setModal] = useState<any>(null)

  // 🔥 AUTO SLIDER (IMPORTANT)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % awards.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const next = () => {
    setIndex((prev) => (prev + 1) % awards.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + awards.length) % awards.length)
  }

  return (
    <section className="section-premium py-28 overflow-hidden relative">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] top-0 left-0" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[100px] bottom-0 right-0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* 🔥 HEADING */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-white/60 mb-3">
            Awards & Recognition
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            <span className="gradient-text">
              Recognized Across India
            </span>
          </h2>
        </div>

        {/* 🔥 SLIDER */}
        <div className="relative flex items-center justify-center h-[420px] md:h-[450px]">

          {awards.map((item, i) => {
            const isActive = i === index
            const isLeft = i === (index - 1 + awards.length) % awards.length
            const isRight = i === (index + 1) % awards.length

            return (
              <motion.div
                key={i}
                animate={{
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : 0.4,
                  x: isLeft ? "-60%" : isRight ? "60%" : "0%",
                  zIndex: isActive ? 10 : 1,
                }}
                transition={{ duration: 0.5 }}
                className="
                  absolute
                  left-1/2 -translate-x-1/2
                  w-[90%] md:w-[800px]
                  glass-strong border-glow
                  rounded-2xl overflow-hidden
                  shadow-xl
                "
              >

                <div className="flex flex-col md:flex-row">

                  {/* IMAGE */}
                  <div
                    className="relative md:w-1/2 group cursor-pointer"
                    onClick={() => setModal(item)}
                  >
                    <img
                      src={item.image}
                      alt="award"
                      className="w-full h-72 md:h-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <Plus className="text-white w-10 h-10" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 md:w-1/2 flex flex-col justify-center">

                    <h3 className="text-sm text-white/60 uppercase mb-2">
                      {item.title}
                    </h3>

                    <h2 className="text-xl font-semibold italic text-white mb-3">
                      "{item.subtitle}"
                    </h2>

                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.description}
                    </p>

                  </div>

                </div>

              </motion.div>
            )
          })}

        </div>

        {/* 🔥 CONTROLS */}
        <div className="flex justify-center gap-4 mt-20">

          <button
            onClick={prev}
            className="p-3 rounded-full glass border-glow hover:bg-white/10 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="p-3 rounded-full glass border-glow hover:bg-white/10 transition"
          >
            <ChevronRight />
          </button>

        </div>

      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <div className="relative max-w-5xl w-full px-4">

              <button
                onClick={() => setModal(null)}
                className="absolute top-2 right-2 text-white"
              >
                <X size={28} />
              </button>

              <img
                src={modal.image}
                alt="award"
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}