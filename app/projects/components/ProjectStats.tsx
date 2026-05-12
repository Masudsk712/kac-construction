"use client";

import { motion } from "framer-motion";

import CountUp from "react-countup";

import {
  FolderKanban,
  MapPinned,
  Zap,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "Projects Executed",
    icon: <FolderKanban size={26} />,
  },

  {
    number: 15,
    suffix: "+",
    label: "States Covered",
    icon: <MapPinned size={26} />,
  },

  {
    number: 765,
    suffix: "kV",
    label: "Transmission Expertise",
    icon: <Zap size={26} />,
  },

  {
    number: 24,
    suffix: "/7",
    label: "Execution Capability",
    icon: <ShieldCheck size={26} />,
  },
];

export default function ProjectStats() {

  return (

    <section
      className="
      relative

      py-28
      md:py-32

      overflow-hidden
    "
    >

      {/* ======================================== */}
      {/* BG */}
      {/* ======================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* LEFT GLOW */}
        <div
          className="
          absolute

          top-[-100px]
          left-[-120px]

          w-[650px]
          h-[650px]

          rounded-full

          bg-cyan-500/10

          blur-[170px]
        "
        />

        {/* RIGHT GLOW */}
        <div
          className="
          absolute

          bottom-[-120px]
          right-[-100px]

          w-[600px]
          h-[600px]

          rounded-full

          bg-blue-500/10

          blur-[160px]
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
        {/* TOP */}
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

          transition={{
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}

          className="
          text-center

          max-w-4xl
          mx-auto

          mb-20
        "
        >

          {/* SMALL TEXT */}
          <div
            className="
            inline-flex

            items-center
            gap-3

            px-5 py-2

            rounded-full

            border border-cyan-400/15

            bg-cyan-400/10

            backdrop-blur-2xl

            mb-8
          "
          >

            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

            <span
              className="
              text-xs

              tracking-[4px]

              text-cyan-200
            "
            >
              PROJECT ACHIEVEMENTS
            </span>

          </div>

          {/* HEADING */}
          <h2
            className="
            text-4xl
            md:text-6xl

            font-black

            leading-[1]

            tracking-[-2px]

            text-white
          "
          >

            Infrastructure

            <span
              className="
              block

              mt-4

              text-cyan-400

              drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]
            "
            >
              Execution At Scale
            </span>

          </h2>

          {/* DESC */}
          <p
            className="
            mt-8

            text-gray-300

            text-lg

            leading-[1.9]

            max-w-3xl

            mx-auto
          "
          >
            KAC Construction continues delivering
            high-performance transmission
            infrastructure projects across India
            with engineering precision, reliability
            and large-scale EPC execution expertise.
          </p>

        </motion.div>

        {/* ======================================== */}
        {/* GRID */}
        {/* ======================================== */}

        <div
          className="
          grid

          sm:grid-cols-2
          xl:grid-cols-4

          gap-7
        "
        >

          {stats.map((item, i) => (

            <motion.div
              key={i}

              initial={{
                opacity: 0,
                y: 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: i * 0.15,
                duration: 0.7,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -12,
                scale: 1.03,
              }}

              className="
              group

              relative

              overflow-hidden

              rounded-[34px]

              border border-white/10

              bg-white/[0.04]

              backdrop-blur-3xl

              p-8
            "
            >

              {/* BG GLOW */}
              <div
                className="
                absolute inset-0

                opacity-0

                group-hover:opacity-100

                transition duration-700

                bg-gradient-to-br
                from-cyan-500/10
                via-blue-500/5
                to-transparent
              "
              />

              {/* TOP LIGHT */}
              <div
                className="
                absolute

                top-0
                left-0

                h-px
                w-0

                bg-cyan-400/50

                group-hover:w-full

                transition-all duration-700
              "
              />

              {/* CONTENT */}
              <div className="relative z-10">

                {/* ICON */}
                <div
                  className="
                  w-16 h-16

                  rounded-2xl

                  border border-cyan-400/20

                  bg-cyan-400/10

                  flex items-center justify-center

                  text-cyan-300

                  mb-8

                  group-hover:scale-110
                  group-hover:rotate-3

                  transition-all duration-500
                "
                >
                  {item.icon}
                </div>

                {/* NUMBER */}
                <h3
                  className="
                  text-5xl
                  md:text-6xl

                  font-black

                  text-cyan-400

                  mb-4

                  tracking-[-2px]

                  drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]
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

                  leading-relaxed
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