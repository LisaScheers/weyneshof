import 'server-only';
import { env } from './env';

type RecaptchaResponse = {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
};

export async function verifyRecaptcha(
  token: string | undefined | null,
  action: string,
  score = 0.5,
  maxAge = 1000 * 60 * 60 * 24 * 7,
) {
  if (!token) {
    console.error('Recaptcha not loaded');
    throw new Error('Recaptcha not loaded');
  }
  const verification = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      body: `secret=${env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    },
  );

  if (!verification.ok) {
    console.error(
      'Recaptcha failed',
      verification.status,
      verification.statusText,
    );

    throw new Error('Recaptcha failed');
  }

  const verificationData = (await verification.json()) as RecaptchaResponse;
  if (
    !verificationData.success ||
    verificationData.score < score ||
    verificationData.action !== action ||
    Date.now() - Date.parse(verificationData.challenge_ts) > maxAge
  ) {
    console.error('Recaptcha failed');
    throw new Error('Recaptcha failed');
  }
}
