import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cspm.mos.ap-southeast-2.sufybkt.com',
      },
    ],
  },
};

export default nextConfig;
