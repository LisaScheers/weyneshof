'use client';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { env } from '../../env';
import { type PropsWithChildren, useEffect } from 'react';
import { useSession, useAuth } from '@clerk/nextjs';

if (typeof window !== 'undefined') {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: '/ingest',
    ui_host: 'https://eu.posthog.com',
  });
}

export function CSPostHogProvider(props: PropsWithChildren) {
  return (
    <PostHogProvider client={posthog}>
      <AuthWrapper>{props.children}</AuthWrapper>
    </PostHogProvider>
  );
}

function AuthWrapper(props: PropsWithChildren) {
  const auth = useAuth();
  const { session } = useSession();

  useEffect(() => {
    if (auth.isSignedIn)
      posthog.identify(auth.userId, {
        email: session?.user.emailAddresses[0]?.emailAddress,
        name: session?.user.fullName,
      });
    else posthog.reset();
  }, [auth, session]);

  return <>{props.children}</>;
}
