"use client"

import Hero from "@/components/Hero"
import AboutSection from "@/components/AboutSection"
import ServicesSection from "@/components/ServicesSection"
import ProjectsSection from "@/components/ProjectsSection"
import VideoSection from "@/components/VideoSection"
import CTASection from "@/components/CTASection"
import ScrollZoom from "@/components/ScrollZoom"
import SafetySection from "@/components/SafetySection"
import MachinerySection from "@/components/MachinerySection"

import StatsBar from "@/components/StatsBar"
import WhyChooseUs from "@/components/WhyChooseUs"
import dynamic from "next/dynamic"

const IndiaMapSection = dynamic(
  () => import("@/components/IndiaMapSection"),
  {
    ssr: false,
    loading: () => (
      <div
        className="min-h-[420px] w-full bg-[var(--bg-soft)] section-surface"
        aria-hidden
      />
    ),
  }
)
import FAQSection from "@/components/FAQSection"
import ClientsSection from "@/components/ClientsSection"

export default function HomePage() {

  return (
    <div className="overflow-x-hidden">

      {/* HERO */}
      <Hero />

      {/* STATS */}
      <ScrollZoom>
        <StatsBar />
      </ScrollZoom>

      {/* ABOUT */}
      <ScrollZoom>
        <AboutSection />
      </ScrollZoom>

      {/* WHY */}
      <ScrollZoom>
        <WhyChooseUs />
      </ScrollZoom>

      {/* SERVICES */}
      <ScrollZoom>
        <ServicesSection />
      </ScrollZoom>

      {/* PROJECTS */}
      <ScrollZoom>
        <ProjectsSection />
      </ScrollZoom>

      {/* SAFETY */}
      <ScrollZoom>
        <SafetySection />
      </ScrollZoom>

      {/* MACHINERY */}
      <ScrollZoom>
        <MachinerySection />
      </ScrollZoom>

      {/* CLIENTS */}
      <ScrollZoom>
        <ClientsSection />
      </ScrollZoom>

      {/* MAP */}
      <ScrollZoom>
        <IndiaMapSection />
      </ScrollZoom>

      {/* VIDEO */}
      <ScrollZoom>
        <VideoSection />
      </ScrollZoom>

      {/* FAQ */}
      <ScrollZoom>
        <FAQSection />
      </ScrollZoom>

      {/* CTA */}
      <ScrollZoom>
        <CTASection />
      </ScrollZoom>

    </div>
  )
}