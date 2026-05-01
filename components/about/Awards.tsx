"use client"

export default function Awards() {
  const awards = ["award1.jpg", "award2.jpg", "award3.jpg"]

  return (
    <section className="min-h-screen px-6">
      <h2 className="text-4xl text-center text-cyan-400 mb-10">Awards</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {awards.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-xl">
            <img
              src={`/${img}`}
              className="hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  )
}