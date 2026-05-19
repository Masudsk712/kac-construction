"use client";
import { useEffect, useState, useCallback, useRef } from "react";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import CTASection from "@/components/CTASection";

// ───────────────────────── Types ─────────────────────────

interface MediaItem {
  title: string;
  subtitle?: string;
  category?: string;
  desc: string;
  image: string;
}

interface FeaturedSlide extends MediaItem {
  subtitle: string;
}

// ───────────────────────── Data ─────────────────────────

const featuredSlides: FeaturedSlide[] = [
  {
    title: "765kV Transmission Line Project",
    subtitle: "Powering India's Grid Infrastructure",
    desc:
      "Kuddus Ali Construction successfully executing high-voltage transmission line projects with advanced engineering and precision.",
    image: "/media/Media1.webp",
  },

  {
    title: "Tower Erection Operations",
    subtitle: "Execution Excellence Across India",
    desc:
      "Our expert teams ensure fast-track tower erection and infrastructure deployment in challenging terrains.",
    image: "/media/Media2.webp",
  },

  {
    title: "Foundation & EPC Works",
    subtitle: "Reliable Infrastructure Solutions",
    desc:
      "Delivering durable civil foundations and EPC infrastructure for modern energy systems.",
    image: "/media/Media3.webp",
  },
];

const mediaCards: MediaItem[] = [
  {
    title: "Transmission Infrastructure",
    category: "Project Execution",
    desc:
      "High-voltage transmission projects executed with safety, speed, and engineering precision.",
    image: "/media/Media4.webp",
  },

  {
    title: "Hotline Stringing Work",
    category: "Field Operations",
    desc:
      "Advanced hotline stringing operations ensuring uninterrupted power supply across critical corridors.",
    image: "/media/Media5.webp",
  },

  {
    title: "Tower Foundation",
    category: "Civil Engineering",
    desc:
      "Strong and reliable tower foundations engineered for long-term infrastructure stability.",
    image: "/media/Media6.webp",
  },

  {
    title: "HTLS Reconductoring",
    category: "Grid Modernization",
    desc:
      "Modernizing transmission lines with high-temperature low-sag conductors.",
    image: "/media/Media7.webp",
  },

  {
    title: "Survey & Route Mapping",
    category: "Planning & Survey",
    desc:
      "Advanced survey and route planning solutions for optimized transmission infrastructure.",
    image: "/media/Media8.webp",
  },

  {
    title: "Project Mobilization",
    category: "Execution Team",
    desc:
      "Efficient mobilization of manpower, machinery, and engineering teams nationwide.",
    image: "/media/Media9.webp",
  },
];

// ───────────────────────── ───────────────────────────────

