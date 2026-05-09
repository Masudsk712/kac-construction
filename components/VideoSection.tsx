"use client";

import { motion } from "framer-motion";

import Link from "next/link";

import {
  ArrowUpRight,
  Play,
} from "lucide-react";

export default function VideoSection() {

  return (
    <section
      className="
      relative

      w-full
      h-screen

      overflow-hidden

      bg-[#020617]
    "
    >

      {/* ================================================= */}
      {/* 🎥 FULLSCREEN VIDEO */}
      {/* ================================================= */}

      <video
        autoPlay
        muted
        loop
        playsInline

        className="
        absolute inset-0

        w-full
        h-full

        object-cover

        scale-[1.04]
      "
      >
        <source src="/videos/myhero.mp4" type="video/mp4" />
      </video>

      {/* ================================================= */}
      {/* 🔥 CINEMATIC OVERLAYS */}
      {/* ================================================= */}

      {/* DARK */}
      <div className="absolute inset-0 bg-black/45" />

      {/* TOP/BOTTOM CINEMATIC */}
      <div
        className="
        absolute inset-0

        bg-gradient-to-b
        from-[#020617]/90
        via-transparent
        to-[#020617]/90
      "
      />

      {/* SIDE LIGHT */}
      <div
        className="
        absolute
        inset-0

        bg-gradient-to-r
        from-cyan-500/10
        via-transparent
        to-blue-500/10
      "
      />

      {/* ================================================= */}
      {/* 🔥 CONTENT */}
      {/* ================================================= */}

      <div
        className="
        relative z-10

        h-full

        flex
        flex-col

        items-center
        justify-center

        text-center

        px-6
      "
      >

        {/* SMALL LABEL */}
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
            duration: 0.7,
          }}

          className="
          mb-6

          px-5 py-2

          rounded-full

          border border-white/10

          bg-white/5
          backdrop-blur-xl
        "
        >

          <span
            className="
            text-cyan-300

            uppercase

            tracking-[5px]

            text-xs
            md:text-sm
          "
          >
            Transmission Infrastructure
          </span>

        </motion.div>

        {/* HEADING */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 60,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
          }}

          className="
          max-w-6xl

          text-5xl
          sm:text-6xl
          md:text-7xl
          lg:text-[95px]

          font-black

          leading-[0.92]

          tracking-[-3px]
        "
        >

          <span
            className="
            block

            bg-gradient-to-r
            from-cyan-300
            via-blue-400
            to-cyan-200

            bg-clip-text
            text-transparent

            drop-shadow-[0_0_35px_rgba(34,211,238,0.35)]
          "
          >
            Infrastructure
          </span>

          <span className="text-white">
            Executed With Precision
          </span>

        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.2,
            duration: 0.8,
          }}

          className="
          mt-8

          max-w-3xl

          text-white/75

          text-sm
          md:text-lg

          leading-[2]
        "
        >

          KAC Construction delivers
          high-voltage transmission
          infrastructure with reliable
          execution, safety compliance
          and engineering excellence
          across India.

        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.4,
            duration: 0.8,
          }}

          className="
          mt-12

          flex
          flex-wrap

          items-center
          justify-center

          gap-5
        "
        >

          {/* PROJECT BUTTON */}
          <Link href="/projects">

            <button
              className="
              group

              px-8 py-4

              rounded-full

              bg-gradient-to-r
              from-cyan-400
              to-blue-500

              text-black
              font-bold

              shadow-[0_10px_40px_rgba(34,211,238,0.35)]

              transition-all duration-500

              hover:scale-105
            "
            >

              <span
                className="
                flex items-center
                gap-3
              "
              >

                Explore Projects

                <ArrowUpRight
                  size={18}

                  className="
                  transition

                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
                />

              </span>

            </button>

          </Link>

          {/* CONTACT BUTTON */}
          <Link href="/contact">

            <button
              className="
              group

              px-8 py-4

              rounded-full

              border border-white/15

              bg-white/5
              backdrop-blur-xl

              text-white
              font-semibold

              transition-all duration-500

              hover:bg-white/10
              hover:border-cyan-400/30
            "
            >

              <span
                className="
                flex items-center
                gap-3
              "
              >

                <Play
                  size={18}

                  className="
                  text-cyan-300
                  fill-cyan-300
                "
                />

                Get In Touch

              </span>

            </button>

          </Link>

        </motion.div>

      </div>

    </section>
  );
}