"use client";

import { motion } from "framer-motion";

import CountUp from "react-countup";

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "Projects Executed",
  },

  {
    number: 15,
    suffix: "+",
    label: "States Covered",
  },

  {
    number: 765,
    suffix: "kV",
    label: "Transmission Expertise",
  },

  {
    number: 24,
    suffix: "/7",
    label: "Execution Capability",
  },
];

export default function ProjectStats() {

  return (
    <section
      className="
      section-premium

      py-24 md:py-28

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

        max-w-7xl
        mx-auto

        px-6
        "
      >

        {/* TOP */}
        <div
          className="
          text-center

          max-w-4xl
          mx-auto

          mb-16
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
            PROJECT ACHIEVEMENTS
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl

            font-semibold
            "
          >

            <span className="gradient-text">
              Infrastructure Execution At Scale
            </span>

          </h2>

        </div>

        {/* GRID */}
        <div
          className="
          grid

          sm:grid-cols-2
          lg:grid-cols-4

          gap-6
          "
        >

          {stats.map((item, i) => (

            <motion.div
              key={i}

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: i * 0.15,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -10,
                scale: 1.03,
              }}

              className="
              group

              relative
              overflow-hidden

              glass-strong
              border-glow

              rounded-3xl

              p-8
              "
            >

              {/* HOVER GLOW */}
              <div
                className="
                absolute inset-0

                opacity-0

                group-hover:opacity-100

                transition duration-500

                bg-gradient-to-r
                from-cyan-500/10
                to-blue-500/10
                "
              />

              <div className="relative z-10">

                {/* NUMBER */}
                <h3
                  className="
                  text-5xl

                  font-black

                  text-cyan-400

                  mb-3
                  "
                >

                  <CountUp
                    end={item.number}
                    duration={2.5}
                  />

                  {item.suffix}

                </h3>

                {/* LABEL */}
                <p
                  className="
                  text-white/70

                  text-lg
                  "
                >
                  {item.label}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}