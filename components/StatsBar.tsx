"use client";

import { motion } from "framer-motion";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  FaBroadcastTower,
  FaTools,
  FaMapMarkedAlt,
  FaBolt,
} from "react-icons/fa";

/* ============================= */
/* 🔥 STATS DATA */
/* ============================= */

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Towers Completed",

    icon: <FaBroadcastTower />,

    color:
      "from-cyan-400 to-blue-500",
  },

  {
    value: 50,
    suffix: "+",
    label: "Ongoing Projects",

    icon: <FaTools />,

    color:
      "from-blue-400 to-cyan-400",
  },

  {
    value: 10,
    suffix: "+",
    label: "States Covered",

    icon: <FaMapMarkedAlt />,

    color:
      "from-cyan-300 to-sky-500",
  },

  {
    value: 765,
    suffix: "kV",
    label: "Transmission Capacity",

    icon: <FaBolt />,

    color:
      "from-sky-400 to-cyan-300",
  },
];

/* ============================= */
/* 🔥 COUNT ANIMATION */
/* ============================= */

function useCountUpOnView(
  end: number,
  duration = 1800
) {

  const [count, setCount] =
    useState(0);

  const ref =
    useRef<HTMLSpanElement | null>(null);

  const [started, setStarted] =
    useState(false);

  useEffect(() => {

    if (!ref.current) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {

          if (
            entry.isIntersecting &&
            !started
          ) {

            setStarted(true);

            let start = 0;

            const increment =
              end / (duration / 16);

            const animate = () => {

              start += increment;

              if (start < end) {

                setCount(
                  Math.floor(start)
                );

                requestAnimationFrame(
                  animate
                );

              } else {

                setCount(end);

              }
            };

            animate();
          }
        },

        {
          threshold: 0.5,
        }
      );

    observer.observe(ref.current);

    return () =>
      observer.disconnect();

  }, [end, duration, started]);

  return {
    count,
    ref,
  };
}

/* ============================= */
/* 🔥 COMPONENT */
/* ============================= */

export default function StatsBar() {

  return (
    <section
      id="stats"
      className="
      relative
      py-28
      overflow-hidden

      bg-[#020617]
      text-white
    "
    >

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
          absolute
          top-[-120px]
          left-[-120px]

          w-[400px]
          h-[400px]

          bg-cyan-500/10
          blur-[120px]
          rounded-full
        "
        />

        <div
          className="
          absolute
          bottom-[-120px]
          right-[-120px]

          w-[400px]
          h-[400px]

          bg-blue-500/10
          blur-[120px]
          rounded-full
        "
        />

      </div>

      {/* 🔥 GRID EFFECT */}
      <div
        className="
        absolute inset-0

        opacity-[0.03]

        [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]

        [background-size:60px_60px]
      "
      />

      <div className="container-premium relative z-10">

        {/* 🔥 TOP LABEL */}
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
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}

          className="
          text-center

          text-sm
          uppercase

          tracking-[6px]

          text-cyan-300/80

          mb-5
        "
        >
          Our Impact
        </motion.p>

        {/* 🔥 HEADING */}
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
          text-center

          text-4xl
          md:text-6xl

          font-black

          leading-tight

          mb-18
        "
        >

          <span
            className="
            bg-gradient-to-r
            from-cyan-300
            via-blue-400
            to-cyan-200

            bg-clip-text
            text-transparent

            drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]
          "
          >
            Infrastructure Excellence
          </span>

        </motion.h2>

        {/* 🔥 GRID */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4

          gap-8
        "
        >

          {stats.map((item, i) => {

            const {
              count,
              ref,
            } =
              useCountUpOnView(
                item.value
              );

            return (
              <motion.div
                key={i}

                initial={{
                  opacity: 0,
                  y: 60,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}

                transition={{
                  delay: i * 0.12,
                  duration: 0.5,
                }}

                viewport={{
                  once: true,
                }}

                className="
                group
                relative

                overflow-hidden

                rounded-[30px]

                border border-white/10

                bg-white/[0.04]
                backdrop-blur-2xl

                p-8
              "
              >

                {/* 🔥 CARD GLOW */}
                <div
                  className={`
                  absolute inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition duration-700

                  bg-gradient-to-br
                  ${item.color}

                  blur-3xl
                `}
                />

                {/* 🔥 BORDER LIGHT */}
                <div
                  className="
                  absolute inset-[1px]

                  rounded-[30px]

                  border border-white/5
                "
                />

                {/* 🔥 CONTENT */}
                <div className="relative z-10">

                  {/* ICON */}
                  <div
                    className={`
                    w-18 h-18

                    rounded-2xl

                    flex items-center justify-center

                    text-3xl

                    bg-gradient-to-br
                    ${item.color}

                    text-white

                    shadow-[0_0_30px_rgba(34,211,238,0.25)]

                    mb-7

                    transition duration-500

                    group-hover:scale-110
                    group-hover:rotate-3
                  `}
                  >

                    {item.icon}

                  </div>

                  {/* NUMBER */}
                  <h3
                    className="
                    text-5xl
                    md:text-6xl

                    font-black

                    mb-3
                  "
                  >

                    <span
                      ref={ref}

                      className="
                      bg-gradient-to-r
                      from-cyan-300
                      via-blue-400
                      to-cyan-200

                      bg-clip-text
                      text-transparent
                    "
                    >
                      {count}
                    </span>

                    <span className="text-white">
                      {item.suffix}
                    </span>

                  </h3>

                  {/* LABEL */}
                  <p
                    className="
                    text-white/70

                    text-sm
                    uppercase

                    tracking-[3px]

                    leading-relaxed
                  "
                  >
                    {item.label}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}