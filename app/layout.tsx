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
import { Toaster } from "react-hot-toast";

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
    [...siteConfig.keywords] as string[],

  authors: [
    {
      name:
        "Kuddus Ali Construction",
    },
  ],

  creator:
    siteConfig.creator,

  publisher:
    siteConfig.creator,

  category:
    "construction",

  classification:
    "Transmission Line & EPC Infrastructure Company",

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
          "Kuddus Ali Construction - Transmission Line & EPC Infrastructure Company",
      },
    ],

    countryName: "India",

    phoneNumbers: [
      siteConfig.phone,
    ],

    emails: [
      siteConfig.email,
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

    site: siteConfig.twitterHandle,

    creator: siteConfig.twitterHandle,
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

  appleWebApp: {
    capable: true,
    title: "KAC",
    statusBarStyle: "default",
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
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
      className="scroll-smooth"
    >

      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var t = localStorage.getItem('kac-theme');
    var d = t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (d) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch (e) {}
})();
            `.trim(),
          }}
        />
      </head>

      <body
        className={`
          ${geist.variable}
          ${oswald.variable}
          ${geist.className}

          bg-[var(--bg)]
          text-[var(--text)]
          antialiased

          overflow-x-hidden

          antialiased

          selection:bg-cyan-400
          selection:text-black
        `}
      >

        <ThemeProvider>
          <LoaderProvider>

            {/* 🔥 TOAST NOTIFICATIONS */}
            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{
                zIndex: 999999,
                top: 20,
              }}
              toastOptions={{
                duration: 4000,
                style: {
                  background: "rgba(255, 255, 255, 0.95)",
                  color: "#0f172a",
                  border: "1px solid rgba(15, 23, 42, 0.1)",
                  borderRadius: "16px",
                  fontSize: "14px",
                  padding: "14px 18px",
                  boxShadow:
                    "0 20px 60px rgba(15, 23, 42, 0.18), 0 0 0 1px rgba(15, 23, 42, 0.04)",
                  backdropFilter: "blur(20px) saturate(180%)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%)",
                },
                success: {
                  iconTheme: {
                    primary: "#06b6d4",
                    secondary: "#ffffff",
                  },
                  style: {
                    background: "rgba(255, 255, 255, 0.95)",
                    color: "#0f172a",
                    border: "1px solid rgba(6, 182, 212, 0.2)",
                    borderRadius: "16px",
                    fontSize: "14px",
                    padding: "14px 18px",
                    boxShadow:
                      "0 20px 60px rgba(15, 23, 42, 0.18), 0 0 0 1px rgba(15, 23, 42, 0.04)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  },
                },
                error: {
                  iconTheme: {
                    primary: "#f87171",
                    secondary: "#ffffff",
                  },
                  style: {
                    background: "rgba(255, 255, 255, 0.95)",
                    color: "#0f172a",
                    border: "1px solid rgba(248, 113, 113, 0.2)",
                    borderRadius: "16px",
                    fontSize: "14px",
                    padding: "14px 18px",
                    boxShadow:
                      "0 20px 60px rgba(15, 23, 42, 0.18), 0 0 0 1px rgba(248, 113, 113, 0.06)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  },
                },
              }}
            />

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