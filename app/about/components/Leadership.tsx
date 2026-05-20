"use client"

import { useEffect, useRef, useState } from "react"

import {
  motion,
  AnimatePresence,
} from "framer-motion"

import Image from "next/image"

import {
  Crown,
  ShieldCheck,
  Sparkles,
  X,
  ChevronRight,
} from "lucide-react"

const leadershipData = [
  {
    name: "Mr. Kuddus Ali",
    role:
      "Founder • Chairman • Managing Director",
    dept: "Chairman",
    image: "/about/Boss.webp",
    description:
      "Leading Kuddus Ali Construction with long-term vision, infrastructure excellence, operational growth, and sustainable engineering innovation across India.",
  },

  {
    name: "Sk Samim Aktar",
    role: "EHS & Engineering",
    dept: "Engineering",
    image: "/about/SamimSir.webp",
    description:
      "Responsible for engineering quality, technical supervision, project safety, and execution excellence.",
  },

  {
    name: "Md Nasiruddin Ahmed",
    role: "HR & Administration",
    dept: "Administration",
    image: "/about/NasirDa.webp",
    description:
      "Handles workforce coordination, administration systems, company discipline, and operational management.",
  },

  {
    name: "Akib Javed",
    role: "Planning & Procurement",
    dept: "Planning",
    image: "/about/AkibJaved.webp",
    description:
      "Responsible for strategic procurement planning, vendor coordination, and execution timelines.",
  },

  {
    name: "Safidur",
    role: "Projects Team",
    dept: "Projects",
    image: "/about/SafidurKaku.webp",
    description:
      "Coordinates field execution, manpower deployment, and site-level project management.",
  },

  {
    name: "Prabhakar Pramanik",
    role: "Store Management",
    dept: "Store",
    image: "/about/Probhakar.webp",
    description:
      "Handles inventory control, logistics support, and material management operations.",
  },

  {
    name: "Asraful Hoque",
    role: "Finance Department",
    dept: "Finance",
    image: "/about/AsrafulDa.webp",
    description:
      "Responsible for budgeting, company finance systems, and operational financial planning.",
  },

  {
    name: "Operations Head",
    role: "Operations Management",
    dept: "Operations",
    image: "/about/ID7.webp",
    description:
      "Ensures smooth coordination across departments and efficient project delivery systems.",
  },

  {
    name: "Abdul Mozid",
    role: "Payroll Executive",
    dept: "HR",
    image: "/about/Mozidda.webp",
    description:
      "Provides technical guidance, company policies, and payment advisory support.",
  },
  {
    name: "Isob Ali",
    role: "HSE Asst-Manager",
    dept: "EHS & ENGINEERING",
    image: "/about/IsobDa.webp",
    description:
      "Ensures safety compliance and effective project delivery systems.",
  },
]

