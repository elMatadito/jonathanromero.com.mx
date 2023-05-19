/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: 'media.giphy.com' }
    ]
  }
}

module.exports = nextConfig
