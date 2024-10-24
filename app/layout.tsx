import type { Metadata } from "next";
import { Space_Mono } from 'next/font/google'
import "./globals.css";

const sm = Space_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={sm.className}
      >
        {children}
      </body>
    </html>
  );
}
