"use client"

import { motion } from "framer-motion"
import {
  Check,
  ArrowUpRight,
  Sparkles,
} from "lucide-react"

const strengths = [
  "Strong Brand Value in Infrastructure",
  "Trusted by Government & Private Sectors",
  "Integrated Supply Chain Network",
  "Execution in Challenging Terrains",
  "Ahead-of-Schedule Project Delivery",
  "High Safety & Quality Standards",
]

export default function Strengths() {

  return (

    <section
      className="
      section-surface
      bg-[var(--bg-soft)]
      text-[var(--text)]

      py-28

      relative
      overflow-hidden
    "
    >

      {/* ======================================== */}
      {/* 🔥 PREMIUM BACKGROUND */}
      {/* ======================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* TOP LIGHT */}
        <div
          className="
          absolute

          w-[700px]
          h-[700px]

          bg-cyan-500/10

          blur-[160px]

          -top-32
          -left-32
        "
        />

        {/* BOTTOM LIGHT */}
        <div
          className="
          absolute

          w-[600px]
          h-[600px]

          bg-blue-500/10

          blur-[140px]

          bottom-0
          right-0
        "
        />

        {/* GRID */}
        <div
          className="
          absolute inset-0

          opacity-[0.03]

          [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]

          [background-size:60px_60px]
        "
        />

      </div>

      {/* ======================================== */}
      {/* 🔥 MAIN */}
      {/* ======================================== */}

      <div
        className="
        relative z-10

        container-premium
      "
      >

        {/* ======================================== */}
        {/* 🔥 TOP BADGE */}
        {/* ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}

          className="
          flex justify-center

          mb-8
        "
        >

          <div
            className="
            inline-flex

            items-center
            gap-3

            px-5 py-2

            rounded-full

            border border-white/10

            bg-white/[0.03]

            backdrop-blur-2xl
          "
          >

            <Sparkles
              size={16}
              className="text-cyan-400"
            />

            <span
              className="
              text-xs

              tracking-[4px]

              text-[var(--text-soft)]
            "
            >
              OUR CORE STRENGTHS
            </span>

          </div>

        </motion.div>

        {/* ======================================== */}
        {/* 🔥 HEADING */}
        {/* ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}

          className="
          text-center

          max-w-5xl

          mx-auto

          mb-20
        "
        >

          <h2
            className="
            text-4xl
            md:text-6xl

            font-black

            leading-[1.05]

            tracking-[-2px]

            text-[var(--text)]

            mb-8
          "
        >

          Delving Into Our

          <span
            className="
              block

              mt-3

              gradient-text
            "
          >
            Specialized Capabilities
          </span>

          </h2>

          <p
            className="
            text-lg
            md:text-xl

            text-[var(--text-soft)]

            leading-[2]

            max-w-3xl

            mx-auto
          "
          >
            We combine engineering precision,
            execution excellence, safety standards,
            and infrastructure expertise to deliver
            high-performance transmission projects
            across India.
          </p>

        </motion.div>

        {/* ======================================== */}
        {/* 🔥 STRENGTH CARDS */}
        {/* ======================================== */}

        <div
          className="
          grid

          md:grid-cols-2
          xl:grid-cols-3

          gap-7
        "
        >

          {strengths.map((item, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -12,
                scale: 1.03,
              }}

              className="
              group

              relative

              overflow-hidden

              rounded-[30px]

              border border-[var(--border)]

              bg-[var(--card)]

              backdrop-blur-2xl

              p-7

              transition-all duration-500

              hover:border-cyan-400/20

              hover:shadow-[0_20px_80px_rgba(0,0,0,0.45)]

              cursor-pointer
            "
            >

              {/* CARD GLOW */}
              <div
                className="
                absolute inset-0

                opacity-0

                group-hover:opacity-100

                transition duration-700

                bg-gradient-to-br
                from-cyan-500/10
                via-transparent
                to-blue-500/10
              "
              />

              {/* TOP LIGHT */}
              <div
                className="
                absolute

                -top-20
                -right-20

                w-40
                h-40

                rounded-full

                bg-cyan-400/10

                blur-3xl

                opacity-0

                group-hover:opacity-100

                transition duration-700
              "
              />

              {/* CONTENT */}
              <div className="relative z-10">

                {/* ICON */}
                <div
                  className="
                  mb-7

                  flex
                  items-center
                  justify-between
                "
                >

                  <div
                    className="
                    w-14 h-14

                    rounded-2xl

                    bg-cyan-500/10

                    border border-cyan-400/20

                    flex items-center justify-center

                    group-hover:bg-cyan-400

                    group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]

                    transition-all duration-500
                  "
                  >

                    <Check
                      className="
                      text-cyan-300

                      group-hover:text-black

                      transition
                    "
                    />

                  </div>

                  <ArrowUpRight
                    size={22}

                    className="
                    text-[var(--text-soft)]/50

                    group-hover:text-cyan-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1

                    transition-all duration-500
                  "
                  />

                </div>

                {/* TEXT */}
                <h3
                  className="
                    text-xl

                    font-semibold

                    leading-relaxed

                    text-[var(--text-soft)]

                    group-hover:text-[var(--text)]

                  transition duration-500
                "
                >
                  {item}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}