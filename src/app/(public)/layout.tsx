import localFont from 'next/font/local';

import '../globals.css';
import Header from '../_components/header';

const skodaNext = localFont({
  src: [
    {
      path: '../fonts/SkodaNext-Light.ttf',
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
      <body className={`${skodaNext.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
