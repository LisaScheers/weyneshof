import '@weyneshof/util/global.css';
import { bodyFont } from '@weyneshof/util/fonts';


export const metadata = {
  title: 'Weyneshof',
  description: 'speelplein Weyneshof',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body
        className={`${bodyFont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
