// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import { env } from './src/env';

Sentry.init({
  dsn: 'https://32c1cb79cd12c032e1b21cb0a0469156@o4507256284971008.ingest.de.sentry.io/4507256286543952',

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: env.NODE_ENV === 'production' ? 0.1 : 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: env.NODE_ENV === 'development',

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  //spotlight: env.NODE_ENV === 'development',
});
