import { PropsWithChildren } from 'react';

export const metadata = {
  title: 'Verhuur',
  description: 'Verhuur van de lokalen van speelplein Weyneshof',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function Layout(props: PropsWithChildren) {
  return <>{props.children}</>;
}
