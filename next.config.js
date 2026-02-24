'use strict';

const withImages = require('next-images');

module.exports = withImages({
  inlineImageLimit: 8192,
  webpack(config, options) {
    return config;
  },
  env: {
    API_URL: process.env.API_URL,
  },
  // This is the production configuration
  productionBrowserSourceMaps: true,
  compress: true,
  poweredByHeader: false,
});