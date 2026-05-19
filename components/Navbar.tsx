"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import ThemeToggle from "./ThemeToggle"

import {
  motion,
  AnimatePresence,
} from "framer-motion"

import {
  ChevronDown,
  Plus,
  Minus,
  X,
  ArrowUpRight,
  FolderKanban,
} from "lucide-react"

export default function Navbar() {

  const pathname = usePathname()

  const [isOpen, setIsOpen] =
    useState(false)

  const [scrolled, setScrolled] =
    useState(false)

  const [aboutOpen, setAboutOpen] =
    useState(false)

  const [serviceOpen, setServiceOpen] =
    useState(false)

  const [projectOpen, setProjectOpen] =
    useState(false)

  const [mobileAbout, setMobileAbout] =
    useState(false)

  const [mobileService, setMobileService] =
    useState(false)

  const [mobileProject, setMobileProject] =
    useState(false)

  /* ======================================== */
  /* SCROLL */
  /* ======================================== */

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

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
  /* BODY LOCK */
  /* ======================================== */

  useEffect(() => {

    if (isOpen) {
      document.body.style.overflow =
        "hidden"
    } else {
      document.body.style.overflow =
        "auto"
    }

  }, [isOpen])

  /* ======================================== */
  /* ACTIVE LINK */
  /* ======================================== */

  const linkStyle = (path: string) =>
    `relative transition-all duration-300 ${pathname === path
      ? "text-cyan-600 dark:text-cyan-400"
      : `
          text-slate-800
          dark:text-white/85

          hover:text-cyan-600
          dark:hover:text-cyan-400
        `
    }`

  /* ======================================== */
  /* CLOSE */
  /* ======================================== */

  const closeMenu = () => {

    setIsOpen(false)

    setMobileAbout(false)
    setMobileService(false)
    setMobileProject(false)
  }

  /* ======================================== */
  /* ABOUT */
  /* ======================================== */

  const aboutLinks = [
    {
      name: "Overview",
      href: "/about#overview",
    },

    {
      name: "Mission & Vision",
      href: "/about#mission",
    },

    {
      name: "MD Message",
      href: "/about#md-message",
    },

    {
      name: "Leadership",
      href: "/about#leadership",
    },

    {
      name: "Awards",
      href: "/about#awards",
    },
  ]

  /* ======================================== */
  /* SERVICES */
  /* ======================================== */

  const serviceLinks = [
    {
      name: "Survey Work",
      href: "/service#survey",
    },

    {
      name: "Foundation Work",
      href: "/service#foundation",
    },

    {
      name: "Tower Erection",
      href: "/service#erection",
    },

    {
      name: "Stringing Work",
      href: "/service#stringing",
    },
  ]

  /* ======================================== */
  /* PROJECTS */
  /* ======================================== */

  const projectLinks = [
    {
      name: "Completed Projects",
      href: "/projects#completed",
    },

    {
      name: "Ongoing Projects",
      href: "/projects#ongoing",
    },

    {
      name: "Transmission Projects",
      href: "/projects#transmission",
    },

    {
      name: "Tower Erection",
      href: "/projects#tower",
    },

    {
      name: "HTLS Reconductoring",
      href: "/projects#htls",
    },
  ]

  /* ======================================== */
  /* DROPDOWN CLASS */
  /* ======================================== */

  const dropdownClass = `
    absolute
    top-12
    left-0

    rounded-3xl

    border

    border-black/10
    dark:border-white/10

    bg-white/95
    dark:bg-[#081120]/92

    backdrop-blur-3xl

    p-4

    shadow-[0_30px_80px_rgba(0,0,0,0.25)]
    dark:shadow-[0_30px_80px_rgba(0,0,0,0.55)]
  `

  const dropdownLink = `
    group

    flex
    items-center
    justify-between

    px-4 py-3

    rounded-2xl

    text-slate-700
    dark:text-white/75

    transition-all duration-300

    hover:bg-cyan-500/10
    hover:text-cyan-400
  `

  return (

    <nav
      aria-label="Main navigation"
      className={`
        fixed top-0 left-0

        w-full

        z-[99999]

        transition-all duration-500

        ${scrolled
          ? `
              bg-white/75
              dark:bg-[#020617]/75

              backdrop-blur-3xl

              border-b

              border-black/5
              dark:border-white/10

              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
            `
          : `
              bg-transparent
            `
        }
      `}
    >

      {/* GLOW */}
      <div
        className="
          absolute inset-0

          bg-gradient-to-r
          from-cyan-500/[0.05]
          via-transparent
          to-blue-500/[0.05]

          pointer-events-none
        "
      />

      {/* NAVBAR */}
      <div
        className="
          relative

          container-premium

          min-h-[72px]
          md:min-h-[80px]

          py-3
          md:py-4

          flex
          items-center
          justify-between
          gap-4
        "
      >

        {/* LOGO */}
        <Link
          href="/"

          onClick={() => {
            closeMenu()
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }}

          className="
            relative z-20

            flex
            shrink-0
            items-center
          "
        >

          <Image
            src="/icon.png"
            alt="Kuddus Ali Construction"

            width={72}
            height={72}

            priority

            className="
              h-12
              w-auto
              md:h-14

              object-contain

              transition-all duration-500

              hover:scale-105

              drop-shadow-[0_0_25px_rgba(34,211,238,0.45)]
            "
          />

        </Link>

        {/* DESKTOP */}
        <motion.div
          className="
            hidden md:flex

            flex-1
            items-center
            justify-center

            gap-5
            lg:gap-7
            xl:gap-8
          "
        >

          <Link
            href="/"
            className={linkStyle("/")}
          >
            Home
          </Link>

          {/* ABOUT */}
          <div
            className="relative"

            onMouseEnter={() =>
              setAboutOpen(true)
            }

            onMouseLeave={() =>
              setAboutOpen(false)
            }
          >

            <Link
              href="/about"

              className={`
                ${linkStyle("/about")}

                flex items-center gap-1
              `}
            >
              About

              <ChevronDown size={16} />
            </Link>

            <AnimatePresence>

              {aboutOpen && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 14,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  exit={{
                    opacity: 0,
                    y: 14,
                  }}

                  transition={{
                    duration: 0.25,
                  }}

                  className={`
                    ${dropdownClass}

                    w-72
                  `}
                >

                  <div className="space-y-2">

                    {aboutLinks.map(
                      (item, i) => (

                        <Link
                          key={i}
                          href={item.href}

                          className={dropdownLink}
                        >

                          {item.name}

                          <ArrowUpRight
                            size={16}

                            className="
                              opacity-0

                              transition

                              group-hover:opacity-100
                              group-hover:-translate-y-1
                              group-hover:translate-x-1
                            "
                          />

                        </Link>

                      )
                    )}

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </div>

          {/* SERVICES */}
          <div
            className="relative"

            onMouseEnter={() =>
              setServiceOpen(true)
            }

            onMouseLeave={() =>
              setServiceOpen(false)
            }
          >

            <Link
              href="/service"

              className={`
                ${linkStyle("/service")}

                flex items-center gap-1
              `}
            >
              Services

              <ChevronDown size={16} />
            </Link>

            <AnimatePresence>

              {serviceOpen && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 14,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  exit={{
                    opacity: 0,
                    y: 14,
                  }}

                  transition={{
                    duration: 0.25,
                  }}

                  className={`
                    ${dropdownClass}

                    w-80
                  `}
                >

                  <div className="space-y-2">

                    {serviceLinks.map(
                      (item, i) => (

                        <Link
                          key={i}
                          href={item.href}

                          className={dropdownLink}
                        >

                          {item.name}

                          <ArrowUpRight
                            size={16}

                            className="
                              opacity-0

                              transition

                              group-hover:opacity-100
                              group-hover:-translate-y-1
                              group-hover:translate-x-1
                            "
                          />

                        </Link>

                      )
                    )}

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </div>

          {/* PROJECTS */}
          <div
            className="relative"

            onMouseEnter={() =>
              setProjectOpen(true)
            }

            onMouseLeave={() =>
              setProjectOpen(false)
            }
          >

            <Link
              href="/projects"

              className={`
                ${linkStyle("/projects")}

                flex items-center gap-1
              `}
            >
              Projects

              <ChevronDown size={16} />
            </Link>

            <AnimatePresence>

              {projectOpen && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 14,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  exit={{
                    opacity: 0,
                    y: 14,
                  }}

                  transition={{
                    duration: 0.25,
                  }}

                  className={`
                    ${dropdownClass}

                    w-[360px]
                  `}
                >

                  <div
                    className="
                      flex items-center
                      gap-3

                      mb-5

                      px-2
                    "
                  >

                    <div
                      className="
                        w-12 h-12

                        rounded-2xl

                        bg-cyan-400/10

                        flex items-center
                        justify-center

                        text-cyan-300
                      "
                    >

                      <FolderKanban size={22} />

                    </div>

                    <div>

                      <h4
                        className="
                          text-slate-900
                          dark:text-white

                          font-bold
                        "
                      >
                        Project Portfolio
                      </h4>

                      <p
                        className="
                          text-xs

                          text-slate-500
                          dark:text-white/50
                        "
                      >
                        Transmission Infrastructure
                      </p>

                    </div>

                  </div>

                  <div className="space-y-2">

                    {projectLinks.map(
                      (item, i) => (

                        <Link
                          key={i}
                          href={item.href}

                          className={dropdownLink}
                        >

                          {item.name}

                          <ArrowUpRight
                            size={16}

                            className="
                              opacity-0

                              transition

                              group-hover:opacity-100
                              group-hover:-translate-y-1
                              group-hover:translate-x-1
                            "
                          />

                        </Link>

                      )
                    )}

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </div>

          <Link
            href="/media"
            className={linkStyle("/media")}
          >
            Media
          </Link>

          <Link
            href="/career"
            className={linkStyle("/career")}
          >
            Career
          </Link>

          <Link
            href="/contact"
            className={linkStyle("/contact")}
          >
            Contact
          </Link>

        </motion.div>

        {/* THEME + MOBILE MENU */}
        <motion.div
          className="
            flex
            shrink-0
            items-center
            justify-end
            gap-3
          "
        >

          <ThemeToggle />

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            onClick={() =>
              setIsOpen(true)
            }

            className="
              relative
              md:hidden

              w-11 h-11

              rounded-full

              border

              border-black/10
              dark:border-white/10

              bg-white/80
              dark:bg-white/[0.05]

              backdrop-blur-xl

              flex
              items-center
              justify-center

              overflow-hidden
            "
          >

            <div
              className="
                absolute inset-0

                bg-gradient-to-r
                from-cyan-500/10
                to-blue-500/10
              "
            />

            <div className="relative space-y-1">

              <span
                className="
                  block
                  w-6 h-0.5

                  bg-slate-900
                  dark:bg-white

                  rounded-full
                "
              />

              <span
                className="
                  block
                  w-6 h-0.5

                  bg-slate-900
                  dark:bg-white

                  rounded-full
                "
              />

              <span
                className="
                  block
                  w-6 h-0.5

                  bg-slate-900
                  dark:bg-white

                  rounded-full
                "
              />

            </div>

          </button>

        </motion.div>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {isOpen && (

          <>
            {/* OVERLAY */}
            <motion.div
              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              exit={{
                opacity: 0,
              }}

              onClick={closeMenu}

              className="
                fixed inset-0

                bg-black/50

                z-[9998]

                md:hidden
              "
            />

            {/* MENU */}
            <motion.div
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{
                opacity: 0,
                x: "100%",
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              exit={{
                opacity: 0,
                x: "100%",
              }}

              transition={{
                duration: 0.35,
              }}

              className="
                fixed top-0 right-0

                w-[85%]
                max-w-[340px]

                h-screen

                bg-white
                dark:bg-[#020617]

                z-[99999]

                overflow-y-auto

                shadow-[0_0_80px_rgba(0,0,0,0.35)]

                md:hidden
              "
            >

              {/* TOP */}
              <div
                className="
                  flex
                  items-center
                  justify-between

                  px-6 py-6

                  border-b

                  border-black/5
                  dark:border-white/10
                "
              >

                <Link
                  href="/"

                  onClick={() => {
                    closeMenu()
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }}
                >

                  <Image
                    src="/icon.png"
                    alt="KAC"

                    width={70}
                    height={70}

                    className="object-contain"
                  />

                </Link>

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMenu}

                  className="
                    w-11 h-11

                    rounded-full

                    border

                    border-black/10
                    dark:border-white/10

                    bg-black/[0.03]
                    dark:bg-white/5

                    flex
                    items-center
                    justify-center
                  "
                >

                  <X
                    size={22}

                    className="
                      text-slate-900
                      dark:text-white
                    "
                  />

                </button>

              </div>

              {/* LINKS */}
              <motion.div
                className="
                  px-6 py-8

                  flex flex-col
                  items-stretch

                  gap-1

                  w-full
                "
              >

                {/* HOME */}
                <Link
                  href="/"
                  onClick={closeMenu}

                  className="
                    w-full

                    flex
                    items-center
                    justify-start

                    py-3

                    text-left
                    text-base
                    font-medium

                    text-slate-800
                    dark:text-white

                    hover:text-cyan-600
                    dark:hover:text-cyan-400

                    transition
                  "
                >
                  Home
                </Link>

                {/* ABOUT */}
                <div className="w-full border-b border-black/5 dark:border-white/10 pb-4">

                  <button
                    type="button"
                    aria-expanded={mobileAbout}
                    aria-controls="mobile-about-links"
                    onClick={() =>
                      setMobileAbout(!mobileAbout)
                    }

                    className="
        w-full

        flex
        items-center
        justify-between

        text-left

        text-base
        font-medium

        text-slate-800
        dark:text-white

        hover:text-cyan-600
        dark:hover:text-cyan-400

        transition
      "
                  >

                    <span className="text-left">About</span>

                    {mobileAbout ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}

                  </button>

                  <AnimatePresence>

                    {mobileAbout && (

                      <motion.div
                        id="mobile-about-links"
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}

                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}

                        exit={{
                          opacity: 0,
                          height: 0,
                        }}

                        transition={{
                          duration: 0.3,
                        }}

                        className="
            overflow-hidden

            pt-4
            pl-3

            flex flex-col
            gap-4
          "
                      >

                        {aboutLinks.map((item, i) => (

                          <Link
                            key={i}
                            href={item.href}

                            onClick={closeMenu}

                            className="
                block
                w-full

                py-1.5

                text-left
                text-sm

                text-slate-700
                dark:text-white/75

                hover:text-cyan-600
                dark:hover:text-cyan-400

                transition
              "
                          >
                            {item.name}
                          </Link>

                        ))}

                      </motion.div>

                    )}

                  </AnimatePresence>

                </div>

                {/* SERVICES */}
                <div className="w-full border-b border-black/5 dark:border-white/10 pb-4">

                  <button
                    onClick={() =>
                      setMobileService(!mobileService)
                    }

                    className="
        w-full

        flex
        items-center
        justify-between

        text-left

        text-base
        font-medium

        text-slate-800
        dark:text-white

        hover:text-cyan-600
        dark:hover:text-cyan-400

        transition
      "
                  >

                    <span className="text-left">Services</span>

                    {mobileService ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}

                  </button>

                  <AnimatePresence>

                    {mobileService && (

                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}

                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}

                        exit={{
                          opacity: 0,
                          height: 0,
                        }}

                        transition={{
                          duration: 0.3,
                        }}

                        className="
            overflow-hidden

            pt-4
            pl-3

            flex flex-col
            gap-4
          "
                      >

                        {serviceLinks.map((item, i) => (

                          <Link
                            key={i}
                            href={item.href}

                            onClick={closeMenu}

                            className="
                text-sm

                text-slate-700
                dark:text-white/75

                hover:text-cyan-600
                dark:hover:text-cyan-400

                transition
              "
                          >
                            {item.name}
                          </Link>

                        ))}

                      </motion.div>

                    )}

                  </AnimatePresence>

                </div>

                {/* PROJECTS */}
                <div className="w-full border-b border-black/5 dark:border-white/10 pb-4">

                  <button
                    onClick={() =>
                      setMobileProject(!mobileProject)
                    }

                    className="
        w-full

        flex
        items-center
        justify-between

        text-left

        text-base
        font-medium

        text-slate-800
        dark:text-white

        hover:text-cyan-600
        dark:hover:text-cyan-400

        transition
      "
                  >

                    <span className="text-left">Projects</span>

                    {mobileProject ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}

                  </button>

                  <AnimatePresence>

                    {mobileProject && (

                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}

                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}

                        exit={{
                          opacity: 0,
                          height: 0,
                        }}

                        transition={{
                          duration: 0.3,
                        }}

                        className="
            overflow-hidden

            pt-4
            pl-3

            flex flex-col
            gap-4
          "
                      >

                        {projectLinks.map((item, i) => (

                          <Link
                            key={i}
                            href={item.href}

                            onClick={closeMenu}

                            className="
                block
                w-full

                py-1.5

                text-left
                text-sm

                text-slate-700
                dark:text-white/75

                hover:text-cyan-600
                dark:hover:text-cyan-400

                transition
              "
                          >
                            {item.name}
                          </Link>

                        ))}

                      </motion.div>

                    )}

                  </AnimatePresence>

                </div>

                {/* MEDIA */}
                <Link
                  href="/media"
                  onClick={closeMenu}

                  className="
                    w-full

                    flex
                    items-center
                    justify-start

                    py-3

                    text-left
                    text-base
                    font-medium

                    text-slate-800
                    dark:text-white

                    hover:text-cyan-600
                    dark:hover:text-cyan-400

                    transition
                  "
                >
                  Media
                </Link>

                {/* CAREER */}
                <Link
                  href="/career"
                  onClick={closeMenu}

                  className="
                    w-full

                    flex
                    items-center
                    justify-start

                    py-3

                    text-left
                    text-base
                    font-medium

                    text-slate-800
                    dark:text-white

                    hover:text-cyan-600
                    dark:hover:text-cyan-400

                    transition
                  "
                >
                  Career
                </Link>

                {/* CONTACT */}
                <Link
                  href="/contact"
                  onClick={closeMenu}

                  className="
                    w-full

                    flex
                    items-center
                    justify-start

                    py-3

                    text-left
                    text-base
                    font-medium

                    text-slate-800
                    dark:text-white

                    hover:text-cyan-600
                    dark:hover:text-cyan-400

                    transition
                  "
                >
                  Contact
                </Link>

              </motion.div>

            </motion.div>

          </>

        )}

      </AnimatePresence>

    </nav>
  )
}