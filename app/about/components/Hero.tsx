"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const stats = [
  {
    number: "15+",
    label: "Years Experience",
  },
  {
    number: "500+",
    label: "Projects Delivered",
  },
  {
    number: "765kV",
    label: "Transmission Expertise",
  },
];

export default function Hero() {

  const scrollToContent = () => {
    const el = document.getElementById("StickyTabs");

    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
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
      overflow-hidden
      bg-[#020617]
      flex items-center
      "
    >

      {/* BG IMAGE */}
      <Image
        src="/placeholder.jpg"
        alt="About Hero"
        fill
        priority
        className="
        object-cover
        object-center
        scale-105
        "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#020617]/80" />

      {/* LEFT GRADIENT */}
      <div
        className="
        absolute inset-0
        bg-gradient-to-r
        from-[#020617]
        via-[#020617]/80
        to-[#020617]/20
        "
      />

      {/* LIGHT GLOW */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[140px]" />

      

      {/* MAIN CONTENT */}
      <div
        className="
        relative z-10
        max-w-7xl
        mx-auto
        px-6
        md:px-10
        w-full
        pt-32
        pb-44
        "
      >

        {/* TOP BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
          inline-flex
          items-center
          gap-3
          px-5 py-2
          rounded-full
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          mb-8
          "
        >

          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

          <span className="text-sm tracking-[4px] text-white/80">
            ABOUT KAC
          </span>

        </motion.div>

        {/* HERO CONTENT */}
        <div className="max-w-5xl">

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
            text-[52px]
            md:text-[92px]
            leading-[0.95]
            font-black
            tracking-[-3px]
            text-white
            "
          >
            Empowering India's

            <span
              className="
              block
              mt-3
              text-cyan-400
              "
            >
              Infrastructure Landscape
            </span>

          </motion.h1>

          {/* LINE */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="
            h-[4px]
            bg-cyan-400
            mt-10
            mb-10
            rounded-full
            "
          />

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="
            text-lg
            md:text-xl
            text-gray-300
            leading-[2]
            max-w-3xl
            "
          >
            KAC Construction stands as a trusted EPC infrastructure
            company delivering excellence in transmission, foundation,
            erection, and stringing projects across India with innovation,
            reliability, and execution precision.
          </motion.p>

        </div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="
          grid
          md:grid-cols-3
          gap-6
          mt-20
          max-w-5xl
          "
        >

          {stats.map((item, i) => (

            <motion.div
              key={i}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
              relative
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-2xl
              p-8
              group
              "
            >

              {/* CARD GLOW */}
              <div
                className="
                absolute inset-0
                opacity-0 group-hover:opacity-100
                transition duration-500
                bg-gradient-to-r
                from-cyan-500/10
                to-blue-500/10
                "
              />

              <div className="relative z-10">

                <h3
                  className="
                  text-5xl
                  font-black
                  text-cyan-400
                  mb-3
                  "
                >
                  {item.number}
                </h3>

                <p className="text-gray-300 text-lg">
                  {item.label}
                </p>

              </div>

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
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        z-20
        cursor-pointer
        flex flex-col items-center
        text-white/50
        hover:text-cyan-400
        transition
        "
      >

        <span className="text-[11px] tracking-[5px] mb-3">
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

      {/* BOTTOM FADE */}
      <div
        className="
        absolute bottom-0 left-0
        w-full h-40
        bg-gradient-to-b
        from-transparent
        to-[#020617]
        "
      />

    </section>
  );
}