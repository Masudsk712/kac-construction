"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import CountUp from "react-countup";

import {
  TowerControl,
  ShieldCheck,
  Wrench,
  RadioTower,
  Sparkles,
} from "lucide-react";

/* ======================================== */
/* STEPS */
/* ======================================== */

const erectionSteps = [
  {
    icon: <TowerControl size={28} />,
    title: "Tower Assembly",
    desc:
      "Complete tower member assembly with precision engineering and safety compliance.",
  },

  {
    icon: <Wrench size={28} />,
    title: "Structural Installation",
    desc:
      "Accurate erection and alignment of transmission tower structures.",
  },

  {
    icon: <RadioTower size={28} />,
    title: "Height Operations",
    desc:
      "Advanced high-altitude execution using modern erection methodologies.",
  },

  {
    icon: <ShieldCheck size={28} />,
    title: "Safety Assurance",
    desc:
      "Strict quality checks and zero-compromise safety implementation.",
  },
];

/* ======================================== */
/* STATS */
/* ======================================== */

const stats = [
  {
    number: 2500,
    suffix: "+",
    label: "Tower Erection Completed",
  },

  {
    number: 765,
    suffix: "kV",
    label: "High Voltage Capability",
  },

  {
    number: 15,
    suffix: "+",
    label: "States Executed",
  },
];

