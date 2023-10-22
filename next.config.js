/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      { hostname: 'media.giphy.com' }
    ]
  }
}

module.exports = nextConfig
