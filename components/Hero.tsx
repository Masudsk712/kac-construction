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
      <div className="relative z-10 px-6">

        <h1 className="text-5xl md:text-7xl font-bold gradient-text">
          Powering India's Future
        </h1>

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