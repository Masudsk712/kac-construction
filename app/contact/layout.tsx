import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  alternates: {
    canonical: pageMetadata.contact.path,
  },
  openGraph: {
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
    url: pageMetadata.contact.path,
  },
  twitter: {
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}