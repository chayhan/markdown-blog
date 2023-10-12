/** @type {import('next').NextConfig} */

require("dotenv").config();

const repository = `markdown-blog`;

const nextConfig = {
  output : "export",
  images: { unoptimized: true },
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repository}/` : "",
  distDir:"docs",
}

module.exports = nextConfig
