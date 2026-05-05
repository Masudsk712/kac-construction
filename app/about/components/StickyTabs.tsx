"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const tabs = [
  { name: "About Us", id: "overview" },
  { name: "Mission, Vision and Values", id: "mission" },
  { name: "MD’s Message", id: "md-message" },
  { name: "Board Of Directors", id: "leadership" },
  { name: "Awards and Recognition", id: "awards" },
]

export default function StickyTabs() {
  const [active, setActive] = useState("overview")

  const NAV_HEIGHT = 72
  const TAB_HEIGHT = 60

  useEffect(() => {
    const handleScroll = () => {
      let current = "overview"

      tabs.forEach((tab) => {
        const section = document.getElementById(tab.id)
        if (!section) return

        const top = section.offsetTop - (NAV_HEIGHT + TAB_HEIGHT)
        const bottom = top + section.offsetHeight

        if (window.scrollY >= top && window.scrollY < bottom) {
          current = tab.id
        }
      })

      setActive(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (id: string) => {
    const section = document.getElementById(id)
    if (!section) return

    window.scrollTo({
      top: section.offsetTop - (NAV_HEIGHT + TAB_HEIGHT),
      behavior: "smooth",
    })
  }

  return (
    <div
      id="StickyTabs"
      className="
      sticky top-[72px] z-[49]

      bg-black/50 backdrop-blur-2xl
      border-b border-white/10
      shadow-[0_10px_40px_rgba(0,0,0,0.6)]
    "
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center py-4">

        {/* LEFT LABEL */}
        <div className="flex items-center gap-5">
          <span className="text-sm font-semibold text-white/80">
            ABOUT KAC
          </span>
          <div className="w-px h-5 bg-white/20" />
        </div>

        {/* TABS */}
        <div className="ml-6 flex gap-10 overflow-x-auto">

          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              className="relative cursor-pointer whitespace-nowrap pb-1"
            >
              <span
                className={`text-sm transition ${
                  active === tab.id
                    ? "text-cyan-400 font-medium"
                    : "text-white/60 hover:text-cyan-300"
                }`}
              >
                {tab.name}
              </span>

              {/* UNDERLINE */}
              {active === tab.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-cyan-400"
                />
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}