'use client';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { type PropsWithChildren } from 'react';
import { env } from '../../env';

export default function CaptchaProvider(props: PropsWithChildren) {
  const recaptchaKey: string | undefined = env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaKey ?? 'NOT DEFINED'}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      {props.children}
    </GoogleReCaptchaProvider>
  );
}
