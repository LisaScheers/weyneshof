'use client';
import { type PropsWithChildren, useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';
import { useSession } from 'next-auth/react';

export default function SentryAuthProvider(props: PropsWithChildren) {
  const session = useSession();

  useEffect(() => {
    if (session?.data?.user?.id)
      Sentry.setUser({ id: session?.data?.user?.id });
    else if (session.status === 'unauthenticated') Sentry.setUser(null);
  }, [session]);

  return <>{props.children}</>;
}
