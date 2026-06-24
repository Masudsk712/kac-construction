"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import {
  Zap,
  Cable,
  ShieldCheck,
  Activity,
  ArrowUpRight,
  GaugeCircle,
} from "lucide-react";

const features = [
  {
    icon: <Cable size={24} />,
    title: "HTLS Reconductoring",

    desc:
      "Advanced conductor replacement using modern high-temperature low-sag technologies.",
  },

  {
    icon: <Zap size={24} />,
    title: "Voltage Capacity Upgrade",

    desc:
      "Improving transmission efficiency and power carrying capacity across existing networks.",
  },

  {
    icon: <Activity size={24} />,
    title: "Minimal Shutdown",

    desc:
      "Efficient execution strategies minimizing operational downtime during reconductoring.",
  },

  {
    icon: <ShieldCheck size={24} />,
    title: "Operational Safety",

    desc:
      "Strict safety standards and engineering supervision during live infrastructure upgrades.",
  },
];

export default function ReconductoringProjects() {

  return (

    <section
      className="
      section-surface
      relative
      overflow-hidden

      py-24 md:py-32

      text-slate-900
      dark:text-white
    "
    >

      {/* ======================================== */}
      {/* BG GLOW */}
      {/* ======================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
          absolute

          top-0 left-0

          w-[550px]
          h-[550px]

          bg-cyan-500/10

          blur-[130px]
        "
        />

        <div
          className="
          absolute

          bottom-0 right-0

          w-[420px]
          h-[420px]

          bg-blue-500/10

          blur-[110px]
        "
        />

      </div>

      {/* GRID EFFECT */}
      <div
        className="
        absolute inset-0

        opacity-[0.03]

        [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

        [background-size:60px_60px]
      "
      />

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

        <div
          className="
          text-center

          max-w-4xl
          mx-auto

          mb-20
        "
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

            mb-6
          "
          >

            <Zap
              size={14}
              className="text-cyan-300"
            />

            <span
              className="
              text-[10px]

              tracking-[4px]

              text-cyan-200
            "
            >
              HTLS RECONDUCTORING
            </span>

          </div>

          {/* TITLE */}
          <h2
            className="
            text-4xl
            md:text-5xl
            xl:text-6xl

            font-black

            leading-[1.1]

            mb-8
          "
          >

            Upgrading Transmission

            <span className="gradient-text block mt-3">
              Infrastructure Networks
            </span>

          </h2>

          {/* DESC */}
          <p
            className="
            text-white/65

            text-base
            md:text-lg

            leading-[2]

            max-w-3xl

            mx-auto
          "
          >

            Kuddus Ali Construction delivers
            high-performance HTLS
            reconductoring solutions
            designed to enhance power
            transmission capability,
            operational reliability and
            long-term infrastructure
            efficiency across India.

          </p>

        </div>

        {/* ======================================== */}
        {/* MAIN GRID */}
        {/* ======================================== */}

        <div
          className="
          grid

          lg:grid-cols-[1fr_1fr]

          gap-14 lg:gap-20

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

            transition={{
              duration: 0.7,
            }}

            viewport={{
              once: true,
            }}

            className="relative"
          >

            {/* MAIN IMAGE */}
            <div
              className="
              relative

              h-[420px]
              md:h-[650px]

              overflow-hidden

              rounded-[34px]

              border border-white/10

              bg-white/[0.03]

              backdrop-blur-3xl
            "
            >

              <Image
                src="kacgroups/projects/Project19.webp"
                alt="Reconductoring"

                fill

                className="
                object-cover

                hover:scale-110

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

            </div>

            {/* FLOATING CARD */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}

              transition={{
                duration: 4,
                repeat: Infinity,
              }}

              className="
              absolute

              bottom-6
              left-6

              max-w-[290px]

              rounded-[28px]

              border border-cyan-400/20

              bg-black/50

              backdrop-blur-3xl

              p-6

              shadow-[0_0_40px_rgba(34,211,238,0.15)]
            "
            >

              <div className="flex items-center gap-4 mb-4">

                <div
                  className="
                  w-14 h-14

                  rounded-2xl

                  bg-cyan-400/10

                  border border-cyan-400/20

                  flex items-center justify-center

                  text-cyan-300
                "
                >

                  <GaugeCircle size={24} />

                </div>

                <div>

                  <h3
                    className="
                    text-3xl

                    font-black

                    text-cyan-400
                  "
                  >
                    HTLS
                  </h3>

                  <p className="text-white/60 text-sm">
                    Future Ready Upgrade
                  </p>

                </div>

              </div>

              <p
                className="
                text-sm

                leading-[1.8]

                text-white/70
              "
              >
                Advanced reconductoring
                technologies enhancing
                transmission efficiency,
                power capacity and network
                reliability.
              </p>

            </motion.div>

          </motion.div>

          {/* ======================================== */}
          {/* FEATURES */}
          {/* ======================================== */}

          <div
            className="
            grid

            sm:grid-cols-2

            gap-6
          "
          >

            {features.map((item, index) => (

              <motion.div
                key={index}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: index * 0.15,
                }}

                viewport={{
                  once: true,
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

                bg-white/[0.03]

                backdrop-blur-2xl

                p-7
              "
              >

                {/* HOVER GLOW */}
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

                <div className="relative z-10">

                  {/* ICON */}
                  <div
                    className="
                    w-14 h-14

                    rounded-2xl

                    bg-cyan-400/10

                    border border-cyan-400/20

                    flex items-center justify-center

                    text-cyan-300

                    mb-6

                    group-hover:scale-110

                    transition
                  "
                  >
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                    text-xl

                    font-bold

                    leading-snug

                    mb-4

                    group-hover:text-cyan-300

                    transition
                  "
                  >
                    {item.title}
                  </h3>

                  {/* TEXT */}
                  <p
                    className="
                    text-white/65

                    text-sm

                    leading-[1.9]
                  "
                  >
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* ======================================== */}
        {/* BOTTOM CTA */}
        {/* ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.2,
          }}

          viewport={{
            once: true,
          }}

          className="
          flex justify-center

          mt-16
        "
        >

          <button
            className="
            inline-flex

            items-center
            gap-3

            px-8 py-4

            rounded-full

            bg-gradient-to-r
            from-cyan-400
            to-blue-500

            text-black
            font-semibold

            hover:scale-105

            hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]

            transition-all duration-500
          "
          >

            Explore HTLS Projects

            <ArrowUpRight size={18} />

          </button>

        </motion.div>

      </div>

    </section>
  );
}