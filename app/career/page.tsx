"use client";
import { motion } from "framer-motion";

import {
  Briefcase,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Send,
  Users,
  Sparkles,
  ArrowUpRight,
  Building2,
  ShieldCheck,
  RadioTower,
} from "lucide-react";

import CTASection from "@/components/CTASection";

const jobs = [
  {
    title: "Site Supervisor",

    location: "PAN India",

    type: "Full Time",

    experience: "2+ Years",

    eligibility:
      "Diploma / ITI / Experience in Transmission Line Projects",

    responsibilities: [
      "Handle tower erection activities",
      "Manage site workforce",
      "Ensure safety compliance",
    ],
  },

  {
    title: "Tower Erection Engineer",

    location: "Assam & West Bengal",

    type: "Full Time",

    experience: "3+ Years",

    eligibility:
      "B.Tech / Diploma in Civil or Electrical Engineering",

    responsibilities: [
      "Manage erection process",
      "Coordinate project execution",
      "Prepare daily progress reports",
    ],
  },

  {
    title: "Stringing Supervisor",

    location: "North East India",

    type: "Contract",

    experience: "2+ Years",

    eligibility:
      "Experience in transmission stringing work preferred",

    responsibilities: [
      "Monitor stringing activities",
      "Maintain equipment safety",
      "Coordinate field teams",
    ],
  },
];

