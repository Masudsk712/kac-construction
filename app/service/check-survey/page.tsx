"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Route,
  Mountain,
  ClipboardCheck,
  ArrowRight,
  MapPinned,
  Sparkles,
  CheckCircle2,
  Phone,
} from "lucide-react";

import CTASection from "@/components/CTASection";

/* ======================================== */
/* PROCESS */
/* ======================================== */

const process = [
  {
    title: "Route Identification",

    desc:
      "Initial transmission corridor identification based on terrain, accessibility and project requirements.",

    extra:
      "Kuddus Ali Construction performs route identification using advanced mapping systems, feasibility checks and terrain analysis to optimize transmission line alignment and execution efficiency.",

    icon: <Route size={28} />,
  },

  {
    title: "Terrain Analysis",

    desc:
      "Detailed land profiling, topography analysis and environmental assessment for accurate alignment.",

    extra:
      "Our engineering team evaluates geographical conditions, obstacles, soil conditions and environmental factors to ensure safe and optimized project planning.",

    icon: <Mountain size={28} />,
  },

  {
    title: "Feasibility Planning",

    desc:
      "Engineering evaluation ensuring optimized tower spotting and transmission route efficiency.",

    extra:
      "Detailed feasibility studies help improve construction execution, reduce operational risks and ensure engineering compliance before project initiation.",

    icon: <ClipboardCheck size={28} />,
  },
];

/* ======================================== */
/* HIGHLIGHTS */
/* ======================================== */

const highlights = [
  "Route optimization & alignment",

  "Terrain & accessibility analysis",

  "Engineering feasibility validation",

  "Transmission corridor planning",
];

/* ======================================== */
/* GALLERY */
/* ======================================== */

const gallery = [
  "kacgroups/services/CheckSurvey/CheckSurvey1.webp",
  "kacgroups/services/CheckSurvey/CheckSurvey2.webp",
  "kacgroups/services/CheckSurvey/CheckSurvey3.webp",
];

