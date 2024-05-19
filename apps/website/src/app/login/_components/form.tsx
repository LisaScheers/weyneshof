'use client';

import { Input } from '@weyneshof/ui/input';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { signInWithEmailFormSchema } from '../formSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@weyneshof/ui/form';
import { Button } from '@weyneshof/ui/button';
import { login } from '../actions';

export default function LoginForm(props: { url?: string }) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm<z.infer<typeof signInWithEmailFormSchema>>({
    resolver: zodResolver(signInWithEmailFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const action: () => void = form.handleSubmit(async (data) => {
    if (!executeRecaptcha) {
      console.error('Recaptcha not loaded');
      return;
    }
    const recaptcha = await executeRecaptcha('login');
    if (!recaptcha) {
      console.error('Recaptcha failed');
      return;
    }
    data.recaptcha = recaptcha;
    data.url = props.url;
    await login(data);
  });

  return (
    <Form {...form}>
      <form action={action}>
        <FormField
          name={'email'}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="john.doe@gmail.com" />
              </FormControl>
              <FormMessage />

              <FormDescription>
                we sturen je een e-mail om in te loggen.
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit" className={'w-full'} variant={'secondary'}>
          Login
        </Button>
      </form>
    </Form>
  );
}
