"use client";

import { useEffect, useRef } from "react";

// Plays a pixel sprite's frame animation once: on mouse hover, or on tap/click for touch screens.
// The sprite is decorative, so this adds no tab stop; the words keep the meaning.
export default function SpriteTrigger({ children }) {
  const ref = useRef(null);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const play = () => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("is-playing");
    void el.offsetWidth; // restart the animation if it is already running
    el.classList.add("is-playing");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => el.classList.remove("is-playing"), 1100);
  };

  return (
    <span
      ref={ref}
      className="about-keep"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") play();
      }}
      onClick={play}
    >
      {children}
    </span>
  );
}
