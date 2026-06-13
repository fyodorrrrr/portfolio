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
              {/* <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
              <span>contact me</span> */}

          <div className="flex gap-3">
            <a href="https://github.com/fyodorrrrr" target="_blank" rel="noreferrer"
              className="hover:text-[#cc5a1f] transition-colors duration-200" aria-label="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.867 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.274.098-2.656 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.382.202 2.402.1 2.656.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.135 20.175 22 16.426 22 12.012 22 6.484 17.523 2 12 2z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/jose-aquino-a16884382/" target="_blank" rel="noreferrer"
              className="hover:text-[#cc5a1f] transition-colors duration-200" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"/>
              </svg>
            </a>
            <a href="mailto:aquinojxse@gmail.com"
              className="hover:text-[#cc5a1f] transition-colors duration-200" aria-label="Email">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 12V8.99l8 6.99 8-6.99V18H4z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/jose-aquino-a16884382/" target="_blank" rel="noreferrer"
              className="hover:text-[#cc5a1f] transition-colors duration-200" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161c-.427.733-.666 1.581-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.418A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z"/>
              </svg>
            </a>
           </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
