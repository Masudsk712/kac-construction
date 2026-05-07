"use client";

import ProjectsHero from "./components/ProjectsHero";
import ProjectsStickyTabs from "./components/ProjectsStickyTabs";

import ProjectStats from "./components/ProjectStats";
import OngoingProjects from "./components/OngoingProjects";
import CompletedProjects from "./components/CompletedProjects";
import ProjectGallery from "./components/ProjectGallery";
import ProjectCTA from "./components/ProjectCTA";

import TransmissionProjects from "./sections/TransmissionProjects";
import HotlineProjects from "./sections/HotlineProjects";
import FoundationProjects from "./sections/FoundationProjects";
import StringingProjects from "./sections/StringingProjects";
import ReconductoringProjects from "./sections/ReconductoringProjects";

export default function ProjectsPage() {
  return (
    <main
      className="
      relative
      bg-[#020617]
      text-white
      overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px]" />

      {/* HERO */}
      <ProjectsHero />

      {/* STICKY TABS */}
      <ProjectsStickyTabs />

      {/* OVERVIEW */}
      <section id="overview">
        <ProjectStats />
      </section>

      {/* ONGOING */}
      <section id="ongoing">
        <OngoingProjects />
      </section>

      {/* COMPLETED */}
      <section id="completed">
        <CompletedProjects />
      </section>

      {/* TRANSMISSION */}
      <section id="transmission">
        <TransmissionProjects />
      </section>

      {/* HOTLINE */}
      <section id="hotline">
        <HotlineProjects />
      </section>

      {/* FOUNDATION */}
      <section id="foundation">
        <FoundationProjects />
      </section>

      {/* STRINGING */}
      <section id="stringing">
        <StringingProjects />
      </section>

      {/* RECONDUCTORING */}
      <section id="reconductoring">
        <ReconductoringProjects />
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <ProjectGallery />
      </section>

      {/* CTA */}
      <ProjectCTA />

    </main>
  );
}