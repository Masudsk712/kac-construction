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
import CTASection from "@/components/CTASection"

export default function AboutPage() {
  return (
    <div className="relative z-10 overflow-visible bg-[var(--bg)] text-[var(--text)]">
      {/* HERO */}
      <Hero />

      {/* STICKY TABS */}
      <StickyTabs />

      {/* CONTENT */}
      <div className="relative z-10">
        <section id="overview" className="py-24">
          <Overview />
        </section>

        <section id="strengths" className="py-24">
          <Strengths />
        </section>

        <section id="timeline" className="py-24">
          <Timeline />
        </section>

        <section id="mission" className="py-24">
          <MissionVision />
        </section>

        <section id="md-message" className="py-24">
          <MDMessage />
        </section>

        <section id="leadership" className="py-24">
          <Leadership />
        </section>

        <section id="awards" className="py-24">
          <Awards />
        </section>

        <CTASection />
      </div>
    </div>
  );
}
