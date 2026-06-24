"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  MapPinned,
  Mountain,
  Route,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import CTASection from "@/components/CTASection";
const process = [
  {
    title: "Route Identification",
    desc: "Initial transmission corridor identification based on terrain, accessibility and project requirements.",
    icon: <Route size={28} />,
  },
  {
    title: "Terrain Analysis",
    desc: "Detailed land profiling, topography analysis and environmental assessment for accurate alignment.",
    icon: <Mountain size={28} />,
  },
  {
    title: "Feasibility Planning",
    desc: "Engineering evaluation ensuring optimized tower spotting and transmission route efficiency.",
    icon: <ClipboardCheck size={28} />,
  },
];

const highlights = [
  "Advanced route mapping technology",
  "Accurate terrain & alignment analysis",
  "High precision engineering planning",
  "Nationwide transmission survey capability",
];

const gallery = [
  "kacgroups/service/PreSurvey/PreSurvey3.webp",
  "kacgroups/service/PreSurvey/PreSurvey4.webp",
  "kacgroups/service/PreSurvey/PreSurvey5.webp",
];

export default function PreliminarySurveyPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)] overflow-hidden">

      {/* HERO SECTION */}
      <section className="page-hero relative min-h-[90vh] flex items-center overflow-hidden">

        {/* BG IMAGE */}
        <Image
          src="kacgroups/service/PreSurvey/PreSurvey6.webp"
          alt="Preliminary Survey"
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 hero-page-overlay" />
        <div className="absolute inset-0 hero-page-gradient" />

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px]" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-6">
              Survey Services
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

              Preliminary
              <span className="block text-cyan-400">
                Survey Solutions
              </span>

            </h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
              Kuddus Ali Construction provides advanced preliminary survey
              solutions for transmission line infrastructure projects,
              ensuring optimized route alignment, terrain analysis and
              engineering feasibility before execution.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">

              <button
                className="
                px-8 py-4 rounded-full
                bg-gradient-to-r from-cyan-400 to-blue-500
                text-black font-semibold
                hover:scale-105 transition
                shadow-[0_0_40px_rgba(34,211,238,0.4)]
                "
              >
                Contact us
              </button>

            </div>

          </motion.div>

          {/* RIGHT FLOATING CARD */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div
              className="
              relative overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              "
            >

              <Image
                src="kacgroups/service/PreSurvey/PreSurvey2.webp"
                alt="Survey"
                width={700}
                height={500}
                className="rounded-2xl object-cover"
              />

              {/* FLOATING STATS */}
              <div
                className="
                absolute bottom-6 left-6
                bg-black/50 backdrop-blur-xl
                border border-cyan-400/20
                rounded-2xl
                px-6 py-4
                "
              >

                <h3 className="text-4xl font-black text-cyan-400">
                  500+
                </h3>

                <p className="text-gray-300 text-sm">
                  Successful Route Surveys
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* OVERVIEW */}
      <section className="relative py-28">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >

            <Image
              src="kacgroups/service/PreSurvey/PreSurvey1.webp"
              alt="Survey Overview"
              width={700}
              height={550}
              className="
              rounded-3xl
              border border-white/10
              object-cover
              "
            />

            <div
              className="
              absolute -bottom-8 -right-8
              bg-black/60 backdrop-blur-xl
              border border-cyan-400/20
              rounded-2xl
              px-6 py-5
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                  w-14 h-14 rounded-full
                  bg-cyan-400/10
                  flex items-center justify-center
                  text-cyan-400
                  "
                >
                  <MapPinned size={28} />
                </div>

                <div>

                  <h4 className="text-2xl font-bold">
                    Smart Mapping
                  </h4>

                  <p className="text-sm text-gray-300">
                    Terrain & Alignment Precision
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >

            <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-5">
              Project Planning
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
              Precision Driven
              <span className="block text-cyan-400">
                Infrastructure Surveys
              </span>
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-10">
              Our preliminary survey services are designed to minimize
              engineering risks, optimize transmission route planning
              and ensure efficient execution for high-voltage power
              infrastructure projects across India.
            </p>

            {/* HIGHLIGHTS */}
            <div className="space-y-5">

              {highlights.map((item, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="
                  flex items-center gap-4
                  p-5 rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.04]
                  transition-all duration-500
                  "
                >

                  <CheckCircle2
                    className="text-cyan-400 min-w-[24px]"
                    size={24}
                  />

                  <p className="text-gray-200">
                    {item}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>

      {/* PROCESS SECTION */}
      <section className="relative py-28">

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <div className="text-center mb-20">

            <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-5">
              Survey Workflow
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              Our Survey
              <span className="block text-cyan-400">
                Execution Process
              </span>
            </h2>

          </div>

          {/* PROCESS CARDS */}
          <div className="grid md:grid-cols-3 gap-8">

            {process.map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                relative overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
                hover:border-cyan-400/30
                transition-all duration-500
                "
              >

                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-cyan-400/5 blur-3xl" />

                {/* ICON */}
                <div
                  className="
                  relative z-10
                  w-16 h-16 rounded-2xl
                  bg-cyan-400/10
                  flex items-center justify-center
                  text-cyan-400 mb-8
                  "
                >
                  {item.icon}
                </div>

                <h3 className="relative z-10 text-2xl font-bold mb-5">
                  {item.title}
                </h3>

                <p className="relative z-10 text-gray-400 leading-relaxed mb-8">
                  {item.desc}
                </p>

                <button
                  className="
                  relative z-10
                  flex items-center gap-2
                  text-cyan-400
                  hover:gap-3
                  transition-all
                  "
                >
                  Learn More
                  <ArrowRight size={18} />
                </button>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* MEDIA GALLERY */}
      <section className="relative py-28">

        <div className="max-w-7xl mx-auto px-6">

          {/* TITLE */}
          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-5">
              Project Media
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Survey Operations
              <span className="block text-cyan-400">
                In Action
              </span>
            </h2>

          </div>

          {/* GALLERY */}
          <div className="grid md:grid-cols-3 gap-8">

            {gallery.map((img, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="
                relative overflow-hidden
                rounded-3xl
                border border-white/10
                group
                "
              >

                <Image
                  src={img}
                  alt="Survey Media"
                  width={500}
                  height={400}
                  className="
                  object-cover
                  h-[350px] w-full
                  group-hover:scale-110
                  transition duration-700
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-6 left-6">

                  <h3 className="text-2xl font-bold mb-2">
                    Transmission Survey
                  </h3>

                  <p className="text-gray-300 text-sm">
                    Route planning & terrain analysis
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <CTASection />

    </main>
  );
}