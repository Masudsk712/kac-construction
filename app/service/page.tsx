"use client";

import Survey from "./sections/Survey";
import Foundation from "./sections/Foundation";
import Erection from "./sections/Erection";
import Stringing from "./sections/Stringing";

export default function ServicesPage() {
  return (
    <main>

      <section id="survey">
        <Survey />
      </section>

      <section id="foundation">
        <Foundation />
      </section>

      <section id="erection">
        <Erection />
      </section>

      <section id="stringing">
        <Stringing />
      </section>

    </main>
  );
}