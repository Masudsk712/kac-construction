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

      overflow-x-hidden

      bg-[#020617]

      text-white
    "
    >

      {/* ======================================== */}
      {/* GLOBAL BG */}
      {/* ======================================== */}

      <div className="fixed inset-0 -z-50 bg-[#020617]" />

      {/* GRID */}
      <div
        className="
        fixed inset-0

        -z-40

        opacity-[0.03]

        [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

        [background-size:60px_60px]
      "
      />

      {/* GLOW */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-30">

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

      </div>

      {/* ======================================== */}
      {/* HERO */}
      {/* ======================================== */}

      <section
        className="
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

          bg-[url('/placeholder.jpg')]

          bg-cover
          bg-center

          scale-105
        "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#020617]/88" />

        {/* GRADIENT */}
        <div
          className="
          absolute inset-0

          bg-gradient-to-r
          from-[#020617]
          via-[#020617]/85
          to-[#020617]/30
        "
        />

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

                text-gray-300

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

                  border border-white/10

                  bg-white/[0.05]

                  backdrop-blur-2xl

                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.08]

                  transition-all duration-500
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

                border border-white/10

                bg-white/[0.04]

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

                    border border-white/10

                    bg-white/[0.04]

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

                        <h3 className="text-xl font-bold">
                          Career Opportunities
                        </h3>

                        <p className="text-white/50 text-sm">
                          Infrastructure & EPC Projects
                        </p>

                      </div>

                    </div>

                    <p className="text-white/65 leading-[1.8] text-sm">
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

                        border border-white/10

                        bg-white/[0.03]

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

                        <p className="text-white/60 text-sm">
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
          to-[#020617]
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
                "
                >
                  Current Openings
                </h2>

                <p className="text-white/50 mt-2">
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

                border border-white/10

                bg-white/[0.04]

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

                          px-4 py-2

                          rounded-full
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

                          px-4 py-2

                          rounded-full
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

                  {/* ELIGIBILITY */}
                  <div className="mt-8">

                    <h4
                      className="
                      text-lg

                      font-semibold

                      text-cyan-400
                    "
                    >
                      Eligibility
                    </h4>

                    <p
                      className="
                      mt-3

                      text-white/60

                      leading-[1.9]
                    "
                    >
                      {job.eligibility}
                    </p>

                  </div>

                  {/* RESPONSIBILITIES */}
                  <div className="mt-8">

                    <h4
                      className="
                      text-lg

                      font-semibold

                      text-cyan-400
                    "
                    >
                      Responsibilities
                    </h4>

                    <div className="mt-5 space-y-4">

                      {job.responsibilities.map((item, i) => (

                        <div
                          key={i}

                          className="
                          flex items-start
                          gap-3
                        "
                        >

                          <CheckCircle2
                            size={18}
                            className="text-cyan-400 mt-1"
                          />

                          <p className="text-white/70">
                            {item}
                          </p>

                        </div>

                      ))}

                    </div>

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

        pb-28
      "
      >

        <div
          className="
          max-w-7xl
          mx-auto

          px-6
        "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
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
          >

            <div
              className="
              relative

              overflow-hidden

              rounded-[40px]

              border border-white/10

              bg-white/[0.04]

              backdrop-blur-3xl

              p-6 sm:p-10 lg:p-14
            "
            >

              {/* GLOW */}
              <div
                className="
                absolute inset-0

                bg-gradient-to-br
                from-cyan-500/5
                via-transparent
                to-blue-500/5
              "
              />

              <div className="relative z-10">

                {/* TOP */}
                <div className="text-center">

                  <div
                    className="
                    inline-flex

                    items-center
                    gap-3

                    px-5 py-2

                    rounded-full

                    border border-cyan-400/20

                    bg-cyan-400/10

                    backdrop-blur-xl

                    mb-6
                  "
                  >

                    <Building2
                      size={14}
                      className="text-cyan-300"
                    />

                    <span
                      className="
                      text-[10px]

                      tracking-[4px]

                      text-cyan-200
                    "
                    >
                      APPLY NOW
                    </span>

                  </div>

                  <h2
                    className="
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl

                    font-black
                  "
                  >
                    Submit Your CV
                  </h2>

                  <p
                    className="
                    mt-5

                    text-white/60

                    max-w-2xl

                    mx-auto

                    leading-[1.9]
                  "
                  >

                    Fill out the form below and our HR
                    team will contact you if your profile
                    matches our requirements.

                  </p>

                </div>

                {/* FORM */}
                <form className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div>

                    <label className="text-sm text-white/70">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your full name"

                      className="
                      mt-3

                      w-full

                      bg-[#0f172a]/80

                      border border-white/10

                      focus:border-cyan-400

                      rounded-2xl

                      px-5 py-4

                      outline-none

                      transition duration-300
                    "
                    />

                  </div>

                  <div>

                    <label className="text-sm text-white/70">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your number"

                      className="
                      mt-3

                      w-full

                      bg-[#0f172a]/80

                      border border-white/10

                      focus:border-cyan-400

                      rounded-2xl

                      px-5 py-4

                      outline-none

                      transition duration-300
                    "
                    />

                  </div>

                  <div>

                    <label className="text-sm text-white/70">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"

                      className="
                      mt-3

                      w-full

                      bg-[#0f172a]/80

                      border border-white/10

                      focus:border-cyan-400

                      rounded-2xl

                      px-5 py-4

                      outline-none

                      transition duration-300
                    "
                    />

                  </div>

                  <div>

                    <label className="text-sm text-white/70">
                      Experience
                    </label>

                    <input
                      type="text"
                      placeholder="e.g. 3 Years"

                      className="
                      mt-3

                      w-full

                      bg-[#0f172a]/80

                      border border-white/10

                      focus:border-cyan-400

                      rounded-2xl

                      px-5 py-4

                      outline-none

                      transition duration-300
                    "
                    />

                  </div>

                  <div className="md:col-span-2">

                    <label className="text-sm text-white/70">
                      Applying For
                    </label>

                    <select
                      className="
                      mt-3

                      w-full

                      bg-[#0f172a]/80

                      border border-white/10

                      focus:border-cyan-400

                      rounded-2xl

                      px-5 py-4

                      outline-none

                      transition duration-300
                    "
                    >

                      <option>Site Supervisor</option>

                      <option>
                        Tower Erection Engineer
                      </option>

                      <option>
                        Stringing Supervisor
                      </option>

                    </select>

                  </div>

                  <div className="md:col-span-2">

                    <label className="text-sm text-white/70">
                      Message
                    </label>

                    <textarea
                      rows={6}

                      placeholder="Tell us about your experience..."

                      className="
                      mt-3

                      w-full

                      bg-[#0f172a]/80

                      border border-white/10

                      focus:border-cyan-400

                      rounded-2xl

                      px-5 py-4

                      outline-none

                      transition duration-300

                      resize-none
                    "
                    />

                  </div>

                  <div className="md:col-span-2">

                    <label className="text-sm text-white/70">
                      Upload CV / Resume
                    </label>

                    <input
                      type="file"

                      className="
                      mt-3

                      w-full

                      bg-[#0f172a]/80

                      border border-dashed border-cyan-400/40

                      rounded-2xl

                      px-5 py-4

                      text-gray-400
                    "
                    />

                  </div>

                  {/* BUTTON */}
                  <div className="md:col-span-2">

                    <button
                      type="submit"

                      className="
                      group

                      w-full

                      bg-cyan-500

                      hover:bg-cyan-400

                      text-black

                      font-bold

                      py-5

                      rounded-2xl

                      transition duration-300

                      flex items-center justify-center
                      gap-3

                      hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
                    "
                    >

                      Submit Application

                      <Send
                        size={18}

                        className="
                        group-hover:translate-x-1

                        transition duration-300
                      "
                      />

                    </button>

                  </div>

                </form>

                {/* EMAIL INFO */}
                <div
                  className="
                  mt-10

                  flex flex-col
                  sm:flex-row

                  items-center
                  justify-center

                  gap-4

                  text-white/50

                  text-sm
                "
                >

                  <div className="flex items-center gap-2">

                    <Mail
                      size={16}
                      className="text-cyan-400"
                    />

                    hr@kacconstruction.com

                  </div>

                  <div
                    className="
                    hidden sm:block

                    w-1 h-1

                    rounded-full

                    bg-white/30
                  "
                  />

                  <div>
                    PAN India Hiring
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* CTA */}
      <CTASection />

    </main>
  );
}