/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    serverActions: true,
    appDir: true,
  },
};

module.exports = nextConfig;
