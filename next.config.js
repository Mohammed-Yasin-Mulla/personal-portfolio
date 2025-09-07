/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
