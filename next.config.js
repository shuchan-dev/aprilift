/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: { providerImportSource: "@mdx-js/react" },
});

const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAILJS_USER_ID: "VSQ-XK6YAPp672-6P",
    EMAILJS_SERVICE_ID: "service_zwkzyau",
    EMAILJS_TEMPLATE_ID: "template_vkfiv0h",
  },

  ...withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  }),
};

module.exports = nextConfig;
