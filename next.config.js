/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const nextConfig = {
  reactStrictMode: true,

  ...withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  }),
};

module.exports = nextConfig;
