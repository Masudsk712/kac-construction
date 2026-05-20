import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageMetadata.service.title,
  description: pageMetadata.service.description,
  alternates: {
    canonical: pageMetadata.service.path,
  },
  openGraph: {
    title: pageMetadata.service.title,
    description: pageMetadata.service.description,
    url: pageMetadata.service.path,
  },
  twitter: {
    title: pageMetadata.service.title,
    description: pageMetadata.service.description,
  },
};

export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}