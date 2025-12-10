/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/geohub",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
