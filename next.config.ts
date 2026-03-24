import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    devtoolSegmentExplorer: false,
  },
  webpack(config, { dev }) {
    // On some OneDrive Windows setups, filesystem cache writes can intermittently fail
    // and corrupt .next manifests during hot reload. Disable only in dev for stability.
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
