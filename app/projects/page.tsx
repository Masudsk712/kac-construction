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
      bg-transparent
      text-white
      overflow-x-hidden
      relative
      "
    >

      {/* 🔥 GLOBAL BACKGROUND */}
      <div
        className="
        fixed inset-0
        -z-10

        bg-gradient-to-b
        from-[#020617]
        via-[#020617]
        to-[#020617]
        "
      />

      {/* 🔥 HERO */}
      <Hero />

      {/* 🔥 STICKY TABS */}
      <StickyTabs />

      {/* 🔥 PROJECT STATS */}
      <section id="stats">
        <ProjectStats />
      </section>

      {/* 🔥 ONGOING PROJECTS */}
      <section id="ongoing">
        <OngoingProjects />
      </section>

      {/* 🔥 COMPLETED PROJECTS */}
      <section id="completed">
        <CompletedProjects />
      </section>

      {/* 🔥 FOUNDATION */}
      <section id="foundation">
        <FoundationProjects />
      </section>

      {/* 🔥 ERECTION */}
      <section id="erection">
        <ErectionProjects />
      </section>

      {/* 🔥 HOTLINE */}
      <section id="hotline">
        <HotlineProjects />
      </section>

      {/* 🔥 STRINGING */}
      <section id="stringing">
        <StringingProjects />
      </section>

      {/* 🔥 RECONDUCTORING */}
      <section id="reconductoring">
        <ReconductoringProjects />
      </section>

      {/* 🔥 TRANSMISSION */}
      <section id="transmission">
        <TransmissionProjects />
      </section>

      {/* 🔥 TIMELINE */}
      <section id="timeline">
        <ProjectTimeline />
      </section>

      {/* 🔥 PROJECT GALLERY */}
      <section id="gallery">
        <ProjectGallery />
      </section>

      {/* 🔥 CTA */}
      <ProjectCTA />

    </main>
  );
}