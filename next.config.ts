import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 🔥 Image Optimization */
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kacgroups.com",
      },
    ],
  },

  /* 🔥 Performance & Security Headers */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  /* 🔥 Compression */
  compress: true,

  /* 🔥 Production Source Maps (disabled for performance) */
  productionBrowserSourceMaps: false,

  /* 🔥 Trailing Slash */
  trailingSlash: false,

  /* 🔥 Strict Mode for development */
  reactStrictMode: true,

  /* 🔥 Bundle & Module Optimization */
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "react-icons",
      "react-hot-toast",
    ],
  },

  /* 🔥 Turbopack specific optimization */
  turbopack: {
    rules: {
      "*.mp4": { loaders: [] },
      "*.webp": { loaders: [] },
    },
  },
};

export default nextConfig;