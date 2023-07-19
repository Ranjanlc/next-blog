/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_USERNAME: 'studylc29',
    MONGO_PW: 'Nextjs2023',
    MONGO_CLUSTER: 'cluster0',
    MONGO_DB: 'my-site',
  },
};

module.exports = nextConfig;
