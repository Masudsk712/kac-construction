"use client"

import { useState, useEffect } from "react"

import {
  motion,
  AnimatePresence,
} from "framer-motion"

import Image from "next/image"

import {
  ChevronLeft,
  ChevronRight,
  X,
  Plus,
  Sparkles,
  Trophy,
  ShieldCheck,
} from "lucide-react"
import { useBrand } from "@/components/BrandContext"

const awards = [
  {
    title:
      "CEO Meet Held at Delhi • May 10th 2024",

    subtitle:
      "Faster Completion Project Award by PGCIL – MD",

    description:
      "Appreciated for completing multiple high-voltage transmission projects ahead of schedule with exceptional execution quality.",

    image: "/about/Award1.webp",

    tag: "National Recognition",
  },

  {
    title:
      "Bihar State Power Holding Company Ltd.",

    subtitle:
      "Excellence Award – Saubhagya Yojna",

    description:
      "Recognized for successful rural electrification and fast-track infrastructure execution under the government electrification mission.",

    image: "/about/Award2.webp",

    tag: "Government Award",
  },

  {
    title:
      "Infrastructure Excellence • 2018",

    subtitle:
      "Outstanding Infrastructure Contribution",

    description:
      "Awarded for consistent performance, engineering excellence, and delivering large-scale infrastructure projects across India.",

    image: "/about/Award3.webp",

    tag: "Infrastructure Excellence",
  },

  {
    title:
      "Operational Achievement • 2022",

    subtitle:
      "Execution Excellence Recognition",

    description:
      "Honored for maintaining high safety standards, execution efficiency, and project quality across multiple states.",

    image: "/about/Award4.webp",

    tag: "Execution Award",
  },
]

