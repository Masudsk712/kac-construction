"use client"

import { useEffect, useState } from "react"

import Hero from "@/components/Hero"
import AboutSection from "@/components/AboutSection"
import ServicesSection from "@/components/ServicesSection"
import ProjectsSection from "@/components/ProjectsSection"
import VideoSection from "@/components/VideoSection"
import CTASection from "@/components/CTASection"
import PageLoader from "@/components/PageLoader"
import ScrollZoom from "@/components/ScrollZoom"

// 🔥 NEW PREMIUM SECTIONS
import StatsBar from "@/components/StatsBar"
import WhyChooseUs from "@/components/WhyChooseUs"
import IndiaMapSection from "@/components/IndiaMapSection"
import FAQSection from "@/components/FAQSection"
import ProcessSection from "@/components/ProcessSection"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <PageLoader />

  return (
    <main className="overflow-x-hidden">

      {/* 🔥 HERO (NO ZOOM) */}
      <Hero startAnimation={!loading} />

      {/* 🔥 TRUST FIRST */}
      <ScrollZoom>
        <StatsBar />
      </ScrollZoom>

      {/* 🔥 ABOUT */}
      <ScrollZoom>
        <AboutSection />
      </ScrollZoom>

      {/* 🔥 WHY CHOOSE US */}
      <ScrollZoom>
        <WhyChooseUs />
      </ScrollZoom>

      {/* 🔥 SERVICES */}
      <ScrollZoom>
        <ServicesSection />
      </ScrollZoom>

      {/* 🔥 PROCESS */}
      <ScrollZoom>
        <ProcessSection />
      </ScrollZoom>

      {/* 🔥 PROJECTS */}
      <ScrollZoom>
        <ProjectsSection />
      </ScrollZoom>

      {/* 🔥 INDIA MAP */}
      <ScrollZoom>
        <IndiaMapSection />
      </ScrollZoom>

      {/* 🔥 VIDEO */}
      <ScrollZoom>
        <VideoSection />
      </ScrollZoom>

      {/* 🔥 FAQ */}
      <ScrollZoom>
        <FAQSection />
      </ScrollZoom>

      {/* 🔥 CTA */}
      <ScrollZoom>
        <CTASection />
      </ScrollZoom>

    </main>
  )
}