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
    <div className="relative bg-[var(--bg)] text-[var(--text)]">
      {/* HERO */}
      <ServiceHero />

      {/* STICKY NAV */}
      <ServiceStickyTabs />

      {/* GLOBAL BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-0 top-[20%] h-[600px] w-[600px] bg-cyan-500/10 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] bg-blue-500/10 blur-[160px]" />

      {/* SURVEY */}
      <section id="survey" className="relative z-10 py-24">
        <Survey />
      </section>

      {/* FOUNDATION */}
      <section id="foundation" className="relative z-10 py-24">
        <Foundation />
      </section>

      {/* ERECTION */}
      <section id="erection" className="relative z-10 py-24">
        <Erection />
      </section>

      {/* STRINGING */}
      <section id="stringing" className="relative z-10 py-24">
        <Stringing />
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
