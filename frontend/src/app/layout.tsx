import "./globals.css";

import type { Metadata } from "next";

import localFont from "next/font/local";

import Header from "@/src/compnents/header/Header";
import Footer from "@/src/compnents/footer/Footer";

const josefin = localFont({
  src: [
    {
      path: "../../public/fonts/Josefin.ttf",
      weight: "100",
      style: 'normal'
    }
  ]
})

export const metadata: Metadata = {
  title: "ElfDecorative",
  description: "Enter the world of decorative plaster and place your order now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}