"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 
  h-10 w-[90%] sm:w-1/2 lg:w-1/4 
  bg-black/80 backdrop-blur-sm rounded-full shadow-md z-50 
  flex justify-center items-center px-4">
      <div className="max-w-6xl mx-auto px-2 py-3 flex justify-between items-center space-x-2">
        {/* Logo / Name */}
        {/* <h1 className="text-xl font-bold">JOSE-DEV</h1> */}

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-300 text-sm">
          <li>
            <Link href="#home" className="hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-white transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-white transition">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-white transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-white transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
