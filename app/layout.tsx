import type { Metadata } from "next";
import { Geist, Oswald } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
/* 🔥 SEO METADATA */
/* ============================= */

export const metadata: Metadata = {
  title: {
    default: "Kuddus Ali Construction",
    template: "%s | Kuddus Ali Construction",
  },

  description:
    "Kuddus Ali Construction delivers premium EPC infrastructure solutions including transmission line, tower erection, foundation work, hotline stringing, HTLS reconductoring and power grid projects across India.",

  keywords: [
    "Kuddus Ali Construction",
    "Transmission Line",
    "Tower Erection",
    "Power Grid",
    "Foundation Work",
    "Hotline Stringing",
    "HTLS Reconductoring",
    "EPC Infrastructure",
    "Transmission Projects India",
  ],

  authors: [
    {
      name: "Kuddus Ali Construction",
    },
  ],

  creator: "Kuddus Ali Construction",

  metadataBase: new URL("https://kacconstruction.com"),

  openGraph: {
    title: "Kuddus Ali Construction",
    description:
      "Premium EPC infrastructure company delivering transmission, erection, foundation and power grid solutions across India.",

    url: "https://kacconstruction.com",

    siteName: "Kuddus Ali Construction",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/LOGO 1.png",
        width: 1200,
        height: 630,
        alt: "Kuddus Ali Construction",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Kuddus Ali Construction",

    description:
      "Premium EPC infrastructure company delivering transmission and power solutions.",

    images: ["/LOGO 1.png"],
  },

  icons: {
    icon: "/LOGO 1.png",
    shortcut: "/LOGO 1.png",
    apple: "/LOGO 1.png",
  },

  robots: {
    index: true,
    follow: true,
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

        {/* 🔥 GLOBAL BACKGROUND */}
        <div
          className="
          fixed inset-0
          -z-50

          bg-[#020617]
        "
        />

        {/* 🔥 GLOBAL GLOW EFFECT */}
        <div
          className="
          fixed inset-0
          overflow-hidden
          pointer-events-none
          -z-40
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

        {/* 🔥 NAVBAR */}
        <Navbar />

        {/* 🔥 MAIN CONTENT */}
        <main
          className="
          relative
          z-10
          min-h-screen
        "
        >
          {children}
        </main>

        {/* 🔥 FOOTER */}
        <Footer />

        {/* 🔥 FLOATING WHATSAPP */}
        <WhatsAppButton />

      </body>
    </html>
  );
}