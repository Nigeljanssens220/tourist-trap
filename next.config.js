/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["tuk-cdn.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
