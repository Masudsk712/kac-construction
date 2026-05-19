"use client";

import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import CountUp from "react-countup";

import {
  MapPinned,
  ClipboardCheck,
  Route,
  Ruler,
  ArrowUpRight,
} from "lucide-react";

/* ======================================== */
/* AUTO IMAGE SLIDER */
/* ======================================== */

const images = [
  "/service/ServiceSurvey1.webp",
  "/service/ServiceSurvey2.webp",
  "/service/ServiceSurvey3.webp",
];

/* ======================================== */
/* SERVICES */
/* ======================================== */

const surveyServices = [
  {
    icon: <MapPinned size={24} />,
    title: "Preliminary Survey",
    desc:
      "Initial route identification and terrain analysis for optimized project planning.",
    image: "/service/ServicePreSurvey.webp",
    link: "/service/preliminary-survey",
  },

  {
    icon: <ClipboardCheck size={24} />,
    title: "Detailed Survey",
    desc:
      "Comprehensive data collection including coordinates, profiles and alignment verification.",
    image: "/service/ServiceDetailSurvey.webp",
    link: "/service/detailed-survey",
  },

  {
    icon: <Route size={24} />,
    title: "Check Survey",
    desc:
      "Final validation survey ensuring engineering accuracy and project compliance.",
    image: "/service/ServiceCheckSurvey.webp",
    link: "/service/check-survey",
  },
];

/* ======================================== */
/* STATS */
/* ======================================== */

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "Routes Completed",
  },

  {
    number: 15,
    suffix: "+",
    label: "States Covered",
  },

  {
    number: 100,
    suffix: "%",
    label: "Precision Planning",
  },
];

