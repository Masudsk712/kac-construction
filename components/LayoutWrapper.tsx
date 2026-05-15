"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      {/* LOADER */}
      <PageLoader />

      {/* WEBSITE CONTENT */}
      {!loading && (
        <>
          <Navbar />

          <main
            className="
            relative
            z-10
            min-h-screen
          "
          >
            {children}
          </main>

          <Footer />

          <WhatsAppButton />
        </>
      )}
    </>
  );
}