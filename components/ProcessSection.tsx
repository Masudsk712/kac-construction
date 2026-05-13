"use client";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  ClipboardCheck,
  Hammer,
  RadioTower,
  ShieldCheck,
} from "lucide-react";

/* ================================================= */
/* 🔥 PROCESS DATA */
/* ================================================= */

const steps = [
  {
    title: "Planning & Survey",

    desc:
      "Detailed route analysis, technical planning and feasibility studies for reliable transmission infrastructure.",

    icon: ClipboardCheck,

    step: "01",
  },

  {
    title: "Foundation Work",

    desc:
      "Strong and durable civil foundation execution engineered for long-term tower stability and performance.",

    icon: Hammer,

    step: "02",
  },

  {
    title: "Tower Installation",

    desc:
      "Safe and efficient tower erection, conductor stringing and hotline execution using advanced methodologies.",

    icon: RadioTower,

    step: "03",
  },

  {
    title: "Testing & Delivery",

    desc:
      "Comprehensive quality inspection, testing and final commissioning before successful project handover.",

    icon: ShieldCheck,

    step: "04",
  },
];

/* ================================================= */
/* 🔥 COMPONENT */
/* ================================================= */

export default function ProcessSection() {

  return (
    <section
      className="
      relative
      overflow-hidden

      bg-[#020617]

      py-28
    "
    >

      {/* ================================================= */}
      {/* 🔥 BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 pointer-events-none">

        {/* LEFT GLOW */}
        <div
          className="
          absolute
          top-[-150px]
          left-[-100px]

          w-[450px]
          h-[450px]

          bg-cyan-500/10

          blur-[140px]

          rounded-full
        "
        />

        {/* RIGHT GLOW */}
        <div
          className="
          absolute
          bottom-[-150px]
          right-[-100px]

          w-[450px]
          h-[450px]

          bg-blue-500/10

          blur-[140px]

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

      {/* ================================================= */}
      {/* 🔥 CONTENT */}
      {/* ================================================= */}

      <div
        className="
        container-premium

        relative z-10
      "
      >

        {/* ================================================= */}
        {/* 🔥 HEADING */}
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

          {/* LABEL */}
          <div
            className="
            inline-flex
            items-center
            gap-2

            px-5 py-2

            rounded-full

            border border-cyan-400/10

            bg-cyan-400/5

            text-cyan-300

            text-sm
            uppercase

            tracking-[4px]

            mb-6
          "
          >

            <Sparkles size={14} />

            Project Workflow

          </div>

          {/* TITLE */}
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
              to-cyan-100

              bg-clip-text
              text-transparent
            "
            >
              Our Execution
            </span>

            <br />

            <span className="text-white">
              Process & Workflow
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p
            className="
            text-white/65

            text-lg

            leading-[2]

            max-w-3xl

            mx-auto
          "
          >

            Kuddus Ali Construction follows a structured
            engineering workflow ensuring precision,
            safety, timely delivery and long-term
            reliability across every infrastructure
            project.

          </p>

        </motion.div>

        {/* ================================================= */}
        {/* 🔥 PROCESS GRID */}
        {/* ================================================= */}

        <div
          className="
          relative

          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4

          gap-6
          xl:gap-4
        "
        >

          {steps.map((step, i) => {

            const Icon = step.icon;

            return (

              <div
                key={i}

                className="
                relative

                flex
                flex-col
                items-center
              "
              >

                {/* ================================================= */}
                {/* 🔥 CARD */}
                {/* ================================================= */}

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

                  h-full
                  w-full

                  rounded-[32px]

                  border border-white/10

                  bg-white/[0.03]
                  backdrop-blur-2xl

                  p-8

                  transition-all duration-500

                  hover:border-cyan-400/20
                "
                >

                  {/* HOVER GLOW */}
                  <div
                    className="
                    absolute inset-0

                    opacity-0
                    group-hover:opacity-100

                    transition duration-700

                    bg-gradient-to-br
                    from-cyan-500/10
                    to-blue-500/10
                  "
                  />

                  {/* TOP LINE */}
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

                  {/* STEP */}
                  <div
                    className="
                    absolute
                    top-5
                    right-5

                    text-5xl
                    font-black

                    text-white/10
                  "
                  >
                    {step.step}
                  </div>

                  {/* ICON */}
                  <div
                    className="
                    relative z-10

                    w-20 h-20

                    rounded-3xl

                    bg-gradient-to-br
                    from-cyan-400
                    to-blue-500

                    flex items-center justify-center

                    shadow-[0_10px_35px_rgba(34,211,238,0.25)]

                    mb-8

                    transition duration-500

                    group-hover:scale-110
                    group-hover:rotate-3
                  "
                  >

                    <Icon
                      size={34}
                      className="text-white"
                    />

                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                    relative z-10

                    text-2xl

                    font-bold

                    text-white

                    mb-4

                    group-hover:text-cyan-300

                    transition duration-300
                  "
                  >
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                    relative z-10

                    text-white/60

                    leading-[1.9]

                    text-sm
                    md:text-base
                  "
                  >
                    {step.desc}
                  </p>

                  {/* FOOTER */}
                  <div
                    className="
                    relative z-10

                    mt-10
                    pt-5

                    border-t border-white/10

                    flex items-center
                    justify-between
                  "
                  >

                    <span
                      className="
                      text-cyan-300

                      text-sm
                      uppercase

                      tracking-[3px]
                    "
                    >
                      Step {step.step}
                    </span>

                    <ArrowRight
                      size={18}

                      className="
                      text-cyan-300

                      transition duration-500

                      group-hover:translate-x-1
                    "
                    />

                  </div>

                </motion.div>

                {/* ================================================= */}
                {/* 🔥 CONNECTOR ARROW */}
                {/* ================================================= */}

                {i < steps.length - 1 && (

                  <>
                    {/* DESKTOP */}
                    <motion.div
                      animate={{
                        x: [0, 8, 0],
                      }}

                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                      }}

                      className="
                      hidden xl:flex

                      absolute
                      top-1/2
                      -right-6

                      z-20
                    "
                    >

                      <ArrowRight
                        size={30}
                        className="text-cyan-300/70"
                      />

                    </motion.div>

                    {/* MOBILE */}
                    <motion.div
                      animate={{
                        y: [0, 8, 0],
                      }}

                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                      }}

                      className="
                      flex xl:hidden

                      justify-center

                      my-2
                    "
                    >

                      <ArrowRight
                        size={26}
                        className="
                        rotate-90
                        text-cyan-300/70
                      "
                      />

                    </motion.div>
                  </>

                )}

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}