"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname() // 🔥 active route detect

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 🔥 reusable link style
  const linkStyle = (path: string) =>
    `transition ${
      pathname === path
        ? "text-cyan-400 font-semibold"
        : "hover:text-cyan-300"
    }`

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/50 backdrop-blur-md text-white shadow-lg border-b border-white/10"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Image
            src="/LOGO 1.png"
            alt="KAC Logo"
            width={60}
            height={60}
            className="transition duration-300 hover:scale-110 
            drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] 
            hover:drop-shadow-[0_0_25px_rgba(34,211,238,1)]"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className={linkStyle("/")}>Home</Link>
          <Link href="/about" className={linkStyle("/about")}>About</Link>
          <Link href="/service" className={linkStyle("/service")}>Services</Link>
          <Link href="/projects" className={linkStyle("/projects")}>Projects</Link>
          <Link href="/media" className={linkStyle("/media")}>Media</Link>
          <Link href="/career" className={linkStyle("/career")}>Career</Link>
          <Link href="/contact" className={linkStyle("/contact")}>Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>

      </div>

      {/* 🔥 MOBILE MENU UPGRADED */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden 
            bg-black/70 backdrop-blur-xl 
            text-white px-6 py-6 
            flex flex-col gap-5 
            border-t border-white/10"
          >
            <Link href="/" onClick={() => setIsOpen(false)} className={linkStyle("/")}>
              Home
            </Link>

            <Link href="/about" onClick={() => setIsOpen(false)} className={linkStyle("/about")}>
              About
            </Link>

            <Link href="/service" onClick={() => setIsOpen(false)} className={linkStyle("/service")}>
              Services
            </Link>

            <Link href="/projects" onClick={() => setIsOpen(false)} className={linkStyle("/projects")}>
              Projects
            </Link>

            <Link href="/media" onClick={() => setIsOpen(false)} className={linkStyle("/media")}>
              Media
            </Link>

            <Link href="/career" onClick={() => setIsOpen(false)} className={linkStyle("/career")}>
              Career
            </Link>

            <Link href="/contact" onClick={() => setIsOpen(false)} className={linkStyle("/contact")}>
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  )
}