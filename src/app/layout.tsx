import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Geist_Mono } from "next/font/google"; // добавили импорт
import "./globals.css";

// Roboto с поддержкой кириллицы
const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

// Geist_Mono поддерживает только latin
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SwimSchool",
  description: "Created by Eliseeva Irina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
