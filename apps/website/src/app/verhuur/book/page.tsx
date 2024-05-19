import { auth } from '../../../auth';
import { use } from 'react';

import { redirect, RedirectType } from 'next/navigation';
import BookingForm from './_components/booking-form';

export default function BookPage() {
  const session = use(auth());
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
