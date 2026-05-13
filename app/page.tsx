"use client"
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Transmission Line & EPC Infrastructure Company in India",

  description:
    "Kuddus Ali Construction is a leading EPC infrastructure and transmission line company in India specializing in tower erection, foundation work, hotline stringing, HTLS reconductoring and power grid projects.",

  keywords: [
    "Transmission Line Company",
    "Tower Erection Company",
    "Power Grid Contractor",
    "Foundation Work",
    "HTLS Reconductoring",
    "Infrastructure Company India",
    "Construction Company Malda",
  ],

  alternates: {
    canonical: "https://kacgroups.com",
  },

  openGraph: {
    title:
      "Transmission Line & EPC Infrastructure Company",

    description:
      "Professional transmission line, tower erection and EPC infrastructure services across India.",

    url: "https://kacgroups.com",

    siteName: "Kuddus Ali Construction",

    locale: "en_IN",

    type: "website",
  },
};
import { useEffect, useState } from "react"

import Hero from "@/components/Hero"
import AboutSection from "@/components/AboutSection"
import ServicesSection from "@/components/ServicesSection"
import ProjectsSection from "@/components/ProjectsSection"
import VideoSection from "@/components/VideoSection"
import CTASection from "@/components/CTASection"
import PageLoader from "@/components/PageLoader"
import ScrollZoom from "@/components/ScrollZoom"

import StatsBar from "@/components/StatsBar"
import WhyChooseUs from "@/components/WhyChooseUs"
import IndiaMapSection from "@/components/IndiaMapSection"
import FAQSection from "@/components/FAQSection"
import ProcessSection from "@/components/ProcessSection"
import ClientsSection from "@/components/ClientsSection"

export default function HomePage() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <PageLoader />

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

      {/* PROCESS */}
      <ScrollZoom>
        <ProcessSection />
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