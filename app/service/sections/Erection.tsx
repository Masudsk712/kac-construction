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
/* SERVICES */
/* ======================================== */

const erectionSteps = [
  {
    icon: <TowerControl size={18} />,
    title: "Tower Assembly",
    desc:
      "Complete tower member assembly with precision engineering and safety compliance.",

    image: "kacgroups/service/Erection3.webp",
  },

  {
    icon: <Wrench size={18} />,
    title: "Structural Installation",
    desc:
      "Accurate erection and alignment of transmission tower structures.",

    image: "kacgroups/service/Erection1.webp",
  },

  {
    icon: <RadioTower size={18} />,
    title: "Height Operations",
    desc:
      "Advanced high-altitude execution using modern erection methodologies.",

    image: "kacgroups/service/Erection2.webp",
  },

  {
    icon: <ShieldCheck size={18} />,
    title: "Safety Assurance",
    desc:
      "Strict quality checks and zero-compromise safety implementation.",

    image: "kacgroups/service/ServiceERC1.webp",
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

      py-20 md:py-24

      section-surface
      bg-[var(--bg-soft)]
      dark:bg-[#020617]

      text-slate-900
      dark:text-white
      "
    >

      {/* ======================================== */}
      {/* GRID BACKGROUND */}
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
      {/* BACKGROUND GLOW */}
      {/* ======================================== */}

      <div
        className="
        absolute

        top-0
        left-0

        w-[500px]
        h-[500px]

        bg-cyan-500/10

        blur-[150px]
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

        blur-[150px]
        "
      />

      {/* ======================================== */}
      {/* CONTENT */}
      {/* ======================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ======================================== */}
        {/* MAIN GRID */}
        {/* ======================================== */}

        <div
          className="
          grid
          lg:grid-cols-[1.05fr_0.95fr]

          gap-14

          items-center
          "
        >

          {/* ======================================== */}
          {/* LEFT IMAGE */}
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

            {/* IMAGE CONTAINER */}

            <div
              className="
              relative

              h-[320px]
              md:h-[540px]

              overflow-hidden

              rounded-[40px]

              border border-white/10

              bg-white/[0.03]

              shadow-[0_0_60px_rgba(0,255,255,0.08)]
              "
            >

              <Image
                src="kacgroups/service/ServiceERC1.webp"
                alt="Tower Erection"
                fill
                className="
                object-cover
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

            </div>

            {/* FLOATING CARD */}

            <motion.div
              whileHover={{
                y: -4,
              }}

              className="
              absolute

              bottom-6
              right-6

              rounded-3xl

              border border-cyan-400/20

              bg-black/55

              backdrop-blur-3xl

              px-5 py-4

              shadow-[0_0_35px_rgba(34,211,238,0.18)]
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                  w-12 h-12

                  rounded-2xl

                  bg-cyan-400/10

                  border border-cyan-400/20

                  flex items-center justify-center

                  text-cyan-300
                  "
                >

                  <TowerControl size={20} />

                </div>

                <div>

                  <h4
                    className="
                    text-base

                    font-bold
                    "
                  >
                    Tower Erection
                  </h4>

                  <p
                    className="
                    text-xs

                    text-gray-300
                    "
                  >
                    High Precision Execution
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

          {/* ======================================== */}
          {/* RIGHT CONTENT */}
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

            <div
              className="
              inline-flex

              items-center
              gap-3

              px-5 py-2

              rounded-full

              border border-cyan-400/20

              bg-cyan-400/10

              backdrop-blur-xl

              mb-5
              "
            >

              <Sparkles
                size={12}
                className="text-cyan-300"
              />

              <span
                className="
                text-[10px]

                tracking-[4px]

                text-cyan-300
                "
              >
                TOWER ERECTION
              </span>

            </div>

            {/* SMALL LABEL */}

            <p
              className="
              uppercase

              tracking-[5px]

              text-cyan-400

              text-xs

              mb-4
              "
            >
              Erection Services
            </p>

            {/* HEADING */}

            <h2
              className="
              text-4xl
              md:text-6xl

              font-black

              leading-[0.95]

              mb-7
              "
            >

              Precision Execution

              <span className="block text-cyan-400 mt-2">
                At Every Height
              </span>

            </h2>

            {/* DESCRIPTION */}

            <p
              className="
              text-gray-300

              leading-[1.9]

              text-base md:text-lg

              mb-10
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
            {/* PREMIUM SERVICE CARDS */}
            {/* ======================================== */}

            <div
              className="
              grid
              grid-cols-1
              sm:grid-cols-2

              gap-5
              "
            >

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
                    delay: i * 0.12,
                  }}

                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}

                  className="
                  group

                  relative

                  overflow-hidden

                  rounded-[28px]

                  border border-white/10

                  bg-gradient-to-br
                  from-white/[0.05]
                  to-white/[0.02]

                  backdrop-blur-2xl

                  hover:border-cyan-400/40

                  hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]

                  transition-all duration-500
                  "
                >

                  {/* TOP IMAGE */}

                  <div
                    className="
                    relative

                    h-[120px]

                    overflow-hidden
                    "
                  >

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="
                      object-cover

                      group-hover:scale-105

                      transition duration-700
                      "
                    />

                    {/* IMAGE OVERLAY */}

                    <div
                      className="
                      absolute inset-0

                      bg-gradient-to-t
                      from-[#020617]
                      via-[#020617]/40
                      to-transparent
                      "
                    />

                  </div>

                  {/* CONTENT */}

                  <div className="p-5">

                    {/* ICON */}

                    <div
                      className="
                      w-12 h-12

                      rounded-2xl

                      bg-cyan-400/10

                      border border-cyan-400/20

                      flex items-center justify-center

                      text-cyan-300

                      mb-4
                      "
                    >

                      {item.icon}

                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                      text-lg

                      font-bold

                      mb-3
                      "
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                      text-gray-400

                      text-sm

                      leading-[1.8]
                      "
                    >
                      {item.desc}
                    </p>

                  </div>

                  {/* HOVER GLOW */}

                  <div
                    className="
                    absolute

                    inset-0

                    opacity-0

                    group-hover:opacity-100

                    transition duration-500

                    bg-cyan-400/[0.03]

                    pointer-events-none
                    "
                  />

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
                delay: i * 0.2,
              }}

              whileHover={{
                y: -8,
                scale: 1.02,
              }}

              className="
              relative

              overflow-hidden

              text-center

              rounded-[32px]

              border border-cyan-400/10

              bg-gradient-to-br
              from-white/[0.04]
              to-white/[0.02]

              backdrop-blur-xl

              py-12 px-5

              hover:border-cyan-400/40

              hover:shadow-[0_0_40px_rgba(34,211,238,0.10)]

              transition-all duration-500
              "
            >

              {/* GLOW */}

              <div
                className="
                absolute inset-0

                opacity-0

                hover:opacity-100

                transition duration-500

                bg-cyan-400/5

                blur-3xl
                "
              />

              {/* NUMBER */}

              <h3
                className="
                relative z-10

                text-5xl

                font-black

                text-cyan-400

                mb-3

                drop-shadow-[0_0_20px_rgba(34,211,238,0.45)]
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