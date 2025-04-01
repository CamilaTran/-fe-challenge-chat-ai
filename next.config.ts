import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  devIndicators: false
};

export default nextConfig;
