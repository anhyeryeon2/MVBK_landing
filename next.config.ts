// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config: {
    module: {
      rules: { test: RegExp; issuer: { and: RegExp[] }; use: string[] }[];
    };
  }) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
