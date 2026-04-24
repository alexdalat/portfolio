import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: '/resume',
        destination: '/Resume/Resume.pdf',
      },
    ];
  },
};

export default nextConfig;
