"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import {
  FaBroadcastTower,
  FaTools,
  FaMapMarkedAlt,
  FaBolt,
} from "react-icons/fa";

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Towers Completed",
    icon: <FaBroadcastTower />,
  },
  {
    value: 50,
    suffix: "+",
    label: "Ongoing Projects",
    icon: <FaTools />,
  },
  {
    value: 10,
    suffix: "+",
    label: "States Covered",
    icon: <FaMapMarkedAlt />,
  },
  {
    value: 765,
    suffix: "kV",
    label: "Transmission Capacity",
    icon: <FaBolt />,
  },
];

// 🔥 PRO HOOK
function useCountUpOnView(end: number, duration = 1500) {
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
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration, started]);

  return { count, ref };
}

export default function StatsBar() {
  return (
    <section className="py-28 bg-[#020617] text-white">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-bold text-cyan-400 mb-16"
      >
        Our Impact
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-[90%] max-w-6xl mx-auto">
        {stats.map((item, i) => {
          const { count, ref } = useCountUpOnView(item.value);

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.07 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative p-8 rounded-2xl bg-[#111827] border border-white/10 text-center overflow-hidden"
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl" />

              {/* Icon */}
              <div className="text-3xl text-cyan-400 mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Number */}
              <h2 className="text-4xl font-bold text-white">
                <span ref={ref} className="text-cyan-400">
                  {count}
                </span>
                {item.suffix}
              </h2>

              {/* Label */}
              <p className="text-gray-400 text-sm mt-2 uppercase tracking-wide">
                {item.label}
              </p>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}