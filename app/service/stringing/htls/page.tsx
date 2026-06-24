"use client";

import {
  Zap,
  Cable,
  RadioTower,
} from "lucide-react";

import StringingServicePage from "@/components/StringingServicePage";

export default function HTLSPage() {
  return (
    <StringingServicePage
      badge="HTLS Reconductoring"
      title="HTLS"
      highlight="Reconductoring Solutions"
      description="Modern HTLS reconductoring services designed to enhance transmission efficiency, increase power carrying capacity and modernize existing transmission infrastructure."

      heroImage="kacgroups/service/ServiceReconductorSTR.webp"
      overviewImage="kacgroups/service/ServiceReconductorSTR.webp"

      floatingStat="99.9%"
      floatingText="Execution Reliability"

      highlights={[
        "Modern HTLS conductor technology",
        "Increased transmission capacity",
        "Efficient infrastructure upgradation",
        "Minimal shutdown execution strategy",
      ]}

      process={[
        {
          title: "Line Assessment",
          desc:
            "Detailed inspection and engineering evaluation before reconductoring.",
          icon: <RadioTower size={28} />,
        },

        {
          title: "HTLS Installation",
          desc:
            "Advanced HTLS conductor replacement using modern equipment.",
          icon: <Cable size={28} />,
        },

        {
          title: "Performance Optimization",
          desc:
            "Final optimization ensuring enhanced transmission efficiency.",
          icon: <Zap size={28} />,
        },
      ]}

      gallery={[
        "kacgroups/service/ServiceReconductorSTR.webp",
        "kacgroups/service/ServiceSTR1.webp",
        "kacgroups/service/ServiceReconductorSTR.webp",
      ]}
    />
  );
}