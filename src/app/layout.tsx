import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "SwimSchool — Школа плавания",
  description:
    "Обучение плаванию детей и взрослых. Индивидуальный и профессиональный подход.",
  keywords: [
    "школа плавания",
    "плавание",
    "обучение плаванию",
    "дети",
    "взрослые",
    "SwimSchool",
  ],
  openGraph: {
    title: "SwimSchool — Школа плавания",
    description:
      "Погрузиcь в уверенность с нами! Обучение плаванию детей и взрослых.",
    url: "https://школа-плавания.online",
    siteName: "SwimSchool",
    images: [
      {
        url: "https://школа-плавания.online/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SwimSchool",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwimSchool — Школа плавания",
    description: "Плавание для всех возрастов с профессионалами.",
    images: ["https://школа-плавания.online/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <title>SwimSchool — Школа плавания</title>
        <meta
          name="description"
          content="Обучение плаванию детей и взрослых в Москве."
        />
        <meta
          property="og:image"
          content="https://школа-плавания.online/og-image.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (location.hostname.startsWith('www.')) {
                location.href = location.href.replace('www.', '');
              }
            `,
          }}
        />
      </head>
      <body className={roboto.variable}>{children}</body>
    </html>
  );
}
