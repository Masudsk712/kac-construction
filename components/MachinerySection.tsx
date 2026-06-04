"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import {
  Truck,
  Wrench,
  HardDrive,
  Cable,
  ArrowUpRight,
  Cog,
} from "lucide-react";

import { ease, spring as sp } from "@/lib/animations";
import { useBrand } from "@/components/BrandContext";

/* ================================================= */
/* MACHINERY DATA */
/* ================================================= */

const machinery = [
  {
    title: "Tension Stringing Machines",
    desc: "High-capacity tension stringing equipment capable of handling 765kV transmission conductor installation with precision control systems.",
    icon: <Cog size={24} />,
    spec: "Up to 765kV",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "Hydraulic Cranes & Winches",
    desc: "Heavy-duty hydraulic cranes and puller-tensioner winches deployed for tower erection, material handling and conductor pulling operations.",
    icon: <Truck size={24} />,
    spec: "50T Capacity",
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "Pulling & Tensioning Gear",
    desc: "Advanced bull-wheel pullers and tensioners with PLC-controlled synchronized operation for smooth conductor installation.",
    icon: <HardDrive size={24} />,
    spec: "PLC Controlled",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Hotline Maintenance Tools",
    desc: "Specialized live-line maintenance equipment including hot sticks, insulated platforms and aerial lift devices for zero-shutdown operations.",
    icon: <Cable size={24} />,
    spec: "Live-line Rated",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    title: "Foundation Equipment",
    desc: "Modern boring, piling and concrete placement machinery for precision tower foundation execution across varied terrain conditions.",
    icon: <Wrench size={24} />,
    spec: "All Terrain",
    gradient: "from-emerald-400 to-cyan-500",
  },
  {
    title: "Survey & Testing Instruments",
    desc: "GPS-enabled total stations, drone survey systems and electrical testing equipment for accurate route planning and quality assurance.",
    icon: <HardDrive size={24} />,
    spec: "GPS + Drone",
    gradient: "from-violet-400 to-purple-500",
  },
];

/* ================================================= */
/* COMPONENT */
/* ================================================= */

export default function MachinerySection() {
  const { config: c } = useBrand();
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
      {/* BACKGROUND */}
      {/* ================================================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] rounded-full bg-amber-500/8 dark:bg-amber-500/10 blur-[140px]" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full bg-orange-500/8 dark:bg-orange-500/10 blur-[140px]" />
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
            <Cog size={14} />
            Our Fleet
          </div>

          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-[1.08] mb-6">
            <span className="accent-heading">Modern Machinery</span>
            <br />
            <span className="text-slate-900 dark:text-white">Industry-Leading Equipment Fleet</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-slate-600 dark:text-white/65 text-base md:text-lg leading-[2] max-w-3xl mx-auto">
            {c.name} maintains a comprehensive fleet of modern construction machinery, tension stringing equipment and specialized tools to execute transmission infrastructure projects with precision and speed.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* MACHINERY GRID */}
        {/* ================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {machinery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: ease.premiumOut }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: sp.soft }}
              className="group relative overflow-hidden rounded-[28px] md:rounded-[32px] border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-2xl p-6 md:p-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-500"
            >
              {/* CARD GLOW */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br ${item.gradient.replace('from-', 'from-').replace('to-', 'to-')} opacity-10`} />

              {/* TOP LIGHT */}
              <div className={`absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-current to-transparent ${item.gradient.split(' ')[0].replace('from-', 'text-')} opacity-0 group-hover:opacity-100 transition duration-700`} />

              {/* ICON */}
              <div className={`relative z-10 w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-[0_10px_35px_rgba(34,211,238,0.2)] mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                {item.icon}
              </div>

              {/* SPEC BADGE */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8 z-10 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.04] text-[10px] md:text-[11px] uppercase tracking-[2px] text-slate-600 dark:text-white/60">
                {item.spec}
              </div>

              {/* TITLE */}
              <h3 className="relative z-10 text-lg md:text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="relative z-10 text-sm md:text-base text-slate-600 dark:text-white/65 leading-[1.9]">
                {item.desc}
              </p>

              {/* BOTTOM LINE */}
              <div className={`absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r ${item.gradient} group-hover:w-full transition-all duration-700`} />
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
              className="group relative overflow-hidden px-8 py-4 md:px-10 rounded-full border border-amber-400/20 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold shadow-[0_10px_40px_rgba(251,191,36,0.25)] transition duration-500"
            >
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-[100%] transition duration-1000" />
              <span className="relative z-10 flex items-center gap-3">
                Inquire About Our Fleet
                <ArrowUpRight size={18} className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}