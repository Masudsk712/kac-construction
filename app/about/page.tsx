"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Hero from "@/components/about/Hero"
import Overview from "@/components/about/Overview"
import Leadership from "@/components/about/Leadership"
import Vision from "@/components/about/Vision"
import Values from "@/components/about/Values"
import MDMessage from "@/components/about/MDMessage"
import Journey from "@/components/about/Journey"
import Awards from "@/components/about/Awards"
import StickyTabs from "@/components/about/StickyTabs"
import AboutIntro from "@/components/about/AboutIntro"
import AboutPinSection from "@/components/about/AboutPinSection"

export default function AboutPage() {
  const pathname = usePathname()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    window.scrollTo({ top: 0, behavior: "auto" })

    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="bg-[#020617] text-white">

      {/* 🔥 HERO SECTION */}
      <section id="hero">
        <Hero />
      </section>

      {/* 🔥 FIXED STICKY TABS (NO WRAPPER) */}
      <StickyTabs />

      {/* 🔥 PIN INTRO SECTION */}
      <AboutPinSection />

      {/* 🔥 CONTENT START (OFFSET FOR FIXED TABS) */}
      <section id="about-intro" className="mt-[90px]">
        <AboutIntro />
      </section>

      <section id="overview">
        <Overview />
      </section>

      <section id="vision">
        <Vision />
      </section>

      <section id="md">
        <MDMessage />
      </section>

      <section id="leadership">
        <Leadership />
      </section>

      <section id="values">
        <Values />
      </section>

      <section id="journey">
        <Journey />
      </section>

      <section id="awards">
        <Awards />
      </section>

    </main>
  )
}