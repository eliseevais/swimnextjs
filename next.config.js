/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/swimnextjs",
  assetPrefix: "/swimnextjs",
};

module.exports = nextConfig;
