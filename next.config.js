/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  // Only use basePath in production (GitHub Pages)
  basePath: isProd ? '/Portfolio-Website' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
