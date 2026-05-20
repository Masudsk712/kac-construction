"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Zap,
  RadioTower,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    number: "15+",
    label: "Years Experience",
    icon: <ShieldCheck size={20} />,
  },
  {
    number: "500+",
    label: "Projects Delivered",
    icon: <RadioTower size={20} />,
  },
  {
    number: "765kV",
    label: "Transmission Expertise",
    icon: <Zap size={20} />,
  },
];

export default function Hero() {

  const scrollToContent = () => {
    const el = document.getElementById("StickyTabs");

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
      page-hero
      relative
      min-h-screen
      overflow-hidden
      bg-slate-100
      dark:bg-[#020617]
      flex items-center
      "
    >

      {/* ================================================= */}
      {/* 🔥 CINEMATIC BACKGROUND */}
      {/* ================================================= */}

      <Image
        src="/about/AboutTower1.webp"
        alt="Kuddus Ali Construction - About Our Transmission Line Infrastructure Company"
        fill
        priority
        className="
        object-cover
        object-center
        scale-105
        brightness-[0.88]
        dark:brightness-[0.45]
        "
      />

      {/* VIDEO STYLE OVERLAY */}
      <div className="absolute inset-0 bg-white/45 dark:bg-black/40" />

      {/* GRADIENT */}
      <div
        className="
        absolute inset-0

        bg-gradient-to-r
        from-slate-100/95
        via-slate-100/70
        to-slate-100/30
        dark:from-[#020617]
        dark:via-[#020617]/70
        dark:to-[#020617]/30
        "
      />

      {/* TOP LIGHT */}
      <div
        className="
        absolute top-[-200px] left-[-200px]

        w-[700px]
        h-[700px]

        bg-cyan-500/15
        blur-[160px]
        rounded-full
      "
      />

      {/* RIGHT LIGHT */}
      <div
        className="
        absolute bottom-[-180px] right-[-180px]

        w-[600px]
        h-[600px]

        bg-blue-500/15
        blur-[150px]
        rounded-full
      "
      />

      {/* GRID */}
      <div
        className="
        absolute inset-0
        opacity-[0.04]

        [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]

        [background-size:80px_80px]
      "
      />

      {/* ================================================= */}
      {/* 🔥 CONTENT */}
      {/* ================================================= */}

      <div
        className="
        relative z-10
        container-premium
        w-full
        pt-36
        pb-40
      "
      >

        {/* BADGE */}
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

          px-6 py-3

          rounded-full

          border border-white/10

          bg-white/[0.04]
          backdrop-blur-2xl

          shadow-[0_10px_40px_rgba(0,0,0,0.35)]

          mb-10
        "
        >

          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

          <span
            className="
            text-[11px]
            tracking-[5px]
            text-slate-700 dark:text-white/80
          "
          >
            ABOUT KUDDUS ALI CONSTRUCTION
          </span>

        </motion.div>

        {/* HERO TEXT */}
        <div className="max-w-6xl">

          {/* HEADING */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 80,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 1,
            }}

            className="
            text-[52px]
            md:text-[110px]

            leading-[0.9]

            font-black

            tracking-[-5px]

            text-slate-900
            dark:text-white
          "
          >

            Building India’s

            <span
              className="
              block

              mt-4

              bg-gradient-to-r
              from-cyan-300
              via-blue-400
              to-cyan-200

              bg-clip-text
              text-transparent

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
              delay: 0.7,
              duration: 0.8,
            }}

            className="
            h-[4px]
            rounded-full

            bg-gradient-to-r
            from-cyan-400
            to-blue-500

            mt-12
            mb-10
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
              duration: 0.8,
            }}

            className="
            text-lg
            md:text-[22px]

            text-slate-600 dark:text-white/70

            leading-[2]

            max-w-4xl
          "
          >

            Kuddus Ali Construction delivers high-performance
            transmission infrastructure solutions including
            tower foundation, erection, hotline stringing,
            HTLS reconductoring and EPC execution projects
            with engineering precision across India.

          </motion.p>

        </div>

        {/* ================================================= */}
        {/* 🔥 STATS */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 1,
            duration: 0.8,
          }}

          className="
          grid
          md:grid-cols-3

          gap-6

          mt-20

          max-w-6xl
        "
        >

          {stats.map((item, i) => (

            <motion.div
              key={i}

              whileHover={{
                y: -10,
                scale: 1.02,
              }}

              transition={{
                duration: 0.4,
              }}

              className="
              group
              relative

              overflow-hidden

              rounded-[32px]

              border border-white/10

              bg-black/30
              backdrop-blur-2xl

              p-8

              shadow-[0_20px_60px_rgba(0,0,0,0.45)]
            "
            >

              {/* HOVER LIGHT */}
              <div
                className="
                absolute inset-0

                opacity-0
                group-hover:opacity-100

                transition duration-500

                bg-gradient-to-r
                from-cyan-500/10
                to-blue-500/10
              "
              />

              {/* CONTENT */}
              <div className="relative z-10">

                {/* ICON */}
                <div
                  className="
                  w-14 h-14

                  rounded-2xl

                  bg-cyan-400/10
                  border border-cyan-400/20

                  flex items-center justify-center

                  text-cyan-400

                  mb-6
                "
                >
                  {item.icon}
                </div>

                {/* NUMBER */}
                <h3
                  className="
                  text-5xl
                  md:text-6xl

                  font-black

                  text-slate-900
                  dark:text-white

                  mb-4
                "
                >
                  <span
                    className="
                    bg-gradient-to-r
                    from-cyan-300
                    to-blue-400

                    bg-clip-text
                    text-transparent
                  "
                  >
                    {item.number}
                  </span>
                </h3>

                {/* LABEL */}
                <p
                  className="
                  text-slate-600 dark:text-white/65
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

      {/* ================================================= */}
      {/* 🔥 SCROLL INDICATOR */}
      {/* ================================================= */}

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

        text-slate-500 dark:text-white/50

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
          SCROLL
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

        w-full h-24

        bg-gradient-to-b
        from-transparent
        to-[#020617]
      "
      />

    </section>
  );
}