export default function Survey() {

  const router = useRouter();

  const [currentImage, setCurrentImage] =
    useState(0);

  /* ======================================== */
  /* AUTO SLIDER */
  /* ======================================== */

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        prev === images.length - 1
          ? 0
          : prev + 1
      );

    }, 3500);

    return () => clearInterval(interval);

  }, []);

  return (

    <section
      id="survey"
      className="
      relative

      overflow-hidden

      py-24 md:py-28

      section-surface
      bg-[var(--bg-soft)]
      dark:bg-[#020617]

      text-slate-900
      dark:text-white
      "
    >

      {/* ======================================== */}
      {/* GRID BG */}
      {/* ======================================== */}

      <div
        className="
        absolute inset-0

        opacity-[0.04]

        [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

        [background-size:60px_60px]
        "
      />

      {/* ======================================== */}
      {/* BG GLOW */}
      {/* ======================================== */}

      <div
        className="
        absolute

        top-0
        left-0

        w-[500px]
        h-[500px]

        bg-cyan-500/10

        blur-[140px]
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

      {/* ======================================== */}
      {/* FLOATING PARTICLES */}
      {/* ======================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
          animate={{
            y: [0, -40, 0],
          }}

          transition={{
            duration: 6,
            repeat: Infinity,
          }}

          className="
          absolute

          top-[20%]
          left-[12%]

          w-3 h-3

          rounded-full

          bg-cyan-400/40

          blur-sm
          "
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
          }}

          transition={{
            duration: 8,
            repeat: Infinity,
          }}

          className="
          absolute

          bottom-[20%]
          right-[15%]

          w-4 h-4

          rounded-full

          bg-blue-400/30

          blur-sm
          "
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ======================================== */}
        {/* MAIN GRID */}
        {/* ======================================== */}

        <div
          className="
          grid
          lg:grid-cols-2

          gap-16

          items-center
          "
        >

          {/* ======================================== */}
          {/* LEFT IMAGE */}
          {/* ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.9,
            }}

            className="relative"
          >

            {/* IMAGE BOX */}
            <div
              className="
              relative

              h-[350px]
              md:h-[520px]

              rounded-[32px]

              overflow-hidden

              border border-white/10

              bg-white/[0.03]

              backdrop-blur-3xl
              "
            >

              <AnimatePresence mode="wait">

                <motion.div
                  key={currentImage}

                  initial={{
                    scale: 1.12,
                    opacity: 0,
                  }}

                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}

                  exit={{
                    opacity: 0,
                  }}

                  transition={{
                    duration: 1,
                  }}

                  className="absolute inset-0"
                >

                  <Image
                    src={images[currentImage]}
                    alt="Survey Work"
                    fill
                    className="object-cover"
                  />

                </motion.div>

              </AnimatePresence>

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

            {/* FLOAT CARD */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                delay: 0.4,
              }}

              whileHover={{
                y: -6,
              }}

              className="
              absolute

              bottom-6
              right-6

              rounded-3xl

              border border-cyan-400/20

              bg-black/40

              backdrop-blur-3xl

              px-5 py-4

              shadow-[0_0_50px_rgba(34,211,238,0.20)]
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

                  <Ruler size={24} />

                </div>

                <div>

                  <h4 className="text-xl font-black">
                    Accurate
                  </h4>

                  <p className="text-xs text-gray-300">
                    Route & Terrain Mapping
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

          {/* ======================================== */}
          {/* RIGHT CONTENT */}
          {/* ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.9,
            }}
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

              bg-cyan-400/10

              backdrop-blur-xl

              mb-6
              "
            >

              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span
                className="
                text-xs

                tracking-[4px]

                text-cyan-300
                "
              >
                EPC SURVEY SOLUTIONS
              </span>

            </motion.div>

            {/* SUBTITLE */}
            <p
              className="
              uppercase

              tracking-[5px]

              text-cyan-400

              text-sm

              mb-5
              "
            >
              Survey Services
            </p>

            {/* HEADING */}
            <h2
              className="
              text-4xl
              md:text-6xl

              font-black

              leading-[1]

              mb-7
              "
            >

              Engineering Precision

              <span className="block text-cyan-400 mt-3">
                Starts Here
              </span>

            </h2>

            {/* DESC */}
            <p
              className="
              text-gray-300

              leading-[1.9]

              text-lg

              mb-10
              "
            >
              Kuddus Ali Construction delivers high-precision
              survey services for transmission line
              infrastructure projects across India.
            </p>

            {/* ======================================== */}
            {/* SERVICE CARDS */}
            {/* ======================================== */}

            <div className="space-y-5">

              {surveyServices.map((item, i) => (

                <motion.div
                  key={i}

                  initial={{
                    opacity: 0,
                    y: 40,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    delay: i * 0.15,
                  }}

                  whileHover={{
                    y: -6,
                    scale: 1.015,
                  }}

                  onClick={() =>
                    router.push(item.link)
                  }

                  className="
                  group

                  relative

                  overflow-hidden

                  cursor-pointer

                  flex items-center justify-between

                  gap-4

                  p-4

                  rounded-[28px]

                  border border-white/10

                  bg-white/[0.03]

                  backdrop-blur-2xl

                  hover:border-cyan-400/30

                  hover:bg-cyan-400/[0.04]

                  hover:shadow-[0_0_50px_rgba(34,211,238,0.10)]

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

                    bg-gradient-to-r
                    from-cyan-500/5
                    via-transparent
                    to-blue-500/5
                    "
                  />

                  <div className="relative z-10 flex gap-4 items-center">

                    {/* IMAGE */}
                    <div
                      className="
                      relative

                      min-w-[90px]

                      h-[90px]

                      rounded-2xl

                      overflow-hidden
                      "
                    >

                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />

                    </div>

                    {/* CONTENT */}
                    <div>

                      <h3
                        className="
                        text-xl

                        font-bold

                        mb-2
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                        text-gray-400

                        text-sm

                        leading-relaxed

                        max-w-lg
                        "
                      >
                        {item.desc}
                      </p>

                    </div>

                  </div>

                  {/* ARROW */}
                  <ArrowUpRight
                    className="
                    relative z-10

                    text-cyan-400

                    min-w-[22px]

                    group-hover:translate-x-1
                    group-hover:-translate-y-1

                    transition
                    "
                  />

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

        {/* ======================================== */}
        {/* DIVIDER */}
        {/* ======================================== */}

        <div
          className="
          w-full h-px

          bg-gradient-to-r
          from-transparent
          via-cyan-400/20
          to-transparent

          my-20
          "
        />

        {/* ======================================== */}
        {/* STATS */}
        {/* ======================================== */}

        <div
          className="
          grid
          md:grid-cols-3

          gap-6
          "
        >

          {stats.map((item, i) => (

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

              viewport={{
                once: true,
              }}

              transition={{
                delay: i * 0.15,
              }}

              whileHover={{
                y: -8,
                scale: 1.03,
              }}

              className="
              relative

              overflow-hidden

              text-center

              rounded-[32px]

              border border-cyan-400/10

              bg-white/[0.03]

              backdrop-blur-2xl

              py-12
              px-5

              hover:border-cyan-400/40

              transition-all duration-500
              "
            >

              {/* GLOW */}
              <div
                className="
                absolute
                -top-20
                -right-20

                w-40 h-40

                bg-cyan-400/10

                blur-3xl

                rounded-full
                "
              />

              <h3
                className="
                relative z-10

                text-5xl

                font-black

                text-cyan-400

                mb-3

                drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]
                "
              >

                <CountUp
                  end={item.number}
                  duration={2.5}
                />

                {item.suffix}

              </h3>

              <p
                className="
                relative z-10

                text-gray-300

                text-sm

                tracking-wide
                "
              >
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}