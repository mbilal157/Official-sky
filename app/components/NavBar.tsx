"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 px-6 md:px-12 flex items-center bg-white shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/images/logo.png"
          alt="SLP Logo"
          width={56} // ~14 * 4 (Tailwind's w-14 = 3.5rem = 56px)
          height={48} // ~12 * 4 (Tailwind's h-12 = 3rem = 48px)
          className="w-14 h-12 object-contain rounded-lg"
        />

        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          The Sky Line Production
        </h2>
      </div>

      {/* Links */}
      <div className="flex gap-6 ml-auto items-center">
        <Link
          href="/"
          className="relative text-gray-800 font-medium text-base py-2 group"
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </Link>

        <Link
          href="/about"
          className="relative text-gray-800 font-medium text-base py-2 group"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Services Dropdown */}
        <div className="relative group">
          <button className="relative text-gray-800 font-medium text-base py-2 group-hover:text-blue-600 transition">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </button>

          {/* Dropdown */}
          <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <Link
              href="/services/graphic-design"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Graphic Design
            </Link>
            <Link
              href="/services/social-media-design"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Social Media Design
            </Link>
            <Link
              href="/services/video-editing"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Video Editing
            </Link>
          </div>
        </div>

        <Link
          href="#portfolio"
          className="relative text-gray-800 font-medium text-base py-2 group"
        >
          Portfolio
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </Link>

        <Link
          href="#contact"
          className="relative text-gray-800 font-medium text-base py-2 group"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </div>
    </nav>
  );
}
