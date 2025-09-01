"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Function to handle scrolling and update active section
  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100; // Add offset for navbar

    // Find the current section based on scroll position
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get navbar height to offset scroll position
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
    }
    setIsOpen(false);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <>
      {/* Mobile Navbar - Full Width at Top */}
      <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-sm shadow-md z-50 md:hidden font-sans">
        <div className="flex justify-between items-center px-4 py-3">
          {/* Logo/Brand */}
          <div className="text-white font-bold text-lg font-heading">
            Jose
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
            <ul className="flex flex-col p-4 space-y-3 text-gray-300 font-sans">
              <li>
                <button 
                  onClick={(e) => handleNavClick(e, 'home')}
                  className={`block py-2 px-2 text-left w-full transition duration-300 ${
                    activeSection === 'home' 
                      ? 'text-emerald-400 font-medium' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick(e, 'about')}
                  className={`block py-2 px-2 text-left w-full transition duration-300 ${
                    activeSection === 'about' 
                      ? 'text-emerald-400 font-medium' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick(e, 'skills')}
                  className={`block py-2 px-2 text-left w-full transition duration-300 ${
                    activeSection === 'skills' 
                      ? 'text-emerald-400 font-medium' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick(e, 'projects')}
                  className={`block py-2 px-2 text-left w-full transition duration-300 ${
                    activeSection === 'projects' 
                      ? 'text-emerald-400 font-medium' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className={`block py-2 px-2 text-left w-full transition duration-300 font-heading ${
                    activeSection === 'contact' 
                      ? 'text-emerald-400 font-medium' 
                      : 'text-gray-300 hover:text-emerald-400'
                  }`}
                >
                  Contact Me
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Desktop Navbar - Centered with Contact Button */}
      <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-sm shadow-md z-50 hidden md:block font-sans">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <div className="text-white font-bold text-xl font-heading">
              Jose
            </div>

            {/* Navigation Links - Centered */}
            <ul className="flex space-x-12 text-gray-300 text-sm tracking-wide">
              <li>
                <button 
                  onClick={(e) => handleNavClick(e, 'home')}
                  className={`relative py-2 transition duration-300 ${
                    activeSection === 'home' 
                      ? 'text-emerald-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Home
                  {activeSection === 'home' && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400 rounded-full"></span>
                  )}
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick(e, 'about')}
                  className={`relative py-2 transition duration-300 ${
                    activeSection === 'about' 
                      ? 'text-emerald-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  About
                  {activeSection === 'about' && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400 rounded-full"></span>
                  )}
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick(e, 'skills')}
                  className={`relative py-2 transition duration-300 ${
                    activeSection === 'skills' 
                      ? 'text-emerald-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Skills
                  {activeSection === 'skills' && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400 rounded-full"></span>
                  )}
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick(e, 'projects')}
                  className={`relative py-2 transition duration-300 ${
                    activeSection === 'projects' 
                      ? 'text-emerald-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Projects
                  {activeSection === 'projects' && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400 rounded-full"></span>
                  )}
                </button>
              </li>
            </ul>

            {/* Contact Button */}
            <button
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`px-5 py-2 border transition-colors duration-300 text-sm font-medium font-heading rounded-full ${
                activeSection === 'contact'
                  ? 'bg-emerald-500 text-white border-emerald-500'
                  : 'border-emerald-400 text-stone-800 bg-emerald-400 hover:bg-emerald-200'
              }`}
            >
              Contact Me
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}