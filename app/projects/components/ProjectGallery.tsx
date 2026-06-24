"use client";

import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import Image from "next/image";

import {
  ArrowUpRight,
  X,
  Plus,
  Images,
} from "lucide-react";

const galleryImages = [
  {
    title: "Transmission Foundation",
    category: "Foundation Work",
    image: "kacgroups/projects/Project3.webp",
  },

  {
    title: "Tower Erection",
    category: "Erection Work",
    image: "kacgroups/projects/Project4.webp",
  },

  {
    title: "Hotline Maintenance",
    category: "Hotline Project",
    image: "kacgroups/projects/Project5.webp",
  },

  {
    title: "HTLS Reconductoring",
    category: "Reconductoring",
    image: "kacgroups/projects/Project6.webp",
  },

  {
    title: "Stringing Execution",
    category: "Transmission Stringing",
    image: "kacgroups/projects/Project7.webp",
  },

  {
    title: "765kV Infrastructure",
    category: "Ultra High Voltage",
    image: "kacgroups/projects/Project8.webp",
  },
];

export default function ProjectGallery() {

  const [selected, setSelected] =
    useState<any>(null);

  return (

    <section
      className="
      section-surface
      relative
      overflow-hidden

      py-24 md:py-28

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

          w-[500px]
          h-[500px]

          bg-cyan-500/10

          blur-[130px]
        "
        />

        <div
          className="
          absolute

          bottom-0 right-0

          w-[450px]
          h-[450px]

          bg-blue-500/10

          blur-[120px]
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
        {/* HEADING */}
        {/* ======================================== */}

        <div
          className="
          text-center

          max-w-4xl
          mx-auto

          mb-16
        "
        >

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

            <Images
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
              PROJECT GALLERY
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

            Infrastructure Execution

            <span className="gradient-text block mt-3">
              Across India
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
            Showcasing Kuddus Ali Construction’s
            transmission infrastructure,
            tower erection, hotline and EPC
            execution projects nationwide.
          </p>

        </div>

        {/* ======================================== */}
        {/* GRID */}
        {/* ======================================== */}

        <div
          className="
          grid

          sm:grid-cols-2
          lg:grid-cols-3

          gap-8
        "
        >

          {galleryImages.map((item, index) => (

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
                delay: index * 0.12,
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

              rounded-[28px]

              border border-white/10

              bg-white/[0.03]

              backdrop-blur-2xl

              cursor-pointer

              hover:border-cyan-400/20

              transition-all duration-500
            "
            >

              {/* IMAGE */}
              <div
                className="
                relative

                h-[260px]
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

                {/* HOVER */}
                <div
                  className="
                  absolute inset-0

                  opacity-0

                  group-hover:opacity-100

                  transition duration-500

                  bg-black/40

                  flex items-center justify-center
                "
                >

                  <div
                    className="
                    w-16 h-16

                    rounded-full

                    border border-white/20

                    bg-white/10

                    backdrop-blur-xl

                    flex items-center justify-center
                  "
                  >

                    <Plus size={28} />

                  </div>

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <div
                  className="
                  flex items-start
                  justify-between

                  gap-4
                "
                >

                  <div>

                    <p
                      className="
                      text-cyan-400

                      text-sm

                      mb-2
                    "
                    >
                      {item.category}
                    </p>

                    <h3
                      className="
                      text-2xl

                      font-bold

                      group-hover:text-cyan-300

                      transition
                    "
                    >
                      {item.title}
                    </h3>

                  </div>

                  {/* ICON */}
                  <div
                    className="
                    min-w-[48px]
                    h-[48px]

                    rounded-2xl

                    bg-cyan-400/10

                    border border-cyan-400/20

                    flex items-center justify-center

                    text-cyan-400

                    group-hover:scale-110

                    transition
                  "
                  >

                    <ArrowUpRight size={20} />

                  </div>

                </div>

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

            bg-black/80

            backdrop-blur-xl

            flex items-center justify-center

            px-4
          "
          >

            {/* CARD */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                scale: 0.9,
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
              max-w-[520px]

              rounded-[24px]

              border border-white/10

              bg-[#08101f]/95

              backdrop-blur-3xl

              shadow-[0_0_50px_rgba(34,211,238,0.12)]
            "
            >

              {/* CLOSE */}
              <button
                onClick={() =>
                  setSelected(null)
                }

                className="
                absolute

                top-3
                right-3

                z-30

                w-9 h-9

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

                <X size={16} />

              </button>

              {/* IMAGE */}
              <div
                className="
                relative

                h-[220px]
              "
              >

                <Image
                  src={selected.image}
                  alt={selected.title}

                  fill

                  className="object-cover"
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

              {/* CONTENT */}
              <div
                className="
                p-5
                md:p-6
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

                  mb-4
                "
                >
                  {selected.category}
                </div>

                <h2
                  className="
                  text-2xl
                  md:text-3xl

                  font-black

                  mb-4
                "
                >
                  {selected.title}
                </h2>

                <p
                  className="
                  text-white/70

                  leading-[1.9]

                  text-sm
                  md:text-base
                "
                >

                  Kuddus Ali Construction continues
                  delivering advanced
                  transmission infrastructure,
                  tower erection and EPC
                  execution projects with
                  engineering precision and
                  operational excellence
                  across India.

                </p>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>

  );

}