"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageLoader from "@/components/PageLoader";

import { useLoader } from "@/components/LoaderContext";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {

  const { loading } = useLoader();

  return (
    <>
      {/* ======================================== */}
      {/* WEBSITE */}
      {/* ======================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: loading ? 0 : 1,
        }}

        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}

        style={{
          pointerEvents:
            loading
              ? "none"
              : "auto",
        }}

        className="
          site-shell

          relative

          min-h-screen

          bg-[var(--bg)]
          text-[var(--text)]

          transition-[background-color,color,border-color]
          duration-500
        "
      >

        <a href="#page-content" className="skip-link">
          Skip to content
        </a>

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN */}
        <main
          id="page-content"
          className="
            main-shell

            relative
            z-10

            min-h-screen

            overflow-x-hidden
          "
        >
          {children}
        </main>

        {/* FLOATING BUTTON */}
        <WhatsAppButton />

      </motion.div>

      {/* ======================================== */}
      {/* PAGE LOADER */}
      {/* ======================================== */}

      <PageLoader />

    </>
  );
}
