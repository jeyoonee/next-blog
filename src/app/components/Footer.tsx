"use client";

import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center text-[14px] py-8">
      <div className="mb-2">
        <FaGithub size={24} color="black" />
      </div>
      <div className="text-[#8a8a8a]">
        <span className="font-bold">© 2025 JEYOON JEONG.</span> ALL RIGHTS
        RESERVED.
      </div>
    </footer>
  );
}
