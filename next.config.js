/* eslint-env node */

// https://github.com/vercel/next.js/blob/master/packages/next/next-server/server/config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (process.env.NEXT_WEBPACK_DISABLE_CACHE === '1') {
      config.cache = false;
    }
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);

    // Next 12 has multiple TS loaders, and we need to update all of them.
    const tsRules = oneOfRule.oneOf.filter(rule => rule.test && rule.test.toString().includes('tsx|ts'));

    tsRules.forEach(rule => {
      // eslint-disable-next-line no-param-reassign
      rule.include = undefined;
    });

    return config;
  },
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },{
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  // Configuración para GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/react-landing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;
