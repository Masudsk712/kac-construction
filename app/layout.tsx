import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KAC Construction",
  description: "Transmission Experts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>

        <Navbar />

        {children}   {/* 🔥 MAIN PAGE */}

        <Footer />

        <WhatsAppButton />

      </body>
    </html>
  );
}