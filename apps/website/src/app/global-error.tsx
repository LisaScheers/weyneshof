'use client';

import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';
import { Button } from '@weyneshof/ui/button';

export default function GlobalError(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(props.error);
    console.error(props.error);
  }, [props.error]);

  return (
    <html>
      <body
        className={
          'flex h-screen w-screen flex-col items-center justify-center '
        }
      >
        <h1>Something went wrong</h1>
        <Button onClick={props.reset}>Reset</Button>
      </body>
    </html>
  );
}
