"use client";

import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">

      {/* 🎥 Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover scale-110"
      >
        <source src="/videos/NewBackground.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 px-6 flex flex-col items-center">

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(34,211,238,0.5)] leading-tight"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          KAC CONSTRUCTION
        </h1>

        <h4 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90">
          Powering India's Future
        </h4>
        <p className="mt-6 text-gray-300 max-w-xl mx-auto">
          Experts in Transmission Line, Tower Erection & Infrastructure Projects
        </p>

        <div className="mt-10 flex gap-6 justify-center flex-wrap">
          <MagneticButton>View Projects</MagneticButton>
          <MagneticButton>Contact Us</MagneticButton>
        </div>

      </div>
    </section>
  );
}