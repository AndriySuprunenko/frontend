import localFont from "next/font/local";

import Header from "../_components/header";
import BackButton from "./_components/back-button";

import "../globals.css";

const skodaNext = localFont({
  src: [
    {
      path: "../fonts/SKODANext-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SKODANext-Bold.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-skoda-next",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" suppressHydrationWarning className={skodaNext.variable}>
      <body className={`${skodaNext.className} min-h-screen bg-white`}>
        <Header />
        <BackButton />
        <main>{children}</main>
      </body>
    </html>
  );
}
