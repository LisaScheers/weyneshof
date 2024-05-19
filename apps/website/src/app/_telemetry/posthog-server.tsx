import { type PropsWithChildren } from 'react';
import { CSPostHogProvider } from './posthog';
import { env } from '../../env';

export default function PosthogProviderWrapper(props: PropsWithChildren) {
  const posthogEnabled = !env.DISABLE_POSTHOG;

  if (posthogEnabled) {
    return <CSPostHogProvider>{props.children}</CSPostHogProvider>;
  } else {
    return props.children;
  }
}
