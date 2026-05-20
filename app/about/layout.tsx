import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
  alternates: {
    canonical: pageMetadata.about.path,
  },
  openGraph: {
    title: pageMetadata.about.title,
    description: pageMetadata.about.description,
    url: pageMetadata.about.path,
  },
  twitter: {
    title: pageMetadata.about.title,
    description: pageMetadata.about.description,
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}