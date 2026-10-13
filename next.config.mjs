/** @type {import('next').NextConfig} */

// Production is served behind a proxy under /geohub; local dev is served at the root.
const assetPrefix = process.env.NODE_ENV === "production" ? "/geohub" : ""

const nextConfig = {
  assetPrefix,
  env: {
    NEXT_PUBLIC_ASSET_PREFIX: assetPrefix,
  },
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
