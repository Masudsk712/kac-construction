import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kacgroups.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/service`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/career`,
      lastModified: new Date(),
      priority: 0.7,
    },

    {
      url: `${baseUrl}/media`,
      lastModified: new Date(),
      priority: 0.6,
    },
  ];
}