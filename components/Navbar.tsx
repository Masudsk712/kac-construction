"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

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

  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const [aboutOpen, setAboutOpen] = useState(false)
  const [serviceOpen, setServiceOpen] = useState(false)
  const [projectOpen, setProjectOpen] = useState(false)

  const [mobileAbout, setMobileAbout] = useState(false)
  const [mobileService, setMobileService] = useState(false)
  const [mobileProject, setMobileProject] = useState(false)

  /* ================================================= */
  /* 🔥 SCROLL EFFECT */
  /* ================================================= */

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      )

  }, [])

  /* ================================================= */
  /* 🔥 LOCK BODY */
  /* ================================================= */

  useEffect(() => {

    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

  }, [isOpen])

  /* ================================================= */
  /* 🔥 ACTIVE LINK */
  /* ================================================= */

  const linkStyle = (path: string) =>
    `relative transition-all duration-300 ${
      pathname === path
        ? "text-cyan-300"
        : "text-white/85 hover:text-cyan-300"
    }`

  /* ================================================= */
  /* 🔥 CLOSE */
  /* ================================================= */

  const closeMenu = () => {

    setIsOpen(false)

    setMobileAbout(false)
    setMobileService(false)
    setMobileProject(false)

  }

  /* ================================================= */
  /* 🔥 ABOUT LINKS */
  /* ================================================= */

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

  /* ================================================= */
  /* 🔥 SERVICES */
  /* ================================================= */

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

  /* ================================================= */
  /* 🔥 PROJECT LINKS */
  /* ================================================= */

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

  return (

    <nav
      className={`
      fixed top-0 left-0 w-full z-[999]

      transition-all duration-500

      ${
        scrolled
          ? `
            bg-[#020617]/72
            backdrop-blur-3xl

            border-b border-white/10

            shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          `
          : `
            bg-transparent
          `
      }
    `}
    >

      {/* ================================================= */}
      {/* 🔥 PREMIUM GLOW */}
      {/* ================================================= */}

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

      {/* ================================================= */}
      {/* 🔥 NAVBAR */}
      {/* ================================================= */}

      <div
        className="
        relative

        container-premium

        py-4

        flex
        items-center
        justify-between
      "
      >

        {/* ================================================= */}
        {/* 🔥 LOGO */}
        {/* ================================================= */}

        <Link
          href="/"
          onClick={closeMenu}

          className="
          relative z-20

          flex items-center
        "
        >

          <Image
            src="/LOGO 1.png"
            alt="KAC Construction"

            width={72}
            height={72}

            priority

            className="
            object-contain

            transition-all duration-500

            hover:scale-105

            drop-shadow-[0_0_25px_rgba(34,211,238,0.45)]
          "
          />

        </Link>

        {/* ================================================= */}
        {/* 🔥 DESKTOP MENU */}
        {/* ================================================= */}

        <div
          className="
          hidden md:flex

          items-center

          gap-8
        "
        >

          {/* HOME */}
          <Link
            href="/"
            className={linkStyle("/")}
          >
            Home
          </Link>

          {/* ================================================= */}
          {/* ABOUT */}
          {/* ================================================= */}

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

                  className="
                  absolute
                  top-12
                  left-0

                  w-72

                  rounded-3xl

                  border border-white/10

                  bg-[#081120]/85
                  backdrop-blur-3xl

                  p-4

                  shadow-[0_30px_80px_rgba(0,0,0,0.55)]
                "
                >

                  <div className="space-y-2">

                    {aboutLinks.map(
                      (item, i) => (

                        <Link
                          key={i}
                          href={item.href}

                          className="
                          group

                          flex
                          items-center
                          justify-between

                          px-4 py-3

                          rounded-2xl

                          text-gray-300

                          transition-all duration-300

                          hover:bg-cyan-500/10
                          hover:text-cyan-300
                        "
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

          {/* ================================================= */}
          {/* SERVICES */}
          {/* ================================================= */}

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

                  className="
                  absolute
                  top-12
                  left-0

                  w-80

                  rounded-3xl

                  border border-white/10

                  bg-[#081120]/85
                  backdrop-blur-3xl

                  p-4

                  shadow-[0_30px_80px_rgba(0,0,0,0.55)]
                "
                >

                  <div className="space-y-2">

                    {serviceLinks.map(
                      (item, i) => (

                        <Link
                          key={i}
                          href={item.href}

                          className="
                          group

                          flex
                          items-center
                          justify-between

                          px-4 py-3

                          rounded-2xl

                          text-gray-300

                          transition-all duration-300

                          hover:bg-cyan-500/10
                          hover:text-cyan-300
                        "
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

          {/* ================================================= */}
          {/* PROJECTS */}
          {/* ================================================= */}

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

                  className="
                  absolute
                  top-12
                  left-0

                  w-[360px]

                  rounded-3xl

                  border border-white/10

                  bg-[#081120]/85
                  backdrop-blur-3xl

                  p-5

                  shadow-[0_30px_80px_rgba(0,0,0,0.55)]
                "
                >

                  {/* HEADER */}
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
                        text-white
                        font-bold
                      "
                      >
                        Project Portfolio
                      </h4>

                      <p
                        className="
                        text-xs
                        text-white/50
                      "
                      >
                        Transmission Infrastructure
                      </p>

                    </div>

                  </div>

                  {/* LINKS */}
                  <div className="space-y-2">

                    {projectLinks.map(
                      (item, i) => (

                        <Link
                          key={i}
                          href={item.href}

                          className="
                          group

                          flex
                          items-center
                          justify-between

                          px-4 py-3

                          rounded-2xl

                          text-gray-300

                          transition-all duration-300

                          hover:bg-cyan-500/10
                          hover:text-cyan-300
                        "
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

          {/* MEDIA */}
          <Link
            href="/media"
            className={linkStyle("/media")}
          >
            Media
          </Link>

          {/* CAREER */}
          <Link
            href="/career"
            className={linkStyle("/career")}
          >
            Career
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            className={linkStyle("/contact")}
          >
            Contact
          </Link>

        </div>

        {/* ================================================= */}
        {/* 🔥 MOBILE BUTTON */}
        {/* ================================================= */}

        <div className="md:hidden">

          <button
            onClick={() => setIsOpen(true)}

            className="
            relative

            w-11 h-11

            rounded-full

            border border-white/10

            bg-white/[0.05]
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

              <span className="block w-6 h-0.5 bg-white rounded-full" />
              <span className="block w-6 h-0.5 bg-white rounded-full" />
              <span className="block w-6 h-0.5 bg-white rounded-full" />

            </div>

          </button>

        </div>

      </div>

      {/* ================================================= */}
      {/* 🔥 MOBILE MENU */}
      {/* ================================================= */}

      <AnimatePresence>

        {isOpen && (

          <motion.div
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
              duration: 0.4,
            }}

            className="
            fixed top-0 right-0

            w-full h-screen

            bg-[#020617]/95
            backdrop-blur-3xl

            z-[999]

            overflow-y-auto

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

              border-b border-white/10
            "
            >

              <Image
                src="/LOGO 1.png"
                alt="KAC"

                width={70}
                height={70}

                className="object-contain"
              />

              <button
                onClick={closeMenu}

                className="
                w-11 h-11

                rounded-full

                border border-white/10

                bg-white/5

                flex
                items-center
                justify-center
              "
              >
                <X size={22} />
              </button>

            </div>

            {/* MOBILE LINKS */}
            <div
              className="
              px-6 py-8

              flex flex-col

              gap-6

              text-lg
            "
            >

              <Link
                href="/"
                onClick={closeMenu}

                className="
                text-white
                hover:text-cyan-300
              "
              >
                Home
              </Link>

              {/* ABOUT */}
              <div>

                <div className="flex justify-between items-center">

                  <Link
                    href="/about"

                    onClick={closeMenu}

                    className="
                    text-white
                    hover:text-cyan-300
                  "
                  >
                    About
                  </Link>

                  <button
                    onClick={() =>
                      setMobileAbout(
                        !mobileAbout
                      )
                    }
                  >
                    {mobileAbout
                      ? <Minus size={18} />
                      : <Plus size={18} />}
                  </button>

                </div>

                <AnimatePresence>

                  {mobileAbout && (

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

                      className="
                      overflow-hidden

                      ml-4 mt-4

                      flex flex-col
                      gap-4

                      text-sm
                    "
                    >

                      {aboutLinks.map(
                        (item, i) => (

                          <Link
                            key={i}
                            href={item.href}

                            onClick={closeMenu}

                            className="
                            text-gray-300
                            hover:text-cyan-300
                          "
                          >
                            {item.name}
                          </Link>

                        )
                      )}

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

              {/* SERVICES */}
              <div>

                <div className="flex justify-between items-center">

                  <Link
                    href="/service"

                    onClick={closeMenu}

                    className="
                    text-white
                    hover:text-cyan-300
                  "
                  >
                    Services
                  </Link>

                  <button
                    onClick={() =>
                      setMobileService(
                        !mobileService
                      )
                    }
                  >
                    {mobileService
                      ? <Minus size={18} />
                      : <Plus size={18} />}
                  </button>

                </div>

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

                      className="
                      overflow-hidden

                      ml-4 mt-4

                      flex flex-col
                      gap-4

                      text-sm
                    "
                    >

                      {serviceLinks.map(
                        (item, i) => (

                          <Link
                            key={i}
                            href={item.href}

                            onClick={closeMenu}

                            className="
                            text-gray-300
                            hover:text-cyan-300
                          "
                          >
                            {item.name}
                          </Link>

                        )
                      )}

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

              {/* PROJECTS */}
              <div>

                <div className="flex justify-between items-center">

                  <Link
                    href="/projects"

                    onClick={closeMenu}

                    className="
                    text-white
                    hover:text-cyan-300
                  "
                  >
                    Projects
                  </Link>

                  <button
                    onClick={() =>
                      setMobileProject(
                        !mobileProject
                      )
                    }
                  >
                    {mobileProject
                      ? <Minus size={18} />
                      : <Plus size={18} />}
                  </button>

                </div>

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

                      className="
                      overflow-hidden

                      ml-4 mt-4

                      flex flex-col
                      gap-4

                      text-sm
                    "
                    >

                      {projectLinks.map(
                        (item, i) => (

                          <Link
                            key={i}
                            href={item.href}

                            onClick={closeMenu}

                            className="
                            text-gray-300
                            hover:text-cyan-300
                          "
                          >
                            {item.name}
                          </Link>

                        )
                      )}

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

              {/* OTHER */}
              <Link
                href="/media"
                onClick={closeMenu}

                className="
                text-white
                hover:text-cyan-300
              "
              >
                Media
              </Link>

              <Link
                href="/career"
                onClick={closeMenu}

                className="
                text-white
                hover:text-cyan-300
              "
              >
                Career
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}

                className="
                text-white
                hover:text-cyan-300
              "
              >
                Contact
              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  )
}