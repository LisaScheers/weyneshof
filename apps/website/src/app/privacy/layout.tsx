import { type PropsWithChildren } from 'react';
import Navigation from '../_components/navigation';

export default async function PrivacyLayout(props: PropsWithChildren) {
  return (
    <>
      <Navigation />

      {props.children}
    </>
  );
}
