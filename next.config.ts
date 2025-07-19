import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure the path for NextAuth.js
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: 'http://localhost:3000/api/auth/:path*',
      },
    ];
  },
};

export default nextConfig;