export default function Leadership() {

  const [selected, setSelected] =
    useState<any>(null)

  const scrollRef =
    useRef<HTMLDivElement>(null)

  /* ======================================== */
  /* AUTO INFINITE SCROLL */
  /* ======================================== */

  useEffect(() => {

    const container = scrollRef.current

    if (!container) return

    let animationFrame: number

    let isHovered = false

    const handleMouseEnter = () => {
      isHovered = true
    }

    const handleMouseLeave = () => {
      isHovered = false
    }

    container.addEventListener(
      "mouseenter",
      handleMouseEnter
    )

    container.addEventListener(
      "mouseleave",
      handleMouseLeave
    )

    const autoScroll = () => {

      if (!isHovered) {

        container.scrollLeft += 0.7

        if (
          container.scrollLeft >=
          container.scrollWidth / 2
        ) {
          container.scrollLeft = 0
        }

      }

      animationFrame =
        requestAnimationFrame(autoScroll)

    }

    autoScroll()

    return () => {

      cancelAnimationFrame(animationFrame)

      container.removeEventListener(
        "mouseenter",
        handleMouseEnter
      )

      container.removeEventListener(
        "mouseleave",
        handleMouseLeave
      )

    }

  }, [])

  const duplicatedData = [
    ...leadershipData,
    ...leadershipData,
  ]

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

      {/* BG */}
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

          w-[350px]
          h-[350px]

          bg-blue-500/10

          blur-[120px]
        "
        />

      </div>

      <div className="relative z-10">

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

          mb-10

          px-6
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
              MEET THE TEAM
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

            Organization Chart &

            <span className="gradient-text block mt-2">
              Meet the Team
            </span>

          </h2>

          <p
            className="
            text-white/60

            text-sm
            md:text-base

            leading-[1.8]

            max-w-3xl

            mx-auto
          "
          >
            Explore the Team Member powering
            Kuddus Ali Construction’s infrastructure excellence.
          </p>

        </motion.div>

        {/* ======================================== */}
        {/* SLIDER */}
        {/* ======================================== */}

        <div
          ref={scrollRef}

          className="
          flex

          gap-5

          overflow-x-auto

          scrollbar-hide

          px-6

          pb-4

          select-none
        "
        >

          {duplicatedData.map((item, index) => (

            <motion.div
              key={index}

              whileHover={{
                y: -8,
              }}

              transition={{
                duration: 0.3,
              }}

              onClick={() => setSelected(item)}

              className="
              group

              relative

              shrink-0

              w-[220px]
              md:w-[240px]

              rounded-[24px]

              overflow-hidden

              border border-white/10

              bg-white/[0.03]

              backdrop-blur-3xl

              cursor-pointer

              hover:border-cyan-400/20

              transition-all duration-500
            "
            >

              {/* IMAGE */}
              <div
                className="
                relative

                h-[180px]

                overflow-hidden
              "
              >

                <Image
                  src={item.image}
                  alt={item.name}
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

                {/* BADGE */}
                <div
                  className="
                  absolute

                  top-3
                  left-3

                  flex
                  items-center
                  gap-2

                  px-3 py-2

                  rounded-full

                  bg-black/40

                  border border-white/10

                  backdrop-blur-xl
                "
                >

                  <Crown
                    size={11}
                    className="text-cyan-300"
                  />

                  <span
                    className="
                    text-[8px]

                    tracking-[2px]

                    text-white/80
                  "
                  >
                    {item.dept}
                  </span>

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-4">

                <h3
                  className="
                  text-lg

                  font-black

                  mb-2

                  leading-tight
                "
                >
                  {item.name}
                </h3>

                <p
                  className="
                  text-cyan-300

                  text-xs

                  leading-[1.6]

                  mb-5
                "
                >
                  {item.role}
                </p>

                {/* FOOTER */}
                <div
                  className="
                  flex
                  items-center
                  justify-between
                "
                >

                  <span
                    className="
                    text-[9px]

                    tracking-[3px]

                    text-white/35
                  "
                  >
                    VIEW DETAILS
                  </span>

                  <div
                    className="
                    w-9 h-9

                    rounded-xl

                    border border-white/10

                    bg-white/[0.03]

                    flex items-center justify-center
                  "
                  >

                    <ChevronRight
                      size={16}
                      className="text-cyan-300"
                    />

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* ======================================== */}
      {/* MODAL */}
      {/* ======================================== */}

      <AnimatePresence>

        {selected && (

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

            bg-black/85

            backdrop-blur-xl

            flex items-center justify-center

            px-4
            py-5
          "
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}

              transition={{
                duration: 0.3,
              }}

              className="
              relative

              overflow-hidden

              w-full
              max-w-2xl

              rounded-[24px]

              border border-white/10

              bg-[#08101f]/95

              backdrop-blur-3xl
            "
            >

              {/* CLOSE */}
              <button
                onClick={() => setSelected(null)}

                className="
                absolute

                top-3
                right-3

                z-[100]

                w-9 h-9

                rounded-full

                border border-white/10

                bg-black/80

                flex items-center justify-center

                text-white

                hover:bg-cyan-400
                hover:text-black

                transition-all duration-300
              "
              >

                <X size={16} />

              </button>

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

                  h-[220px]
                  md:h-[320px]
                "
                >

                  <Image
                    src={selected.image}
                    alt={selected.name}
                    fill
                    className="object-cover"
                  />

                  <div
                    className="
                    absolute inset-0

                    bg-gradient-to-t
                    from-[#020617]
                    via-[#020617]/10
                    to-transparent
                  "
                  />

                </div>

                {/* CONTENT */}
                <div
                  className="
                  p-5
                  md:p-6

                  flex
                  flex-col
                  justify-center
                "
                >

                  {/* BADGE */}
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

                    text-[11px]

                    mb-4

                    w-fit
                  "
                  >

                    <ShieldCheck size={13} />

                    Team Members Profile

                  </div>

                  {/* NAME */}
                  <h2
                    className="
                    text-2xl

                    font-black

                    mb-3

                    leading-tight
                  "
                  >
                    {selected.name}
                  </h2>

                  {/* ROLE */}
                  <p
                    className="
                    text-cyan-300

                    text-sm

                    leading-[1.7]

                    mb-4
                  "
                  >
                    {selected.role}
                  </p>

                  {/* DESCRIPTION */}
                  <p
                    className="
                    text-white/70

                    leading-[1.8]

                    text-sm
                  "
                  >
                    {selected.description}
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>

  )

}