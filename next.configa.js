if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {};
}

const withLess = require('@zeit/next-less'),
  nextConfig = {
    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    onDemandEntries: {
      maxInactiveAge: 1000 * 60 * 60,
      pagesBufferLength: 5,
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
    webpack: (config) => config,
  };

module.exports = withLess(nextConfig);
