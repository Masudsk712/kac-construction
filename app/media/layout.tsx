import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageMetadata.media.title,
  description: pageMetadata.media.description,
  alternates: {
    canonical: pageMetadata.media.path,
  },
  openGraph: {
    title: pageMetadata.media.title,
    description: pageMetadata.media.description,
    url: pageMetadata.media.path,
  },
  twitter: {
    title: pageMetadata.media.title,
    description: pageMetadata.media.description,
  },
};

export default function MediaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}