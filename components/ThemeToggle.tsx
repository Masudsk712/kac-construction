"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setMounted(true);
    });
  }, []);

  if (!mounted) {
    return (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 dark:bg-white/10 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle Theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative
        w-11 h-11
        sm:w-12 sm:h-12
        rounded-full
        border
        border-black/10
        dark:border-white/10
        bg-white/80
        dark:bg-white/10
        backdrop-blur-xl
        flex
        items-center
        justify-center
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        transition-all duration-300
        hover:scale-105
        hover:border-cyan-400/40
        hover:shadow-[0_12px_40px_rgba(34,211,238,0.2)]
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute inset-0
          rounded-full
          bg-gradient-to-r
          from-cyan-400/10
          to-blue-500/10
          opacity-0
          hover:opacity-100
          transition duration-300
        "
      />

      {/* ICON */}
      <div className="relative z-10 flex items-center justify-center">
        {isDark ? (
          <Sun
            size={19}
            className="
              text-yellow-300
              transition-all duration-300
              animate-spin-slow
            "
          />
        ) : (
          <Moon
            size={19}
            className="
              text-slate-700
              transition-all duration-300
              animate-spin-slow
            "
          />
        )}
      </div>
    </button>
  );
}