"use client"

import { useState, useEffect } from "react"

const tabs = [
  { name: "About Us", id: "overview" },
  { name: "Mission, Vision and Values", id: "vision" },
  { name: "MD's Message", id: "md" },
  { name: "Board Of Directors", id: "leadership" },
  { name: "Awards and Recognition", id: "awards" },
]

export default function StickyTabs() {
  const [active, setActive] = useState("overview")

  useEffect(() => {
    const handleScroll = () => {
      tabs.forEach(tab => {
        const el = document.getElementById(tab.id)
        if (!el) return

        const rect = el.getBoundingClientRect()

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(tab.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="w-full bg-white text-black border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 flex gap-8 overflow-x-auto">

        {tabs.map(tab => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            className={`py-4 whitespace-nowrap border-b-2 transition ${
              active === tab.id
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            {tab.name}
          </a>
        ))}

      </div>

    </div>
  )
}