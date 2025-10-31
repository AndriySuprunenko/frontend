import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5048',
        pathname: '/uploads/**',
        search: '',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
