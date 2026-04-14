import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: '/resume',
        destination: '/Resume.pdf',
      },
    ];
  },
};

export default nextConfig;
