"use client"

import { useEffect, useState } from "react"

import Hero from "@/components/Hero"
import AboutSection from "@/components/AboutSection"
import ServicesSection from "@/components/ServicesSection"
import ProjectsSection from "@/components/ProjectsSection"
import VideoSection from "@/components/VideoSection"
import CTASection from "@/components/CTASection"
import Reveal from "@/components/Reveal"
import PageLoader from "@/components/PageLoader"
import Footer from "@/components/Footer"

export default function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <PageLoader />
  }

  return (
    <main className="overflow-hidden">

      <Hero startAnimation={!loading} />

      <Reveal><AboutSection /></Reveal>
      <Reveal><ServicesSection /></Reveal>
      <Reveal><ProjectsSection /></Reveal>
      <Reveal><VideoSection /></Reveal>
      <Reveal><CTASection /></Reveal>
      <Footer />

    </main>
  )
}