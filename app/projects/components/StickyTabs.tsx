"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
  BarChart3,
  Activity,
  CheckCircle2,
  Building2,
  TowerControl,
  Cable,
  Zap,
  RadioTower,
  Network,
  Clock3,
  ImageIcon,
} from "lucide-react";

const tabs = [
  {
    name: "Stats",
    id: "stats",
    icon: <BarChart3 size={16} />,
  },

  {
    name: "Ongoing",
    id: "ongoing",
    icon: <Activity size={16} />,
  },

  {
    name: "Completed",
    id: "completed",
    icon: <CheckCircle2 size={16} />,
  },

  {
    name: "Foundation",
    id: "foundation",
    icon: <Building2 size={16} />,
  },

  {
    name: "Erection",
    id: "erection",
    icon: <TowerControl size={16} />,
  },

  {
    name: "Hotline",
    id: "hotline",
    icon: <Zap size={16} />,
  },
  
  {
    name: "Stringing",
    id: "stringing",
    icon: <Cable size={16} />,
  },

  {
    name: "HTLS",
    id: "reconductoring",
    icon: <RadioTower size={16} />,
  },

  {
    name: "Transmission",
    id: "transmission",
    icon: <Network size={16} />,
  },

  {
    name: "Timeline",
    id: "timeline",
    icon: <Clock3 size={16} />,
  },

  {
    name: "Gallery",
    id: "gallery",
    icon: <ImageIcon size={16} />,
  },
];

export default function StickyTabs() {

  const [active, setActive] =
    useState("stats");

  const [fixed, setFixed] =
    useState(false);

  const [hideTabs, setHideTabs] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {

      /* HERO CHECK */
      const hero =
        document.getElementById("hero");

      if (hero) {

        const heroBottom =
          hero.offsetTop +
          hero.offsetHeight;

        if (
          window.scrollY >=
          heroBottom - 140
        ) {

          setFixed(true);

        } else {

          setFixed(false);

        }

      }

      /* ACTIVE TAB */
      let current = "stats";

      tabs.forEach((tab) => {

        const section =
          document.getElementById(tab.id);

        if (!section) return;

        const rect =
          section.getBoundingClientRect();

        if (
          rect.top <= 220 &&
          rect.bottom >= 220
        ) {

          current = tab.id;

        }

      });

      setActive(current);

      /* HIDE AFTER GALLERY */
      const gallery =
        document.getElementById("gallery");

      if (gallery) {

        const galleryBottom =
          gallery.offsetTop +
          gallery.offsetHeight;

        if (
          window.scrollY >=
          galleryBottom - 300
        ) {

          setHideTabs(true);

        } else {

          setHideTabs(false);

        }

      }

    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  const scrollToSection = (
    id: string
  ) => {

    const section =
      document.getElementById(id);

    if (!section) return;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      160;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

  };

  return (

    <>
      {/* SPACER */}
      {fixed && !hideTabs && (
        <div className="h-[92px]" />
      )}

      <div
        id="StickyTabs"

        className={`
          w-full

          z-[60]

          border-y border-white/10

          bg-[#020617]/85

          backdrop-blur-3xl

          transition-all duration-500

          ${
            hideTabs
              ? `
                opacity-0
                pointer-events-none
                -translate-y-5
              `
              : `
                opacity-100
                translate-y-0
              `
          }

          ${
            fixed
              ? `
                fixed
                top-[80px]
                left-0
              `
              : `
                relative
              `
          }
        `}
      >

        {/* BG GLOW */}
        <div
          className="
          absolute inset-0

          bg-gradient-to-r
          from-cyan-500/[0.03]
          via-blue-500/[0.02]
          to-cyan-500/[0.03]
        "
        />

        <div
          className="
          relative

          max-w-7xl
          mx-auto

          px-4
          sm:px-6
          lg:px-8
        "
        >

          <div
            className="
            flex items-center

            gap-3

            overflow-x-auto
            scrollbar-hide

            py-4
          "
          >

            {tabs.map((tab) => {

              const isActive =
                active === tab.id;

              return (

                <motion.button
                  key={tab.id}

                  whileTap={{
                    scale: 0.96,
                  }}

                  onClick={() =>
                    scrollToSection(tab.id)
                  }

                  className={`
                    relative

                    flex items-center
                    gap-2

                    whitespace-nowrap

                    px-5 py-3

                    rounded-2xl

                    border

                    transition-all duration-300

                    ${
                      isActive
                        ? `
                          border-cyan-400/30
                          bg-cyan-400/10
                          text-cyan-300
                          shadow-[0_0_25px_rgba(34,211,238,0.15)]
                        `
                        : `
                          border-white/5
                          bg-white/[0.03]
                          text-white/60

                          hover:text-cyan-300
                          hover:border-cyan-400/20
                          hover:bg-cyan-400/[0.05]
                        `
                    }
                  `}
                >

                  {/* ACTIVE BG */}
                  {isActive && (

                    <motion.div
                      layoutId="activeTab"

                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}

                      className="
                      absolute inset-0

                      rounded-2xl

                      bg-gradient-to-r
                      from-cyan-400/10
                      to-blue-500/10
                    "
                    />

                  )}

                  <div
                    className="
                    relative z-10

                    flex items-center
                    gap-2
                  "
                  >

                    <span
                      className={`
                        ${
                          isActive
                            ? "text-cyan-300"
                            : "text-white/50"
                        }
                      `}
                    >
                      {tab.icon}
                    </span>

                    <span
                      className="
                      text-sm
                      font-medium
                    "
                    >
                      {tab.name}
                    </span>

                  </div>

                </motion.button>

              );

            })}

          </div>

        </div>

      </div>
    </>

  );

}