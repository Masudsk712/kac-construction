"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // 🔥 scroll detect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white text-black shadow-lg"
          : "bg-transparent text-white"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className={`text-xl font-bold ${scrolled ? "text-black" : "text-cyan-400"}`}>
          KAC Construction
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <div className="space-y-1">
              <span className={`block w-6 h-0.5 ${scrolled ? "bg-black" : "bg-white"}`}></span>
              <span className={`block w-6 h-0.5 ${scrolled ? "bg-black" : "bg-white"}`}></span>
              <span className={`block w-6 h-0.5 ${scrolled ? "bg-black" : "bg-white"}`}></span>
            </div>
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white text-black px-6 py-6 flex flex-col gap-4"
          >
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  )
}