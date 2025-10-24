"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-violet-600 text-white px-6 py-3 flex justify-between items-center sticky top-0 z-50">

      <Link href="/" className="text-2xl font-bold">
        DevNotes
      </Link>

      <button
        className="text-2xl md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div
        className={`absolute md:static top-14 left-0 w-full md:w-auto bg-violet-600 md:flex md:space-x-6 flex-col md:flex-row items-center transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <Link href="/notes" className="py-2 px-4 block hover:underline">
          My Notes
        </Link>
        <Link href="/about" className="py-2 px-4 block hover:underline">
          About
        </Link>
        <Link href="/contact" className="py-2 px-4 block hover:underline">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
