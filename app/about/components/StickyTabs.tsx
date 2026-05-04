"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const tabs = [
  { name: "About Us", id: "overview" },
  { name: "Mission, Vision and Values", id: "vision" },
  { name: "MD’s Message", id: "md" },
  { name: "Board Of Directors", id: "leadership" },
  { name: "Awards and Recognition", id: "awards" },
]

export default function StickyTabs() {
  const [active, setActive] = useState("overview")

  useEffect(() => {
    const handleScroll = () => {
      let current = "overview"

      tabs.forEach((tab) => {
        const section = document.getElementById(tab.id)
        if (!section) return

        const rect = section.getBoundingClientRect()

        if (rect.top <= 140 && rect.bottom >= 140) {
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

    const offset = 90
    const top =
      section.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({
      top,
      behavior: "smooth",
    })
  }

  return (
    <div className="sticky top-[70px] z-40 bg-[#f5f7fa] border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 flex items-center py-4">

        {/* LEFT */}
        <div className="flex items-center gap-5">
          <span className="text-sm font-semibold text-gray-800">
            ABOUT KAC
          </span>
          <div className="w-px h-5 bg-gray-300" />
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
                className={`text-sm ${
                  active === tab.id
                    ? "text-blue-600 font-medium"
                    : "text-gray-500 hover:text-blue-500"
                }`}
              >
                {tab.name}
              </span>

              {active === tab.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-blue-600"
                />
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}