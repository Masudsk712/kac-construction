"use client";

import { useRef } from "react";
import gsap from "gsap";

export default function MagneticButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const btnRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="px-6 py-3 bg-cyan-500 rounded-lg cursor-pointer inline-block text-white font-semibold hover:bg-cyan-600 transition"
    >
      {children}
    </div>
  );
}