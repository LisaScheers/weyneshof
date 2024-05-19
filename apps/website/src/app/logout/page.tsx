import { use } from 'react';
import { auth, signOut } from '../../auth';
import { Button } from '@weyneshof/ui/button';
import { redirect, RedirectType } from 'next/navigation';

export default function logoutPage(props: {}) {
  const session = use(auth());

  if (!session) {
    redirect('/', RedirectType.replace);
  }

  return (
    <div>
      <h5>Are you sure you want to sign out?</h5>
      <form
        action={async (formData) => {
          'use server';
          await signOut({ redirectTo: '/' });
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
}
