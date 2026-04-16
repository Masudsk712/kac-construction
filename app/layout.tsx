import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageWrapper from "@/components/PageWrapper";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KAC Construction | Transmission Experts",
  description:
    "KAC Construction specializes in tower erection, foundation and stringing work across India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>

        <PageLoader />

        <Navbar />

        <PageWrapper>
          {children}
        </PageWrapper>

        <Footer />

        <WhatsAppButton />

      </body>
    </html>
  );
}