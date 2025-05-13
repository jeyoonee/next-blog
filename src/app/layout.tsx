import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="text-[#856767] text-[16px] flex justify-between">
          <Link href="/">Jay's Blog</Link>
          <nav>
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
        {children}
        <footer className="flex flex-col">
          <div className="flex">
            <Link href="https://github.com/jeyoonee">Github</Link>
            <Link href="https://github.com/jeyoonee">LinkedIn</Link>
            <Link href="https://github.com/jeyoonee">Instagram</Link>
          </div>
          <span>© 2025 JEYOON. ALL RIGHTS RESERVED.</span>
        </footer>
      </body>
    </html>
  );
}
