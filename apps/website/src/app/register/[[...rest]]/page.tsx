import { redirect, RedirectType } from 'next/navigation';
import Link from 'next/link';
import Logo from '../../_components/logo';
import { titleFont } from '@weyneshof/util/fonts';
import { SignIn, SignUp } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

export default function loginPage(props: { searchParams?: { url?: string } }) {
  const session = auth();

  if (!session.userId) {
    //redirect('/', RedirectType.replace);
  }
  return (
    <>
      <div className="relative h-screen flex-col items-center justify-center lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="bg-muted relative hidden h-full flex-col text-white lg:flex dark:border-r">
          <div className="bg-primary absolute inset-0" />
          <div className="relative z-20 flex items-start justify-center">
            <Logo></Logo>
          </div>
        </div>
        <div className="px-1">
          <div
            className={
              'relative z-20 flex items-start justify-center lg:hidden '
            }
          >
            <Logo></Logo>
          </div>

          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1
                className={
                  titleFont.className +
                  ' text-secondary text-2xl font-semibold tracking-tight'
                }
              >
                Het plezier begint hier
              </h1>
            </div>
            <SignUp path="/register" />
            <p className="text-muted-foreground px-8 text-center text-sm">
              door te clicken op inloggen ga je accoord met onze{' '}
              <Link
                href="/privacy"
                className="hover:text-primary underline underline-offset-4"
              >
                Voorwaarden en Privacybeleid
              </Link>
              .
            </p>
            <p className="text-muted-foreground px-8 text-center text-sm">
              <Link
                href="/administratie/login"
                className="hover:text-primary underline underline-offset-4"
              >
                Ben je een medewerker? Klik hier om in te loggen
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
