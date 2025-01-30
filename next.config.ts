import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // This allows production builds to succeed even if there are type errors.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
