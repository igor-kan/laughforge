/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/laughforge',
  assetPrefix: '/laughforge',
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
