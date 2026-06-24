"use client"

import { useState } from "react"

import {
  motion,
  AnimatePresence,
} from "framer-motion"

import Image from "next/image"

import {
  ArrowUpRight,
  CalendarDays,
  Sparkles,
  X,
} from "lucide-react"

const timelineData = [
  {
    year: "2010",
    title: "Foundation Projects Started",
    desc:
      "Kuddus Ali Construction initiated transmission tower foundation execution across multiple regions in India.",

    image: "kacgroups/projects/Project9.webp",
  },

  {
    year: "2014",
    title: "Expansion Into Erection",
    desc:
      "Successfully expanded operations into high-voltage tower erection and infrastructure execution.",

    image: "kacgroups/projects/Project10.webp",
  },

  {
    year: "2018",
    title: "765kV Transmission Capability",
    desc:
      "Handled ultra high-voltage transmission infrastructure with advanced engineering expertise.",

    image: "kacgroups/projects/Project11.webp",
  },

  {
    year: "2020",
    title: "Hotline Maintenance",
    desc:
      "Entered hotline maintenance and live-line transmission operations with specialized teams.",

    image: "kacgroups/projects/Project12.webp",
  },

  {
    year: "2022",
    title: "HTLS Reconductoring",
    desc:
      "Executed advanced HTLS reconductoring and modernization transmission projects.",

    image: "kacgroups/projects/Project13.webp",
  },

  {
    year: "2025",
    title: "Nationwide Growth",
    desc:
      "Expanded infrastructure operations across India delivering reliable EPC solutions.",

    image: "kacgroups/projects/Project14.webp",
  },
]

