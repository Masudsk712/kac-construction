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
} from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Mobile",
    value: "+91 9735067595",
    value2: "+91 9933638309",
    desc: "Available for project enquiries & business discussions.",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "kuddusali45@gmail.com",
    desc: "Send us your project requirements anytime.",
  },
  {
    icon: MapPin,
    title: "Office Address",
    value:
      "Kuddus Ali Construction, Mahisbathani Baluatola, PO Barkol, Malda - 732128, India",
    desc: "Corporate infrastructure & transmission project office.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-[#020617] text-white overflow-x-hidden relative">

      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-[#020617]" />

      {/* GLOW EFFECTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />
      </div>

      {/* HERO */}
      <section
        className="
        relative
        min-h-screen
        flex
        items-center
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

        {/* LEFT GRADIENT */}
        <div
          className="
          absolute inset-0
          bg-gradient-to-r
          from-[#020617]
          via-[#020617]/80
          to-transparent
        "
        />

        {/* CONTENT */}
        <div
          className="
          relative z-10
          container-premium
          pt-36
          pb-24
        "
        >

          {/* TOP LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
            inline-flex
            items-center
            gap-3
            px-5 py-2
            rounded-full
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            mb-8
          "
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

            <span className="text-sm tracking-[4px] text-white/80">
              CONTACT KAC
            </span>
          </motion.div>

          {/* HERO TEXT */}
          <div className="max-w-5xl">

            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
              text-[42px]
              sm:text-[56px]
              md:text-[92px]
              leading-[0.95]
              font-black
              tracking-[-3px]
              text-white
            "
            >
              Let’s Build India’s

              <span className="block text-cyan-400 mt-2">
                Future Together
              </span>
            </motion.h1>

            {/* LINE */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="
              h-[4px]
              bg-cyan-400
              mt-10
              mb-10
              rounded-full
            "
            />

            {/* DESC */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="
              text-lg
              md:text-xl
              text-gray-300
              leading-[2]
              max-w-3xl
            "
            >
              Reach out to KAC Construction for transmission line,
              tower erection, stringing, foundation, EPC infrastructure,
              and high-voltage power projects across India.
            </motion.p>

          </div>

          {/* QUICK STATS */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
            mt-20
            max-w-5xl
          "
          >

            {[
              {
                title: "Transmission Projects",
                value: "500+",
              },
              {
                title: "Operational States",
                value: "20+",
              },
              {
                title: "Support Availability",
                value: "24/7",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-8
                group
              "
              >

                <div
                  className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-r
                  from-cyan-500/10
                  to-blue-500/10
                "
                />

                <div className="relative z-10">

                  <h3
                    className="
                    text-5xl
                    font-black
                    text-cyan-400
                    mb-3
                  "
                  >
                    {item.value}
                  </h3>

                  <p className="text-gray-300 text-lg">
                    {item.title}
                  </p>

                </div>

              </motion.div>
            ))}

          </motion.div>

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

      {/* CONTACT CONTENT */}
      <section className="relative py-32 overflow-hidden">

        {/* GLOW */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] top-0 left-0" />
          <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[100px] bottom-0 right-0" />
        </div>

        <div className="container-premium relative">

          {/* HEADING */}
          <div className="text-center mb-20">

            <p className="text-sm tracking-widest text-white/60 mb-3">
              GET IN TOUCH
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold">
              <span className="gradient-text">
                Contact Our Infrastructure Team
              </span>
            </h2>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >

              {/* INTRO CARD */}
              <div
                className="
                glass-strong
                border-glow
                rounded-3xl
                p-8
              "
              >

                <div className="flex items-center gap-4 mb-6">

                  <div
                    className="
                    w-14 h-14
                    rounded-2xl
                    bg-cyan-500/10
                    flex items-center justify-center
                    border border-cyan-400/20
                  "
                  >
                    <Building2 className="text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      KAC Construction
                    </h3>

                    <p className="text-white/60 text-sm">
                      Powering India’s Infrastructure Future
                    </p>
                  </div>

                </div>

                <p className="text-white/70 leading-relaxed">
                  We’d love to hear from you. Reach out for project
                  enquiries, partnerships, transmission infrastructure,
                  EPC solutions, or any information about our services.
                </p>

                <div className="mt-6 flex items-center gap-3 text-cyan-400">
                  <Clock3 size={18} />
                  <span className="text-sm">
                    Monday - Saturday | 9:00 AM - 7:00 PM
                  </span>
                </div>

              </div>

              {/* CONTACT CARDS */}
              {contactCards.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="
                  glass-strong
                  border-glow
                  rounded-3xl
                  p-8
                  group
                "
                >

                  <div className="flex items-start gap-5">

                    <div
                      className="
                      w-16 h-16
                      rounded-2xl
                      bg-cyan-500/10
                      border border-cyan-400/20
                      flex items-center justify-center
                      group-hover:bg-cyan-400
                      transition duration-500
                    "
                    >
                      <item.icon className="text-cyan-400 group-hover:text-black transition" />
                    </div>

                    <div className="flex-1">

                      <div className="flex items-center justify-between gap-4">

                        <h3 className="text-2xl font-bold">
                          {item.title}
                        </h3>

                        <ArrowUpRight className="text-cyan-400" />

                      </div>

                      <p className="mt-4 text-white text-lg break-words">
                        {item.value}
                      </p>

                      {item.value2 && (
                        <p className="mt-1 text-white text-lg break-words">
                          {item.value2}
                        </p>
                      )}

                      <p className="mt-4 text-white/60 leading-relaxed">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                </motion.div>
              ))}

            </motion.div>

            {/* RIGHT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <div
                className="
                glass-strong
                border-glow
                rounded-[36px]
                p-6 sm:p-8 lg:p-10
                shadow-[0_0_80px_rgba(0,0,0,0.6)]
                relative overflow-hidden
              "
              >

                {/* FORM GLOW */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px]" />

                <div className="relative z-10">

                  <div className="mb-10">

                    <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
                      SEND MESSAGE
                    </p>

                    <h2 className="text-4xl font-bold mb-4">
                      Start Your Project Discussion
                    </h2>

                    <p className="text-white/60 leading-relaxed">
                      Fill out the form below and our infrastructure
                      experts will contact you shortly.
                    </p>

                  </div>

                  <form className="space-y-6">

                    {/* NAME */}
                    <div>
                      <label className="text-sm text-white/70">
                        Full Name
                      </label>

                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="
                        mt-2
                        w-full
                        bg-[#0f172a]
                        border border-white/10
                        focus:border-cyan-400
                        rounded-2xl
                        px-5 py-4
                        outline-none
                        transition
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
                        placeholder="Enter your email"
                        className="
                        mt-2
                        w-full
                        bg-[#0f172a]
                        border border-white/10
                        focus:border-cyan-400
                        rounded-2xl
                        px-5 py-4
                        outline-none
                        transition
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
                        placeholder="Enter your phone number"
                        className="
                        mt-2
                        w-full
                        bg-[#0f172a]
                        border border-white/10
                        focus:border-cyan-400
                        rounded-2xl
                        px-5 py-4
                        outline-none
                        transition
                      "
                      />
                    </div>

                    {/* SUBJECT */}
                    <div>
                      <label className="text-sm text-white/70">
                        Project Type
                      </label>

                      <select
                        className="
                        mt-2
                        w-full
                        bg-[#0f172a]
                        border border-white/10
                        focus:border-cyan-400
                        rounded-2xl
                        px-5 py-4
                        outline-none
                        transition
                      "
                      >
                        <option>Transmission Line</option>
                        <option>Foundation Work</option>
                        <option>Stringing Work</option>
                        <option>Tower Erection</option>
                        <option>EPC Infrastructure</option>
                      </select>
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label className="text-sm text-white/70">
                        Message
                      </label>

                      <textarea
                        rows={6}
                        placeholder="Tell us about your project..."
                        className="
                        mt-2
                        w-full
                        bg-[#0f172a]
                        border border-white/10
                        focus:border-cyan-400
                        rounded-2xl
                        px-5 py-4
                        outline-none
                        transition
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
                      flex items-center justify-center gap-3
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