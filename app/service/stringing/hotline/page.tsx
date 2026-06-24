"use client";

import {
  Flame,
  Zap,
  ShieldCheck,
} from "lucide-react";

import StringingServicePage from "@/components/StringingServicePage";

export default function HotlinePage() {
  return (
    <StringingServicePage
      badge="Hot Line Stringing"
      title="Hot Line"
      highlight="Stringing Solutions"
      description="Advanced hot line stringing services enabling live transmission line execution without interrupting power supply, ensuring maximum operational continuity and safety."

      heroImage="kacgroups/service/ServiceHotlineSTR.webp"
      overviewImage="kacgroups/service/ServiceHotlineSTR.webp"

      floatingStat="LIVE"
      floatingText="Power Line Execution"

      highlights={[
        "Live transmission execution capability",
        "Zero interruption stringing process",
        "Advanced electrical safety systems",
        "Highly trained hotline execution teams",
      ]}

      process={[
        {
          title: "Safety Preparation",
          desc:
            "Strict safety planning and live line risk assessment before execution.",
          icon: <ShieldCheck size={28} />,
        },

        {
          title: "Live Stringing",
          desc:
            "Advanced conductor installation while maintaining live transmission.",
          icon: <Flame size={28} />,
        },

        {
          title: "System Verification",
          desc:
            "Final inspection ensuring stable and uninterrupted power flow.",
          icon: <Zap size={28} />,
        },
      ]}

      gallery={[
        "kacgroups/service/ServiceHotlineSTR.webp",
        "kacgroups/service/ServiceSTR1.webp",
        "kacgroups/service/ServiceHotlineSTR.webp",
      ]}
    />
  );
}