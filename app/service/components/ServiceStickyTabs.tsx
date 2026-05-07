"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { name: "Survey", id: "survey" },
  { name: "Foundation", id: "foundation" },
  { name: "Erection", id: "erection" },
  { name: "Stringing", id: "stringing" },
];

export default function ServiceStickyTabs() {
  const [active, setActive] = useState("survey");

  useEffect(() => {
    const handleScroll = () => {
      let current = "survey";

      tabs.forEach((tab) => {
        const section = document.getElementById(tab.id);

        if (!section) return;

        const top = section.offsetTop - 180;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          current = tab.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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
      className="
      sticky top-[70px] sm:top-[78px] z-40
      bg-black/50 backdrop-blur-2xl
      border-b border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
  flex gap-6 sm:gap-10
  overflow-x-auto
  scrollbar-hide
  py-4
  scrollbar-hide
  "
        >

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className="relative whitespace-nowrap"
            >

              <span
                className={`
                text-sm sm:text-base
font-medium transition
                ${active === tab.id
                    ? "text-cyan-400"
                    : "text-white/60 hover:text-cyan-300"
                  }
                `}
              >
                {tab.name}
              </span>

              {active === tab.id && (
                <motion.div
                  layoutId="serviceUnderline"
                  className="
                  absolute left-0 -bottom-2
                  w-full h-[2px]
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