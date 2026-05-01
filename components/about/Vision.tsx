"use client"

import Image from "next/image"

export default function Vision() {
  return (
    <section className="grid md:grid-cols-2 items-center min-h-screen px-6 gap-8">
      <div>
        <h2 className="text-4xl font-bold text-cyan-400">Vision</h2>
        <p className="text-gray-400 mt-4">
          To become a global leader in infrastructure development.
        </p>
      </div>

      <Image
        src="/vision.jpg"
        alt="vision"
        width={600}
        height={400}
        className="rounded-xl"
      />
    </section>
  )
}