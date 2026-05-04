"use client"

import { motion } from "framer-motion"
import { Sparkles, ShieldCheck, HeartHandshake, Target } from "lucide-react"

export default function MissionVision() {
  return (
    <section className="relative py-32 overflow-hidden text-white">

      {/* 🔥 GRADIENT BG */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-700" />

      {/* 🔥 LIGHT LINES EFFECT */}
      <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.jpg')] bg-cover" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* 🔥 HEADING */}
        <p className="uppercase tracking-widest text-sm mb-4 opacity-80">
          Our Mission and Vision
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold mb-10">
          What We Believe
        </h2>

        {/* 🔥 INTRO */}
        <p className="max-w-3xl mx-auto text-lg opacity-90 mb-20">
          We seek out people and clients who challenge themselves to be exceptional — 
          and champion that spirit in others.
        </p>

        {/* 🔥 MISSION */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="max-w-3xl mx-auto opacity-90">
            Our mission is to help our clients create such high levels of value that together 
            we set new standards of excellence in infrastructure and engineering services.
          </p>
        </div>

        {/* 🔥 VISION */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="max-w-3xl mx-auto opacity-90">
            To be recognized as India's premier fast-track EPC company in Power, 
            Water, and Infrastructure projects with unmatched execution excellence.
          </p>
        </div>

        {/* 🔥 VALUES */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
          <p className="max-w-3xl mx-auto opacity-90">
            We work as one global team — both with each other and our clients — 
            to achieve extraordinary outcomes.
          </p>
        </div>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">

          {[
            {
              icon: Target,
              title: "Result Orientation",
              desc: "We focus on delivering measurable results and real outcomes.",
            },
            {
              icon: Sparkles,
              title: "Customer Satisfaction",
              desc: "We prioritize exceeding customer expectations at every step.",
            },
            {
              icon: ShieldCheck,
              title: "Trust & Integrity",
              desc: "We uphold honesty and reliability in all our dealings.",
            },
            {
              icon: HeartHandshake,
              title: "Healthy Work Culture",
              desc: "We promote a positive and conflict-free environment.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.05 }}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 text-left"
            >

              <item.icon className="w-8 h-8 mb-4 text-white" />

              <h4 className="font-semibold text-lg mb-2">
                {item.title}
              </h4>

              <p className="text-sm opacity-90">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}