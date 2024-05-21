import { redirect, RedirectType } from 'next/navigation';
import BookingForm from './_components/booking-form';
import { auth } from '@clerk/nextjs/server';

export default async function BookPage() {
  const session = auth();
  if (!session) {
    redirect(
      `/login?url=${encodeURIComponent('/verhuur/book')}`,
      RedirectType.replace,
    );
  }

  return (
    <>
      <BookingForm />
    </>
  );
}
