'use client';
import { type PropsWithChildren, useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';
import { useAuth, useSession } from '@clerk/nextjs';

export default function SentryAuthProvider(props: PropsWithChildren) {
  const { session } = useSession();
  const auth = useAuth();

  useEffect(() => {
    if (auth.isSignedIn)
      Sentry.setUser({
        id: auth.userId,
        email: session?.user.emailAddresses[0]?.emailAddress,
        name: session?.user.fullName,
        username: session?.user.username ?? undefined,
      });
    else Sentry.setUser(null);
  }, [session, auth]);

  return <>{props.children}</>;
}
