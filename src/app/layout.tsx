import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";

import "./globals.css";

const BRSonomaRegular = localFont({
  src: "./fonts/br-sonoma/BRSonoma-Regular.woff2",
  variable: "--font-brsonoma-regular",
});

const BRSonomaBold = localFont({
  src: "./fonts/br-sonoma/BRSonoma-Bold.woff2",
  variable: "--font-brsonoma-bold",
});

const BRSonomaMedium = localFont({
  src: "./fonts/br-sonoma/BRSonoma-Medium.woff2",
  variable: "--font-brsonoma-medium",
});

const BRSonomaSemiBold = localFont({
  src: "./fonts/br-sonoma/BRSonoma-SemiBold.woff2",
  variable: "--font-brsonoma-semibold",
});

export const metadata: Metadata = {
  title: "Insurances",
  description: "Insurances",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${BRSonomaRegular.variable} ${BRSonomaBold.variable} ${BRSonomaMedium.variable} ${BRSonomaSemiBold.variable} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <div className="flex-1 text-foreground">{children}</div>
      </body>
    </html>
  );
}
