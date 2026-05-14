"use client"

import { motion } from "framer-motion"

import Image from "next/image"

import {
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Target,
  Eye,
  Rocket,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react"

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,
  },
}

const values = [
  {
    icon: Target,
    title: "Safety First",
    desc: "Maintaining the highest standards across every infrastructure project.",
  },

  {
    icon: Sparkles,
    title: "Innovation",
    desc: "Modern engineering solutions with scalable execution excellence.",
  },

  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Transparent operations with reliability, trust, and accountability.",
  },

  {
    icon: HeartHandshake,
    title: "Client Satisfaction",
    desc: "Building long-term partnerships through quality and commitment.",
  },
]

export default function MissionVision() {

  return (

    <section
      className="
      relative
      overflow-hidden

      py-20 md:py-24

      text-white
    "
    >

      {/* ======================================== */}
      {/* PREMIUM BG */}
      {/* ======================================== */}

      <div
        className="
        absolute inset-0

        bg-gradient-to-br
        from-[#020617]
        via-[#07111f]
        to-[#020617]
      "
      />

      {/* GRID */}
      <div
        className="
        absolute inset-0

        opacity-[0.03]

        [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

        [background-size:60px_60px]
      "
      />

      {/* GLOW */}
      <div className="absolute inset-0 pointer-events-none">

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}

          transition={{
            duration: 8,
            repeat: Infinity,
          }}

          className="
          absolute

          top-0
          -left-20

          w-[500px]
          h-[500px]

          bg-cyan-500/10

          blur-[140px]
        "
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}

          transition={{
            duration: 10,
            repeat: Infinity,
          }}

          className="
          absolute

          bottom-0
          right-0

          w-[450px]
          h-[450px]

          bg-blue-500/10

          blur-[130px]
        "
        />

      </div>

      <div className="relative z-10 container-premium">

        {/* ======================================== */}
        {/* HEADING */}
        {/* ======================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.6,
          }}

          className="
          text-center

          max-w-4xl

          mx-auto

          mb-16
        "
        >

          <div
            className="
            inline-flex

            items-center
            gap-3

            px-4 py-2

            rounded-full

            border border-white/10

            bg-white/[0.03]

            backdrop-blur-xl

            mb-5
          "
          >

            <Sparkles
              size={14}
              className="text-cyan-400"
            />

            <span
              className="
              text-[10px]

              tracking-[4px]

              text-white/70
            "
            >
              OUR VISION & MISSION
            </span>

          </div>

          <h2
            className="
            text-3xl
            md:text-5xl

            font-black

            leading-tight

            mb-5
          "
          >

            Powering India's

            <span className="gradient-text block mt-2">
              Infrastructure Future
            </span>

          </h2>

          <p
            className="
            text-white/60

            text-sm
            md:text-base

            leading-[1.9]

            max-w-3xl

            mx-auto
          "
          >
            Kuddus Ali Construction is committed to delivering
            reliable, innovative, and future-ready
            infrastructure solutions with unmatched
            execution standards across India.
          </p>

        </motion.div>

        {/* ======================================== */}
        {/* MAIN GRID */}
        {/* ======================================== */}

        <div
          className="
          grid
          lg:grid-cols-[1.1fr_0.9fr]

          gap-8

          items-center

          mb-16
        "
        >

          {/* ======================================== */}
          {/* LEFT CONTENT */}
          {/* ======================================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.6,
            }}

            className="
            relative

            overflow-hidden

            rounded-[32px]

            border border-white/10

            bg-white/[0.03]

            backdrop-blur-3xl

            p-6 md:p-8
          "
          >

            {/* BG GLOW */}
            <div
              className="
              absolute inset-0

              bg-gradient-to-br
              from-cyan-500/10
              via-transparent
              to-blue-500/10
            "
            />

            <div className="relative z-10">

              {/* VISION */}
              <motion.div
                whileHover={{
                  y: -4,
                }}

                className="
                mb-10

                pb-10

                border-b border-white/10
              "
              >

                <div
                  className="
                  flex
                  items-center

                  gap-4

                  mb-5
                "
                >

                  <div
                    className="
                    w-14 h-14

                    rounded-2xl

                    bg-cyan-400/10

                    border border-cyan-400/20

                    flex items-center justify-center
                  "
                  >

                    <Eye
                      size={26}
                      className="text-cyan-300"
                    />

                  </div>

                  <div>

                    <p className="text-white/40 text-sm">
                      Vision
                    </p>

                    <h3
                      className="
                      text-2xl

                      font-black
                    "
                    >
                      Our Vision
                    </h3>

                  </div>

                </div>

                <p
                  className="
                  text-white/70

                  leading-[1.9]

                  text-sm
                  md:text-base
                "
                >
                  To be India’s most trusted and preferred
                  partner in electrical transmission line
                  infrastructure — setting the benchmark for
                  <span className="text-cyan-300 font-semibold">
                    {" "}safety, quality, and innovation{" "}
                  </span>
                  across the power sector.
                </p>

              </motion.div>

              {/* MISSION */}
              <motion.div
                whileHover={{
                  y: -4,
                }}
              >

                <div
                  className="
                  flex
                  items-center

                  gap-4

                  mb-5
                "
                >

                  <div
                    className="
                    w-14 h-14

                    rounded-2xl

                    bg-cyan-400/10

                    border border-cyan-400/20

                    flex items-center justify-center
                  "
                  >

                    <Rocket
                      size={26}
                      className="text-cyan-300"
                    />

                  </div>

                  <div>

                    <p className="text-white/40 text-sm">
                      Mission
                    </p>

                    <h3
                      className="
                      text-2xl

                      font-black
                    "
                    >
                      Our Mission
                    </h3>

                  </div>

                </div>

                <p
                  className="
                  text-white/70

                  leading-[1.9]

                  text-sm
                  md:text-base
                "
                >
                  To deliver
                  <span className="text-cyan-300 font-semibold">
                    {" "}reliable, cost-effective{" "}
                  </span>
                  transmission line construction, erection,
                  and maintenance services that empower
                  communities while upholding the highest
                  standards of
                  <span className="text-cyan-300 font-semibold">
                    {" "}integrity, workmanship,
                    and client satisfaction.
                  </span>
                </p>

              </motion.div>

            </div>

          </motion.div>

          {/* ======================================== */}
          {/* RIGHT IMAGE */}
          {/* ======================================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.7,
              delay: 0.1,
            }}

            whileHover={{
              scale: 1.02,
            }}

            className="
            relative

            overflow-hidden

            rounded-[32px]

            border border-white/10

            bg-white/[0.03]

            backdrop-blur-3xl

            min-h-[420px]
            md:min-h-[520px]
          "
          >

            {/* IMAGE */}
            <div className="absolute inset-0">

              <Image
                src="/about/AboutTower2.webp"
                alt="Mission Vision"
                fill
                className="
                object-cover

                opacity-90
              "
              />

            </div>

            {/* OVERLAY */}
            <div
              className="
              absolute inset-0

              bg-gradient-to-br
              from-[#020617]/70
              via-[#020617]/30
              to-[#020617]/80
            "
            />

            {/* FLOATING CARD */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}

              transition={{
                duration: 5,
                repeat: Infinity,
              }}

              className="
              absolute

              bottom-6
              left-6
              right-6

              rounded-[24px]

              border border-white/10

              bg-black/40

              backdrop-blur-2xl

              p-5
            "
            >

              <div
                className="
                flex
                items-center
                gap-3

                mb-4
              "
              >

                <CheckCircle2
                  size={22}
                  className="text-cyan-300"
                />

                <h4
                  className="
                  text-lg

                  font-bold
                "
                >
                  Engineering Excellence
                </h4>

              </div>

              <p
                className="
                text-sm

                text-white/70

                leading-[1.8]
              "
              >
                Building transmission and infrastructure
                solutions with innovation, safety,
                precision, and long-term sustainability.
              </p>

            </motion.div>

          </motion.div>

        </div>

        {/* ======================================== */}
        {/* VALUES */}
        {/* ======================================== */}

        <div
          className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4

          gap-5
        "
        >

          {values.map((item, i) => (

            <motion.div
              key={i}

              variants={fadeUp}
              initial="hidden"
              whileInView="show"

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.45,
                delay: i * 0.08,
              }}

              whileHover={{
                y: -8,
                scale: 1.02,
              }}

              className="
              group

              relative

              overflow-hidden

              rounded-[24px]

              border border-white/10

              bg-white/[0.03]

              backdrop-blur-2xl

              p-5

              hover:border-cyan-400/20

              transition-all duration-500
            "
            >

              {/* GLOW */}
              <div
                className="
                absolute inset-0

                opacity-0

                group-hover:opacity-100

                transition duration-500

                bg-gradient-to-br
                from-cyan-500/10
                via-transparent
                to-blue-500/10
              "
              />

              <div className="relative z-10">

                {/* ICON */}
                <div
                  className="
                  w-12 h-12

                  rounded-2xl

                  bg-cyan-400/10

                  border border-cyan-400/20

                  flex items-center justify-center

                  mb-5
                "
                >

                  <item.icon
                    size={22}
                    className="text-cyan-300"
                  />

                </div>

                {/* TITLE */}
                <div
                  className="
                  flex
                  items-center
                  justify-between

                  mb-3
                "
                >

                  <h4
                    className="
                    text-lg

                    font-bold
                  "
                  >
                    {item.title}
                  </h4>

                  <ArrowUpRight
                    size={18}
                    className="
                    text-white/30

                    group-hover:text-cyan-300

                    group-hover:-translate-y-1
                    group-hover:translate-x-1

                    transition-all duration-500
                  "
                  />

                </div>

                {/* DESC */}
                <p
                  className="
                  text-sm

                  leading-[1.8]

                  text-white/65
                "
                >
                  {item.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}