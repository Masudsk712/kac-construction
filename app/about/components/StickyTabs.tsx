"use client"

import { useState, useEffect } from "react"

import { motion } from "framer-motion"

import {
  Building2,
  Target,
  MessageSquareQuote,
  Users,
  Trophy,
} from "lucide-react"

const tabs = [
  {
    name: "About Us",
    id: "overview",
    icon: <Building2 size={16} />,
  },

  {
    name: "Mission, Vision & Values",
    id: "mission",
    icon: <Target size={16} />,
  },

  {
    name: "MD’s Message",
    id: "md-message",
    icon: <MessageSquareQuote size={16} />,
  },

  {
    name: "Board Of Directors",
    id: "leadership",
    icon: <Users size={16} />,
  },

  {
    name: "Awards & Recognition",
    id: "awards",
    icon: <Trophy size={16} />,
  },
]

export default function StickyTabs() {

  const [active, setActive] =
    useState("overview")

  const [fixed, setFixed] =
    useState(false)

  const [hideTabs, setHideTabs] =
    useState(false)

  useEffect(() => {

    const handleScroll = () => {

      /* ======================================== */
      /* HERO FIXED DETECT */
      /* ======================================== */

      const hero =
        document.getElementById("hero")

      if (hero) {

        const trigger =
          hero.offsetHeight - 120

        setFixed(
          window.scrollY >= trigger
        )

      }

      /* ======================================== */
      /* HIDE AFTER AWARDS */
      /* ======================================== */

      const awardsSection =
        document.getElementById("awards")

      if (awardsSection) {

        const rect =
          awardsSection.getBoundingClientRect()

        /*
          awards section fully pass ho gaya
        */

        if (rect.bottom <= 120) {

          setHideTabs(true)

        } else {

          setHideTabs(false)

        }

      }

      /* ======================================== */
      /* ACTIVE TAB DETECT */
      /* ======================================== */

      let current = "overview"

      tabs.forEach((tab) => {

        const section =
          document.getElementById(tab.id)

        if (!section) return

        const rect =
          section.getBoundingClientRect()

        if (
          rect.top <= 220 &&
          rect.bottom >= 220
        ) {

          current = tab.id

        }

      })

      setActive(current)

    }

    handleScroll()

    window.addEventListener(
      "scroll",
      handleScroll
    )

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      )

  }, [])

  /* ======================================== */
  /* SCROLL */
  /* ======================================== */

  const handleClick = (id: string) => {

    const section =
      document.getElementById(id)

    if (!section) return

    const y =
      section.getBoundingClientRect().top +
      window.scrollY -
      170

    window.scrollTo({
      top: y,
      behavior: "smooth",
    })

  }

  return (

    <>

      {/* ======================================== */}
      {/* SPACER */}
      {/* ======================================== */}

      {fixed && !hideTabs && (
        <div className="h-[90px]" />
      )}

      {/* ======================================== */}
      {/* STICKY TABS */}
      {/* ======================================== */}

      <motion.div

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
          w-full

          z-[999]

          transition-all duration-500

          ${fixed
            ? `
              fixed
              top-[72px]
              left-0

              bg-[#020617]/85
              backdrop-blur-3xl

              border-b border-white/10

              shadow-[0_20px_60px_rgba(0,0,0,0.55)]
            `
            : `
              relative

              bg-[#020617]/50
              backdrop-blur-2xl

              border-b border-white/5
            `
          }
        `}
      >

        {/* ======================================== */}
        {/* BG GLOW */}
        {/* ======================================== */}

        <div
          className="
          absolute inset-0

          bg-gradient-to-r
          from-cyan-500/5
          via-transparent
          to-blue-500/5
        "
        />

        {/* ======================================== */}
        {/* MAIN */}
        {/* ======================================== */}

        <div
          className="
          container-premium

          flex
          items-center

          py-4

          relative
        "
        >

          {/* ======================================== */}
          {/* LEFT INFO */}
          {/* ======================================== */}

          <div
            className="
            hidden lg:flex

            items-center
            gap-5

            shrink-0
          "
          >

            <div
              className="
              w-10 h-10

              rounded-2xl

              bg-cyan-400/10
              border border-cyan-400/20

              flex items-center justify-center
            "
            >

              <div
                className="
                w-2 h-2

                rounded-full

                bg-cyan-400

                animate-pulse
              "
              />

            </div>

            <div>

              <p
                className="
                text-[11px]

                tracking-[4px]

                text-white/40
              "
              >
                COMPANY PROFILE
              </p>

              <h3
                className="
                text-sm

                font-semibold

                text-white/80
              "
              >
                ABOUT KAC
              </h3>

            </div>

            <div
              className="
              w-px h-8

              bg-white/10

              ml-2
            "
            />

          </div>

          {/* ======================================== */}
          {/* TABS */}
          {/* ======================================== */}

          <div
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
                active === tab.id

              return (

                <motion.button
                  key={tab.id}

                  onClick={() =>
                    handleClick(tab.id)
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

                    ${isActive
                      ? `
                        border-cyan-400/30
                        bg-cyan-400/10

                        text-cyan-300

                        shadow-[0_0_30px_rgba(34,211,238,0.18)]
                      `
                      : `
                        border-white/5

                        bg-white/[0.03]

                        text-white/60

                        hover:text-cyan-300
                        hover:border-cyan-400/20
                        hover:bg-cyan-400/5
                      `
                    }
                  `}
                >

                  {/* ACTIVE GLOW */}
                  {isActive && (

                    <motion.div
                      layoutId="tabGlow"

                      className="
                      absolute inset-0

                      rounded-2xl

                      bg-gradient-to-r
                      from-cyan-500/10
                      to-blue-500/10
                    "
                    />

                  )}

                  {/* ICON */}
                  <span className="relative z-10">
                    {tab.icon}
                  </span>

                  {/* TEXT */}
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

              )

            })}

          </div>

        </div>

      </motion.div>

    </>

  )

}