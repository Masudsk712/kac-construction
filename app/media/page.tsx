"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Plus,
  ArrowRight,
  Play,
  CalendarDays,
  Building2,
  Camera,
  X,
} from "lucide-react";

import CTASection from "@/components/CTASection";

const featuredSlides = [
  {
    title: "765kV Transmission Line Project",
    subtitle: "Powering India’s Grid Infrastructure",
    desc:
      "KAC Construction successfully executing high-voltage transmission line projects with advanced engineering and precision.",
    image: "/placeholder.jpg",
  },

  {
    title: "Tower Erection Operations",
    subtitle: "Execution Excellence Across India",
    desc:
      "Our expert teams ensure fast-track tower erection and infrastructure deployment in challenging terrains.",
    image: "/placeholder.jpg",
  },

  {
    title: "Foundation & EPC Works",
    subtitle: "Reliable Infrastructure Solutions",
    desc:
      "Delivering durable civil foundations and EPC infrastructure for modern energy systems.",
    image: "/placeholder.jpg",
  },
];

const mediaCards = [
  {
    title: "Transmission Infrastructure",
    category: "Project Execution",
    desc:
      "High-voltage transmission projects executed with safety, speed, and engineering precision.",
    image: "/placeholder.jpg",
  },

  {
    title: "Hotline Stringing Work",
    category: "Field Operations",
    desc:
      "Advanced hotline stringing operations ensuring uninterrupted power supply across critical corridors.",
    image: "/placeholder.jpg",
  },

  {
    title: "Tower Foundation",
    category: "Civil Engineering",
    desc:
      "Strong and reliable tower foundations engineered for long-term infrastructure stability.",
    image: "/placeholder.jpg",
  },

  {
    title: "HTLS Reconductoring",
    category: "Grid Modernization",
    desc:
      "Modernizing transmission lines with high-temperature low-sag conductors.",
    image: "/placeholder.jpg",
  },

  {
    title: "Survey & Route Mapping",
    category: "Planning & Survey",
    desc:
      "Advanced survey and route planning solutions for optimized transmission infrastructure.",
    image: "/placeholder.jpg",
  },

  {
    title: "Project Mobilization",
    category: "Execution Team",
    desc:
      "Efficient mobilization of manpower, machinery, and engineering teams nationwide.",
    image: "/placeholder.jpg",
  },
];

