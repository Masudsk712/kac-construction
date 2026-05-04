import Hero from "./components/Hero"
import StickyTabs from "./components/StickyTabs"
import Overview from "./components/Overview"
import Vision from "./components/MissionVision"
import MDMessage from "./components/MDMessage"
import Leadership from "./components/Leadership"
import Awards from "./components/Awards"
import Strengths from "./components/Strengths"
import Timeline from "./components/Timeline"
import MissionVision from "./components/MissionVision"

export default function AboutPage() {
  return (
    <main>

      {/* HERO */}
      <div id="hero">
        <Hero />
      </div>

      {/* STICKY NAV */}
      <StickyTabs />

      {/* SECTIONS */}
      <section id="overview">
        <Overview />
      </section>

      <section id="strengths">
        <Strengths />
      </section>

      <section id="timeline">
        <Timeline />
      </section>

      <section id="vision">
        <MissionVision />
      </section>

      <section id="md">
        <MDMessage />
      </section>

      <section id="leadership">
        <Leadership />
      </section>

      <section id="awards">
        <Awards />
      </section>

    </main>
  )
}