"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
  MapPinned,
  Building2,
  TowerControl,
  Cable,
  Sparkles,
} from "lucide-react";

const tabs = [
  {
    name: "Survey",
    id: "survey",
    icon: MapPinned,
  },

  {
    name: "Foundation",
    id: "foundation",
    icon: Building2,
  },

  {
    name: "Erection",
    id: "erection",
    icon: TowerControl,
  },

  {
    name: "Stringing",
    id: "stringing",
    icon: Cable,
  },
];

const tabActive =
  "border-cyan-500/40 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.18)]";

const tabInactive =
  "border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-slate-700 dark:text-white/70 hover:text-cyan-700 dark:hover:text-cyan-300 hover:border-cyan-500/30 dark:hover:border-cyan-400/20 hover:bg-cyan-500/5 dark:hover:bg-cyan-400/5";

export default function ServiceStickyTabs() {

  const [active, setActive] =
    useState("survey");

  const [fixed, setFixed] =
    useState(false);

  const [hideTabs, setHideTabs] =
    useState(false);

  const isPinned = fixed && !hideTabs;

  useEffect(() => {

    const handleScroll = () => {

      const hero =
        document.getElementById("service-hero");

      if (hero) {

        const trigger =
          hero.offsetHeight - 120;

        setFixed(
          window.scrollY >= trigger
        );

      }

      let current = "survey";

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

      const stringing =
        document.getElementById("stringing");

      if (stringing) {

        const rect =
          stringing.getBoundingClientRect();

        if (rect.bottom <= 120) {

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
      window.scrollY -
      170;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

  };

  return (

    <>

      {isPinned && (
        <div className="h-[90px]" />
      )}

      <motion.div

        id="service-tabs"

        initial={{
          y: 0,
          opacity: 1,
        }}

        animate={{
          y: hideTabs ? -120 : 0,
          opacity: hideTabs ? 0 : 1,
        }}

        transition={{
          duration: 0.45,
        }}

        className={`
          sticky-tabs-bar
          w-full

          z-[999]

          transition-all duration-500

          ${
            isPinned
              ? `
                fixed
                top-[72px]
                left-0
                right-0

                bg-white/95
                dark:bg-[#020617]/85

                backdrop-blur-3xl

                border-b border-slate-200/80
                dark:border-white/10

                shadow-[0_12px_40px_rgba(15,23,42,0.08)]
                dark:shadow-[0_20px_60px_rgba(0,0,0,0.55)]
              `
              : `
                relative

                bg-white/95
                dark:bg-[#020617]/50

                backdrop-blur-2xl

                border-b border-slate-200/80
                dark:border-white/5
              `
          }
        `}
      >

        <motion.div
          className="
          absolute inset-0

          bg-gradient-to-r
          from-cyan-500/5
          via-transparent
          to-blue-500/5
        "
        />

        <motion.div
          className="
          container-premium

          flex
          items-center

          py-4

          relative
        "
        >

          <motion.div
            className="
            hidden lg:flex

            items-center
            gap-5

            shrink-0
          "
          >

            <motion.div
              className="
              w-10 h-10

              rounded-2xl

              bg-cyan-500/10
              border border-cyan-500/20
              dark:bg-cyan-400/10
              dark:border-cyan-400/20

              flex items-center justify-center
            "
            >

              <Sparkles
                size={16}
                className="text-cyan-600 dark:text-cyan-300"
              />

            </motion.div>

            <motion.div>

              <p
                className="
                text-[11px]

                tracking-[4px]

                text-slate-500
                dark:text-white/40
              "
              >
                EPC SERVICES
              </p>

              <h3
                className="
                text-sm

                font-semibold

                text-slate-800
                dark:text-white/80
              "
              >
                KUDDUS ALI CONSTRUCTION SOLUTIONS
              </h3>

            </motion.div>

            <motion.div
              className="
              w-px h-8

              bg-slate-200
              dark:bg-white/10

              ml-2
            "
            />

          </motion.div>

          <motion.div
            className="
            flex
            items-center

            gap-3

            overflow-x-auto
            scrollbar-hide

            lg:ml-8

            w-full
          "
          >

            {tabs.map((tab) => {

              const isActive =
                active === tab.id;

              const Icon = tab.icon;

              return (

                <motion.button
                  key={tab.id}

                  onClick={() =>
                    scrollToSection(tab.id)
                  }

                  whileTap={{
                    scale: 0.96,
                  }}

                  className={`
                    relative

                    shrink-0

                    flex items-center
                    gap-3

                    px-5 py-3

                    rounded-2xl

                    border

                    transition-all duration-300

                    ${isActive ? tabActive : tabInactive}
                  `}
                >

                  {isActive && (

                    <motion.div
                      layoutId="serviceGlow"

                      className="
                      absolute inset-0

                      rounded-2xl

                      bg-gradient-to-r
                      from-cyan-500/10
                      to-blue-500/10
                    "
                    />

                  )}

                  <span className="relative z-10 [&_svg]:shrink-0">
                    <Icon size={16} />
                  </span>

                  <span
                    className="
                    relative z-10

                    text-sm
                    font-medium

                    whitespace-nowrap
                  "
                  >
                    {tab.name}
                  </span>

                </motion.button>

              );

            })}

          </motion.div>

        </motion.div>

      </motion.div>

    </>

  );

}
