"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  ShieldCheck,
  HardHat,
  ClipboardCheck,
  AlertTriangle,
  Award,
  ArrowUpRight,
} from "lucide-react";

import { ease, spring as sp } from "@/lib/animations";

/* ================================================= */
/* SAFETY DATA */
/* ================================================= */

const safetyStats = [
  {
    value: "0",
    suffix: "",
    label: "Lost Time Injuries",
    icon: <ShieldCheck size={28} />,
  },
  {
    value: "100",
    suffix: "%",
    label: "PPE Compliance",
    icon: <HardHat size={28} />,
  },
  {
    value: "500",
    suffix: "+",
    label: "Safety Audits Completed",
    icon: <ClipboardCheck size={28} />,
  },
  {
    value: "15",
    suffix: "+",
    label: "Years Safety Record",
    icon: <Award size={28} />,
  },
];

const safetyProtocols = [
  {
    title: "Daily Toolbox Talks",
    desc: "Every shift begins with a structured safety briefing covering site-specific hazards, weather conditions and operational protocols.",
    icon: <AlertTriangle size={24} />,
  },
  {
    title: "PPE Mandate",
    desc: "Full personal protective equipment compliance enforced across all project sites — helmets, harnesses, gloves, safety boots and hi-vis gear.",
    icon: <HardHat size={24} />,
  },
  {
    title: "Third-Party Audits",
    desc: "Regular external safety audits and inspections ensure independent verification of our safety management systems.",
    icon: <ClipboardCheck size={24} />,
  },
  {
    title: "Emergency Response",
    desc: "Trained emergency response teams, first-aid stations and evacuation plans at every active project location.",
    icon: <ShieldCheck size={24} />,
  },
];

/* ================================================= */
/* COMPONENT */
/* ================================================= */

export default function SafetySection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-32 md:py-44
        bg-[var(--bg-soft)]
        section-surface
        text-slate-900 dark:text-white
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full bg-emerald-500/8 dark:bg-emerald-500/10 blur-[140px]" />
        <div className="absolute bottom-[-120px] left-[-120px] w-[500px] h-[500px] rounded-full bg-cyan-500/8 dark:bg-cyan-500/10 blur-[140px]" />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] dark:[background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:60px_60px]" />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}
      <div className="container-premium relative z-10">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ease.premiumOut }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
        >
          {/* LABEL */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border section-badge text-[11px] sm:text-sm uppercase tracking-[4px] mb-6">
            <ShieldCheck size={14} />
            Safety Standards
          </div>

          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-[1.08] mb-6">
            <span className="accent-heading">Safety Is Not</span>
            <br />
            <span className="text-slate-900 dark:text-white">A Priority — It's A Value</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-slate-600 dark:text-white/65 text-base md:text-lg leading-[2] max-w-3xl mx-auto">
            At Kuddus Ali Construction, safety is embedded in every layer of operations. From daily toolbox talks to third-party audits, our zero-harm philosophy drives every transmission infrastructure project.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* SAFETY STATS */}
        {/* ================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          {safetyStats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: ease.premiumOut }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: sp.snappy }}
              className="group relative overflow-hidden rounded-[24px] md:rounded-[28px] border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-2xl p-5 md:p-7 text-center shadow-[0_10px_40px_rgba(15,23,42,0.06)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-emerald-400/20"
            >
              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-emerald-400/5 to-cyan-500/5" />

              {/* ICON */}
              <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 mx-auto rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white shadow-[0_8px_30px_rgba(52,211,153,0.25)] mb-5 transition duration-500 group-hover:scale-110">
                {item.icon}
              </div>

              {/* VALUE */}
              <h3 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-black mb-2 text-slate-900 dark:text-white">
                <span className="accent-number">{item.value}</span>
                <span className="text-slate-900 dark:text-white">{item.suffix}</span>
              </h3>

              {/* LABEL */}
              <p className="relative z-10 text-xs sm:text-sm uppercase tracking-[3px] text-slate-500 dark:text-white/60">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================================================= */}
        {/* PROTOCOLS */}
        {/* ================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-7">
          {safetyProtocols.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: ease.premiumOut }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: sp.soft }}
              className="group relative overflow-hidden rounded-[28px] md:rounded-[32px] border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-2xl p-6 md:p-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-500"
            >
              {/* CARD GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-emerald-400/8 to-cyan-500/8" />

              {/* TOP LIGHT */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* ICON */}
              <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white shadow-[0_8px_30px_rgba(52,211,153,0.2)] mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="relative z-10 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="relative z-10 text-sm md:text-base text-slate-600 dark:text-white/65 leading-[1.8]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: ease.premiumOut }}
          viewport={{ once: true }}
          className="flex justify-center mt-16 md:mt-20"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.03, transition: sp.snappy }}
              whileTap={{ scale: 0.97, transition: sp.snappy }}
              className="group relative overflow-hidden px-8 py-4 md:px-10 rounded-full border border-emerald-400/20 bg-gradient-to-r from-emerald-400 to-cyan-500 text-black font-bold shadow-[0_10px_40px_rgba(52,211,153,0.25)] transition duration-500"
            >
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-[100%] transition duration-1000" />
              <span className="relative z-10 flex items-center gap-3">
                Partner With Us
                <ArrowUpRight size={18} className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}