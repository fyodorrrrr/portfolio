"use client";

import { useEffect, useRef, useState } from "react";

export default function Mascot() {
  const mascotRef = useRef(null);
  const [hopping, setHopping] = useState(false);

  useEffect(() => {
    const mascot = mascotRef.current;
    let visible = false;
    const updatePlayback = () => {
      mascot.dataset.active = String(visible && !document.hidden);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    });

    observer.observe(mascot);
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
    };
  }, []);

  return (
    <button
      ref={mascotRef}
      type="button"
      className="masthead-mascot"
      data-hopping={hopping || undefined}
      aria-label={hopping ? "Put mascot back to sleep" : "Make mascot hop"}
      aria-pressed={hopping}
      onClick={(event) => {
        if (event.detail === 0 || window.matchMedia("(hover: none), (pointer: coarse)").matches) {
          setHopping((value) => !value);
        }
      }}
      onBlur={() => setHopping(false)}
    />
  );
}
