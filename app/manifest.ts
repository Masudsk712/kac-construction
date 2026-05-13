import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kuddus Ali Construction",

    short_name: "KAC",

    description:
      "Transmission Line & EPC Infrastructure Company",

    start_url: "/",

    display: "standalone",

    background_color: "#020617",

    theme_color: "#020617",

    icons: [
      {
        src: "/icon.png",

        sizes: "192x192",

        type: "image/png",
      },

      {
        src: "/icon.png",

        sizes: "512x512",

        type: "image/png",
      },
    ],
  };
}