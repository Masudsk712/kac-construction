"use client";

import { motion } from "framer-motion";

import Link from "next/link";

import {
  ArrowUpRight,
  Play,
} from "lucide-react";

import { ease } from "@/lib/animations";

export default function VideoSection() {

  return (

    <section
      className="
        relative

        w-full

        min-h-[85vh]
        md:min-h-screen

        overflow-hidden

        bg-[var(--bg)]
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
        preload="metadata"
        poster="/home/SitePic.webp"

        className="
          absolute inset-0

          w-full
          h-full

          object-cover

          scale-[1.04]
        "
      >

        <source
          src="/videos/myhero.mp4"
          type="video/mp4"
        />

      </video>

      {/* ================================================= */}
      {/* 🔥 CINEMATIC OVERLAYS */}
      {/* ================================================= */}

      {/* DARK */}
      <div className="absolute inset-0 bg-black/55" />

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

      {/* LEFT GLOW */}
      <div
        className="
          absolute

          top-[-150px]
          left-[-150px]

          w-[380px]
          h-[380px]

          md:w-[520px]
          md:h-[520px]

          rounded-full

          bg-cyan-400/10

          blur-[120px]
        "
      />

      {/* RIGHT GLOW */}
      <div
        className="
          absolute

          bottom-[-180px]
          right-[-180px]

          w-[380px]
          h-[380px]

          md:w-[520px]
          md:h-[520px]

          rounded-full

          bg-blue-500/10

          blur-[130px]
        "
      />

      {/* ================================================= */}
      {/* 🔥 CONTENT */}
      {/* ================================================= */}

      <div
        className="
          relative z-10

          h-full
          min-h-[85vh]
          md:min-h-screen

          flex
          flex-col

          items-center
          justify-center

          text-center

          px-5
          sm:px-6

          py-24
          md:py-32
        "
      >

        {/* SMALL LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: ease.premiumOut }}
          viewport={{ once: true }}
          className="
            mb-5 md:mb-6
            px-4 py-2 md:px-5 md:py-2
            rounded-full
            border border-white/10
            bg-white/5 backdrop-blur-xl
          "
        >

          <span
            className="
              text-cyan-300

              uppercase

              tracking-[4px]
              md:tracking-[5px]

              text-[10px]
              sm:text-xs
              md:text-sm
            "
          >
            Transmission Infrastructure
          </span>

        </motion.div>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 60, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: ease.premiumOut }}
          viewport={{ once: true }}

          className="
            max-w-6xl

            text-[42px]
            sm:text-6xl
            md:text-7xl
            lg:text-[95px]

            font-black

            leading-[0.95]

            tracking-[-2px]
            md:tracking-[-3px]
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: ease.premiumOut }}
          viewport={{ once: true }}

          className="
            mt-6
            md:mt-8

            max-w-3xl

            text-white/75

            text-sm
            sm:text-base
            md:text-lg

            leading-[1.9]
            md:leading-[2]
          "
        >

          Kuddus Ali Construction delivers
          high-voltage transmission
          infrastructure with reliable
          execution, safety compliance
          and engineering excellence
          across India.

        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: ease.premiumOut }}
          viewport={{ once: true }}

          className="
            mt-10
            md:mt-12

            flex
            flex-col
            sm:flex-row

            w-full
            sm:w-auto

            items-center
            justify-center

            gap-4
            md:gap-5
          "
        >

          {/* PROJECT BUTTON */}
          <Link
            href="/projects"
            className="w-full sm:w-auto"
          >

            <button
              className="
                group

                w-full
                sm:w-auto

                px-7 py-4
                md:px-8 md:py-4

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
                  justify-center

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
          <Link
            href="/contact"
            className="w-full sm:w-auto"
          >

            <button
              className="
                group

                w-full
                sm:w-auto

                px-7 py-4
                md:px-8 md:py-4

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
                  justify-center

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