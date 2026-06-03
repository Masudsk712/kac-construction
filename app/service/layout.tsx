import type { Metadata } from "next";
import { getBrandConfig } from "@/lib/content-server";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getBrandConfig();
  const meta = config.pageMetadata.service;

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.path },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.path,
    },
    twitter: {
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function ServiceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}