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

/* ======================================== */
/* STATS DATA */
/* ======================================== */

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

/* ======================================== */
/* STAT ITEM COMPONENT */
/* ======================================== */

function StatItem({
  item,
  i,
}: {
  item: { value: number; suffix: string; label: string; icon: React.ReactNode; color: string };
  i: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);

          let start = 0;
          const end = item.value;
          const duration = 1800;
          const increment = end / (duration / 16);

          const animate = () => {
            start += increment;
            if (start < end) {
              setCount(Math.floor(start));
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          animate();
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [item.value, started]);

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
        y: -10,
        scale: 1.02,
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

        border

        border-slate-200
        dark:border-white/10

        bg-white
        dark:bg-white/[0.04]

        backdrop-blur-2xl

        p-6
        md:p-8

        shadow-[0_10px_40px_rgba(0,0,0,0.08)]

        dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]

        transition-all duration-500
      "
    >
      {/* CARD GLOW */}

      <div
        className={`
          absolute inset-0

          opacity-0
          group-hover:opacity-20

          transition duration-700

          bg-gradient-to-br
          ${item.color}

          blur-3xl
        `}
      />

      {/* INNER BORDER */}

      <div
        className="
          absolute inset-[1px]

          rounded-[30px]

          border

          border-slate-200/30
          dark:border-white/5
        "
      />

      {/* CONTENT */}

      <div
        className="
          relative z-10
        "
      >
        {/* ICON */}

        <div
          className={`
            w-16 h-16
            md:w-18 md:h-18

            rounded-2xl

            flex items-center
            justify-center

            text-2xl
            md:text-3xl

            bg-gradient-to-br
            ${item.color}

            text-white

            shadow-[0_0_30px_rgba(34,211,238,0.25)]

            mb-6

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
            text-4xl
            sm:text-5xl
            md:text-6xl

            font-black

            mb-3
          "
        >
          <span
            ref={ref}

            className="
              accent-number
            "
          >
            {count}
          </span>

          <span
            className="
              text-slate-900
              dark:text-white
            "
          >
            {item.suffix}
          </span>
        </h3>

        {/* LABEL */}

        <p
          className="
            text-slate-500
            dark:text-white/70

            text-xs
            sm:text-sm

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
}

/* ======================================== */
/* COMPONENT */
/* ======================================== */

export default function StatsBar() {

  return (

    <section
      id="stats"

      className="
        relative

        overflow-hidden

        py-24
        md:py-32

        bg-[var(--bg-soft)]
        section-surface

        text-slate-900
        dark:text-white
      "
    >

      {/* ======================================== */}
      {/* BACKGROUND GLOW */}
      {/* ======================================== */}

      <div
        className="
          absolute inset-0

          pointer-events-none
        "
      >

        <div
          className="
            absolute
            top-[-120px]
            left-[-120px]

            w-[400px]
            h-[400px]

            rounded-full

            bg-cyan-500/8
            dark:bg-cyan-500/10

            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]

            w-[400px]
            h-[400px]

            rounded-full

            bg-blue-500/8
            dark:bg-blue-500/10

            blur-[120px]
          "
        />

      </div>

      {/* ======================================== */}
      {/* GRID EFFECT */}
      {/* ======================================== */}

      <div
        className="
          absolute inset-0

          opacity-[0.04]

          [background-image:linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)]

          dark:[background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

          [background-size:60px_60px]
        "
      />

      {/* ======================================== */}
      {/* CONTAINER */}
      {/* ======================================== */}

      <div
        className="
          container-premium

          relative z-10
        "
      >

        {/* ======================================== */}
        {/* LABEL */}
        {/* ======================================== */}

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

            text-xs
            sm:text-sm

            uppercase

            tracking-[5px]

            section-label

            mb-5
          "
        >
          Our Impact
        </motion.p>

        {/* ======================================== */}
        {/* HEADING */}
        {/* ======================================== */}

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

            text-3xl
            sm:text-4xl
            md:text-6xl

            font-black

            leading-tight

            mb-14
            md:mb-20
          "
        >

          <span className="accent-heading">
            Infrastructure Excellence
          </span>

        </motion.h2>

        {/* ======================================== */}
        {/* GRID */}
        {/* ======================================== */}

        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4

            gap-5
            md:gap-7
          "
        >
          {stats.map((item, i) => (
            <StatItem key={i} item={item} i={i} />
          ))}
        </div>

      </div>

    </section>
  );
}