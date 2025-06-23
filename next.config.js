/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/swimnextjs",
  assetPrefix: "/swimnextjs/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
