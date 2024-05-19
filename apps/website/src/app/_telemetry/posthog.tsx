'use client';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { env } from '../../env';
import { type PropsWithChildren, useEffect } from 'react';
import { useSession } from 'next-auth/react';

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
  const session = useSession();

  useEffect(() => {
    if (session?.data?.user?.id)
      posthog.identify(session?.data?.user?.id, {
        email: session?.data?.user?.email,
        name: session?.data?.user?.name,
      });
    else if (session.status === 'unauthenticated') posthog.reset();
  }, [session]);

  return <>{props.children}</>;
}
