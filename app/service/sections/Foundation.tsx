"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import { useEffect, useState } from "react";

import CountUp from "react-countup";

import {
  Building2,
  Hammer,
  ShieldCheck,
  Truck,
  Sparkles,
} from "lucide-react";

/* ======================================== */
/* AUTO IMAGE SLIDER */
/* ======================================== */

const images = [
  "/service/ServiceFd1.webp",
  "/service/Foundation1.webp",
  "/service/Foundation2.webp",
];

/* ======================================== */
/* SERVICES */
/* ======================================== */

const services = [
  {
    icon: <Hammer size={18} />,
    title: "Excavation Work",
    desc:
      "Precision excavation and ground preparation for transmission tower foundations.",

    image: "/service/Foundation3.webp",
  },

  {
    icon: <Building2 size={18} />,
    title: "Concrete Foundation",
    desc:
      "Heavy-duty reinforced concrete foundations ensuring long-term structural stability.",

    image: "/service/Foundation4.webp",
  },

  {
    icon: <Truck size={18} />,
    title: "Material Handling",
    desc:
      "Efficient logistics and material management using advanced construction practices.",

    image: "/service/Foundation5.webp",
  },

  {
    icon: <ShieldCheck size={18} />,
    title: "Quality Assurance",
    desc:
      "Strict adherence to safety, quality and engineering compliance standards.",

    image: "/service/Foundation6.webp",
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

  const [currentImage, setCurrentImage] =
    useState(0);

  /* ======================================== */
  /* AUTO IMAGE CHANGE */
  /* ======================================== */

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        prev === images.length - 1
          ? 0
          : prev + 1
      );

    }, 3500);

    return () =>
      clearInterval(interval);

  }, []);

  return (

    <section
      id="foundation"
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

        [background-image:linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)]
        dark:[background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

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
        {/* TOP SECTION */}
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
                src={images[currentImage]}
                alt="Foundation Work"
                fill
                className="
                object-cover

                transition-all duration-1000
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

                  <Building2 size={20} />

                </div>

                <div>

                  <h4
                    className="
                    text-base

                    font-bold
                    "
                  >
                    Heavy Foundation
                  </h4>

                  <p
                    className="
                    text-xs

                    text-gray-300
                    "
                  >
                    Structural Stability Execution
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
                FOUNDATION SERVICES
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
              Foundation Services
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

              Strong Base

              <span className="block text-cyan-400 mt-2">
                Infrastructure Foundations
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
              Kuddus Ali Construction provides advanced
              foundation solutions for transmission
              tower infrastructure projects with
              precision excavation, reinforced
              concrete execution and high structural
              reliability standards.
            </p>

            {/* ======================================== */}
            {/* PREMIUM HORIZONTAL SERVICE CARDS */}
            {/* ======================================== */}

            <div
              className="
              grid
              grid-cols-1
              sm:grid-cols-2

              gap-5
              "
            >

              {services.map((item, i) => (

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