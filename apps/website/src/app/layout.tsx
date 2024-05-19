import '@weyneshof/util/global.css';
import { bodyFont } from '@weyneshof/util/fonts';
import { type Metadata } from 'next';
import SentryAuthProvider from './_telemetry/sentry';
import { SessionProvider } from 'next-auth/react';
import CaptchaProvider from './_telemetry/captcha';
import PosthogProviderWrapper from './_telemetry/posthog-server';

export const metadata: Metadata = {
  title: 'Weyneshof',
  description: 'speelplein Weyneshof',
  icons: [{ rel: 'icon', url: '/favicon.png', type: 'image/png' }],
  openGraph: {
    title: 'Weyneshof',
    description: 'speelplein Weyneshof',
    type: 'website',
    url: 'https://Weyneshof.be',
    siteName: 'Weyneshof',
    emails: ['info@weyneshof.be'],
    phoneNumbers: ['+32410247147'],
    locale: 'nl_BE',
    countryName: 'Belgium',
  },
  twitter: {
    title: 'Weyneshof',
    description: 'speelplein Weyneshof',
    card: 'summary',
    site: '@weyneshof',
    creator: '@weyneshof',
    siteId: '@weyneshof',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bodyFont.className} bg-background text-foreground`}>
        <SessionProvider>
          <SentryAuthProvider>
            <PosthogProviderWrapper>
              <CaptchaProvider>{children}</CaptchaProvider>
            </PosthogProviderWrapper>
          </SentryAuthProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
