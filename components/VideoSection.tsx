"use client"

export default function VideoSection() {
  return (
    <section className="relative h-[70vh] overflow-hidden group">

      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover group-hover:scale-105 transition duration-700"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white group-hover:scale-110 transition">
          Infrastructure At Scale
        </h2>
      </div>

    </section>
  )
}