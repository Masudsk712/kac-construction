"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const stats = [
  { value: 150, suffix: "+", label: "Towers Completed" },
  { value: 50, suffix: "+", label: "Ongoing Projects" },
  { value: 10, suffix: "+", label: "States Covered" },
  { value: 765, suffix: "kV", label: "Transmission Capacity" },
];

export default function StatsBar() {
  const statsRef = useRef<HTMLDivElement>(null);

  // 🔥 Count Up Animation
  useEffect(() => {
    if (!statsRef.current) return;

    const numbers = statsRef.current.querySelectorAll(".count");

    numbers.forEach((num: any) => {
      const final = parseInt(num.getAttribute("data-value"));

      gsap.fromTo(
        num,
        { innerText: 0 },
        {
          innerText: final,
          duration: 1.5,
          snap: { innerText: 1 },
          ease: "power2.out",
        }
      );
    });
  }, []);

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

      {/* Stats Grid */}
      <div
        ref={statsRef}
        className="grid md:grid-cols-4 gap-8 w-[90%] max-w-6xl mx-auto"
      >
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="group relative p-10 rounded-2xl bg-[#111827] border border-white/10 text-center overflow-hidden"
          >

            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl" />

            {/* Number */}
            <h2 className="text-5xl font-bold text-cyan-400 mb-3">
              <span
                className="count"
                data-value={item.value}
              >
                0
              </span>
              {item.suffix}
            </h2>

            {/* Label */}
            <p className="text-gray-400 text-sm uppercase tracking-wide">
              {item.label}
            </p>

          </motion.div>
        ))}
      </div>
    </section>
  );
}