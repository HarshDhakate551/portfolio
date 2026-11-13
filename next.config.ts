import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    cpus: 1,
  },
  output: "export",
  basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
