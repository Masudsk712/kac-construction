"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const stats = [
  {
    number: "500+",
    label: "Projects Executed",
  },
  {
    number: "15+",
    label: "States Covered",
  },
  {
    number: "765kV",
    label: "Transmission Capability",
  },
  {
    number: "99%",
    label: "Execution Quality",
  },
];

export default function ProjectsHero() {

  const scrollToContent = () => {
    const el = document.getElementById("overview");

    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="
      relative
      min-h-screen
      flex items-center
      overflow-hidden
      "
    >

      {/* BACKGROUND IMAGE */}
      <Image
        src="/placeholder.jpg"
        alt="Projects Hero"
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
        via-[#020617]/80
        to-transparent
        "
      />

      {/* LIGHT EFFECT */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />

      {/* CONTENT */}
      <div className="container-premium relative z-10">

        {/* BREADCRUMB */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
          flex items-center gap-2
          text-sm text-white/60
          mb-6
          "
        >
          <span>Home</span>

          <span>/</span>

          <span className="text-cyan-400">
            Projects
          </span>

        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
          max-w-5xl
          text-5xl
          md:text-7xl
          font-black
          leading-tight
          "
        >

          Ongoing & Completed

          <span className="block text-cyan-400">
            Transmission Projects
          </span>

        </motion.h1>

        {/* LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 0.6 }}
          className="
          h-[4px]
          bg-cyan-400
          rounded-full
          mt-8 mb-8
          "
        />

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="
          max-w-2xl
          text-gray-300
          text-lg
          leading-relaxed
          "
        >

          Delivering large-scale transmission,
          tower erection, HTLS reconductoring
          and hot-line stringing infrastructure
          projects across India with precision,
          quality and engineering excellence.

        </motion.p>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="
          mt-14
          grid grid-cols-2
          lg:grid-cols-4
          gap-5
          max-w-6xl
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
              bg-white/[0.05]
              backdrop-blur-xl
              p-6 md:p-8
              "
            >

              <h3
                className="
                text-3xl md:text-5xl
                font-black
                text-cyan-400
                mb-2
                "
              >
                {item.number}
              </h3>

              <p className="text-gray-300 text-sm md:text-base">
                {item.label}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

      {/* SCROLL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToContent}
        className="
        absolute bottom-10
        left-1/2
        -translate-x-1/2
        cursor-pointer
        flex flex-col items-center
        text-white/60
        hover:text-cyan-400
        transition
        "
      >

        <span className="text-xs tracking-[4px] mb-3">
          SCROLL
        </span>

        <motion.div
          animate={{
            y: [0, 10, 0],
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