"use client";

import Link from "next/link";
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
  Clock3,
  Globe,
} from "lucide-react";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/service" },
  { title: "Projects", href: "/projects" },

  /* 🔥 NEW */
  { title: "Media", href: "/media" },

  { title: "Career", href: "/career" },
  { title: "Contact", href: "/contact" },
];

const services = [
  "Transmission Line",
  "Tower Erection",
  "HTLS Reconductoring",
  "Foundation Work",
  "Hotline Stringing",
  "Survey Services",
];

const socialLinks = [
  {
    icon: <Facebook size={18} />,
    href: "#",
  },

  {
    icon: <Instagram size={18} />,
    href: "#",
  },

  {
    icon: <Linkedin size={18} />,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer
      className="
      relative
      overflow-hidden
      bg-[#020617]
      text-white
      border-t border-white/10
    "
    >

      {/* ================================================= */}
      {/* 🔥 CINEMATIC BACKGROUND IMAGE */}
      {/* ================================================= */}

      <div
        className="
        absolute inset-0
        bg-cover bg-center
        opacity-[0.10]
        scale-105
        "
        style={{
          backgroundImage: "url('/tower-pic1.webp')",
        }}
      />

      {/* DARK OVERLAY */}
      <div
        className="
        absolute inset-0

        bg-gradient-to-b
        from-[#020617]/95
        via-[#020617]/92
        to-[#020617]

        backdrop-blur-[2px]
        "
      />

      {/* BG GLOW */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />

      {/* GRID */}
      <div
        className="
        absolute inset-0
        opacity-[0.04]
        [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
        [background-size:60px_60px]
      "
      />

      <div
        className="
        container-premium
        relative z-10
        pt-24
        pb-10
      "
      >

        {/* ================================================= */}
        {/* 🔥 TOP CTA BAR */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
          mb-20
          rounded-[32px]
          border border-white/10
          bg-black/30
          backdrop-blur-2xl
          p-8 md:p-10
          flex
          flex-col
          lg:flex-row
          items-start lg:items-center
          justify-between
          gap-10

          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        "
        >

          {/* LEFT */}
          <div className="max-w-3xl">

            <div
              className="
              inline-flex
              items-center
              gap-3
              px-5 py-2
              rounded-full
              border border-white/10
              bg-white/5
              mb-6
            "
            >

              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-sm tracking-[4px] text-white/80">
                KAC CONSTRUCTION
              </span>

            </div>

            <h2
              className="
              text-4xl
              md:text-5xl
              font-black
              leading-tight
              mb-6
            "
            >
              Powering India’s

              <span className="block text-cyan-400">
                Infrastructure Future
              </span>

            </h2>

            <p className="text-white/60 leading-relaxed text-lg">
              Delivering transmission infrastructure, tower erection,
              hotline stringing, HTLS reconductoring and foundation
              execution projects with engineering precision across India.
            </p>

          </div>

          {/* RIGHT BUTTON */}
          <Link
            href="/contact"
            className="
            group
            inline-flex
            items-center
            gap-3

            bg-cyan-400
            hover:bg-cyan-300

            text-black
            font-bold

            px-8 py-5
            rounded-2xl

            transition-all duration-300

            hover:scale-105
            hover:shadow-[0_0_40px_rgba(34,211,238,0.45)]
          "
          >

            Start Your Project

            <Send
              size={18}
              className="
              transition
              group-hover:translate-x-1
            "
            />

          </Link>

        </motion.div>

        {/* ================================================= */}
        {/* 🔥 MAIN GRID */}
        {/* ================================================= */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-5
          gap-14
          pb-20
        "
        >

          {/* ================================================= */}
          {/* COMPANY */}
          {/* ================================================= */}

          <div className="xl:col-span-2">

            {/* LOGO */}
            <div className="flex items-center gap-4 mb-8">

              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                className="
                w-16 h-16
                rounded-2xl
                bg-cyan-400/10
                border border-cyan-400/20
                flex items-center justify-center
                text-cyan-400

                shadow-[0_0_30px_rgba(34,211,238,0.18)]
              "
              >

                <RadioTower size={30} />

              </motion.div>

              <div>

                <h2 className="text-3xl font-black">
                  KAC Construction
                </h2>

                <p className="text-sm text-gray-400">
                  Transmission Infrastructure Experts
                </p>

              </div>

            </div>

            {/* TEXT */}
            <p
              className="
              text-gray-400
              leading-relaxed
              mb-8
              max-w-xl
            "
            >

              KAC Construction delivers advanced
              transmission infrastructure solutions including
              tower erection, HTLS reconductoring,
              hotline stringing, foundation works,
              and EPC execution projects across India.

            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4">

              {socialLinks.map((item, i) => (

                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.08,
                  }}
                  key={i}
                >

                  <Link
                    href={item.href}
                    className="
                    w-12 h-12
                    rounded-2xl
                    border border-white/10
                    bg-black/30
                    backdrop-blur-xl
                    flex items-center justify-center
                    text-gray-300
                    transition-all duration-300

                    hover:border-cyan-400/30
                    hover:text-cyan-400
                    hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]
                  "
                  >

                    {item.icon}

                  </Link>

                </motion.div>

              ))}

            </div>

          </div>

          {/* ================================================= */}
          {/* QUICK LINKS */}
          {/* ================================================= */}

          <div>

            <h3 className="text-xl font-bold mb-8">
              Quick Links
            </h3>

            <div className="space-y-5">

              {quickLinks.map((item, i) => (

                <Link
                  key={i}
                  href={item.href}
                  className="
                  group
                  flex items-center justify-between
                  text-gray-400
                  transition-all duration-300
                  hover:text-cyan-400
                "
                >

                  {item.title}

                  <ArrowUpRight
                    size={16}
                    className="
                    opacity-0
                    transition-all duration-300
                    group-hover:opacity-100
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                  />

                </Link>

              ))}

            </div>

          </div>

          {/* ================================================= */}
          {/* SERVICES */}
          {/* ================================================= */}

          <div>

            <h3 className="text-xl font-bold mb-8">
              Core Services
            </h3>

            <div className="space-y-5">

              {services.map((item, i) => (

                <motion.div
                  whileHover={{
                    x: 8,
                  }}
                  key={i}
                  className="
                  flex items-center
                  gap-3
                  text-gray-400
                "
                >

                  <div
                    className="
                    w-2 h-2
                    rounded-full
                    bg-cyan-400
                  "
                  />

                  {item}

                </motion.div>

              ))}

            </div>

          </div>

          {/* ================================================= */}
          {/* CONTACT INFO */}
          {/* ================================================= */}

          <div>

            <h3 className="text-xl font-bold mb-8">
              Contact Info
            </h3>

            <div className="space-y-7">

              {/* PHONE */}
              <motion.div
                whileHover={{ x: 6 }}
                className="flex gap-4"
              >

                <div
                  className="
                  w-12 h-12
                  rounded-xl
                  bg-cyan-400/10
                  border border-cyan-400/20
                  flex items-center justify-center
                  text-cyan-400
                "
                >

                  <Phone size={20} />

                </div>

                <div>

                  <p className="text-sm text-gray-400 mb-1">
                    Mobile
                  </p>

                  <h4 className="font-semibold">
                    +91 9735067595
                  </h4>

                  <h4 className="font-semibold">
                    +91 9933638309
                  </h4>

                </div>

              </motion.div>

              {/* EMAIL */}
              <motion.div
                whileHover={{ x: 6 }}
                className="flex gap-4"
              >

                <div
                  className="
                  w-12 h-12
                  rounded-xl
                  bg-cyan-400/10
                  border border-cyan-400/20
                  flex items-center justify-center
                  text-cyan-400
                "
                >

                  <Mail size={20} />

                </div>

                <div>

                  <p className="text-sm text-gray-400 mb-1">
                    Email Address
                  </p>

                  <h4 className="font-semibold break-all">
                    kuddusali45@gmail.com
                  </h4>

                </div>

              </motion.div>

              {/* ADDRESS */}
              <motion.div
                whileHover={{ x: 6 }}
                className="flex gap-4"
              >

                <div
                  className="
                  w-12 h-12
                  rounded-xl
                  bg-cyan-400/10
                  border border-cyan-400/20
                  flex items-center justify-center
                  text-cyan-400
                "
                >

                  <MapPin size={20} />

                </div>

                <div>

                  <p className="text-sm text-gray-400 mb-1">
                    Office Address
                  </p>

                  <h4 className="font-semibold leading-relaxed text-sm">
                    Kuddus Ali Construction,
                    Mahisbathani Baluatola,
                    PO Barkol,
                    Malda - 732128,
                    India
                  </h4>

                </div>

              </motion.div>

              {/* MAP */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                className="
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                h-[220px]
                mt-8

                shadow-[0_20px_60px_rgba(0,0,0,0.45)]
              "
              >

                <iframe
                  src="https://www.google.com/maps?q=Malda,West%20Bengal,India&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="absolute inset-0"
                />

                {/* OVERLAY */}
                <div
                  className="
                  absolute top-4 left-4
                  px-4 py-2
                  rounded-full
                  bg-black/60
                  backdrop-blur-xl
                  border border-white/10
                  flex items-center gap-2
                "
                >

                  <Globe size={16} className="text-cyan-400" />

                  <span className="text-xs tracking-wider">
                    LIVE LOCATION
                  </span>

                </div>

              </motion.div>

              {/* OFFICE HOURS */}
              <div
                className="
                flex items-center
                gap-3
                text-sm
                text-white/60
                mt-4
              "
              >

                <Clock3 size={16} className="text-cyan-400" />

                Monday - Saturday | 9:00 AM - 7:00 PM

              </div>

            </div>

          </div>

        </div>

        {/* ================================================= */}
        {/* BOTTOM */}
        {/* ================================================= */}

        <div
          className="
          pt-8
          border-t border-white/10
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-5
        "
        >

          <p
            className="
            text-gray-500
            text-sm
            text-center lg:text-left
          "
          >
            © 2026 KAC Construction. All Rights Reserved.
          </p>

          <div
            className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-6
            text-sm
            text-gray-500
          "
          >

            <Link
              href="#"
              className="
              transition hover:text-cyan-400
            "
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="
              transition hover:text-cyan-400
            "
            >
              Terms & Conditions
            </Link>

            <Link
              href="#"
              className="
              transition hover:text-cyan-400
            "
            >
              Sitemap
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}