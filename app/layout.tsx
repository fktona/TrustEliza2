import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const digital = localFont({
  src: "./digital.ttf",
  variable: "--font-digital",
});

export const ppInter = Inter({
  weight: ["400", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrustEliza",
  description: "Truth AI Agent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${digital.variable} ${ppInter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
