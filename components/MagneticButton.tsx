"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

import { spring as sp } from "@/lib/animations";

export default function MagneticButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.28, y: y * 0.28 });
  };

  const handleLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 16, mass: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="
        relative overflow-hidden
        px-7 py-4
        rounded-full
        bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500
        text-black font-bold
        cursor-pointer inline-block
        shadow-[0_8px_30px_rgba(34,211,238,0.3)]
        transition-shadow duration-300
        hover:shadow-[0_12px_40px_rgba(34,211,238,0.45)]
      "
    >
      {/* Shimmer overlay on hover */}
      <motion.div
        animate={
          isHovered
            ? { x: ["-120%", "120%"], opacity: [1, 1] }
            : { x: "-120%", opacity: [0, 0] }
        }
        transition={
          isHovered
            ? {
                x: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.3 },
              }
            : { duration: 0.3 }
        }
        className="
          absolute inset-0
          bg-gradient-to-r from-transparent via-white/25 to-transparent
          pointer-events-none
        "
      />
      <span className="relative z-10">{children}</span>
    </motion.div>
  );
}
