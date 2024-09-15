import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import {TopNav} from "@/components/top-nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cohezion.ai | EZ",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopNav />
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
        </div>
      </body>
    </html>
  );
}
