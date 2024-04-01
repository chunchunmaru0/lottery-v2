/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  webpack: (config, { isServer }) => {
    // Modify the `config` object here...
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
