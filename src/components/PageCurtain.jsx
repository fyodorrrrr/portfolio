"use client";

import { useEffect, useRef } from "react";

const COVER_MS = 450;
const REVEAL_MS = 450;
const EASE = "cubic-bezier(.2, .7, .2, 1)";

// Registered by the mounted <PageCurtain />; CurtainLink calls it through startCurtain().
let runCurtain = null;

// Resolves once the browser URL reflects the new route (the app router commits the URL
// and the new UI together), with a timeout so a slow route never leaves the curtain stuck.
function waitForRoute(pathname, timeout = 4000) {
  return new Promise((resolve) => {
    const start = performance.now();
    const check = () => {
      if (window.location.pathname === pathname) {
        setTimeout(resolve, 120);
      } else if (performance.now() - start > timeout) {
        resolve();
      } else {
        setTimeout(check, 16);
      }
    };
    check();
  });
}

// Wipes the green curtain across the page, runs `navigate`, then wipes it off. Returns false when
// the curtain can't run (not mounted, mid-run, reduced motion) so the caller navigates normally.
export function startCurtain(href, navigate) {
  if (!runCurtain) return false;
  return runCurtain(href, navigate);
}

export default function PageCurtain() {
  const curtainRef = useRef(null);
  const busyRef = useRef(false);

  useEffect(() => {
    runCurtain = (href, navigate) => {
      const el = curtainRef.current;
      if (!el || busyRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return false;
      }
      busyRef.current = true;
      const pathname = new URL(href, window.location.href).pathname;

      (async () => {
        try {
          el.style.visibility = "visible";
          await el.animate(
            [{ transform: "translateX(-100%)" }, { transform: "translateX(0)" }],
            { duration: COVER_MS, easing: EASE, fill: "forwards" }
          ).finished;
          navigate();
          await waitForRoute(pathname);
          await el.animate(
            [{ transform: "translateX(0)" }, { transform: "translateX(100%)" }],
            { duration: REVEAL_MS, easing: EASE, fill: "forwards" }
          ).finished;
        } catch {
          navigate();
        } finally {
          el.getAnimations().forEach((animation) => animation.cancel());
          el.style.visibility = "hidden";
          busyRef.current = false;
        }
      })();
      return true;
    };
    return () => {
      runCurtain = null;
    };
  }, []);

  return <div ref={curtainRef} className="page-curtain" aria-hidden="true" />;
}
