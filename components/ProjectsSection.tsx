"use client"

import Reveal from "./Reveal"

const projects = [
  {
    title: "Bongaigaon NER",
    img: "/p1.jpg",
  },
  {
    title: "Adani Power Corridor",
    img: "/p2.jpg",
  },
  {
    title: "NTPC Expansion",
    img: "/p3.jpg",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-24">

      <Reveal>
        <h2 className="text-4xl text-center font-bold gradient-text">
          Major Projects
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8 mt-16 px-6">

        {projects.map((item, i) => (
          <div key={i} className="relative group overflow-hidden rounded-xl">

            <img
              src={item.img}
              className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

              <h3 className="text-white text-xl font-semibold">
                {item.title}
              </h3>

            </div>

          </div>
        ))}

      </div>
    </section>
  )
}