import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  devIndicators: false,
  images: {
    domains: ["https://cqkmnciyjdgwadhkinvg.supabase.co"],
    remotePatterns: [
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
