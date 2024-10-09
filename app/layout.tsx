import React from "react";
import { Noto_Sans as NotoSans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const notoSans = NotoSans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "GreatFrontEnd - @Davisnz Challenges  👨‍💻",
  description: "GreatFrontEnd @Davisnz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
