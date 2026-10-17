"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Ease wheel input on the document itself so sticky elements, scroll observers,
// native anchors, and route restoration keep their normal browser behavior.
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let dispose;

    const enable = () => {
      dispose?.();
      dispose = undefined;
      if (reducedMotion.matches || !finePointer.matches) return;

      let frame = null;
      let target = window.scrollY;
      let position = window.scrollY;
      let lastWritten = window.scrollY;
      let lastTime = 0;

      const stop = () => {
        if (frame !== null) cancelAnimationFrame(frame);
        frame = null;
        target = window.scrollY;
        position = window.scrollY;
      };
      const limit = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const locked = () => (
        getComputedStyle(document.documentElement).overflowY === "hidden"
        || getComputedStyle(document.body).overflowY === "hidden"
        || Boolean(document.querySelector("dialog[open]"))
      );

      const tick = (time) => {
        if (locked()) {
          stop();
          return;
        }
        const elapsed = Math.min(time - lastTime, 64);
        lastTime = time;
        target = Math.max(0, Math.min(target, limit()));
        const distance = target - position;
        const next = Math.abs(distance) < .5
          ? target
          : position + distance * (1 - Math.exp(-elapsed / 90));
        position = next;
        window.scrollTo({ top: next, behavior: "instant" });
        lastWritten = window.scrollY;
        if (Math.abs(target - position) < .5) {
          window.scrollTo({ top: target, behavior: "instant" });
          lastWritten = window.scrollY;
          frame = null;
          return;
        }
        frame = requestAnimationFrame(tick);
      };

      const handleWheel = (event) => {
        if (!event.cancelable || event.defaultPrevented || event.ctrlKey || event.metaKey
          || event.shiftKey || Math.abs(event.deltaX) >= Math.abs(event.deltaY) || locked()) {
          stop();
          return;
        }

        // Let dialogs, text areas, and any nested scroll container scroll natively.
        let element = event.target instanceof Element ? event.target : null;
        while (element && element !== document.body && element !== document.documentElement) {
          const overflow = getComputedStyle(element).overflowY;
          if (element.matches("[data-native-scroll]")
            || (/auto|scroll|overlay/.test(overflow) && element.scrollHeight > element.clientHeight)) {
            stop();
            return;
          }
          element = element.parentElement;
        }

        const multiplier = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
        if (frame === null) {
          target = window.scrollY;
          position = window.scrollY;
          lastWritten = window.scrollY;
          lastTime = performance.now();
          // Interrupt a browser-driven anchor animation before taking wheel control.
          window.scrollTo({ top: window.scrollY, behavior: "instant" });
        }
        target = Math.max(0, Math.min(target + event.deltaY * multiplier, limit()));
        event.preventDefault();
        if (frame === null) frame = requestAnimationFrame(tick);
      };

      const handleNativeScroll = () => {
        if (frame !== null && Math.abs(window.scrollY - lastWritten) > 2) stop();
      };
      const handleKey = (event) => {
        if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " ", "Tab", "Escape"].includes(event.key)) stop();
      };

      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("scroll", handleNativeScroll, { passive: true });
      window.addEventListener("pointerdown", stop, { passive: true });
      window.addEventListener("keydown", handleKey);
      window.addEventListener("resize", stop);
      window.addEventListener("blur", stop);
      document.addEventListener("visibilitychange", stop);

      dispose = () => {
        stop();
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("scroll", handleNativeScroll);
        window.removeEventListener("pointerdown", stop);
        window.removeEventListener("keydown", handleKey);
        window.removeEventListener("resize", stop);
        window.removeEventListener("blur", stop);
        document.removeEventListener("visibilitychange", stop);
      };
    };

    enable();
    reducedMotion.addEventListener("change", enable);
    finePointer.addEventListener("change", enable);
    return () => {
      dispose?.();
      reducedMotion.removeEventListener("change", enable);
      finePointer.removeEventListener("change", enable);
    };
  }, [pathname]);

  return null;
}
