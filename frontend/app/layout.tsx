import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KAC Construction | 765kV Transmission Experts",
  description: "High voltage transmission line specialists",
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
        {children}
      </body>
    </html>
  );
}
