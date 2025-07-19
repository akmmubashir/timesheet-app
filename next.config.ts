import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure API routes
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
    externalResolver: true,
  },
  // Configure NextAuth.js
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: '/api/auth/[...nextauth]',
      },
    ];
  },

};

export default nextConfig;
