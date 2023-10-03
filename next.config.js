/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});
const nextConfig = withPWA({
  reactStrictMode: true,
  env: {
    MONGO_USERNAME: process.env.MONGO_USERNAME,
    MONGO_PW: process.env.MONGO_PW,
    MONGO_CLUSTER: process.env.MONGO_CLUSTER,
    MONGO_DB: process.env.MONGO_DB,
  },
});

module.exports = nextConfig;
