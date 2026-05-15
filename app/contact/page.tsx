"use client";
import { motion } from "framer-motion";

import {
  Mail,
  MapPin,
  Phone,
  Send,
  Clock3,
  Building2,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  RadioTower,
} from "lucide-react";

const contactCards = [
  {
    icon: Phone,

    title: "Mobile",

    value: "+91 9735067595",

    value2: "+91 9933638309",

    desc:
      "Available for project enquiries, EPC discussions and infrastructure coordination.",
  },

  {
    icon: Mail,

    title: "Email Address",

    value: "kuddusali45@gmail.com",

    desc:
      "Send us your transmission, foundation or infrastructure requirements anytime.",
  },

  {
    icon: MapPin,

    title: "Office Address",

    value:
      "Kuddus Ali Construction, Mahisbathani Baluatola, PO Barkol, Malda - 732128, India",

    desc:
      "Corporate infrastructure & transmission project office.",
  },
];

export default function ContactPage() {

  return (

    <main
  className="
  relative
  bg-[#020617]
  text-white
  z-10
"
>
      {/* GLOW */}
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
        <div className="absolute inset-0 bg-[#020617]/85" />

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
              CONTACT KUDDUS ALI CONSTRUCTION
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

                Let’s Build India’s

                <span
                  className="
                  block

                  mt-4

                  text-cyan-400

                  drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]
                "
                >
                  Future Together
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

                Reach out to Kuddus Ali Construction for
                transmission line, tower erection,
                stringing, foundation, EPC infrastructure
                and high-voltage power projects across India.

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
                  href="tel:+919735067595"

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

                  Call Now

                  <Phone size={18} />

                </a>

                <a
                  href="mailto:kuddusali45@gmail.com"

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

                  Send Email

                  <ArrowUpRight size={18} />

                </a>

              </motion.div>

            </div>

            {/* RIGHT PREMIUM CARD */}
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

              {/* MAIN CARD */}
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

                  {/* ITEM */}
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
                          Transmission Projects
                        </h3>

                        <p className="text-white/50 text-sm">
                          EPC Infrastructure Solutions
                        </p>

                      </div>

                    </div>

                    <p className="text-white/65 leading-[1.8] text-sm">
                      Specialized in foundation, erection,
                      stringing and transmission line execution
                      across India.
                    </p>

                  </div>

                  {/* STATS */}
                  <div className="grid grid-cols-2 gap-5">

                    {[
                      {
                        number: "500+",
                        label: "Projects",
                      },

                      {
                        number: "24/7",
                        label: "Support",
                      },

                      {
                        number: "20+",
                        label: "States",
                      },

                      {
                        number: "765kV",
                        label: "Expertise",
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
      {/* CONTACT SECTION */}
      {/* ======================================== */}

      <section
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

          {/* HEADING */}
          <div
            className="
            text-center

            max-w-4xl
            mx-auto

            mb-20
          "
          >

            <p
              className="
              text-sm

              tracking-widest

              text-white/60

              mb-3
            "
            >
              GET IN TOUCH
            </p>

            <h2
              className="
              text-4xl
              md:text-5xl

              font-black
            "
            >

              <span className="gradient-text">
                Contact Our Infrastructure Team
              </span>

            </h2>

          </div>

          {/* GRID */}
          <div
            className="
            grid

            lg:grid-cols-[0.9fr_1.1fr]

            gap-10

            items-start
          "
          >

            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                x: -80,
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

              className="space-y-6"
            >

              {/* INTRO */}
              <div
                className="
                relative

                overflow-hidden

                rounded-[32px]

                border border-white/10

                bg-white/[0.04]

                backdrop-blur-3xl

                p-8
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

                  <div className="flex items-center gap-4 mb-6">

                    <div
                      className="
                      w-16 h-16

                      rounded-3xl

                      bg-cyan-500/10

                      border border-cyan-400/20

                      flex items-center justify-center
                    "
                    >

                      <Building2 className="text-cyan-400" />

                    </div>

                    <div>

                      <h3 className="text-2xl font-black">
                        Kuddus Ali Construction
                      </h3>

                      <p className="text-white/50 text-sm mt-1">
                        Powering India’s Infrastructure
                      </p>

                    </div>

                  </div>

                  <p className="text-white/65 leading-[1.9]">
                    Reach out for project enquiries,
                    transmission infrastructure, EPC
                    solutions and partnership discussions.
                  </p>

                  <div
                    className="
                    mt-6

                    inline-flex

                    items-center
                    gap-3

                    px-4 py-3

                    rounded-2xl

                    bg-cyan-400/10

                    border border-cyan-400/20

                    text-cyan-300

                    text-sm
                  "
                  >

                    <Clock3 size={16} />

                    Monday - Saturday | 9 AM - 7 PM

                  </div>

                </div>

              </div>

              {/* CONTACT CARDS */}
              {contactCards.map((item, index) => (

                <motion.div
                  key={index}

                  whileHover={{
                    y: -8,
                    scale: 1.01,
                  }}

                  className="
                  group

                  relative

                  overflow-hidden

                  rounded-[30px]

                  border border-white/10

                  bg-white/[0.04]

                  backdrop-blur-3xl

                  p-7

                  hover:border-cyan-400/20

                  transition-all duration-500
                "
                >

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

                  <div className="relative z-10 flex items-start gap-5">

                    {/* ICON */}
                    <div
                      className="
                      min-w-[62px]
                      h-[62px]

                      rounded-2xl

                      bg-cyan-500/10

                      border border-cyan-400/20

                      flex items-center justify-center

                      text-cyan-400

                      group-hover:scale-110

                      transition
                    "
                    >

                      <item.icon size={24} />

                    </div>

                    {/* CONTENT */}
                    <div className="flex-1">

                      <div
                        className="
                        flex items-center
                        justify-between

                        gap-4
                      "
                      >

                        <h3 className="text-2xl font-bold">
                          {item.title}
                        </h3>

                        <ArrowUpRight className="text-cyan-400" />

                      </div>

                      <p
                        className="
                        mt-4

                        text-white

                        text-lg

                        break-words
                      "
                      >
                        {item.value}
                      </p>

                      {item.value2 && (

                        <p
                          className="
                          mt-2

                          text-white

                          text-lg

                          break-words
                        "
                        >
                          {item.value2}
                        </p>

                      )}

                      <p
                        className="
                        mt-4

                        text-white/60

                        leading-[1.8]
                      "
                      >
                        {item.desc}
                      </p>

                    </div>

                  </div>

                </motion.div>

              ))}

            </motion.div>

            {/* RIGHT FORM */}
            <motion.div
              initial={{
                opacity: 0,
                x: 80,
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

              <div
                className="
                relative

                overflow-hidden

                rounded-[38px]

                border border-white/10

                bg-white/[0.04]

                backdrop-blur-3xl

                p-6 sm:p-8 lg:p-10

                shadow-[0_0_80px_rgba(0,0,0,0.6)]
              "
              >

                {/* GLOW */}
                <div
                  className="
                  absolute

                  top-0
                  right-0

                  w-[300px]
                  h-[300px]

                  bg-cyan-500/10

                  blur-[100px]
                "
                />

                <div className="relative z-10">

                  {/* TOP */}
                  <div className="mb-10">

                    <div
                      className="
                      inline-flex

                      items-center
                      gap-3

                      px-4 py-2

                      rounded-full

                      border border-cyan-400/20

                      bg-cyan-400/10

                      mb-5
                    "
                    >

                      <ShieldCheck
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
                        SEND MESSAGE
                      </span>

                    </div>

                    <h2
                      className="
                      text-3xl
                      md:text-4xl

                      font-black

                      mb-5
                    "
                    >
                      Start Your Project Discussion
                    </h2>

                    <p
                      className="
                      text-white/60

                      leading-[1.9]
                    "
                    >
                      Fill out the form below and our
                      infrastructure experts will contact
                      you shortly.
                    </p>

                  </div>

                  {/* FORM */}
                  <form
                    action="https://formspree.io/f/xaqvkbzo"
                    method="POST"
                    className="space-y-6"
                  >
                    {/* NAME */}
                    <div>
                      <label className="text-sm text-white/70">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        required
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
      transition-all duration-300
    "
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="text-sm text-white/70">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        required
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
      transition-all duration-300
    "
                      />
                    </div>

                    {/* PHONE */}
                    <div>
                      <label className="text-sm text-white/70">
                        Phone Number
                      </label>

                      <input
                        type="text"
                        name="phone"
                        placeholder="Enter your phone number"
                        className="
      mt-3
      w-full
      bg-[#0f172a]/80
      border border-white/10
      focus:border-cyan-400
      rounded-2xl
      px-5 py-4
      outline-none
      transition-all duration-300
    "
                      />
                    </div>

                    {/* PROJECT */}
                    <div>
                      <label className="text-sm text-white/70">
                        Project Type
                      </label>

                      <select
                        name="projectType"
                        className="
      mt-3
      w-full
      bg-[#0f172a]/80
      border border-white/10
      focus:border-cyan-400
      rounded-2xl
      px-5 py-4
      outline-none
      transition-all duration-300
    "
                      >
                        <option>
                          Transmission Line
                        </option>

                        <option>
                          Foundation Work
                        </option>

                        <option>
                          Stringing Work
                        </option>

                        <option>
                          Tower Erection
                        </option>

                        <option>
                          EPC Infrastructure
                        </option>
                      </select>
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label className="text-sm text-white/70">
                        Message
                      </label>

                      <textarea
                        rows={6}
                        name="message"
                        required
                        placeholder="Tell us about your project..."
                        className="
      mt-3
      w-full
      bg-[#0f172a]/80
      border border-white/10
      focus:border-cyan-400
      rounded-2xl
      px-5 py-4
      outline-none
      transition-all duration-300
      resize-none
    "
                      />
                    </div>

                    {/* BUTTON */}
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
                      Send Message

                      <Send
                        size={18}
                        className="
      group-hover:translate-x-1
      transition
    "
                      />
                    </button>
                  </form>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

    </main>
  );
}