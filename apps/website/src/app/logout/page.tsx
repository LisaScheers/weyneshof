import { Button } from '@weyneshof/ui/button';
import { redirect, RedirectType } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { SignOutButton } from '@clerk/nextjs';

export default async function logoutPage(props: {}) {
  const session = auth();

  if (!session) {
    redirect('/', RedirectType.replace);
  }

  return (
    <div>
      <h5>Are you sure you want to sign out?</h5>
      <SignOutButton>
        <Button type="submit">Sign out</Button>
      </SignOutButton>
    </div>
  );
}
