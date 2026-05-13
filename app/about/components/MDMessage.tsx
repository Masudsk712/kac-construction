"use client"

import { motion } from "framer-motion"

import Image from "next/image"

import {
  Quote,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react"

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },

  show: {
    opacity: 1,
    x: 0,
  },
}

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },

  show: {
    opacity: 1,
    x: 0,
  },
}

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

const highlights = [
  "Infrastructure Excellence",
  "Trusted EPC Execution",
  "Nationwide Project Delivery",
  "Commitment to Safety & Quality",
]

export default function MDMessage() {

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
      {/* BACKGROUND */}
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
            scale: [1, 1.08, 1],
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
            scale: [1, 1.12, 1],
          }}

          transition={{
            duration: 10,
            repeat: Infinity,
          }}

          className="
          absolute

          bottom-0
          right-0

          w-[400px]
          h-[400px]

          bg-blue-500/10

          blur-[120px]
        "
        />

      </div>

      <div
        className="
        relative z-10

        container-premium

        grid
        lg:grid-cols-[0.9fr_1.1fr]

        gap-10
        lg:gap-16

        items-center
      "
      >

        {/* ======================================== */}
        {/* LEFT IMAGE */}
        {/* ======================================== */}

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.7,
          }}

          className="
          flex
          justify-center
        "
        >

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.01,
            }}

            transition={{
              duration: 0.4,
            }}

            className="
            relative

            overflow-hidden

            w-full
            max-w-[420px]

            h-[520px]

            rounded-[34px]

            border border-white/10

            bg-white/[0.03]

            backdrop-blur-3xl

            shadow-[0_25px_80px_rgba(0,0,0,0.45)]
          "
          >

            {/* IMAGE */}
            <div className="absolute inset-0">

              <Image
                src="/placeholder.jpg"
                alt="Managing Director"
                fill
                className="
                object-cover

                transition duration-700

                group-hover:scale-105
              "
              />

            </div>

            {/* OVERLAY */}
            <div
              className="
              absolute inset-0

              bg-gradient-to-t
              from-[#020617]
              via-[#020617]/20
              to-transparent
            "
            />

            {/* TOP BADGE */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}

              transition={{
                duration: 5,
                repeat: Infinity,
              }}

              className="
              absolute

              top-5
              left-5

              flex
              items-center
              gap-2

              px-4 py-2

              rounded-full

              border border-white/10

              bg-black/40

              backdrop-blur-xl
            "
            >

              <BadgeCheck
                size={16}
                className="text-cyan-300"
              />

              <span
                className="
                text-xs

                tracking-[2px]

                text-white/80
              "
              >
                LEADERSHIP
              </span>

            </motion.div>

            {/* BOTTOM INFO */}
            <div
              className="
              absolute

              bottom-0
              left-0
              right-0

              p-6
            "
            >

              <div
                className="
                rounded-[24px]

                border border-white/10

                bg-black/40

                backdrop-blur-2xl

                p-5
              "
              >

                <h3
                  className="
                  text-2xl

                  font-black

                  mb-2
                "
                >
                  Mr. Kuddus Ali
                </h3>

                <p
                  className="
                  text-cyan-300

                  text-sm

                  mb-4
                "
                >
                  Founder • Chairman • Managing Director
                </p>

                <div
                  className="
                  flex
                  items-center
                  justify-between
                "
                >

                  <p className="text-white/50 text-sm">
                    Kuddus Ali Construction
                  </p>

                  <ArrowUpRight
                    size={18}
                    className="text-cyan-300"
                  />

                </div>

              </div>

            </div>

          </motion.div>

        </motion.div>

        {/* ======================================== */}
        {/* RIGHT CONTENT */}
        {/* ======================================== */}

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.7,
          }}
        >

          {/* LABEL */}
          <motion.div
            variants={fadeUp}

            className="
            inline-flex

            items-center
            gap-3

            px-4 py-2

            rounded-full

            border border-white/10

            bg-white/[0.03]

            backdrop-blur-xl

            mb-6
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
              MANAGING DIRECTOR’S MESSAGE
            </span>

          </motion.div>

          {/* TITLE */}
          <motion.h2
            variants={fadeUp}

            transition={{
              delay: 0.1,
            }}

            className="
            text-3xl
            md:text-5xl

            font-black

            leading-tight

            mb-6
          "
          >

            Leadership with

            <span className="gradient-text block mt-2">
              Vision & Integrity
            </span>

          </motion.h2>

          {/* QUOTE CARD */}
          <motion.div
            variants={fadeUp}

            transition={{
              delay: 0.15,
            }}

            className="
            relative

            overflow-hidden

            rounded-[28px]

            border border-white/10

            bg-white/[0.03]

            backdrop-blur-2xl

            p-6 md:p-7

            mb-7
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

            <Quote
              size={50}

              className="
              absolute

              top-4
              right-4

              text-cyan-400/10
            "
            />

            <div className="relative z-10">

              <p
                className="
                text-white/75

                leading-[2]

                text-sm
                md:text-base

                mb-6
              "
              >
                At Kuddus Ali Construction, we are committed
                to delivering excellence in every
                project we undertake. Our focus remains
                on quality, safety, innovation, and
                timely execution while consistently
                exceeding client expectations.
              </p>

              <p
                className="
                text-white/75

                leading-[2]

                text-sm
                md:text-base
              "
              >
                With strong leadership and a dedicated
                team, we continue to expand our
                capabilities across infrastructure,
                transmission, and EPC sectors —
                building a future driven by trust,
                engineering excellence, and long-term
                value creation.
              </p>

            </div>

          </motion.div>

          {/* HIGHLIGHTS */}
          <motion.div
            variants={fadeUp}

            transition={{
              delay: 0.2,
            }}

            className="
            grid
            sm:grid-cols-2

            gap-4

            mb-8
          "
          >

            {highlights.map((item, index) => (

              <motion.div
                key={index}

                whileHover={{
                  y: -4,
                }}

                className="
                flex
                items-center

                gap-3

                rounded-2xl

                border border-white/10

                bg-white/[0.03]

                backdrop-blur-xl

                px-4 py-4
              "
              >

                <div
                  className="
                  w-10 h-10

                  rounded-xl

                  bg-cyan-400/10

                  border border-cyan-400/20

                  flex items-center justify-center
                "
                >

                  <ShieldCheck
                    size={18}
                    className="text-cyan-300"
                  />

                </div>

                <p
                  className="
                  text-sm

                  text-white/75

                  font-medium
                "
                >
                  {item}
                </p>

              </motion.div>

            ))}

          </motion.div>

          {/* SIGNATURE */}
          <motion.div
            variants={fadeUp}

            transition={{
              delay: 0.3,
            }}

            className="
            flex
            items-center
            justify-between

            pt-6

            border-t border-white/10
          "
          >

            <div>

              <h4
                className="
                text-xl

                font-black

                mb-1
              "
              >
                Mr. Kuddus Ali
              </h4>

              <p
                className="
                text-cyan-300

                text-sm
              "
              >
                Founder • Promoter • Chairman • MD
              </p>

            </div>

            <motion.div
              whileHover={{
                rotate: 45,
              }}

              className="
              w-12 h-12

              rounded-2xl

              border border-white/10

              bg-white/[0.03]

              flex items-center justify-center
            "
            >

              <ArrowUpRight
                size={22}
                className="text-cyan-300"
              />

            </motion.div>

          </motion.div>

        </motion.div>

      </div>

    </section>

  )

}