"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for hamburger/close

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 px-4 md:px-12 flex items-center bg-white shadow-md z-50">
      {/* Logo + Heading */}
      <div className="flex items-center gap-2">
        <Image
          src="/images/logo.png"
          alt="SLP Logo"
          width={48}
          height={40}
          className="w-12 h-10 object-contain rounded-lg"
        />
        <h2 className="text-sm sm:text-base md:text-xl font-semibold text-gray-800">
          The SkyLine Production
        </h2>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 ml-auto items-center">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-medium text-base py-2 group transition-colors duration-300
                ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-800 hover:text-blue-600"
                }`}
            >
              {link.name}

              {/* Top underline */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 origin-left
                  ${"w-0 group-hover:w-full"}`}
              ></span>

              {/* Bottom underline */}
              <span
                className={`absolute bottom-[-4px] right-0 h-0.5 bg-blue-500 transition-all duration-300 origin-right
                  ${"w-0 group-hover:w-full"}`}
              ></span>
            </Link>
          );
        })}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="ml-auto md:hidden text-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-start p-6 gap-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`w-full font-medium text-lg py-2 transition-colors duration-300 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-800 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
