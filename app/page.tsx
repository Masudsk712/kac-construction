"use client"

import Hero from "@/components/Hero"
import AboutSection from "@/components/AboutSection"
import ServicesSection from "@/components/ServicesSection"
import ProjectsSection from "@/components/ProjectsSection"
import VideoSection from "@/components/VideoSection"
import CTASection from "@/components/CTASection"
import ScrollZoom from "@/components/ScrollZoom"

import StatsBar from "@/components/StatsBar"
import WhyChooseUs from "@/components/WhyChooseUs"
import IndiaMapSection from "@/components/IndiaMapSection"
import FAQSection from "@/components/FAQSection"
import ClientsSection from "@/components/ClientsSection"

export default function HomePage() {

  return (
    <main className="overflow-x-hidden">

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

    </main>
  )
}