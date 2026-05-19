"use client";

import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import Image from "next/image";

import CountUp from "react-countup";

import {
  Zap,
  RadioTower,
  ArrowUpRight,
  X,
  MapPin,
  Activity,
  CalendarDays,
} from "lucide-react";

const projects = [
  {
    title: "765kV Transmission Corridor",

    location: "West Bengal",

    year: "2025",

    category: "Ultra High Voltage",

    image: "/projects/Project11.webp",

    desc:
      "Large-scale ultra high-voltage transmission infrastructure executed with engineering precision and operational excellence.",

    details:
      "Kuddus Ali Construction successfully executed large-scale 765kV transmission corridor infrastructure with advanced engineering planning, tower erection, conductor stringing and operational safety compliance across challenging project environments.",
  },

  {
    title: "Power Grid Expansion",

    location: "Odisha",

    year: "2024",

    category: "EPC Infrastructure",

    image: "/projects/Project20.webp",

    desc:
      "Advanced EPC transmission projects supporting India's rapidly growing energy infrastructure network.",

    details:
      "Comprehensive EPC transmission infrastructure projects supporting rapid energy expansion with reliable execution, project coordination and advanced power transmission capabilities.",
  },
];

const stats = [
  {
    number: 500,

    suffix: "+",

    label: "Projects Delivered",
  },

  {
    number: 15,

    suffix: "+",

    label: "States Covered",
  },

  {
    number: 765,

    suffix: "kV",

    label: "Voltage Expertise",
  },
];

