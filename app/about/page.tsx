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

export default function AboutPage() {
  const pathname = usePathname()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    window.scrollTo(0, 0)
    ScrollTrigger.refresh()
  }, [])

  return (
    <main key={pathname} className="bg-[#020617] text-white overflow-hidden">

      <section id="hero">
        <Hero />
      </section>

      {/* 🔥 IMPORTANT FIX */}
      <div className="sticky top-[70px] z-40">
        <StickyTabs />
      </div>

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