import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageMetadata.career.title,
  description: pageMetadata.career.description,
  alternates: {
    canonical: pageMetadata.career.path,
  },
  openGraph: {
    title: pageMetadata.career.title,
    description: pageMetadata.career.description,
    url: pageMetadata.career.path,
  },
  twitter: {
    title: pageMetadata.career.title,
    description: pageMetadata.career.description,
  },
};

export default function CareerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}