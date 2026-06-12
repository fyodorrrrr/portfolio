"use client";

import { useState, useEffect, useRef } from "react";

const navItems = [
  { id: "home", label: "home" },
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
];

const navFontStyle = {
  fontFamily: 'Helixa, Arial, Helvetica, sans-serif',
  letterSpacing: '-0.02em',
};

const logoFontStyle = {
  fontFamily: 'Helixa, Arial, Helvetica, sans-serif',
  letterSpacing: '-0.05em',
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrollingRef = useRef(false);

  // Function to handle scrolling and update active section
  const handleScroll = () => {
    // Skip scroll handling when programmatically scrolling
    if (scrollingRef.current) return;
    
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

  // Add scroll event listener with throttling
  useEffect(() => {
    // Throttle the scroll event to improve performance
    let timeout;
    const throttledScroll = () => {
      if (timeout) return;
      
      timeout = setTimeout(() => {
        handleScroll();
        timeout = null;
      }, 100); // Throttle to once every 100ms
    };
    
    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      clearTimeout(timeout);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Set active section immediately on click
      setActiveSection(sectionId);
      
      // Disable scroll handling temporarily
      scrollingRef.current = true;
      
      // Get navbar height to offset scroll position
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Re-enable scroll handling after animation completes
      setTimeout(() => {
        scrollingRef.current = false;
      }, 1000); // Typical smooth scroll takes ~1s
    }
    setIsOpen(false);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-transparent font-sans md:hidden">
        <div className="flex items-start justify-between px-0 pt-0 pb-2">
          <button
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-left font-bold leading-none text-black"
            style={{ ...logoFontStyle, fontSize: '1.35rem', marginLeft: '0', marginTop: '0' }}
            aria-label="Go to home"
          >
            JoseDev
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-2 text-black transition hover:bg-black/5"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="px-0 pb-4 pt-2">
            <div className="mx-auto flex max-w-xs flex-col items-center gap-0.5 rounded-2xl bg-white/85 px-4 py-4 text-center backdrop-blur-sm shadow-sm ring-1 ring-black/5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`group relative w-full py-2 text-center text-[1.15rem] font-semibold transition sm:text-[1.25rem] ${
                    activeSection === item.id
                      ? 'text-black'
                      : 'text-black/70 hover:text-black'
                  }`}
                  style={navFontStyle}
                >
                  {item.label}
                  <span className="absolute left-1/2 bottom-0 h-px w-0 -translate-x-1/2 bg-[#111111] transition-all duration-200 group-hover:w-full" />
                </button>
              ))}
                <button
                  onClick={(e) => handleNavClick(e, 'contact')}
                className={`group mt-2 flex w-full items-center justify-between rounded-full border px-4 py-3 text-left text-[1.15rem] font-semibold transition sm:text-[1.25rem] ${
                  activeSection === 'contact'
                    ? 'border-[#111111] bg-[#111111] text-white'
                    : 'border-black/10 bg-white text-[#111111] hover:bg-[#f0ede6]'
                }`}
                style={navFontStyle}
              >
                <span>Contact Me</span>
                <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                <span className="absolute left-4 right-4 bottom-2 h-px w-0 bg-[#111111] transition-all duration-200 group-hover:w-[calc(100%-2rem)]" />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 z-50 hidden w-full bg-transparent font-sans text-black md:block">
        <div className="relative flex w-full items-start px-0 pt-0 pb-2">
          <button
            onClick={(e) => handleNavClick(e, 'home')}
            className="absolute left-0 top-0 font-bold leading-none text-black"
            style={{ ...logoFontStyle, fontSize: '1.45rem', marginLeft: '0', marginTop: '0' }}
            aria-label="Go to home"
          >
            JoseDev
          </button>

          <div className="flex w-full items-start justify-center pt-1">
            <ul className="flex items-center gap-5 text-[1.1rem] font-semibold text-black sm:gap-6 lg:gap-8 lg:text-[1.5rem]">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`group relative py-1 transition ${
                      activeSection === item.id
                        ? 'text-black'
                        : 'text-black/75 hover:text-black'
                    }`}
                    style={navFontStyle}
                  >
                    {item.label}
                    <span className="absolute left-1/2 -bottom-0.5 h-px w-0 -translate-x-1/2 bg-[#111111] transition-all duration-200 group-hover:w-full" />
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`absolute right-2 top-1 flex items-center gap-2 text-[1.1rem] font-semibold transition sm:right-4 sm:top-2 lg:right-6 lg:text-[1.5rem] ${
                activeSection === 'contact'
                  ? 'text-black'
                  : 'text-black hover:opacity-70'
              }`}
              style={navFontStyle}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
              <span>contact me</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