export default function PreliminarySurveyPage() {

  const [activeStep, setActiveStep] =
    useState<number | null>(null);

  /* ======================================== */
  /* LEARN MORE */
  /* ======================================== */

  const handleLearnMore = (
    index: number
  ) => {

    if (activeStep === index) {

      setActiveStep(null);

    } else {

      setActiveStep(index);

    }

  };

  return (

    <main
      className="
      relative
      overflow-hidden
      section-surface
      bg-[var(--bg-soft)]
      dark:bg-[#020617]
      text-slate-900
      dark:text-white
    "
    >

      {/* GRID BG */}
      <div
        className="
        absolute inset-0
        opacity-[0.03]
        [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        [background-size:60px_60px]
      "
      />

      {/* ======================================== */}
      {/* HERO */}
      {/* ======================================== */}

      <section
        className="
        page-hero
        relative
        min-h-screen
        flex items-center
        overflow-hidden
      "
      >

        {/* BG IMAGE */}
        <Image
          src="kacgroups/services/CheckSurvey/CheckSurvey4.webp"
          alt="Survey Hero"
          fill
          priority
          className="
          object-cover
          scale-105
        "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 hero-page-overlay" />

        {/* GRADIENT */}
        <div className="absolute inset-0 hero-page-gradient" />

        {/* GLOW */}
        <div
          className="
          absolute
          top-0 left-0
          w-[600px] h-[600px]
          bg-cyan-500/10
          blur-[160px]
        "
        />

        <div
          className="
          absolute
          bottom-0 right-0
          w-[500px] h-[500px]
          bg-blue-500/10
          blur-[140px]
        "
        />

        {/* CONTENT */}
        <div
          className="
          relative z-10
          max-w-7xl
          mx-auto
          px-6
          grid lg:grid-cols-2
          gap-16
          items-center
        "
        >

          {/* LEFT */}
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
              duration: 1,
            }}
          >

            {/* BADGE */}
            <div
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
                text-xs
                tracking-[4px]
                text-cyan-300
              "
              >
                SURVEY SERVICES
              </span>

            </div>

            {/* SMALL TEXT */}
            <p
              className="
              uppercase
              tracking-[6px]
              text-cyan-400
              text-sm
              mb-6
            "
            >
              Preliminary Survey
            </p>

            {/* HEADING */}
            <h1
              className="
              text-5xl
              md:text-7xl
              font-black
              leading-[0.95]
              tracking-[-2px]
              mb-8
            "
            >

              Smart Route

              <span className="block text-cyan-400 mt-3">
                Planning Solutions
              </span>

            </h1>

            {/* DESC */}
            <p
              className="
              text-gray-300
              text-lg
              leading-[1.9]
              max-w-2xl
              mb-10
            "
            >
              Kuddus Ali Construction delivers advanced
              preliminary survey services for
              transmission infrastructure projects
              with precise route alignment and
              terrain feasibility analysis.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">

              {/* EXPLORE */}
              <motion.a
                href="#process"

                whileHover={{
                  scale: 1.05,
                }}

                whileTap={{
                  scale: 0.96,
                }}

                className="
                inline-flex
                items-center
                gap-3
                px-8 py-4
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                text-black
                font-semibold
                cursor-pointer
                shadow-[0_0_40px_rgba(34,211,238,0.25)]
              "
              >

                Explore Services

                <ArrowRight size={18} />

              </motion.a>

              {/* CONTACT BUTTON */}
              <Link
                href="/contact"
                className="inline-block"
              >

                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}

                  whileTap={{
                    scale: 0.96,
                  }}

                  className="
                  inline-flex
                  items-center
                  gap-3
                  px-8 py-4
                  rounded-full
                  border border-white/15
                  bg-white/[0.03]
                  backdrop-blur-xl
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/10
                  transition-all duration-300
                  cursor-pointer
                "
                >

                  <Phone size={18} />

                  Contact Us

                </motion.div>

              </Link>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
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
              duration: 1,
            }}

            className="relative"
          >

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
              bg-white/[0.03]
              backdrop-blur-3xl
              p-4
            "
            >

              <Image
                src="kacgroups/services/CheckSurvey/CheckSurvey5.webp"
                alt="Survey"

                width={700}
                height={500}

                className="
                rounded-[28px]
                object-cover
                w-full
                h-[520px]
              "
              />

            </motion.div>

            {/* FLOAT CARD */}
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
                delay: 0.4,
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
                  w-12 h-12
                  rounded-2xl
                  bg-cyan-400/10
                  border border-cyan-400/20
                  flex items-center justify-center
                  text-cyan-300
                "
                >

                  <MapPinned size={22} />

                </div>

                <div>

                  <h4 className="font-bold">
                    500+
                  </h4>

                  <p className="text-xs text-gray-300">
                    Successful Route Surveys
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* ======================================== */}
      {/* OVERVIEW */}
      {/* ======================================== */}

      <section className="relative py-28">

        <div
          className="
          absolute
          top-0 left-0
          w-[500px] h-[500px]
          bg-cyan-500/10
          blur-[140px]
        "
        />

        <div
          className="
          max-w-7xl
          mx-auto
          px-6
          grid lg:grid-cols-2
          gap-20
          items-center
        "
        >

          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.9,
            }}
          >

            <div
              className="
              relative
              rounded-[36px]
              overflow-hidden
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-3xl
              p-4
            "
            >

              <Image
                src="kacgroups/services/CheckSurvey/CheckSurvey6.webp"
                alt="Overview"

                width={700}
                height={550}

                className="
                rounded-[28px]
                object-cover
                w-full
                h-[520px]
              "
              />

            </div>

          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.9,
            }}
          >

            <p
              className="
              uppercase
              tracking-[5px]
              text-cyan-400
              text-sm
              mb-5
            "
            >
              Route Optimization
            </p>

            <h2
              className="
              text-4xl
              md:text-6xl
              font-black
              leading-[1]
              mb-8
            "
            >

              Survey Based

              <span className="block text-cyan-400 mt-3">
                Engineering Planning
              </span>

            </h2>

            <p
              className="
              text-gray-300
              leading-[1.9]
              text-lg
              mb-10
            "
            >
              Our preliminary survey solutions
              ensure optimized transmission routing,
              terrain accessibility evaluation and
              accurate engineering feasibility
              before project execution.
            </p>

            {/* HIGHLIGHTS */}
            <div className="space-y-5">

              {highlights.map((item, i) => (

                <motion.div
                  key={i}

                  initial={{
                    opacity: 0,
                    y: 30,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    delay: i * 0.15,
                  }}

                  whileHover={{
                    x: 8,
                  }}

                  className="
                  flex items-center gap-4
                  p-5
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  hover:border-cyan-400/40
                  hover:bg-cyan-400/[0.04]
                  transition-all duration-500
                "
                >

                  <div
                    className="
                    w-12 h-12
                    rounded-2xl
                    bg-cyan-400/10
                    border border-cyan-400/20
                    flex items-center justify-center
                    text-cyan-300
                  "
                  >

                    <CheckCircle2 size={22} />

                  </div>

                  <p className="text-gray-200">
                    {item}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>

      {/* ======================================== */}
      {/* PROCESS */}
      {/* ======================================== */}

      <section
        id="process"
        className="relative py-28"
      >

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <div className="text-center mb-20">

            <p
              className="
              uppercase
              tracking-[6px]
              text-cyan-400
              text-sm
              mb-5
            "
            >
              Survey Workflow
            </p>

            <h2
              className="
              text-4xl
              md:text-6xl
              font-black
            "
            >

              Our Survey

              <span className="block text-cyan-400 mt-3">
                Execution Process
              </span>

            </h2>

          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-8">

            {process.map((item, i) => {

              const expanded =
                activeStep === i;

              return (

                <motion.div
                  key={i}

                  initial={{
                    opacity: 0,
                    y: 50,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    delay: i * 0.2,
                  }}

                  whileHover={{
                    y: -10,
                  }}

                  className="
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  hover:border-cyan-400/30
                  transition-all duration-500
                "
                >

                  {/* ICON */}
                  <div
                    className="
                    w-16 h-16
                    rounded-2xl
                    bg-cyan-400/10
                    flex items-center justify-center
                    text-cyan-400
                    mb-8
                  "
                  >
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                    text-2xl
                    font-bold
                    mb-5
                  "
                  >
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p
                    className="
                    text-gray-400
                    leading-relaxed
                    mb-6
                  "
                  >
                    {item.desc}
                  </p>

                  {/* EXPAND TEXT */}
                  <AnimatePresence initial={false}>

                    {expanded && (

                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}

                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}

                        exit={{
                          opacity: 0,
                          height: 0,
                        }}

                        transition={{
                          duration: 0.4,
                        }}

                        className="overflow-hidden"
                      >

                        <div
                          className="
                          mt-5
                          p-5
                          rounded-2xl
                          border border-cyan-400/10
                          bg-cyan-400/[0.03]
                        "
                        >

                          <p
                            className="
                            text-white/70
                            leading-[1.9]
                            text-sm
                          "
                          >
                            {item.extra}
                          </p>

                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>

                  {/* BUTTON */}
                  <motion.button
                    type="button"

                    whileTap={{
                      scale: 0.96,
                    }}

                    onClick={() =>
                      handleLearnMore(i)
                    }

                    className="
                    flex items-center gap-3
                    mt-6
                    text-cyan-400
                    hover:gap-4
                    transition-all duration-300
                    cursor-pointer
                  "
                  >

                    {expanded
                      ? "Show Less"
                      : "Learn More"}

                    <ArrowRight
                      size={18}
                      className={`
                        transition-transform duration-300
                        ${expanded ? "rotate-90" : ""}
                      `}
                    />

                  </motion.button>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>

      {/* ======================================== */}
      {/* GALLERY */}
      {/* ======================================== */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <div className="text-center mb-16">

            <p
              className="
              uppercase
              tracking-[6px]
              text-cyan-400
              text-sm
              mb-5
            "
            >
              Project Media
            </p>

            <h2
              className="
              text-4xl
              md:text-5xl
              font-black
            "
            >

              Preliminary Survey

              <span className="block text-cyan-400 mt-3">
                Operations
              </span>

            </h2>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8">

            {gallery.map((img, i) => (

              <motion.div
                key={i}

                initial={{
                  opacity: 0,
                  y: 50,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: i * 0.2,
                }}

                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}

                className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-3xl
                p-3
              "
              >

                <Image
                  src={img}
                  alt="Survey"

                  width={500}
                  height={400}

                  className="
                  object-cover
                  h-[350px]
                  w-full
                  rounded-[24px]
                  group-hover:scale-110
                  transition duration-700
                "
                />

                <div
                  className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/80
                  to-transparent
                "
                />

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <CTASection />

    </main>

  );

}