"use client"

export default function ClientsMarquee() {
  const clients = [
    "PowerGrid",
    "Adani",
    "Tata Power",
    "NTPC",
    "Kalpataru",
  ]

  return (
    <div className="overflow-hidden py-16 bg-[#0f172a] text-white">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...clients, ...clients].map((client, i) => (
          <div key={i} className="mx-16 text-2xl text-cyan-400 font-semibold">
            {client}
          </div>
        ))}
      </div>
    </div>
  )
}
