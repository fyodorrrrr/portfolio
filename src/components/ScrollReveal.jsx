
"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const showElement = (element) => {
      element.classList.add("in");
      element.classList.remove("reveal-pending", "reveal-ready");
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (
      reducedMotion.matches ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach(showElement);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showElement(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        showElement(element);
      } else {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
