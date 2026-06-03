import type { MetadataRoute } from "next";
import { getDomain } from "@/lib/domain-server";
import { getDomainUrl } from "@/lib/domain";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const domain = await getDomain();
  const url = getDomainUrl(domain);

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/_error"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/*.webp", "/*.jpg", "/*.jpeg", "/*.png", "/*.avif"],
      },
    ],

    sitemap: `${url}/sitemap.xml`,

    host: url,
  };
}