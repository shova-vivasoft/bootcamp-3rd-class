/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    minimumCacheTTL: 60,
    domains: ['cloudflare-ipfs.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig
