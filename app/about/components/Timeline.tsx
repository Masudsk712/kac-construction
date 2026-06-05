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

import { useBrand } from "@/components/BrandContext"

const baseTimeline = [
  {
    year: "2008",
    title: "Founded",
    desc: "Founded with a vision to build strong infrastructure across India.",
    imgStem: "Trans5Pic",
  },
  {
    year: "2014",
    title: "Expansion",
    desc: "Major expansion in transmission and EPC projects across multiple states.",
    imgStem: "Trans1Pic",
  },
  {
    year: "2018",
    title: "Government Recognition",
    desc: "Awarded for excellence in infrastructure development.",
    imgStem: "Trans2Pic",
  },
  {
    year: "2020",
    title: "Achievements",
    desc: "Handled high capacity substation projects successfully.",
    imgStem: "Trans3Pic",
  },
  {
    year: "2022",
    title: "Water Segment",
    desc: "Entered water infrastructure segment with major government projects.",
    imgStem: "Trans4Pic",
  },
  {
    year: "2024",
    title: "Growth & Expansion",
    desc: "Secured major funding to expand operations nationwide.",
    imgStem: "AboutTowerGrow3",
  },
]

function getTimeline(domain: string) {
  return baseTimeline.map((item) => ({
    ...item,
    image: `/${domain}/about/${item.imgStem}.webp`,
  }))
}

export default function Timeline() {

  const [active, setActive] = useState<any>(null)
  const { config: c, domain } = useBrand();

  const timelineData = getTimeline(domain)

  return (

    <section
      className="
      section-surface
      section-premium

      py-16 md:py-20

      relative
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

          w-[400px]
          h-[400px]

          bg-cyan-500/10

          blur-[120px]

          top-0
          -left-20
        "
        />

        <div
          className="
          absolute

          w-[320px]
          h-[320px]

          bg-blue-500/10

          blur-[100px]

          bottom-0
          right-0
        "
        />

      </div>

      <div className="relative z-10 container-premium">

        {/* ======================================== */}
        {/* HEADING */}
        {/* ======================================== */}

        <div className="text-center max-w-4xl mx-auto mb-14">

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
              OUR JOURNEY
            </span>

          </div>

          <h2
            className="
            text-3xl
            md:text-4xl

            font-black

            leading-tight

            mb-5
          "
          >

            Our Journey &

            <span className="gradient-text block mt-2">
              Major Milestones
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
            A timeline showcasing {c.name}&rsquo;s
            growth, achievements, and infrastructure
            excellence across India.
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

              const isLeft = index % 2 === 0

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
                        onClick={() => setActive(item)}
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
                        onClick={() => setActive(item)}
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

            className="
            fixed inset-0

            z-[9999]

            bg-black/85

            backdrop-blur-xl

            flex items-center justify-center

            px-4
            py-6
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

              rounded-[22px]

              border border-white/10

              bg-[#08101f]/95

              backdrop-blur-3xl
            "
            >

              {/* CLOSE */}
              <button
                onClick={() => setActive(null)}

                className="
                absolute

                top-3
                right-3

                z-30

                w-9 h-9

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

                <X size={16} />

              </button>

              <div
                className="
                grid
                lg:grid-cols-2
              "
              >

                {/* IMAGE */}
                <div
                  className="
                  relative

                  h-[180px]
                  lg:h-[280px]
                "
                >

                  <Image
                    src={active.image}
                    alt={active.title}
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

                    text-xs

                    mb-4

                    w-fit
                  "
                  >

                    <CalendarDays size={14} />

                    Year {active.year}

                  </div>

                  <h2
                    className="
                    text-2xl
                    md:text-3xl

                    font-black

                    mb-4
                  "
                  >
                    {active.title}
                  </h2>

                  <p
                    className="
                    text-white/70

                    leading-[1.8]

                    text-sm
                    md:text-base
                  "
                  >
                    {active.desc}
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

        {/* FLOATING YEAR */}
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