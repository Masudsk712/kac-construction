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
} from "lucide-react";

const galleryImages = [
  {
    title: "Transmission Foundation",
    category: "Foundation Work",
    image: "/placeholder.jpg",
  },

  {
    title: "Tower Erection",
    category: "Erection Work",
    image: "/placeholder.jpg",
  },

  {
    title: "Hotline Maintenance",
    category: "Hotline Project",
    image: "/placeholder.jpg",
  },

  {
    title: "HTLS Reconductoring",
    category: "Reconductoring",
    image: "/placeholder.jpg",
  },

  {
    title: "Stringing Execution",
    category: "Transmission Stringing",
    image: "/placeholder.jpg",
  },

  {
    title: "765kV Infrastructure",
    category: "Ultra High Voltage",
    image: "/placeholder.jpg",
  },
];

export default function ProjectGallery() {

  const [selected, setSelected] = useState<any>(null);

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

          w-[500px]
          h-[500px]

          bg-cyan-500/10

          blur-[120px]

          top-0 left-0
          "
        />

        <div
          className="
          absolute

          w-[400px]
          h-[400px]

          bg-blue-500/10

          blur-[100px]

          bottom-0 right-0
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

          mb-16
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
            PROJECT GALLERY
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl

            font-semibold

            leading-tight
            "
          >

            <span className="gradient-text">
              Infrastructure Execution
              Across India
            </span>

          </h2>

        </div>

        {/* GRID */}
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
                y: 50,
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

              glass-strong
              border-glow

              rounded-3xl

              overflow-hidden

              cursor-pointer

              relative
              "
            >

              {/* IMAGE */}
              <div
                className="
                relative

                h-[300px]
                md:h-[360px]

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
                  from-black/80
                  via-black/10
                  to-transparent
                  "
                />

                {/* HOVER OVERLAY */}
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

                      font-semibold
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

            className="
            fixed inset-0

            z-50

            bg-black/80

            backdrop-blur-sm

            flex items-center justify-center

            px-4
            "
          >

            <motion.div
              initial={{
                scale: 0.85,
                opacity: 0,
              }}

              animate={{
                scale: 1,
                opacity: 1,
              }}

              exit={{
                scale: 0.85,
                opacity: 0,
              }}

              className="
              relative

              max-w-6xl
              w-full

              glass-strong
              border-glow

              rounded-3xl

              overflow-hidden
              "
            >

              {/* CLOSE */}
              <button
                onClick={() =>
                  setSelected(null)
                }

                className="
                absolute

                top-5 right-5

                z-20

                w-10 h-10

                rounded-full

                bg-black/40

                flex items-center justify-center

                hover:bg-black/70

                transition
                "
              >

                <X size={20} />

              </button>

              <div
                className="
                grid md:grid-cols-2
                "
              >

                {/* IMAGE */}
                <div className="relative h-[320px] md:h-[700px]">

                  <Image
                    src={selected.image}
                    alt={selected.title}

                    fill

                    className="object-cover"
                  />

                </div>

                {/* TEXT */}
                <div
                  className="
                  p-8 md:p-12

                  flex flex-col justify-center
                  "
                >

                  <p
                    className="
                    text-cyan-400

                    text-sm

                    tracking-widest

                    mb-4
                    "
                  >
                    {selected.category}
                  </p>

                  <h2
                    className="
                    text-4xl

                    font-bold

                    mb-6
                    "
                  >
                    {selected.title}
                  </h2>

                  <p
                    className="
                    text-white/70

                    leading-relaxed
                    "
                  >

                    KAC Construction continues
                    to deliver world-class EPC
                    infrastructure execution with
                    engineering precision, safety,
                    innovation and reliable
                    transmission project delivery
                    across India.

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