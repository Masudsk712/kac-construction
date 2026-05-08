"use client";

import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

const timelineData = [
  {
    year: "2010",
    title: "Foundation Projects Started",
    desc:
      "KAC Construction initiated transmission tower foundation execution across multiple regions in India.",

    image: "/placeholder.jpg",
  },

  {
    year: "2014",
    title: "Expansion Into Erection",
    desc:
      "Successfully expanded operations into high-voltage tower erection and infrastructure execution.",

    image: "/placeholder.jpg",
  },

  {
    year: "2018",
    title: "765kV Transmission Capability",
    desc:
      "Handled ultra high-voltage transmission infrastructure with advanced engineering expertise.",

    image: "/placeholder.jpg",
  },

  {
    year: "2020",
    title: "Hotline Maintenance",
    desc:
      "Entered hotline maintenance and live-line transmission operations with specialized teams.",

    image: "/placeholder.jpg",
  },

  {
    year: "2022",
    title: "HTLS Reconductoring",
    desc:
      "Executed advanced HTLS reconductoring and modernization transmission projects.",

    image: "/placeholder.jpg",
  },

  {
    year: "2025",
    title: "Nationwide Growth",
    desc:
      "Expanded infrastructure operations across India delivering reliable EPC solutions.",

    image: "/placeholder.jpg",
  },
];

export default function ProjectTimeline() {

  const [active, setActive] = useState<any>(null);

  return (
    <section
      className="
      section-premium

      py-28

      relative
      overflow-hidden
      "
    >

      {/* BG GLOW */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
          absolute

          w-[500px]
          h-[500px]

          bg-cyan-500/10

          blur-[120px]

          top-0 left-0
          "
        />

        <div
          className="
          absolute

          w-[400px]
          h-[400px]

          bg-blue-500/10

          blur-[100px]

          bottom-0 right-0
          "
        />

      </div>

      <div
        className="
        relative

        max-w-6xl
        mx-auto

        px-6
        "
      >

        {/* HEADING */}
        <div
          className="
          text-center

          mb-24
          "
        >

          <p
            className="
            text-sm

            tracking-widest

            text-white/60

            mb-3
            "
          >
            PROJECT JOURNEY
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl

            font-semibold
            "
          >

            <span className="gradient-text">
              Infrastructure Milestones
            </span>

          </h2>

        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div
            className="
            hidden md:block

            absolute

            left-1/2 top-0

            -translate-x-1/2

            w-[2px]
            h-full

            bg-white/10
            "
          />

          {/* MOBILE LINE */}
          <div
            className="
            md:hidden

            absolute

            left-[8px]
            top-0

            w-[2px]
            h-full

            bg-white/10
            "
          />

          {/* ITEMS */}
          <div className="space-y-16 md:space-y-20">

            {timelineData.map((item, index) => {

              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}

                  className="
                  relative

                  flex md:items-center
                  justify-between
                  "
                >

                  {/* LEFT */}
                  {isLeft ? (

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -80,
                      }}

                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}

                      transition={{
                        duration: 0.6,
                      }}

                      viewport={{
                        once: true,
                      }}

                      className="
                      md:w-[45%]

                      ml-10 md:ml-0
                      "
                    >

                      <div
                        onClick={() =>
                          setActive(item)
                        }

                        className="
                        glass-strong
                        border-glow

                        rounded-2xl

                        p-6

                        cursor-pointer

                        hover:scale-[1.02]

                        transition-all duration-500
                        "
                      >

                        <h3
                          className="
                          text-2xl

                          font-semibold

                          mb-2
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                          text-cyan-400

                          font-medium

                          mb-4
                          "
                        >
                          {item.year}
                        </p>

                        <p className="text-white/70">
                          {item.desc}
                        </p>

                      </div>

                    </motion.div>

                  ) : (
                    <div className="hidden md:block w-[45%]" />
                  )}

                  {/* CENTER DOT */}
                  <div
                    className="
                    absolute

                    md:left-1/2
                    left-[8px]

                    top-6

                    md:-translate-x-1/2

                    w-5 h-5

                    rounded-full

                    bg-cyan-400

                    shadow-[0_0_20px_rgba(34,211,238,0.8)]
                    "
                  />

                  {/* RIGHT */}
                  {!isLeft ? (

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: 80,
                      }}

                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}

                      transition={{
                        duration: 0.6,
                      }}

                      viewport={{
                        once: true,
                      }}

                      className="
                      md:w-[45%]

                      ml-10 md:ml-0
                      "
                    >

                      <div
                        onClick={() =>
                          setActive(item)
                        }

                        className="
                        glass-strong
                        border-glow

                        rounded-2xl

                        p-6

                        cursor-pointer

                        hover:scale-[1.02]

                        transition-all duration-500
                        "
                      >

                        <h3
                          className="
                          text-2xl

                          font-semibold

                          mb-2
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                          text-cyan-400

                          font-medium

                          mb-4
                          "
                        >
                          {item.year}
                        </p>

                        <p className="text-white/70">
                          {item.desc}
                        </p>

                      </div>

                    </motion.div>

                  ) : (
                    <div className="hidden md:block w-[45%]" />
                  )}

                </div>
              );
            })}

          </div>

        </div>

      </div>

      {/* MODAL */}
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

            bg-black/70

            backdrop-blur-sm

            z-50

            flex items-center justify-center

            px-4
            "
          >

            <motion.div
              initial={{
                scale: 0.85,
                opacity: 0,
              }}

              animate={{
                scale: 1,
                opacity: 1,
              }}

              exit={{
                scale: 0.85,
                opacity: 0,
              }}

              className="
              glass-strong
              border-glow

              rounded-3xl

              max-w-5xl
              w-full

              overflow-hidden

              relative
              "
            >

              {/* CLOSE */}
              <button
                onClick={() =>
                  setActive(null)
                }

                className="
                absolute

                top-5 right-5

                z-20

                w-10 h-10

                rounded-full

                bg-white/10

                hover:bg-white/20

                transition
                "
              >
                ✕
              </button>

              <div
                className="
                grid md:grid-cols-2
                "
              >

                {/* IMAGE */}
                <div className="relative h-[300px] md:h-full">

                  <img
                    src={active.image}

                    alt={active.title}

                    className="
                    w-full h-full

                    object-cover
                    "
                  />

                </div>

                {/* CONTENT */}
                <div className="p-8 md:p-10">

                  <p
                    className="
                    text-cyan-400

                    font-semibold

                    mb-3
                    "
                  >
                    {active.year}
                  </p>

                  <h2
                    className="
                    text-3xl

                    font-bold

                    mb-5
                    "
                  >
                    {active.title}
                  </h2>

                  <p
                    className="
                    text-white/70

                    leading-relaxed
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
  );
}