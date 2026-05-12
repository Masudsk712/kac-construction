"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import {
  Building2,
  Hammer,
  ShieldCheck,
  Truck,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: <Hammer size={24} />,
    title: "Excavation Work",
    desc:
      "Precision excavation and site preparation for transmission tower foundations.",
  },

  {
    icon: <Building2 size={24} />,
    title: "Concrete Foundation",
    desc:
      "High-strength reinforced concrete foundation execution with quality assurance.",
  },

  {
    icon: <Truck size={24} />,
    title: "Material Logistics",
    desc:
      "Efficient transportation and handling of construction materials and equipment.",
  },

  {
    icon: <ShieldCheck size={24} />,
    title: "Safety Compliance",
    desc:
      "Strict safety standards and operational compliance across all project sites.",
  },
];

export default function FoundationProjects() {

  return (

    <section
      className="
      relative
      overflow-hidden

      py-24 md:py-32
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

      <div
        className="
        relative z-10

        max-w-7xl
        mx-auto

        px-6

        grid
        lg:grid-cols-[0.95fr_1.05fr]

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

          {/* MAIN IMAGE CARD */}
          <div
            className="
            relative

            h-[420px]
            md:h-[620px]

            overflow-hidden

            rounded-[34px]

            border border-white/10

            bg-white/[0.03]

            backdrop-blur-3xl
          "
          >

            <Image
              src="/placeholder.jpg"
              alt="Foundation Project"

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

            {/* GRID EFFECT */}
            <div
              className="
              absolute inset-0

              opacity-[0.04]

              [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

              [background-size:50px_50px]
            "
            />

          </div>

          {/* FLOAT CARD */}
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

            max-w-[280px]

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

                <BadgeCheck size={24} />

              </div>

              <div>

                <h3
                  className="
                  text-3xl

                  font-black

                  text-cyan-400
                "
                >
                  1200+
                </h3>

                <p className="text-white/60 text-sm">
                  Foundations Completed
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
              Transmission tower foundation
              execution across multiple
              infrastructure and EPC projects
              throughout India.
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

          transition={{
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}
        >

          {/* LABEL */}
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

            <Building2
              size={15}
              className="text-cyan-300"
            />

            <span
              className="
              text-[10px]

              tracking-[4px]

              text-cyan-200
            "
            >
              FOUNDATION PROJECTS
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

            Building Strong

            <span className="gradient-text block mt-3">
              Infrastructure Foundations
            </span>

          </h2>

          {/* TEXT */}
          <p
            className="
            text-white/65

            text-base
            md:text-lg

            leading-[2]

            mb-12

            max-w-2xl
          "
          >

            KAC Construction delivers
            high-performance transmission
            tower foundation projects
            engineered for structural
            durability, operational safety
            and long-term infrastructure
            reliability across India.

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
                  y: -8,
                  scale: 1.02,
                }}

                transition={{
                  duration: 0.3,
                }}

                className="
                group

                relative

                overflow-hidden

                rounded-[26px]

                border border-white/10

                bg-white/[0.03]

                backdrop-blur-2xl

                p-5
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

                    mb-5

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
                    text-sm

                    leading-[1.8]

                    text-white/60
                  "
                  >
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

          {/* CTA */}
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
              delay: 0.3,
            }}

            viewport={{
              once: true,
            }}

            className="mt-12"
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

              Explore Foundation Work

              <ArrowUpRight size={18} />

            </button>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}