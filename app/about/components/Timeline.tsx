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
    title: "Funding",
    desc: "Secured major funding to expand operations nationwide.",
    image: "/placeholder.jpg",
  },
]

export default function Timeline() {
  const [active, setActive] = useState<any>(null)

  return (
    <section className="relative py-28 bg-[#173a56] text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 HEADING */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold">
            Our Journey & Milestones
          </h2>
        </div>

        {/* 🔥 LINE */}
        <div className="relative">

          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/20" />

          {/* 🔥 ITEMS */}
          <div className="flex justify-between items-center relative">

            {timelineData.map((item, i) => (
              <div key={i} className="relative flex flex-col items-center">

                {/* DOT */}
                <div className="w-4 h-4 bg-white rounded-full z-10" />

                {/* CARD */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActive(item)}
                  className={`
                    cursor-pointer
                    mt-6 w-[180px] text-center
                    ${i % 2 === 0 ? "mb-24" : "mt-24"}
                  `}
                >

                  <p className="text-3xl font-bold opacity-20">
                    {item.year}
                  </p>

                  <h3 className="text-lg font-semibold mt-2">
                    {item.title}
                  </h3>

                </motion.div>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white text-black rounded-xl max-w-3xl w-full p-6 relative"
            >

              {/* CLOSE */}
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 text-xl"
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

                  <p className="text-orange-500 font-semibold mb-4">
                    Year {active.year}
                  </p>

                  <p className="text-gray-600">
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