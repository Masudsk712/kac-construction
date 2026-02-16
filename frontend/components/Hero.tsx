"use client"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black">

      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Powering India's Future
      </h1>

      <TypeAnimation
        sequence={[
          "765kV Transmission Excellence",
          2000,
          "Ultra High Voltage Precision",
          2000,
        ]}
        speed={50}
        repeat={Infinity}
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      />

      <p className="mt-6 text-gray-400 max-w-2xl">
        Delivering world-class erection, foundation & stringing services
        for India's largest power corporations.
      </p>

      <div className="mt-8 flex gap-6">
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-110 transition">
          View Projects
        </button>

        <button className="px-6 py-3 rounded-full border border-gray-600 text-white hover:bg-white hover:text-black transition">
          Contact Us
        </button>
      </div>
    </section>
  )
}
