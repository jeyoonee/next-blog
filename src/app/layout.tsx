import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const sans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jeyoon Jeong",
    template: "Jeyoon Jeong | %s",
  },
  description: "Frontend Engineer Jeyoon",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col px-5 max-w-screen-2xl w-full mx-auto min-h-screen ">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
