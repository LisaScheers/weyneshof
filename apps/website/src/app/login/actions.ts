'use server';
import { signIn } from '../../auth';
import { signInWithEmailFormSchema } from './formSchemas';
import { verifyRecaptcha } from '../../recaptcha';
import { type z } from 'zod';

export async function login(
  formData: z.infer<typeof signInWithEmailFormSchema>,
) {
  const validation = signInWithEmailFormSchema.safeParse(formData);
  if (!validation.success) {
    return;
  }

  const { email, url, recaptcha } = validation.data;

  await verifyRecaptcha(recaptcha, 'login');

  await signIn('sendgrid', { email, redirectTo: url, redirect: true }, {});
}
