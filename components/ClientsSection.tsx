"use client"

import Image from "next/image"

const clients = [
  "/clients/Adani.webp",
  "/clients/APAR.webp",
  "/clients/Bajel.webp",
  "/clients/Jsk.webp",
  "/clients/Jsw.webp",
  "/clients/KEC.webp",
  "/clients/KPIL.webp",
  "/clients/L&T.webp",
  "/clients/lumino.webp",
  "/clients/ntpc.webp",
  "/clients/powergrid.webp",
  "/clients/simplex.webp",
  "/clients/sterlight.webp",
  "/clients/tataproject.webp",
  "/clients/Transrail.webp",
  "/clients/skipper.webp",
  "/clients/Grilll.webp",
]

export default function ClientsSection() {
  return (
    <section className="relative py-24 bg-[#020617] text-white overflow-hidden">

      {/* 🔥 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/tower-pic1.webp')" }}
      />
      <div className="absolute inset-0 bg-[#020617]/90" />

      {/* 🔥 FADE EDGES (PREMIUM LOOK) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#020617] to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#020617] to-transparent z-20" />

      <div className="relative z-10">

        {/* 🔥 HEADING */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-cyan-400 mb-14">
          Our Clients
        </h2>

        {/* 🔥 ROW 1 (LEFT SCROLL) */}
        <div className="overflow-hidden mb-10">
          <div className="scroll-left flex gap-8 w-max">
            {[...clients, ...clients].map((logo, i) => (
              <ClientCard key={i} logo={logo} />
            ))}
          </div>
        </div>

        {/* 🔥 ROW 2 (RIGHT SCROLL) */}
        <div className="overflow-hidden">
          <div className="scroll-right flex gap-8 w-max">
            {[...clients, ...clients].map((logo, i) => (
              <ClientCard key={i} logo={logo} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

/* 🔥 CLIENT CARD */
function ClientCard({ logo }: { logo: string }) {
  return (
    <div
      className="
      relative min-w-[150px] h-[150px] 
      rounded-2xl overflow-hidden
      bg-white/95 backdrop-blur-md
      shadow-md
      transition duration-500
      hover:scale-110
      hover:shadow-[0_0_50px_rgba(34,211,238,0.7)]
    "
    >
      <Image
        src={logo}
        alt="client"
        fill
        className="object-contain p-4 transition duration-500 hover:scale-105"
      />
    </div>
  )
}