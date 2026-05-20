import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
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

    sitemap: `${siteConfig.url}/sitemap.xml`,

    host: siteConfig.url,
  };
}