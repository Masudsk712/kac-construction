"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    number: "500+",
    label: "Projects Delivered",
  },

  {
    number: "15+",
    label: "States Executed",
  },

  {
    number: "765kV",
    label: "Transmission Expertise",
  },
];

export default function Hero() {

  const scrollToContent = () => {

    const el =
      document.getElementById("StickyTabs");

    if (el) {

      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: "smooth",
      });

    }

  };

  return (

    <section
      id="hero"
      className="
      relative
      min-h-screen
      bg-[#020617]
      flex items-center
    "
    >

      {/* ======================================== */}
      {/* BG IMAGE */}
      {/* ======================================== */}

      <Image
        src="/placeholder.jpg"
        alt="Projects Hero"

        fill
        priority

        className="
        object-cover
        object-center

        scale-105

        opacity-70
      "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#020617]/80" />

      {/* GRADIENT */}
      <div
        className="
        absolute inset-0

        bg-gradient-to-r
        from-[#020617]
        via-[#020617]/75
        to-[#020617]/30
      "
      />

      {/* GRID EFFECT */}
      <div
        className="
        absolute inset-0

        opacity-[0.04]

        [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

        [background-size:70px_70px]
      "
      />

      {/* GLOW */}
      <div
        className="
        absolute

        top-0
        left-0

        w-[700px]
        h-[700px]

        bg-cyan-500/10

        blur-[160px]
      "
      />

      <div
        className="
        absolute

        bottom-0
        right-0

        w-[600px]
        h-[600px]

        bg-blue-500/10

        blur-[160px]
      "
      />

      {/* ======================================== */}
      {/* CONTENT */}
      {/* ======================================== */}

      <div
        className="
        relative z-10

        max-w-7xl
        mx-auto

        px-6
        md:px-10

        w-full

        pt-36
        pb-44
      "
      >

        {/* TOP BADGE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          className="
          inline-flex

          items-center
          gap-3

          px-5 py-2

          rounded-full

          border border-cyan-400/20

          bg-cyan-400/10

          backdrop-blur-2xl

          shadow-[0_0_30px_rgba(34,211,238,0.08)]

          mb-10
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

            text-cyan-200
          "
          >
            KAC TRANSMISSION PROJECTS
          </span>

        </motion.div>

        {/* HERO GRID */}
        <div
          className="
          grid
          lg:grid-cols-[1.2fr_0.8fr]

          gap-20

          items-center
        "
        >

          {/* ======================================== */}
          {/* LEFT */}
          {/* ======================================== */}

          <div>

            {/* HEADING */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 70,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 1,
              }}

              className="
              text-[54px]
              sm:text-[72px]
              lg:text-[98px]

              leading-[0.9]

              font-black

              tracking-[-4px]

              text-white
            "
            >

              Engineering India's

              <span
                className="
                block
                mt-4

                text-cyan-400

                drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]
              "
              >
                Power Infrastructure
              </span>

            </motion.h1>

            {/* LINE */}
            <motion.div
              initial={{
                width: 0,
              }}

              animate={{
                width: "140px",
              }}

              transition={{
                delay: 0.8,
                duration: 0.8,
              }}

              className="
              h-[4px]

              bg-gradient-to-r
              from-cyan-400
              to-blue-500

              mt-10
              mb-10

              rounded-full
            "
            />

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 40,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 0.5,
              }}

              className="
              text-lg
              md:text-xl

              text-gray-300

              leading-[2]

              max-w-3xl
            "
            >

              Kuddus Ali Construction delivers
              high-performance transmission
              infrastructure projects including
              tower foundation, erection,
              hotline maintenance, stringing
              and EPC execution across India.

            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 0.8,
              }}

              className="
              flex flex-wrap

              gap-5

              mt-14
            "
            >

              {/* BTN 1 */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}

                whileTap={{
                  scale: 0.96,
                }}

                onClick={scrollToContent}

                className="
                inline-flex items-center
                gap-3

                px-8 py-4

                rounded-full

                bg-gradient-to-r
                from-cyan-400
                to-blue-500

                text-black
                font-semibold

                shadow-[0_0_40px_rgba(34,211,238,0.35)]

                transition-all duration-500
              "
              >

                Explore Projects

                <ArrowUpRight size={18} />

              </motion.button>

              {/* BTN 2 */}
              <motion.a
                href="/contact"

                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}

                whileTap={{
                  scale: 0.96,
                }}

                className="
                inline-flex items-center
                gap-3

                px-8 py-4

                rounded-full

                border border-white/10

                bg-white/[0.05]

                backdrop-blur-2xl

                hover:border-cyan-400/30
                hover:bg-cyan-400/[0.08]

                transition-all duration-500
              "
              >

                Contact Us

                <ArrowUpRight size={18} />

              </motion.a>

            </motion.div>

          </div>

          {/* ======================================== */}
          {/* RIGHT PREMIUM CARD */}
          {/* ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              delay: 0.4,
              duration: 1,
            }}

            className="relative"
          >

            {/* CARD */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.01,
              }}

              className="
              relative

              rounded-[36px]

              overflow-hidden

              border border-white/10

              bg-white/[0.04]

              backdrop-blur-3xl

              p-5
            "
            >

              <Image
                src="/placeholder.jpg"
                alt="Transmission Projects"

                width={700}
                height={900}

                className="
                rounded-[28px]

                object-cover

                w-full

                h-[580px]
              "
              />

              {/* OVERLAY */}
              <div
                className="
                absolute inset-0

                bg-gradient-to-t
                from-[#020617]
                via-transparent
                to-transparent
              "
              />

            </motion.div>

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

              rounded-3xl

              border border-cyan-400/20

              bg-black/50

              backdrop-blur-3xl

              p-5

              shadow-[0_0_40px_rgba(34,211,238,0.15)]
            "
            >

              <div className="flex items-center gap-4">

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

                  <ShieldCheck size={24} />

                </div>

                <div>

                  <h4
                    className="
                    text-2xl

                    font-black

                    text-cyan-300
                  "
                  >
                    100%
                  </h4>

                  <p className="text-sm text-gray-300">
                    EPC Quality Execution
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

        {/* ======================================== */}
        {/* STATS */}
        {/* ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 1,
          }}

          className="
          grid
          md:grid-cols-3

          gap-6

          mt-24

          max-w-6xl
        "
        >

          {stats.map((item, i) => (

            <motion.div
              key={i}

              whileHover={{
                y: -10,
                scale: 1.03,
              }}

              className="
              relative
              overflow-hidden

              rounded-[32px]

              border border-white/10

              bg-white/[0.04]

              backdrop-blur-3xl

              p-8

              group
            "
            >

              {/* GLOW */}
              <div
                className="
                absolute inset-0

                opacity-0

                group-hover:opacity-100

                transition duration-500

                bg-gradient-to-r
                from-cyan-500/10
                via-blue-500/10
                to-transparent
              "
              />

              {/* BORDER LIGHT */}
              <div
                className="
                absolute inset-0

                rounded-[32px]

                border border-cyan-400/0

                group-hover:border-cyan-400/20

                transition-all duration-500
              "
              />

              <div className="relative z-10">

                <h3
                  className="
                  text-5xl

                  font-black

                  text-cyan-400

                  mb-4

                  drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]
                "
                >
                  {item.number}
                </h3>

                <p
                  className="
                  text-gray-300

                  text-lg
                "
                >
                  {item.label}
                </p>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

      {/* ======================================== */}
      {/* SCROLL */}
      {/* ======================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        transition={{
          delay: 1.5,
        }}

        onClick={scrollToContent}

        className="
        absolute

        bottom-8
        left-1/2

        -translate-x-1/2

        z-20

        cursor-pointer

        flex flex-col items-center

        text-white/50

        hover:text-cyan-400

        transition
      "
      >

        <span
          className="
          text-[11px]

          tracking-[5px]

          mb-3
        "
        >
          SCROLL DOWN
        </span>

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}

          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >

          <ArrowDown size={22} />

        </motion.div>

      </motion.div>

      {/* BOTTOM FADE */}
      <div
        className="
        absolute bottom-0 left-0

        w-full h-40

        bg-gradient-to-b
        from-transparent
        to-[#020617]
      "
      />

    </section>
  );

}