import { type PropsWithChildren, use } from 'react';
import Navigation from '../_components/navigation';
import { auth } from '../../auth';

export default function PrivacyLayout(props: PropsWithChildren) {
  const session = use(auth());

  return (
    <>
      <Navigation user={session?.user} />

      {props.children}
    </>
  );
}
