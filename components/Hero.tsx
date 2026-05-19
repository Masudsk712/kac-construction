"use client";

import Link from "next/link";

import {
  motion,
} from "framer-motion";

import {
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import MagneticButton from "./MagneticButton";

/* ======================================== */
/* ANIMATION */
/* ======================================== */

const fadeUp = {

  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};

/* ======================================== */
/* COMPONENT */
/* ======================================== */

export default function Hero() {

  /* ======================================== */
  /* SCROLL */
  /* ======================================== */

  const scrollToNext = () => {

    const nextSection =
      document.getElementById("stats");

    if (!nextSection) return;

    window.scrollTo({
      top: nextSection.offsetTop - 80,
      behavior: "smooth",
    });

  };

  return (

    <section
      id="hero"
      className="
        relative
        z-0

        min-h-screen

        flex items-center justify-center

        overflow-hidden

        page-hero
        text-slate-900
        dark:text-white
      "
    >

      {/* ======================================== */}
      {/* VIDEO BACKGROUND */}
      {/* ======================================== */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"

        className="
          absolute inset-0

          w-full h-full

          object-cover

          z-0

          pointer-events-none
        "
      >

        <source
          src="/videos/NewBackground.mp4"
          type="video/mp4"
        />

      </video>

      {/* ======================================== */}
      {/* OVERLAYS */}
      {/* ======================================== */}

      <div
        className="
          absolute inset-0

          bg-white/30
          dark:bg-black/60

          z-[1]

          pointer-events-none
        "
      />

      <div
        className="
          absolute inset-0

          bg-gradient-to-b
          from-white/40
          via-white/10
          to-[var(--hero-fade)]
          dark:from-[#020617]/50
          dark:via-[#020617]/10
          dark:to-[#020617]

          z-[2]

          pointer-events-none
        "
      />

      {/* ======================================== */}
      {/* GLOW EFFECTS */}
      {/* ======================================== */}

      <div
        className="
          absolute
          top-[-220px]
          left-[-220px]

          w-[650px]
          h-[650px]

          rounded-full

          bg-cyan-400/20

          blur-[150px]

          z-[2]

          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[-250px]
          right-[-220px]

          w-[650px]
          h-[650px]

          rounded-full

          bg-blue-500/20

          blur-[160px]

          z-[2]

          pointer-events-none
        "
      />

      {/* ======================================== */}
      {/* HERO CONTENT */}
      {/* ======================================== */}

      <div
        className="
          container-premium

          relative z-20

          flex flex-col
          items-center
          text-center

          pt-36
          pb-28

          md:pt-40
        "
      >

        {/* ======================================== */}
        {/* LABEL */}
        {/* ======================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"

          transition={{
            duration: 0.8,
          }}

          className="
            mb-8

            inline-flex
            items-center

            gap-3

            px-6 py-3

            rounded-full

            border border-cyan-400/30
            dark:border-cyan-400/20

            bg-white/70
            dark:bg-white/5
            backdrop-blur-xl

            shadow-[0_0_40px_rgba(34,211,238,0.08)]
          "
        >

          <div
            className="
              w-2 h-2

              rounded-full

              bg-cyan-300

              animate-pulse
            "
          />

          <p
            className="
              text-[10px]
              sm:text-xs

              uppercase

              tracking-[5px]

              text-cyan-700
              dark:text-cyan-100
            "
          >
            Powering Progress Since 2010
          </p>

        </motion.div>

        {/* ======================================== */}
        {/* MAIN HEADING */}
        {/* ======================================== */}

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"

          transition={{
            duration: 1,
            delay: 0.1,
          }}

          className="
            relative

            max-w-6xl

            text-[42px]
            sm:text-[64px]
            md:text-[90px]
            lg:text-[110px]

            leading-[0.9]

            tracking-[-2px]
            md:tracking-[-4px]

            font-black
          "

          style={{
            fontFamily:
              "Times New Roman, serif",
          }}
        >

          {/* GLOW */}
          <span
            className="
              absolute inset-0

              opacity-70

              blur-[38px]

              bg-gradient-to-r
              from-cyan-300
              via-blue-400
              to-cyan-300

              bg-clip-text
              text-transparent
            "
          >
            KUDDUS ALI
            <br />
            CONSTRUCTION
          </span>

          {/* MAIN */}
          <span
            className="
              relative z-10

              bg-gradient-to-r
              from-slate-900
              via-cyan-700
              to-cyan-500
              dark:from-white
              dark:via-cyan-100
              dark:to-cyan-300

              bg-clip-text
              text-transparent

              drop-shadow-[0_0_35px_rgba(34,211,238,0.2)]
              dark:drop-shadow-[0_0_35px_rgba(34,211,238,0.35)]
            "
          >
            KUDDUS ALI
            <br />
            CONSTRUCTION
          </span>

        </motion.h1>

        {/* ======================================== */}
        {/* SUBTITLE */}
        {/* ======================================== */}

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="show"

          transition={{
            duration: 0.9,
            delay: 0.35,
          }}

          className="
            mt-10

            text-2xl
            sm:text-4xl
            md:text-6xl

            font-black

            text-slate-900
            dark:text-white

            drop-shadow-none
            dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]
          "
        >
          Powering India’s Future
        </motion.h2>

        {/* ======================================== */}
        {/* DESCRIPTION */}
        {/* ======================================== */}

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"

          transition={{
            duration: 0.9,
            delay: 0.55,
          }}

          className="
            mt-8

            max-w-3xl

            text-sm
            sm:text-lg
            md:text-xl

            leading-[1.9]

            text-slate-700
            dark:text-white/75
          "
        >

          Experts in Transmission Line,
          Tower Erection, Foundation,
          Hotline Stringing and Infrastructure
          Projects across India.

        </motion.p>

        {/* ======================================== */}
        {/* BUTTONS */}
        {/* ======================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"

          transition={{
            duration: 0.9,
            delay: 0.8,
          }}

          className="
            mt-14

            flex flex-col
            sm:flex-row

            items-center
            justify-center

            gap-5

            w-full
            sm:w-auto
          "
        >

          {/* PRIMARY BUTTON */}

          <Link
            href="/projects"

            className="
              w-full
              sm:w-auto
            "
          >

            <MagneticButton>

              <div
                className="
                  flex items-center
                  justify-center

                  gap-3
                "
              >

                View Projects

                <ArrowRight size={18} />

              </div>

            </MagneticButton>

          </Link>

          {/* SECONDARY BUTTON */}

          <Link
            href="/contact"

            className="
              w-full
              sm:w-auto
            "
          >

            <button
              className="
                w-full

                px-8 py-4

                rounded-full

                border border-slate-300/60
                dark:border-white/15

                bg-white/80
                dark:bg-white/10
                backdrop-blur-xl

                text-slate-800
                dark:text-white
                font-semibold

                shadow-[0_8px_30px_rgba(15,23,42,0.08)]
                dark:shadow-[0_0_25px_rgba(255,255,255,0.05)]

                transition-all duration-300

                hover:bg-white
                dark:hover:bg-white/20
                hover:border-cyan-500/40
                dark:hover:border-cyan-400/40
                hover:text-cyan-600
                dark:hover:text-cyan-300
              "
            >
              Contact Us
            </button>

          </Link>

        </motion.div>

      </div>

      {/* ======================================== */}
      {/* SCROLL INDICATOR */}
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

        onClick={scrollToNext}

        className="
          absolute
          bottom-7
          left-1/2

          -translate-x-1/2

          z-30

          cursor-pointer

          flex flex-col
          items-center

          text-slate-600
          dark:text-white/50

          hover:text-cyan-600
          dark:hover:text-cyan-300

          transition-all duration-300
        "
      >

        <span
          className="
            text-[10px]
            sm:text-[11px]

            tracking-[5px]

            mb-3
          "
        >
          SCROLL
        </span>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}

          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >

          <ChevronDown size={24} />

        </motion.div>

      </motion.div>

      {/* ======================================== */}
      {/* BOTTOM FADE */}
      {/* ======================================== */}

      <div
        className="
          absolute bottom-0 left-0

          w-full h-40

          bg-gradient-to-b
          from-transparent
          to-[var(--hero-fade)]

          z-[5]

          pointer-events-none
        "
      />

    </section>
  );
}