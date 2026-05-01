"use client"

export default function Leadership() {
  const team = ["leader1.jpg", "leader2.jpg", "leader3.jpg"]

  return (
    <section className="min-h-screen px-6">
      <h2 className="text-4xl text-center text-cyan-400 mb-10">Leadership</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {team.map((img, i) => (
          <div key={i} className="bg-white/10 p-4 rounded-xl">
            <img src={`/${img}`} className="rounded-lg" />
          </div>
        ))}
      </div>
    </section>
  )
}