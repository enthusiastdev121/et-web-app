/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    config.resolve.extensions = ["", ".js", ".jsx"];
    return config;
  },
};

module.exports = nextConfig;
