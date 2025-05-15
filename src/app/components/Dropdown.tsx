"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

const options = ["all", "my story", "frontend", "backend", "javascript"];

export default function DropdownSelect({
  selected,
  onChange,
}: {
  selected: string;
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-60 text-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border border-[#797979] rounded-xl px-4 py-2 text-left flex justify-between items-center shadow-sm cursor-pointer"
      >
        {selected}
        <FaChevronDown className="ml-2 text-gray-500" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute z-10 w-full mt-2 bg-white border border-[#797979] rounded-xl shadow-md max-h-60 overflow-auto"
          >
            {options.map((option) => (
              <li
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  selected === option
                    ? "font-semibold text-black"
                    : "text-gray-700"
                }`}
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
