import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  devIndicators: false,
  images: {
    domains: [
      "https://cqkmnciyjdgwadhkinvg.storage.supabase.co",
      "https://cqkmnciyjdgwadhkinvg.supabase.co",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cqkmnciyjdgwadhkinvg.storage.supabase.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cqkmnciyjdgwadhkinvg.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
