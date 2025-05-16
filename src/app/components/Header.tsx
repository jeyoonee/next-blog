"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="text-[#725241] text-[16px] flex justify-between p-5 mb-5">
      <Link href="/" className="font-bold text-[24px]"></Link>
      <nav className="font-semibold">
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
  );
}
