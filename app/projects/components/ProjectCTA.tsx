"use client";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  PhoneCall,
} from "lucide-react";

export default function ProjectCTA() {

  return (
    <section
      className="
      section-premium

      py-28

      relative
      overflow-hidden
      "
    >

      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]" />

      {/* GLOW */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
          absolute

          top-0 left-0

          w-[500px]
          h-[500px]

          bg-cyan-500/10

          blur-[120px]
          "
        />

        <div
          className="
          absolute

          bottom-0 right-0

          w-[400px]
          h-[400px]

          bg-blue-500/10

          blur-[100px]
          "
        />

      </div>

      <div
        className="
        relative z-10

        max-w-6xl
        mx-auto

        px-6
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
          glass-strong
          border-glow

          rounded-[40px]

          overflow-hidden

          relative
          "
        >

          {/* CARD GLOW */}
          <div
            className="
            absolute inset-0

            bg-gradient-to-r
            from-cyan-500/10
            via-transparent
            to-blue-500/10
            "
          />

          <div
            className="
            relative z-10

            px-6
            md:px-16

            py-16 md:py-20

            text-center
            "
          >

            {/* SMALL LABEL */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 0.1,
              }}

              className="
              uppercase

              tracking-[5px]

              text-cyan-400

              text-sm

              mb-6
              "
            >
              Build The Future With KAC
            </motion.p>

            {/* HEADING */}
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
                delay: 0.2,
              }}

              className="
              text-4xl
              md:text-6xl

              font-black

              leading-tight

              mb-8
              "
            >

              Let's Deliver
              Infrastructure

              <span className="block text-cyan-400">
                Excellence Together
              </span>

            </motion.h2>

            {/* TEXT */}
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
                delay: 0.3,
              }}

              className="
              text-white/70

              text-lg

              leading-relaxed

              max-w-3xl
              mx-auto

              mb-12
              "
            >

              Partner with KAC Construction
              for reliable EPC infrastructure,
              transmission, foundation,
              erection and hotline solutions
              executed with precision,
              innovation and engineering
              excellence.

            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 0.4,
              }}

              className="
              flex flex-wrap

              items-center
              justify-center

              gap-5
              "
            >

              {/* BTN */}
              <a
                href="/contact"

                className="
                inline-flex items-center
                gap-3

                px-8 py-4

                rounded-full

                bg-cyan-400

                text-black
                font-semibold

                hover:scale-105

                hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]

                transition-all duration-500
                "
              >

                Contact Us

                <ArrowUpRight size={18} />

              </a>

              {/* BTN */}
              <a
                href="tel:+919999999999"

                className="
                inline-flex items-center
                gap-3

                px-8 py-4

                rounded-full

                border border-white/10

                bg-white/[0.05]

                backdrop-blur-xl

                hover:border-cyan-400/30
                hover:bg-cyan-400/[0.08]

                transition-all duration-500
                "
              >

                <PhoneCall size={18} />

                Call Now

              </a>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}