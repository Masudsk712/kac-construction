"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

import {
  ChevronDown,
  Plus,
  Minus,
  X,
} from "lucide-react"

export default function Navbar() {

  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const [aboutOpen, setAboutOpen] = useState(false)
  const [serviceOpen, setServiceOpen] = useState(false)

  const [mobileAbout, setMobileAbout] = useState(false)
  const [mobileService, setMobileService] = useState(false)

  /* ============================= */
  /* SCROLL EFFECT */
  /* ============================= */
  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  /* ============================= */
  /* LOCK BODY SCROLL */
  /* ============================= */
  useEffect(() => {

    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

  }, [isOpen])

  /* ============================= */
  /* ACTIVE LINK STYLE */
  /* ============================= */
  const linkStyle = (path: string) =>
    `transition duration-300 ${
      pathname === path
        ? "text-cyan-400 font-semibold"
        : "text-white hover:text-cyan-300"
    }`

  /* ============================= */
  /* CLOSE MENU */
  /* ============================= */
  const closeMenu = () => {
    setIsOpen(false)
    setMobileAbout(false)
    setMobileService(false)
  }

  /* ============================= */
  /* ABOUT LINKS */
  /* ============================= */
  const aboutLinks = [
    { name: "Overview", href: "/about#overview" },
    { name: "Mission & Vision", href: "/about#mission" },
    { name: "MD Message", href: "/about#md-message" },
    { name: "Leadership", href: "/about#leadership" },
    { name: "Awards", href: "/about#awards" },
  ]

  /* ============================= */
  /* SERVICE LINKS */
  /* ============================= */
  const serviceLinks = [
    { name: "Survey Work", href: "/service#survey" },
    { name: "Foundation Work", href: "/service#foundation" },
    { name: "Tower Erection", href: "/service#erection" },
    { name: "Stringing Work", href: "/service#stringing" },
  ]

  return (

    <nav
      className={`
      fixed top-0 left-0 w-full z-[999]
      transition-all duration-500
      ${
        scrolled
          ? "bg-black/60 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }
      `}
    >

      {/* BG GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* ============================= */}
        {/* LOGO */}
        {/* ============================= */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center"
        >

          <Image
            src="/LOGO 1.png"
            alt="KAC Logo"
            width={70}
            height={70}
            priority
            className="
            object-contain
            drop-shadow-[0_0_20px_rgba(34,211,238,0.7)]
            hover:scale-105
            transition
            "
          />

        </Link>

        {/* ============================= */}
        {/* DESKTOP MENU */}
        {/* ============================= */}
        <div className="hidden md:flex items-center gap-8">

          <Link href="/" className={linkStyle("/")}>
            Home
          </Link>

          {/* ABOUT */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >

            <Link
              href="/about"
              className={`${linkStyle("/about")} flex items-center gap-1`}
            >
              About
              <ChevronDown size={16} />
            </Link>

            <AnimatePresence>

              {aboutOpen && (

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.25 }}
                  className="
                  absolute top-10 left-0
                  w-64
                  bg-black/80 backdrop-blur-2xl
                  border border-white/10
                  rounded-2xl
                  p-4
                  space-y-2
                  shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                  "
                >

                  {aboutLinks.map((item, i) => (

                    <Link
                      key={i}
                      href={item.href}
                      className="
                      block px-4 py-3 rounded-xl
                      text-gray-300
                      hover:bg-cyan-500/10
                      hover:text-cyan-300
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
          <div
            className="relative"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >

            <Link
              href="/service"
              className={`${linkStyle("/service")} flex items-center gap-1`}
            >
              Services
              <ChevronDown size={16} />
            </Link>

            <AnimatePresence>

              {serviceOpen && (

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.25 }}
                  className="
                  absolute top-10 left-0
                  w-72
                  bg-black/80 backdrop-blur-2xl
                  border border-white/10
                  rounded-2xl
                  p-4
                  space-y-2
                  shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                  "
                >

                  {serviceLinks.map((item, i) => (

                    <Link
                      key={i}
                      href={item.href}
                      className="
                      block px-4 py-3 rounded-xl
                      text-gray-300
                      hover:bg-cyan-500/10
                      hover:text-cyan-300
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

          <Link href="/projects" className={linkStyle("/projects")}>
            Projects
          </Link>

          <Link href="/media" className={linkStyle("/media")}>
            Media
          </Link>

          <Link href="/career" className={linkStyle("/career")}>
            Career
          </Link>

          <Link href="/contact" className={linkStyle("/contact")}>
            Contact
          </Link>

        </div>

        {/* ============================= */}
        {/* MOBILE BUTTON */}
        {/* ============================= */}
        <div className="md:hidden">

          <button
            onClick={() => setIsOpen(true)}
            className="
            w-11 h-11 rounded-full
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            flex items-center justify-center
            "
          >

            <div className="space-y-1">

              <span className="block w-6 h-0.5 bg-white rounded-full" />
              <span className="block w-6 h-0.5 bg-white rounded-full" />
              <span className="block w-6 h-0.5 bg-white rounded-full" />

            </div>

          </button>

        </div>

      </div>

      {/* ============================= */}
      {/* MOBILE MENU */}
      {/* ============================= */}
      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4 }}
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
            <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">

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
                w-11 h-11 rounded-full
                border border-white/10
                bg-white/5
                flex items-center justify-center
                "
              >
                <X size={22} />
              </button>

            </div>

            {/* MENU */}
            <div className="px-6 py-8 flex flex-col gap-6 text-lg">

              <Link
                href="/"
                onClick={closeMenu}
                className="text-white hover:text-cyan-300 transition"
              >
                Home
              </Link>

              {/* ABOUT */}
              <div>

                <div className="flex justify-between items-center">

                  <Link
                    href="/about"
                    onClick={closeMenu}
                    className="text-white hover:text-cyan-300 transition"
                  >
                    About
                  </Link>

                  <button
                    onClick={() => setMobileAbout(!mobileAbout)}
                  >
                    {mobileAbout ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </button>

                </div>

                <AnimatePresence>

                  {mobileAbout && (

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="
                      overflow-hidden
                      ml-4 mt-4
                      flex flex-col gap-4
                      text-sm
                      "
                    >

                      {aboutLinks.map((item, i) => (

                        <Link
                          key={i}
                          href={item.href}
                          onClick={closeMenu}
                          className="
                          text-gray-300
                          hover:text-cyan-300
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
              <div>

                <div className="flex justify-between items-center">

                  <Link
                    href="/service"
                    onClick={closeMenu}
                    className="text-white hover:text-cyan-300 transition"
                  >
                    Services
                  </Link>

                  <button
                    onClick={() => setMobileService(!mobileService)}
                  >
                    {mobileService ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </button>

                </div>

                <AnimatePresence>

                  {mobileService && (

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="
                      overflow-hidden
                      ml-4 mt-4
                      flex flex-col gap-4
                      text-sm
                      "
                    >

                      {serviceLinks.map((item, i) => (

                        <Link
                          key={i}
                          href={item.href}
                          onClick={closeMenu}
                          className="
                          text-gray-300
                          hover:text-cyan-300
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

              <Link
                href="/projects"
                onClick={closeMenu}
                className="text-white hover:text-cyan-300 transition"
              >
                Projects
              </Link>

              <Link
                href="/media"
                onClick={closeMenu}
                className="text-white hover:text-cyan-300 transition"
              >
                Media
              </Link>

              <Link
                href="/career"
                onClick={closeMenu}
                className="text-white hover:text-cyan-300 transition"
              >
                Career
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="text-white hover:text-cyan-300 transition"
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