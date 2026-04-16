import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import VideoSection from "@/components/VideoSection";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="overflow-hidden">

      <Hero />

      <Reveal>
        <AboutSection />
      </Reveal>

      <Reveal>
        <ServicesSection />
      </Reveal>

      <Reveal>
        <ProjectsSection />
      </Reveal>

      <Reveal>
        <VideoSection />
      </Reveal>

      <Reveal>
        <CTASection />
      </Reveal>

    </main>
  );
}