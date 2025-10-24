/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This ensures assets are properly linked
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio-Website' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio-Website' : '',
}

module.exports = nextConfig
