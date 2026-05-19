import type { Metadata } from "next";

import {
  Geist,
  Oswald,
} from "next/font/google";

import "./globals.css";

import { siteConfig } from "@/lib/seo";

import Footer from "@/components/Footer";
import Schema from "@/components/schema";

import {
  LoaderProvider,
} from "@/components/LoaderContext";

import LayoutWrapper from "@/components/LayoutWrapper";
import ThemeProvider from "@/components/ThemeProvider";

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

  weight: [
    "400",
    "500",
    "600",
    "700",
  ],

  variable: "--font-oswald",

  display: "swap",
});

/* ============================= */
/* 🔥 SEO METADATA */
/* ============================= */

export const metadata: Metadata = {

  metadataBase: new URL(
    siteConfig.url
  ),

  title: {
    default: siteConfig.title,

    template:
      "%s | Kuddus Ali Construction",
  },

  description:
    siteConfig.description,

  keywords:
    siteConfig.keywords,

  authors: [
    {
      name:
        "Kuddus Ali Construction",
    },
  ],

  creator:
    siteConfig.creator,

  openGraph: {

    type: "website",

    locale: "en_IN",

    url: siteConfig.url,

    title: siteConfig.title,

    description:
      siteConfig.description,

    siteName:
      "Kuddus Ali Construction",

    images: [
      {
        url: siteConfig.ogImage,

        width: 1200,

        height: 630,

        alt:
          "Kuddus Ali Construction",
      },
    ],
  },

  twitter: {

    card:
      "summary_large_image",

    title: siteConfig.title,

    description:
      siteConfig.description,

    images: [
      siteConfig.ogImage,
    ],
  },

  robots: {

    index: true,

    follow: true,

    googleBot: {

      index: true,

      follow: true,

      "max-video-preview": -1,

      "max-image-preview":
        "large",

      "max-snippet": -1,
    },
  },

  alternates: {
    canonical:
      siteConfig.url,
  },

  icons: {

    icon: "/icon.png",

    shortcut:
      "/icon.png",

    apple:
      "/icon.png",
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

          bg-[var(--bg)]
          text-[var(--text)]

          overflow-x-hidden

          antialiased

          selection:bg-cyan-400
          selection:text-black
        `}
      >

        <ThemeProvider>
          <LoaderProvider>

            {/* 🔥 SEO SCHEMA */}
            <Schema />

            {/* 🔥 MAIN WEBSITE */}
            <LayoutWrapper>
              {children}
            </LayoutWrapper>

            {/* 🔥 FOOTER */}
            <Footer />

          </LoaderProvider>
        </ThemeProvider>

      </body>

    </html>
  );
}