/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};
const withImages = require("next-images");

module.exports = withImages();
module.exports = nextConfig;
module.exports = {
  images: {
    domains: ["imgur.com", "localhost:3000", "assets.vercel.com"],
  },
};
