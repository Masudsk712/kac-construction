"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import {
  Cable,
  Zap,
  ShieldCheck,
  RadioTower,
} from "lucide-react";

const features = [
  {
    icon: <Cable size={24} />,
    title: "Conductor Pulling",
  },

  {
    icon: <RadioTower size={24} />,
    title: "Transmission Alignment",
  },

  {
    icon: <Zap size={24} />,
    title: "Ultra High Voltage",
  },

  {
    icon: <ShieldCheck size={24} />,
    title: "Safety Compliance",
  },
];

export default function StringingProjects() {

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

          top-0 right-0

          w-[500px]
          h-[500px]

          bg-cyan-500/10

          blur-[120px]
          "
        />

        <div
          className="
          absolute

          bottom-0 left-0

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

        grid md:grid-cols-2

        gap-14

        items-center
        "
      >

        {/* CONTENT */}
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
        >

          {/* LABEL */}
          <p
            className="
            uppercase

            tracking-[5px]

            text-cyan-400

            text-sm

            mb-5
            "
          >
            STRINGING PROJECTS
          </p>

          {/* TITLE */}
          <h2
            className="
            text-4xl
            md:text-5xl

            font-semibold

            leading-tight

            mb-8
            "
          >

            Reliable Power
            Transmission

            <span className="block text-cyan-400">
              Through Advanced Stringing
            </span>

          </h2>

          {/* TEXT */}
          <p
            className="
            text-white/70

            text-lg

            leading-relaxed

            mb-10
            "
          >

            KAC Construction delivers
            high-performance transmission
            stringing execution using
            advanced machinery, precision
            engineering and experienced
            teams ensuring reliable power
            infrastructure delivery across
            India.

          </p>

          {/* FEATURES */}
          <div
            className="
            grid

            sm:grid-cols-2

            gap-5
            "
          >

            {features.map((item, index) => (

              <motion.div
                key={index}

                whileHover={{
                  y: -6,
                }}

                className="
                group

                glass-strong
                border-glow

                rounded-2xl

                p-5

                flex items-center
                gap-4
                "
              >

                {/* ICON */}
                <div
                  className="
                  min-w-[52px]
                  h-[52px]

                  rounded-2xl

                  bg-cyan-400/10

                  border border-cyan-400/20

                  flex items-center justify-center

                  text-cyan-400

                  group-hover:scale-110

                  transition
                  "
                >
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3
                  className="
                  text-lg

                  font-medium
                  "
                >
                  {item.title}
                </h3>

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* IMAGE */}
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
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}

          className="
          relative

          order-first md:order-last
          "
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
              alt="Stringing Projects"

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

            bottom-5 right-5

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
              5000+ KM
            </h3>

            <p className="text-white/70 text-sm">
              Transmission line stringing
              completed across ultra
              high-voltage infrastructure
              projects.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}