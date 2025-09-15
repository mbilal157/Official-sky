"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-700">
            Skyline Production
          </h3>
          <p className="text-gray-800">
            Bringing creativity and technology together — Skyline Production is
            your partner for Videography, Design, Content, and Development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-700">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-700">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-700">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-gray-700">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-700">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact and Socials */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-700">Contact Us</h3>
          <p className="text-gray-700 mb-4">
            Email: info@skylineproduction.com
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-700">
              <Facebook />
            </a>
            <a href="#" className="hover:text-gray-700">
              <Instagram />
            </a>
            <a href="#" className="hover:text-gray-700">
              <Twitter />
            </a>
            <a
              href="mailto:info@skylineproduction.com"
              className="hover:text-gray-700"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Skyline Production. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
