"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

let beginTransition = null;

// Retain the link API while replacing the curtain with a true route crossfade.
export function startCurtain(href, navigate) {
  return beginTransition?.(href, navigate) ?? false;
}

export default function PageCurtain() {
  const pathname = usePathname();
  const overlayRef = useRef(null);
  const pendingRef = useRef(false);
  const animationsRef = useRef([]);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const reset = () => {
      clearTimeout(timeoutRef.current);
      animationsRef.current.forEach((animation) => animation.cancel());
      animationsRef.current = [];
      overlayRef.current?.replaceChildren();
      pendingRef.current = false;
    };
    beginTransition = (href, navigate) => {
      const target = new URL(href, window.location.href);
      const content = document.getElementById("route-content");
      const overlay = overlayRef.current;
      if (target.origin !== window.location.origin || target.pathname === window.location.pathname ||
          pendingRef.current || !content || !overlay || !content.animate ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;

      reset();
      const snapshot = content.cloneNode(true);
      snapshot.removeAttribute("id");
      snapshot.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"));
      snapshot.querySelectorAll("dialog").forEach((node) => node.remove());
      snapshot.style.transform = `translateY(${-window.scrollY}px)`;
      snapshot.style.pointerEvents = "none";
      overlay.append(snapshot);
      pendingRef.current = true;
      timeoutRef.current = setTimeout(reset, 5000);
      try { navigate(); } catch { reset(); return false; }
      return true;
    };
    return () => { beginTransition = null; reset(); };
  }, []);

  useEffect(() => {
    if (!pendingRef.current) return;
    const content = document.getElementById("route-content");
    const snapshot = overlayRef.current?.firstElementChild;
    if (!content || !snapshot) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timing = { duration: reduced ? 0 : 850, easing: "cubic-bezier(.22, .68, .2, 1)" };
    const outgoing = snapshot.animate(
      [{ opacity: 1, filter: "blur(0px)" }, { opacity: 0, filter: "blur(6px)" }],
      { ...timing, fill: "forwards" }
    );
    const incoming = content.animate(
      [{ opacity: 0, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)" }], timing
    );
    animationsRef.current = [outgoing, incoming];
    Promise.allSettled([outgoing.finished, incoming.finished]).then(() => {
      if (animationsRef.current[0] !== outgoing) return;
      outgoing.cancel();
      incoming.cancel();
      animationsRef.current = [];
      overlayRef.current?.replaceChildren();
      pendingRef.current = false;
      clearTimeout(timeoutRef.current);
    });
  }, [pathname]);

  return <div ref={overlayRef} className="route-snapshot" aria-hidden="true" inert />;
}