export default function MediaPage() {

  const [activeSlide, setActiveSlide] = useState(0);

  const [selected, setSelected] = useState<any>(null);

  // AUTO SLIDER
  useEffect(() => {

    const timer = setInterval(() => {

      setActiveSlide((prev) =>
        (prev + 1) % featuredSlides.length
      );

    }, 5000);

    return () => clearInterval(timer);

  }, []);

  return (
    <main
      className="
      bg-[#020617]
      text-white
      overflow-x-hidden
      relative
    "
    >

      {/* GLOBAL BG */}
      <div className="fixed inset-0 -z-10 bg-[#020617]" />

      {/* GLOW */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">

        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />

      </div>

      {/* HERO SECTION */}
      <section
        className="
        relative
        min-h-screen
        overflow-hidden
        flex items-center
      "
      >

        {/* BG IMAGE */}
        <AnimatePresence mode="wait">

          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >

            <Image
              src={featuredSlides[activeSlide].image}
              alt="media"
              fill
              priority
              className="object-cover"
            />

          </motion.div>

        </AnimatePresence>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#020617]/80" />

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
          container-premium
          relative z-10
          pt-36
          pb-24
        "
        >

          {/* BADGE */}
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
              MEDIA & GALLERY
            </span>

          </motion.div>

          {/* TEXT */}
          <div className="max-w-5xl">

            <AnimatePresence mode="wait">

              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
              >

                <h1
                  className="
                  text-[44px]
                  sm:text-[56px]
                  md:text-[92px]
                  leading-[0.95]
                  font-black
                  tracking-[-3px]
                "
                >

                  {featuredSlides[activeSlide].title}

                  <span className="block text-cyan-400 mt-3">
                    {featuredSlides[activeSlide].subtitle}
                  </span>

                </h1>

                {/* LINE */}
                <div
                  className="
                  h-[4px]
                  w-[120px]
                  bg-cyan-400
                  rounded-full
                  mt-10
                  mb-10
                "
                />

                <p
                  className="
                  text-lg
                  md:text-xl
                  text-gray-300
                  leading-[2]
                  max-w-3xl
                "
                >
                  {featuredSlides[activeSlide].desc}
                </p>

              </motion.div>

            </AnimatePresence>

          </div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="
            flex
            flex-wrap
            gap-5
            mt-16
          "
          >

            <button
              className="
              group
              flex items-center gap-3
              bg-cyan-400
              hover:bg-cyan-300
              text-black
              font-bold
              px-8 py-5
              rounded-2xl
              transition-all duration-300
              hover:scale-105
            "
            >

              Explore Projects

              <ArrowRight
                size={18}
                className="
                transition
                group-hover:translate-x-1
              "
              />

            </button>

            <button
              className="
              flex items-center gap-3
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              px-8 py-5
              rounded-2xl
              hover:border-cyan-400/40
              transition
            "
            >

              <Play size={18} />

              Watch Operations

            </button>

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

      {/* BLOG STYLE SECTION */}
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
              FIELD OPERATIONS & PROJECTS
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold">
              <span className="gradient-text">
                Stories From The Ground
              </span>
            </h2>

          </div>

          {/* GRID */}
          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
          >

            {mediaCards.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.35 }}
                className="
                group
                glass-strong
                border-glow
                rounded-3xl
                overflow-hidden
                cursor-pointer
              "
                onClick={() => setSelected(item)}
              >

                {/* IMAGE */}
                <div className="relative h-[280px] overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
                    object-cover
                    transition duration-700
                    group-hover:scale-110
                  "
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* CATEGORY */}
                  <div
                    className="
                    absolute top-5 left-5
                    px-4 py-2
                    rounded-full
                    bg-black/50
                    backdrop-blur-xl
                    border border-white/10
                    text-xs
                    tracking-widest
                    text-cyan-400
                  "
                  >
                    {item.category}
                  </div>

                  {/* PLUS BUTTON */}
                  <motion.div
                    whileHover={{ rotate: 90 }}
                    className="
                    absolute top-5 right-5
                    w-12 h-12
                    rounded-2xl
                    bg-white/10
                    backdrop-blur-xl
                    border border-white/10
                    flex items-center justify-center
                  "
                  >

                    <Plus size={22} />

                  </motion.div>

                </div>

                {/* CONTENT */}
                <div className="p-7">

                  <div className="flex items-center gap-3 text-white/50 text-sm mb-4">

                    <CalendarDays size={15} />

                    <span>Infrastructure Update</span>

                  </div>

                  <h3
                    className="
                    text-2xl
                    font-bold
                    mb-4
                    group-hover:text-cyan-400
                    transition
                  "
                  >
                    {item.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* READ MORE */}
                  <div
                    className="
                    flex items-center gap-3
                    mt-7
                    text-cyan-400
                    font-medium
                  "
                  >

                    Read More

                    <ArrowRight
                      size={16}
                      className="
                      transition
                      group-hover:translate-x-1
                    "
                    />

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* GALLERY STRIP */}
      <section className="relative py-24 overflow-hidden">

        <div className="container-premium">

          {/* HEADING */}
          <div className="flex items-center justify-between gap-5 mb-14">

            <div>

              <p className="text-sm tracking-widest text-white/60 mb-3">
                LIVE PROJECT GALLERY
              </p>

              <h2 className="text-4xl md:text-5xl font-semibold">
                <span className="gradient-text">
                  Engineering In Motion
                </span>
              </h2>

            </div>

            <div
              className="
              hidden md:flex
              items-center gap-3
              text-cyan-400
            "
            >

              <Camera size={20} />

              <span className="font-medium">
                Updated Regularly
              </span>

            </div>

          </div>

          {/* MARQUEE */}
          <div className="overflow-hidden">

            <div
              className="
              flex gap-6
              w-max
              scroll-left
            "
            >

              {[...mediaCards, ...mediaCards].map((item, index) => (

                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  key={index}
                  className="
                  relative
                  w-[300px]
                  h-[220px]
                  rounded-3xl
                  overflow-hidden
                  border border-white/10
                  shrink-0
                "
                >

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  <div className="absolute bottom-5 left-5">

                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>

                    <p className="text-sm text-white/60">
                      {item.category}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* MODAL */}
      <AnimatePresence>

        {selected && (

          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
              fixed inset-0
              bg-black/80
              backdrop-blur-sm
              z-50
            "
              onClick={() => setSelected(null)}
            />

            {/* MODAL */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
              }}
              className="
              fixed inset-0
              z-50
              flex items-center justify-center
              px-4
            "
            >

              <div
                className="
                glass-strong
                border-glow
                rounded-3xl
                overflow-hidden
                max-w-5xl
                w-full
                relative
              "
              >

                {/* CLOSE */}
                <button
                  onClick={() => setSelected(null)}
                  className="
                  absolute top-5 right-5
                  z-20
                  w-11 h-11
                  rounded-full
                  bg-black/60
                  flex items-center justify-center
                "
                >

                  <X size={20} />

                </button>

                <div className="grid md:grid-cols-2">

                  {/* IMAGE */}
                  <div className="relative h-[300px] md:h-full">

                    <Image
                      src={selected.image}
                      alt={selected.title}
                      fill
                      className="object-cover"
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="p-8 md:p-10">

                    <p className="text-cyan-400 text-sm tracking-widest mb-4">
                      {selected.category}
                    </p>

                    <h2 className="text-4xl font-bold mb-6">
                      {selected.title}
                    </h2>

                    <p className="text-white/70 leading-relaxed mb-8">
                      {selected.desc}
                    </p>

                    <div
                      className="
                      flex items-center gap-4
                      text-white/60
                    "
                    >

                      <Building2 size={18} />

                      KAC Construction Infrastructure Division

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>
          </>

        )}

      </AnimatePresence>

      {/* CTA */}
      <CTASection />

    </main>
  );
}