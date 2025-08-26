"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar - Full Width at Top */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm shadow-md z-50 md:hidden">
        <div className="flex justify-between items-center px-4 py-3">
          {/* Logo/Brand */}
          <div className="text-white font-bold text-lg">
            Portfolio
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white transition p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="bg-black/90 backdrop-blur-md border-t border-gray-700">
            <ul className="flex flex-col p-4 space-y-3 text-gray-300">
              <li>
                <Link 
                  href="#home" 
                  className="block hover:text-white transition duration-200 py-2 px-2"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="#about" 
                  className="block hover:text-white transition duration-200 py-2 px-2"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="#skills" 
                  className="block hover:text-white transition duration-200 py-2 px-2"
                  onClick={() => setIsOpen(false)}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  href="#projects" 
                  className="block hover:text-white transition duration-200 py-2 px-2"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="block hover:text-white transition duration-200 py-2 px-2"
                  onClick={() => setIsOpen(false)}
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Desktop Navbar - Positioned on Right */}
      <nav className="fixed top-4 sm:top-7 right-4 sm:right-20 h-12 sm:h-14 w-auto
        bg-black/80 backdrop-blur-sm rounded-full shadow-md z-50 
        justify-center items-center px-3 sm:px-4 hidden md:flex">
        <div className="px-2 py-3 flex justify-between items-center space-x-2">
          {/* Navigation Links */}
          <ul className="flex space-x-4 lg:space-x-6 text-gray-300 text-xs sm:text-sm">
            <li>
              <Link href="#home" className="hover:text-white transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-white transition duration-200">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-white transition duration-200">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-white transition duration-200">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-white transition duration-200">
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}