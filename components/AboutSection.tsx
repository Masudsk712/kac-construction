"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import Reveal from "./Reveal";

/* ======================================== */
/* FEATURES */
/* ======================================== */

const features = [
  "Transmission Line Infrastructure",

  "Tower Erection & Foundation",

  "Electrical Installation Services",

  "High Voltage EPC Execution",
];

/* ======================================== */
/* COMPONENT */
/* ======================================== */

export default function AboutSection() {

  return (

    <section
      className="
        relative

        overflow-hidden

        py-24
        md:py-32

        bg-white
        dark:bg-[#020617]

        text-slate-900
        dark:text-white
      "
    >

      {/* ======================================== */}
      {/* BACKGROUND */}
      {/* ======================================== */}

      <div
        className="
          absolute inset-0

          pointer-events-none
        "
      >

        {/* LEFT GLOW */}

        <div
          className="
            absolute
            top-[-180px]
            left-[-180px]

            w-[520px]
            h-[520px]

            rounded-full

            bg-cyan-500/10

            blur-[140px]
          "
        />

        {/* RIGHT GLOW */}

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-180px]

            w-[520px]
            h-[520px]

            rounded-full

            bg-blue-500/10

            blur-[140px]
          "
        />

      </div>

      {/* GRID */}

      <div
        className="
          absolute inset-0

          opacity-[0.03]

          [background-image:linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)]

          dark:[background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

          [background-size:60px_60px]
        "
      />

      {/* ======================================== */}
      {/* MAIN CONTAINER */}
      {/* ======================================== */}

      <div
        className="
          container-premium

          relative z-10

          grid
          lg:grid-cols-2

          gap-14
          lg:gap-20

          items-center
        "
      >

        {/* ======================================== */}
        {/* LEFT CONTENT */}
        {/* ======================================== */}

        <Reveal>

          <div className="max-w-2xl">

            {/* LABEL */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
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

                bg-cyan-400/5
                backdrop-blur-xl

                mb-8
              "
            >

              <div
                className="
                  w-2 h-2

                  rounded-full

                  bg-cyan-400

                  animate-pulse
                "
              />

              <span
                className="
                  text-[11px]
                  sm:text-xs

                  tracking-[4px]
                  uppercase

                  text-cyan-600
                  dark:text-cyan-200
                "
              >
                About Us
              </span>

            </motion.div>

            {/* HEADING */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.8,
              }}

              viewport={{
                once: true,
              }}

              className="
                text-3xl
                sm:text-4xl
                md:text-6xl

                font-black

                leading-[1.05]

                tracking-[-2px]

                mb-8
              "
            >

              <span
                className="
                  bg-gradient-to-r
                  from-cyan-400
                  via-sky-500
                  to-blue-500

                  bg-clip-text
                  text-transparent

                  drop-shadow-[0_0_25px_rgba(34,211,238,0.25)]
                "
              >
                A Decade Of
                <br />
                Dedication
              </span>

            </motion.h2>

            {/* DESCRIPTION 1 */}

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
                delay: 0.1,
                duration: 0.7,
              }}

              viewport={{
                once: true,
              }}

              className="
                text-base
                sm:text-lg

                text-slate-700
                dark:text-white/75

                leading-[2]

                mb-6
              "
            >

              Established in{" "}

              <span
                className="
                  text-cyan-600
                  dark:text-cyan-300

                  font-semibold
                "
              >
                2010
              </span>

              ,{" "}

              <span
                className="
                  text-slate-900
                  dark:text-white

                  font-semibold
                "
              >
                Kuddus Ali Construction
              </span>

              {" "}has built a strong reputation
              in the electrical transmission line
              infrastructure sector across India.

            </motion.p>

            {/* DESCRIPTION 2 */}

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
                duration: 0.7,
              }}

              viewport={{
                once: true,
              }}

              className="
                text-slate-600
                dark:text-white/60

                leading-[2]

                mb-10
              "
            >

              Our mission is to deliver reliable,
              high-quality construction,
              maintenance, and installation
              services for electrical transmission
              infrastructure — connecting
              communities and powering progress
              through innovation, safety,
              and execution excellence.

            </motion.p>

            {/* FEATURES */}

            <div
              className="
                grid
                sm:grid-cols-2

                gap-4
                sm:gap-5

                mb-12
              "
            >

              {features.map((item, i) => (

                <motion.div
                  key={i}

                  initial={{
                    opacity: 0,
                    y: 20,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                  }}

                  viewport={{
                    once: true,
                  }}

                  whileHover={{
                    x: 4,
                  }}

                  className="
                    flex items-center
                    gap-3

                    p-4

                    rounded-2xl

                    border

                    border-slate-200
                    dark:border-white/5

                    bg-slate-50/80
                    dark:bg-white/[0.02]

                    text-slate-700
                    dark:text-white/80

                    transition-all duration-300

                    hover:border-cyan-400/20
                    hover:bg-cyan-400/[0.03]
                  "
                >

                  <div
                    className="
                      w-10 h-10

                      rounded-xl

                      bg-cyan-400/10

                      flex items-center
                      justify-center

                      border border-cyan-400/20
                    "
                  >

                    <CheckCircle2
                      className="
                        text-cyan-500
                        dark:text-cyan-400
                      "
                      size={18}
                    />

                  </div>

                  <span
                    className="
                      text-sm
                      md:text-base
                    "
                  >
                    {item}
                  </span>

                </motion.div>

              ))}

            </div>

            {/* BUTTONS */}

            <div
              className="
                flex flex-wrap

                gap-4
                sm:gap-5
              "
            >

              {/* PRIMARY */}

              <Link href="/about">

                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}

                  whileTap={{
                    scale: 0.98,
                  }}

                  className="
                    group

                    relative
                    overflow-hidden

                    px-8 py-4

                    rounded-full

                    bg-gradient-to-r
                    from-cyan-400
                    via-sky-400
                    to-blue-500

                    text-black
                    font-bold

                    shadow-[0_10px_40px_rgba(34,211,238,0.35)]

                    transition-all duration-500
                  "
                >

                  <div
                    className="
                      absolute inset-0

                      opacity-0
                      group-hover:opacity-100

                      transition duration-500

                      bg-white/20
                    "
                  />

                  <span
                    className="
                      relative z-10

                      flex items-center
                      gap-3
                    "
                  >

                    Explore More

                    <ArrowUpRight
                      size={18}

                      className="
                        transition

                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />

                  </span>

                </motion.button>

              </Link>

              {/* SECONDARY */}

              <Link href="/projects">

                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}

                  whileTap={{
                    scale: 0.98,
                  }}

                  className="
                    px-8 py-4

                    rounded-full

                    border

                    border-slate-300
                    dark:border-white/10

                    bg-white/70
                    dark:bg-white/[0.04]

                    backdrop-blur-xl

                    text-slate-900
                    dark:text-white

                    font-semibold

                    hover:border-cyan-400/30
                    hover:bg-cyan-400/[0.04]

                    transition-all duration-500
                  "
                >
                  View Projects
                </motion.button>

              </Link>

            </div>

          </div>

        </Reveal>

        {/* ======================================== */}
        {/* RIGHT IMAGE */}
        {/* ======================================== */}

        <Reveal>

          <motion.div
            whileHover={{
              y: -8,
            }}

            transition={{
              duration: 0.4,
            }}

            className="
              relative
            "
          >

            {/* OUTER GLOW */}

            <div
              className="
                absolute inset-0

                bg-gradient-to-r
                from-cyan-500/10
                to-blue-500/10

                blur-[100px]

                rounded-[40px]
              "
            />

            {/* IMAGE WRAPPER */}

            <div
              className="
                relative

                overflow-hidden

                rounded-[32px]

                border

                border-slate-200
                dark:border-white/10

                bg-white/80
                dark:bg-white/[0.04]

                backdrop-blur-2xl

                shadow-[0_20px_80px_rgba(0,0,0,0.12)]

                dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
              "
            >

              {/* IMAGE */}

              <img
                src="/home/SitePic.webp"
                alt="Kuddus Ali Construction"

                className="
                  w-full

                  h-[360px]
                  sm:h-[520px]
                  md:h-[620px]

                  object-cover

                  transition duration-700

                  hover:scale-105
                "
              />

              {/* OVERLAY */}

              <div
                className="
                  absolute inset-0

                  bg-gradient-to-t

                  from-black/70
                  via-black/10
                  to-transparent
                "
              />

              {/* FLOATING INFO */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: 0.4,
                  duration: 0.8,
                }}

                viewport={{
                  once: true,
                }}

                className="
                  absolute

                  bottom-4
                  left-1/2

                  -translate-x-1/2

                  w-[88%]
                  sm:w-[84%]

                  px-4 py-3
                  sm:px-5 sm:py-4

                  rounded-2xl

                  border border-white/10

                  bg-black/40

                  backdrop-blur-2xl

                  shadow-[0_8px_30px_rgba(0,0,0,0.35)]
                "
              >

                <div
                  className="
                    flex items-center
                    justify-between

                    gap-3
                  "
                >

                  {/* LEFT */}

                  <div className="flex-1">

                    <h3
                      className="
                        text-xl
                        sm:text-2xl

                        font-black

                        text-cyan-300

                        leading-none

                        mb-1
                      "
                    >
                      15+
                    </h3>

                    <p
                      className="
                        text-[10px]
                        sm:text-xs

                        leading-[1.4]

                        text-white/70
                      "
                    >
                      Years of
                      <br />
                      Experience
                    </p>

                  </div>

                  {/* DIVIDER */}

                  <div
                    className="
                      w-px

                      h-9
                      sm:h-10

                      bg-white/10
                    "
                  />

                  {/* RIGHT */}

                  <div className="flex-1">

                    <h3
                      className="
                        text-xl
                        sm:text-2xl

                        font-black

                        text-cyan-300

                        leading-none

                        mb-1
                      "
                    >
                      765kV
                    </h3>

                    <p
                      className="
                        text-[10px]
                        sm:text-xs

                        leading-[1.4]

                        text-white/70
                      "
                    >
                      Transmission
                      <br />
                      Expertise
                    </p>

                  </div>

                </div>

              </motion.div>

            </div>

          </motion.div>

        </Reveal>

      </div>

    </section>
  );
}