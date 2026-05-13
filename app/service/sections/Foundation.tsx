"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import CountUp from "react-countup";

import {
  Building2,
  Hammer,
  ShieldCheck,
  Truck,
  Sparkles,
} from "lucide-react";

/* ======================================== */
/* PROCESS */
/* ======================================== */

const processes = [
  {
    icon: <Hammer size={28} />,
    title: "Excavation Work",
    desc:
      "Precision excavation and ground preparation for transmission tower foundations.",
  },

  {
    icon: <Building2 size={28} />,
    title: "Concrete Foundation",
    desc:
      "Heavy-duty reinforced concrete foundations ensuring long-term structural stability.",
  },

  {
    icon: <Truck size={28} />,
    title: "Material Handling",
    desc:
      "Efficient logistics and material management using advanced construction practices.",
  },

  {
    icon: <ShieldCheck size={28} />,
    title: "Quality Assurance",
    desc:
      "Strict adherence to safety, quality and engineering compliance standards.",
  },
];

/* ======================================== */
/* STATS */
/* ======================================== */

const stats = [
  {
    number: 1200,
    suffix: "+",
    label: "Tower Foundations",
  },

  {
    number: 24,
    suffix: "x7",
    label: "Execution Capability",
  },

  {
    number: 99,
    suffix: "%",
    label: "Structural Reliability",
  },
];

export default function Foundation() {

  return (

    <section
      id="foundation"
      className="
      relative

      overflow-hidden

      py-24 md:py-28

      bg-[#06111f]

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
        right-0

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
        left-0

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

          top-[18%]
          right-[12%]

          w-3 h-3

          rounded-full

          bg-cyan-400/40

          blur-sm
          "
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
          }}

          transition={{
            duration: 8,
            repeat: Infinity,
          }}

          className="
          absolute

          bottom-[15%]
          left-[10%]

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
          {/* LEFT CONTENT */}
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
                FOUNDATION EXECUTION
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
              Foundation Services
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

              Building Strong

              <span className="block text-cyan-400 mt-3">
                Structural Foundations
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
              Kuddus Ali Construction specializes in robust
              transmission tower foundation works
              designed to withstand diverse terrain
              and environmental conditions while
              ensuring maximum structural integrity
              and long-term reliability.
            </p>

            {/* ======================================== */}
            {/* PROCESS CARDS */}
            {/* ======================================== */}

            <div
              className="
              grid
              grid-cols-1
              sm:grid-cols-2

              gap-5
              "
            >

              {processes.map((item, i) => (

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
                    y: -8,
                    scale: 1.02,
                  }}

                  className="
                  group

                  relative

                  overflow-hidden

                  rounded-[30px]

                  border border-white/10

                  bg-white/[0.03]

                  backdrop-blur-2xl

                  p-7

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
                    relative z-10

                    text-xl

                    font-bold

                    mb-3
                    "
                  >
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p
                    className="
                    relative z-10

                    text-gray-400

                    leading-relaxed

                    text-sm
                    "
                  >
                    {item.desc}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* ======================================== */}
          {/* RIGHT IMAGE */}
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
                src="/placeholder.jpg"
                alt="Foundation Work"
                fill
                className="object-cover"
              />

              {/* OVERLAY */}
              <div
                className="
                absolute inset-0

                bg-gradient-to-t
                from-[#06111f]
                via-transparent
                to-transparent
                "
              />

            </div>

            {/* FLOAT CARD */}
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

              bottom-6
              left-4
              sm:left-[-20px]

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
                500k+
              </h3>

              <p
                className="
                text-gray-300

                leading-relaxed

                text-sm
                "
              >
                Cubic meters of concrete executed
                across multiple transmission
                infrastructure projects.
              </p>

            </motion.div>

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