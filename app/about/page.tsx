"use client"

import { useEffect } from "react"
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

export default function AboutPage() {

  useEffect(() => {
    // ✅ GSAP plugin register (IMPORTANT)
    gsap.registerPlugin(ScrollTrigger)

    // optional: refresh after load
    ScrollTrigger.refresh()
  }, [])

  return (
    <main className="bg-[#020617] text-white overflow-hidden scroll-smooth">

      {/* HERO */}
      <section id="hero">
        <Hero />
      </section>

      {/* OVERVIEW */}
      <section id="overview">
        <Overview />
      </section>

      {/* VISION */}
      <section id="vision">
        <Vision />
      </section>

      {/* MD MESSAGE */}
      <section id="md">
        <MDMessage />
      </section>

      {/* LEADERSHIP */}
      <section id="leadership">
        <Leadership />
      </section>

      {/* VALUES */}
      <section id="values">
        <Values />
      </section>

      {/* JOURNEY */}
      <section id="journey">
        <Journey />
      </section>

      {/* AWARDS */}
      <section id="awards">
        <Awards />
      </section>

    </main>
  )
}