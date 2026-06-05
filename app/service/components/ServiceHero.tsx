"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import {
  ArrowDown,
  Sparkles,
  ShieldCheck,
  Zap,
  Building2,
} from "lucide-react";
import { useBrand } from "@/components/BrandContext";

const stats = [
  {
    number: "15+",
    label: "States Executed",
    icon: Building2,
  },

  {
    number: "500+",
    label: "Projects Completed",
    icon: ShieldCheck,
  },

  {
    number: "765kV",
    label: "Transmission Expertise",
    icon: Zap,
  },
];

export default function ServiceHero() {
  const { config: c, domain } = useBrand();

  const scrollToContent = () => {

    const el =
      document.getElementById("service-tabs");

    if (el) {

      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: "smooth",
      });

    }

  };

  return (

    <section
      id="service-hero"
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

      {/* ======================================== */}
      {/* BG IMAGE */}
      {/* ======================================== */}

      <Image
        src={`/${domain}/services/ServiceBg1.webp`}
        alt={`${c.name} - Transmission Line Construction Services`}
        fill
        priority

        className="
        object-cover
        object-center

        scale-110

        opacity-40
      "
      />

      {/* OVERLAY */}
      <div
        className="
        absolute inset-0

        bg-white/55
        dark:bg-[#020617]/85
      "
      />

      {/* LEFT GRADIENT */}
      <div
        className="
        absolute inset-0

        bg-gradient-to-r
        from-slate-100/95
        via-slate-100/80
        to-slate-100/20
        dark:from-[#020617]
        dark:via-[#020617]/80
        dark:to-[#020617]/20
      "
      />

      {/* GRID */}
      <div
        className="
        absolute inset-0

        opacity-[0.03]

        [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

        [background-size:70px_70px]
      "
      />

      {/* GLOW */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
          absolute

          top-0
          left-0

          w-[650px]
          h-[650px]

          bg-cyan-500/10

          blur-[160px]
        "
        />

        <div
          className="
          absolute

          bottom-0
          right-0

          w-[500px]
          h-[500px]

          bg-blue-500/10

          blur-[140px]
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

        w-full

        pt-32
        pb-24
      "
      >

        {/* TOP BADGE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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

          px-5 py-3

          rounded-full

          border border-white/10

          bg-white/[0.04]

          backdrop-blur-2xl

          shadow-[0_0_30px_rgba(34,211,238,0.08)]

          mb-8
        "
        >

          <Sparkles
            size={15}
            className="text-cyan-400"
          />

          <span
            className="
            text-[11px]

            tracking-[4px]

            text-slate-700 dark:text-white/80
          "
          >
            {c.name.toUpperCase()} EPC SERVICES
          </span>

        </motion.div>

        {/* MAIN GRID */}
        <div
          className="
          grid
          lg:grid-cols-[1.1fr_0.9fr]

          gap-14

          items-center
        "
        >

          {/* ======================================== */}
          {/* LEFT */}
          {/* ======================================== */}

          <div>

            {/* TITLE */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 60,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.9,
              }}

              className="
              text-[42px]
              sm:text-[60px]
              md:text-[82px]

              leading-[0.95]

              font-black

              tracking-[-3px]

              text-slate-900
              dark:text-white
            "
            >

              Engineering

              <span
                className="
                block

                mt-3

                gradient-text
              "
              >
                Reliable Infrastructure
              </span>

            </motion.h1>

            {/* LINE */}
            <motion.div
              initial={{
                width: 0,
              }}

              animate={{
                width: "130px",
              }}

              transition={{
                delay: 0.8,
                duration: 0.7,
              }}

              className="
              h-[4px]

              bg-cyan-400

              rounded-full

              mt-8
              mb-8
            "
            />

            {/* TEXT */}
            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 0.5,
              }}

              className="
              text-slate-600 dark:text-white/70

              text-sm
              md:text-lg

              leading-[2]

              max-w-2xl
            "
            >
              {c.name} delivers premium EPC
              infrastructure solutions across transmission,
              tower foundation, erection, and stringing
              services with engineering precision,
              operational safety, and nationwide execution
              excellence.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 0.8,
              }}

              className="
              flex
              flex-wrap

              gap-4

              mt-10
            "
            >

              <button
                onClick={scrollToContent}

                className="
                px-7 py-4

                rounded-2xl

                bg-cyan-400

                text-black

                font-semibold

                hover:scale-105

                transition-all duration-300
              "
              >
                Explore Services
              </button>

              <button
                className="
                px-7 py-4

                rounded-2xl

                border border-slate-300/60
                dark:border-white/10

                bg-white/80
                dark:bg-white/[0.04]

                backdrop-blur-xl

                text-slate-800
                dark:text-white

                hover:border-cyan-500/30
                dark:hover:border-cyan-400/20
                hover:bg-cyan-400/5

                transition-all duration-300
              "
              >
                View Projects
              </button>

            </motion.div>

          </div>

          {/* ======================================== */}
          {/* RIGHT PREMIUM FLOAT CARD */}
          {/* ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 1,
            }}

            className="
            relative
          "
          >

            {/* FLOAT CARD */}
            <div
              className="
              relative

              overflow-hidden

              rounded-[34px]

              border border-white/10

              bg-white/[0.04]

              backdrop-blur-3xl

              p-5

              shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            "
            >

              {/* IMAGE */}
              <div
                className="
                relative

                h-[460px]

                rounded-[28px]

                overflow-hidden
              "
              >

                <Image
                  src={`/${domain}/services/ServiceBg2.webp`}
                  alt={`${c.name} Services`}
                  fill

                  className="
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
                  from-[#020617]
                  via-[#020617]/20
                  to-transparent
                "
                />

              </div>

              {/* FLOAT BADGE */}
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

                bottom-10
                left-10

                px-5 py-4

                rounded-2xl

                border border-cyan-400/20

                bg-[#08101f]/80

                backdrop-blur-2xl

                shadow-[0_0_40px_rgba(34,211,238,0.15)]
              "
              >

                <p
                  className="
                  text-[11px]

                  tracking-[4px]

                  text-cyan-300

                  mb-2
                "
                >
                  INFRASTRUCTURE EXCELLENCE
                </p>

                <h3
                  className="
                  text-2xl

                  font-black
                "
                >
                  End-to-End EPC
                </h3>

              </motion.div>

            </div>

          </motion.div>

        </div>

        {/* ======================================== */}
        {/* STATS */}
        {/* ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 1,
          }}

          className="
          mt-20

          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3

          gap-5
        "
        >

          {stats.map((item, i) => (

            <motion.div
              key={i}

              whileHover={{
                y: -8,
                scale: 1.02,
              }}

              className="
              group

              relative

              overflow-hidden

              rounded-[28px]

              border border-white/10

              bg-white/[0.04]

              backdrop-blur-2xl

              p-7

              hover:border-cyan-400/20

              transition-all duration-500
            "
            >

              {/* HOVER GLOW */}
              <div
                className="
                absolute inset-0

                opacity-0

                group-hover:opacity-100

                transition duration-500

                bg-gradient-to-br
                from-cyan-500/10
                via-transparent
                to-blue-500/10
              "
              />

              <div className="relative z-10">

                {/* ICON */}
                <div
                  className="
                  w-14 h-14

                  rounded-2xl

                  bg-cyan-400/10

                  border border-cyan-400/20

                  flex items-center justify-center

                  mb-6
                "
                >

                  <item.icon
                    size={26}
                    className="text-cyan-300"
                  />

                </div>

                {/* NUMBER */}
                <h3
                  className="
                  text-4xl

                  font-black

                  text-cyan-300

                  mb-3
                "
                >
                  {item.number}
                </h3>

                {/* LABEL */}
                <p
                  className="
                  text-slate-600 dark:text-white/65

                  text-sm
                  md:text-base
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

        flex
        flex-col

        items-center

        text-slate-500 dark:text-white/50

        hover:text-cyan-400

        transition
      "
      >

        <span
          className="
          text-[10px]

          tracking-[4px]

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

          <ArrowDown size={20} />

        </motion.div>

      </motion.div>

    </section>

  );

}