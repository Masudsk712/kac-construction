"use client";

import {
  Cable,
  Zap,
  RadioTower,
} from "lucide-react";

import StringingServicePage from "@/components/StringingServicePage";

export default function ConductorPage() {
  return (
    <StringingServicePage
      badge="Conductor Stringing"
      title="Conductor"
      highlight="Stringing Solutions"
      description="High-performance conductor installation solutions for modern transmission infrastructure."

      heroImage="kacgroups/service/ServiceSTR1.webp"
      overviewImage="kacgroups/service/ServiceConductorSTR.webp"

      floatingStat="5000+ KM"
      floatingText="Transmission Stringing"

      highlights={[
        "Advanced conductor pulling systems",
        "High tension balancing precision",
        "Ultra high voltage execution",
        "Reliable power corridor installation",
      ]}

      process={[
        {
          title: "Conductor Pulling",
          desc: "Advanced conductor pulling execution.",
          icon: <Cable size={28} />,
        },
        {
          title: "Tension Balancing",
          desc: "Accurate sag and tension control.",
          icon: <Zap size={28} />,
        },
        {
          title: "Final Installation",
          desc: "Secure transmission installation process.",
          icon: <RadioTower size={28} />,
        },
      ]}

      gallery={[
        "kacgroups/service/ServiceSTR1.webp",
        "kacgroups/service/ServiceSTR1.webp",
        "kacgroups/service/ServiceSTR1.webp",
      ]}
    />
  );
}