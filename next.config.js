/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: { providerImportSource: "@mdx-js/react" },
});

const nextConfig = {
  reactStrictMode: true,

  ...withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  }),
};

module.exports = nextConfig;