export default function MediaPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selected, setSelected] = useState<MediaItem | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // ─── Auto-advance hero slider ───
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featuredSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // ─── Manual slider navigation ───
  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) =>
      prev === 0 ? featuredSlides.length - 1 : prev - 1
    );
  }, []);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % featuredSlides.length);
  }, []);

  // ─── Modal keyboard handling ───
  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };

    // Trap focus inside modal
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const modal = modalRef.current;
    if (modal) {
      const focusable = modal.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusable?.focus();
    }

    document.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [selected]);

  // ─── Render ───
  return (
    <div
      className="
        bg-[var(--bg)]
        text-[var(--text)]
        relative
        z-10
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute top-[-200px] left-[-150px]
          w-[500px] h-[500px]
          bg-cyan-500/10 blur-[140px] rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          absolute bottom-[-200px] right-[-150px]
          w-[500px] h-[500px]
          bg-blue-500/10 blur-[140px] rounded-full
          pointer-events-none
        "
      />

      {/* ══════════════ HERO SECTION ══════════════ */}
      <section
        className="
          page-hero
          relative
          min-h-screen
          overflow-hidden
          flex items-center
        "
        aria-label="Featured media slideshow"
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
              alt={featuredSlides[activeSlide].title}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* OVERLAY */}
        <div className="absolute inset-0 hero-page-overlay" />

        {/* LEFT GRADIENT */}
        <div className="absolute inset-0 hero-page-gradient" />

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
              border border-[var(--border)]
              bg-[var(--glass)]
              backdrop-blur-xl
              mb-8
            "
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm tracking-[4px] text-[var(--text-soft)]">
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
                    text-[var(--text)]
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
                  aria-hidden="true"
                />

                <p
                  className="
                    text-lg
                    md:text-xl
                    text-[var(--text-soft)]
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
              aria-label="Explore projects"
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
                border border-[var(--border)]
                bg-[var(--glass)]
                backdrop-blur-xl
                px-8 py-5
                rounded-2xl
                hover:border-cyan-400/40
                transition
                text-[var(--text)]
              "
              aria-label="Watch operations video"
            >
              <Play size={18} />

              Watch Operations
            </button>
          </motion.div>

          {/* ─── SLIDER DOTS ─── */}
          <div
            className="
              flex items-center gap-4
              mt-12
            "
            role="tablist"
            aria-label="Slide navigation"
          >
            {featuredSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                role="tab"
                aria-selected={activeSlide === index}
                aria-label={`Go to slide ${index + 1}`}
                className={`
                  rounded-full
                  transition-all duration-500
                  ${
                    activeSlide === index
                      ? "bg-cyan-400 w-12 h-2.5"
                      : "bg-white/30 hover:bg-white/50 w-3 h-3"
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* ─── SIDE ARROWS ─── */}
        <button
          onClick={prevSlide}
          className="
            absolute left-4 top-1/2 -translate-y-1/2
            z-20
            w-12 h-12
            rounded-full
            bg-black/40 hover:bg-black/60
            backdrop-blur-md
            border border-white/10
            flex items-center justify-center
            text-white
            transition-all duration-300
            hover:scale-110
            hidden md:flex
          "
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={nextSlide}
          className="
            absolute right-4 top-1/2 -translate-y-1/2
            z-20
            w-12 h-12
            rounded-full
            bg-black/40 hover:bg-black/60
            backdrop-blur-md
            border border-white/10
            flex items-center justify-center
            text-white
            transition-all duration-300
            hover:scale-110
            hidden md:flex
          "
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>

        {/* BOTTOM FADE */}
        <div
          className="
            absolute bottom-0 left-0
            w-full h-40
            bg-gradient-to-b
            from-transparent
            to-[var(--bg)]
            pointer-events-none
          "
        />
      </section>

      {/* ══════════════ BLOG STYLE SECTION ══════════════ */}
      <section
        className="relative py-32 overflow-hidden"
        aria-label="Media gallery grid"
      >
        {/* GLOW */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] top-0 left-0" />
          <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[100px] bottom-0 right-0" />
        </div>

        <div className="container-premium relative">
          {/* HEADING */}
          <div className="text-center mb-20">
            <p className="text-sm tracking-widest text-[var(--text-soft)] mb-3">
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
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(item);
                  }
                }}
                aria-label={`View details about ${item.title}`}
              >
                {/* IMAGE */}
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="lazy"
                    className="
                      object-cover
                      transition duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t from-black/80 via-black/20 to-transparent
                    "
                    aria-hidden="true"
                  />

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
                    aria-hidden="true"
                  >
                    <Plus size={22} />
                  </motion.div>
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <div className="flex items-center gap-3 text-[var(--text-soft)] text-sm mb-4">
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
                      text-[var(--text)]
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="text-[var(--text-soft)] leading-relaxed">
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
                    aria-hidden="true"
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

      {/* ══════════════ GALLERY STRIP ══════════════ */}
      <section
        className="relative py-24 overflow-hidden"
        aria-label="Scrolling project gallery"
      >
        <div className="container-premium">
          {/* HEADING */}
          <div className="flex items-center justify-between gap-5 mb-14">
            <div>
              <p className="text-sm tracking-widest text-[var(--text-soft)] mb-3">
                LIVE PROJECT GALLERY
              </p>

              <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text)]">
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
                    cursor-pointer
                  "
                  onClick={() => setSelected(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelected(item);
                    }
                  }}
                  aria-label={`View ${item.title}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="lazy"
                    className="object-cover"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                    aria-hidden="true"
                  />

                  <div className="absolute bottom-5 left-5">
                    <h3 className="font-semibold text-lg text-white">
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

      {/* ══════════════ MODAL ══════════════ */}
      <AnimatePresence>
        {selected && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="
                fixed inset-0
                bg-black/80
                backdrop-blur-sm
                z-50
              "
              onClick={() => setSelected(null)}
              aria-hidden="true"
            />

            {/* MODAL */}
            <motion.div
              ref={modalRef}
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
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="
                fixed inset-0
                z-50
                flex items-center justify-center
                px-4 py-20
              "
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.title} details`}
            >
              <div
                className="
                  glass-strong
                  border-glow
                  rounded-3xl
                  overflow-hidden
                  max-w-5xl
                  w-full
                  max-h-[90vh]
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
                    hover:bg-black/80
                    flex items-center justify-center
                    text-white
                    transition-all duration-200
                    hover:scale-110
                  "
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                <div className="grid md:grid-cols-2">
                  {/* IMAGE */}
                  <div className="relative h-[300px] md:h-full min-h-[300px]">
                    <Image
                      src={selected.image}
                      alt={selected.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-8 md:p-10 overflow-y-auto">
                    <p className="text-cyan-400 text-sm tracking-widest mb-4 font-medium">
                      {selected.category}
                    </p>

                    <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">
                      {selected.title}
                    </h2>

                    <p className="text-black/70 dark:text-white/70 leading-relaxed mb-8">
                      {selected.desc}
                    </p>

                    <div className="flex items-center gap-4 text-black/60 dark:text-white/60">
                      <Building2 size={18} />
                      <span>Kuddus Ali Construction Infrastructure Division</span>
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
    </div>
  );
}