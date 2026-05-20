"use client";

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import { useLoader } from "./LoaderContext";
import { ease } from "@/lib/animations";

export default function PageLoader() {
  const { loading, setLoading } = useLoader();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
          }}
          exit={{
            opacity: 0,
            clipPath: "inset(0% 0% 100% 0%)",
          }}
          transition={{
            duration: 0.85,
            ease: ease.premiumInOut,
          }}
          className="
            fixed inset-0
            w-screen h-screen
            overflow-hidden
            z-[999999]
            page-loader-bg
            bg-[var(--bg)]
          "
        >
          {/* ===================================== */}
          {/* VIDEO */}
          {/* ===================================== */}
          <video
            autoPlay
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/Hero.mp4" type="video/mp4" />
          </video>

          {/* ===================================== */}
          {/* DARK OVERLAY */}
          {/* ===================================== */}
          <div className="absolute inset-0 bg-black/70" />

          {/* ===================================== */}
          {/* TOP GRADIENT */}
          {/* ===================================== */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-black/20 to-[#020617]" />

          {/* ===================================== */}
          {/* GLOW */}
          {/* ===================================== */}
          <div className="absolute top-[-100px] left-[-100px] w-[320px] h-[320px] rounded-full bg-cyan-400/20 blur-[120px]" />
          <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-blue-500/20 blur-[120px]" />

          {/* ===================================== */}
          {/* CONTENT */}
          {/* ===================================== */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
            {/* LOGO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, ease: ease.premiumOut }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-[10px] text-white">
                <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.45)]">
                  KAC
                </span>
              </h1>
            </motion.div>

            {/* LINE - spring animation */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                delay: 0.35,
                duration: 0.8,
                ease: ease.premiumOut,
              }}
              style={{ originX: 0.5 }}
              className="h-[2px] w-[180px] mt-6 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"
            />

            {/* TAGLINE */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7, ease: ease.premiumOut }}
              className="mt-6 text-sm md:text-base tracking-[4px] uppercase text-white/70"
            >
              Powering India's Infrastructure
            </motion.p>

            {/* DOTS - smoother pulse */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.4 }}
              className="flex items-center gap-2 mt-7"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2.5 h-2.5 rounded-full bg-cyan-400"
              />
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.15,
                }}
                className="w-2.5 h-2.5 rounded-full bg-cyan-400"
              />
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="w-2.5 h-2.5 rounded-full bg-cyan-400"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