export default function ProjectTimeline() {

  const [active, setActive] =
    useState<any>(null)

  return (

    <section
      className="
      section-surface
      relative

      py-20 md:py-28

      overflow-hidden

      text-slate-900
      dark:text-white
    "
    >

      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
          absolute

          top-0
          left-[-100px]

          w-[420px]
          h-[420px]

          bg-cyan-500/10

          blur-[130px]
        "
        />

        <div
          className="
          absolute

          bottom-0
          right-[-80px]

          w-[350px]
          h-[350px]

          bg-blue-500/10

          blur-[120px]
        "
        />

      </div>

      <div
        className="
        relative z-10

        max-w-7xl
        mx-auto

        px-6
      "
      >

        {/* ======================================== */}
        {/* HEADING */}
        {/* ======================================== */}

        <div className="text-center max-w-4xl mx-auto mb-16">

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
              PROJECT JOURNEY
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

            Infrastructure

            <span className="block text-cyan-400 mt-2">
              Milestones
            </span>

          </h2>

          <p
            className="
            text-white/55

            text-sm
            md:text-base

            leading-[1.9]

            max-w-2xl

            mx-auto
          "
          >
            A timeline showcasing Kuddus Ali Construction’s
            infrastructure growth, EPC achievements,
            transmission expertise and nationwide
            execution capability.
          </p>

        </div>

        {/* ======================================== */}
        {/* TIMELINE */}
        {/* ======================================== */}

        <div className="relative">

          {/* CENTER LINE */}
          <div
            className="
            hidden lg:block

            absolute

            left-1/2
            top-0

            -translate-x-1/2

            w-[2px]
            h-full

            bg-gradient-to-b
            from-cyan-400/10
            via-cyan-400/40
            to-transparent
          "
          />

          <div className="space-y-10">

            {timelineData.map((item, index) => {

              const isLeft =
                index % 2 === 0

              return (

                <div
                  key={index}

                  className="
                  relative

                  flex
                  flex-col
                  lg:flex-row

                  items-center
                  justify-between
                "
                >

                  {/* LEFT */}
                  {isLeft ? (

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -40,
                      }}

                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}

                      transition={{
                        duration: 0.5,
                      }}

                      viewport={{
                        once: true,
                      }}

                      className="
                      w-full
                      lg:w-[42%]
                    "
                    >

                      <TimelineCard
                        item={item}
                        onClick={() =>
                          setActive(item)
                        }
                      />

                    </motion.div>

                  ) : (

                    <div className="hidden lg:block lg:w-[42%]" />

                  )}

                  {/* CENTER DOT */}
                  <div
                    className="
                    hidden lg:flex

                    relative z-10

                    items-center
                    justify-center
                  "
                  >

                    <div
                      className="
                      relative

                      w-4 h-4

                      rounded-full

                      bg-cyan-400

                      shadow-[0_0_20px_rgba(34,211,238,0.8)]
                    "
                    >

                      <div
                        className="
                        absolute inset-0

                        rounded-full

                        animate-ping

                        bg-cyan-400/30
                      "
                      />

                    </div>

                  </div>

                  {/* RIGHT */}
                  {!isLeft ? (

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: 40,
                      }}

                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}

                      transition={{
                        duration: 0.5,
                      }}

                      viewport={{
                        once: true,
                      }}

                      className="
                      w-full
                      lg:w-[42%]
                    "
                    >

                      <TimelineCard
                        item={item}
                        onClick={() =>
                          setActive(item)
                        }
                      />

                    </motion.div>

                  ) : (

                    <div className="hidden lg:block lg:w-[42%]" />

                  )}

                </div>

              )

            })}

          </div>

        </div>

      </div>

      {/* ======================================== */}
      {/* MODAL */}
      {/* ======================================== */}

      <AnimatePresence>

        {active && (

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

            onClick={() => setActive(null)}

            className="
      fixed inset-0

      z-[9999]

      bg-black/80

      backdrop-blur-lg

      flex items-center justify-center

      px-4
    "
          >

            {/* CARD */}
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

              onClick={(e) =>
                e.stopPropagation()
              }

              className="
        relative

        overflow-hidden

        w-full
        max-w-[500px]

        rounded-[22px]

        border border-white/10

        bg-[#08101f]/95

        backdrop-blur-3xl

        shadow-[0_0_50px_rgba(34,211,238,0.12)]
      "
            >

              {/* CLOSE */}
              <button
                onClick={() =>
                  setActive(null)
                }

                className="
          absolute

          top-3
          right-3

          z-30

          w-8 h-8

          rounded-full

          border border-white/10

          bg-black/70

          flex items-center justify-center

          text-white

          hover:bg-cyan-400
          hover:text-black

          transition-all duration-300
        "
              >

                <X size={15} />

              </button>

              {/* IMAGE */}
              <div
                className="
          relative

          h-[150px]
        "
              >

                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover"
                />

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

              </div>

              {/* CONTENT */}
              <div
                className="
          p-4
          md:p-5
        "
              >

                {/* YEAR */}
                <div
                  className="
            inline-flex

            items-center
            gap-2

            px-3 py-1.5

            rounded-full

            bg-cyan-400/10

            border border-cyan-400/20

            text-cyan-300

            text-[11px]

            mb-3
          "
                >

                  <CalendarDays size={12} />

                  Year {active.year}

                </div>

                {/* TITLE */}
                <h2
                  className="
            text-xl
            md:text-2xl

            font-black

            mb-3
          "
                >
                  {active.title}
                </h2>

                {/* DESCRIPTION */}
                <p
                  className="
            text-white/70

            leading-[1.8]

            text-sm
          "
                >
                  {active.desc}
                </p>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>

  )

}

/* ======================================== */
/* CARD */
/* ======================================== */

function TimelineCard({
  item,
  onClick,
}: any) {

  return (

    <motion.div

      whileHover={{
        y: -6,
        scale: 1.01,
      }}

      transition={{
        duration: 0.3,
      }}

      onClick={onClick}

      className="
      group

      relative

      overflow-hidden

      rounded-[22px]

      border border-white/10

      bg-white/[0.03]

      backdrop-blur-2xl

      p-4

      cursor-pointer

      hover:border-cyan-400/20

      hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]

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

      {/* IMAGE */}
      <div
        className="
        relative

        w-full
        h-[170px]

        rounded-[18px]

        overflow-hidden

        mb-5
      "
      >

        <Image
          src={item.image}
          alt={item.title}
          fill
          className="
          object-cover

          group-hover:scale-110

          transition duration-700
        "
        />

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

        {/* YEAR */}
        <div
          className="
          absolute

          top-4
          left-4

          inline-flex

          items-center
          gap-2

          px-3 py-2

          rounded-full

          bg-black/60

          backdrop-blur-xl

          border border-white/10

          text-cyan-300

          text-xs
        "
        >

          <CalendarDays size={13} />

          {item.year}

        </div>

      </div>

      {/* TITLE */}
      <h3
        className="
        text-xl

        font-bold

        mb-3

        group-hover:text-cyan-300

        transition
      "
      >
        {item.title}
      </h3>

      {/* DESC */}
      <p
        className="
        text-white/65

        leading-[1.8]

        text-sm

        mb-5
      "
      >
        {item.desc}
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
          text-[10px]

          tracking-[3px]

          text-white/30
        "
        >
          VIEW DETAILS
        </span>

        <ArrowUpRight
          size={18}

          className="
          text-white/30

          group-hover:text-cyan-300

          group-hover:translate-x-1
          group-hover:-translate-y-1

          transition-all duration-500
        "
        />

      </div>

    </motion.div>

  )

}