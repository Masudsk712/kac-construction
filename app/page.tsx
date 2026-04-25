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

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <PageLoader />

  return (
    <main className="overflow-x-hidden">

      {/* ❌ Hero ko ScrollZoom me mat daalo */}
      <Hero startAnimation={!loading} />

      {/* ✅ baaki sections zoom animation */}
      <ScrollZoom>
        <AboutSection />
      </ScrollZoom>

      <ScrollZoom>
        <ServicesSection />
      </ScrollZoom>

      <ScrollZoom>
        <ProjectsSection />
      </ScrollZoom>

      <ScrollZoom>
        <VideoSection />
      </ScrollZoom>

      <ScrollZoom>
        <CTASection />
      </ScrollZoom>

    </main>
  )
}