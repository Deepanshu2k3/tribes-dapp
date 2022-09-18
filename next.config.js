// /** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  trailingSlash: true,
}
