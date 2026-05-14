"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

/* ================================================= */
/* 🔥 CLIENTS */
/* ================================================= */

const clients = [
  "/clients/Adani.webp",
  "/clients/APAR.webp",
  "/clients/Bajel.webp",
  "/clients/Jsk.webp",
  "/clients/Jsw.webp",
  "/clients/KEC.webp",
  "/clients/KPIL.webp",
  "/clients/L&T.webp",
  "/clients/lumino.webp",
  "/clients/ntpc.webp",
  "/clients/powergrid.webp",
  "/clients/simplex.webp",
  "/clients/sterlight.webp",
  "/clients/tataproject.webp",
  "/clients/Transrail.webp",
  "/clients/skipper.webp",
  "/clients/Grilll.webp",
];

/* ================================================= */
/* 🔥 COMPONENT */
/* ================================================= */

export default function ClientsSection() {
  return (
    <section
      className="
      relative
      overflow-hidden

      bg-[#020617]
      text-white

      py-28
    "
    >
      {/* ================================================= */}
      {/* 🔥 BACKGROUND */}
      {/* ================================================= */}

      {/* BG IMAGE */}
      <div
        className="
        absolute inset-0

        bg-cover
        bg-center


        opacity-[0.08]
      "
        style={{
          backgroundImage:
            "url('/home/HomeTower12.webp')",
        }}
      />

      {/* DARK LAYER */}
      <div className="absolute inset-0 bg-[#020617]/92" />

      {/* GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
          absolute
          top-[-150px]
          left-[-150px]

          w-[500px]
          h-[500px]

          bg-cyan-500/10

          blur-[150px]
          rounded-full
        "
        />

        <div
          className="
          absolute
          bottom-[-150px]
          right-[-150px]

          w-[500px]
          h-[500px]

          bg-blue-500/10

          blur-[150px]
          rounded-full
        "
        />
      </div>

      {/* GRID */}
      <div
        className="
        absolute inset-0

        opacity-[0.03]

        [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]

        [background-size:60px_60px]
      "
      />

      {/* FADE EDGES */}
      <div
        className="
        pointer-events-none

        absolute
        left-0
        top-0

        h-full
        w-24

        bg-gradient-to-r
        from-[#020617]
        to-transparent

        z-20
      "
      />

      <div
        className="
        pointer-events-none

        absolute
        right-0
        top-0

        h-full
        w-24

        bg-gradient-to-l
        from-[#020617]
        to-transparent

        z-20
      "
      />

      {/* ================================================= */}
      {/* 🔥 CONTENT */}
      {/* ================================================= */}

      <div className="container-premium relative z-10">
        {/* ================================================= */}
        {/* 🔥 TOP CONTENT */}
        {/* ================================================= */}

        <motion.div
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

          max-w-4xl
          mx-auto

          mb-20
        "
        >
          <p
            className="
            uppercase

            tracking-[6px]

            text-cyan-300/80

            text-sm

            mb-5
          "
          >
            Trusted Partnerships
          </p>

          <h2
            className="
            text-4xl
            md:text-6xl

            font-black

            leading-[1.05]

            mb-6
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
            "
            >
              Our Valuable Clients
            </span>
          </h2>

          <p
            className="
            text-white/60

            leading-[2]
          "
          >
            Kuddus Ali Construction proudly collaborates
            with leading infrastructure,
            transmission and EPC companies
            delivering reliable execution across
            India’s power sector.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* 🔥 FEATURE BOXES */}
        {/* ================================================= */}

        <div
          className="
          grid
          md:grid-cols-3

          gap-6

          mb-16
        "
        >
          {/* CARD 1 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="
            rounded-[28px]

            border border-white/10

            bg-white/[0.03]
            backdrop-blur-2xl

            p-7
          "
          >
            <div
              className="
              w-14
              h-14

              rounded-2xl

              bg-cyan-400/10

              flex items-center justify-center

              text-cyan-300

              mb-5
            "
            >
              <ShieldCheck size={24} />
            </div>

            <h3
              className="
              text-2xl
              font-black

              mb-3
            "
            >
              Trusted Execution
            </h3>

            <p className="text-white/60 leading-[1.9]">
              Long-term partnerships built through
              quality execution, safety compliance
              and reliable infrastructure delivery.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
            className="
            rounded-[28px]

            border border-cyan-400/20

            bg-cyan-400/[0.05]
            backdrop-blur-2xl

            p-7
          "
          >
            <div
              className="
              w-14
              h-14

              rounded-2xl

              bg-cyan-400/15

              flex items-center justify-center

              text-cyan-300

              mb-5
            "
            >
              <Zap size={24} />
            </div>

            <h3
              className="
              text-2xl
              font-black

              mb-3
            "
            >
              Transmission Expertise
            </h3>

            <p className="text-white/70 leading-[1.9]">
              Specialized in tower erection,
              hotline stringing, HTLS
              reconductoring and EHV
              infrastructure execution.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            className="
            rounded-[28px]

            border border-white/10

            bg-white/[0.03]
            backdrop-blur-2xl

            p-7
          "
          >
            <div
              className="
              w-14
              h-14

              rounded-2xl

              bg-cyan-400/10

              flex items-center justify-center

              text-cyan-300

              mb-5
            "
            >
              <ArrowUpRight size={24} />
            </div>

            <h3
              className="
              text-2xl
              font-black

              mb-3
            "
            >
              Nationwide Presence
            </h3>

            <p className="text-white/60 leading-[1.9]">
              Successfully supporting major
              transmission and infrastructure
              projects across multiple states in
              India.
            </p>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* 🔥 ROW 1 */}
        {/* ================================================= */}

        <div className="overflow-hidden mb-8">
          <div
            className="
            scroll-left

            flex
            gap-8

            w-max
          "
          >
            {[...clients, ...clients].map(
              (logo, i) => (
                <ClientCard
                  key={i}
                  logo={logo}
                />
              )
            )}
          </div>
        </div>

        {/* ================================================= */}
        {/* 🔥 ROW 2 */}
        {/* ================================================= */}

        <div className="overflow-hidden">
          <div
            className="
            scroll-right

            flex
            gap-8

            w-max
          "
          >
            {[...clients, ...clients].map(
              (logo, i) => (
                <ClientCard
                  key={i}
                  logo={logo}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================= */
/* 🔥 CLIENT CARD */
/* ================================================= */

function ClientCard({
  logo,
}: {
  logo: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="
      group

      relative

      min-w-[170px]
      h-[170px]

      rounded-[28px]

      overflow-hidden

      border border-white/10

      bg-white/[0.95]
      backdrop-blur-xl

      shadow-[0_10px_40px_rgba(0,0,0,0.25)]

      transition-all duration-500

      hover:border-cyan-400/30
      hover:shadow-[0_10px_50px_rgba(34,211,238,0.18)]
    "
    >
      {/* BG GLOW */}
      <div
        className="
        absolute inset-0

        opacity-0
        group-hover:opacity-100

        transition duration-500

        bg-gradient-to-br
        from-cyan-400/10
        to-blue-400/10
      "
      />

      {/* IMAGE */}
      <div className="relative w-full h-full">
        <Image
          src={logo}
          alt="client"
          fill
          className="
          object-contain

          p-6

          transition duration-500

          group-hover:scale-105
        "
        />
      </div>

      {/* BOTTOM LINE */}
      <div
        className="
        absolute
        bottom-0
        left-0

        h-[3px]
        w-0

        bg-gradient-to-r
        from-cyan-400
        to-blue-400

        group-hover:w-full

        transition-all duration-500
      "
      />
    </motion.div>
  );
}