"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import CountUp from "react-countup";

import {
  Cable,
  RadioTower,
  Zap,
  Flame,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

/* ======================================== */
/* AUTO IMAGE SLIDER */
/* ======================================== */

const images = [
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
];

/* ======================================== */
/* SERVICES */
/* ======================================== */

const services = [
  {
    icon: <Cable size={24} />,
    title: "Conductor Stringing",
    desc:
      "High-performance conductor pulling and installation across transmission corridors.",

    image: "/placeholder.jpg",

    link: "/service/stringing/conductor",
  },

  {
    icon: <RadioTower size={24} />,
    title: "Transmission Alignment",
    desc:
      "Accurate alignment and tension balancing for ultra high voltage lines.",

    image: "/placeholder.jpg",

    link: "/service/stringing/alignment",
  },

  {
    icon: <Zap size={24} />,
    title: "HTLS Reconductoring",
    desc:
      "Modern HTLS upgradation for improved transmission efficiency.",

    image: "/placeholder.jpg",

    link: "/service/stringing/htls",
  },

  {
    icon: <Flame size={24} />,
    title: "Hot Line Stringing",
    desc:
      "Advanced hot line execution without interrupting live power transmission.",

    image: "/placeholder.jpg",

    link: "/service/stringing/hotline",
  },
];

/* ======================================== */
/* STATS */
/* ======================================== */

const stats = [
  {
    number: 5000,
    suffix: "+ KM",
    label: "Transmission Line Stringing",
  },

  {
    number: 765,
    suffix: "kV",
    label: "Voltage Capability",
  },

  {
    number: 99.9,
    suffix: "%",
    label: "Execution Reliability",
  },
];

export default function Stringing() {

  const router = useRouter();

  const [currentImage, setCurrentImage] =
    useState(0);

  /* ======================================== */
  /* AUTO IMAGE CHANGE */
  /* ======================================== */

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        prev === images.length - 1
          ? 0
          : prev + 1
      );

    }, 3500);

    return () =>
      clearInterval(interval);

  }, []);

  return (

    <section
      id="stringing"
      className="
      relative

      overflow-hidden

      py-24 md:py-28

      bg-[#020617]

      text-white
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
      {/* CONTENT */}
      {/* ======================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ======================================== */}
        {/* GRID */}
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

            {/* MAIN IMAGE */}
            <div
              className="
              relative

              h-[350px]
              md:h-[500px]

              rounded-[36px]

              overflow-hidden

              border border-white/10

              bg-white/[0.03]

              backdrop-blur-3xl
              "
            >

              <Image
                src={images[currentImage]}
                alt="Stringing Work"
                fill
                className="
                object-cover

                transition-all duration-1000
                "
              />

              {/* OVERLAY */}
              <div
                className="
                absolute inset-0

                bg-gradient-to-t
                from-[#020617]/90
                via-transparent
                to-transparent
                "
              />

            </div>

            {/* FLOATING CARD */}
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

              bottom-5
              right-5

              bg-black/50

              backdrop-blur-3xl

              border border-cyan-400/20

              rounded-3xl

              px-5 py-4

              shadow-[0_0_40px_rgba(34,211,238,0.25)]
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

                  <Zap size={22} />

                </div>

                <div>

                  <h4
                    className="
                    text-lg

                    font-bold
                    "
                  >
                    Ultra High Voltage
                  </h4>

                  <p
                    className="
                    text-xs

                    text-gray-300
                    "
                  >
                    Advanced Stringing Execution
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

              mb-6
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
                STRINGING SERVICES
              </span>

            </div>

            {/* LABEL */}
            <p
              className="
              uppercase

              tracking-[5px]

              text-cyan-400

              text-sm

              mb-5
              "
            >
              Stringing Services
            </p>

            {/* HEADING */}
            <h2
              className="
              text-4xl
              md:text-6xl

              font-black

              leading-[1]

              mb-8
              "
            >

              Reliable Power

              <span className="block text-cyan-400 mt-3">
                Transmission Execution
              </span>

            </h2>

            {/* DESC */}
            <p
              className="
              text-gray-300

              leading-[1.9]

              text-lg

              mb-12
              "
            >
              Kuddus Ali Construction provides advanced
              stringing solutions for high-voltage
              transmission projects with precision
              engineering, modern equipment, and
              highly efficient execution standards.
            </p>

            {/* ======================================== */}
            {/* CLICKABLE CARDS */}
            {/* ======================================== */}

            <div className="space-y-5">

              {services.map((item, i) => (

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
                    x: 8,
                    scale: 1.01,
                  }}

                  onClick={() =>
                    router.push(item.link)
                  }

                  className="
                  group

                  cursor-pointer

                  relative

                  overflow-hidden

                  flex items-center justify-between

                  gap-4

                  p-4

                  rounded-[30px]

                  border border-white/10

                  bg-white/[0.03]

                  backdrop-blur-2xl

                  hover:border-cyan-400/40

                  hover:bg-cyan-400/[0.04]

                  hover:shadow-[0_0_35px_rgba(34,211,238,0.10)]

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
                    from-cyan-500/5
                    via-transparent
                    to-blue-500/5
                    "
                  />

                  <div
                    className="
                    relative z-10

                    flex gap-4 items-center
                    "
                  >

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

                        font-semibold

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
                delay: i * 0.2,
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

              backdrop-blur-xl

              py-12 px-5

              hover:border-cyan-400/40

              transition-all duration-500
              "
            >

              {/* GLOW */}
              <div
                className="
                absolute inset-0

                opacity-0

                hover:opacity-100

                transition duration-500

                bg-cyan-400/5

                blur-3xl
                "
              />

              <h3
                className="
                relative z-10

                text-5xl

                font-black

                text-cyan-400

                mb-3

                drop-shadow-[0_0_20px_rgba(34,211,238,0.45)]
                "
              >

                <CountUp
                  end={item.number}
                  duration={2.5}
                  decimals={
                    item.number === 99.9
                      ? 1
                      : 0
                  }
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