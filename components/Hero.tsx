"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import MagneticButton from "./MagneticButton";

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

export default function Hero() {

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
      min-h-screen
      flex items-center justify-center
      overflow-hidden
      text-white
    "
    >

      {/* 🎥 VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
        absolute inset-0
        w-full h-full
        object-cover
        scale-105
      "
      >

        <source
          src="/videos/NewBackground.mp4"
          type="video/mp4"
        />

      </video>

      {/* 🔥 LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-[#020617]/40" />

      {/* 🔥 CINEMATIC GRADIENT */}
      <div
        className="
        absolute inset-0

        bg-gradient-to-b
        from-[#020617]/40
        via-[#020617]/10
        to-[#020617]/70
      "
      />

      {/* 🔥 LEFT GLOW */}
      <div
        className="
        absolute
        top-[-180px]
        left-[-120px]

        w-[500px]
        h-[500px]

        bg-cyan-400/20
        blur-[140px]
        rounded-full
      "
      />

      {/* 🔥 RIGHT GLOW */}
      <div
        className="
        absolute
        bottom-[-200px]
        right-[-120px]

        w-[500px]
        h-[500px]

        bg-blue-500/20
        blur-[150px]
        rounded-full
      "
      />

      {/* 🔥 CONTENT */}
      <div
        className="
        container-premium

        relative z-10

        flex flex-col
        items-center
        text-center

        pt-32
        pb-24
      "
      >

        {/* 🔥 MAIN HEADING */}
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

  max-w-5xl

  text-[42px]
  sm:text-[58px]
  md:text-[82px]
  lg:text-[100px]

  leading-[0.95]
  tracking-[-3px]

  font-black
"
          style={{
            fontFamily: "Times New Roman, serif",
          }}
        >

          {/* 🔥 GLOW BACKGROUND */}
          <span
            className="
    absolute inset-0

    blur-[30px]

    opacity-60

    bg-gradient-to-r
    from-cyan-400
    via-blue-500
    to-cyan-300

    bg-clip-text
    text-transparent
  "
          >
            KAC CONSTRUCTION
          </span>

          {/* 🔥 MAIN TEXT */}
          <span
            className="
    relative z-10

    bg-gradient-to-r
    from-cyan-200
    via-sky-400
    via-blue-400
    to-cyan-300

    bg-[length:200%_200%]

    animate-[gradient_6s_ease_infinite]

    bg-clip-text
    text-transparent

    drop-shadow-[0_0_35px_rgba(34,211,238,0.45)]
  "
          >
            KAC CONSTRUCTION
          </span>

        </motion.h1>

        {/* 🔥 SMALL PREMIUM LABEL */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{
            duration: 0.9,
            delay: 0.25,
          }}
          className="
          mt-5

          px-5 py-2

          rounded-full

          border border-cyan-400/20

          bg-white/5
          backdrop-blur-xl

          shadow-[0_0_30px_rgba(34,211,238,0.12)]
        "
        >

          <p
            className="
            text-[11px]
            sm:text-xs

            uppercase

            tracking-[5px]

            text-cyan-200
          "
          >
            Powering Progress Since 2010
          </p>

        </motion.div>

        {/* 🔥 SUBTITLE */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{
            duration: 0.9,
            delay: 0.4,
          }}
          className="
          mt-10

          text-2xl
          sm:text-3xl
          md:text-5xl

          font-bold

          text-white/95
        "
        >
          Powering India’s Future
        </motion.h2>

        {/* 🔥 DESCRIPTION */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{
            duration: 0.9,
            delay: 0.6,
          }}
          className="
          mt-8

          max-w-3xl

          text-base
          sm:text-lg
          md:text-xl

          text-gray-200

          leading-[1.9]
        "
        >

          Experts in Transmission Line,
          Tower Erection, Foundation,
          Hotline Stringing and Infrastructure
          Projects across India.

        </motion.p>

        {/* 🔥 BUTTONS */}
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

          flex flex-wrap
          items-center justify-center

          gap-6
        "
        >

          {/* 🔥 VIEW PROJECTS */}
          <Link href="/projects">

            <MagneticButton>

              <div className="flex items-center gap-3">

                View Projects

                <ArrowRight size={18} />

              </div>

            </MagneticButton>

          </Link>

          {/* 🔥 CONTACT BUTTON */}
          <Link href="/contact">

            <button
              className="
              group

              px-8 py-4

              rounded-full

              border border-white/15

              bg-white/10
              backdrop-blur-xl

              text-white
              font-semibold

              shadow-[0_0_25px_rgba(255,255,255,0.05)]

              transition-all duration-300

              hover:bg-white/20
              hover:border-cyan-400/40
              hover:text-cyan-300
              hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
            "
            >
              Contact Us
            </button>

          </Link>

        </motion.div>

      </div>

      {/* 🔥 SCROLL INDICATOR */}
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
        bottom-8
        left-1/2
        -translate-x-1/2

        z-20

        cursor-pointer

        flex flex-col
        items-center

        text-white/50

        hover:text-cyan-300

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

      {/* 🔥 BOTTOM FADE */}
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