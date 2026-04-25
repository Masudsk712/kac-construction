"use client"

export default function VideoSection() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">

      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/Hero.mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
        <h2 className="text-2xl md:text-5xl font-bold text-white">
          Infrastructure At Scale
        </h2>
      </div>

    </section>
  )
}