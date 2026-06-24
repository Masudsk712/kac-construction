"use client";

import {
  RadioTower,
  Route,
  Ruler,
} from "lucide-react";

import StringingServicePage from "@/components/StringingServicePage";

export default function AlignmentPage() {
  return (
    <StringingServicePage
      badge="Transmission Alignment"
      title="Transmission"
      highlight="Alignment Solutions"
      description="Advanced transmission alignment services ensuring precise route balancing, conductor positioning and optimized power corridor execution for ultra high voltage infrastructure projects."

      heroImage="kacgroups/services/ServiceAlignmentSTR.webp"
      overviewImage="kacgroups/services/ServiceAlignmentSTR.webp"

      floatingStat="765kV"
      floatingText="Alignment Capability"

      highlights={[
        "Accurate transmission corridor alignment",
        "Advanced sag & tension balancing",
        "Ultra high voltage route precision",
        "Reliable power infrastructure execution",
      ]}

      process={[
        {
          title: "Route Positioning",
          desc:
            "Precise transmission line route positioning for optimized execution.",
          icon: <Route size={28} />,
        },

        {
          title: "Alignment Balancing",
          desc:
            "Advanced balancing techniques ensuring stable conductor alignment.",
          icon: <Ruler size={28} />,
        },

        {
          title: "Final Verification",
          desc:
            "Engineering verification ensuring safe and accurate installation.",
          icon: <RadioTower size={28} />,
        },
      ]}

      gallery={[
        "kacgroups/services/ServiceAlignmentSTR.webp",
        "kacgroups/services/ServiceSTR1.webp",
        "kacgroups/services/ServiceAlignmentSTR.webp",
      ]}
    />
  );
}