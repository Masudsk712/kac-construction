"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const tabs = [
  {
    name: "Stats",
    id: "stats",
  },
  {
    name: "Ongoing",
    id: "ongoing",
  },
  {
    name: "Completed",
    id: "completed",
  },
  {
    name: "Foundation",
    id: "foundation",
  },
  {
    name: "Erection",
    id: "erection",
  },
  {
    name: "Stringing",
    id: "stringing",
  },
  {
    name: "Hotline",
    id: "hotline",
  },
  {
    name: "HTLS",
    id: "reconductoring",
  },
  {
    name: "Transmission",
    id: "transmission",
  },
  {
    name: "Timeline",
    id: "timeline",
  },
  {
    name: "Gallery",
    id: "gallery",
  },
];

export default function ProjectsStickyTabs() {

  const [active, setActive] = useState("stats");

  useEffect(() => {

    const handleScroll = () => {

      let current = "stats";

      tabs.forEach((tab) => {

        const section = document.getElementById(tab.id);

        if (!section) return;

        const top = section.offsetTop - 180;

        const bottom = top + section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {
          current = tab.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollToSection = (id: string) => {

    const section = document.getElementById(id);

    if (!section) return;

    window.scrollTo({
      top: section.offsetTop - 120,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="projects-tabs"
      className="
      sticky
      top-[70px]
      z-40

      border-b border-white/10

      bg-[#020617]/80
      backdrop-blur-2xl
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto

        px-4 sm:px-6 lg:px-8
        "
      >

        <div
          className="
          flex items-center

          gap-5 sm:gap-8

          overflow-x-auto
          scrollbar-hide

          py-4
          "
        >

          {tabs.map((tab) => (

            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className="
              relative

              whitespace-nowrap

              pb-2

              transition-all duration-300
              "
            >

              <span
                className={`
                text-sm
                sm:text-[15px]

                font-medium

                transition-all duration-300

                ${
                  active === tab.id
                    ? "text-cyan-400"
                    : "text-white/60 hover:text-cyan-300"
                }
                `}
              >
                {tab.name}
              </span>

              {/* ACTIVE UNDERLINE */}
              {active === tab.id && (

                <motion.div
                  layoutId="activeProjectTab"

                  className="
                  absolute
                  left-0
                  bottom-0

                  h-[2px]
                  w-full

                  rounded-full

                  bg-cyan-400
                  "
                />

              )}

            </button>

          ))}

        </div>

      </div>

    </div>
  );
}