"use client"

export default function VideoSection() {
  return (
    <section className="relative h-[80vh] overflow-hidden group">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover group-hover:scale-105 transition duration-700"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
          Infrastructure At Scale
        </h2>
      </div>

    </section>
  )
}