"use client"

import Reveal from "./Reveal"

const projects = [
  {
    title: "Bongaigaon NER",
    img: "/placeholder.jpg",
  },
  {
    title: "Adani Power Corridor",
    img: "/placeholder.jpg",
  },
  {
    title: "NTPC Expansion",
    img: "/placeholder.jpg",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-24 relative overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10 opacity-20 blur-3xl bg-gradient-to-r from-cyan-500 to-blue-500" />

      <Reveal>
        <h2 className="text-4xl text-center font-bold gradient-text">
          Major Projects
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-10 mt-16 px-6">

        {projects.map((item, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-xl cursor-pointer"
          >

            {/* Image */}
            <img
              src={item.img}
              className="
                w-full h-[300px] object-cover rounded-xl
                transition duration-700 ease-out
                group-hover:scale-110 group-hover:rotate-1
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute inset-0 bg-black/60 opacity-0
                group-hover:opacity-100 transition duration-500
                flex items-center justify-center
              "
            >
              <h3 className="text-white text-xl font-semibold tracking-wide">
                {item.title}
              </h3>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}