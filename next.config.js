/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  // experimental: {
  //   appDir: true,
  //   serverComponentsExternalPackages: ["mongoose"],
  // },
  // webpack(config) {
  //   config.experiments = { ...config.experiments, topLevelAwait: true };
  //   return config;
  // }
};

module.exports = nextConfig;