export default function Awards() {

  const [index, setIndex] = useState(0)

  const [modal, setModal] =
    useState<any>(null)
  const { config: c } = useBrand();

  /* ======================================== */
  /* AUTO SLIDER */
  /* ======================================== */

  useEffect(() => {

    const timer = setInterval(() => {

      setIndex((prev) =>
        (prev + 1) % awards.length
      )

    }, 4500)

    return () => clearInterval(timer)

  }, [])

  const next = () => {

    setIndex((prev) =>
      (prev + 1) % awards.length
    )

  }

  const prev = () => {

    setIndex((prev) =>
      (prev - 1 + awards.length) %
      awards.length
    )

  }

  return (

    <section
      className="
      section-surface
      relative
      overflow-hidden

      py-16 md:py-20

      text-slate-900
      dark:text-white
    "
    >

      {/* ======================================== */}
      {/* BACKGROUND */}
      {/* ======================================== */}

      <div
        className="
        absolute inset-0

        bg-[var(--bg-soft)]
        dark:bg-gradient-to-br
        dark:from-[#020617]
        dark:via-[#07111f]
        dark:to-[#020617]
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

        <div
          className="
          absolute

          top-0
          -left-20

          w-[450px]
          h-[450px]

          bg-cyan-500/10

          blur-[130px]
        "
        />

        <div
          className="
          absolute

          bottom-0
          right-0

          w-[380px]
          h-[380px]

          bg-blue-500/10

          blur-[120px]
        "
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ======================================== */}
        {/* HEADING */}
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

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.7,
          }}

          className="
          text-center

          max-w-4xl

          mx-auto

          mb-14
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
              AWARDS & RECOGNITION
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

            Recognized Across

            <span className="gradient-text block mt-2">
              India
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
            {c.name} continues to earn
            recognition for engineering excellence,
            infrastructure leadership, project execution,
            and operational performance.
          </p>

        </motion.div>

        {/* ======================================== */}
        {/* PREMIUM SLIDER */}
        {/* ======================================== */}

        <div
          className="
          relative

          h-[340px]
          md:h-[390px]

          flex
          items-center
          justify-center
        "
        >

          {awards.map((item, i) => {

            const isActive = i === index

            const isLeft =
              i ===
              (index - 1 + awards.length) %
              awards.length

            const isRight =
              i ===
              (index + 1) % awards.length

            return (

              <motion.div
                key={i}

                animate={{
                  scale: isActive
                    ? 1
                    : 0.82,

                  opacity: isActive
                    ? 1
                    : 0.25,

                  x: isLeft
                    ? "-55%"
                    : isRight
                      ? "55%"
                      : "0%",

                  zIndex: isActive ? 20 : 1,
                }}

                transition={{
                  duration: 0.6,
                }}

                className="
                absolute

                left-1/2
                -translate-x-1/2

                w-[92%]
                md:w-[720px]

                rounded-[28px]

                overflow-hidden

                border border-white/10

                bg-white/[0.03]

                backdrop-blur-3xl

                shadow-[0_20px_70px_rgba(0,0,0,0.45)]
              "
              >

                <div
                  className="
                  grid
                  md:grid-cols-2
                "
                >

                  {/* IMAGE */}
                  <div
                    className="
                    relative

                    h-[180px]
                    md:h-[390px]

                    overflow-hidden

                    group

                    cursor-pointer
                  "
                    onClick={() =>
                      setModal(item)
                    }
                  >

                    <Image
                      src={item.image}
                      alt={item.subtitle}
                      fill
                      className="
                      object-cover

                      transition duration-700

                      group-hover:scale-110
                    "
                    />

                    {/* OVERLAY */}
                    <div
                      className="
                      absolute inset-0

                      bg-gradient-to-t
                      from-[#020617]
                      via-[#020617]/10
                      to-transparent
                    "
                    />

                    {/* ZOOM ICON */}
                    <div
                      className="
                      absolute inset-0

                      opacity-0

                      group-hover:opacity-100

                      transition

                      flex items-center justify-center
                    "
                    >

                      <div
                        className="
                        w-14 h-14

                        rounded-full

                        bg-black/50

                        border border-white/10

                        backdrop-blur-xl

                        flex items-center justify-center
                      "
                      >

                        <Plus
                          size={24}
                          className="text-white"
                        />

                      </div>

                    </div>

                    {/* TAG */}
                    <div
                      className="
                      absolute

                      top-4
                      left-4

                      inline-flex

                      items-center
                      gap-2

                      px-4 py-2

                      rounded-full

                      bg-black/40

                      border border-white/10

                      backdrop-blur-xl
                    "
                    >

                      <Trophy
                        size={12}
                        className="text-cyan-300"
                      />

                      <span
                        className="
                        text-[9px]

                        tracking-[2px]

                        text-white/80
                      "
                      >
                        {item.tag}
                      </span>

                    </div>

                  </div>

                  {/* CONTENT */}
                  <div
                    className="
                    p-5
                    md:p-7

                    flex
                    flex-col
                    justify-center
                  "
                  >

                    <div
                      className="
                      inline-flex

                      items-center
                      gap-2

                      px-3 py-2

                      rounded-full

                      bg-cyan-400/10

                      border border-cyan-400/20

                      text-cyan-300

                      text-[10px]

                      mb-4

                      w-fit
                    "
                    >

                      <ShieldCheck size={12} />

                      Excellence Recognition

                    </div>

                    <h3
                      className="
                      text-[10px]

                      uppercase

                      tracking-[2px]

                      text-white/45

                      mb-3
                    "
                    >
                      {item.title}
                    </h3>

                    <h2
                      className="
                      text-xl
                      md:text-2xl

                      font-black

                      leading-tight

                      mb-4
                    "
                    >
                      {item.subtitle}
                    </h2>

                    <p
                      className="
                      text-white/65

                      leading-[1.8]

                      text-sm
                    "
                    >
                      {item.description}
                    </p>

                  </div>

                </div>

              </motion.div>

            )

          })}

        </div>

        {/* ======================================== */}
        {/* CONTROLS */}
        {/* ======================================== */}

        <div
          className="
          flex
          items-center
          justify-center

          gap-4

          mt-8
        "
        >

          <button
            onClick={prev}

            className="
            w-11 h-11

            rounded-2xl

            border border-white/10

            bg-white/[0.03]

            backdrop-blur-xl

            flex items-center justify-center

            hover:border-cyan-400/30

            hover:bg-cyan-400/10

            transition-all duration-300
          "
          >

            <ChevronLeft size={20} />

          </button>

          <button
            onClick={next}

            className="
            w-11 h-11

            rounded-2xl

            border border-white/10

            bg-white/[0.03]

            backdrop-blur-xl

            flex items-center justify-center

            hover:border-cyan-400/30

            hover:bg-cyan-400/10

            transition-all duration-300
          "
          >

            <ChevronRight size={20} />

          </button>

        </div>

      </div>

      {/* ======================================== */}
      {/* MODAL */}
      {/* ======================================== */}

      <AnimatePresence>

        {modal && (

          <motion.div
            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            className="
      fixed inset-0

      z-[9999]

      bg-black/90

      backdrop-blur-xl

      flex items-center justify-center

      p-4
    "
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}

              transition={{
                duration: 0.3,
              }}

              className="
        relative

        w-full
        max-w-[700px]

        rounded-[22px]

        overflow-hidden

        border border-white/10

        bg-[#08101f]/95

        backdrop-blur-3xl
      "
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setModal(null)}

                className="
          absolute

          top-3
          right-3

          z-[100]

          w-10 h-10

          rounded-full

          border border-white/10

          bg-black/90

          flex items-center justify-center

          text-white

          hover:bg-cyan-400
          hover:text-black

          transition-all duration-300
        "
              >

                <X size={18} />

              </button>

              {/* IMAGE */}
              <div
                className="
          relative

          w-full

          h-[180px]
          sm:h-[240px]
          md:h-[320px]
        "
              >

                <Image
                  src={modal.image}
                  alt="award"
                  fill

                  className="
            object-cover
          "
                />

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>

  )

}