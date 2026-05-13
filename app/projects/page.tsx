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

      bg-[#020617]

      text-white
    "
    >

      {/* BG */}
      <div
        className="
        fixed inset-0
        -z-50
        bg-[#020617]
      "
      />

      {/* GRID */}
      <div
        className="
        fixed inset-0
        -z-40

        opacity-[0.03]

        [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

        [background-size:60px_60px]
      "
      />

      {/* GLOW */}
      <div
        className="
        fixed
        top-[-200px]
        left-[-120px]

        -z-30

        w-[700px]
        h-[700px]

        rounded-full

        bg-cyan-500/10

        blur-[160px]
      "
      />

      <div
        className="
        fixed
        bottom-[-250px]
        right-[-150px]

        -z-30

        w-[700px]
        h-[700px]

        rounded-full

        bg-blue-500/10

        blur-[170px]
      "
      />

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