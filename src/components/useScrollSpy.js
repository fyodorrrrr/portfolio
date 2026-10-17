import { useEffect, useState } from "react";

// Tracks which element matching `selector` is crossing the middle of the viewport and
// returns its data-spy value. Gaps between elements leave none in the band, so the last
// active one stays lit. Used with a pinned index (see .pin-index in globals.css).
export function useScrollSpy(selector, initial) {
  const [active, setActive] = useState(initial);

  useEffect(() => {
    const targets = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.dataset.spy);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [selector]);

  return [active, setActive];
}

// Index-link click handler: smooth-scrolls the target to the middle of the viewport.
export function scrollToTarget(event, id, onActive, value) {
  event.preventDefault();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
  onActive(value);
}
