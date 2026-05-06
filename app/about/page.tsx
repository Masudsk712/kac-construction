"use client"

import Hero from "./components/Hero"
import StickyTabs from "./components/StickyTabs"
import Overview from "./components/Overview"
import Strengths from "./components/Strengths"
import Timeline from "./components/Timeline"
import MissionVision from "./components/MissionVision"
import MDMessage from "./components/MDMessage"
import Leadership from "./components/Leadership"
import Awards from "./components/Awards"
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  return (
    <main
      className="
        bg-transparent text-white overflow-x-hidden
        relative
      "
    >
      {/* 🔥 GLOBAL BACKGROUND EFFECT */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617]" />

      {/* 🔥 HERO SECTION */}
      <Hero />

      {/* 🔥 STICKY TABS NAVBAR */}
      <StickyTabs />

      {/* 🔥 COMPANY OVERVIEW */}
      <section id="overview">
        <Overview />
      </section>

      {/* 🔥 OUR STRENGTHS */}
      <section id="strengths">
        <Strengths />
      </section>

      {/* 🔥 TIMELINE (Journey Section) */}
      <section id="timeline">
        <Timeline />
      </section>

      {/* 🔥 MISSION / VISION / VALUES */}
      <section id="mission">
        <MissionVision />
      </section>

      {/* 🔥 MD MESSAGE */}
      <section id="md-message">
        <MDMessage />
      </section>

      {/* 🔥 LEADERSHIP TEAM */}
      <section id="leadership">
        <Leadership />
      </section>

      {/* 🔥 AWARDS */}
      <section id="awards">
        <Awards />
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  )
}