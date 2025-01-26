import type { Metadata } from "next";
import { Playfair_Display } from 'next/font/google';
import "./globals.css";

const playfairSans = Playfair_Display({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfairMono = Playfair_Display({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bloomscroll",
  description: "A social media platform for human flourishing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairSans.variable} ${playfairMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
