import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only enable static export in production
  ...(process.env.NODE_ENV === 'production' && { output: "export" }),
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
