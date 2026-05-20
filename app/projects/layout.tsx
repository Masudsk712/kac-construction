import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageMetadata.projects.title,
  description: pageMetadata.projects.description,
  alternates: {
    canonical: pageMetadata.projects.path,
  },
  openGraph: {
    title: pageMetadata.projects.title,
    description: pageMetadata.projects.description,
    url: pageMetadata.projects.path,
  },
  twitter: {
    title: pageMetadata.projects.title,
    description: pageMetadata.projects.description,
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}