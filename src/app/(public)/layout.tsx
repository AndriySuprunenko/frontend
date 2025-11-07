import localFont from 'next/font/local';

import Header from '../_components/header';
import '../globals.css';

const skodaNext = localFont({
  src: [
    {
      path: '../fonts/SkodaNext-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/SkodaNext-Bold.ttf',
      weight: '600',
      style: 'bold',
    },
  ],
  variable: '--font-skoda-next',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={skodaNext.variable}>
      <body className={`${skodaNext.className} min-h-screen bg-white`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
