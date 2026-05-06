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
    <main className="bg-[#020617] text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">

        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

          <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            <p className="uppercase tracking-[5px] text-cyan-400 text-sm font-semibold">
              Join KAC Construction
            </p>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              Build Your Career With
              <span className="block text-cyan-400">
                India's Infrastructure Experts
              </span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed">
              Become part of our growing team working on transmission
              line, tower erection, stringing, and power infrastructure
              projects across India.
            </p>

          </motion.div>

          {/* JOB OPENINGS */}
          <div className="mt-24">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >

              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                <Briefcase className="text-cyan-400" />
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Current Openings
                </h2>

                <p className="text-gray-400 mt-1">
                  Explore available vacancies at KAC Construction
                </p>
              </div>

            </motion.div>

            {/* JOB CARDS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {jobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group bg-white/5 border border-white/10 hover:border-cyan-400/40 rounded-[32px] p-6 sm:p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2"
                >

                  {/* TOP */}
                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition duration-300">
                        {job.title}
                      </h3>

                      <div className="mt-4 flex flex-wrap gap-3">

                        <div className="flex items-center gap-2 text-sm bg-cyan-500/10 text-cyan-300 px-4 py-2 rounded-full">
                          <MapPin size={16} />
                          {job.location}
                        </div>

                        <div className="flex items-center gap-2 text-sm bg-white/10 px-4 py-2 rounded-full">
                          <Clock3 size={16} />
                          {job.type}
                        </div>

                        <div className="flex items-center gap-2 text-sm bg-white/10 px-4 py-2 rounded-full">
                          <Users size={16} />
                          {job.experience}
                        </div>

                      </div>

                    </div>

                  </div>

                  {/* ELIGIBILITY */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-cyan-400">
                      Eligibility
                    </h4>

                    <p className="mt-3 text-gray-400 leading-relaxed">
                      {job.eligibility}
                    </p>
                  </div>

                  {/* RESPONSIBILITIES */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-cyan-400">
                      Responsibilities
                    </h4>

                    <div className="mt-4 space-y-3">

                      {job.responsibilities.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={18}
                            className="text-cyan-400 mt-1"
                          />

                          <p className="text-gray-300">
                            {item}
                          </p>
                        </div>
                      ))}

                    </div>
                  </div>

                </motion.div>
              ))}

            </div>

          </div>

          {/* APPLICATION FORM */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-28"
          >

            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[36px] p-6 sm:p-10 lg:p-14">

              <div className="text-center">

                <p className="uppercase tracking-[4px] text-cyan-400 text-sm font-semibold">
                  Apply Now
                </p>

                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black">
                  Submit Your CV
                </h2>

                <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                  Fill out the form below and our HR team will
                  contact you if your profile matches our
                  requirements.
                </p>

              </div>

              {/* FORM */}
              <form className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* FULL NAME */}
                <div>
                  <label className="text-sm text-gray-300">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="mt-2 w-full bg-[#0f172a] border border-white/10 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none transition duration-300"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="text-sm text-gray-300">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your number"
                    className="mt-2 w-full bg-[#0f172a] border border-white/10 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none transition duration-300"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm text-gray-300">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="mt-2 w-full bg-[#0f172a] border border-white/10 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none transition duration-300"
                  />
                </div>

                {/* EXPERIENCE */}
                <div>
                  <label className="text-sm text-gray-300">
                    Experience
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. 3 Years"
                    className="mt-2 w-full bg-[#0f172a] border border-white/10 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none transition duration-300"
                  />
                </div>

                {/* POSITION */}
                <div className="md:col-span-2">
                  <label className="text-sm text-gray-300">
                    Applying For
                  </label>

                  <select
                    className="mt-2 w-full bg-[#0f172a] border border-white/10 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none transition duration-300"
                  >
                    <option>Site Supervisor</option>
                    <option>Tower Erection Engineer</option>
                    <option>Stringing Supervisor</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="md:col-span-2">
                  <label className="text-sm text-gray-300">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your experience..."
                    className="mt-2 w-full bg-[#0f172a] border border-white/10 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none transition duration-300 resize-none"
                  />
                </div>

                {/* CV */}
                <div className="md:col-span-2">
                  <label className="text-sm text-gray-300">
                    Upload CV / Resume
                  </label>

                  <input
                    type="file"
                    className="mt-2 w-full bg-[#0f172a] border border-dashed border-cyan-400/40 rounded-2xl px-5 py-4 text-gray-400"
                  />
                </div>

                {/* BUTTON */}
                <div className="md:col-span-2">

                  <button
                    type="submit"
                    className="group w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-5 rounded-2xl transition duration-300 flex items-center justify-center gap-3"
                  >
                    Submit Application

                    <Send
                      size={18}
                      className="group-hover:translate-x-1 transition duration-300"
                    />

                  </button>

                </div>

              </form>

              {/* EMAIL INFO */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400 text-sm">

                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-cyan-400" />
                  hr@kacconstruction.com
                </div>

                <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-500" />

                <div>
                  PAN India Hiring
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* CTA SECTION */}
      <CTASection />

    </main>
  );
}