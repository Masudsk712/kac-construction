"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden text-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0a192f] to-[#0f172a] animate-gradient"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6">

        {[500, 1200, 15, 10].map((num, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:scale-110 hover:shadow-[0_0_60px_rgba(0,255,255,0.3)] transition-all duration-500"
          >
            <h2 className="text-5xl font-bold text-cyan-400">
              {inView && <CountUp end={num} duration={3} />}
              {i !== 1 ? "+" : " KM"}
            </h2>

            <p className="mt-4 text-gray-400">
              {i === 0 && "Transmission Towers Installed"}
              {i === 1 && "Stringing Completed"}
              {i === 2 && "Major Clients"}
              {i === 3 && "Years Experience"}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
