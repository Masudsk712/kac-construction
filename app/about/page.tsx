"use client"

import Hero from "@/components/about/Hero"
import Overview from "@/components/about/Overview"
import Leadership from "@/components/about/Leadership"
import Vision from "@/components/about/Vision"
import Values from "@/components/about/Values"
import MDMessage from "@/components/about/MDMessage"
import Journey from "@/components/about/Journey"
import Awards from "@/components/about/Awards"

export default function AboutPage() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden">
      <Hero />
      <Overview />
      <Vision />
      <MDMessage />
      <Leadership />
      <Values />
      <Journey />
      <Awards />
    </main>
  )
}