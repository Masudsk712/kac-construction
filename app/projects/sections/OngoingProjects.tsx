"use client";

import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import Image from "next/image";

import {
  ArrowUpRight,
  RadioTower,
  MapPin,
  CalendarDays,
  X,
  Building2,
} from "lucide-react";

const projects = [
  {
    title: "765kV Transmission Line",

    location: "West Bengal",

    year: "2025",

    category: "Transmission",

    image: "/placeholder.jpg",

    desc:
      "Ultra high-voltage transmission infrastructure project executed with precision engineering and EPC excellence.",

    details:
      "Kuddus Ali Construction is actively executing ultra high-voltage transmission infrastructure including foundation, erection, stringing and EPC operations with advanced engineering and strict safety compliance.",
  },

  {
    title: "Tower Foundation Project",

    location: "Assam",

    year: "2024",

    category: "Foundation",

    image: "/placeholder.jpg",

    desc:
      "Large-scale transmission tower foundation execution across challenging terrain and remote regions.",

    details:
      "Large-scale transmission foundation work is currently under execution across difficult terrain conditions with specialized manpower, modern equipment and optimized project coordination.",
  },
];

export default function OngoingProjects() {

  const [selected, setSelected] =
    useState<any>(null);

  return (

    <section
      className="
      relative
      overflow-hidden

      py-24 md:py-28
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

          {/* BADGE */}
          <div
            className="
            inline-flex

            items-center
            gap-3

            px-5 py-2

            rounded-full

            border border-white/10

            bg-white/[0.03]

            backdrop-blur-xl

            mb-6
          "
          >

            <RadioTower
              size={14}
              className="text-cyan-400"
            />

            <span
              className="
              text-[10px]

              tracking-[4px]

              text-white/70
            "
            >
              ONGOING PROJECTS
            </span>

          </div>

          <h2
            className="
            text-3xl
            md:text-5xl

            font-black

            leading-tight
          "
          >

            Active Infrastructure

            <span className="gradient-text block mt-3">
              Execution Across India
            </span>

          </h2>

          <p
            className="
            text-white/55

            leading-[1.9]

            text-sm
            md:text-base

            max-w-2xl

            mx-auto

            mt-6
          "
          >
            Ongoing EPC infrastructure,
            transmission, erection and
            foundation projects executed
            with engineering precision,
            operational efficiency and
            advanced project planning.
          </p>

        </div>

        {/* GRID */}
        <div
          className="
          grid

          md:grid-cols-2

          gap-8
        "
        >

          {projects.map((item, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 50,
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
                y: -10,
              }}

              onClick={() =>
                setSelected(item)
              }

              className="
              group

              relative

              overflow-hidden

              rounded-[30px]

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

                h-[280px]
                md:h-[320px]

                overflow-hidden
              "
              >

                <Image
                  src={item.image}
                  alt={item.title}

                  fill

                  className="
                  object-cover

                  group-hover:scale-110

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

                {/* STATUS */}
                <div
                  className="
                  absolute

                  top-5 left-5

                  inline-flex

                  items-center
                  gap-2

                  px-4 py-2

                  rounded-full

                  bg-cyan-400/10

                  border border-cyan-400/20

                  backdrop-blur-xl

                  text-cyan-300

                  text-sm
                "
                >

                  <RadioTower size={15} />

                  Ongoing

                </div>

                {/* YEAR */}
                <div
                  className="
                  absolute

                  top-5 right-5

                  inline-flex

                  items-center
                  gap-2

                  px-3 py-2

                  rounded-full

                  bg-black/50

                  border border-white/10

                  backdrop-blur-xl

                  text-white/80

                  text-xs
                "
                >

                  <CalendarDays size={13} />

                  {item.year}

                </div>

              </div>

              {/* CONTENT */}
              <div className="relative z-10 p-7">

                {/* LOCATION */}
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
                    flex items-center
                    gap-2

                    text-cyan-400

                    text-sm
                  "
                  >

                    <MapPin size={15} />

                    {item.location}

                  </div>

                  <div
                    className="
                    px-3 py-1.5

                    rounded-full

                    bg-cyan-400/10

                    border border-cyan-400/10

                    text-cyan-300

                    text-xs
                  "
                  >
                    {item.category}
                  </div>

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

                {/* TEXT */}
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
                    VIEW DETAILS
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

      </div>

      {/* MODAL */}
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
              max-w-[780px]

              rounded-[26px]

              border border-white/10

              bg-[#08101f]/95

              backdrop-blur-3xl

              mt-[180px]
              mb-16
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
                  md:h-[420px]
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

                  {/* TOP */}
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

                      <Building2 size={13} />

                      {selected.category}

                    </div>

                    <div
                      className="
                      text-white/50

                      text-sm
                    "
                    >
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