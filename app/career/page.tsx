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
  ShieldCheck,
  RadioTower,
} from "lucide-react";
import { useBrand } from "@/components/BrandContext";

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
  const { config: c } = useBrand();

  return (
    <div className="relative z-10 bg-[var(--bg)] text-[var(--text)]">
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -left-[180px] -top-[220px] h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-[240px] -right-[180px] h-[650px] w-[650px] rounded-full bg-blue-500/10 blur-[170px]" />

      {/* ======================================== */}
      {/* HERO */}
      {/* ======================================== */}
      <section className="page-hero relative flex min-h-screen items-center overflow-hidden">
        {/* BG IMAGE */}
        <div className="absolute inset-0 scale-105 bg-[url('/career/Career1.webp')] bg-cover bg-center" />

        {/* OVERLAY */}
        <div className="absolute inset-0 hero-page-overlay" />

        {/* GRADIENT */}
        <div className="absolute inset-0 hero-page-gradient" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-36 md:px-10">
          {/* TOP BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-10 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-2xl shadow-[0_0_30px_rgba(34,211,238,0.08)]"
          >
            <Sparkles size={14} className="text-cyan-300" />
            <span className="text-xs tracking-[4px] text-cyan-200">
              JOIN {c.name.toUpperCase()}
            </span>
          </motion.div>

          {/* HERO GRID */}
          <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-[48px] font-black leading-[0.92] tracking-[-4px] text-[var(--text)] sm:text-[68px] lg:text-[96px]"
              >
                Build Your Career With
                <span className="mt-4 block text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]">
                  India's Infrastructure Experts
                </span>
              </motion.h1>

              {/* LINE */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "140px" }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mb-10 mt-10 h-[4px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              />

              {/* TEXT */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="max-w-3xl text-lg leading-[2] text-[var(--text-soft)] md:text-xl"
              >
                Become part of our growing team working on
                transmission line, tower erection,
                stringing and power infrastructure
                projects across India with engineering
                excellence and professional growth.
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-14 flex flex-wrap gap-5"
              >
                <a
                  href="#jobs"
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold text-black shadow-[0_0_40px_rgba(34,211,238,0.35)] transition-all duration-500 hover:scale-105"
                >
                  View Openings
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="#apply"
                  className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--glass)] px-8 py-4 backdrop-blur-2xl text-[var(--text)] transition-all duration-500 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08]"
                >
                  Apply Now
                  <Send size={18} />
                </a>
              </motion.div>
            </div>

            {/* RIGHT CARD */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-[var(--card)] p-6 backdrop-blur-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

                <div className="relative z-10 space-y-5">
                  {/* TOP */}
                  <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <RadioTower size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text)]">
                          Career Opportunities
                        </h3>
                        <p className="text-sm text-[var(--text-soft)]">
                          Infrastructure & EPC Projects
                        </p>
                      </div>
                    </div>
                    <p className="text-sm leading-[1.8] text-[var(--text-soft)]">
                      Work with experienced professionals on
                      transmission infrastructure projects
                      across India.
                    </p>
                  </div>

                  {/* STATS */}
                  <div className="grid grid-cols-2 gap-5">
                    {[
                      { number: "PAN", label: "India Hiring" },
                      { number: "24/7", label: "Site Operations" },
                      { number: "500+", label: "Projects" },
                      { number: "Growth", label: "Opportunities" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center"
                      >
                        <h3 className="mb-2 text-2xl font-black text-cyan-400">
                          {item.number}
                        </h3>
                        <p className="text-sm text-[var(--text-soft)]">
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
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-[var(--bg)]" />
      </section>

      {/* ======================================== */}
      {/* JOB SECTION */}
      {/* ======================================== */}
      <section id="jobs" className="relative overflow-hidden py-28">
        {/* GLOW */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-cyan-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[420px] w-[420px] bg-blue-500/10 blur-[110px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* TOP */}
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-500/10">
                <Briefcase className="text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-[var(--text)] md:text-5xl">
                  Current Openings
                </h2>
                <p className="mt-2 text-[var(--text-soft)]">
                  Explore available vacancies at {c.name}
                </p>
              </div>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 text-sm text-emerald-300">
              <ShieldCheck size={16} />
              Hiring Across India
            </div>
          </div>

          {/* JOB GRID */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[34px] border border-[var(--border)] bg-[var(--card)] p-6 backdrop-blur-3xl transition-all duration-500 hover:border-cyan-400/30 sm:p-8"
              >
                {/* GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  {/* TOP */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black text-[var(--text)] transition duration-300 group-hover:text-cyan-300">
                        {job.title}
                      </h3>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                          <MapPin size={15} />
                          {job.location}
                        </div>

                        <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-[var(--text-soft)] dark:bg-white/10">
                          <Clock3 size={15} />
                          {job.type}
                        </div>

                        <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-[var(--text-soft)] dark:bg-white/10">
                          <Users size={15} />
                          {job.experience}
                        </div>
                      </div>
                    </div>

                    <div className="flex h-[54px] min-w-[54px] items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition group-hover:scale-110">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  {/* DETAILS */}
                  <div className="mt-8 md:mt-10">
                    <p className="mb-6 text-sm leading-relaxed text-[var(--text-soft)]">
                      <span className="font-semibold text-[var(--text)]">Eligibility:</span>{" "}
                      {job.eligibility}
                    </p>

                    <div className="space-y-4">
                      {job.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2
                            size={20}
                            className="mt-1 flex-shrink-0 text-cyan-400"
                          />
                          <p className="text-sm leading-relaxed text-[var(--text-soft)]">
                            {resp}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BOTTOM */}
                  <div className="mt-8 flex items-center justify-between border-t border-[var(--border)] pt-6 md:mt-10 md:pt-8">
                    <button className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--text)] transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05]">
                      <Send size={15} />
                      Apply Now
                    </button>

                    <span className="text-xs text-[var(--text-soft)]">
                      Job ID: {c.shortName}-{2026 - index}
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
      <section id="apply" className="relative overflow-hidden py-28">
        {/* GLOW */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-cyan-500/10 blur-[130px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="mb-6 text-sm uppercase tracking-widest text-cyan-400">
                SUBMIT YOUR APPLICATION
              </p>

              <h2 className="mb-8 text-4xl font-black leading-tight md:text-6xl">
                <span className="text-[var(--text)]">
                  Ready To Join
                </span>
                <span className="block text-cyan-400">
                  Our Team?
                </span>
              </h2>

              <p className="mb-10 text-lg leading-relaxed text-[var(--text-soft)]">
                Send your updated resume and we will connect
                with you for relevant opportunities in
                transmission infrastructure projects
                across India.
              </p>

              <div className="flex items-center gap-5 text-sm">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-cyan-400" />
                  <span className="text-[var(--text-soft)]">
                    {c.contact.email}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-[var(--card)] p-8 backdrop-blur-3xl md:p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

              <div className="relative z-10">
                <h3 className="mb-8 text-2xl font-black text-[var(--text)]">
                  Send Your Application
                </h3>

                {/* FORM */}
                <form className="space-y-6">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-5 py-4 text-[var(--text)] outline-none transition-all duration-300 placeholder:text-[var(--text-soft)] focus:border-cyan-400/40"
                  />

                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-5 py-4 text-[var(--text)] outline-none transition-all duration-300 placeholder:text-[var(--text-soft)] focus:border-cyan-400/40"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-5 py-4 text-[var(--text)] outline-none transition-all duration-300 placeholder:text-[var(--text-soft)] focus:border-cyan-400/40"
                  />

                  <select className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-5 py-4 text-[var(--text)] outline-none transition-all duration-300 placeholder:text-[var(--text-soft)] focus:border-cyan-400/40">
                    <option value="">Select Position</option>
                    <option value="supervisor">Site Supervisor</option>
                    <option value="engineer">Tower Erection Engineer</option>
                    <option value="stringing">Stringing Supervisor</option>
                  </select>

                  <textarea
                    placeholder="Cover Letter / Additional Info"
                    rows={4}
                    className="w-full resize-none rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-5 py-4 text-[var(--text)] outline-none transition-all duration-300 placeholder:text-[var(--text-soft)] focus:border-cyan-400/40"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 py-4 font-bold text-black transition-all duration-300 hover:scale-[1.02]"
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
    </div>
  );
}