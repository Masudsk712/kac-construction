"use client"

export default function MediaSection() {
  return (
    <section className="relative h-[70vh] overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/tower-video2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
        <h2 className="text-4xl md:text-6xl font-bold">
          Infrastructure At Scale
        </h2>
      </div>
    </section>
  )
}
