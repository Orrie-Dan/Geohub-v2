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
  // Next only strips assetPrefix from /_next requests, so public/ files and pages requested
  // as /geohub/... would 404 unless the proxy strips the prefix. Serve them either way.
  async rewrites() {
    return assetPrefix
      ? [
          { source: assetPrefix, destination: "/" },
          { source: `${assetPrefix}/:path*`, destination: "/:path*" },
        ]
      : []
  },
}

export default nextConfig
