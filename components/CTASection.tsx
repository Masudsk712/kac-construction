"use client";

import { motion } from "framer-motion";

import Link from "next/link";

import {
  FaWhatsapp,
} from "react-icons/fa";

import {
  ArrowUpRight,
  Mail,
  PhoneCall,
  RadioTower,
} from "lucide-react";

export default function CTASection() {

  return (

    <section
      className="
        relative

        overflow-hidden

        bg-slate-50
        dark:bg-[#020617]
        text-slate-900
        dark:text-white

        py-24
        md:py-28
      "
    >

      {/* ================================================= */}
      {/* 🔥 BACKGROUND */}
      {/* ================================================= */}

      {/* GLOW */}
      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            top-[-150px]
            left-[-150px]

            w-[380px]
            h-[380px]

            md:w-[450px]
            md:h-[450px]

            rounded-full

            bg-cyan-500/8
            dark:bg-cyan-500/10

            blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-180px]

            w-[420px]
            h-[420px]

            md:w-[500px]
            md:h-[500px]

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

          dark:[background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]

          [background-size:60px_60px]
        "
      />

      {/* ================================================= */}
      {/* 🔥 MAIN BOX */}
      {/* ================================================= */}

      <div className="container-premium relative z-10">

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
            relative

            overflow-hidden

            rounded-[28px]
            md:rounded-[40px]

            border

            border-slate-200
            dark:border-white/10

            bg-white
            dark:bg-white/[0.04]
            backdrop-blur-2xl

            shadow-[0_20px_80px_rgba(15,23,42,0.08)]

            dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]

            px-5
            sm:px-8
            md:px-14

            py-14
            md:py-20
          "
        >

          {/* ================================================= */}
          {/* 🔥 INNER GLOW */}
          {/* ================================================= */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-r
              from-cyan-500/5
              via-transparent
              to-blue-500/5
            "
          />

          {/* ================================================= */}
          {/* 🔥 TOP ICON */}
          {/* ================================================= */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}

            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
              relative z-10

              w-16
              h-16

              md:w-20
              md:h-20

              mx-auto

              rounded-3xl

              border border-cyan-400/20

              bg-cyan-400/10

              flex
              items-center
              justify-center

              text-cyan-600
              dark:text-cyan-300

              mb-8
              md:mb-10
            "
          >

            <RadioTower
              size={32}
              className="md:w-[38px] md:h-[38px]"
            />

          </motion.div>

          {/* ================================================= */}
          {/* 🔥 HEADING */}
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
              delay: 0.1,
              duration: 0.8,
            }}

            viewport={{
              once: true,
            }}

            className="
              relative z-10

              text-center
            "
          >

            {/* SMALL LABEL */}
            <p
              className="
                uppercase

                tracking-[5px]
                md:tracking-[6px]

                text-cyan-600
                dark:text-cyan-300/80

                text-[11px]
                md:text-sm

                mb-4
                md:mb-5
              "
            >
              Let's Connect
            </p>

            {/* TITLE */}
            <h2
              className="
                text-[34px]
                sm:text-5xl
                md:text-6xl

                font-black

                leading-[1.08]

                max-w-5xl
                mx-auto
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
                Let's Build The Future
              </span>

              <br />

              <span className="
                text-slate-900
                dark:text-white
              ">
                Of Infrastructure Together
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                md:mt-7

                text-slate-600
                dark:text-white/60

                text-sm
                sm:text-base
                md:text-lg

                leading-[1.9]
                md:leading-[2]

                max-w-3xl
                mx-auto
              "
            >

              Kuddus Ali Construction delivers
              reliable transmission line
              infrastructure solutions with
              engineering precision, safety,
              execution excellence and trusted
              project delivery across India.

            </p>

          </motion.div>

          {/* ================================================= */}
          {/* 🔥 INFO CARDS */}
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
              delay: 0.2,
              duration: 0.8,
            }}

            viewport={{
              once: true,
            }}

            className="
              relative z-10

              mt-12
              md:mt-14

              grid
              gap-4
              md:gap-5

              md:grid-cols-3
            "
          >

            {/* PHONE */}
            <div
              className="
                rounded-3xl

                border

                border-slate-200
                dark:border-white/10

                bg-white
                dark:bg-white/[0.03]
                backdrop-blur-xl

                p-5
                md:p-6

                text-center
              "
            >

              <div
                className="
                  w-12
                  h-12

                  md:w-14
                  md:h-14

                  mx-auto

                  rounded-2xl

                  bg-cyan-400/10

                  flex
                  items-center
                  justify-center

                  text-cyan-600
                  dark:text-cyan-300

                  mb-4
                  md:mb-5
                "
              >
                <PhoneCall size={22} />
              </div>

              <p className="
                text-sm
                text-slate-400
                dark:text-white/40
                mb-2
              ">
                Call Us
              </p>

              <h3 className="
                font-bold
                text-base
                md:text-lg
                text-slate-900
                dark:text-white
              ">
                +91 9735067595
              </h3>

            </div>

            {/* EMAIL */}
            <div
              className="
                rounded-3xl

                border

                border-slate-200
                dark:border-white/10

                bg-white
                dark:bg-white/[0.03]
                backdrop-blur-xl

                p-5
                md:p-6

                text-center
              "
            >

              <div
                className="
                  w-12
                  h-12

                  md:w-14
                  md:h-14

                  mx-auto

                  rounded-2xl

                  bg-cyan-400/10

                  flex
                  items-center
                  justify-center

                  text-cyan-600
                  dark:text-cyan-300

                  mb-4
                  md:mb-5
                "
              >
                <Mail size={22} />
              </div>

              <p className="
                text-sm
                text-slate-400
                dark:text-white/40
                mb-2
              ">
                Email Address
              </p>

              <h3
                className="
                  font-bold

                  text-sm
                  sm:text-base

                  break-all

                  text-slate-900
                  dark:text-white
                "
              >
                kuddusali45@gmail.com
              </h3>

            </div>

            {/* SERVICE */}
            <div
              className="
                rounded-3xl

                border

                border-slate-200
                dark:border-white/10

                bg-white
                dark:bg-white/[0.03]
                backdrop-blur-xl

                p-5
                md:p-6

                text-center
              "
            >

              <div
                className="
                  w-12
                  h-12

                  md:w-14
                  md:h-14

                  mx-auto

                  rounded-2xl

                  bg-cyan-400/10

                  flex
                  items-center
                  justify-center

                  text-cyan-600
                  dark:text-cyan-300

                  mb-4
                  md:mb-5
                "
              >
                <RadioTower size={22} />
              </div>

              <p className="
                text-sm
                text-slate-400
                dark:text-white/40
                mb-2
              ">
                Expertise
              </p>

              <h3
                className="
                  font-bold

                  text-sm
                  sm:text-base

                  text-slate-900
                  dark:text-white
                "
              >
                Transmission Infrastructure
              </h3>

            </div>

          </motion.div>

          {/* ================================================= */}
          {/* 🔥 BUTTONS */}
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
              delay: 0.4,
              duration: 0.8,
            }}

            viewport={{
              once: true,
            }}

            className="
              relative z-10

              mt-12
              md:mt-14

              flex
              flex-col
              sm:flex-row

              items-center
              justify-center

              gap-4
              md:gap-5
            "
          >

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919735067595"
              target="_blank"
              rel="noopener noreferrer"

              className="
                group

                relative
                overflow-hidden

                w-full
                sm:w-auto

                px-8 py-4

                rounded-full

                bg-gradient-to-r
                from-cyan-400
                to-blue-500

                text-black
                font-bold

                shadow-[0_10px_40px_rgba(34,211,238,0.35)]

                transition-all duration-500

                hover:scale-[1.04]
              "
            >

              <div
                className="
                  absolute inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition duration-500

                  bg-white/20
                "
              />

              <span
                className="
                  relative z-10

                  flex items-center
                  justify-center

                  gap-3
                "
              >

                <FaWhatsapp size={20} />

                Start A Project

                <ArrowUpRight
                  size={18}

                  className="
                    transition

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </span>

            </a>

            {/* CONTACT */}
            <Link
              href="/contact"
              className="w-full sm:w-auto"
            >

              <button
                className="
                  group

                  w-full
                  sm:w-auto

                  px-8 py-4

                  rounded-full

                  border

                  border-slate-300
                  dark:border-white/10

                  bg-white/70
                  dark:bg-white/[0.04]
                  backdrop-blur-xl

                  text-slate-900
                  dark:text-white
                  font-semibold

                  transition-all duration-500

                  hover:border-cyan-400/30
                  hover:bg-cyan-400/10
                "
              >

                <span
                  className="
                    flex items-center
                    justify-center

                    gap-3
                  "
                >

                  Contact Us

                  <ArrowUpRight
                    size={18}

                    className="
                      transition

                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </span>

              </button>

            </Link>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}