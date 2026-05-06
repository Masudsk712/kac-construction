"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const stats = [
  {
    number: "15+",
    label: "States Executed",
  },
  {
    number: "500+",
    label: "Projects Completed",
  },
  {
    number: "765kV",
    label: "Transmission Expertise",
  },
];

export default function ServiceHero() {
  const scrollToContent = () => {
    const el = document.getElementById("service-tabs");

    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="
      relative min-h-screen
      overflow-hidden
      flex items-center
      "
    >

      {/* BACKGROUND IMAGE */}
      <Image
        src="/placeholder.jpg"
        alt="Services Hero"
        fill
        priority
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* GRADIENT */}
      <div
        className="
        absolute inset-0
        bg-gradient-to-r
        from-[#020617]
        via-[#020617]/70
        to-transparent
        "
      />

      {/* LIGHT EFFECT */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        {/* BREADCRUMB */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
          flex items-center gap-2
          text-sm text-white/70
          mb-6
          "
        >
          <span>Home</span>
          <span>/</span>
          <span className="text-cyan-400">
            Services
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="
          text-5xl md:text-7xl
          font-bold leading-tight
          max-w-5xl
          text-white
          "
        >
          Delivering Reliable
          <span className="block text-cyan-400">
            Infrastructure Solutions
          </span>
        </motion.h1>

        {/* LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "90px" }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="h-[3px] bg-cyan-400 mt-8 mb-8"
        />

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="
          text-lg text-gray-300
          max-w-2xl
          leading-relaxed
          "
        >
          KAC Construction provides end-to-end EPC
          solutions in transmission, tower foundation,
          erection, and stringing services with
          precision engineering and timely execution.
        </motion.p>

        {/* FLOATING STATS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="
          mt-16
          grid md:grid-cols-3 gap-6
          max-w-4xl
          "
        >

          {stats.map((item, i) => (

            <motion.div
              key={i}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
              rounded-3xl
              border border-white/10
              bg-white/10
              backdrop-blur-xl
              p-8
              shadow-[0_0_40px_rgba(34,211,238,0.08)]
              "
            >

              <h3
                className="
                text-4xl font-bold
                text-cyan-400 mb-2
                "
              >
                {item.number}
              </h3>

              <p className="text-gray-300">
                {item.label}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToContent}
        className="
        absolute bottom-10 left-1/2
        -translate-x-1/2
        z-20
        cursor-pointer
        flex flex-col items-center
        text-white/60 hover:text-cyan-400
        transition
        "
      >

        <span className="text-xs tracking-[4px] mb-3">
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

    </section>
  );
}