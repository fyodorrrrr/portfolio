"use client";

import { useState, useEffect, useRef } from "react";
import SocialLinks from "./SocialLinks";

const navItems = [
  { id: "home", label: "home" },
  { id: "about", label: "about" },
  { id: "background", label: "background" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const scrollingRef = useRef(false);

  const handleScroll = () => {
    if (scrollingRef.current) return;
    const scrollPosition = window.scrollY + 140;

    let current = navItems[0].id;
    for (const item of navItems) {
      const element = document.getElementById(item.id);
      if (element && element.offsetTop <= scrollPosition) {
        current = item.id;
      }
    }
    setActiveSection(current);
  };

  useEffect(() => {
    let timeout;
    const throttledScroll = () => {
      if (timeout) return;
      timeout = setTimeout(() => {
        handleScroll();
        timeout = null;
      }, 100);
    };

    window.addEventListener("scroll", throttledScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(timeout);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    setActiveSection(sectionId);
    scrollingRef.current = true;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      scrollingRef.current = false;
    }, 1000);
    setIsOpen(false);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <div className="topbar">
      <button onClick={(e) => handleNavClick(e, "home")} className="topbar-mark" aria-label="Go to home">
        jose<span>.</span>
      </button>

      <nav className="topbar-index">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            className={activeSection === item.id ? "active" : ""}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="topbar-actions">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="eyebrow hover:text-[var(--rust)] transition-colors duration-200"
        >
          Résumé ↗
        </a>
        <SocialLinks className="flex gap-4 social" iconClassName="w-[17px] h-[17px]" />
        <span className="eyebrow">Manila, PH — GMT+8</span>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-toggle"
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

      {isOpen && (
        <div className="mobile-panel">
          <nav className="mobile-panel-index">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={activeSection === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="eyebrow hover:text-[var(--rust)] transition-colors duration-200"
          >
            Résumé ↗
          </a>
          <SocialLinks className="flex gap-5" />
        </div>
      )}
    </div>
  );
}
