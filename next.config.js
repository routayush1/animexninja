const withPWA=require('next-pwa')
module.exports = withPWA({
  pwa:{dest:'public'},
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    if (!isServer) {
      config.node = { fs: "empty", module: "empty" };
    }

    return config;
  },
  images: {
    domains: ["gogocdn.net"],
  },
  env: {
    key: process.env.COUNT_API_KEY,
    URL: process.env.BASE_URL,
  },
});