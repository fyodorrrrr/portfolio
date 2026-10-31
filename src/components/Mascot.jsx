"use client";

import { useEffect, useRef } from "react";

export default function Mascot() {
  const mascotRef = useRef(null);

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

  return <span ref={mascotRef} className="masthead-mascot" aria-hidden="true" />;
}
