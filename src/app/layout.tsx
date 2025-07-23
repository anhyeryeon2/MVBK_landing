import type { Metadata } from "next";
import { pretendard } from "../app/fonts/pretendard";
import "./globals.css";

export const metadata: Metadata = {
  title: "MVBK",
  description: "MOVIEBOOKIE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        {/* <link rel="icon" href="/images/favicon/48x48.png" /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
