"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import {
  CheckCircle2,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

const projects = [
  {
    title: "400kV Transmission Line",
    location: "Bihar",

    image: "/placeholder.jpg",

    desc:
      "Successfully completed ultra high-voltage transmission infrastructure project with timely execution and engineering excellence.",
  },

  {
    title: "Hotline Maintenance Project",
    location: "Odisha",

    image: "/placeholder.jpg",

    desc:
      "Executed advanced hotline maintenance operations ensuring uninterrupted power transmission reliability.",
  },

  {
    title: "Tower Erection Work",
    location: "Jharkhand",

    image: "/placeholder.jpg",

    desc:
      "Completed high-capacity transmission tower erection across complex terrain and remote infrastructure zones.",
  },
];

export default function CompletedProjects() {

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
            COMPLETED PROJECTS
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
              Successfully Delivered Infrastructure
            </span>

          </h2>

        </div>

        {/* GRID */}
        <div
          className="
          grid

          md:grid-cols-2
          xl:grid-cols-3

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

              className="
              group

              glass-strong
              border-glow

              rounded-3xl

              overflow-hidden
              "
            >

              {/* IMAGE */}
              <div
                className="
                relative

                h-[300px]
                md:h-[340px]

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

                {/* STATUS */}
                <div
                  className="
                  absolute

                  top-5 left-5

                  inline-flex items-center
                  gap-2

                  px-4 py-2

                  rounded-full

                  bg-emerald-500/10

                  border border-emerald-400/20

                  backdrop-blur-xl

                  text-emerald-300

                  text-sm
                  "
                >

                  <CheckCircle2 size={16} />

                  Completed

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-7">

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

                  <MapPin size={16} />

                  {item.location}

                </div>

                {/* TITLE */}
                <h3
                  className="
                  text-2xl

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

                  mb-6
                  "
                >
                  {item.desc}
                </p>

                {/* BTN */}
                <button
                  className="
                  inline-flex items-center
                  gap-3

                  text-cyan-400

                  hover:gap-4

                  transition-all duration-300
                  "
                >

                  View Project

                  <ArrowUpRight size={18} />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}