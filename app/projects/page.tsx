"use client";
import Hero from "./components/Hero";
import StickyTabs from "./components/StickyTabs";

import ProjectStats from "./components/ProjectStats";
import ProjectTimeline from "./components/ProjectTimeline";
import ProjectGallery from "./components/ProjectGallery";
import ProjectCTA from "./components/ProjectCTA";

import OngoingProjects from "./sections/OngoingProjects";
import CompletedProjects from "./sections/CompletedProjects";
import FoundationProjects from "./sections/FoundationProjects";
import ErectionProjects from "./sections/ErectionProjects";
import HotlineProjects from "./sections/HotlineProjects";
import StringingProjects from "./sections/StringingProjects";
import ReconductoringProjects from "./sections/ReconductoringProjects";
import TransmissionProjects from "./sections/TransmissionProjects";

export default function ProjectsPage() {
  return (
    <div className="relative z-10 overflow-visible bg-[var(--bg)] text-[var(--text)]">
      {/* HERO */}
      <Hero />

      {/* STICKY TABS */}
      <StickyTabs />

      {/* CONTENT */}
      <div className="relative z-10">
        <section id="stats" className="scroll-mt-40 py-24">
          <ProjectStats />
        </section>

        <section id="ongoing" className="scroll-mt-40 py-24">
          <OngoingProjects />
        </section>

        <section id="completed" className="scroll-mt-40 py-24">
          <CompletedProjects />
        </section>

        <section id="foundation" className="scroll-mt-40 py-24">
          <FoundationProjects />
        </section>

        <section id="erection" className="scroll-mt-40 py-24">
          <ErectionProjects />
        </section>

        <section id="hotline" className="scroll-mt-40 py-24">
          <HotlineProjects />
        </section>

        <section id="stringing" className="scroll-mt-40 py-24">
          <StringingProjects />
        </section>

        <section id="reconductoring" className="scroll-mt-40 py-24">
          <ReconductoringProjects />
        </section>

        <section id="transmission" className="scroll-mt-40 py-24">
          <TransmissionProjects />
        </section>

        <section id="timeline" className="scroll-mt-40 py-24">
          <ProjectTimeline />
        </section>

        <section id="gallery" className="scroll-mt-40 py-24">
          <ProjectGallery />
        </section>

        <ProjectCTA />
      </div>
    </div>
  );
}
