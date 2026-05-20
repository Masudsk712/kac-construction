"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Activity,
  TowerControl,
  Wrench,
  Zap,
  MapPin,
} from "lucide-react";
import { ease, spring as sp } from "@/lib/animations";

/* ================================================= */
/* PROJECT DATA */
/* ================================================= */

const projects = [
  {
    title: "220kV / 400kV / 765kV Transmission Lines",
    desc: "Tower erection and transmission infrastructure execution across multiple states with precision engineering standards.",
    points: [
      "High-capacity EHV transmission corridors",
      "Tower erection & stringing operations",
      "Multi-state execution capability",
      "Reliable power infrastructure delivery",
    ],
    icon: <TowerControl size={22} />,
    image: "/home/HomeTower1.webp",
    href: "/projects#completed",
    location: "Multi-State",
  },
  {
    title: "HTLS Reconductoring Projects",
    desc: "Upgradation of existing lines using HTLS low-sag conductors for enhanced transmission efficiency and capacity.",
    points: [
      "Low-sag high-temperature conductors",
      "Transmission upgrade execution",
      "Modern reconductoring systems",
      "Improved power transfer capability",
    ],
    icon: <Zap size={22} />,
    image: "/home/HomeTower2.webp",
    href: "/projects#htls",
    location: "Pan India",
  },
  {
    title: "Tower Strengthening & Rectification",
    desc: "Structural strengthening, alignment correction and maintenance support for ageing transmission infrastructure.",
    points: [
      "Tower rectification services",
      "Structural reinforcement",
      "Safety compliance execution",
      "Long-term infrastructure stability",
    ],
    icon: <Wrench size={22} />,
    image: "/home/HomeTower3.webp",
    href: "/projects#strengthening",
    location: "Eastern India",
  },
  {
    title: "Hotline Stringing Operations",
    desc: "Live-line stringing operations ensuring uninterrupted transmission flow and minimal downtime.",
    points: [
      "Zero shutdown execution",
      "Advanced hotline techniques",
      "Critical power corridor support",
      "High safety operational standards",
    ],
    icon: <Activity size={22} />,
    image: "/home/ReconductoringWork.webp",
    href: "/projects#stringing",
    location: "National Grid",
  },
];

/* ================================================= */
/* COMPONENT */
/* ================================================= */

export default function ProjectsSection() {
return (
    <section className="relative overflow-hidden py-32 md:py-44 bg-[var(--bg-soft)] section-surface">
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-150px] left-[-120px] w-[500px] h-[500px] rounded-full bg-cyan-500/8 dark:bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-[-150px] right-[-120px] w-[500px] h-[500px] rounded-full bg-blue-500/8 dark:bg-blue-500/10 blur-[140px]" />
      </div>

      {/* GRID EFFECT */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] dark:[background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:60px_60px]" />

      {/* CONTENT */}
      <div className="container-premium relative z-10">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ease.premiumOut }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="uppercase tracking-[6px] section-label text-[11px] sm:text-sm mb-5">
            KAC Projects
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-[1.05] mb-6">
            <span className="accent-heading">Successfully Delivered</span>
            <br />
            <span className="text-slate-900 dark:text-white">Infrastructure Projects</span>
          </h2>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-white/60 text-base md:text-lg leading-[2]">
            Kuddus Ali Construction delivers transmission line, tower erection, HTLS reconductoring and hotline
            stringing projects with engineering precision, operational safety and execution excellence.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: ease.premiumOut }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: sp.soft }}
              className="group relative overflow-hidden rounded-[28px] md:rounded-[32px] border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-2xl shadow-[0_15px_60px_rgba(15,23,42,0.08)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-cyan-400/30"
            >
              {/* IMAGE */}
              <div className="relative h-[240px] sm:h-[280px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
                  loading={i < 2 ? "eager" : "lazy"}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                {/* ICON + LOCATION */}
                <div className="absolute top-4 left-4 md:top-5 md:left-5 w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-white/10 bg-cyan-400/10 backdrop-blur-xl flex items-center justify-center text-white">
                  {project.icon}
                </div>

                <div className="absolute top-4 right-4 md:top-5 md:right-5 flex items-center gap-3">
                  <span className="flex items-center gap-1.5 px-3 py-2 md:px-4 rounded-full border border-white/10 bg-black/30 backdrop-blur-xl text-[10px] md:text-[11px] uppercase tracking-[3px] text-white">
                    <MapPin size={12} />
                    {project.location}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black leading-tight mb-5 text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-white/65 text-sm md:text-base leading-[1.9] mb-7">
                  {project.desc}
                </p>

                {/* POINTS */}
                <div className="space-y-4 mb-8">
                  {project.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-cyan-500 dark:text-cyan-400 mt-1 flex-shrink-0"
                      />
                      <span className="text-sm text-slate-700 dark:text-white/75 leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* BUTTON */}
                <Link href={project.href}>
                  <button className="group/button relative overflow-hidden flex items-center gap-3 px-5 py-4 md:px-6 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.04] backdrop-blur-xl text-sm font-semibold text-slate-900 dark:text-white transition-all duration-500 hover:border-cyan-400/30 hover:bg-cyan-400/10">
                    <span className="relative z-10">Explore Project</span>
                    <ArrowUpRight
                      size={18}
                      className="relative z-10 transition duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                    />
                  </button>
                </Link>
              </div>

              {/* HOVER BORDER */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: ease.premiumOut }}
          viewport={{ once: true }}
          className="flex justify-center mt-16 md:mt-20"
        >
          <Link href="/projects">
            <button className="group relative overflow-hidden px-8 py-4 md:px-10 md:py-5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-black font-bold shadow-[0_10px_50px_rgba(34,211,238,0.25)] transition-all duration-500 hover:scale-[1.03]">
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-[100%] transition duration-1000" />
              <span className="relative z-10 flex items-center gap-3">
                View All Projects
                <ArrowUpRight size={20} className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}