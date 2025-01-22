/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node$/,
      loader: "node-loader",
    });

    config.externals = {
      canvas: "commonjs canvas", // Exclude from bundling
    };

    return config;
  },
};

module.exports = nextConfig;