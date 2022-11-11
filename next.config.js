/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.notion.so',
      'www.notion.so/image',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com',
      's3.us-west-2.amazonaws.com/secure.notion-static.com',
    ],
    format: ['image/png', 'image/webp', 'image/jpeg']
  }
}

module.exports = nextConfig
