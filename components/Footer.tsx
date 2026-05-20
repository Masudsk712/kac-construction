"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  RadioTower,
  Send,
  ShieldCheck,
  Globe,
  Sparkles,
  Clock3,
  Award,
} from "lucide-react";
import { ease, spring as sp } from "@/lib/animations";
import { siteConfig } from "@/lib/seo";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/service" },
  { title: "Projects", href: "/projects" },
  { title: "Media", href: "/media" },
  { title: "Career", href: "/career" },
  { title: "Contact", href: "/contact" },
];

const services = [
  "Transmission Line EPC",
  "Tower Erection",
  "HTLS Reconductoring",
  "Foundation Engineering",
  "Hotline Stringing",
  "Survey & Planning",
];

const socialLinks = [
  { icon: <Facebook size={18} />, href: siteConfig.social.facebook },
  { icon: <Linkedin size={18} />, href: siteConfig.social.linkedin },
  { icon: <Instagram size={18} />, href: siteConfig.social.facebook }, // no Instagram configured yet, fallback
];

const credentials = [
  { icon: <ShieldCheck size={16} className="text-emerald-400" />, label: "ISO 9001:2015 Certified" },
  { icon: <Award size={16} className="text-amber-400" />, label: "15+ Years Excellence" },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden text-white border-t border-white/10">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-[1]">
        <Image
          src="/home/HomeTower11.webp"
          alt="Kuddus Ali Construction - Transmission Tower Infrastructure Background"
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover opacity-[0.45] scale-105 brightness-[0.75] contrast-[1.1]"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#020617]/72 via-[#020617]/78 to-[#020617]/90" />

      {/* CINEMATIC LIGHT */}
      <div className="absolute inset-0 z-[3] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_35%)] pointer-events-none" />

      {/* BLUE GLOW */}
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />

      {/* GRID */}
      <div className="absolute inset-0 z-[3] opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:60px_60px]" />

      {/* CONTENT */}
      <div className="container-premium relative z-[5] pt-24 pb-10">
        {/* TOP PREMIUM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ease.premiumOut }}
          viewport={{ once: true }}
          className="relative overflow-hidden mb-24 rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl p-8 md:p-12 shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
        >
          {/* INSIDE GLOW */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/[0.06] via-transparent to-blue-500/[0.06]" />

          <div className="relative flex flex-col xl:flex-row items-start xl:items-center justify-between gap-10">
            {/* LEFT */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/[0.04] mb-8">
                <Sparkles size={16} className="text-cyan-400" />
                <span className="text-sm tracking-[4px] text-white/80">KUDDUS ALI CONSTRUCTION</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                Building India's
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                  Power Infrastructure
                </span>
              </h2>

              <p className="text-white/60 text-lg leading-relaxed">
                Kuddus Ali Construction specializes in transmission infrastructure, tower erection, hotline
                stringing, HTLS reconductoring and EPC execution projects with precision, safety and nationwide
                reliability.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-cyan-400 text-black font-bold transition-all duration-300 hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.45)]"
              >
                Start Your Project
                <Send size={18} className="transition-all duration-300 group-hover:translate-x-1" />
              </Link>

              {credentials.map((cred, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/50">
                  {cred.icon}
                  {cred.label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-16 pb-20">
          {/* COMPANY */}
          <div>
            <div className="flex items-center gap-5 mb-8">
              <motion.div
                whileHover={{ rotate: 8, scale: 1.08, transition: sp.snappy }}
                className="w-16 h-16 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center text-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.18)]"
              >
                <RadioTower size={30} />
              </motion.div>
              <div>
                <h2 className="text-2xl font-black">KAC</h2>
                <p className="text-sm text-white/40">Infrastructure Group</p>
              </div>
            </div>

            <p className="text-white/55 leading-relaxed mb-8">
              Delivering modern EPC and transmission infrastructure solutions with engineering excellence across
              India.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4">
              {socialLinks.map((item, i) => (
                <motion.div key={i} whileHover={{ y: -5, scale: 1.08, transition: sp.snappy }}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit us on ${item.href.includes('facebook') ? 'Facebook' : item.href.includes('linkedin') ? 'LinkedIn' : 'Social Media'}`}
                    className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center text-gray-300 transition-all duration-300 hover:text-cyan-400 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
                  >
                    {item.icon}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                <ArrowUpRight size={18} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold">Quick Links</h3>
            </div>
            <div className="space-y-5">
              {quickLinks.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="group flex items-center justify-between text-white/55 transition-all duration-300 hover:text-cyan-400"
                >
                  {item.title}
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                <Sparkles size={18} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold">Core Services</h3>
            </div>
            <div className="space-y-5">
              {services.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 8, transition: sp.snappy }}
                  className="flex items-center gap-3 text-white/55"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                <Phone size={18} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold">Contact Info</h3>
            </div>
            <div className="space-y-7">
              {/* PHONE */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/40 mb-1">Mobile</p>
                  <h4 className="font-semibold">+91 9735067595</h4>
                  <h4 className="font-semibold">+91 9933638309</h4>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/40 mb-1">Email</p>
                  <h4 className="font-semibold break-all">kuddusali45@gmail.com</h4>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/40 mb-1">Office</p>
                  <h4 className="font-semibold text-sm leading-relaxed">
                    KAC, Mahisbathani Baluatola,
                    <br />
                    PO Barkol, Malda - 732128,
                    <br />
                    India
                  </h4>
                </div>
              </div>

              {/* MAP */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 h-[220px] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d704.6048151757652!2d88.1037462695071!3d25.081566213257595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA0JzUzLjYiTiA4OMKwMDYnMTUuOCJF!5e1!3m2!1sen!2sin!4v1778577513815!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="absolute inset-0"
                />
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl flex items-center gap-2">
                  <Globe size={16} className="text-cyan-400" />
                  <span className="text-xs tracking-wider">LIVE LOCATION</span>
                </div>
              </div>

              {/* OFFICE HOURS */}
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Clock3 size={16} className="text-cyan-400" />
                Monday - Saturday | 9:00 AM - 7:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-white/40 text-sm text-center md:text-left">
            © 2026 Kuddus Ali Construction. All Rights Reserved.
          </p>
          <a
            href="https://www.linkedin.com/in/masud-sk-254b581b9"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-sm text-white/40 transition-all duration-300 hover:text-cyan-400"
          >
            Designed & Developed By <span className="text-cyan-400 group-hover:text-cyan-300">Masud Sk</span>
          </a>
        </div>
      </div>
    </footer>
  );
}