import type { MetadataRoute } from "next";
import { getDomain } from "@/lib/domain-server";
import { getBrandConfig } from "@/lib/content-server";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const domain = await getDomain();
  const config = await getBrandConfig();

  return {
    name: config.legalName,
    short_name: config.shortName,
    description: config.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#020617",
    icons: [
      {
        src: config.favicon,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: config.favicon,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}