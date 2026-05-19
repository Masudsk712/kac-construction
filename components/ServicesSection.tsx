"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import Image from "next/image";

/* ================================================= */
/* SERVICES DATA */
/* ================================================= */

const services = [
  {
    title: "Survey Work",

    desc:
      "Preliminary, detailed and check survey services with route optimization and accurate transmission line planning.",

    image: "/home/SurveyWork.webp",

    link: "/service#survey",

    number: "01",
  },

  {
    title: "Foundation Work",

    desc:
      "Precision-engineered civil foundation execution ensuring long-term tower strength and structural reliability.",

    image: "/home/FoundationWork.webp",

    link: "/service#foundation",

    number: "02",
  },

  {
    title: "Tower Erection",

    desc:
      "Safe and efficient erection of transmission towers using advanced methodologies and experienced site teams.",

    image: "/home/ErectionWork.webp",

    link: "/service#erection",

    number: "03",
  },

  {
    title: "Stringing Work",

    desc:
      "High-capacity conductor stringing and hotline execution with modern machinery and strict safety compliance.",

    image: "/home/StringingWork.webp",

    link: "/service#stringing",

    number: "04",
  },
];

/* ================================================= */
/* COMPONENT */
/* ================================================= */

export default function ServicesSection() {

  return (

    <section
      className="
        relative

        overflow-hidden

        py-24
        md:py-32

        bg-white
        dark:bg-[#020617]
      "
    >

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      {/* GLOW */}

      <div
        className="
          absolute inset-0

          pointer-events-none
        "
      >

        <div
          className="
            absolute
            top-[-180px]
            left-[-100px]

            w-[500px]
            h-[500px]

            rounded-full

            bg-cyan-500/8
            dark:bg-cyan-500/10

            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-100px]

            w-[500px]
            h-[500px]

            rounded-full

            bg-blue-500/8
            dark:bg-blue-500/10

            blur-[140px]
          "
        />

      </div>

      {/* GRID */}

      <div
        className="
          absolute inset-0

          opacity-[0.04]

          [background-image:linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)]

          dark:[background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

          [background-size:60px_60px]
        "
      />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div
        className="
          container-premium

          relative z-10
        "
      >

        {/* ================================================= */}
        {/* HEADING */}
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

            mb-16
            md:mb-20
          "
        >

          {/* LABEL */}

          <div
            className="
              inline-flex
              items-center
              gap-2

              px-5 py-2

              rounded-full

              border border-cyan-400/15

              bg-cyan-400/5

              text-cyan-600
              dark:text-cyan-300

              text-[11px]
              sm:text-sm

              uppercase

              tracking-[4px]

              mb-6
            "
          >

            <Sparkles size={14} />

            Core Services

          </div>

          {/* TITLE */}

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl

              font-black

              leading-[1.05]

              mb-6
            "
          >

            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-cyan-300

                bg-clip-text
                text-transparent
              "
            >
              Engineering Services
            </span>

            <br />

            <span
              className="
                text-slate-900
                dark:text-white
              "
            >
              Built For Reliability
            </span>

          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              text-slate-600
              dark:text-white/65

              text-base
              md:text-lg

              leading-[2]

              max-w-3xl

              mx-auto
            "
          >

            Kuddus Ali Construction delivers advanced
            transmission infrastructure solutions
            with precision execution, experienced
            engineering teams and reliable project
            delivery across India.

          </p>

        </motion.div>

        {/* ================================================= */}
        {/* GRID */}
        {/* ================================================= */}

        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4

            gap-5
            md:gap-7
          "
        >

          {services.map((service, i) => (

            <motion.div
              key={i}

              initial={{
                opacity: 0,
                y: 70,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.7,
                delay: i * 0.12,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -8,
              }}

              className="
                group

                relative
                overflow-hidden

                rounded-[28px]
                md:rounded-[32px]

                border

                border-slate-200
                dark:border-white/10

                bg-white/80
                dark:bg-white/[0.03]

                backdrop-blur-2xl

                transition-all duration-500

                hover:border-cyan-400/20

                shadow-[0_10px_40px_rgba(15,23,42,0.08)]

                dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              "
            >

              {/* TOP LIGHT */}

              <div
                className="
                  absolute
                  inset-x-0
                  top-0

                  h-[1px]

                  bg-gradient-to-r
                  from-transparent
                  via-cyan-300/40
                  to-transparent

                  opacity-0
                  group-hover:opacity-100

                  transition duration-700
                "
              />

              {/* IMAGE */}

              <div
                className="
                  relative

                  h-[240px]
                  md:h-[260px]

                  overflow-hidden
                "
              >

                <Image
                  src={service.image}
                  alt={service.title}
                  fill

                  className="
                    object-cover

                    transition duration-700

                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                    absolute inset-0

                    bg-gradient-to-t

                    from-black/85
                    via-black/20
                    to-transparent
                  "
                />

                {/* NUMBER */}

                <div
                  className="
                    absolute
                    top-5
                    right-5

                    text-4xl
                    md:text-5xl

                    font-black

                    text-white/10
                  "
                >
                  {service.number}
                </div>

                {/* LABEL */}

                <div
                  className="
                    absolute
                    left-4
                    top-4
                    md:left-5
                    md:top-5

                    px-4 py-1

                    rounded-full

                    border border-white/10

                    bg-black/30
                    backdrop-blur-xl

                    text-[10px]
                    md:text-[11px]

                    uppercase

                    tracking-[3px]

                    text-cyan-300
                  "
                >
                  KAC Service
                </div>

              </div>

              {/* CONTENT */}

              <div
                className="
                  p-5
                  md:p-7
                "
              >

                {/* TITLE */}

                <h3
                  className="
                    text-xl
                    md:text-2xl

                    font-bold

                    text-slate-900
                    dark:text-white

                    mb-4

                    transition duration-300

                    group-hover:text-cyan-500
                    dark:group-hover:text-cyan-300
                  "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    text-slate-600
                    dark:text-white/60

                    leading-[1.9]

                    text-sm

                    mb-8
                    md:mb-10
                  "
                >
                  {service.desc}
                </p>

                {/* BUTTON */}

                <Link
                  href={service.link}

                  className="
                    flex items-center
                    justify-between

                    pt-5

                    border-t

                    border-slate-200
                    dark:border-white/10

                    group/link
                  "
                >

                  <span
                    className="
                      text-cyan-600
                      dark:text-cyan-300

                      text-sm
                      uppercase

                      tracking-[3px]

                      transition duration-300

                      group-hover/link:text-slate-900
                      dark:group-hover/link:text-white
                    "
                  >
                    Know More
                  </span>

                  <ArrowUpRight
                    size={18}

                    className="
                      text-cyan-600
                      dark:text-cyan-300

                      transition duration-500

                      group-hover/link:translate-x-1
                      group-hover/link:-translate-y-1

                      group-hover/link:text-slate-900
                      dark:group-hover/link:text-white
                    "
                  />

                </Link>

              </div>

            </motion.div>

          ))}

        </div>

        {/* ================================================= */}
        {/* CTA BUTTON */}
        {/* ================================================= */}

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
            delay: 0.2,
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}

          className="
            flex
            justify-center

            mt-16
            md:mt-20
          "
        >

          <Link href="/service">

            <motion.button
              whileHover={{
                scale: 1.03,
              }}

              whileTap={{
                scale: 0.98,
              }}

              className="
                group

                relative
                overflow-hidden

                px-8 py-4
                md:px-10

                rounded-full

                border border-cyan-400/20

                bg-gradient-to-r
                from-cyan-400
                to-blue-500

                text-black
                font-bold

                shadow-[0_10px_40px_rgba(34,211,238,0.25)]

                transition duration-500
              "
            >

              {/* SHINE */}

              <div
                className="
                  absolute
                  inset-0

                  translate-x-[-100%]

                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent

                  group-hover:translate-x-[100%]

                  transition duration-1000
                "
              />

              <span
                className="
                  relative z-10

                  flex items-center
                  gap-3
                "
              >

                Explore All Services

                <ArrowUpRight
                  size={18}

                  className="
                    transition duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </span>

            </motion.button>

          </Link>

        </motion.div>

      </div>

    </section>
  );
}