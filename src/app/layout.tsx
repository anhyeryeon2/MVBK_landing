import { pretendard } from "../app/fonts/pretendard";
import InAppRedirect from "./components/InAppRedirect";
import "./globals.css";

export const metadata = {
  title: "무비부키 | 영화관 모임의 시작",
  description: "지금 바로 영화관에서 당신만의 추억을 예약해보세요.",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "무비부키 | 영화관 모임의 시작",
    description: "지금 바로 영화관에서 당신만의 추억을 예약해보세요.",
    url: "https://movie-bookie.shop",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "MovieBookie",
      },
    ],
    type: "website",
  },
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
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </head>
      <body>
        {" "}
        <InAppRedirect />
        {children}
      </body>
    </html>
  );
}
