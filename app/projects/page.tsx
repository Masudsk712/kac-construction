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

    <main
  className="
  relative
  bg-[var(--bg)]
  text-[var(--text)]
  overflow-visible
  z-10
"
>
      {/* HERO */}
      <Hero />

      {/* STICKY TABS */}
      <StickyTabs />

      {/* CONTENT */}
      <div className="relative z-10">

        <section
          id="stats"
          className="scroll-mt-40"
        >
          <ProjectStats />
        </section>

        <section
          id="ongoing"
          className="scroll-mt-40"
        >
          <OngoingProjects />
        </section>

        <section
          id="completed"
          className="scroll-mt-40"
        >
          <CompletedProjects />
        </section>

        <section
          id="foundation"
          className="scroll-mt-40"
        >
          <FoundationProjects />
        </section>

        <section
          id="erection"
          className="scroll-mt-40"
        >
          <ErectionProjects />
        </section>

        <section
          id="hotline"
          className="scroll-mt-40"
        >
          <HotlineProjects />
        </section>

        <section
          id="stringing"
          className="scroll-mt-40"
        >
          <StringingProjects />
        </section>

        <section
          id="reconductoring"
          className="scroll-mt-40"
        >
          <ReconductoringProjects />
        </section>

        <section
          id="transmission"
          className="scroll-mt-40"
        >
          <TransmissionProjects />
        </section>

        <section
          id="timeline"
          className="scroll-mt-40"
        >
          <ProjectTimeline />
        </section>

        <section
          id="gallery"
          className="scroll-mt-40"
        >
          <ProjectGallery />
        </section>

        <ProjectCTA />

      </div>

    </main>

  );

}