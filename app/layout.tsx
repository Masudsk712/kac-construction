import type { Metadata } from "next";
import { Geist, Oswald } from "next/font/google"; // 👈 Oswald added
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geist = Geist({ subsets: ["latin"] });

// 🔥 Oswald (for headings / premium look)
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KAC Construction",
  description: "Transmission Experts",
  icons: {
    icon: "/LOGO 1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 👇 dono fonts apply kiye (Geist + Oswald available) */}
      <body className={`${geist.className} ${oswald.className}`}>

        <Navbar />

        {children}

        <Footer />

        <WhatsAppButton />

      </body>
    </html>
  );
}