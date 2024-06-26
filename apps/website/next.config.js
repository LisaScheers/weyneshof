//@ts-check

const { composePlugins, withNx } = require('@nx/next');
const { withSentryConfig } = require('@sentry/nextjs');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack: (config) => {
    return config;
  },

  skipTrailingSlashRedirect: true,
  rewrites: async () => {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://eu.i.posthog.com/:path*',
      },
    ];
  },
};

/**
 * @type {Partial<import('@sentry/nextjs').SentryWebpackPluginOptions>}
 **/
const userSentryWebpackPluginOptions = {
  // Suppresses source map uploading logs during build
  silent: true,
  org: 'weyneshof-x0',
  project: 'website',
};

const sentryOptions = {
  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Transpiles SDK to be compatible with IE11 (increases bundle size)
  transpileClientSDK: false,

  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: '/monitoring',

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors.
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

const config = composePlugins(...plugins)(nextConfig);

const sentry_disabled = process.env.SENTRY_DISABLED === 'true';

if (sentry_disabled) {
  console.warn('Sentry is disabled, skipping SentryWebpackPlugin');
}

module.exports = sentry_disabled
  ? config
  : withSentryConfig(config, userSentryWebpackPluginOptions, sentryOptions);
