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

        bg-[var(--bg-soft)]
        section-surface
        text-slate-900
        dark:text-white

        py-24
        md:py-28
      "
    >

      {/* ================================================= */}
      {/* 🔥 BACKGROUND */}
      {/* ================================================= */}

      <div
        className="
          absolute inset-0

          bg-cover
          bg-center

          opacity-[0.05]
        "
        style={{
          backgroundImage:
            "url('/home/HomeTower12.webp')",
        }}
      />

      <div className="absolute inset-0 bg-white/95 dark:bg-[#020617]/92" />

      {/* GLOW */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            top-[-140px]
            left-[-140px]

            w-[420px]
            h-[420px]

            md:w-[520px]
            md:h-[520px]

            bg-cyan-500/8
            dark:bg-cyan-500/10

            blur-[130px]

            rounded-full
          "
        />

        <div
          className="
            absolute
            bottom-[-140px]
            right-[-140px]

            w-[420px]
            h-[420px]

            md:w-[520px]
            md:h-[520px]

            bg-blue-500/8
            dark:bg-blue-500/10

            blur-[130px]

            rounded-full
          "
        />

      </div>

      {/* GRID */}
      <div
        className="
          absolute inset-0

          opacity-[0.04]

          [background-image:linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)]

          dark:[background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]

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
          w-10
          md:w-24

          bg-gradient-to-r
          from-slate-50
          dark:from-[#020617]
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
          w-10
          md:w-24

          bg-gradient-to-l
          from-slate-50
          dark:from-[#020617]
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

            mb-14
            md:mb-20
          "
        >

          <p
            className="
              uppercase

              tracking-[5px]
              md:tracking-[6px]

              section-label

              text-[11px]
              md:text-sm

              mb-4
              md:mb-5
            "
          >
            Trusted Partnerships
          </p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl

              font-black

              leading-[1.08]

              mb-5
              md:mb-6
            "
          >

            <span className="accent-heading">
              Our Valuable Clients
            </span>

          </h2>

          <p
            className="
              text-slate-600
              dark:text-white/60

              text-sm
              md:text-base

              leading-[1.9]
              md:leading-[2]

              max-w-3xl
              mx-auto
            "
          >

            Kuddus Ali Construction proudly collaborates
            with leading infrastructure,
            transmission and EPC companies
            delivering reliable execution across
            India's power sector.

          </p>

        </motion.div>

        {/* ================================================= */}
        {/* 🔥 FEATURE BOXES */}
        {/* ================================================= */}

        <div
          className="
            grid

            grid-cols-1
            md:grid-cols-3

            gap-4
            md:gap-6

            mb-14
            md:mb-16
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
              rounded-[24px]
              md:rounded-[28px]

              border

              border-slate-200
              dark:border-white/10

              bg-white
              dark:bg-white/[0.03]
              backdrop-blur-2xl

              p-5
              md:p-7
            "
          >

            <div
              className="
                w-12 h-12
                md:w-14 md:h-14

                rounded-2xl

                bg-cyan-400/10

                flex items-center justify-center

                accent-link

                mb-4
                md:mb-5
              "
            >
              <ShieldCheck size={22} />
            </div>

            <h3
              className="
                text-xl
                md:text-2xl

                font-black

                text-slate-900
                dark:text-white

                mb-3
              "
            >
              Trusted Execution
            </h3>

            <p
              className="
                text-slate-600
                dark:text-white/60

                text-sm
                md:text-base

                leading-[1.8]
              "
            >
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
              rounded-[24px]
              md:rounded-[28px]

              border

              border-cyan-400/20

              bg-cyan-400/[0.05]
              backdrop-blur-2xl

              p-5
              md:p-7
            "
          >

            <div
              className="
                w-12 h-12
                md:w-14 md:h-14

                rounded-2xl

                bg-cyan-400/15

                flex items-center justify-center

                accent-link

                mb-4
                md:mb-5
              "
            >
              <Zap size={22} />
            </div>

            <h3
              className="
                text-xl
                md:text-2xl

                font-black

                text-slate-900
                dark:text-white

                mb-3
              "
            >
              Transmission Expertise
            </h3>

            <p
              className="
                text-slate-600
                dark:text-white/70

                text-sm
                md:text-base

                leading-[1.8]
              "
            >
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
              rounded-[24px]
              md:rounded-[28px]

              border

              border-slate-200
              dark:border-white/10

              bg-white
              dark:bg-white/[0.03]
              backdrop-blur-2xl

              p-5
              md:p-7
            "
          >

            <div
              className="
                w-12 h-12
                md:w-14 md:h-14

                rounded-2xl

                bg-cyan-400/10

                flex items-center justify-center

                accent-link

                mb-4
                md:mb-5
              "
            >
              <ArrowUpRight size={22} />
            </div>

            <h3
              className="
                text-xl
                md:text-2xl

                font-black

                text-slate-900
                dark:text-white

                mb-3
              "
            >
              Nationwide Presence
            </h3>

            <p
              className="
                text-slate-600
                dark:text-white/60

                text-sm
                md:text-base

                leading-[1.8]
              "
            >
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

        <div className="overflow-hidden mb-5 md:mb-8">

          <div
            className="
              scroll-left

              flex

              gap-4
              md:gap-8

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

              gap-4
              md:gap-8

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
        y: -6,
      }}

      className="
        group

        relative

        min-w-[120px]
        min-h-[120px]

        sm:min-w-[150px]
        sm:min-h-[150px]

        md:min-w-[170px]
        md:h-[170px]

        rounded-[22px]
        md:rounded-[28px]

        overflow-hidden

        border

        border-slate-200
        dark:border-white/10

        bg-white/[0.95]
        backdrop-blur-xl

        shadow-[0_10px_40px_rgba(15,23,42,0.08)]

        dark:shadow-[0_10px_40px_rgba(0,0,0,0.25)]

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

            p-4
            md:p-6

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