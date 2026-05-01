"use client"

import Image from "next/image"

export default function MDMessage() {
  return (
    <section className="grid md:grid-cols-2 min-h-screen items-center px-6 gap-10">
      <Image
        src="/md.jpg"
        alt="md"
        width={400}
        height={400}
        className="rounded-xl"
      />

      <div>
        <p className="text-lg text-gray-300">
          "Our mission is to build reliable infrastructure for the nation."
        </p>
        <h3 className="mt-4 text-xl text-cyan-400">Managing Director</h3>
      </div>
    </section>
  )
}