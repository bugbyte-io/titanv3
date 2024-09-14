const nextConfig = {
  productionBrowserSourceMaps: true,
  webpack(config, { dev, isServer }) {
    if (dev && !isServer) {
      config.devtool = 'source-map';
    }
    return config;
  },
};

module.exports = nextConfig;