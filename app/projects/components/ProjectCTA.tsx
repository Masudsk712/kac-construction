"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  PhoneCall,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function ProjectCTA() {

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
      {/* BACKGROUND */}
      {/* ======================================== */}

      <div
        className="
        absolute inset-0

        bg-gradient-to-br
        from-[#020617]
        via-[#08101f]
        to-[#020617]
      "
      />

      {/* GRID */}
      <div
        className="
        absolute inset-0

        opacity-[0.03]

        [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

        [background-size:60px_60px]
      "
      />

      {/* GLOW */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
          absolute

          top-[-120px]
          left-[-100px]

          w-[500px]
          h-[500px]

          bg-cyan-500/10

          blur-[140px]
        "
        />

        <div
          className="
          absolute

          bottom-[-120px]
          right-[-100px]

          w-[450px]
          h-[450px]

          bg-blue-500/10

          blur-[130px]
        "
        />

      </div>

      {/* ======================================== */}
      {/* CONTENT */}
      {/* ======================================== */}

      <div
        className="
        relative z-10

        max-w-7xl
        mx-auto

        px-6
      "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
          relative

          overflow-hidden

          rounded-[38px]

          border border-white/10

          bg-white/[0.04]

          backdrop-blur-3xl

          shadow-[0_25px_80px_rgba(0,0,0,0.45)]
        "
        >

          {/* CARD GLOW */}
          <div
            className="
            absolute inset-0

            bg-gradient-to-r
            from-cyan-500/10
            via-transparent
            to-blue-500/10
          "
          />

          {/* TOP LIGHT */}
          <div
            className="
            absolute

            top-0
            left-0

            w-full
            h-[1px]

            bg-gradient-to-r
            from-transparent
            via-cyan-400/40
            to-transparent
          "
          />

          <div
            className="
            relative z-10

            px-6
            md:px-16

            py-16 md:py-20
          "
          >

            {/* BADGE */}
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
                delay: 0.1,
              }}

              className="
              inline-flex

              items-center
              gap-3

              px-5 py-2

              rounded-full

              border border-cyan-400/20

              bg-cyan-400/10

              backdrop-blur-xl

              mb-8
            "
            >

              <Sparkles
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
                BUILD THE FUTURE WITH KUDDUS ALI CONSTRUCTION
              </span>

            </motion.div>

            {/* GRID */}
            <div
              className="
              grid
              lg:grid-cols-[1.2fr_0.8fr]

              gap-14

              items-center
            "
            >

              {/* ======================================== */}
              {/* LEFT */}
              {/* ======================================== */}

              <div>

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
                    delay: 0.2,
                  }}

                  className="
                  text-4xl
                  md:text-6xl

                  font-black

                  leading-[1.05]

                  tracking-[-2px]

                  mb-8
                "
                >

                  Let's Deliver

                  <span className="block mt-3 gradient-text">
                    Infrastructure Excellence
                  </span>

                </motion.h2>

                {/* TEXT */}
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
                    delay: 0.3,
                  }}

                  className="
                  text-white/70

                  text-lg

                  leading-[2]

                  max-w-3xl

                  mb-12
                "
                >

                  Partner with Kuddus Ali Construction
                  for reliable EPC infrastructure,
                  transmission, tower erection,
                  hotline maintenance and
                  engineering solutions executed
                  with precision, innovation and
                  operational excellence across India.

                </motion.p>

                {/* BUTTONS */}
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
                    delay: 0.4,
                  }}

                  className="
                  flex flex-wrap

                  items-center

                  gap-5
                "
                >

                  {/* CONTACT */}
                  <Link href="/contact">

                    <motion.div
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

                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500

                      text-black
                      font-semibold

                      shadow-[0_0_40px_rgba(34,211,238,0.35)]

                      cursor-pointer

                      transition-all duration-500
                    "
                    >

                      Contact Us

                      <ArrowUpRight size={18} />

                    </motion.div>

                  </Link>

                  {/* CALL */}
                  <motion.a
                    href="tel:+919999999999"

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

                    <PhoneCall size={18} />

                    Call Now

                  </motion.a>

                </motion.div>

              </div>

              {/* ======================================== */}
              {/* RIGHT STATS */}
              {/* ======================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 50,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                transition={{
                  delay: 0.5,
                }}

                className="
                grid

                gap-5
              "
              >

                {/* CARD 1 */}
                <div
                  className="
                  relative

                  overflow-hidden

                  rounded-[28px]

                  border border-white/10

                  bg-white/[0.04]

                  backdrop-blur-2xl

                  p-6
                "
                >

                  <div
                    className="
                    absolute inset-0

                    bg-gradient-to-r
                    from-cyan-500/10
                    to-transparent
                  "
                  />

                  <div className="relative z-10">

                    <div
                      className="
                      w-14 h-14

                      rounded-2xl

                      bg-cyan-400/10

                      border border-cyan-400/20

                      flex items-center justify-center

                      text-cyan-300

                      mb-5
                    "
                    >

                      <ShieldCheck size={24} />

                    </div>

                    <h3
                      className="
                      text-4xl

                      font-black

                      text-cyan-400

                      mb-2
                    "
                    >
                      500+
                    </h3>

                    <p className="text-white/65">
                      Transmission Projects Delivered
                    </p>

                  </div>

                </div>

                {/* CARD 2 */}
                <div
                  className="
                  relative

                  overflow-hidden

                  rounded-[28px]

                  border border-white/10

                  bg-white/[0.04]

                  backdrop-blur-2xl

                  p-6
                "
                >

                  <div
                    className="
                    absolute inset-0

                    bg-gradient-to-r
                    from-blue-500/10
                    to-transparent
                  "
                  />

                  <div className="relative z-10">

                    <div
                      className="
                      w-14 h-14

                      rounded-2xl

                      bg-blue-400/10

                      border border-blue-400/20

                      flex items-center justify-center

                      text-blue-300

                      mb-5
                    "
                    >

                      <Zap size={24} />

                    </div>

                    <h3
                      className="
                      text-4xl

                      font-black

                      text-blue-300

                      mb-2
                    "
                    >
                      765kV
                    </h3>

                    <p className="text-white/65">
                      High Voltage Transmission Expertise
                    </p>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}