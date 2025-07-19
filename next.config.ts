import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure the path for NextAuth.js
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: '/api/auth/:path*',
      },
    ];
  },
  // Configure API routes
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

export default nextConfig;
