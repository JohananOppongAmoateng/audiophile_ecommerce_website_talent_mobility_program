import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // if you also want to skip ESLint errors during `next build`
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
