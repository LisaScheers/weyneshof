"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError(props: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(props.error);
  }, [props.error]);

  return (
    <html>
      <body>
        <Error statusCode={props.error.props.statusCode} />
        <button onClick={props.reset}>Reset</button>
      </body>
    </html>
  );
}