export default function TransmissionProjects() {

  const [selected, setSelected] =
    useState<any>(null);

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
      {/* BG */}
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

      {/* GRID */}
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

          mb-24
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
              TRANSMISSION INFRASTRUCTURE
            </span>

          </div>

          {/* TITLE */}
          <h2
            className="
            text-4xl
            md:text-6xl

            font-black

            leading-[1.1]

            mb-8
          "
          >

            Delivering India's

            <span className="gradient-text block mt-3">
              Energy Backbone
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

            Kuddus Ali Construction continues
            to deliver large-scale
            transmission infrastructure
            projects supporting India's
            growing energy demands with
            engineering excellence,
            operational precision and
            reliable execution.

          </p>

        </div>

        {/* ======================================== */}
        {/* PROJECT GRID */}
        {/* ======================================== */}

        <div
          className="
          grid

          lg:grid-cols-2

          gap-10

          mb-24
        "
        >

          {projects.map((item, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: index * 0.2,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -10,
              }}

              onClick={() =>
                setSelected(item)
              }

              className="
              group

              relative

              overflow-hidden

              rounded-[32px]

              border border-white/10

              bg-white/[0.04]

              backdrop-blur-3xl

              cursor-pointer

              hover:border-cyan-400/20

              transition-all duration-500
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

              {/* IMAGE */}
              <div
                className="
                relative

                h-[340px]
                md:h-[480px]

                overflow-hidden
              "
              >

                <Image
                  src={item.image}
                  alt={item.title}

                  fill

                  className="
                  object-cover

                  transition-transform duration-700

                  group-hover:scale-110
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

                {/* ICON */}
                <div
                  className="
                  absolute

                  top-5 left-5

                  w-14 h-14

                  rounded-2xl

                  bg-cyan-400/10

                  border border-cyan-400/20

                  backdrop-blur-xl

                  flex items-center justify-center

                  text-cyan-300
                "
                >

                  <RadioTower size={26} />

                </div>

                {/* CATEGORY */}
                <div
                  className="
                  absolute

                  top-5 right-5

                  px-4 py-2

                  rounded-full

                  bg-black/50

                  border border-white/10

                  backdrop-blur-xl

                  text-white/80

                  text-xs
                "
                >
                  {item.category}
                </div>

              </div>

              {/* CONTENT */}
              <div className="relative z-10 p-7">

                {/* LOCATION */}
                <div
                  className="
                  flex items-center
                  gap-2

                  text-cyan-400

                  text-sm

                  mb-4
                "
                >

                  <MapPin size={15} />

                  {item.location}

                </div>

                {/* TITLE */}
                <h3
                  className="
                  text-2xl

                  font-black

                  mb-4

                  group-hover:text-cyan-300

                  transition
                "
                >
                  {item.title}
                </h3>

                {/* DESC */}
                <p
                  className="
                  text-white/65

                  leading-[1.9]

                  text-sm

                  mb-7
                "
                >
                  {item.desc}
                </p>

                {/* FOOTER */}
                <div
                  className="
                  flex items-center
                  justify-between
                "
                >

                  <span
                    className="
                    text-[10px]

                    tracking-[4px]

                    text-white/30
                  "
                  >
                    VIEW PROJECT
                  </span>

                  <ArrowUpRight
                    size={20}

                    className="
                    text-white/40

                    group-hover:text-cyan-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1

                    transition-all duration-500
                  "
                  />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* ======================================== */}
        {/* STATS */}
        {/* ======================================== */}

        <div
          className="
          grid

          md:grid-cols-3

          gap-8
        "
        >

          {stats.map((item, index) => (

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

              text-center

              rounded-[30px]

              border border-white/10

              bg-white/[0.04]

              backdrop-blur-3xl

              py-12
              px-6
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

                  mx-auto

                  mb-6
                "
                >

                  <Activity size={24} />

                </div>

                {/* NUMBER */}
                <h3
                  className="
                  text-5xl

                  font-black

                  text-cyan-400

                  mb-4
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
                  text-white/65

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

      {/* ======================================== */}
      {/* MODAL */}
      {/* ======================================== */}

      <AnimatePresence>

        {selected && (

          <motion.div
            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            onClick={() =>
              setSelected(null)
            }

            className="
            fixed inset-0

            z-[9999]

            bg-black/85

            backdrop-blur-xl

            flex items-center justify-center

            px-4
            py-6

            overflow-y-auto
          "
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}

              transition={{
                duration: 0.3,
              }}

              onClick={(e) =>
                e.stopPropagation()
              }

              className="
              relative

              overflow-hidden

              w-full
              max-w-[820px]

              rounded-[28px]

              border border-white/10

              bg-[#08101f]/95

              backdrop-blur-3xl

              mt-[120px]
              mb-10
            "
            >

              {/* CLOSE */}
              <button
                onClick={() =>
                  setSelected(null)
                }

                className="
                absolute

                top-4
                right-4

                z-30

                w-10 h-10

                rounded-full

                border border-white/10

                bg-black/70

                flex items-center justify-center

                text-white

                hover:bg-cyan-400
                hover:text-black

                transition-all duration-300
              "
              >

                <X size={18} />

              </button>

              <div
                className="
                grid
                md:grid-cols-[1.1fr_0.9fr]

                items-stretch
              "
              >

                {/* IMAGE */}
                <div
                  className="
                  relative

                  h-[240px]
                  md:h-[430px]
                "
                >

                  <Image
                    src={selected.image}
                    alt={selected.title}

                    fill

                    className="object-cover"
                  />

                  <div
                    className="
                    absolute inset-0

                    bg-gradient-to-r
                    from-transparent
                    to-[#020617]/30
                  "
                  />

                </div>

                {/* CONTENT */}
                <div
                  className="
                  p-6
                  md:p-8

                  flex
                  flex-col
                  justify-center
                "
                >

                  {/* CATEGORY */}
                  <div
                    className="
                    flex items-center
                    justify-between

                    gap-4

                    mb-5
                  "
                  >

                    <div
                      className="
                      inline-flex

                      items-center
                      gap-2

                      px-3 py-2

                      rounded-full

                      bg-cyan-400/10

                      border border-cyan-400/20

                      text-cyan-300

                      text-xs
                    "
                    >

                      <RadioTower size={13} />

                      {selected.category}

                    </div>

                    <div
                      className="
                      inline-flex

                      items-center
                      gap-2

                      text-white/50

                      text-sm
                    "
                    >

                      <CalendarDays size={14} />

                      {selected.year}

                    </div>

                  </div>

                  {/* TITLE */}
                  <h2
                    className="
                    text-3xl

                    font-black

                    leading-tight

                    mb-5
                  "
                  >
                    {selected.title}
                  </h2>

                  {/* LOCATION */}
                  <div
                    className="
                    flex items-center
                    gap-2

                    text-cyan-400

                    text-sm

                    mb-5
                  "
                  >

                    <MapPin size={15} />

                    {selected.location}

                  </div>

                  {/* DETAILS */}
                  <p
                    className="
                    text-white/70

                    leading-[1.9]

                    text-sm
                    md:text-base
                  "
                  >
                    {selected.details}
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}