"use client"

import Reveal from "./Reveal"

const projects = [
  { title: "Bongaigaon", img: "/placeholder.jpg" },
  { title: "Adani Power", img: "/placeholder.jpg" },
  { title: "NTPC", img: "/placeholder.jpg" },
]

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4 md:px-6">

      <Reveal>
        <h2 className="text-3xl md:text-4xl text-center gradient-text font-bold">
          Projects
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        {projects.map((item, i) => (
          <div key={i} className="group relative overflow-hidden rounded-xl">

            <img
              src={item.img}
              className="w-full h-[250px] object-cover group-hover:scale-110 transition"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <h3 className="text-white">{item.title}</h3>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}