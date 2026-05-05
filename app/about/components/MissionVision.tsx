"use client"

import { motion } from "framer-motion"
import { Sparkles, ShieldCheck, HeartHandshake, Target } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 }
}

export default function MissionVision() {
  return (
    <section className="section-premium py-32 relative overflow-hidden text-white">

      {/* 🔥 BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]" />

      {/* 🔥 GLOW EFFECT */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] top-0 left-0" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[100px] bottom-0 right-0" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* 🔥 HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-widest text-sm mb-4 text-white/60">
            Our Mission and Vision
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold mb-10">
            <span className="gradient-text">
              What We Believe In
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-white/70 mb-20">
            We seek out people and clients who challenge themselves to be exceptional —
            and champion that spirit in others.
          </p>
        </motion.div>

        {/* 🔥 3 BLOCKS */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">

          {/* MISSION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.1 }}
            className="glass-strong border-glow p-8 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-4 gradient-text">
              Our Mission
            </h3>

            <p className="text-white/70 leading-relaxed">
              Our mission is to help our clients create such high levels of value that together
              we set new standards of excellence in infrastructure and engineering services.
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.2 }}
            className="glass-strong border-glow p-8 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-4 gradient-text">
              Our Vision
            </h3>

            <p className="text-white/70 leading-relaxed">
              To be recognized as India's premier fast-track EPC company in Power,
              Water, and Infrastructure projects with unmatched execution excellence.
            </p>
          </motion.div>

          {/* VALUES */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.3 }}
            className="glass-strong border-glow p-8 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-4 gradient-text">
              Our Values
            </h3>

            <p className="text-white/70 leading-relaxed">
              We work as one global team — both with each other and our clients —
              to achieve extraordinary outcomes.
            </p>
          </motion.div>

        </div>

        {/* 🔥 VALUES CARDS */}
        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              icon: Target,
              title: "Result Orientation",
              desc: "We focus on delivering measurable results.",
            },
            {
              icon: Sparkles,
              title: "Customer Satisfaction",
              desc: "We exceed expectations at every step.",
            },
            {
              icon: ShieldCheck,
              title: "Trust & Integrity",
              desc: "We uphold honesty and transparency.",
            },
            {
              icon: HeartHandshake,
              title: "Work Culture",
              desc: "We promote a healthy and collaborative environment.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="
                glass-strong border-glow
                rounded-xl p-6 text-left
                cursor-pointer
              "
            >

              <item.icon className="w-8 h-8 mb-4 text-cyan-400" />

              <h4 className="font-semibold text-lg mb-2">
                {item.title}
              </h4>

              <p className="text-sm text-white/70">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}