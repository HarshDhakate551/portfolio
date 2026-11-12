import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    cpus: 1,
  },
  output: "export",
  basePath: '/portfolio',
};

export default nextConfig;
