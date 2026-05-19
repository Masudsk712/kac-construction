"use client";
import ServiceHero from "./components/ServiceHero";
import ServiceStickyTabs from "./components/ServiceStickyTabs";

import Survey from "./sections/Survey";
import Foundation from "./sections/Foundation";
import Erection from "./sections/Erection";
import Stringing from "./sections/Stringing";
import CTASection from "@/components/CTASection";

export default function ServicesPage() {
  return (
    <main
      className="
      relative
      bg-[var(--bg)]
      text-[var(--text)]
      "
    >

      {/* HERO */}
      <ServiceHero />

      {/* STICKY NAV */}
      <ServiceStickyTabs />

      {/* GLOBAL BACKGROUND GLOW */}
      <div className="absolute top-[20%] left-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[160px] pointer-events-none" />

      {/* SURVEY */}
      <section
        id="survey"
        className="relative z-10"
      >
        <Survey />
      </section>

      {/* FOUNDATION */}
      <section
        id="foundation"
        className="relative z-10"
      >
        <Foundation />
      </section>

      {/* ERECTION */}
      <section
        id="erection"
        className="relative z-10"
      >
        <Erection />
      </section>

      {/* STRINGING */}
      <section
        id="stringing"
        className="relative z-10"
      >
        <Stringing />
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}