export default function Erection() {

  return (

    <section
      id="erection"
      className="
      relative

      overflow-hidden

      py-24 md:py-28

      bg-[#020617]

      text-white
      "
    >

      {/* ======================================== */}
      {/* GRID BG */}
      {/* ======================================== */}

      <div
        className="
        absolute inset-0

        opacity-[0.04]

        [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

        [background-size:60px_60px]
        "
      />

      {/* ======================================== */}
      {/* GLOW */}
      {/* ======================================== */}

      <div
        className="
        absolute

        top-0
        left-0

        w-[500px]
        h-[500px]

        bg-cyan-500/10

        blur-[140px]
        "
      />

      <div
        className="
        absolute

        bottom-0
        right-0

        w-[500px]
        h-[500px]

        bg-blue-500/10

        blur-[140px]
        "
      />

      {/* ======================================== */}
      {/* FLOATING PARTICLES */}
      {/* ======================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
          animate={{
            y: [0, -40, 0],
          }}

          transition={{
            duration: 6,
            repeat: Infinity,
          }}

          className="
          absolute

          top-[15%]
          left-[10%]

          w-3 h-3

          rounded-full

          bg-cyan-400/40

          blur-sm
          "
        />

        <motion.div
          animate={{
            y: [0, 35, 0],
          }}

          transition={{
            duration: 8,
            repeat: Infinity,
          }}

          className="
          absolute

          bottom-[18%]
          right-[12%]

          w-4 h-4

          rounded-full

          bg-blue-400/30

          blur-sm
          "
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ======================================== */}
        {/* MAIN GRID */}
        {/* ======================================== */}

        <div
          className="
          grid
          lg:grid-cols-2

          gap-16

          items-center
          "
        >

          {/* ======================================== */}
          {/* IMAGE SIDE */}
          {/* ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.9,
            }}

            className="relative"
          >

            {/* MAIN IMAGE */}
            <div
              className="
              relative

              h-[350px]
              sm:h-[500px]
              lg:h-[650px]

              rounded-[36px]

              overflow-hidden

              border border-white/10

              bg-white/[0.03]

              backdrop-blur-3xl
              "
            >

              <Image
                src="/service/ServiceERC1.webp"
                alt="Tower Erection"
                fill
                className="object-cover"
              />

              {/* OVERLAY */}
              <div
                className="
                absolute inset-0

                bg-gradient-to-t
                from-[#020617]
                via-transparent
                to-transparent
                "
              />

            </div>

            {/* FLOATING CARD */}
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                delay: 0.4,
              }}

              whileHover={{
                y: -6,
              }}

              className="
              absolute

              top-6
              right-4
              sm:right-[-20px]

              w-[220px]
              sm:w-[260px]

              rounded-[30px]

              border border-cyan-400/20

              bg-black/40

              backdrop-blur-3xl

              p-6

              shadow-[0_0_50px_rgba(34,211,238,0.18)]
              "
            >

              <h3
                className="
                text-4xl

                font-black

                text-cyan-400

                mb-3
                "
              >
                100%
              </h3>

              <p
                className="
                text-gray-300

                leading-relaxed

                text-sm
                "
              >
                Precision tower alignment and
                erection with advanced engineering
                standards.
              </p>

            </motion.div>

          </motion.div>

          {/* ======================================== */}
          {/* CONTENT SIDE */}
          {/* ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.9,
            }}
          >

            {/* BADGE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              className="
              inline-flex

              items-center
              gap-3

              px-5 py-2

              rounded-full

              border border-cyan-400/20

              bg-cyan-400/10

              backdrop-blur-xl

              mb-6
              "
            >

              <Sparkles
                size={14}
                className="text-cyan-300"
              />

              <span
                className="
                text-xs

                tracking-[4px]

                text-cyan-300
                "
              >
                TOWER ERECTION
              </span>

            </motion.div>

            {/* SUBTITLE */}
            <p
              className="
              uppercase

              tracking-[5px]

              text-cyan-400

              text-sm

              mb-5
              "
            >
              Tower Erection Services
            </p>

            {/* HEADING */}
            <h2
              className="
              text-4xl
              md:text-6xl

              font-black

              leading-[1]

              mb-8
              "
            >

              Precision Execution

              <span className="block text-cyan-400 mt-3">
                At Every Height
              </span>

            </h2>

            {/* DESC */}
            <p
              className="
              text-gray-300

              leading-[1.9]

              text-lg

              mb-12
              "
            >
              Kuddus Ali Construction delivers reliable
              and large-scale tower erection
              solutions with unmatched execution
              expertise, safety standards, and
              modern erection methodologies across
              complex terrains and high-voltage
              transmission projects.
            </p>

            {/* ======================================== */}
            {/* PROCESS CARDS */}
            {/* ======================================== */}

            <div className="space-y-5">

              {erectionSteps.map((item, i) => (

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

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    delay: i * 0.15,
                  }}

                  whileHover={{
                    x: 8,
                    scale: 1.01,
                  }}

                  className="
                  group

                  relative

                  overflow-hidden

                  flex gap-5

                  rounded-[30px]

                  border border-white/10

                  bg-white/[0.03]

                  backdrop-blur-2xl

                  p-6

                  hover:border-cyan-400/30

                  hover:bg-cyan-400/[0.04]

                  hover:shadow-[0_0_40px_rgba(34,211,238,0.10)]

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
                    from-cyan-500/5
                    via-transparent
                    to-blue-500/5
                    "
                  />

                  {/* ICON */}
                  <div
                    className="
                    relative z-10

                    min-w-[60px]
                    h-[60px]

                    rounded-2xl

                    bg-cyan-400/10

                    border border-cyan-400/20

                    flex items-center justify-center

                    text-cyan-300

                    group-hover:scale-110

                    transition
                    "
                  >

                    {item.icon}

                  </div>

                  {/* TEXT */}
                  <div className="relative z-10">

                    <h3
                      className="
                      text-xl

                      font-bold

                      mb-2
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                      text-gray-400

                      leading-relaxed
                      "
                    >
                      {item.desc}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

        {/* ======================================== */}
        {/* DIVIDER */}
        {/* ======================================== */}

        <div
          className="
          w-full h-px

          bg-gradient-to-r
          from-transparent
          via-cyan-400/20
          to-transparent

          my-20
          "
        />

        {/* ======================================== */}
        {/* STATS */}
        {/* ======================================== */}

        <div
          className="
          grid
          md:grid-cols-3

          gap-6
          "
        >

          {stats.map((item, i) => (

            <motion.div
              key={i}

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                delay: i * 0.15,
              }}

              whileHover={{
                y: -8,
                scale: 1.03,
              }}

              className="
              relative

              overflow-hidden

              text-center

              rounded-[32px]

              border border-cyan-400/10

              bg-white/[0.03]

              backdrop-blur-2xl

              py-12
              px-5

              hover:border-cyan-400/40

              transition-all duration-500
              "
            >

              {/* GLOW */}
              <div
                className="
                absolute
                -top-20
                -right-20

                w-40 h-40

                bg-cyan-400/10

                blur-3xl

                rounded-full
                "
              />

              <h3
                className="
                relative z-10

                text-5xl

                font-black

                text-cyan-400

                mb-3

                drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]
                "
              >

                <CountUp
                  end={item.number}
                  duration={2.5}
                />

                {item.suffix}

              </h3>

              <p
                className="
                relative z-10

                text-gray-300

                text-sm

                tracking-wide
                "
              >
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}