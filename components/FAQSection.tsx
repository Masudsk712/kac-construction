"use client";

import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Plus,
  Minus,
  ArrowUpRight,
} from "lucide-react";

const faqs = [
  {
    q: "What services does KAC Construction provide?",

    a: "KAC Construction specializes in transmission line infrastructure including survey work, civil foundation, tower erection, hotline stringing, HTLS reconductoring and high-voltage power transmission projects across India.",
  },

  {
    q: "Do you execute projects across multiple states?",

    a: "Yes. Our operational teams handle transmission infrastructure projects across multiple Indian states with experienced engineers, supervisors and field execution teams.",
  },

  {
    q: "What voltage transmission projects do you handle?",

    a: "We work on EHV transmission infrastructure projects including 220kV, 400kV and 765kV transmission line execution using modern engineering standards and safety compliance systems.",
  },

  {
    q: "Is safety compliance maintained during execution?",

    a: "Absolutely. Safety is one of our core priorities. We follow structured operational safety protocols, quality assurance systems and industry-standard compliance procedures during every project phase.",
  },

  {
    q: "Do you provide tower foundation and stringing services?",

    a: "Yes. We provide end-to-end transmission infrastructure execution including foundation work, tower erection, conductor stringing and project support services.",
  },
];

export default function FAQSection() {

  const [open, setOpen] =
    useState<number | null>(0);

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
      {/* 🔥 BACKGROUND GLOW */}
      {/* ================================================= */}

      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            top-[-180px]
            left-[-150px]

            w-[360px]
            h-[360px]

            md:w-[420px]
            md:h-[420px]

            rounded-full

            bg-cyan-500/8
            dark:bg-cyan-500/10

            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-150px]

            w-[360px]
            h-[360px]

            md:w-[420px]
            md:h-[420px]

            rounded-full

            bg-blue-500/8
            dark:bg-blue-500/10

            blur-[120px]
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
      {/* 🔥 CONTENT */}
      {/* ================================================= */}

      <div
        className="
          container-premium

          relative z-10

          max-w-5xl
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

            mb-14
            md:mb-20
          "
        >

          {/* SMALL TEXT */}
          <p
            className="
              uppercase

              tracking-[4px]
              md:tracking-[6px]

              section-label

              text-[11px]
              md:text-sm

              mb-4
              md:mb-5
            "
          >
            Frequently Asked Questions
          </p>

          {/* HEADING */}
          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl

              font-black

              leading-[1.08]
            "
          >

            <span className="accent-heading">
              Everything You Need
            </span>

            <br />

            <span className="
              text-slate-900
              dark:text-white
            ">
              To Know About KAC
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6
              md:mt-7

              max-w-3xl
              mx-auto

              text-slate-600
              dark:text-white/60

              text-sm
              md:text-base

              leading-[1.9]
              md:leading-[2]
            "
          >

            Explore commonly asked questions
            regarding our transmission line
            infrastructure services, execution
            capabilities and operational expertise.

          </p>

        </motion.div>

        {/* ================================================= */}
        {/* 🔥 FAQ LIST */}
        {/* ================================================= */}

        <div
          className="
            space-y-4
            md:space-y-6
          "
        >

          {faqs.map((item, i) => {

            const isOpen = open === i;

            return (

              <motion.div
                key={i}

                initial={{
                  opacity: 0,
                  y: 50,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                }}

                viewport={{
                  once: true,
                }}

                className={`
                  group

                  relative

                  overflow-hidden

                  rounded-[22px]
                  md:rounded-[30px]

                  border

                  ${isOpen
                    ? "border-cyan-400/20 bg-slate-50 dark:bg-white/[0.06]"
                    : "border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04]"
                  }

                  backdrop-blur-2xl

                  transition-all duration-500

                  hover:border-cyan-400/20
                `}
              >

                {/* HOVER GLOW */}
                <div
                  className="
                    absolute inset-0

                    opacity-0
                    group-hover:opacity-100

                    transition duration-500

                    bg-gradient-to-r
                    from-cyan-500/5
                    to-blue-500/5
                  "
                />

                {/* ================================================= */}
                {/* 🔥 QUESTION */}
                {/* ================================================= */}

                <button
                  type="button"
                  id={`faq-trigger-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => {
                    setOpen(isOpen ? null : i);
                  }}

                  className="
                    relative z-10

                    w-full

                    flex
                    items-center
                    justify-between

                    gap-4
                    md:gap-6

                    p-5
                    md:p-8

                    text-left
                  "
                >

                  <div className="flex-1">

                    {/* NUMBER */}
                    <div
                      className="
                        mb-2
                        md:mb-3

                    accent-link

                        text-[10px]
                        md:text-xs

                        tracking-[3px]
                        md:tracking-[4px]

                        uppercase
                      "
                    >
                      FAQ 0{i + 1}
                    </div>

                    {/* QUESTION */}
                    <h3
                      className="
                        text-base
                        sm:text-lg
                        md:text-2xl

                        font-bold

                        leading-[1.5]

                        text-slate-900
                        dark:text-white
                      "
                    >
                      {item.q}
                    </h3>

                  </div>

                  {/* ICON */}
                  <div
                    className="
                      flex-shrink-0

                      w-11 h-11
                      md:w-14 md:h-14

                      rounded-xl
                      md:rounded-2xl

                      border

                      border-slate-200
                      dark:border-white/10

                      bg-white
                      dark:bg-white/[0.05]

                      flex
                      items-center
                      justify-center

                      accent-link

                      transition duration-500

                      group-hover:border-cyan-400/20
                    "
                  >

                    {isOpen ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}

                  </div>

                </button>

                {/* ================================================= */}
                {/* 🔥 ANSWER */}
                {/* ================================================= */}

                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}

                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}

                      exit={{
                        height: 0,
                        opacity: 0,
                      }}

                      transition={{
                        duration: 0.45,
                      }}

                      className="overflow-hidden"
                    >

                      <div
                        className="
                          relative z-10

                          px-5
                          md:px-8

                          pb-6
                          md:pb-8
                        "
                      >

                        {/* LINE */}
                        <div
                          className="
                            w-full
                            h-px

                            bg-slate-200
                            dark:bg-white/10

                            mb-5
                            md:mb-6
                          "
                        />

                        {/* ANSWER TEXT */}
                        <p
                          className="
                            text-slate-600
                            dark:text-white/65

                            leading-[1.9]
                            md:leading-[2]

                            text-sm
                            md:text-base
                          "
                        >
                          {item.a}
                        </p>

                        {/* CTA */}
                        <div className="mt-5 md:mt-6">

                          <button
                            onClick={() => {
                              window.location.href = "/contact";
                            }}

                            className="
                              group/btn

                              inline-flex
                              items-center
                              gap-3

                              accent-link

                              text-sm
                              md:text-base

                              font-medium

                              transition duration-300
                            "
                          >

                            Contact Our Team

                            <ArrowUpRight
                              size={18}

                              className="
                                transition

                                group-hover/btn:translate-x-1
                                group-hover/btn:-translate-y-1
                              "
                            />

                          </button>

                        </div>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}