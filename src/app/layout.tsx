import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeyoon Jeong",
  description: "Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-center px-5 min-h-screen`}
      >
        <header className="text-[#725241] text-[16px] flex justify-between p-5 mb-5">
          <Link href="/" className="font-bold text-[24px]"></Link>
          <nav>
            <Link href="/" className="px-2">
              Home
            </Link>
            <Link href="/about" className="px-2">
              About
            </Link>
            <Link href="/posts" className="px-2">
              Posts
            </Link>
            <Link href="/contact" className="px-2">
              Contact
            </Link>
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
