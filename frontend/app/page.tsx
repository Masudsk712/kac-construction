import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import StatsSection from "@/components/StatsSection"
import AboutSection from "@/components/AboutSection"
import ServicesSection from "@/components/ServicesSection"
import ProjectsSection from "@/components/ProjectsSection"
import MediaSection from "@/components/MediaSection"
import ClientsMarquee from "@/components/ClientsMarquee"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <MediaSection />
      <ClientsMarquee />
      <CTASection />
      <Footer />
    </>
  )
}
