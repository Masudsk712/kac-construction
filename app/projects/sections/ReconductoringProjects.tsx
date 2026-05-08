"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import {
  Zap,
  Cable,
  ShieldCheck,
  Activity,
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

          top-0 left-0

          w-[500px]
          h-[500px]

          bg-cyan-500/10

          blur-[120px]
          "
        />

        <div
          className="
          absolute

          bottom-0 right-0

          w-[400px]
          h-[400px]

          bg-blue-500/10

          blur-[100px]
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

          mb-20
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
            RECONDUCTORING PROJECTS
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl

            font-semibold

            leading-tight

            mb-8
            "
          >

            <span className="gradient-text">
              Upgrading Transmission Infrastructure
            </span>

          </h2>

          <p
            className="
            text-white/70

            text-lg

            leading-relaxed
            "
          >

            KAC Construction delivers
            high-performance HTLS
            reconductoring solutions
            designed to enhance power
            transmission capability,
            operational reliability and
            long-term infrastructure
            efficiency.

          </p>

        </div>

        {/* GRID */}
        <div
          className="
          grid

          lg:grid-cols-2

          gap-14

          items-center
          "
        >

          {/* IMAGE */}
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

            {/* IMAGE BOX */}
            <div
              className="
              relative

              h-[420px]
              md:h-[620px]

              rounded-3xl

              overflow-hidden

              border-glow
              "
            >

              <Image
                src="/placeholder.jpg"
                alt="Reconductoring"

                fill

                className="
                object-cover

                transition-transform duration-700

                hover:scale-110
                "
              />

              {/* OVERLAY */}
              <div
                className="
                absolute inset-0

                bg-gradient-to-t
                from-black/70
                via-transparent
                to-transparent
                "
              />

            </div>

            {/* FLOATING CARD */}
            <div
              className="
              absolute

              bottom-5 left-5

              glass-strong
              border-glow

              rounded-2xl

              p-5

              max-w-[260px]
              "
            >

              <h3
                className="
                text-3xl

                font-bold

                text-cyan-400

                mb-2
                "
              >
                HTLS
              </h3>

              <p className="text-white/70 text-sm">
                Advanced high-capacity
                reconductoring technologies
                for future-ready transmission
                infrastructure.
              </p>

            </div>

          </motion.div>

          {/* CARDS */}
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
                }}

                className="
                group

                glass-strong
                border-glow

                rounded-3xl

                p-7
                "
              >

                {/* ICON */}
                <div
                  className="
                  w-14 h-14

                  rounded-2xl

                  bg-cyan-400/10

                  border border-cyan-400/20

                  flex items-center justify-center

                  text-cyan-400

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

                  font-semibold

                  mb-4
                  "
                >
                  {item.title}
                </h3>

                {/* TEXT */}
                <p
                  className="
                  text-white/70

                  leading-relaxed
                  "
                >
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}