import type { Metadata } from "next";
import { headers } from "next/headers";

import {
  Geist,
  Oswald,
} from "next/font/google";

import "./globals.css";

import { getDomain } from "@/lib/domain-server";
import { getDomainUrl, type DomainKey } from "@/lib/domain";
import { getBrandConfig } from "@/lib/content-server";

import { LoaderProvider } from "@/components/LoaderContext";
import Schema from "@/components/schema";
import LayoutWrapper from "@/components/LayoutWrapper";
import ThemeProvider from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";

/* ============================= */
/* FONT CONFIG */
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
/* DYNAMIC SEO METADATA */
/* ============================= */

export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain();
  const config = await getBrandConfig();

  return {
    metadataBase: new URL(getDomainUrl(domain)),

    title: {
      default: config.seo.title,
      template: `%s | ${config.name}`,
    },

    description: config.seo.description,

    keywords: [...config.seo.keywords] as string[],

    authors: [{ name: config.legalName }],

    creator: config.seo.creator,
    publisher: config.seo.creator,

    category: "construction",
    classification: "Transmission Line & EPC Infrastructure Company",

    openGraph: {
      type: "website",
      locale: "en_IN",
      url: config.url,
      title: config.seo.title,
      description: config.seo.description,
      siteName: config.name,
      images: [
        {
          url: config.seo.ogImage,
          width: 1200,
          height: 630,
          alt: `${config.name} - Transmission Line & EPC Infrastructure Company`,
        },
      ],
      countryName: "India",
      phoneNumbers: [config.contact.phone],
      emails: [config.contact.email],
    },

    twitter: {
      card: "summary_large_image",
      title: config.seo.title,
      description: config.seo.description,
      images: [config.seo.ogImage],
      site: config.seo.twitterHandle,
      creator: config.seo.twitterHandle,
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
      canonical: config.url,
    },

    icons: {
      icon: config.favicon,
      shortcut: config.favicon,
      apple: config.favicon,
    },

    appleWebApp: {
      capable: true,
      title: config.shortName,
      statusBarStyle: "default",
    },

    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },

    verification: {
      google: config.seo.googleVerification,
    },
  };
}

/* ============================= */
/* ROOT LAYOUT (Server Component) */
/* ============================= */

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const domain = await getDomain();
  const config = await getBrandConfig();

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
          {/* TOAST NOTIFICATIONS */}
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
                iconTheme: { primary: "#06b6d4", secondary: "#ffffff" },
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
                iconTheme: { primary: "#f87171", secondary: "#ffffff" },
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

          {/* SEO SCHEMA */}
          <Schema config={config} />

            {/* MAIN WEBSITE */}
            <LayoutWrapper domain={domain}>
              {children}
            </LayoutWrapper>
          </LoaderProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}