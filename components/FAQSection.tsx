"use client"
import { useState } from "react"

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const faqs = [
    "What services do you provide?",
    "Do you work across India?",
    "What voltage capacity?",
  ]

  return (
    <section className="py-32 text-center">
      <h2 className="text-4xl text-cyan-400 mb-10">FAQs</h2>

      <div className="max-w-xl mx-auto space-y-4">
        {faqs.map((q, i) => (
          <div
            key={i}
            onClick={() => setOpen(open === i ? null : i)}
            className="glass p-5 rounded-xl cursor-pointer"
          >
            {q}
          </div>
        ))}
      </div>
    </section>
  )
}