export default function CareerPage() {

  return (

    <main
  className="
  relative
  bg-[var(--bg)]
  text-[var(--text)]
  z-10
"
>
      {/* BACKGROUND GLOWS */}
        <div
          className="
          absolute

          top-[-220px]
          left-[-180px]

          w-[650px]
          h-[650px]

          rounded-full

          bg-cyan-500/10

          blur-[160px]
        "
        />

        <div
          className="
          absolute

          bottom-[-240px]
          right-[-180px]

          w-[650px]
          h-[650px]

          rounded-full

          bg-blue-500/10

          blur-[170px]
        "
        />

      
      <section
        className="
        page-hero
        relative

        min-h-screen

        flex items-center

        overflow-hidden
      "
      >

        {/* BG IMAGE */}
        <div
          className="
          absolute inset-0

          bg-[url('/career/Career1.webp')]

          bg-cover
          bg-center

          scale-105
        "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 hero-page-overlay" />

        {/* GRADIENT */}
        <div className="absolute inset-0 hero-page-gradient" />

        {/* CONTENT */}
        <div
          className="
          relative z-10

          max-w-7xl
          mx-auto

          px-6
          md:px-10

          w-full

          pt-36
          pb-24
        "
        >

          {/* TOP BADGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
            }}

            className="
            inline-flex

            items-center
            gap-3

            px-5 py-2

            rounded-full

            border border-cyan-400/20

            bg-cyan-400/10

            backdrop-blur-2xl

            shadow-[0_0_30px_rgba(34,211,238,0.08)]

            mb-10
          "
          >

            <Sparkles
              size={14}
              className="text-cyan-300"
            />

            <span
              className="
              text-xs

              tracking-[4px]

              text-cyan-200
            "
            >
              JOIN KUDDUS ALI CONSTRUCTION
            </span>

          </motion.div>

          {/* HERO GRID */}
          <div
            className="
            grid
            lg:grid-cols-[1.1fr_0.9fr]

            gap-20

            items-center
          "
          >

            {/* LEFT */}
            <div>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 70,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 1,
                }}

                className="
                text-[48px]
                sm:text-[68px]
                lg:text-[96px]

                leading-[0.92]

                font-black

                tracking-[-4px]
                text-[var(--text)]
              "
              >

                Build Your Career With

                <span
                  className="
                  block

                  mt-4

                  text-cyan-400

                  drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]
                "
                >
                  India's Infrastructure Experts
                </span>

              </motion.h1>

              {/* LINE */}
              <motion.div
                initial={{
                  width: 0,
                }}

                animate={{
                  width: "140px",
                }}

                transition={{
                  delay: 0.7,
                  duration: 0.8,
                }}

                className="
                h-[4px]

                bg-gradient-to-r
                from-cyan-400
                to-blue-500

                mt-10
                mb-10

                rounded-full
              "
              />

              {/* TEXT */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 40,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: 0.5,
                }}

                className="
                text-lg
                md:text-xl

                text-[var(--text-soft)]

                leading-[2]

                max-w-3xl
              "
              >

                Become part of our growing team working on
                transmission line, tower erection,
                stringing and power infrastructure
                projects across India with engineering
                excellence and professional growth.

              </motion.p>

              {/* BUTTONS */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: 0.8,
                }}

                className="
                flex flex-wrap

                gap-5

                mt-14
              "
              >

                <a
                  href="#jobs"

                  className="
                  inline-flex items-center
                  gap-3

                  px-8 py-4

                  rounded-full

                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500

                  text-black
                  font-semibold

                  shadow-[0_0_40px_rgba(34,211,238,0.35)]

                  hover:scale-105

                  transition-all duration-500
                "
                >

                  View Openings

                  <ArrowUpRight size={18} />

                </a>

                <a
                  href="#apply"

                  className="
                  inline-flex items-center
                  gap-3

                  px-8 py-4

                  rounded-full

                  border border-[var(--border)]

                  bg-[var(--glass)]

                  backdrop-blur-2xl

                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.08]

                  transition-all duration-500
                  text-[var(--text)]
                "
                >

                  Apply Now

                  <Send size={18} />

                </a>

              </motion.div>

            </div>

            {/* RIGHT CARD */}
            <motion.div
              initial={{
                opacity: 0,
                x: 80,
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                delay: 0.4,
                duration: 1,
              }}

              className="relative"
            >

              <div
                className="
                relative

                overflow-hidden

                rounded-[36px]

                border border-[var(--border)]

                bg-[var(--card)]

                backdrop-blur-3xl

                p-6
              "
              >

                <div
                  className="
                  absolute inset-0

                  bg-gradient-to-br
                  from-cyan-500/10
                  via-transparent
                  to-blue-500/10
                "
                />

                <div className="relative z-10 space-y-5">

                  {/* TOP */}
                  <div
                    className="
                    rounded-3xl

                    border border-[var(--border)]

                    bg-[var(--card)]

                    p-5
                  "
                  >

                    <div className="flex items-center gap-4 mb-4">

                      <div
                        className="
                        w-14 h-14

                        rounded-2xl

                        bg-cyan-400/10

                        border border-cyan-400/20

                        flex items-center justify-center

                        text-cyan-300
                      "
                      >

                        <RadioTower size={24} />

                      </div>

                      <div>

                        <h3 className="text-xl font-bold text-[var(--text)]">
                          Career Opportunities
                        </h3>

                        <p className="text-[var(--text-soft)] text-sm">
                          Infrastructure & EPC Projects
                        </p>

                      </div>

                    </div>

                    <p className="text-[var(--text-soft)] leading-[1.8] text-sm">
                      Work with experienced professionals on
                      transmission infrastructure projects
                      across India.
                    </p>

                  </div>

                  {/* STATS */}
                  <div className="grid grid-cols-2 gap-5">

                    {[
                      {
                        number: "PAN",
                        label: "India Hiring",
                      },

                      {
                        number: "24/7",
                        label: "Site Operations",
                      },

                      {
                        number: "500+",
                        label: "Projects",
                      },

                      {
                        number: "Growth",
                        label: "Opportunities",
                      },
                    ].map((item, index) => (

                      <div
                        key={index}

                        className="
                        rounded-2xl

                        border border-[var(--border)]

                        bg-[var(--card)]

                        p-5

                        text-center
                      "
                      >

                        <h3
                          className="
                          text-2xl

                          font-black

                          text-cyan-400

                          mb-2
                        "
                        >
                          {item.number}
                        </h3>

                        <p className="text-[var(--text-soft)] text-sm">
                          {item.label}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

        {/* BOTTOM FADE */}
        <div
          className="
          absolute bottom-0 left-0

          w-full h-40

          bg-gradient-to-b
          from-transparent
          to-[var(--bg)]
        "
        />

      </section>

      {/* ======================================== */}
      {/* JOB SECTION */}
      {/* ======================================== */}

      <section
        id="jobs"

        className="
        relative

        py-28

        overflow-hidden
      "
      >

        {/* GLOW */}
        <div className="absolute inset-0 pointer-events-none">

          <div
            className="
            absolute

            w-[500px]
            h-[500px]

            bg-cyan-500/10

            blur-[120px]

            top-0 left-0
          "
          />

          <div
            className="
            absolute

            w-[420px]
            h-[420px]

            bg-blue-500/10

            blur-[110px]

            bottom-0 right-0
          "
          />

        </div>

        <div
          className="
          relative z-10

          max-w-7xl
          mx-auto

          px-6
        "
        >

          {/* TOP */}
          <div
            className="
            flex flex-col
            md:flex-row

            md:items-center
            justify-between

            gap-6

            mb-16
          "
          >

            <div className="flex items-center gap-5">

              <div
                className="
                w-16 h-16

                rounded-3xl

                bg-cyan-500/10

                border border-cyan-400/20

                flex items-center justify-center
              "
              >

                <Briefcase className="text-cyan-400" />

              </div>

              <div>

                <h2
                  className="
                  text-3xl
                  md:text-5xl

                  font-black
                  text-[var(--text)]
                "
                >
                  Current Openings
                </h2>

                <p className="text-[var(--text-soft)] mt-2">
                  Explore available vacancies at Kuddus Ali Construction
                </p>

              </div>

            </div>

            <div
              className="
              inline-flex

              items-center
              gap-2

              px-5 py-3

              rounded-full

              border border-emerald-400/20

              bg-emerald-400/10

              text-emerald-300

              text-sm

              w-fit
            "
            >

              <ShieldCheck size={16} />

              Hiring Across India

            </div>

          </div>

          {/* JOB GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {jobs.map((job, index) => (

              <motion.div
                key={index}

                initial={{
                  opacity: 0,
                  y: 80,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}

                viewport={{
                  once: true,
                }}

                whileHover={{
                  y: -10,
                }}

                className="
                group

                relative

                overflow-hidden

                rounded-[34px]

                border border-[var(--border)]

                bg-[var(--card)]

                backdrop-blur-3xl

                p-6 sm:p-8

                hover:border-cyan-400/30

                transition-all duration-500
              "
              >

                {/* GLOW */}
                <div
                  className="
                  absolute inset-0

                  opacity-0

                  group-hover:opacity-100

                  transition duration-500

                  bg-gradient-to-br
                  from-cyan-500/10
                  via-transparent
                  to-blue-500/10
                "
                />

                <div className="relative z-10">

                  {/* TOP */}
                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <h3
                        className="
                        text-2xl

                        font-black

                        group-hover:text-cyan-300

                        transition duration-300
                        text-[var(--text)]
                      "
                      >
                        {job.title}
                      </h3>

                      <div className="mt-5 flex flex-wrap gap-3">

                        <div
                          className="
                          flex items-center
                          gap-2

                          text-sm

                          bg-cyan-500/10

                          border border-cyan-400/10

                          text-cyan-300

                          px-4 py-2

                          rounded-full
                        "
                        >

                          <MapPin size={15} />

                          {job.location}

                        </div>

                        <div
                          className="
                          flex items-center
                          gap-2

                          text-sm

                          bg-white/10
                          dark:bg-white/10

                          px-4 py-2

                          rounded-full
                          text-[var(--text-soft)]
                        "
                        >

                          <Clock3 size={15} />

                          {job.type}

                        </div>

                        <div
                          className="
                          flex items-center
                          gap-2

                          text-sm

                          bg-white/10
                          dark:bg-white/10

                          px-4 py-2

                          rounded-full
                          text-[var(--text-soft)]
                        "
                        >

                          <Users size={15} />

                          {job.experience}

                        </div>

                      </div>

                    </div>

                    <div
                      className="
                      min-w-[54px]
                      h-[54px]

                      rounded-2xl

                      bg-cyan-400/10

                      border border-cyan-400/20

                      flex items-center justify-center

                      text-cyan-300

                      group-hover:scale-110

                      transition
                    "
                    >

                      <ArrowUpRight size={20} />

                    </div>

                  </div>

                  {/* DETAILS */}
                  <div className="mt-8 md:mt-10">

                    <p className="text-[var(--text-soft)] text-sm leading-relaxed mb-6">
                      <span className="font-semibold text-[var(--text)]">Eligibility:</span>{" "}
                      {job.eligibility}
                    </p>

                    <div className="space-y-4">

                      {job.responsibilities.map((resp, i) => (

                        <div
                          key={i}
                          className="flex items-start gap-3"
                        >

                          <CheckCircle2
                            size={20}
                            className="
                            text-cyan-400

                            mt-1

                            flex-shrink-0
                          "
                          />

                          <p className="text-[var(--text-soft)] text-sm leading-relaxed">
                            {resp}
                          </p>

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* BOTTOM */}
                  <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-[var(--border)] flex items-center justify-between">

                    <button
                      className="
                      inline-flex items-center
                      gap-3

                      px-6 py-3

                      rounded-full

                      border border-[var(--border)]

                      text-sm
                      font-medium

                      text-[var(--text)]

                      hover:border-cyan-400/30
                      hover:bg-cyan-400/[0.05]

                      transition-all duration-300
                    "
                    >
                      <Send size={15} />
                      Apply Now
                    </button>

                    <span className="text-xs text-[var(--text-soft)]">
                      Job ID: KAC-{2026 - index}
                    </span>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ======================================== */}
      {/* APPLY SECTION */}
      {/* ======================================== */}

      <section
        id="apply"

        className="
        relative

        py-28

        overflow-hidden
      "
      >

        {/* GLOW */}
        <div className="absolute inset-0 pointer-events-none">

          <div
            className="
            absolute

            w-[500px]
            h-[500px]

            bg-cyan-500/10

            blur-[130px]

            top-0 right-0
          "
          />

        </div>

        <div
          className="
          relative z-10

          max-w-7xl
          mx-auto

          px-6
        "
        >

          <div
            className="
            grid
            lg:grid-cols-2

            gap-16

            items-center
          "
          >

            {/* LEFT CONTENT */}
            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                duration: 0.8,
              }}

              viewport={{
                once: true,
              }}
            >

              <p className="uppercase tracking-widest text-cyan-400 text-sm mb-6">
                SUBMIT YOUR APPLICATION
              </p>

              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
                <span className="text-[var(--text)]">
                  Ready To Join
                </span>

                <span className="block text-cyan-400">
                  Our Team?
                </span>
              </h2>

              <p className="text-[var(--text-soft)] leading-relaxed text-lg mb-10">
                Send your updated resume and we will connect
                with you for relevant opportunities in
                transmission infrastructure projects
                across India.
              </p>

              <div className="flex items-center gap-5 text-sm">

                <div className="flex items-center gap-3">

                  <Mail
                    size={18}
                    className="text-cyan-400"
                  />

                  <span className="text-[var(--text-soft)]">
                    kuddusali45@gmail.com
                  </span>

                </div>

              </div>

            </motion.div>

            {/* RIGHT FORM */}
            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
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

              rounded-[36px]

              border border-[var(--border)]

              bg-[var(--card)]

              backdrop-blur-3xl

              p-8 md:p-10
            "
            >

              <div
                className="
                absolute inset-0

                bg-gradient-to-br
                from-cyan-500/10
                via-transparent
                to-blue-500/10
              "
              />

              <div className="relative z-10">

                <h3 className="text-2xl font-black mb-8 text-[var(--text)]">
                  Send Your Application
                </h3>

                {/* FORM */}
                <form className="space-y-6">

                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="
                    w-full

                    px-5 py-4

                    rounded-2xl

                    border border-[var(--border)]

                    bg-[var(--bg)]

                    text-[var(--text)]

                    placeholder:text-[var(--text-soft)]

                    outline-none

                    focus:border-cyan-400/40

                    transition-all duration-300
                  "
                  />

                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="
                    w-full

                    px-5 py-4

                    rounded-2xl

                    border border-[var(--border)]

                    bg-[var(--bg)]

                    text-[var(--text)]

                    placeholder:text-[var(--text-soft)]

                    outline-none

                    focus:border-cyan-400/40

                    transition-all duration-300
                  "
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="
                    w-full

                    px-5 py-4

                    rounded-2xl

                    border border-[var(--border)]

                    bg-[var(--bg)]

                    text-[var(--text)]

                    placeholder:text-[var(--text-soft)]

                    outline-none

                    focus:border-cyan-400/40

                    transition-all duration-300
                  "
                  />

                  <select
                    className="
                    w-full

                    px-5 py-4

                    rounded-2xl

                    border border-[var(--border)]

                    bg-[var(--bg)]

                    text-[var(--text)]

                    placeholder:text-[var(--text-soft)]

                    outline-none

                    focus:border-cyan-400/40

                    transition-all duration-300
                  "
                  >
                    <option value="">
                      Select Position
                    </option>

                    <option value="supervisor">
                      Site Supervisor
                    </option>

                    <option value="engineer">
                      Tower Erection Engineer
                    </option>

                    <option value="stringing">
                      Stringing Supervisor
                    </option>

                  </select>

                  <textarea
                    placeholder="Cover Letter / Additional Info"
                    rows={4}
                    className="
                    w-full

                    px-5 py-4

                    rounded-2xl

                    border border-[var(--border)]

                    bg-[var(--bg)]

                    text-[var(--text)]

                    placeholder:text-[var(--text-soft)]

                    outline-none

                    focus:border-cyan-400/40

                    transition-all duration-300

                    resize-none
                  "
                  />

                  <button
                    type="submit"
                    className="
                    w-full

                    py-4

                    rounded-2xl

                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500

                    text-black
                    font-bold

                    hover:scale-[1.02]

                    transition-all duration-300
                  "
                  >

                    <span className="flex items-center justify-center gap-3">

                      Submit Application

                      <Send size={18} />

                    </span>

                  </button>

                </form>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <CTASection />

    </main>
  );
}