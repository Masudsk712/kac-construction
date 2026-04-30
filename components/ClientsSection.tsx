"use client"

import Image from "next/image"

const clients = [
  "/clients/Adani.jpg",
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
]

export default function ClientsSection() {
  return (
    <section className="relative py-28 bg-[#020617] text-white overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/tower-pic1.webp')" }}
      />
      <div className="absolute inset-0 bg-[#020617]/90" />

      <div className="relative z-10">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-cyan-400 mb-16">
          Our Clients
        </h2>

        {/* ROW 1 */}
        <div className="overflow-hidden group mb-12">
          <div className="flex gap-10 w-max animate-scrollLeft group-hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((logo, i) => (
              <ClientCard key={i} logo={logo} />
            ))}
          </div>
        </div>

        {/* ROW 2 */}
        <div className="overflow-hidden group">
          <div className="flex gap-10 w-max animate-scrollRight group-hover:[animation-play-state:paused]">
            {[...clients, ...clients].reverse().map((logo, i) => (
              <ClientCard key={i} logo={logo} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

/* 🔥 WHITE PREMIUM CARD */
function ClientCard({ logo }: { logo: string }) {
  return (
    <div
      className="
      min-w-[140px] h-[140px] 
      flex items-center justify-center 
      rounded-2xl 
      bg-white/90 backdrop-blur-sm
      border border-gray-200
      transition duration-500
      hover:scale-110
      hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]
    "
    >
      <Image
        src={logo}
        alt="client"
        width={90}
        height={90}
        className="object-contain"
      />
    </div>
  )
}