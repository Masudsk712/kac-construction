"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  FaUserTie,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

/* ================================================= */
/* FEATURES */
/* ================================================= */

const features = [
  {
    title: "Experienced Workforce",

    desc:
      "Our highly skilled engineers, supervisors and technical teams deliver precision-driven transmission infrastructure projects across India.",

    icon: <FaUserTie />,

    gradient:
      "from-cyan-400/20 to-blue-500/10",
  },

  {
    title: "Safety & Compliance",

    desc:
      "We follow strict operational safety standards, site protocols and quality assurance systems in every phase of execution.",

    icon: <FaShieldAlt />,

    gradient:
      "from-emerald-400/20 to-cyan-500/10",
  },

  {
    title: "Timely Execution",

    desc:
      "From foundation work to hotline stringing, our structured planning ensures on-time project delivery with consistent reliability.",

    icon: <FaClock />,

    gradient:
      "from-blue-400/20 to-indigo-500/10",
  },

  {
    title: "Trusted Infrastructure Partner",

    desc:
      "Kuddus Ali Construction is trusted for transmission line and power infrastructure execution with a reputation built on performance.",

    icon: <FaCheckCircle />,

    gradient:
      "from-cyan-400/20 to-sky-500/10",
  },
];

/* ================================================= */
/* COMPONENT */
/* ================================================= */

export default function WhyChooseUs() {

  return (

    <section
      className="
        relative

        overflow-hidden

        py-24
        md:py-32

        bg-[var(--bg-soft)]
        section-surface

        text-slate-900
        dark:text-white
      "
    >

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div
        className="
          absolute inset-0

          pointer-events-none
        "
      >

        {/* TOP GLOW */}

        <div
          className="
            absolute
            top-[-180px]
            left-[-120px]

            w-[500px]
            h-[500px]

            rounded-full

            bg-cyan-500/8
            dark:bg-cyan-500/10

            blur-[140px]
          "
        />

        {/* BOTTOM GLOW */}

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-120px]

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

          {/* SMALL LABEL */}

          <div
            className="
              inline-flex
              items-center
              gap-2

              px-5 py-2

              rounded-full

              border
              section-badge

              text-[11px]
              sm:text-sm

              uppercase

              tracking-[4px]

              mb-6
            "
          >

            <Sparkles size={14} />

            Why Kuddus Ali Construction

          </div>

          {/* TITLE */}

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl

              font-black

              leading-[1.08]

              mb-6
            "
          >

            <span className="accent-heading">
              Engineering Reliability
            </span>

            <br />

            <span
              className="
                text-slate-900
                dark:text-white
              "
            >
              With Precision & Trust
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

            Kuddus Ali Construction delivers dependable
            transmission infrastructure solutions
            with technical expertise, field
            experience and a commitment to
            operational excellence across every
            project site.

          </p>

        </motion.div>

        {/* ================================================= */}
        {/* CARDS */}
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

          {features.map((item, i) => (

            <motion.div
              key={i}

              initial={{
                opacity: 0,
                y: 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: i * 0.12,
                duration: 0.7,
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

                p-5
                sm:p-6
                md:p-8

                shadow-[0_10px_40px_rgba(15,23,42,0.08)]

                dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]

                transition-all duration-500
              "
            >

              {/* CARD GLOW */}

              <div
                className={`
                  absolute inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition duration-700

                  bg-gradient-to-br
                  ${item.gradient}
                `}
              />

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

              {/* ICON */}

              <div
                className="
                  relative z-10

                  w-14 h-14
                  md:w-20 md:h-20

                  rounded-2xl
                  md:rounded-3xl

                  bg-gradient-to-br
                  from-cyan-400
                  to-blue-500

                  flex items-center justify-center

                  text-white

                  text-xl
                  md:text-3xl

                  shadow-[0_10px_35px_rgba(34,211,238,0.25)]

                  mb-6
                  md:mb-8

                  transition-all duration-500

                  group-hover:scale-110
                  group-hover:rotate-3
                "
              >

                {item.icon}

              </div>

              {/* TITLE */}

              <h3
                className="
                  relative z-10

                  text-lg
                  md:text-2xl

                  font-bold

                  text-slate-900
                  dark:text-white

                  mb-4

                  leading-tight
                "
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}

              <p
                className="
                  relative z-10

                  text-slate-600
                  dark:text-white/65

                  leading-[1.8]

                  text-sm
                  md:text-base
                "
              >
                {item.desc}
              </p>

              {/* LINK */}

              <Link
                href="/media"

                className="
                  relative z-10

                  flex items-center
                  justify-between

                  mt-6
                  md:mt-10

                  pt-4
                  md:pt-6

                  border-t

                  border-slate-200
                  dark:border-white/10

                  group/link
                "
              >

                <span
                  className="
                    accent-link

                    text-xs
                    md:text-sm

                    uppercase

                    tracking-[3px]

                    transition duration-300

                    group-hover/link:text-slate-900
                    dark:group-hover/link:text-white
                  "
                >
                  KAC QUALITY
                </span>

                <ArrowUpRight
                  size={16}

                  className="
                    accent-link

                    transition duration-500

                    group-hover/link:translate-x-1
                    group-hover/link:-translate-y-1

                    group-hover/link:text-slate-900
                    dark:group-hover/link:text-white
                  "
                />

              </Link>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}