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
      tabs.forEach((tab) => {
        const section = document.getElementById(tab.id)
        if (!section) return

        const rect = section.getBoundingClientRect()

        if (rect.top <= 200 && rect.bottom >= 200) {
          setActive(tab.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (id: string) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className="
        fixed top-[70px] left-0 w-full z-50
        bg-white/95 backdrop-blur-xl
        text-black border-b border-gray-200
        shadow-md
      "
    >
      <div className="max-w-7xl mx-auto px-6 flex gap-8 overflow-x-auto py-4">

        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className="relative cursor-pointer whitespace-nowrap"
          >
            <span
              className={`transition ${
                active === tab.id
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {tab.name}
            </span>

            {active === tab.id && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600"
              />
            )}
          </div>
        ))}

      </div>
    </div>
  )
}