"use client"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",

  description:
    "Learn more about Kuddus Ali Construction, a trusted EPC infrastructure and transmission line company based in Malda, West Bengal, India.",

  keywords: [
    "About Kuddus Ali Construction",
    "Transmission Company India",
    "Infrastructure Company West Bengal",
    "Power Grid Contractor",
  ],

  alternates: {
    canonical: "https://kacgroups.com/about",
  },
};

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

    <main
      className="
      bg-transparent
      text-white
      relative
    "
    >

      {/* BG */}
      <div className="fixed inset-0 -z-10 bg-[#020617]" />

      {/* HERO */}
      <Hero />

      {/* STICKY */}
      <StickyTabs />

      {/* CONTENT */}
      <div className="relative z-10">

        <section id="overview">
          <Overview />
        </section>

        <section id="strengths">
          <Strengths />
        </section>

        <section id="timeline">
          <Timeline />
        </section>

        <section id="mission">
          <MissionVision />
        </section>

        <section id="md-message">
          <MDMessage />
        </section>

        <section id="leadership">
          <Leadership />
        </section>

        <section id="awards">
          <Awards />
        </section>

        <CTASection />

      </div>

    </main>

  )

}