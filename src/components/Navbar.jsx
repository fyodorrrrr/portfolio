"use client";

import { useState, useEffect, useRef } from "react";
import SocialLinks from "./SocialLinks";

const navItems = [
  { id: "home", label: "home" },
  { id: "about", label: "about" },
  { id: "projects", label: "projects" },
  { id: "credentials", label: "credentials" },
  { id: "contact", label: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const scrollingRef = useRef(false);
  const topbarRef = useRef(null);
  const toggleRef = useRef(null);
  const firstMobileLinkRef = useRef(null);

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

  useEffect(() => {
    if (!isOpen) return;

    const mainEl = document.querySelector("main");
    mainEl?.setAttribute("inert", "");
    firstMobileLinkRef.current?.focus();

    const closeAndRefocus = () => {
      setIsOpen(false);
      toggleRef.current?.focus();
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeAndRefocus();
    };
    const handleClickOutside = (e) => {
      if (topbarRef.current && !topbarRef.current.contains(e.target)) {
        closeAndRefocus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      mainEl?.removeAttribute("inert");
    };
  }, [isOpen]);

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
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <header className="topbar" ref={topbarRef}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="topbar-inner">
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
          <SocialLinks className="flex gap-4 social" iconClassName="w-[17px] h-[17px]" />
        </div>

        <button
          ref={toggleRef}
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
      </div>

      {isOpen && (
        <div className="mobile-panel">
          <nav className="mobile-panel-index">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                ref={index === 0 ? firstMobileLinkRef : undefined}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={activeSection === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <SocialLinks className="flex gap-5" />
        </div>
      )}
    </header>
  );
}
