import type { Metadata } from "next";
import { Geist, Oswald } from "next/font/google";

import "./globals.css";

import { siteConfig } from "@/lib/seo";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Schema from "@/components/schema";
import { LoaderProvider } from "@/components/LoaderContext";
import LayoutWrapper from "@/components/LayoutWrapper";

/* ============================= */
/* 🔥 FONT CONFIG */
/* ============================= */

const geist = Geist({
  subsets: ["latin"],

  variable: "--font-geist",

  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],

  weight: ["400", "500", "600", "700"],

  variable: "--font-oswald",

  display: "swap",
});

/* ============================= */
/* 🔥 PROFESSIONAL SEO METADATA */
/* ============================= */

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: "%s | Kuddus Ali Construction",
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  authors: [
    {
      name: "Kuddus Ali Construction",
    },
  ],

  creator: siteConfig.creator,

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: siteConfig.url,

    title: siteConfig.title,

    description: siteConfig.description,

    siteName: "Kuddus Ali Construction",

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Kuddus Ali Construction",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteConfig.title,

    description: siteConfig.description,

    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteConfig.url,
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

/* ============================= */
/* 🔥 ROOT LAYOUT */
/* ============================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="
        scroll-smooth
      "
    >
      <body
        className={`
    ${geist.variable}
    ${oswald.variable}
    ${geist.className}
    ${oswald.className}

    bg-[#020617]
    text-white

    overflow-x-hidden

    antialiased

    selection:bg-cyan-400
    selection:text-black
  `}
      >
        <LoaderProvider>
          {/* 🔥 SEO SCHEMA */}
          <Schema />

          {/* 🔥 GLOBAL BACKGROUND */}
          <div
  className="
    fixed inset-0
    z-[-100]

    bg-[#020617]
  "
/>

          {/* 🔥 GLOBAL GLOW EFFECT */}
          <div
  className="
    fixed inset-0
    overflow-hidden
    pointer-events-none
    z-[-90]
  "
>
            <div
              className="
              absolute
              top-[-200px]
              left-[-200px]

              w-[600px]
              h-[600px]

              bg-cyan-500/10
              blur-[160px]
              rounded-full
            "
            />

            <div
              className="
              absolute
              bottom-[-250px]
              right-[-250px]

              w-[700px]
              h-[700px]

              bg-blue-500/10
              blur-[180px]
              rounded-full
            "
            />
          </div>
          <>
            <LayoutWrapper>
              {children}
            </LayoutWrapper>

            <Footer />
          </>

        </LoaderProvider>
      </body>
    </html>
  );
}